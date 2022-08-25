import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'
import EducationInput from './components/Education';
import ExperienceInput from './components/Experience';
import SkillsInput from './components/Skills';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isEducationEdit: true,
      isExperienceEdit: true,
      isSkillsEdit: true,
      isSummaryEdit: true
    }

    this.handleEducationSubmit = this.handleEducationSubmit.bind(this)
    this.handleJobSubmit = this.handleJobSubmit.bind(this)
    this.handleSkillsSubmit = this.handleSkillsSubmit.bind(this)
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
        <EducationInput submit = {this.handleEducationSubmit} education = {this.state.education} />
        <ExperienceInput submit = {this.handleJobSubmit} />
        <SkillsInput submit = {this.handleSkillsSubmit} />
      </div>
    )
  }
}



export default App;
