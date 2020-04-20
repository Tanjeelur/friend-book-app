import React, { useState } from 'react';
import fakedata from '../../fakedata/Fakedata';
import './Friend.css'
import Friendin from '../friend-info/Friendin';
import Addlist from '../../addlist/Addlist';


const Friend = () => {
    const [friend,setFriend]=useState(fakedata);
    const [addedFriend , setAddedFriend] = useState([])
    const addbtnHandler = (friend)=>{
        const newAddedFriend=[...addedFriend , friend]
        setAddedFriend(newAddedFriend);
    }
    return (

        <div className="home-page-container">
          <div className="friend-container">
          {
               friend.map(friend=> <Friendin  
                                   friend={friend}
                                    addbtnHandler={addbtnHandler}>
                                       
                                   </Friendin>)
           }
          </div>

          <div className="added-friends-container">
           <Addlist addedFriend={addedFriend}></Addlist>
          </div>
        </div>
    );
};

export default Friend;