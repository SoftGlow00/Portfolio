import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={"/resume.pdf"}
            target="_blank"
            download
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document file={"/resume.pdf"} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.8 : 0.9} renderTextLayer={false} />
          </Document>
          <Document file={"/resume.pdf"} className="d-flex justify-content-center mt-1">
          <Page pageNumber={2} scale={width > 786 ? 1.8 : 0.9} renderTextLayer={false} />
          </Document>
          <Document file={"/resume.pdf"} className="d-flex justify-content-center mt-1">
          <Page pageNumber={3} scale={width > 786 ? 1.8 : 0.9} renderTextLayer={false} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={"/resume.pdf"}
            target="_blank"
            download
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
