import { Button } from "@mui/material";
import React from "react";
import { Col, Row, Stack } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Login from "../basics/Login";
import "../shared/Home.scss";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="landingPage">
        <Row>
          <Col>
            <div className="loginImage">
              <img
                src={require("../images/landingsvg.svg").default}
                alt="mySvgImage"
              />
            </div>
          </Col>
          <Col>
            <div className="logo">
              <img src="/logo.jpeg" alt="Logo" />
            </div>

            <div>
              <p>
                An online exam (also called eExam) is a great way of conducting
                tests and other important exams with help of the internet. An
                online exam needs a device capable of accessing the internet
                such as a computer or a smartphone. This can be either done at
                an examination center or at home. It can be useful as a remote
                learning system where candidates can appear in an exam from
                their own device by sitting in the comfort of their homes. They
                do not have to invest their valuable time in traveling to and
                from the center. This is the best way to conduct exams as
                schools, universities, and other institutions don’t have to
                invest in examination centers, invigilators, and security. A
                microphone and a webcam are sufficient for this process.
              </p>
              <div className="text-center">
              <Button onClick={() => navigate("/Login")} variant="contained">
                SIGN UP
              </Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Home;
