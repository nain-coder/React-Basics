import { useState } from "react"

export default function Forms(){
    let [formData,setFormData]=useState({
    fullName:"",
    userName:"",
    password:""
    })

    // let handleNameChange=(event) =>{
    //    setFullName(event.target.value);
    // }

    // let handleUserName = (event) => {
    //   setUserName(event.target.value);
    // };

    let handleInputChange=(event)=>{
     
     setFormData((currData)=>{
        return {
          ...currData,
          [event.target.name]:  event.target.value,
        };
     })

    }
   let handleSubmit=(event)=>{
    console.log(formData);

    event.preventDefault();
    setFormData({
      fullName: "",
      userName: "",
      password:""
    });
   }

    return (
      <>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fullName">Full Name</label>
          <input
            placeholder="enter your full name"
            type="text"
            value={formData.fullName}
            id="fullName"
            name="fullName"
            onChange={handleInputChange}
          />

          <label htmlFor="userName">userName</label>
          <input
            placeholder="enter your userName"
            type="text"
            value={formData.userName}
            id="userName"
            name="userName"
            onChange={handleInputChange}
          />

          <label htmlFor="password">password</label>
          <input
            placeholder="enter your password"
            type="password"
            value={formData.password}
            id="password"
            name="password"
            onChange={handleInputChange}
          />

          <button>Submit</button>
        </form>
      </>
    );
}