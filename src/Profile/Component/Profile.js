import React from 'react'
import PropTypes from 'prop-types'; 
import { propTypes } from 'react-bootstrap/esm/Image';

function Profile({fullName,bio,children,handleName,profession}) {
  return (
    <div>
       {children}
       <h2>{fullName}</h2> 
       <h2>{profession}</h2>
       <h5>{bio}</h5>
       
       
       <button onClick={()=>handleName(`${fullName}`)}>Click</button>
    </div>
  )
}
Profile.prototype={
    handleName:propTypes.func,
    fullName:propTypes.string,
    bio:propTypes.string,
    profession:propTypes.string
 
}
Profile.defaultProps={
    profession:"hhhhhhhhh"
}

export default Profile