import React from 'react'
import SERVICE from '../data/ServiceData'
import { Link } from 'react-router-dom'


function ServiceDets() {


  return (
    <>
    <div>
      <center style={{marginBottom: 5+"vh"}}>A glimpse at the services you can request...</center>
    </div>
        {SERVICE.map((service) => {
          return (
            <div className="card" style={{width: 15+"rem", marginBottom: 2+"vw", marginLeft: 3+"vw"}}>
              <div className="card-body" key={service.id}>
                <h5 className="card-title">{service.service}</h5>
                <h6 className="card-subtitle mb-2 text-muted"><span>Ksh.{service.price}</span> ~ estimate cost</h6>
                <h6 className="card-subtitle mb-2 text-muted">Takes appr' <span>{service.duration}</span> days</h6>
                <h6 className="card-subtitle mb-2 text-muted"><span>{service.people}</span> ~ people who have used the service</h6>
                <p className="card-text">{service.description}</p>
                <Link className=""><span>Read more</span></Link>
              </div>
            </div>
          )
        })}
    </>
  )
}

export default ServiceDets;