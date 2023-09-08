import React, { useState } from 'react';
function Regristation() {
    const [data,setData]=useState({
        firstname:'',
        email:'',
        password:'',
        confirmpassword:'',
        gender:'',
        Favourite:[],
        accept:false

    })
    const{firstname,email,password,confirmpassword,gender,other,Favourite,accept}=data;
    const changeHandler=e=>{
        const value=e.target.type==="checkbox" ? 'e.target.checked': 'e.target.value';
        setData({...data,[e.target.name]:e.target.value});

        if (e.target.name === 'Favourite    ') {
            if (e.target.checked) {
                setData({ ...data, Favourite: [...Favourite, e.target.value] });
            } else {
                setData({ ...data, Favourite: Favourite.filter(fav => fav !== e.target.value) });
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
            <label><strong>Favorite</strong></label><br />
            <input type='checkbox' name='language' value='CAR' onChange={changeHandler}/><label>Car</label><br />
            <input type='checkbox'  name='language' value='BIKE' onChange={changeHandler}/><label>Bike</label><br/>
            <input type='checkbox'  name='language' value='BUS' onChange={changeHandler}/><label>Bus</label><br/>
            <input type='checkbox'  name='accept' checked={accept} onChange={acceptHandler}/><label>I accept the above conditionsm</label><br/>
            <input type='submit' name="submit"/>
        </form>
        </center>
    </div>
  )
}


export default Regristation