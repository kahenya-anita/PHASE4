import React, { useState } from "react";
import { Button, Dialog } from '@material-ui/core'
import NewServiceForm from "./Forms/NewServiceForm";


function SubmitRequest({ onAddService, user }) {

 const [open, setOpen] = useState(false);

 const handleOpen = () => {
   setOpen(true)
 }

 const handleClose = () => {
   setOpen(false)
 }

  return (
     <div className="signUp">
       <Button variant="contained" style={{backgroundColor:"orangered", color: "white"}} onClick={handleOpen}>
         Request service
       </Button>


       <Dialog open={open} onClose={handleClose}>
         <NewServiceForm user={user} onAddService={onAddService} handleClose={handleClose}/>
       </Dialog>
     </div>
  )
}

export default SubmitRequest;