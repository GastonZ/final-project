import React from 'react'
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import commentAction from '../../redux/actions/commentActions';
import Swal from 'sweetalert2';
function NewComment(){
    const [comment, setComment] = useState('');
    let { nameProfile, photoProfile, bannerProfile, token, id, role } = useSelector(store => store.usuario)
    console.log(photoProfile);
    let photo = photoProfile
    let userId= id
    let {postComments,getAllComments}= commentAction
    let dispatch = useDispatch()
    async function Submit(event){
        event.preventDefault()
        console.log(event.target.value);
        let data = {comment,userId,photo}
        


        try {
          
          
          let res =  await dispatch(postComments({data}))
          
         if (res.payload.success){
          

          Swal.fire({
            title: "Comment sent"
          
          })
        
         }else{
          Swal.fire({
            title: 'Error!',
            text: res.payload.response,
            icon: 'error',
            confirmButtonText: 'Cool'
          })
         }
       
    
    } catch (error) {
        console.log(error);
    }  

    }

    return(
        <div>

<input   onChange={(e) => setComment(e.target.value)} placeholder="Search" type="search" class="input"/>
<button  onClick={Submit}>Send</button>
        </div>

    )
}
export default NewComment