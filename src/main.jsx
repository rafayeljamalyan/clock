import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
setInterval(() => {

  const hoursArrow = document.querySelector('.hours')
  const minutessArrow = document.querySelector('.minutes')
  const secoundsArrow = document.querySelector('.secounds')
  const deg = 6


  const day = new Date()
  const hours = day.getHours() * 30

  const minutes = day.getMinutes() * deg

  const secounds = day.getSeconds() * deg

  hoursArrow.style.transform = `rotateZ(${hours + (minutes / 12)}deg)`
  minutessArrow.style.transform = `rotateZ(${minutes}deg)`
  secoundsArrow.style.transform = `rotateZ(${secounds}deg)`
}, 0)


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="clock">
    <div className="hour">
      <div className="hours">

      </div>
    </div>


    <div className="minute">
      <div className="minutes"></div>
    </div>

    <div className="secound">
      <div className="secounds"></div>
    </div>
  </div>
)
