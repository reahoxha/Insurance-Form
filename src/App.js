import React, { Component } from 'react'
import './App.css'



class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Emri: "",
            Mbiemri: "",
            NumriPersonal: "",
            LlojiSigurimit: "",


        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    Emrihandler = (event) => {
        this.setState({
            Emri: event.target.value
        })
    }
    Mbiemrihandler = (event) => {
        this.setState({
            Mbiemri: event.target.value
        })
    }
    NumriPersonalhandler = (event) => {
        this.setState({
            NumriPersonal: event.target.value
        })
    }

    LlojiSigurimithandler = (event) => {
        this.setState({
            LlojiSigurimit: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.Emri} ${this.state.Mbiemri}  SIGURIMI U BLE!`)
        console.log(this.state);
        this.setState({
            Emri: "",
            Mbiemri: "",
            NumriPersonal: '',
            LlojiSigurimit: "",
        })
     event.preventDefault()
        
    }




    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <h1>Blej Sigurim</h1>
                    <label>FirstName :</label> <input type="text" value={this.state.Emri} onChange={this.Emrihandler} placeholder="Emri..." /><br />
                    <label>LastName :</label> <input type="text" value={this.state.Mbiemri} onChange={this.Mbiemrihandler} placeholder="Mbiemri..." /><br />
                    <label>Your ID :</label> <input type="text" value={this.state.NumriPersonal} onChange={this.NumriPersonalhandler} placeholder="Numri Personal..." /><br />
                    <label>Select :</label><select onChange={this.LlojiSigurimit} defaultValue="Zgjedh Llojin e Sigurimit">
                        <option defaultValue>Zgjedh Llojin e Sigurimit</option>
                        <option value="shendet">Shendet</option>
                        <option value="udhetim">Udhetim</option>
                        <option value="aksident">Aksident</option>
                        <option value="lejeqendrim">Lejeqendrim</option>
                    </select><br />
                    <input type="submit" value="Submit" />
                </form>

            </div>
            
        )
    }
}

export default Form
