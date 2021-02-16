import React, { Component } from 'react'
import Inputs from './Inputs'

export class Education extends Component {

  state = {
    modal : [],
      isDisplay: false,
    }

    info = ['schoolName','study','date'];
    type = ['text','text','date']

    render() {

      let edu = 
          <div className='d-flex flex-wrap info col-12'> 
            {this.info.map((item,index) =>{
              return <Inputs type={this.type[index]} title={item} name={item} key={index} />
            })}
            <button 
            onClick={(e)=>{e.target.parentNode.remove()}}
            className='btn btn-danger absolute' >X</button>
          </div>

    return (
      <div className='container col-12'>

        <div className="col-12">
        <button className='offset-1 btn btn-danger col-4 my-3 dropdown-toggle disabled'>Education</button>
          <button 
          onClick={()=>{this.setState({modal: [...this.state.modal,edu]})}}
          className='btn btn-info ml-2' >Add Education</button>
        </div>

        <div className='d-flex flex-wrap'>
        {this.state.modal}
        </div>
        
      </div>

    )
  }
}

export default Education
