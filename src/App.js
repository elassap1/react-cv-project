import React, { Component } from 'react'
import Information from './component/Infomation'
import Education from './component/Education'
import Experienc from './component/Experienc'
import Skills from './component/Skills'
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/app.css'

class App extends Component {

  state = {
      id: 0,
      person:{
        info:{
          fristName:'',
          lastName:'',
          age:'',
          address:'',
          email:'',
          phone:'',
        },
        edu:{
          schoolName:[],
          study:[],
          date:[],
        },
        exp:{
          company:[],
          from:[],
          till:[],
        },
        skill:[],
      },
  };

  submitHandler = () => {
    let inputs = Array.from(document.querySelectorAll('input'));
    let validation = true,
        valid = [];

    inputs.forEach((item, index)=>{
      if(validation && (item.value.length > 4 || (item.name === 'age' && item.value !== ''))){
        valid[item.name]=item.value;
        item.value='';
      }else{
        validation= false;
        valid = [];
        item.value = '';
      }
    })

    for(let key in valid){
      console.log(valid[key])
    }
  }

  render() {
    return (
      <div className='container col-10 root'>
        <Information  display={this.displayHandler} info={this.state.person.info} />
        <Education  display={this.displayHandler} edu={this.state.person.edu}/>
        <Experienc  display={this.displayHandler} exp={this.state.person.exp}/>
        <Skills      display={this.displayHandler} skill={this.state.person.skill}/>
        <button className='btn btn-success offset-3 col-4 mt-5'onClick={this.submitHandler} >Submit</button>
      </div>
    )
  }
}

export default App;
