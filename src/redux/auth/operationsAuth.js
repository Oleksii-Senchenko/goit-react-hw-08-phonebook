

import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/'
const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
    },
    unset() {
        axios.defaults.headers.common.Authorization = ''
    }
}

export const registerUser = createAsyncThunk(
    'auth/registerUser',
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
    'auth/logInUser',
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
    'auth/logOutUser',
    async (_, thunkAPI) => {
        try {
            await axios.post('users/logout')
            token.unset()
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const getCurrentUser = createAsyncThunk(
    'auth/getuset',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState()
        const lastToken = state.auth.token
        if (token === null) {
            console.log('Нет токена');
            return
        }
        token.set(lastToken)
        try {

            const responce = await axios.get('users/current')
            return responce.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }

    }
)

export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const lastToken = state.auth.token;

        if (lastToken === null) {
            return thunkAPI.rejectWithValue('Unable to fetch user');
        }

        try {
            token.set(lastToken);
            const responce = await axios.get('users/me');
            return responce.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    })