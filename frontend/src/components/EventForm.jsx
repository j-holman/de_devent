import React from "react";
import { Form, Button } from "react-bootstrap";

function EventForm({ onSubmit, onChange, ...props }) {
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Event Title</Form.Label>
        <Form.Control
          type="title"
          placeholder="Title"
          name="title"
          value={props.title}
          onChange={onChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="date">
        <Form.Label>Event Date</Form.Label>
        <Form.Control
          type="date"
          placeholder="date"
          name="date"
          value={props.date}
          onChange={onChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="time">
        <Form.Label>Event Time</Form.Label>
        <Form.Control
          type="time"
          placeholder="time"
          name="time"
          value={props.time}
          onChange={onChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="url">
        <Form.Label>Link to Event</Form.Label>
        <Form.Control
          type="url"
          placeholder="URL"
          name="url"
          value={props.url}
          onChange={onChange}
        />
      </Form.Group>
      <div className="d-grid gap-2">
        <Button variant="outline-secondary" size="lg" type="submit">
          Create Event
        </Button>
      </div>
    </Form>

    // <Modal
    //   {...props}
    //   size="lg"
    //   aria-labelledby="contained-modal-title-vcenter"
    //   centered
    // >
    //   <Modal.Header closeButton>
    //     <Modal.Title id="contained-modal-title-vcenter">New Event</Modal.Title>
    //   </Modal.Header>
    //   <Modal.Body>
    //     <Form>
    //       <Form.Group className="mb-3" controlId="title">
    //         <Form.Label>Event Title</Form.Label>
    //         <Form.Control
    //           type="title"
    //           placeholder="Title"
    //           name="title"
    //           value={title}
    //           onChange={onChange}
    //         />
    //       </Form.Group>
    //       <Form.Group className="mb-3" controlId="date">
    //         <Form.Label>Event Date</Form.Label>
    //         <Form.Control
    //           type="date"
    //           placeholder="date"
    //           name="date"
    //           value={date}
    //           onChange={onChange}
    //         />
    //       </Form.Group>
    //       <Form.Group className="mb-3" controlId="time">
    //         <Form.Label>Event Time</Form.Label>
    //         <Form.Control
    //           type="time"
    //           placeholder="time"
    //           name="time"
    //           value={time}
    //           onChange={onChange}
    //         />
    //       </Form.Group>
    //       <Form.Group className="mb-3" controlId="url">
    //         <Form.Label>Link to Event</Form.Label>
    //         <Form.Control
    //           type="url"
    //           placeholder="URL"
    //           name="url"
    //           value={url}
    //           onChange={onChange}
    //         />
    //       </Form.Group>
    //     </Form>
    //   </Modal.Body>
    //   <Modal.Footer>
    //     <Button
    //       variant="secondary"
    //       type="submit"
    //       data-dismiss="modal"
    //       onClick={onSubmit}
    //     >
    //       Submit
    //     </Button>
    //   </Modal.Footer>
    // </Modal>
  );
}

export default EventForm;
