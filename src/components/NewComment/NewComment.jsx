import React from 'react'
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import commentAction from '../../redux/actions/commentActions';
import Swal from 'sweetalert2';
function NewComment(){
    const [comment, setComment] = useState('');
    let { nameProfile, photoProfile, bannerProfile, token, id, role } = useSelector(store => store.usuario)

    let photo = photoProfile
    let userId= id
    let {postComments,getAllComments}= commentAction
    let dispatch = useDispatch()
    async function Submit(event){
        event.preventDefault()

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
      <section className='profile-section profile-review'>
      <div>
          <h2 className='review-title'>What do you think about the page ? <br/> Leave a review !</h2>
      </div>
      <div class="form">
          <input class="input"  onChange={(e) => setComment(e.target.value)} placeholder="Give us a comment" required="" type="text"/>
          <span class="input-border"></span>
      </div>
      <div class="wrap">
          <button class="btn-rueda">
              <span onClick={Submit} class="text-rueda">Send</span>
          </button>
      </div>
  </section>
        


       

    )
}
export default NewComment