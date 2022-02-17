import { valueToPercent } from "@mui/base";
import { CheckBox } from "@mui/icons-material";
import { Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Container, Col, Row, Stack } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import Timer from "../shared/Timer";
import Question from "./Questions.json";
import "../basics/Question.scss";
import "./SummaryData";

const Questions = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const hoursMinSecs = { hours: 0, minutes: 10, seconds: 0 };
  const [QuestionData, SetQuestionData] = useState(Question);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const newQuestionData = [...Question];
  const totalQuestion = newQuestionData.filter(
    (que) => que.Level === state
  ).length;

  const handlePreviousClick = (qId: number) => {
    setCurrentQuestion(qId - 1);
  };

  const handleNextClick = (qId: number) => {
    setCurrentQuestion(qId + 1);
  };

  const handleChange = (e: any) => {
    var qId = e.target.name;
    var answer = e.target.value;
    var qData = [...QuestionData];
    var qDataLevel = qData.filter((a) => {
      return a.Level == state && a.QuestionId == qId;
    });
    var result = qDataLevel[0].option.filter((c) => {
      return c.value == answer;
    });
    if (result[0].ischecked == true) {
      result[0].ischecked = false;
    } else {
      result[0].ischecked = true;
    }
    SetQuestionData(qData);
  };

  const submit = () => {
    localStorage.setItem("question", JSON.stringify([...QuestionData]));
    localStorage.setItem("level", JSON.stringify(state));
    navigate("/summary");
  };

  setTimeout(() => {
    localStorage.setItem("question", JSON.stringify([...QuestionData]));
    localStorage.setItem("level", JSON.stringify(state));
    navigate("/summary");
  }, 600000);

  return (
    <>
      <div className="bg1">
        <Container className="pt-5">
          <Row>
            <Col>
              <div className="questionImage">
                <img
                  src={require("../images/exam.svg").default}
                  alt="mySvgImage"
                />
              </div>
            </Col>
            <Col>
              <li>
                <form>
                  <FormGroup>
                    <ul>
                      <span>
                        <div className="d-flex justify-content-between">
                          <h2 className="color1">
                            Question {QuestionData[currentQuestion].QuestionId}     out of {totalQuestion}
                          </h2>
                          <div className="timer">
                            <h6>
                              Time Left <Timer hoursMinSecs={hoursMinSecs} />
                            </h6>
                          </div>
                        </div>
                        {
                          QuestionData.filter((que) => que.Level == state)[
                            currentQuestion
                          ].QuestionDescription
                        }
                      </span>
                    </ul>
                    <ul>
                      {QuestionData.filter((que) => que.Level == state)[
                        currentQuestion
                      ].option.map((answerOption, index) => (
                        <ul>
                          <FormControlLabel
                            key={index}
                            control={<Checkbox />}
                            name={QuestionData[
                              currentQuestion
                            ].QuestionId.toString()}
                            label={answerOption.value}
                            value={answerOption.value}
                            onChange={handleChange}
                            checked={answerOption.ischecked == true}
                          />
                        </ul>
                      ))}
                    </ul>
                  </FormGroup>
                </form>
              </li>
              {/* </div> */}

              <div className="container d-flex justify-content-between">
                <Button
                  disabled={QuestionData[currentQuestion].QuestionId == 1}
                  onClick={() => handlePreviousClick(currentQuestion)}
                  size="large"
                  variant="contained"
                >
                  &larr; Previous
                </Button>
                <Button
                  hidden={
                    QuestionData[currentQuestion].QuestionId == totalQuestion
                  }
                  onClick={() => handleNextClick(currentQuestion)}
                  size="large"
                  variant="contained"
                >
                  Next &rarr;
                </Button>
                <Button
                  hidden={
                    !(QuestionData[currentQuestion].QuestionId == totalQuestion)
                  }
                  onClick={submit}
                  size="large"
                  variant="contained"
                  color="success"
                >
                  Submit
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Questions;
