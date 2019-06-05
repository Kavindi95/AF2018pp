import React, {Component} from 'react';
import Axios from 'axios';

class ViewCourse extends Component {
    constructor(){
        super();
        this.state = {
            course: [],
            subject: []
        }
    }

    componentDidMount() {
        Axios.get('/api/course').then(
            data => {
                this.setState({
                    course: data.data
                })
            }
        )
    }

    subject(id){
        Axios.get('/api/subject/find/' + id).then(
            dataSet => {
                alert('Name: ' + dataSet.data.name + 'Description: ' + dataSet.data.description);
            }
        )
    }

    render() {
        return(
          <div className="container">
              <h2>This is Cousre View</h2>
              <table className="table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Code</th>
                      <th>Passs Mark</th>
                      <th>Lecturer Incharge</th>
                      <th>Subjects</th>
                    </tr>
                      </thead>
                  <tbody>
                  {
                      this.state.course.map(cou => {
                          return(
                              <tr key={cou._id}>
                                  <td>{cou.name}</td>
                                  <td>{cou.code}</td>
                                  <td>{cou.passMark}</td>
                                  <td>{cou.lecIncharge}</td>
                                  <td><button onClick={this.subject.bind(this,cou.subject)}>Subjects</button></td>
                              </tr>
                          )
                      })
                  }
                  </tbody>
              </table>
          </div>
        );
    }
}
export default ViewCourse
