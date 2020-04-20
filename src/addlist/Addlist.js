import React from 'react';

const Addlist = (props) => {
    const addedFriend = props.addedFriend
    const total = addedFriend.reduce((total,addedFriend)=>total+addedFriend.salary,0)
    return (
        <div>
            <h3>Pending requests : {addedFriend.length}</h3>
            <p>
            Total Salary : $ {total}
            </p>
        </div>
    );
};

export default Addlist;