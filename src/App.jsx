import React from 'react'
import Cashbook from './components/Cashbook'
import List from './components/List'
import PieChart from './components/CatChart'

const App = () => {
  return (
  <div className="min-h-screen bg-gray-50 p-6">
  <div className="max-w-5xl mx-auto flex flex-col gap-6">
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <Cashbook />
    </div>
  </div>
</div>

  )
}

export default App