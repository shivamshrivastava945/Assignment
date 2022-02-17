import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Col, Row } from "react-bootstrap";
import "../basics/instructions.scss";
import { useNavigate } from "react-router-dom";

const Instructions = () => {
  let Level: number;
  let checked: boolean = false;
  const navigate = useNavigate();
  const handleSelect = (e: any) => {
    Level = e.target.value;
  };
  const handleChange = (e: any) => {
    checked = e.target.checked;
  };
  const StartTest = () => {
    if (Level && checked == true) {
      navigate("/question", { state: Level });
    } else {
      window.alert("Please select all fields");
    }
  };
  return (
    <>
      <div className="instructionPage">
        <Row>
          <Col>
            <div className="loginImage">
              <img
                src={require("../images/instruction.svg").default}
                alt="mySvgImage"
              />
            </div>
          </Col>
          <Col>
            <div>
              <h3>Dos And Dont's For The Exam</h3>
              <br></br>
              <Stack sx={{ width: "100%" }} spacing={2}>
                <Alert severity="info">
                  This is a FREE online test. DO NOT pay money to anyone to
                  attend this test.
                </Alert>
                <Alert severity="info">Total number of questions :5.</Alert>
                <Alert severity="info">Time alloted : 10 minutes.</Alert>
                <Alert severity="info">
                  Each question carry 1 mark, no negative marks.
                </Alert>
                <Alert severity="info">DO NOT refresh the page.</Alert>
                <Alert severity="info">All the best :-).</Alert>
              </Stack>
            </div>
            <br></br>
            <FormControl className="width">
              <InputLabel id="level-select">*Skill</InputLabel>
              <Select
                size="small"
                label="skill"
                labelId="skill-select"
                name="skill"
                id="skill"
                onChange={handleSelect}
                // value={value}
              >
                <MenuItem value={0}>None</MenuItem>
                <MenuItem value={1}>Level 1</MenuItem>
                <MenuItem value={2}>Level 2</MenuItem>
                <MenuItem value={3}>Level 3</MenuItem>
              </Select>
            </FormControl>
            <FormGroup className="mt-2">
              <FormControlLabel
                onChange={handleChange}
                control={<Checkbox />}
                label="I have read all the given information!!!!"
              />
            </FormGroup>
            <Stack gap={8} className="col-md-2 mx-auto">
              <Button
                // onClick={() => navigate("/question", { state: Level })}
                onClick={StartTest}
                size="large"
                variant="contained"
              >
                Start Test
              </Button>
            </Stack>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Instructions;
