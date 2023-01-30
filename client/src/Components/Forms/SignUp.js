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

function SignUp ({ handleClose, onLogin }) {

  const classes = useStyles();
  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [error, setErrors] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();

    const newClient = {
      name: name,
      username: username,
      email: email,
      password: password,
      password_confirmation: passwordConfirmation
    }

    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(newClient)
    })
    .then((r) => {
      if (r.ok) {
        r.json().then((user) => onLogin(user))
      } else {
        r.json().then((err) => setErrors(err.errors))
      }
    })

    // handleClose();
  }

  return (
      <form className={classes.root} onSubmit={handleSubmit}>
        <TextField 
          label="Preferred Name" 
          variant="filled" 
          required
          value={name}
          onChange = {(e) => setName(e.target.value)}
        />

        <TextField 
          label="Username" 
          variant="filled" 
          required
          value={username}
          onChange = {(e) => setUsername(e.target.value)}
        />

        <TextField 
          label="Email Address" 
          variant="filled" 
          type="email" 
          required
          value={email}
          onChange = {(e) => setEmail(e.target.value)}
        />

        <TextField 
          label="password" 
          variant="filled" 
          type="password"
          required
          value={[password]}
          onChange = {(e) => setPassword(e.target.value)}
        />

       <TextField 
          label="Confirm password" 
          variant="filled" 
          type="password"
          required
          value={passwordConfirmation}
          onChange = {(e) => setPasswordConfirmation(e.target.value)}
        />

        <div>
          <Button variant="contained" onClick={handleClose}>Cancel</Button>
          <Button type="submit" variant="contained" to="/login">Sign up</Button>
        </div>
      </form>
  )
}

export default SignUp;