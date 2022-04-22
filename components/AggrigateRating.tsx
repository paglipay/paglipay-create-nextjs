import React from "react";
import { Col, Row, Container, Image, Card, ProgressBar } from "react-bootstrap";

function AggrigateRating() {
  return (
    <>
      <Card
      // style={{ height: '100%' }}
      >
        <Card.Body>
          <Card.Title>Product:</Card.Title>
          <Container style={{ width: "100%" }}>
            {[
              { count: 5, percent: 50 },
              { count: 4, percent: 30 },
              { count: 3, percent: 5 },
              { count: 2, percent: 5 },
              { count: 1, percent: 10 },
            ].map((e, i) => {
              return (
                <Row key={`ag-${i}`}>
                  {[
                    `${e.count} stars`,
                    <ProgressBar striped variant="warning" now={e.percent} />,
                    `${e.percent}%`,
                  ].map((c, j) => {
                    return <Col key={`ag-col-${j}`}> {c}</Col>;
                  })}
                </Row>
              );
            })}
          </Container>
        </Card.Body>
      </Card>
    </>
  );
}

export default AggrigateRating;
