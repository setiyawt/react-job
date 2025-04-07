import { useState, useEffect } from 'react'
import ListingJob from './ListingJob.jsx';
import Spinner from './Spinner.jsx';

function ListingJobs( {isHome= false}) { //apakah dia ada dihalaman home? ternyata false berati engga
    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(true)

    const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs'

    useEffect(() => {
      const fetchData = async () => {
        try{
          const data = await fetch(apiUrl)
          const fetchJobs = await data.json();
          setJobs(fetchJobs)
        } catch (error){
          console.log("Failed fecthing data", error)
        } finally {
          setLoading(false)
        }
      };
      fetchData();
      
    }, [])

  return (
    <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
            <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? 'Recent job' : 'Browse Jobs'}
            </h2>
            {loading ? (
              <Spinner isLoading={loading}/>
            ) : <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* <!-- Job Listing --> */}
            { jobs.map((job) => (
                <ListingJob job= {job} key={job.id}/>
            ))}
            
            </div>}
        </div>
    </section>
  )
}

export default ListingJobs
