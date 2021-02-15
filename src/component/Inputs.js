import React, { Component } from 'react'

export class Inputs extends Component {
  render() {
    let {title,name,type} = this.props;
    return (
      <div className='col-4 my-2'>
        <fieldset className='col-12 center' >
          <input placeholder={title} type={type} name={name} className='pl-2'/>
        </fieldset>
      </div>
    )
  }
}

export default Inputs
