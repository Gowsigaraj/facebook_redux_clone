// import React, { useState } from 'react'
// import "./login.css"
// import { useNavigate } from 'react-router-dom';

// import { Link } from 'react-router-dom';


// const Login = () => {
//     const navigate= useNavigate();

//         const [inpVal,setInpVal]= useState({

//         email:"",
//         password:"",

//     })
//     const [errors,setErrors] = useState({})
//     const [success,setSuccess]= useState(null);
//     const [storage,setStorage]= useState([])
//     // console.log(inpVal)
//     const getData =(e)=>{
//         const {value,name}= e.target;
//         console.log(value,name)
//         setInpVal(()=>{
//             return{
//                 ...inpVal,
//                 [name]:value
//             }

//         })
//      }
//     const handleLoginBtn=(e)=>{
//         e.preventDefault();
//         const getUserArr= localStorage.getItem("userDetails");
//         console.log(getUserArr)
//         const {email,password}= inpVal;

//           const validateErrors = {};
//             if(!inpVal.email.trim()){
//                 validateErrors.email="Email is required"
//             }else if(!/\S+@\S+\.\S+/.test(inpVal.email)){
//                 validateErrors.email= "Email is not valid"
//             }
//             if(!inpVal.password.trim()){
//                 validateErrors.password="password is required"
//             }else if(inpVal.password.length<6){

//                 validateErrors.password="Password mus be 6 characters"
//             }
//             else {
//                 if(getUserArr && getUserArr.length){
//                     const userData= JSON.parse(getUserArr);
//                     const userLogin= userData.filter((el,i)=>{
//                         return el.email===email && el.password ===password

//                     })
//                 if(userLogin.length===0){
//                     alert("Invalid details")
//                 }
//                 else{
//                      alert("Login in succesfully")

//                     navigate("/Home")

//                 }
//                     console.log(userLogin)
//                 }
//             }

//             setErrors(validateErrors)






//     }

//     return (
//         <div className='Login'>
//             <div className='container'>
//                 <div className='facebook'>
//                     <h1 className='book' style={{ color: "#1979f4" }}>facebook</h1>
//                     <p>Facebook helps you connect and share with people in your life.</p>
//                 </div>
//                 <div className="loginContainer">
//                     <h2 className='books' style={{ color: "#1979f4" }}>facebook</h2>
//                     <form  onSubmit={handleLoginBtn}>
//                         <div className='inputAction'>
//                            <input type="email"  name="email" onChange={getData} autoComplete='on'

//                          placeholder='Email address or Mobile number'></input>

//                          {errors.email && <span style={{color:"red", fontWeight:"bold"}}>{errors.email}</span>}
//                         </div>
//                         <div className='inputAction'>
//                         <input type="password" minLength={6}  name="password" onChange={getData}
//                          placeholder='Password'></input>
//                          {errors.password && <span style={{color:"red", fontWeight:"bold"}}>{errors.password}</span>}

//                         </div>
//                         <div className='loginbtn input'>
//                             <button type="submit" style={{ backgroundColor: "#1979f4", color: "white", }} >Login</button>
//                         </div>
//                         <div className='forgetPssword input'>
//                             < span style={{ color: "blue" }}>forgetten password ?</span>
//                         </div>
//                         <div className='empty input'>

//                         </div>
//                         <div className='createbtn'>
//                             <Link to="/register">
//                                 <button type="submit" style={{ backgroundColor: "#40b927", color: "white" }}>Create New Account</button>
//                             </Link>
//                         </div>
//                         {/* {error && <span>Something went wrong...</span>} */}


//                     </form>
//                     <div className='createpage'>
//                         <p><span style={{ fontWeight: "bold", fontSize: "18px" }}>Create a Page</span> for celebrity, brand or bussiness.</p>
//                     </div>

//                 </div>
//             </div>


//         </div>
//     )

// }


// export default Login




