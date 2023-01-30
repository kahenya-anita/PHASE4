import React from 'react'



function Card (props) {
  return (
    <>
    {props.details.map((value, index) =>(
    <div key={index} className='col style' style={{margin: 2+"vh"}}>
      <div className="card" key={index} style={{width: 18 + 'rem'}}>
        <img src={value.img} style={{height:17 + 'rem', width:18 + 'rem'}} alt="House" className="image"/>
        <div className="card-body" style={{maxHeight: 10+"rem", minHeight: 8+"rem"}}>
          <h6>Property: <span>{value.address}</span></h6>
          <h6>Service: <span>{value.service_type}</span></h6>
          <h6>Year: <span>{value.year}</span></h6>
        </div>
      </div>
    </div>
    ))}
    </>
  )
}

export default Card