import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/Ram Charan Resume (1).pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Technical Associate at NULL "
              date="June 2020 - present"
              content={[
                "Served my college club as a technical associate in the sectoe of cyber security ",
              ]}
            />
            
            <Resumecontent
              title="Web Developer "
              content={[
                "worked on many university projects",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="VIT-AP University  "
              date="2018 - Present"
              content={[`CGPA: 8.45 (Till 8th Sem)`]}
            />
            <Resumecontent
              title="12TH BOARD [Narayana junior college,Tirupati]"
              date="2015 - 2017"
              content={["Precentage: 94%"]}
            />
            <Resumecontent
              title="10TH BOARD [Cambridge public school,Tirupati] "
              date="2005 - 2015"
              content={["Precentage: 88%"]}
            />
            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                "Has been a part of Codethon conducted by VIT and secured 75%",
                "Attended workshop on crack-it and fix-it.",
                " Been a part of Python test conducted by VIT and secured 80%",                
                "Attended MLH local hack day AWS workshop",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
          <AiOutlineDownload />&nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
