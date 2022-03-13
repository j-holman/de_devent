import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getEvents, reset } from "../features/events/eventSlice";
import Spinner from "../components/Spinner";

function EventTimeline() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { events, isError, isLoading, message } = useSelector(
    (state) => state.events
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (!user) {
      navigate("/login");
    }
    dispatch(getEvents());

    return () => {
      dispatch(reset());
    };
  }, [user, isError, message, dispatch, navigate]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div>
      {events.length > 0 ? (
        <VerticalTimeline lineColor={"#cad2c5"}>
          {events.map((event) => (
            <VerticalTimelineElement
              date={event.date}
              key={event._id}
              dateClassName="date"
              contentStyle={{ background: "#52796f", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "10px solid  #52796f",
              }}
              iconStyle={{ background: "#cad2c5" }}
            >
              <h3 className="vertical-timeline-element-title">{event.title}</h3>
              <h5 className="vertical-timeline-element-title">
                Location: Nashville, TN
              </h5>
              <p>Description</p>
              <p>People Going: {event.users.length}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      ) : (
        <h1 className="text-white text-center">
          Sorry, there are no upcoming events.
        </h1>
      )}
    </div>
  );
}

export default EventTimeline;
