import React from 'react'
import Hero from '../components/Hero'
import HomeCard from '../components/HomeCard'
import ListingJobs from '../components/ListingJobs'
import ViewAllJob   from '../components/ViewAllJob'

const HomePage = () => {
  return (
    <>
        <Hero />
        <HomeCard />
        <ListingJobs isHome={true}/>
        <ViewAllJob />
    </>
  )
}

export default HomePage
