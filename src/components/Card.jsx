import React from 'react'
import {Bookmark} from 'lucide-react'

const card = (props) => {
  return (
    <div className="box">
      <div>
                <div className="head">
          <img src={props.logo} alt="Amazon company logo" />
          <button id='save'>Save <Bookmark size={14} /> </button>
</div>

        <div className="mid">
          <h3>{props.companyName} <span>{props.date}</span> </h3>
          <h2>{props.userPost}</h2>
          <div className='tag'>
            <h4>{props.time}</h4>
            <h4>{props.level}</h4>
          </div>
</div>
      </div>


        <div className="footer">
          <div>
            <h3>{props.userPay}</h3>
            <p>{props.loc}</p>
          </div>
          <button>Apply Now!</button>
        </div>



      </div>
  )
}

export default card
