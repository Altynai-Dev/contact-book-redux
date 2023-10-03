import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = 'http://localhost:8000/contacts';
const FAVORITES_API = "http://localhost:8000/favorites";

//createAsyncThunk - инструмент для асинхронной задачи, принимает название action 

export const getUsers = createAsyncThunk(
    'users/getUsers',
    async ()=>{
        const res = await axios.get(API)
        return res.data
    }
)

export const createUser = createAsyncThunk(
    'users/createUser',
    async(newUserObj, {dispatch}) =>{
        await axios.post(API, newUserObj);
        dispatch(getUsers())
    }
)

export const getOneUser = createAsyncThunk(
    'users/getOneUser',
    async(userId)=>{
        const {data} = await axios.get(`${API}/${userId}`)
        return data;
    }
)

export const saveChanges = createAsyncThunk(
    //названия экшенов
    '/users/saveChanges',
    async(updatedUserObj, {dispatch}) =>{
        await axios.patch(`${API}/${updatedUserObj.id}`, updatedUserObj);
        if(updatedUserObj.favorites){
            await axios.patch(`${FAVORITES_API}/favorite-${updatedUserObj.id}`, {
                user: updatedUserObj
            })
        }
        
        dispatch(getUsers())
    }

)

export const deleteUser = createAsyncThunk(
    'users/deleteUser',
    async(userId, {dispatch} ) =>{
        await axios.delete(`${API}/${userId}`);
          dispatch(getUsers())
    }
)

export const addToFavorites = createAsyncThunk(
    'users/addToFavorites',
    async(updatedUserObj, {dispatch})=>{
        if(updatedUserObj.favorites){
            const favoriteObj = {
                id: `favorite-${updatedUserObj.id}`,
                user: updatedUserObj
            };
            await axios.post(FAVORITES_API, favoriteObj)
        }else{
            await axios.delete(`${FAVORITES_API}/favorite-${updatedUserObj.id}`)
        };
        await dispatch(saveChanges(updatedUserObj))
        dispatch(getFavorites())
    }
)

export const getFavorites = createAsyncThunk(
    'users/getFavorites',
    async()=>{
        const {data} = await axios.get(FAVORITES_API);
        return data;
    }
)


const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        loading: false,
        error: null,
        oneUser: null,
        favorites: []
    },
    //дейтсвия, которые влияют/меняют на состояние (синхронные)
    reducers: {
        clearOneUserState: (state)=>{
            state.oneUser = null;
        }
    },
    //дейтсвия, которые влияют на состояние (асинхронные)
    //extraReducers на каждом этапе запроса контролируют промис
    extraReducers: (builder) =>{
        builder
        .addCase(getUsers.pending, (state, action)=>{
            state.loading = true;
        })
        .addCase(getUsers.fulfilled, (state, action)=>{
            state.loading = false;
            state.users = action.payload
        })
        .addCase(getUsers.rejected, (state, action)=>{
            state.loading = false;
        })
        .addCase(getOneUser.pending, (state, action)=>{
            state.loading = true
        })
        .addCase(getOneUser.fulfilled, (state, action)=>{
            state.oneUser = action.payload;
            state.loading = false;
        })
        .addCase(getFavorites.fulfilled, (state, action)=>{
            state.favorites = action.payload;
        })
    }
})
export const {clearOneUserState} = usersSlice.actions;//actions - действия
export default usersSlice.reducer; //менеджер который отвечает на этот слайс

//builder - запускает запрос по цепочке кейсов