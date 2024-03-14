// import React, { useState } from 'react'
// import { useNavigate,Link } from 'react-router-dom'
// import "./register.css"

// const Register = () => {

//     const [inpVal,setInpVal]= useState({
//         firstName:"",
//         surName:"",
//         email:"",
//         password:"",
//         day:"",
//         month:"",
//         year:"",
//         gender:""
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

//     }




//     const handleregister = (e) => {
//     e.preventDefault();
//     // const { firstName, surName, email, password, day, month, year, male, female, custom } = inpVal;
//              const validateErrors = {};
//             if(!inpVal.firstName.trim() && !inpVal.surName.trim()){
//                 validateErrors.firstName  ="firstName  is required"
//                 validateErrors.surName = "Surname is required";
//             }
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
//             if(!inpVal.day && !inpVal.month && !inpVal.year){
//                 validateErrors.day="day is required";
//                 validateErrors.month="month is required";
//                     validateErrors.year="year is required"
//             }
//             if(inpVal.male || inpVal.female || inpVal.custom){
//                 validateErrors.gender="gender is required"
//             }
//         setErrors(validateErrors)
//         if(Object.keys(validateErrors).length===0){
//             setSuccess("Form register successfully")

//             localStorage.setItem("userDetails",JSON.stringify([...storage,inpVal]))
//              setInpVal("");
//         }

//      }       



//   const days = Array.from({ length: 31 }, (_, i) => i + 1);
//     const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//     const currentYear = new Date().getFullYear();

//     const years = Array.from({ length: 100 }, (_, i) => currentYear - i)




//     return (
//         <div className='registerPage'>
//             <div className='registerContainer'>

//                 <div className='register'>
//                     <h1>Sign up</h1>
//                     <div className='profileImg'>

//                     </div>
//                     <span >x</span>
//                 </div>
//                 <p className='easy'>It's quick and easy.</p>

//                 <div className='hr'></div>
//                 <form onSubmit={handleregister}>

//                     <div className='row'>
//                         <div>
//                             <input type="text"   name="firstName" onChange={getData} autoComplete='on'
//                                 placeholder='First Name'
//                                 className='registerName'></input>
//                              {errors.firstName && <span style={{color:"red", fontWeight:"bold"}}>{errors.firstName}</span>}
//                          </div>
//                          <div>
//                                 <input type="text" name="surName" onChange={getData} autoComplete='on'
//                                     placeholder='Sur Name'
//                                     className='registerName'></input>
//                                  {errors.surName && <span style={{color:"red", fontWeight:"bold"}}>{errors.surName}</span>}

//                         </div>


//                     </div>


//                     <div className='email'>
//                         <input type="email"  name="email" onChange={getData} autoComplete='on'

//                          placeholder='Email address or Mobile number'></input>

//                          {errors.email && <span style={{color:"red", fontWeight:"bold"}}>{errors.email}</span>}

//                         </div>


//                     <div className='password'>
//                         <input type="password" minLength={6}  name="password" onChange={getData}
//                          placeholder='Password'></input>
//                          {errors.password && <span style={{color:"red", fontWeight:"bold"}}>{errors.password}</span>}


//                     </div>

//                     <h5 className='registerDate'>Date of Birth ?</h5>
//                     <div className='rowDate'>
//                         <label>Day</label>
//                         <select  name= "day" onChange={getData}>
//                             {days.map((d) => (
//                                 <option key={d} value={d}>
//                                     {d}
//                                 </option>))}
//                         </select>


//                         <label>Month</label>
//                         <select  name="month" onChange={getData}>
//                             {months.map((m) => (
//                                 <option key={m} value={m}>
//                                     {m}
//                                 </option>
//                             ))}
//                         </select>

//                         <label>Year</label>
//                         <select  name= "year" onChange={getData}>
//                             {years.map((y) => (
//                                 <option key={y} value={y}>
//                                     {y}
//                                 </option>

//                             ))}
//                         </select>

//                     </div>
//                   {errors.day && <span style={{color:"red", fontWeight:"bold"}}>{errors.day}</span>}
//                   {errors.month && <span style={{color:"red", fontWeight:"bold"}}>{errors.month}</span>}
//                   {errors.year && <span style={{color:"red", fontWeight:"bold"}}>{errors.year}</span>}


//                     <h5 className='registerGender'>Gender ?</h5>
//                     <div className='registerRadioContainer'>
//                         <div className='wrapper'>
//                             <label>Female</label>
//                             <input type="radio" name="gender" onChange={getData} ></input>
//                              {/* {errors.year && <span style={{color:"red", fontWeight:"bold"}}>{errors.year}</span>} */}


