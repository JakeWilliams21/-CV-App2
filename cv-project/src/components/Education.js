import React, {Component} from 'react'
import './Education.css'

class EducationInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            school:  '',
            major: '',
            schoolFrom: '',
            schoolTo: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.submit(this.state)
    }

    handleChange = (e, valueName) => {
        this.setState(prevState => {
            let newState = {...prevState}
            newState[valueName] = e.target.value
            return newState
        })
    }

    render () {
        return (
            <div className = 'education-input-div'>
                <h2>Education</h2>
                <form className = 'education-form'>
                    <input value = {this.state.school} placeholder = 'School' type={'text'} id = 'school-name' name = 'school-name' onChange = {e => this.handleChange(e, 'school')} />
                    <input value = {this.state.major}  placeholder = 'Specialization' type = 'texdt' id = 'major' name = 'major' onChange = {e => this.handleChange(e, 'major')} />
                    <input value = {this.state.schoolFrom} placeholder = 'From' type = 'date' id = 'school-from' name = 'school-from' onChange = {e => this.handleChange(e, 'schoolFrom')} />
                    <input value = {this.state.schoolTo} placeholder = 'To' type = 'date' id = 'school-to' name = 'school-to' onChange = {e => this.handleChange(e, 'schoolTo')} />
                    <button onClick = {this.handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}

export default EducationInput