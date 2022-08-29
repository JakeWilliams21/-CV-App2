import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'
import EducationInput, {EducationDisplay} from './components/Education';
import ExperienceInput, {ExperienceDisplay} from './components/Experience';
import SkillsInput, {SkillsDisplay} from './components/Skills';
import PersonalInput from './components/Personal';
import Navbar from './components/Navbar';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isPersonalEdit: true,
      isEducationEdit: true,
      isExperienceEdit: true,
      isSkillsEdit: true,
      isSummaryEdit: true
    }

    this.handleEducationSubmit = this.handleEducationSubmit.bind(this)
    this.handleJobSubmit = this.handleJobSubmit.bind(this)
    this.handleSkillsSubmit = this.handleSkillsSubmit.bind(this)
  }

  handlePersonalSubmit = (info) => {
    this.setState(prevState => {
      return {
        info: {
          firstName: info.firstName,
          lastName: info.lastName,
          email: info.email,
          phone: info.name
        },
        isPersonalEdit: !prevState.isPersonalEdit
      }
    })

    console.log(this.state);
  }

  handleEducationSubmit = (education) => {
    this.setState(prevState => {

       return {
        education: {
          school: education.school,
          major: education.major,
          schoolFrom: education.schoolFrom,
          schoolTo: education.schoolTo
        },
        isEducationEdit: !prevState.isEducationEdit
       }
      
    })

    console.log(this.state);
  }

  handleJobSubmit = (job) => {
    this.setState(prevState => {

      return {
        job: {
          company: job.company,
          position: job.position,
          jobFrom: job.jobFrom,
          jobTo: job.jobTo
        },
        isExperienceEdit: !prevState.isExperienceEdit
      }
    })

    console.log(this.state );
  }

  handleSkillsSubmit = (skill) => {
    this.setState(prevState => {
      return {
        skill: {
          skillName: skill.skillName,
          skillLevel: skill.skillLevel
        },
        isSkillsEdit: !prevState.isSkillsEdit
      }
    })
    console.log(this.state);
  }

  render () {
    return (
      <div className = 'parent-div'>
      <Navbar />
      {this.state.isPersonalEdit ? 
        <PersonalInput submit = {this.handlePersonalSubmit} personal = {this.state.personal} /> :
        <h1>Done!</h1>
      }
      {this.state.isEducationEdit ?
        <EducationInput submit = {this.handleEducationSubmit} education = {this.state.education} /> :
        <EducationDisplay education = {this.state.education} />
      }
      {this.state.isExperienceEdit ?
        <ExperienceInput submit = {this.handleJobSubmit} experience = {this.state.experience} /> :
        <ExperienceDisplay experience = {this.state.experience} />
      }
      {this.state.isSkillsEdit ?
        <SkillsInput submit = {this.handleSkillsSubmit} /> :
        <SkillsDisplay skills = {this.state.skill} />
      }
        
      </div>
    )
  }
}



export default App;
