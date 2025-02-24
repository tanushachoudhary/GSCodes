import React from 'react'
import LeaderBoard from '../components/LeaderBoard'
import Header from '../components/Header'
import Footer from '../components/Footer'

function LeaderBoardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow flex justify-center bg-gray-500">
        <div className="w-full p-30">
          <LeaderBoard />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default LeaderBoardPage
