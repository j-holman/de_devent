import React from "react";
import "../components/EventTimeline";
import EventTimeline from "../components/EventTimeline";
function Timeline() {
  return (
    <>
      <h1 className="text-center text-white p-2">Upcoming Events</h1>
      <EventTimeline />
      {/* If multiple stack them
          Horizontal Scroll Option.
          Less Information. Modal with more information.
          CLickable
          Count of People Going

      */}
    </>
  );
}

export default Timeline;
