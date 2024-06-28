import React from 'react';

function SlillList({src , skill}) {
  return (
    <span>
        <img src={src} alt="Check-Mark-Icon" />
        <p>{skill}</p>
    </span>
  )
}

export default SlillList;