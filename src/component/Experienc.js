import React, { Component } from 'react'
import Inputs from './Inputs'

export class Experienc extends Component {
  info = ['company','position','task','from','to'];
  type = ['text','text','text','date','date']

  state = {
    modal : [],
    submit: ''
  }

  render() {
  let edu = 
    <div className='d-flex flex-wrap info position-relative'>
      {this.info.map((item,index) =>{
        return <Inputs type={this.type[index]} title={item} name={item} key={index} />
      })}
      <button 
      onClick={(e)=>{e.target.parentNode.remove()}}
      className='btn btn-danger absolute' >X</button>
    </div>;

      let sub =
      <div className='col-12'>
       <button className='btn btn-success offset-3 mt-3 col-3' >Submit</button>
      <button className='btn btn-secondary ml-2 mt-3 col-2' >Edit</button>
      </div>;

    return (
      <div className='container col-12'>

        <div className="col-12 row-3">
        <button className='offset-1 btn btn-danger col-4 my-3 dropdown-toggle disabled'>Personal Details</button>
          <button 
          onClick={()=>{this.setState({
            modal: [...this.state.modal,edu],
          })}}
          className='btn btn-info ml-2' >Add Experience</button>
        </div>

        <div className='d-flex flex-wrap info'>
        {this.state.modal}
        </div>
        
      </div>
    )
  }
}

export default Experienc
