import React ,{useState } from 'react'
export const Task1 = () => {
    const [data,setData]=useState({
        firstname:'',
        lastname:'',
        email:'',
        password:'',
        confirmpassword:'',
        gender:'',
        languages:[],
        accept:false

    })
    const{firstname,lastname,email,password,confirmpassword,gender,other,languages,accept}=data;
    const changeHandler=e=>{
        const value=e.target.type==="checkbox" ? 'e.target.checked': 'e.target.value';
        setData({...data,[e.target.name]:e.target.value});

        if (e.target.name === 'language') {
            if (e.target.checked) {
                setData({ ...data, languages: [...languages, e.target.value] });
            } else {
                setData({ ...data, languages: languages.filter(lang => lang !== e.target.value) });
            }
        }
    }
    const acceptHandler = e => {
        setData({ ...data, accept: e.target.checked });
    };
    const submitHandler = e =>{
        e.preventDefault()
        if((password === confirmpassword) && accept){
            console.log(data)
        }
        else{
            alert("Password must be same or accept the conditions")
        }    
    }
  return (
    <div>
        <center>
        <h1>Registration Form </h1>
        <form onSubmit={submitHandler}>
        <label><strong>FirstName</strong></label><br />
            <input type='text' name="firstname" value={firstname}
            onChange={changeHandler}  required></input><br />
            <label><strong>LastName</strong></label><br />
            <input type='text' name="lastname" value={lastname}
            onChange={changeHandler}  required></input><br />
            <label><strong>Email</strong></label><br />
            <input type="email" name="email"  value={email}
            onChange={changeHandler} required /><br />
            <label><strong>Password</strong></label><br />
            <input type="password"  name="password" value={password} 
            onChange={changeHandler}  required /><br />
            <label><strong>Confirm Password</strong></label><br />
            <input type="password"  name="confirmpassword" value={confirmpassword}
            onChange={changeHandler}  required/> <br />
            {/* {password !==  confirmpassword ? <p>"password not matched"</p> : null} */}
            <label><strong>Gender</strong></label><br />
            <input type='radio' name='gender' value='male' onChange={changeHandler}/><label>Male</label><br />
            <input type='radio' name='gender' value='female' onChange={changeHandler} /><label>Female</label><br />
            <input type='radio' name='gender' value='other' onChange={changeHandler} /><label>Other</label><br />
            <label><strong>Languages</strong></label><br />
            <input type='checkbox' name='language' value='HTML' onChange={changeHandler}/><label>HTML</label><br />
            <input type='checkbox'  name='language' value='CSS' onChange={changeHandler}/><label>CSS</label><br/>
            <input type='checkbox'  name='language' value='JS' onChange={changeHandler}/><label>JS</label><br/>
            <input type='checkbox'  name='accept' checked={accept} onChange={acceptHandler}/><label>I accept the above conditionsm</label><br/>
            <input type='submit' name="submit"/>
        </form>
        </center>
    </div>
  )
}