import React, {Component} from 'react'
import '../App.css';
// import EditPassword from './EditPassword'


const Password = ({password, name}) =>  {
  console.log(name, password);
  return (
      <div className='pwd'>
        Name: {name}
        <br></br>
        <br></br>
        Password: {password}
        <br></br>
        <br></br>
      </div>
  )
}

export default Password
