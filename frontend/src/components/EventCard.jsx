import React from "react";
import { Card, Button, Row, Col, Container, ListGroup } from "react-bootstrap";
function EventCard() {
  return (
    <>
      <Container className="pt-2">
        <Card className="">
          <Card.Body>
            <Row>
              <Col>
                <Card.Title>Title from DB</Card.Title>
              </Col>
              <Col>
                <Card.Title className="text-end">Date from DB</Card.Title>
              </Col>
            </Row>
            <Card.Text className="text-center">Description from DB</Card.Text>
            <Card.Text>Creator from DB</Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted">
            <Row className="align-items-center">
              <Col>List of people going</Col>
              <Col className="text-end">
                <ListGroup horizontal className="justify-content-end">
                  <ListGroup.Item>
                    <Button variant="outline-secondary" size="sm">
                      Yes
                    </Button>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Button variant="outline-secondary" size="sm">
                      No
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      </Container>
      <Container className="pt-2">
        <Card className="">
          <Card.Body>
            <Row>
              <Col>
                <Card.Title>Pexxin with the Boys</Card.Title>
              </Col>
              <Col>
                <Card.Title className="text-end">October 28th, 2021</Card.Title>
              </Col>
            </Row>
            <Card.Text>
              We're going to johns wedding on this day or some bullshit.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
          <Card.Footer className="text-muted text-end">
            Posted By John Harris
          </Card.Footer>
        </Card>
      </Container>
    </>
  );
}

export default EventCard;
