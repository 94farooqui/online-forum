import React from 'react'
import PollCard from '../Polls/PollCard'

const TrendSection = () => {
  return (
    <div className='w-full  p-4'>
      <h2 className='text-xl font-semibold text-slate-700 mb-2'>Trending</h2>
      <PollCard/>
    </div>
  )
}

export default TrendSection