import React from 'react'
import { motion } from 'framer-motion'
import './profile.css'
import { useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'

function Profile(props) {


    let { name, photo } = useSelector(store => store.usuario)
    return (
        <motion.div>
            <main className='main-profile-container'>
                <div className='profile-banner'>
                    <img className='banner-img' src={photo} alt="banner" />
                    <button className='edit-banner-btn'> <img className='edit-icon-img' src="https://cdn.discordapp.com/attachments/1019371264860770376/1053024594048589844/icons8-compact-camera-24.png" alt="edit" />
                     Edit banner image</button>
                </div>
                <div className='profile-info'>
                    <div className='profile-section profile-img-container'>
                        <div className='edit-img-user'>
                            <img className='user-profile-img' src={photo} alt="profile-img" />
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
                <section>
                    <h1>probando</h1>
                </section>
                        
            </main>
        </motion.div>
  )
}

export default Profile