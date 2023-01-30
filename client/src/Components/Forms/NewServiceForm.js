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

function NewServiceForm ({ handleClose, onAddService, user }) {

  const classes = useStyles();
  const [service, setService] = useState("")
  const [location, setLocation] = useState("")
  const [contact, setContact] = useState("")
  const [address, setAddress] = useState("")
  const [description, setDescription] = useState("")



  const handleSubmit = (e) => {
    e.preventDefault();

    const newService = {
      service: service,
      location: location,
      address: address,
      contact_info: contact,  
      description: description
    }

    fetch("/services", {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(newService)
    })
    .then((resp) => resp.json())
    .then((data) => onAddService(data))

    handleClose();
  }

  return (
      <form className={classes.root} onSubmit={handleSubmit}>
        <TextField 
          label="Type of service" 
          variant="filled" 
          required
          value={service}
          onChange = {(e) => setService(e.target.value)}
        />

        <TextField 
          label="Apartment" 
          variant="filled" 
          required
          value={location}
          onChange = {(e) => setLocation(e.target.value)}
        />

        <TextField 
          label="Location" 
          variant="filled" 
          type="text" 
          required
          value={address}
          onChange = {(e) => setAddress(e.target.value)}
        />

        <TextField 
          label="Phone number" 
          variant="filled" 
          type="text"
          required
          value={contact}
          onChange = {(e) => setContact(e.target.value)}
        />

        <TextField 
          label="Email address" 
          variant="filled" 
          type="email"
          value={user.email}
        />

       <TextField 
          label="Description of service" 
          variant="filled" 
          type="text"
          required
          value={description}
          onChange = {(e) => setDescription(e.target.value)}
        />

        <div>
          <Button variant="contained" onClick={handleClose}>Cancel</Button>
          <Button type="submit" variant="contained">Submit</Button>
        </div>
      </form>
  )
}

export default NewServiceForm;