import { useState } from "react";

interface Event {
  title: string;
  date: string;
  description: string;
}

const eventsData: Event[][] = [
  [
    {
      title: "Talent to Income Entrepreneurship Training",
      date: "29.08.2024",
      description:
        "This training empowers individuals to turn their talents into sustainable income streams. Attendees will learn business strategies, branding, and financial management.",
    },
    {
      title: "Heritage FDG",
      date: "29.08.2024",
      description:
        "A forum for discussing the preservation of cultural heritage and its integration into modern society. Experts share insights on historical conservation and community engagement.",
    },
    {
      title: "Case Managers Onboarding",
      date: "29.08.2024",
      description:
        "A session designed for new case managers, equipping them with skills in client management, legal frameworks, and effective problem-solving techniques.",
    },
  ],
  [
    {
      title: "Website Design Training",
      date: "27.08.2024 - 29.08.2024",
      description:
        "Participants will learn the fundamentals of web design, UI/UX principles, and hands-on coding with HTML, CSS, and JavaScript.",
    },
    {
      title: "Business Idea Competition",
      date: "24.08.2024 - 28.08.2024",
      description:
        "An exciting challenge where aspiring entrepreneurs pitch innovative business ideas, competing for funding and mentorship opportunities.",
    },
    {
      title: "KIEP SKIES",
      date: "26.08.2024 - 31.08.2024",
      description:
        "A program focused on innovation and technology, bringing together industry experts to mentor young talents in tech-driven solutions.",
    },
  ],
  [
    {
      title: "Mega Dance Battle",
      date: "30.08.2024 - 31.08.2024",
      description:
        "A high-energy dance competition featuring talented dancers from different regions. Participants showcase creativity, technique, and rhythm.",
    },
  ],
];

const Events = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const handleNext = () => {
    if (currentPage < eventsData.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="events-section">
      <h2 className="events-title">
        Past Events at <span className="highlight">Swahilipothub</span>
      </h2>
      <p className="events-description">
        SwahiliPotHub has a rich history of hosting dynamic and impactful events
        that have significantly contributed to the growth of the local tech and
        creative communities. These events have not only served as platforms
        for knowledge sharing but also fostered collaboration, innovation, and
        cultural exchange among participants.
      </p>

      <div className="events-grid">
        {eventsData[currentPage].map((event, index) => (
          <div
            key={index}
            className="event-card"
            onClick={() => setSelectedEvent(event)}
          >
            <span className="event-date">{event.date}</span>
            <h3 className="event-title">{event.title}</h3>
            <p className="event-learn-more">Learn more →</p>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button
          className="pagination-btn"
          onClick={handlePrev}
          disabled={currentPage === 0}
        >
          ←
        </button>
        <span className="pagination-text">
          Page {currentPage + 1} of {eventsData.length}
        </span>
        <button
          className="pagination-btn"
          onClick={handleNext}
          disabled={currentPage === eventsData.length - 1}
        >
          →
        </button>
      </div>

      {selectedEvent && (
        <div className="event-modal">
          <div className="modal-content">
            <h3>{selectedEvent.title}</h3>
            <p className="modal-date">{selectedEvent.date}</p>
            <p>{selectedEvent.description}</p>
            <button className="close-btn" onClick={() => setSelectedEvent(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
