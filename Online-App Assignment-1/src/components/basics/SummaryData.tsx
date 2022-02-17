import { Button } from "@mui/material";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../basics/SummaryData.scss";

const SummaryData = () => {
  var question = new Array();
  var level = 0;
  var data: number = 0;
  var resultData = new Array();
  var Result = new Array();

  level = JSON.parse(localStorage.getItem("level") || "{}");
  question = JSON.parse(localStorage.getItem("question") || "{}");
  const navigate = useNavigate();
  const populateData = () => {
    data = question.filter((a: any) => {
      return a.option.some((b: any) => b.ischecked == true);
    }).length;
    window.history.pushState(null, "", window.location.href);
    window.onpopstate = function () {
        window.history.go(1);
    };
  };
  populateData();

  const DownloadData = () => {
    resultData = question.filter((a: any) => {
      return a.option.some((b: any) => b.ischecked == true);
    });
    console.log(resultData);
    resultData.map((a) => {
      a.option.map((b: any) => {
        if (b.ischecked == true) {
          Result.push({
            Question: a.QuestionDescription,
            Answer: b.value,
          });
        }
      });
    });
var AllResult = {
  LoginDetils: JSON.parse(localStorage.getItem("login") || "{}"),
  QuestionAnswer :Result
}

    var dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(AllResult));
    var downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "Result" + ".json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
    localStorage.clear();
    navigate("/");
  };
 
  return (
    <>
      <Container>
        <Row>
          <div className="successPage">
            <img src="/check.png" alt="confirm" />
            <br></br>
            <h2>Congratulations You Made It!!</h2>
            <h3>You Can Do Better</h3>
            <img
              className="SucessImage"
              src={require("../images/reports.svg").default}
              alt="mySvgImage"
            />
            <br></br>
            <table>
              <tr>
                <th>Total No Of Questions</th>
                <th>No Of Questions Attempted</th>
              </tr>
              <tr>
                <td>5</td>
                <td>{data}</td>
              </tr>
            </table>

            {/* <Button className="mt-5"
              size="large"
              variant="contained"
              color="success"
              onClick={() => navigate("/")}
            >
              HOME
            </Button> */}
            <Button
              className="mt-5"
              size="large"
              variant="contained"
              color="success"
              onClick={() => DownloadData()}
            >
              Download Result
            </Button>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default SummaryData;
