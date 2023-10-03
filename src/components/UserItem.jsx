import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import UserFavorite from './UserFavorite';



const UserItem = ({user}) => {
    const navigate = useNavigate();

  return (
    <Paper sx={{
      padding: '10px',
      width: '300px',
      height: '400px',
      margin: '10px'
    }} elevation={3}>
        <p>{user.name}</p>
        <p>{user.phone}</p>
        <img src={user.image} alt="contact" style={{width:"200px", height:"150px"}}/>
        <br></br>
        <Button variant="contained" onClick={()=>navigate(`/details/${user.id}`)}>Details</Button>
        <UserFavorite user={user} />
    </Paper>
  )
}

export default UserItem