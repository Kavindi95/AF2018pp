import React, {Component} from 'react';
import axios from "axios";

class InsertCourse extends Component{
    constructor(){
        super();
        this.state = {
            name:'',
            code:'',
            passMark: '',
            lecIncharge: '',
            subjects: [],
            subject: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        axios.get('/api/subject').then(
            data => {
                this.setState({
                    subjects: data.data
                })
            }
        )
    }

    handleSubmit(e){
        e.preventDefault();
        const obj = {
            name: this.state.name,
            code: this.state.code,
            passMark: this.state.passMark,
            lectureInCharge: this.state.lectureInCharge,
            subject: this.state.subject
        }

        axios.post('/api/course/insert', obj).then(
            data => {
                console.log('Success ' + data.data);
            }
        )

        this.setState({
            name: '',
            code: '',
            passMark: '',
            lecIncharge: '',
            subject: ''
        })
    }

    handleInputChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return(
            <div>
                <h2>Insert New Course</h2>
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                className="form-control"
                                onChange={this.handleInputChange}
                                value={this.state.name}
                                name="name"
                            />
                        </div>
                        <div className="form-group">
                            <label>Code</label>
                            <input
                                type="text"
                                className="form-control"
                                onChange={this.handleInputChange}
                                value={this.state.code}
                                name="code"
                            />
                        </div>
                        <div className="form-group">
                            <label>Pass Mark</label>
                            <input
                                type="text"
                                className="form-control"
                                onChange={this.handleInputChange}
                                value={this.state.passMark}
                                name="passMark"
                            />
                        </div>
                        <div className="form-group">
                            <label>Lecturer In Charge</label>
                            <input
                                type="text"
                                className="form-control"
                                onChange={this.handleInputChange}
                                value={this.state.lecIncharge}
                                name="lecIncharge"
                            />
                        </div>
                        <div className="form-group">
                            <label>Subject</label>
                            <select name="subject" className="form-control" onChange={this.handleInputChange} value={this.state.subject}>
                                {
                                    this.state.subjects.map(sub => {
                                        return (
                                            <option key={sub._id} value={sub._id}>{sub.name}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="form-group">
                            <input type="submit" value="submit" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default InsertCourse;