//                         </div>
//                         <div className='wrapper'>
//                             <label>Male</label>
//                             <input type="radio" name="gender" onChange={getData} ></input>
//                         </div>
//                         <div className='wrapper'>
//                             <label>Custom</label>
//                             <input type="radio" name="gender" onChange={getData}></input>
//                         </div>
//                     </div>
//                      {errors.gender && <span style={{color:"red", fontWeight:"bold"}}>{errors.gender}</span>}

//                     <p className='registerPolicy'>
//                         People who use our service may have uploaded your contact information to  Facebook. <span> Learn more</span>.</p>
//                     <p className='registerPolicy'> By clicking sign up, you agree to our <span>Terms ,Privacy, Policy</span> and <span>Cookies policy</span> You may receive SMS notification from us and can opt out at any time.

//                     </p>

//                     <p className='registerPolicy'> Already have a account <Link to="/login"> Sign Up? </Link></p> 
//                     {success && <span style ={{color:"green"}}>{success}</span>}


//                     <div className='registerBtn'>
//                         {/* <Link to="/login"> */}
//                         <button type="submit" style={{ backgroundColor: "#03a301", color: "white" }}>Sign Up</button>
//                         {/* </Link> */}
//                     </div>
//                 </form>


//             </div>

//         </div>
//     )

// }

// export default Register



import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import "./register.css"
import { useDispatch, useSelector } from 'react-redux'
import { DriveFolderUploadOutlined } from '@mui/icons-material';

import { authError, registerFailure, registerSuccess, authSuccessRegister, clearMessages } from '../../slice/authSlice'



