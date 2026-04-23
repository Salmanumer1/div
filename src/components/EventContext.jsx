import React, { createContext, useState } from "react";

export const EventContext = createContext();

export const EventProvider = ({ children }) => {

  const [EventCard, setEventCard] = useState(() => {
    const saved = localStorage.getItem("events");
    return saved ? JSON.parse(saved) : [];
  });

  const updateEventCard = (updater) => {
    setEventCard(prev => {
      const updated = typeof updater === "function" ? updater(prev) : updater;
      localStorage.setItem("events", JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <EventContext.Provider value={{ EventCard, setEventCard: updateEventCard }}>
      {children}
    </EventContext.Provider>
  );
};