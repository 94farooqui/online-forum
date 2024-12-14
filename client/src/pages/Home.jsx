import React from 'react'
import Sidebar from '../components/Home/Sidebar'
import Stories from '../components/Home/Stories'
import ActionBar from '../components/Home/ActionBar'
import FeedContainer from '../components/Home/FeedContainer'
import TrendSection from '../components/Home/TrendSection'

const Home = () => {
  return (
    <div className="w-screen max-w-[1400px] mx-auto">
      <div className="grid grid-cols-[260px_auto_300px] gap-x-[20px]">
        <Sidebar />
        <div className='flex justify-center'>
          <div className="w-[600px] flex flex-col gap-4 py-4">
            <Stories />
            <ActionBar />
            <FeedContainer />
          </div>
        </div>

        <TrendSection />
      </div>
    </div>
  );
}

export default Home