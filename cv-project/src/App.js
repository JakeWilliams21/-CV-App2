import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'
import EducationInput from './components/Education';
import ExperienceInput from './components/Experience';
import SkillsInput from './components/Skills';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div>
        <EducationInput />
        <ExperienceInput />
        <SkillsInput />
      </div>
    )
  }
}



export default App;
