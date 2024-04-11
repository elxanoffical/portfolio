import React from 'react'
import './MyWork.css'
import pattern from '../../assets/theme_pattern.svg'
import mywork from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My lates work</h1>
            <img src={pattern} alt="" />
        </div>
        <div className="mywork-container">
            {mywork.map((work,index)=>{
                return <img key={index} src={work.w_img} alt="" />
            })}
        </div>
        <div className="mywork_showmore">
            <p>Show More</p>
            <img src={arrow_icon} alt="" />
        </div>
    </div>
  )
}

export default MyWork