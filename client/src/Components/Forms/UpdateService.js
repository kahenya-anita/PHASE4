import React, { useState } from 'react'
import { TextField, Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "Center",
    alignItems: "center",
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: "300px"
    },

    '& .MuiButtonBase-root': {
      margin: theme.spacing(2)
    }
  }
}));

function UpdateService({ id, handleClose, onUpdate}) {

  const classes = useStyles();
  const [service, setService] = useState()
  const [location, setLocation] = useState()
  const [contact, setContact] = useState()
  const [address, setAddress] = useState()
  const [description, setDescription] = useState()


  const updatedContents = {
    service: service,
    location: location,
    contact_info: contact,
    address: address,
    description: description
  }

  const handleEdit = (e) => {
    e.preventDefault()

    fetch(`/services/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedContents)
    })
    .then((resp) => resp.json())
    .then((data) => onUpdate(data))

    handleClose()
  }

  return (
    <form className={classes.root} onSubmit={handleEdit}>
        <TextField 
          label="Type of service" 
          variant="filled" 
          value={service}
          onChange = {(e) => setService(e.target.value)}
        />

        <TextField 
          label="Location of building" 
          variant="filled" 
          value={location}
          onChange = {(e) => setLocation(e.target.value)}
        />

        <TextField 
          label="Address information" 
          variant="filled" 
          type="text" 
          value={address}
          onChange = {(e) => setAddress(e.target.value)}
        />

        <TextField 
          label="Phone number" 
          variant="filled" 
          type="text"
          value={contact}
          onChange = {(e) => setContact(e.target.value)}
        />

       <TextField 
          label="Description of service" 
          variant="filled" 
          type="text"
          value={description}
          onChange = {(e) => setDescription(e.target.value)}
        />

        <div>
          <Button variant="contained" onClick={handleClose}>Cancel</Button>
          <Button type="submit" variant="contained">Save</Button>
        </div>
      </form>
  )
}

export default UpdateService;