import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './Friendin.css'

const Friendin = (props) => {
    const {img , name , salary , email ,company} = props.friend;
   
    return (
        <div className="info">
            <div className="image">
               <img src={img} alt=""/>
            </div>

            <div className="data">
              <h3>{name}</h3>
              <br/>
                <p>E-mail : {email}</p>
                <p><small>Company :{company}</small></p>
                <p><b>Salary : ${salary}</b></p>
                 <button className="add-btn" onClick={()=>props.addbtnHandler(props.friend)}>
                     <FontAwesomeIcon icon={faPlus}/> Add Friend
                     </button>
             </div>
        </div>
    );
};

export default Friendin;