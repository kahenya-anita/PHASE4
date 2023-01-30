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

function Login ({ onLogin }) {

  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();

    const returnClient = {
      username: username,
      password: password
    }

    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(returnClient)
    })
    .then((resp) => {
      if (resp.ok) {
        console.log(resp)
        resp.json().then((user) => onLogin(user))
      } else {
        resp.json().then((err) =>setErrors(err.errors))
      }
    })
    
   
  }

  return (
      <form className={classes.root} onSubmit={handleSubmit}>
        <TextField 
          label="Username" 
          variant="filled" 
          required
          value={username}
          onChange = {(e) => setUsername(e.target.value)}
        />

        <TextField 
          label="password" 
          variant="filled" 
          type="password"
          required
          value={[password]}
          onChange = {(e) => setPassword(e.target.value)}
        />
        <div>
          <Button type="submit" variant="contained">Login</Button>
        </div>
      </form>
  )
}

export default Login;