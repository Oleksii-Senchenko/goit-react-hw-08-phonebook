

import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/'
const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
        console.log(token);
    },
    unset() {
        axios.defaults.headers.common.Authorization = ''
    }
}

export const registerUser = createAsyncThunk(
    'register/registerUser',
    async (newUser, thunkAPI) => {
        try {
            const responce = await axios.post('users/signup', newUser)
            token.set(responce.data.token)
            return responce.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)
export const logIn = createAsyncThunk(
    'logIn/logInUser',
    async (user, thunkAPI) => {
        try {
            const responce = await axios.post('users/login', user)
            token.set(responce.data.token)
            return responce.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)
export const logOut = createAsyncThunk(
    'logOut/logOutUser',
    async (_, thunkAPI) => {
        try {
            await axios.post('users/logout')
            token.unset()
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)



