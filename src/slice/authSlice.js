// authSlice.js
import { createSlice } from '@reduxjs/toolkit';
// Get existing users from local storage or initialize as an empty array
const existingUsers = JSON.parse(localStorage.getItem('userDetails')) || [];
const authSlice = createSlice({
  name: 'auth',
  initialState: {

    user: existingUsers,
    loggedInUserId: null,
    isAuthenticated: false,
    error: null,
    successMessageLogin: null,
    successMessageRegister:null,
  },




  reducers: {


    loginSuccess: (state, action) => {
      const { id, email, password, profileImage } = action.payload;
      state.loggedInUserId = id;
      state.isAuthenticated = true;
      state.error = null;
      state.successMessageLogin = 'Login successful';
      state.successMessageRegister=null


      // Note: I assume here that your loginSuccess payload contains user details.
      // If not, you may need to retrieve the user details from local storage or elsewhere.

      // Check if the user already exists in state
      const existingUserIndex = state.user.findIndex((user) => user.email === email);
      const userExistsInStorage = existingUsers.some((user) => user.email === email);
      console.log(existingUserIndex, userExistsInStorage)
      if (existingUserIndex === -1 && !userExistsInStorage) {
        // If the user doesn't exist, add them to the state
        state.user.push({ id, email, password, profileImage });
      }
      //   else {
      // // If the user exists, update the profileImage
      // state.user[existingUserIndex].profileImage = profileImage;
      //   }
      console.log(action.payload);
      console.log(state.user)
    },
    loginFailure: (state, action) => {
      state.user = [];
      state.isAuthenticated = false;
      state.error = action.payload;
      state.successMessageRegister = null;
      state.successMessageLogin=null
    },
    registerSuccess: (state, action) => {
      const { name, profileImage, firstName, surName, email, password, gender, birthDay, month, year } = action.payload;

      // Check if the user already exists in state
      const existingUserIndex = state.user.findIndex((user) => user.email === email);

      const userExistsInStorage = existingUsers.some((user) => user.email === email);
      console.log(existingUserIndex, userExistsInStorage)
      if (existingUserIndex === -1 && !userExistsInStorage) {

        state.user.push({
          id: Date.now(),
          name: firstName + surName,
          profileImage,
          firstName,
          surName,
          email,
          password,
          gender,
          birthDay,
          month,
          year,

        });
      }

      state.isAuthenticated = true;
      state.error = null;
      state.successMessageRegister = 'Registration successful';
      state.successMessageLogin=null;

      // Store user data in localStorage
      localStorage.setItem('userDetails', JSON.stringify([...existingUsers, ...state.user]));
      console.log(action.payload)
    },
    registerFailure: (state, action) => {
      state.user = [];
      state.isAuthenticated = false;
      state.error = action.payload;
      state.successMessageRegister = null;
      state.successMessageLogin=null
    },
    clearMessages: (state) => {
      state.error = null;
      state.successMessageLogin = null;
      state.successMessageRegister=null;
    },

    logout: (state) => {
      state.user = [];
      state.isAuthenticated = false;
      state.loggedInUserId = null;
      state.error = null;
      state.successMessageLogin = null;
      state.successMessageRegister=null
      // localStorage.removeItem('userDetails');

    }
  },
});

export const {
  loginSuccess,
  loginFailure,
  registerSuccess,
  registerFailure,
  clearMessages,
  logout
} = authSlice.actions;
export const authError = (state) => (state.auth.error);
export const authSuccessLogin = (state) => (state.auth.successMessageLogin);
export const authSuccessRegister = (state) => (state.auth.successMessageRegister);

export const authUser = (state) => (state.auth.user);
export const loggedInId = (state) => (state.auth.loggedInUserId)
export default authSlice.reducer;

