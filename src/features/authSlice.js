import axios from "axios";
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
    user : null,
    isError : false,
    isLoading : false,
    isSuccess : false,
    message : "" 
};
const url = process.env.REACT_APP_ENDPOINT;

export const Login = createAsyncThunk('user/login', async (user, thunkAPI) => {
    try {
        const response = await axios.post(`${url}/auth/login`, {
            email : user.email,
            password : user.password
        });
        return response.data;
    } catch (error) {
        if (error.response) {
            const message = error.response.data.message;
            return thunkAPI.rejectWithValue(message);
        }
    }
})

export const getMe = createAsyncThunk('user/getMe', async (_, thunkAPI) => {
    try {
        const response = await axios.get(`${url}/auth/me`);
        return response.data;
    } catch (error) {
        if (error.response) {
            const message = error.response.data.message;
            return thunkAPI.rejectWithValue(message);
        }
    }
})

export const Logout = createAsyncThunk('user/Logout', async (_, thunkAPI) => {
    try {
        const response = await axios.delete(`${url}/auth/logout`);
        return response.data;
    } catch (error) {
        if (error.response) {
            const message = error.response.data.message;
            return thunkAPI.rejectWithValue(message);
        }
    }
})

export const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers : {
        reset : (state) => initialState,

    },
    extraReducers : (builder) => {
        //LOGIN
        builder.addCase(Login.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(Login.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
        })
        builder.addCase(Login.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload
            // console.log(action.payload)
        })

        //LOGOUT
        builder.addCase(Logout.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(Logout.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        })
        builder.addCase(Logout.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload
            // console.log(action.payload)
        })

        //GET ME
        builder.addCase(getMe.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getMe.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
        })
        builder.addCase(getMe.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload
            // console.log(action.payload)
        })
    }
})

export const { reset } = authSlice.actions;
export default authSlice.reducer;

