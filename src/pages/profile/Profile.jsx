import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion'
import './profile.css'
import { useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import usersActions from "../../redux/actions/userAction";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { TextField, ThemeProvider } from "@mui/material";
import { createTheme } from '@mui/material/styles';
import { uploadFile } from '../../firebase/config'
import NewComment from '../../components/NewComment/NewComment';
import Loading from '../../components/Loading/Loading';
import carRequestActions from '../../redux/actions/carRequestActions';


function Profile(props) {

    let { getRequests } = carRequestActions

    async function getAllRequests(){
        await dispatch(getRequests())
    }

    useEffect(()=>{
        getAllRequests()
    },[])

    let {  requests } = useSelector(store => store.requests)
    
    console.log(requests);

    const theme = createTheme({
        palette: {
          primary: {
            light: '#cef10a',
            main: '#cef10a',
            dark: '#cef10a',
            contrastText: '#fff',
          },
         
        },
      });

    let { nameProfile, photoProfile, bannerProfile, token, id, role } = useSelector(store => store.usuario)
    let { getOneUser ,logOut, editUserInfo } = usersActions

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

    /* Update profile photo */

    const [file, setFile] = useState(null)

    const [photo, setNewPhoto] = useState('')

    let [loading, setLoading ] = useState(false)

    const handleNewPhoto = async (e) => {

        setLoading(true)

        try {
            const res = await uploadFile(file)
            console.log(res);
            setNewPhoto(res)
            setLoading(false)
        } catch (error) {
            console.log(error);
        }
    }

    async function editPhoto() {

        try {
            let photoEdit = {photo}
    
            await dispatch(editUserInfo({id : id, data: photoEdit, token: token}))
            Swal.fire(
                'Good job!',
                'You clicked the button!',
                'success'
                )
            dispatch(getOneUser({id: id, token: token}))
        } catch (error) {
            console.log(error);
        }
        
    }

    /* Update profile Banner */

    const [fileBanner, setFileBanner] = useState(null)

    const [banner, setNewBanner] = useState('')

    const handleNewBanner = async (e) => {
        setLoading(true)
        
        try {
            const res = await uploadFile(fileBanner)
            setNewBanner(res)
            setLoading(false)
        } catch (error) {
            console.log(error);
        }
    }

    async function editBanner() {
        try {
            let bannerEdit = {banner}

            await dispatch(editUserInfo({id: id, data: bannerEdit, token: token}))
            Swal.fire(
                'Good job!',
                'You clicked the button!',
                'success'
                )
            dispatch(getOneUser({id: id, token: token}))
        } catch (error) {
            console.log(error);
        }
    }

    /* Update Name */

    const [ name, setEName ] = useState('')
    
    async function editName() {

        try {
            let nameEdit = {name}
    
            await dispatch(editUserInfo({id : id, data: nameEdit, token: token}))
            Swal.fire(
                'Good job!',
                'You clicked the button!',
                'success'
                )
            dispatch(getOneUser({id: id, token: token}))
        } catch (error) {
            console.log(error);
        }
        
    }
    
    return (
        <motion.div>

            <main className='main-profile-container'>
                <div className='profile-banner'>
                    <img className='banner-img' src={bannerProfile} alt="banner" />
                    <button onClick={handleShow3} className='edit-banner-btn'> <img className='edit-icon-img' src="https://cdn.discordapp.com/attachments/1019371264860770376/1053024594048589844/icons8-compact-camera-24.png" alt="edit" />
                     Edit banner image</button>
                     <button onClick={handleShow3} className='edit-banner-btn-small'> <img className='edit-icon-img' src="https://cdn.discordapp.com/attachments/1019371264860770376/1053024594048589844/icons8-compact-camera-24.png" alt="edit" />
                     </button>
                </div>
                    <div className='profile-info'>
                        <div className='profile-section profile-img-container'>
                            <div className='edit-img-user'>
                                <img onClick={handleShow} className='user-profile-img' src={photoProfile} alt="profile-img" />
                                <img onClick={handleShow1} className='edit-img-user-btn' src="https://cdn.discordapp.com/attachments/1019371264860770376/1053024594048589844/icons8-compact-camera-24.png" alt="edit" />
                            </div>
                        </div>
                        <section className='profile-section profile-username'>
                            <div className='giga-container'>
                                {
                                    role === "admin" ? <img height='50' src="https://firebasestorage.googleapis.com/v0/b/motorx-firebase.appspot.com/o/617466274d5c8.png?alt=media&token=fe6447cb-8035-4eb4-813b-4eb25c58c6c3" alt=" eres Giga-admin" /> : <></>
                                }
                                
                                <h2 className='user-profile-name'>{nameProfile}</h2>
                            </div>
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
                          <NewComment/>
                    </div>

                    <div className='user-admin-panel'>
                                {/* User Panel Profile */}
                    {
                        role === 'user' ?
                        <>
                            <div>

                            </div>
                        </>
                        : 
                        <></>
                    }

                                {/* Admin Panel Profile */}
                    {
                        role === 'admin' ?
                        <>
                        </>
                        :
                        <></>
                    }
                    </div>
                    {
                loading ? <Loading/> : <></>
            }


                <Modal  size="lg" show={show} onHide={handleClose}>
                    <Modal.Header className='modal-background-profile-img'>
                    </Modal.Header>
                    <Modal.Body className='modal-background-profile-img'>
                        <img className='show-modal-profile-img' src={photoProfile} alt="tufoto" />
                    </Modal.Body>
                    <Modal.Footer className='modal-background-profile-img'>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>
                <Modal show={show1} onHide={handleClose1}>
                    <Modal.Header className='update-modal-header modal-background-profile-img' closeButton>
                    <Modal.Title >
                        <div /* className='update-modal-header' */>
                            <p className='black'>Update profile image</p>
                        </div>
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='modal-background-profile-img centered'>
                        <div className='file-select' id='src-file1'>
                            <input className='upload-image' onChange={e => setFile(e.target.files[0])} type="file" name="src-file1"/>
                        </div>
                        {
                            file === null || photo !== '' ? <></> : <Button onClick={handleNewPhoto} variant='outline-secondary' className='bg-dark m-10 white'>Upload Photo</Button>
                        }
                        {
                            photo === '' ? <></> : <Button onClick={editPhoto} variant='outline-secondary' className='bg-motorX m-10 white'>Save Changes</Button>
                        }
                    </Modal.Body>
                    <Modal.Footer className='modal-background-profile-img'>
                        <Button className='custom-btn-modal' variant="secondary" onClick={handleClose1}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Modal show={show2} onHide={handleClose2}>
                    <Modal.Header className='update-modal-header modal-background-profile-img' closeButton>
                    <Modal.Title>
                        <div /* className='update-modal-header' */>
                            <p className='black'>Update profile information</p>
                        </div>
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='modal-background-profile-img'>
                        <ThemeProvider theme={theme}>
                            <TextField onChange={(e) => setEName(e.target.value)}
                                    hiddenLabel
                                    id="filled-hidden-label-small"
                                    defaultValue= {nameProfile}
                                    variant="filled"
                                    size="small"
                                    />
                        </ThemeProvider>
                        <Button onClick={editName} variant='outline-secondary' className='bg-dark mx-3'>Send</Button> 
                    </Modal.Body>
                    <Modal.Footer className='modal-background-profile-img'>
                    <Button className='custom-btn-modal' variant="secondary"  onClick={handleClose2}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>
                <Modal show={show3} onHide={handleClose3}>
                    <Modal.Header className='update-modal-header modal-background-profile-img' closeButton>
                        <Modal.Title>
                        <div /* className='update-modal-header' */>
                            <p className='black'>Update banner Image</p>
                        </div>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='modal-background-profile-img'>
                    <div className='file-select' id='src-file1'>
                        <input className='upload-image' onChange={e => setFileBanner(e.target.files[0])} type="file" name="src-file1"/>
                    </div>
                        {
                            fileBanner === null || banner !== '' ? <></> : <Button onClick={handleNewBanner} variant='outline-secondary' className='bg-dark m-10 white'>Upload Photo</Button>
                        }
                        {
                            banner === '' ? <></> : <Button onClick={editBanner} variant='outline-secondary' className='bg-motorX m-10 white'>Save Changes</Button>
                        }
                    </Modal.Body>
                    <Modal.Footer className='modal-background-profile-img'>
                        <Button className='custom-btn-modal' variant="secondary" onClick={handleClose3}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>        
            </main>
        </motion.div>

  )
}

export default Profile