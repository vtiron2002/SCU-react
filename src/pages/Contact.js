import React from 'react';
import axios from 'axios';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    axios
      .post('http://backend.silvercityuprising.com/api/contact', this.state)
      // .then(() => console.log('success'))
      // .catch(err => {
      //   console.error(err);
      // });
      // axios({
      //   method: "POST",
      //   url: "/api/contact",
      //   baseURL: process.env.REACT_APP_BASE_PATH || 'http://backend.silvercityuprising.com/',
      //   data:  this.state
      .then((response) => {
        if (response.data.status === 'success') {
          alert("Message Sent.");
          this.resetForm()
        } else if (response.data.status === 'fail') {
          alert("Message failed to send.")
        }
      }).catch((err) => {
        console.log(err);
      })
  }

  resetForm() {
    this.setState({ name: "", email: "", message: "" })
  }

  render() {
    return (
      <section id="contact">
        <div className="jumbotron jumbotron-fluid contact" style={{ color: '#f8f9fa', fontWeight: 'bolder', background: 'black' }}>
          <div className="container">
            <center><h1 className="display-4" style={{ marginTop: '100px' }}>Contact SCU</h1></center>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-2 col-sm-2" />
            <div className="col-md-4 col-sm-4">
              <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will get back to you within
                24-48 hours to assist you.</p>

              <form className="mb-4" id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea className="form-control" rows="5" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
            <div className="col-md-6 text-center mt-2">
              <ul className="list-unstyled mb-0">
                <li><i className="fa fa-map-marker" aria-hidden="true" />
                  <p>P.O. Box 432</p>
                  <p>Meriden, CT 06450, USA</p>
                </li>
                <li><i className="fa fa-phone" aria-hidden="true" />
                  <p>860-515-8755</p>
                </li>
                <li><i className="fa fa-envelope" aria-hidden="true" />
                  <p>info@silvercityuprising.org</p>
                </li>
                <li>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }

  onNameChange(event) {
    this.setState({ name: event.target.value })
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value })
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value })
  }
}

export default Contact;
