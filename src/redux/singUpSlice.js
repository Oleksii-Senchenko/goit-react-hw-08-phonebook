const { createSlice } = require("@reduxjs/toolkit");
const { registerUser } = require("./operations");

const singUpSlice = createSlice({
    name: 'registration',
    initialState: {
        user: {
            name: null,
            email: null,
            password: null
        }

    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.user.name = action.payload;
            state.user.email = action.payload;
            state.user.password = action.payload;
        })
    }
})

export default singUpSlice
