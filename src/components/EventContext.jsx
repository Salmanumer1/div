import React, { createContext, useState } from "react";

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [EventCard, setEventCard] = useState([]);

  return (
    <EventContext.Provider value={{ EventCard, setEventCard }}>
      {children}
    </EventContext.Provider>
  );
};