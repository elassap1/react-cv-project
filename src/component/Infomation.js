import React, { Component } from 'react'
import Inputs from './Inputs'

export class Infomation extends Component {
  info = ['first name','last name','age','address','email','phone'];
  type = ['text','text','number','text','email','number']
  
  render() {
  
    let info = this.info.map((item,index) =>{
      return <Inputs key={index} type={this.type[index]} title={item} name={item} />
    });
    return (
      <div className='container col-12'>

        <div className="col-12 row-3">
          <button className='offset-1 btn btn-danger col-4 my-3 dropdown-toggle disabled'>Personal Details</button>
        </div>

        <div className='d-flex flex-wrap info'>
        {info}
        </div>
        
      </div>
    )
  }
}

export default Infomation