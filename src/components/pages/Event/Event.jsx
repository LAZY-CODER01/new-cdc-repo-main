import React, { useState } from "react";
import { DiAndroid, DiCodeigniter } from "react-icons/di";
import PieChart from "./PieChart"; // Import the PieChart component
import "./Event.css";

const Event = () => {
  const eventData = [
    {
      title: "Syntax Seige '24",
      date: "Mar 2024",
      description: "The Code-Cascade event unfolds over three days, offering online coding basic classes tailored for junior participants. This immersive experience provides young learners with a solid foundation in programming fundamentals.",
      participants: 100,
      signups: 50,
    },
    {
      title: "Code-Cascade",
      date: "Jan 2023",
      description:
        "The Code-Cascade event unfolds over three days, offering online coding basic classes tailored for junior participants. This immersive experience provides young learners with a solid foundation in programming fundamentals.",
      participants: 80,
      signups: 30,
    },
    {
      title: "Game Of Codes",
      date: "Upcoming event",
      description:
        "Game of Codes is hosted by CodeChef MMMUT Chapter and Computer Engineering Society. This online event is tailored just for second-year students.",
      participants: 120,
      signups: 90,
    },
    {
      title: "Webinar on Competitive Programming",
      date: "Sept 2023",
      description:
        "Our exclusive webinar featuring Abhinav Awasthi, an ICPC regionalist from HBTU and Software Development Engineer (SDE) at Zeta.",
      participants: 60,
      signups: 20,
    },
    {
      title: "Genesis",
      date: "Dec 2022",
      description:
        "Genesis is a webinar session with the final year team who has been placed at big companies and MNC's that will help juniors in starting out of the new journey.",
      participants: 70,
      signups: 40,
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const toggleExpand = (index) => {
    setExpandedIndex(index);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setExpandedIndex(null);
  };

  return (
    <div>
      <div style={{ margin: "auto", textAlign: "center" }}>
        {/* Optional Title or Header can be added here */}
      </div>
      <div className="timeline">
        {eventData.map((event, index) => (
          <div
            key={index}
            className={`roadmap_main ${index % 2 === 0 ? "left-roadmap" : "right-roadmap"
              }`}
            style={{
              cursor: "pointer",
              transition: "transform 0.3s",
              transform: expandedIndex === index ? "scale(1.05)" : "scale(1)",
            }}
          >
            <div className="text-box">
              <h2>{event.title}</h2>
              <small>{event.date}</small>
              <p>{event.description}</p>
              <button
                className="show-more-btn"
                onClick={() => toggleExpand(index)}
              >
                Show More
              </button>
            </div>
            <span
              className={`${index % 2 === 0
                ? "left-roadmap-arrow"
                : "right-roadmap-arrow"
                }`}
            ></span>
          </div>
        ))}
      </div>

      {showPopup && expandedIndex !== null && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h2>{eventData[expandedIndex].title}</h2>
            <small>{eventData[expandedIndex].date}</small>
            <p>{eventData[expandedIndex].description}</p>
            <div className="expanded-details">
              <div className="pie-chart-container">
                <PieChart
                  data={{
                    participants: eventData[expandedIndex].participants,
                    signups: eventData[expandedIndex].signups,
                  }}
                />
              </div>
              <div className="additional-info">
                <p>Participants: {eventData[expandedIndex].participants}</p>
                <p>Signups: {eventData[expandedIndex].signups}</p>
              </div>
            </div>
            <button className="close-btn" onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Event;
