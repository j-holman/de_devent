import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getEvents, reset } from "../features/events/eventSlice";
import EventCard from "../components/EventCard";
import Spinner from "../components/Spinner";

function Dashboard() {
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
    <section>
      {events.length > 0 ? (
        <div>
          {events.map((event) => (
            <EventCard key={event._id} event={event} />
          ))}
        </div>
      ) : (
        <h3>No events available.</h3>
      )}
    </section>
  );
}

export default Dashboard;