const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const errors = useSelector(authError);
    const successMessageRegister = useSelector(authSuccessRegister);


    const [inpVal, setInpVal] = useState({
        profileImage: null,
        firstName: "",
        surName: "",
        email: "",
        password: "",
        day: "",
        month: "",
        year: "",
        gender: ""
    })
    console.log(inpVal.profileImage);







    const getData = (e) => {
        const { value, name, type } = e.currentTarget;

        if (type === 'radio') {
            setInpVal((prev) => ({
                ...prev,
                [name]: value.trim(),
            }));
        } else if (type === 'file') {
            setInpVal((prev) => ({
                ...prev,
                profileImage: e.target.files[0],
            }));
        } else {
            setInpVal((prev) => ({
                ...prev,
                [name]: value.trim(),
            }));
        }
    };


    // const getDataImg=(e)=>{
    // const file= e.target.value[0]
    // const blobUrl= URL.createObjectURL(file)

    // setProfileImage(blobUrl)
    // }
    // console.log(profileImage)





    const handleregister = (e) => {
        e.preventDefault();
        dispatch(clearMessages());
        // const { firstName, surName, email, password, day, month, year, male, female, custom } = inpVal;
        const validateErrors = {};
        if (!inpVal.firstName.trim() && !inpVal.surName.trim()) {
            validateErrors.firstName = "firstName  is required"
            validateErrors.surName = "Surname is required";
        }
        if (!inpVal.email.trim()) {
            validateErrors.email = "Email is required"
        } else if (!/\S+@\S+\.\S+/.test(inpVal.email)) {
            validateErrors.email = "Email is not valid"
        }
        if (!inpVal.password.trim()) {
            validateErrors.password = "password is required"
        } else if (inpVal.password.length < 6) {

            validateErrors.password = "Password mus be 6 characters"
        }
        if (!inpVal.day && !inpVal.month && !inpVal.year) {
            validateErrors.day = "day is required";
            validateErrors.month = "month is required";
            validateErrors.year = "year is required"
        }
        if (!(inpVal.gender === "male" || inpVal.gender === "female" || inpVal.gender === "custom")) {
            validateErrors.gender = "gender is required";
        }
        dispatch(registerFailure(validateErrors));

        if (Object.keys(validateErrors).length === 0) {

            //  const existingUsers = JSON.parse(localStorage.getItem("userDetails")) || [];

            // localStorage.setItem("userDetails",JSON.stringify([...existingUsers,inpVal]))
            dispatch(registerSuccess({
                profileImage: inpVal.profileImage ? URL.createObjectURL(inpVal.profileImage) : "/assets/ProfileCover/default-pic.jpg",
                name: inpVal.firstName + inpVal.surName,
                firstName: inpVal.firstName,
                surName: inpVal.surName,
                email: inpVal.email,
                password: inpVal.password,
                gender: inpVal.gender,
                birthDay: inpVal.day,
                month: inpVal.month,
                year: inpVal.year,


            }))
            // Reset inpVal to its initial state
            setInpVal({
                profileImage: null,
                firstName: "",
                surName: "",
                email: "",
                password: "",
                day: "",
                month: "",
                year: "",
                gender: ""
            });



        }


    }



    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const currentYear = new Date().getFullYear();

    const years = Array.from({ length: 100 }, (_, i) => currentYear - i)




    return (
        <div className='registerPage'>
            <div className='registerContainer'>

                <div className='register'>
                    <h1>Sign up</h1>
                    <div className='profileImg'>

                    </div>
                    <span >x</span>
                </div>
                <p className='easy'>It's quick and easy.</p>
                <div className='top'>
                    <img
                        src={inpVal.profileImage ? URL.createObjectURL(inpVal.profileImage)
                            : "/assets/ProfileCover/default-pic.jpg"}
                        alt="" />

                    <div className='formInput'>
                        <label htmlFor='file'>
                            ProfileImage:<DriveFolderUploadOutlined className='icon' />
                            <input type="file"
                                name="file"
                                id="file"
                                accept=".png,.jpeg,.jpg"
                                style={{ display: "none" }}

                                onChange={(e) => getData(e)}>


                            </input>
                        </label>
                    </div>

                </div>

                <div className='hr'></div>
                <form onSubmit={handleregister}>

                    <div className='row'>
                        <div>
                            <input type="text" name="firstName" onChange={getData} autoComplete='on'
                                placeholder='First Name'
                                className='registerName'></input>
                            {errors && errors.firstName && <span style={{ color: "red", fontWeight: "bold" }}>{errors.firstName}</span>}
                        </div>
                        <div>
                            <input type="text" name="surName" onChange={getData} autoComplete='on'
                                placeholder='Sur Name'
                                className='registerName'></input>
                            {errors && errors.surName && <span style={{ color: "red", fontWeight: "bold" }}>{errors.surName}</span>}

                        </div>


                    </div>


                    <div className='email'>
                        <input type="email" name="email" onChange={getData} autoComplete='on'

                            placeholder='Email address or Mobile number'></input>

                        {errors && errors.email && <span style={{ color: "red", fontWeight: "bold" }}>{errors.email}</span>}

                    </div>


                    <div className='password'>
                        <input type="password" minLength={6} name="password" onChange={getData}
                            placeholder='Password'></input>
                        {errors && errors.password && <span style={{ color: "red", fontWeight: "bold" }}>{errors.password}</span>}


                    </div>

                    <h5 className='registerDate'>Date of Birth ?</h5>
                    <div className='rowDate'>
                        <label>Day</label>
                        <select name="day" onChange={getData}>
                            {days.map((d) => (
                                <option key={d} value={d}>
                                    {d}
                                </option>))}
                        </select>


                        <label>Month</label>
                        <select name="month" onChange={getData}>
                            {months.map((m) => (
                                <option key={m} value={m}>
                                    {m}
                                </option>
                            ))}
                        </select>

                        <label>Year</label>
                        <select name="year" onChange={getData}>
                            {years.map((y) => (
                                <option key={y} value={y}>
                                    {y}
                                </option>

                            ))}
                        </select>

                    </div>
                    {errors && errors.day && <span style={{ color: "red", fontWeight: "bold" }}>{errors.day}</span>}
                    {errors && errors.month && <span style={{ color: "red", fontWeight: "bold" }}>{errors.month}</span>}
                    {errors && errors.year && <span style={{ color: "red", fontWeight: "bold" }}>{errors.year}</span>}


                    <h5 className='registerGender'>Gender ?</h5>
                    <div className='registerRadioContainer'>
                        <div className='wrapper'>
                            <label>Female</label>
                            <input type="radio" name="gender" value="female" onChange={getData} ></input>
                            {/* {errors.year && <span style={{color:"red", fontWeight:"bold"}}>{errors.year}</span>} */}


                        </div>
                        <div className='wrapper'>
                            <label>Male</label>
                            <input type="radio" name="gender" value="male" onChange={getData} ></input>
                        </div>
                        <div className='wrapper'>
                            <label>Custom</label>
                            <input type="radio" name="gender" value="custom" onChange={getData}></input>
                        </div>
                    </div>
                    {errors && errors.gender && <span style={{ color: "red", fontWeight: "bold" }}>{errors.gender}</span>}

                    <p className='registerPolicy'>
                        People who use our service may have uploaded your contact information to  Facebook. <span> Learn more</span>.</p>
                    <p className='registerPolicy'> By clicking sign up, you agree to our <span>Terms ,Privacy, Policy</span> and <span>Cookies policy</span> You may receive SMS notification from us and can opt out at any time.

                    </p>

                    <p className='registerPolicy'> Already have a account <Link to="/login"> Sign Up? </Link></p>
                    {successMessageRegister && <span style={{ color: "green" }}>{successMessageRegister}</span>}


                    <div className='registerBtn'>
                        {/* <Link to="/login"> */}
                        <button type="submit" style={{ backgroundColor: "#03a301", color: "white" }}>Sign Up</button>
                        {/* </Link> */}
                    </div>
                </form>


            </div>

        </div>
    )

}

export default Register



