import React, { useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getOneUser, clearOneUserState, saveChanges } from '../store/usersSlice'

const ContactEdit = () => {
    const {oneUser} = useSelector(state => state.users)
    const [user, setUser] = useState(oneUser)
    const {id} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getOneUser(id))
        return ()=> dispatch(clearOneUserState())
    }, [])
//если в initial state у oneuser есть объект, то установи этот объект в местное состояние
    useEffect(()=>{
        if(oneUser){
            setUser(oneUser)
        }
    }, [oneUser])
  return (
    <>
    {user ? (
              <div>
                  <h3>Edit contact</h3>
                  <input type='text' placeholder='name' onChange={e => setUser({ ...user, name: e.target.value })} value={user.name} />

                  <input type='text' placeholder='phone' onChange={e => setUser({ ...user, phone: e.target.value })} value={user.phone} />

                  <input type='text' placeholder='image' onChange={e => setUser({ ...user, image: e.target.value })} value={user.image} />
                  <button onClick={()=>{
                    dispatch(saveChanges(user));
                    navigate('/')
                  }} >Save changes</button>
              </div>
    ) : (
        <h3>Loading...</h3>
    )}
    </>
    )
}

export default ContactEdit