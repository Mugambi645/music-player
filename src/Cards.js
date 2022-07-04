import "./styles.css";
import React, { Component } from "react";
import { Container, Row, Col, Card,Button } from 'react-bootstrap';
const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=5848ef9895ad47f390503c687a0179fe&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export default class Cards extends Component {
  render() {
    return (
      <>
      <Container>
  <Row className="justify-content-md-center">
    <Col xs lg="2">
      
    </Col>
    <Col md="auto"></Col>
    <Col xs lg="3">
   
    </Col>
  </Row>
  <Row>
    <Col>
    <div className="card">
        <img src="" alt="" />
        <div className="card-body">
          <h2>Login with spotify</h2>
          <p>
            Got a spotify account?If yes,Login now to access unlimited music streams   
            Don't have a spotify account?Create a personal account to access the platform.   
            </p>
          < Button href={AUTH_URL} variant="outline-primary">Continue authorization</Button>{' '}
        </div>
      </div>
    </Col>
    
    <Col xs lg="6">
    <div className="card">
        <img src="" alt="" />
        <div className="card-body">
          <h2>Personal account</h2>
          <p>
            Don't have a spotify account?Create a personal account to access the platform.
            Don't have a spotify account?Create a personal account to access the platform.
          </p>
          < Button href={AUTH_URL} variant="outline-primary">Create account</Button>{' '}
         
          <a  href="">Sign in</a>
        </div>
      </div>
    </Col>
  </Row>
</Container>
      
      </>
    );
  }
}
