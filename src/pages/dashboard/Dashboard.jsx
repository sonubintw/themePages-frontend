import React from 'react'
import Card from '../../components/loginCard/Card'
import "./Dashboard.scss"
import ThemeChanger from '../../components/themeChanger/ThemeChanger'

const Dashboard = () => {
  const handleCircleClick = (color) => {
    console.log(`${color}`);
  };

  return (
    <div className='dashboard'>
        <Card>
          <h1>DashBoard</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, neque tempora dolor esse earum consectetur cumque magnam alias nobis. Saepe odit dolores deserunt veritatis repellat accusamus esse laboriosam sit quas?</p>
        </Card>
        <div className='circle__container'>
        <ThemeChanger color="orange" onCircleClick={handleCircleClick} />
        <ThemeChanger color="blue" onCircleClick={handleCircleClick} />
        <ThemeChanger color="green" onCircleClick={handleCircleClick} />
      </div>
    </div>
  )
}

export default Dashboard