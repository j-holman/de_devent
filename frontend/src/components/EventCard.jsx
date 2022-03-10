import React from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
function EventCard({ event }) {
  return (
    <>
      <Container className="pt-2">
        <Card className="">
          <Card.Body>
            <Row>
              <Col>
                <Card.Title>{event.title}</Card.Title>
              </Col>
              <Col>
                <Card.Title className="text-end">{event.date}</Card.Title>
              </Col>
            </Row>
            <Card.Text className="text-center">Description from DB</Card.Text>
            <Card.Text>People Going: {event.users}</Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted">
            <Row className="align-items-center">
              <Col>Posted By: {event.creator}</Col>
              <Col className="text-end">
                Going?
                <Button variant="outline-secondary" size="sm" className="mx-1">
                  Yes
                </Button>
                <Button variant="outline-secondary" size="sm" className="mx-1">
                  No
                </Button>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      </Container>
    </>
  );
}

export default EventCard;
