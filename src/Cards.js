import "./styles.css";
import React, { Component } from "react";
import { Container, Row, Col, Card,Button } from 'react-bootstrap';
const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=c791d3ec355a4240af2d58085ad8ae2b&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

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
              
            </p>
          < Button href={AUTH_URL} variant="outline-primary">Continue authorization</Button>{' '}
        </div>
      </div>
    </Col>
    
 
   
  </Row>
</Container>
      
      </>
    );
  }
}
