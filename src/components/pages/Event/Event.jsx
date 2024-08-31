import React, { useState } from "react";
import { DiAndroid, DiCodeigniter } from "react-icons/di";
import PieChart from "./PieChart"; // Import the PieChart component
import "./Event.css";

const Event = () => {
  const eventData = [
    {
      title: "Syntax Seige '24",
      date: "Mar 2024",
      description: "hello this is abhishek",
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
        "Game of Codes is hosted by Coders & Developers Club and Computer Engineering Society. This online event is tailored just for second-year students.",
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

  // State to track which event is expanded
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    // Toggle the expanded state of the clicked event
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
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
            onClick={() => toggleExpand(index)} // Toggle expansion on click
          >
            {/* {index % 2 === 0 ? (
              <DiAndroid className="img" />
            ) : (
              <DiCodeigniter className="img" />
            )} */}
            <div className={`text-box ${expandedIndex === index ? "expanded" : ""}`}>
              <h2>{event.title}</h2>
              <small>{event.date}</small>
              <p>{event.description}</p>
              {expandedIndex === index && ( // Show details only if expanded
                <div className="expanded-details">
                  <div className="pie-chart-container" style={{ marginTop: "20px" }}>
                    <PieChart data={{ participants: event.participants, signups: event.signups }} />
                  </div>
                  <div className="additional-info">
                    <p>Participants: {event.participants}</p>
                    <p>Signups: {event.signups}</p>
                    {/* You can add more details here as needed */}
                  </div>
                </div>
              )}
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
    </div>
  );
};

export default Event;
