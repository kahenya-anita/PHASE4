import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
// import { Dialog } from '@material-ui/core'
// import SignUp from '../Forms/SignUp'


function Navbar({ user, setUser }) {

  // const [open, setOpen] = useState(false);

  const handleLogout = () => {
    fetch("/logout", {
      method: "DELETE"
    })
    .then((r) => {
      if (r.ok) {
        setUser(null)
      }
    })
    
  }

  // const handleOpen = () => {
  //   setOpen(true)
  // }
 

  // const handleClose = () => {
  //   setOpen(false)
  // }



  return (
    
    <div className='bg-img'>
      <div className=''>
        <nav className="navbar navbar-expand-lg nav-color">
          <div className="container-fluid">
            <Link className="navbar-brand " style={{color: "white", fontSize: 17+"px", marginLeft: 1+"vw"}} to="/">Afrikanest <span style={{color: "orangered"}}> HOME <br/> RETOUCH</span></Link>
            <div className="nav-icon">
              <div className="nav-icons">

                {user ? (
                  <Link className="icon nav-link" style={{color: "orangered"}} to="/services">Dashboard</Link>):(null)}
                  <Link className="icon nav-link" aria-current="page" to="/" >Home</Link>
                  <Link className="icon nav-link" to="/about" >About us</Link>
                  <Link className="icon nav-link"  >Contact us</Link>
                {user ? (
                  <>
                    <Link className='logout icon nav-link' to="/" onClick={handleLogout}>Logout</Link>
                  </>
                ):(
                  <>
                    <Link className="icon btn btn-danger" to="/login" style={{backgroundColor: "orangered"}}>Login or <span style={{color: "black"}}> Create account</span></Link>
                    {/* <button type="button" className =" " onClick={handleOpen}>Create account</button> */}
                  </>
                )}

              </div>
            </div>
          </div>
        </nav>
        
        {/* <Dialog open={open} onClose={handleClose}>
          <SignUp onLogin={onLogin} handleClose={handleClose} />
        </Dialog> */}


        <center className="home-tab">
          <div className='para'>
            <h2 className='txt'>Afrikanest Home Retouch</h2> 
            <h5 className="txt-2"> transforms your house to a HOME</h5>
          </div>

          <p className='sub'>Subscribe to our newsletter</p>
          <form className="d-flex" role="search">
            <label className='form-label'></label>
            <input className="form-control me-2" type="search" />
            <button className="btn btn-danger color" type="submit">Subscribe</button>
          </form>
        </center>
      </div>
    </div>
  )
  }

export default Navbar