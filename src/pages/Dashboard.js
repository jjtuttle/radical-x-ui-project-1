import React from 'react'
import Sidebar from '../components/Sidebar'
import '../styles/dashboard.css';



function Dashboard() {


  return (
    <div className='dashboard-container' >
      <Sidebar />
      <div className='internship-container'>
        {/* Internship insights */}
        <h2>Internships</h2>
      </div>
    </div>
  )
}

export default Dashboard