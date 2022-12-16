import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion'
import './profile.css'
import { useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import usersActions from "../../redux/actions/userAction";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function Profile(props) {

    let { name, photo, banner, token } = useSelector(store => store.usuario)
    let { logOut } = usersActions
    let dispatch = useDispatch()
    let history = useNavigate()


    async function handleLogOut(e){
        e.preventDefault()
        Swal.fire({
            title: "You're logging out",
            text: "Are you sure ?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#b0cc11',
            cancelButtonColor: '#24262B',
            confirmButtonText: 'Yes, log me out !'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Loged Out!',
                'success'
                )
                dispatch(logOut(token))
                history('/')
            }
          })
    }

    useEffect(()=>{
        handleLogOut()
    },[])

    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);



    console.log(banner);
    return (
        <motion.div>
            <main className='main-profile-container'>
                <div className='profile-banner'>
                    <img className='banner-img' src={banner} alt="banner" />
                    <button onClick={handleShow3} className='edit-banner-btn'> <img className='edit-icon-img' src="https://cdn.discordapp.com/attachments/1019371264860770376/1053024594048589844/icons8-compact-camera-24.png" alt="edit" />
                     Edit banner image</button>
                     <button className='edit-banner-btn-small'> <img className='edit-icon-img' src="https://cdn.discordapp.com/attachments/1019371264860770376/1053024594048589844/icons8-compact-camera-24.png" alt="edit" />
                     </button>
                    <div className='profile-info'>
                        <div className='profile-section profile-img-container'>
                            <div className='edit-img-user'>
                                <img onClick={handleShow} className='user-profile-img' src={photo} alt="profile-img" />
                                <img onClick={handleShow1} className='edit-img-user-btn' src="https://cdn.discordapp.com/attachments/1019371264860770376/1053024594048589844/icons8-compact-camera-24.png" alt="edit" />
                            </div>
                        </div>
                        <section className='profile-section profile-username'>
                            <h2 className='user-profile-name'>{name}</h2>
                            <div className='btn-profile-container'>
                                <button onClick={handleShow2} className='edit-profile-btn'>
                                    <img  className='edit-icon-img' src="https://cdn.discordapp.com/attachments/1019371264860770376/1053031104380149760/icons8-edit-24.png" alt="edit" />
                                    Edit profile</button>
                            </div>
                            <div className='btn-profile-container'>
                                <button onClick={handleLogOut} className='log-out-btn'> 
                                <img src="https://cdn.discordapp.com/attachments/1019371264860770376/1053128783776981112/icons8-log-out-25.png" alt="logout" />
                                LogOut </button>
                            </div>
                        </section>
                    </div>
                </div>
                <Modal  size="lg" show={show} onHide={handleClose}>
                    <Modal.Header className='modal-background-profile-img'>
                    </Modal.Header>
                    <Modal.Body className='modal-background-profile-img'>
                        <img className='show-modal-profile-img' src={photo} alt="tufoto" />
                    </Modal.Body>
                    <Modal.Footer className='modal-background-profile-img'>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>
                <Modal show={show1} onHide={handleClose1}>
                    <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Edit profile image</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose1}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose1}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>
                <Modal show={show2} onHide={handleClose2}>
                    <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Edit profile</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose2}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose2}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>
                <Modal show={show3} onHide={handleClose3}>
                    <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Edit banner</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose3}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose3}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>        
    
            </main>
        </motion.div>

  )
}

export default Profile