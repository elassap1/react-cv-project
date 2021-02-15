import React, { Component } from 'react'
import Information from './component/Infomation'
import Education from './component/Education'
import Experienc from './component/Experienc'
import Skills from './component/Skills'
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/app.css'

class App extends Component {

  render() {
    return (
      <div className='container col-10 root'>
        <Information  display={this.displayHandler} />
        <Education  display={this.displayHandler}/>
        <Experienc  display={this.displayHandler}/>
        <Skills      display={this.displayHandler}/>
      </div>
    )
  }
}

export default App;