import React, { useState, useEffect } from 'react'
import "./login.css"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { loginFailure, loginSuccess, clearMessages, authError, authSuccessLogin, authSuccessRegister } from '../../slice/authSlice';

import { Link } from 'react-router-dom';


const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const errors = useSelector(authError);
    const successMessageLogin = useSelector(authSuccessLogin);

    const [inpVal, setInpVal] = useState({

        email: "",
        password: "",

    })







    const getData = (e) => {
        const { value, name } = e.target;
        // console.log(value,name)
        setInpVal((prev) => ({
            ...prev,
            [name]: value


        }))
    }

   


    const handleLoginBtn = (e) => {
        e.preventDefault();
        dispatch(clearMessages());
        const storedUsers = JSON.parse(localStorage.getItem("userDetails")) || [];

        const { email, password } = inpVal;

        const validateErrors = {};

        if (!inpVal.email || !inpVal.email.trim()) {
            validateErrors.email = "Email is required";

        } else if (!/\S+@\S+\.\S+/.test(email)) {
            validateErrors.email = "Email is not valid";

        }

        if (!inpVal.password || !inpVal.password.trim()) {
            validateErrors.password = "Password is required";

        } else if (inpVal.password.length < 6) {
            validateErrors.password = "Password must be 6 characters";

        }

        if (Object.keys(validateErrors).length === 0) {
            const userLogin = storedUsers.find((el) => el.email === email && el.password === password);
            console.log(userLogin)
            if (!userLogin) {
                validateErrors.general = "Invalid email or password";
                dispatch(loginFailure(validateErrors));
            } else {

                dispatch(loginSuccess({
                    message: "Login successfully",
                    id: userLogin.id,
                    email: userLogin.email,
                    password: userLogin.password,
                    profileImage: userLogin.profileImage
                }));

                navigate("/Home");
            }
        } else {
            dispatch(loginFailure(validateErrors));
        }
    };









    return (
        <div className='Login'>
            <div className='container'>
                <div className='facebook'>
                    <h1 className='book' style={{ color: "#1979f4" }}>facebook</h1>
                    <p>Facebook helps you connect and share with people in your life.</p>
                </div>
                <div className="loginContainer">
                    <h2 className='books' style={{ color: "#1979f4" }}>facebook</h2>
                    <form onSubmit={handleLoginBtn}>
                        <div className='inputAction'>
                            <input type="email" name="email" onChange={getData} autoComplete='on'

                                placeholder='Email address or Mobile number'></input>

                            {errors && errors.email && <span style={{ color: "red", fontWeight: "bold" }}>{errors.email}</span>}

                        </div>
                        <div className='inputAction'>
                            <input type="password" minLength={6} name="password" onChange={getData}
                                placeholder='Password'></input>
                            {errors && errors.password && <span style={{ color: "red", fontWeight: "bold" }}>{errors.password}</span>}

                        </div>
                        <div className='loginbtn input'>
                            <button type="submit" style={{ backgroundColor: "#1979f4", color: "white", }} >Login</button>
                        </div>
                        <div className='forgetPssword input'>
                            < span style={{ color: "blue" }}>forgetten password ?</span>
                        </div>
                        <div className='empty input'>

                        </div>
                        {errors && errors.general && <span style={{ color: "red", fontWeight: "bold" }}>{errors.general}</span>}

                        {successMessageLogin && <span style={{ color: "green" }}>{successMessageLogin}</span>}
                        <div className='createbtn'>
                            <Link to="/register">
                                <button type="submit" style={{ backgroundColor: "#40b927", color: "white" }}>Create New Account</button>
                            </Link>
                        </div>
                        {/* {successMessage && <span>Login successfully....</span>} */}



                    </form>
                    <div className='createpage'>
                        <p><span style={{ fontWeight: "bold", fontSize: "18px" }}>Create a Page</span> for celebrity, brand or bussiness.</p>
                    </div>

                </div>
            </div>


        </div>
    )

}


export default Login




