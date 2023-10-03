import React, {useEffect} from 'react'
import UserItem from './UserItem'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../store/usersSlice'
import Box from '@mui/material/Box';

const ContactsList = () => {
  const {users, error, loading} = useSelector(state=> state.users)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getUsers())
  }, []);

  return (
    <>
      {error ? (
        <div>
          <h3>Something went wrong</h3>
        </div>
      ): (
        <>
        {loading && <h3>Loading...</h3>}
        <Box sx={{
          display: "flex",
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          alignItems: 'center',
          padding: '20px'
        }}>
          {users.map(user => (
            <UserItem key={user.id} user={user} />
          ))}
        </Box>
        </>
      )}
    </>
  )
}

export default ContactsList