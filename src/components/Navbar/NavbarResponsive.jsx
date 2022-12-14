import React, {useEffect, useState} from 'react'
import './navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, NavLink } from 'react-router-dom';
import carsActions from '../../redux/actions/carsActions';
import { useDispatch, useSelector } from 'react-redux';
import { BASE_URL } from '../../api/url'


function NavbarResponsive() {

   let { getCars } = carsActions

  let dispatch = useDispatch()

  const { cars } = useSelector((state)=> state.cars)
  
  useEffect(()=>{
    dispatch(getCars())
    
  },[])
  console.log(cars);
  
    const [ navbarBackground, setNavbarBackground ]= useState('')
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY> 50){
                setNavbarBackground('bg-solid')
            }else{
                setNavbarBackground('')
            }
        })
    }, [])

  return (
    <main className='position-navbar'>
        <div className='navbar-container'>
        {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className={navbarBackground}>
          <Container fluid>
            <section className='navbar-section'>
                <h1><Link style={{ textDecoration: 'none', color: '#fff' }} to="/">MotorX</Link></h1>
            </section>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
              </Offcanvas.Header>
              <Offcanvas.Body className=''>
                <Nav className="navbar-heigth-canvas justify-content-between flex-grow-1 pe-3">
                <section className='navbar-section'>
                  <Link to="/"> <h1 className='motor-primary'>MotorX</h1></Link>  
                </section>
                <section className='navbar-section'>
                  {
                    cars.map(x =>{
                      return (
                        <h2><NavLink to={`/details/:${x._id}`} key={x._id} className='section-shop'>{x.title} </NavLink> </h2>
                      )
                    })
                  }
                </section>
                <section className='navbar-section'>
                    <h2><Link className='section-shop' to='/shop'> Shop</Link></h2>
                    <h2><Link className='section-shop' to='/signup'> Account</Link></h2>
                </section>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
        </div>
    </main>

  )
}

export default NavbarResponsive