import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return <>
  <ul className="navbar-nav bg-gradient-success sidebar sidebar-dark accordion" id="accordionSidebar">

{/* <!-- Sidebar - Brand --> */}
<Link to={'/homepage'} className="sidebar-brand d-flex align-items-center justify-content-center">
    <div className="sidebar-brand-icon rotate-n-15">
        <i className="fas fa-laugh-wink"></i>
    </div>
    <div className="sidebar-brand-text mx-3">My Todo<sup>s</sup></div>
</Link>

{/* <!-- Divider --> */}
<hr className="sidebar-divider my-0"/>

{/* <!-- Nav Item - Dashboard --> */}
<li className="nav-item active">
    <Link to={'/homepage'} className="nav-link" >
        <i className="fas fa-fw fa-tachometer-alt"></i>
        <span>Home Page</span>
    </Link>
</li>

{/* <!-- Divider --> */}
<hr className="sidebar-divider"/>

{/* <!-- Nav Item - Dashboard --> */}
<li className="nav-item active">
    <Link to={'/addtodo'} className="nav-link" >
        <i className="fas fa-fw fa-tachometer-alt"></i>
        <span>Add Todo</span>
    </Link>
</li>


{/* <!-- Divider --> */}
<hr className="sidebar-divider"/>

</ul>
  </>
}

export default Sidebar