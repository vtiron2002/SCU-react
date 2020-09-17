import React from "react";
import { Container, Row, Col,Card,Button } from 'react-bootstrap';
import authServices from '../services/authServices';
import axios from 'axios';
import '../App.css';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: []
    };
  }

  componentDidMount() {
    // axios.get('http://localhost:8000/api/users/signup')
    //       .then(res => {
    //         const persons = res.data;
    //         this.setState({ persons });
    //         console.log(persons)
    //       })
    fetch('http://localhost:8000/api/users/signup')
     .then(res => res.json())
     .then(
       (result) => {
         this.setState({
           userData: result
         });
       },
       // error handler
       (error) => {
         this.setState({
           isLoaded: true,
           error
         });
       }
     )
  }

  render() {

    const {userData} = this.state;

    return(
      <section id="contact">
        <div className="jumbotron jumbotron-fluid contact" style={{color: '#f8f9fa', fontWeight: 'bolder', background: 'black'}}>
          <div className="container">
            <center><h1 className="display-4">Profile </h1></center>
          </div>
        </div>

        {userData.map(user => <div>
          <ul>
            <li>{user.user_name}</li>
            <li>{user.email}</li>
          </ul>

          </div>)}

      </section>
  );
  }
}
export default Profile;
