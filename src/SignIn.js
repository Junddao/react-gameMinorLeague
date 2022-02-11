import React from "react";
import { Modal, Container, Row, Col, Button } from "react-bootstrap";
import kakaoIcon from "./assets/img/kakao_icon.png";
import googleIcon from "./assets/img/google_icon.png";
import appleIcon from "./assets/img/apple_icon.png";
import gameMinorLeagueIcon from "./assets/img/game_minorleague_icon.png";

function SignIn(props) {
  console.log("signIn Page");
  return (
    <Modal
      size="md"
      centered="true"
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
    >
      <Modal.Header closeButton style={{ border: 0 }}>
        {/* <Modal.Title id="contained-modal-title-vcenter">로그인</Modal.Title> */}
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row xs="auto" className="justify-content-center mt-3 mb-3">
            <Col>
              <img src={gameMinorLeagueIcon} width="200"></img>
            </Col>
          </Row>
          <Row xs="auto" className="justify-content-center mb-3">
            <Col>
              <h5>Game MinorLeague 로그인</h5>
            </Col>
          </Row>
          <Row xs="auto" className="justify-content-center mt-5 mb-5">
            <Col>
              <img src={kakaoIcon} width="30px"></img>
            </Col>
            <Col>
              <img src={googleIcon} width="30px"></img>
            </Col>
            <Col>
              <img src={appleIcon} width="30px"></img>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default SignIn;
