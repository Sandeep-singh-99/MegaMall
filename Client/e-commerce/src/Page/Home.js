import React from 'react'
import CarouselSection from '../components/CarouselSection'
import CategoryList from '../components/CategoryList'

function Home() {
  return (
   <div className='px-5 py-2 bg-gray-100 space-y-5'>
   <CategoryList/>
   <CarouselSection/>
   </div>
  )
}

export default Home