import React, { useState } from 'react'

function Registration() {
  const [input,setInput] = useState({
    fullname : " ",
    lastname : " ",
    email : " "
  })
  const InputHandler=(e)=>{
      let name = e.target.name;
      let value = e.target.value;
      setInput(
        {
          ...input,
          [name] : value
        }
      )
  }
  const onSubmitHandler=(e)=>{
      e.preventDefault();
      console.log(input);
      setInput(
        {
          fullname : " ",
          lastname : " ",
          email : " "
        }
      )
  }
  return (
    
    <div className='form-container'>
           <form onSubmit={onSubmitHandler}>
            <h1>Registration Form</h1>
            <div className='form-input'>
                <label className='head'>Full Name</label>
                <input type="text" name='fullname' value={input.fullname} onChange={InputHandler}/>
            </div>
            <div className='form-input'>
                <label className='head'>Last Name</label>
                <input type="text" name='lastname' value={input.lastname} onChange={InputHandler}/>
            </div>
            <div className='form-input'>
                <label className='head'>Email</label>
                <input type="text" name='email' value={input.Email} onChange={InputHandler}/>
            </div>
            <div className='submit-button'>
              <button type='submit'>Submit</button>
            </div>
            </form>    
    </div>
  )
}

export default Registration
