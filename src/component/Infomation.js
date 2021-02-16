import React, { Component } from 'react'
import Inputs from './Inputs'

export class Infomation extends Component {
  
  state = {
    isDisplay: false,
  }

  render() {


    let display = this.state.isDisplay;

    let info = ['fristName', 'lastName', 'age', 'address', 'email', 'phone'];

    info = info.map((item,index) =>{

      return <Inputs key={index} title={item} name={item}
      type={item==='age'||item==='phone'?'number':item==='email'?'email':'text'} />

    });

    return (

    <div className='container col-12'>

      <div className="col-12 row-3">
          <button className='offset-1 btn btn-danger col-4 my-3 dropdown-toggle disabled' >Personal Details</button>
          <button 
          onClick={()=>{
            this.setState({isDisplay:!display})
          }}
          className='btn btn-info ml-2' >{display?'Hide':'Display'}</button>
      </div>

        <div className='d-flex flex-wrap info'>
        {display?info:''}
      </div>
        
      </div>

)
  }
}

export default Infomation