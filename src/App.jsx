import { 
    createBrowserRouter, 
    Route,
    createRoutesFromElements, 
    RouterProvider, 
} 
from 'react-router-dom'
import React from 'react'
import { useParams } from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import HomePage from './pages/HomePage'
import JobPage from './pages/JobPage'
import JobDetailPage, { jobLoader } from './pages/JobDetailPage'
import NotFoundPage from './pages/NotFoundPage'
import AddJobPage from './pages/AddJobPage'



const App = () => {
  // POST
  const addJob = async (newJob) => {
    const fetchData = await fetch('/api/jobs', {
      method: 'POST',
      header: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob)
    });
    return;
  }

  //DELETE
  const deleteJob = async (id) => {
    const fetchDelete = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    });
    return;
  }
  
  const router = createBrowserRouter(createRoutesFromElements(
    /* ini biar seluruh path itu ada MainLayoutnya, 
    mainLayout itu isinya navbar, navbar kan harus ada di setiap page */
    <Route path="/" element={<MainLayout/>}>
      <Route index element={<HomePage/>} />
      <Route path="/jobs" element={<JobPage/>}/>
      <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob}/>}/>
      <Route path="/jobs/:id" element={<JobDetailPage deleteJob={deleteJob}/>} loader={jobLoader}/>
      <Route path="*" element={<NotFoundPage/>}/>
    </Route>
  
  ))

  return <RouterProvider router={router}/>
}

export default App
