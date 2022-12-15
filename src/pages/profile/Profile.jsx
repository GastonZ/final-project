import React, {useState} from 'react'
import { motion } from 'framer-motion'
import './profile.css'
import { useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'

function Profile(props) {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let { name, photo } = useSelector(store => store.usuario)
    return (
        <motion.div>
            <main className='main-profile-container'>
                <div className='profile-banner'>
                    <img className='banner-img' src={photo} alt="banner" />
                    <button className='edit-banner-btn'> <img className='edit-icon-img' src="https://cdn.discordapp.com/attachments/1019371264860770376/1053024594048589844/icons8-compact-camera-24.png" alt="edit" />
                     Edit banner image</button>
                     <button className='edit-banner-btn-small'> <img className='edit-icon-img' src="https://cdn.discordapp.com/attachments/1019371264860770376/1053024594048589844/icons8-compact-camera-24.png" alt="edit" />
                     </button>
                    <div className='profile-info'>
                        <div className='profile-section profile-img-container'>
                            <div className='edit-img-user'>
                                <img onClick={handleShow} className='user-profile-img' src={photo} alt="profile-img" />
                                <img className='edit-img-user-btn' src="https://cdn.discordapp.com/attachments/1019371264860770376/1053024594048589844/icons8-compact-camera-24.png" alt="edit" />
                            </div>
                        </div>
                        <section className='profile-section profile-username'>
                            <h2 className='user-profile-name'>{name}</h2>
                            <div>
                                <button className='edit-profile-btn'>
                                    <img className='edit-icon-img' src="https://cdn.discordapp.com/attachments/1019371264860770376/1053031104380149760/icons8-edit-24.png" alt="edit" />
                                    Edit profile</button>
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
            </main>
        </motion.div>
  )
}

export default Profile