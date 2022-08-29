import React, {Component} from "react";
import './Navbar.css'

class Navbar extends Component {
    constructor() {
        super() 

        this.state = {}
    }

    render () {
        return (
            <div className = 'navbar'>
                <h2>
                    CV Generator
                </h2>
            </div>
        )
    }

}

export default Navbar