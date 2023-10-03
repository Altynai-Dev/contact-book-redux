import React, {useEffect} from 'react'
import {getOneUser, clearOneUserState, deleteUser} from '../store/usersSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const ContactDetails = () => {
  const {oneUser} = useSelector(state => state.users)
  const {id} = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getOneUser(id))
    return ()=>dispatch(clearOneUserState())
  }, [])

  return (
    <>
      {oneUser ? (
        <Card sx={{ maxWidth: 500,
        padding: '10px',
        margin: '0 auto',
        marginTop: '35px'
         }}>
          <Typography gutterBottom variant="h3" component="p">Name: {oneUser.name}</Typography>
          <Typography variant='h6' component="p">Phone: {oneUser.phone}</Typography>
          <Typography variant='h6' component="p">Image: <img src={oneUser.image} alt='contact' style={{width:"150px", height: '100px'}} /></Typography>
          <Button variant="contained" onClick={()=>navigate(`/edit/${oneUser.id}`)}>Edit</Button>
          <Button variant="contained" onClick={()=>{
            dispatch(deleteUser(oneUser.id));
            navigate('/');
          }}>Delete</Button>
        </Card>
      ): (
        <h3>Loading...</h3>
      )}
    </>
  )
}

export default ContactDetails

