import React, {useEffect, useState} from 'react'
import './navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';


function NavbarResponsive() {

    const [ navbarBackground, setNavbarBackground ]= useState('')
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY> 250){
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
                <h1>MotorX</h1>
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
                    <h1 className='motor-primary'>MotorX</h1>
                </section>
                <section className='navbar-section'>
                    <h2>Model 1</h2>
                    <h2>Model 2</h2>
                    <h2>Model 3</h2>
                    <h2>Model 4</h2>
                    <h2>Model 5</h2>
                </section>
                <section className='navbar-section'>
                    <h2>Shop</h2>
                    <h2>Account</h2>
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