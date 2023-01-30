import React, { useState } from 'react'
import UpdateService from '../Forms/UpdateService'
import { Dialog } from '@material-ui/core'


function ServiceList({ id, onDelete, onUpdate, service, location, address, email, contact_info, description }) {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleDelete = () => {
    fetch(`/services/${id}`, {
      method: "DELETE",
    }).then((resp) => {
      if (resp.ok) {
        onDelete(id)
      }
    })
  }

  return (
    <div>
      <div className="logs">
        <ul>
          <h6><span>Service: </span>{service}</h6>
          <li><span>Property: </span>{location}</li>
          <li><span>Service: </span>{address}</li>
          <li><span>Contact info: </span>{contact_info}</li>
          {/* <li><span>Email address: </span>{email}</li> */}
          <li><span>Description of service: </span>{description}</li>
          <div>
            <button onClick={handleOpen}>Edit Request</button>
            <button onClick={handleDelete}>Cancel request</button>
          </div>
          
          <Dialog open={open} onClose={handleClose}>
            <UpdateService id={id} onUpdate={onUpdate} handleClose={handleClose}/>
          </Dialog>
        </ul>
      </div>
    </div>
  )
}

export default ServiceList