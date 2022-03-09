import React from "react";
import { Button, Modal } from "react-bootstrap";
import { MdAdd, MdAccountCircle } from "react-icons/md";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createEvent } from "../features/events/eventSlice";
import EventForm from "./EventForm";
function Sidebar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formData, setFormData] = useState({
    title: "",
    date: "",
    time: "",
    url: "",
  });

  const { title, date, time, url } = formData;
  const dispatch = useDispatch();

  const onEventFormSubmit = (e) => {
    e.preventDefault();
    const eventData = {
      title,
      date,
      time,
      url,
    };

    dispatch(createEvent(eventData));
    handleClose();
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <div className="sidenav grid-2 gap-4">
        <Button variant="outline-secondary" size="lg" onClick={handleShow}>
          Create Event
          <MdAdd />
        </Button>
        <Modal show={show} onHide={handleShow}>
          <Modal.Header closeButton onClick={handleClose}>
            <Modal.Title>New Event</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EventForm onSubmit={onEventFormSubmit} onChange={onChange} />
          </Modal.Body>
        </Modal>
        <Button variant="outline-secondary" size="lg">
          Timeline
        </Button>
        <Button variant="outline-secondary" size="lg">
          Profile
          <MdAccountCircle />
        </Button>
      </div>
    </>
  );
}

export default Sidebar;
