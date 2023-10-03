import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { createUser } from '../store/usersSlice'
import { useNavigate } from 'react-router-dom'

const ContactCreate = () => {
    const [user, setUser] = useState({
        name: '',
        phone: '',
        image: ''
    })

    const navigate = useNavigate();
    const dispatch = useDispatch()

    function addUser(){
        for(let key in user){
            if(!user[key]) return alert('empty')
        }
        dispatch(createUser({...user, favorites: false}))
        navigate('/')
    }
  return (
    <div>
        <h3>Create Contact</h3>
        <input type='text' placeholder='name' onChange={e => setUser({...user, name: e.target.value})} value={user.name} />
        <input type='text' placeholder='phone' onChange={e => setUser({...user, phone: e.target.value})} value={user.phone} />
        <input type='text' placeholder='image' onChange={e => setUser({...user, image: e.target.value})} value={user.image} />
        <button onClick={addUser}>Create</button>
    </div>
  )
}

export default ContactCreate