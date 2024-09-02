import React, { useState } from "react";
import PieChart from "./PieChart"; // Import the PieChart component
import "./Event.css";

const Event = () => {
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
        <div
          className="roadmap_main left-roadmap"
          style={{
            cursor: "pointer",
            transition: "transform 0.3s",
            transform: expandedIndex === 0 ? "scale(1.05)" : "scale(1)",
          }}
        >
          <div className="text-box">
            <h2>Game Of Codes</h2>
            <small>14th September 2023</small>
            <p>
              After a year of dedicated learning and growth, it is essential to
              assess the progress and standing of students within their
              batchmate. To this end, the newly promoted second year students
              are given the opportunity to participate in the competition “Game
              of Codes.”
            </p>
            <button className="show-more-btn" onClick={() => toggleExpand(0)}>
              Show More
            </button>
          </div>
          <span className="left-roadmap-arrow"></span>
        </div>

        <div
          className="roadmap_main right-roadmap"
          style={{
            cursor: "pointer",
            transition: "transform 0.3s",
            transform: expandedIndex === 1 ? "scale(1.05)" : "scale(1)",
          }}
        >
          <div className="text-box">
            <h2>Genesis</h2>
            <small>16th September 2023</small>
            <p>
            It is crucial for students to receive knowledge and career guidance from 
            alumni and technical experts who have achieved excellence in their fields and hold prestigious positions. 
            </p>
            <button className="show-more-btn" onClick={() => toggleExpand(1)}>
              Show More
            </button>
          </div>
          <span className="right-roadmap-arrow"></span>
        </div>

        <div
          className="roadmap_main left-roadmap"
          style={{
            cursor: "pointer",
            transition: "transform 0.3s",
            transform: expandedIndex === 2 ? "scale(1.05)" : "scale(1)",
          }}
        >
          <div className="text-box">
            <h2>Orientation</h2>
            <small>30th October 2023</small>
            <p>
            The first year of college often brings a mix of confusion and curiosity, especially when it comes to coding. It’s crucial to address these early on so that students can embark on their coding journey with a strong foundation.
 

            </p>
            <button className="show-more-btn" onClick={() => toggleExpand(2)}>
              Show More
            </button>
          </div>
          <span className="left-roadmap-arrow"></span>
        </div>

        <div
          className="roadmap_main right-roadmap"
          style={{
            cursor: "pointer",
            transition: "transform 0.3s",
            transform: expandedIndex === 3 ? "scale(1.05)" : "scale(1)",
          }}
        >
          <div className="text-box">
            <h2>Code Cascade</h2>
            <small>9th – 12th January 2023</small>
            <p>
            A solid understanding of programming languages is essential for students to successfully embark on their journey in Competitive Programming (CP) and Data Structures and Algorithms (DSA).
            </p>
            <button className="show-more-btn" onClick={() => toggleExpand(3)}>
              Show More
            </button>
          </div>
          <span className="right-roadmap-arrow"></span>
        </div>

        <div
          className="roadmap_main left-roadmap"
          style={{
            cursor: "pointer",
            transition: "transform 0.3s",
            transform: expandedIndex === 4 ? "scale(1.05)" : "scale(1)",
          }}
        >
          <div className="text-box">
            <h2>Syntax Siege</h2>
            <small>7th - 15th March 2023</small>
            <p>
            It is crucial to expose students to the realities of competitive programming to motivate and prepare them for the challenges ahead. To this end, the CDC organized “SYNTAX-SIEGE,” a week-long program designed to immerse first-year students in the concepts of Competitive Programming (CP)
            </p>
            <button className="show-more-btn" onClick={() => toggleExpand(4)}>
              Show More
            </button>
          </div>
          <span className="left-roadmap-arrow"></span>
        </div>
      </div>

      {showPopup && expandedIndex !== null && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h2>{expandedIndex === 0 && "Game Of Codes"}</h2>
            <small>{expandedIndex === 0 && "14th September 2023"}</small>
            <p>
              {expandedIndex === 0 &&
                "After a year of dedicated learning and growth, it is essential to assess the progress and standing of students within their batchmate. To this end, the newly promoted second year students are given the opportunity to participate in the competition “Game of Codes.” This event serves as both a test and a recognition of their year-long coding preparation, allowing them to gauge their skills and compete with their peers."}
            </p>
            {expandedIndex === 0 && (
              <div className="expanded-details">
                <div className="pie-chart-container">
                  <PieChart
                    data={{
                      participants: 399,
                      signups: 277,
                    }}
                  />
                </div>
                <div className="additional-info">
                  <p>Participants: 399</p>
                  <p>Signups: 277</p>
                </div>
              </div>
            )}

            <h2>{expandedIndex === 1 && "Genesis"}</h2>
            <small>{expandedIndex === 1 && "16th September 2023"}</small>
            <p>
              {expandedIndex === 1 &&
                " It is crucial for students to receive knowledge and career guidance from alumni and technical experts who have achieved excellence in their fields and hold prestigious positions. Engaging with these seasoned professionals allows students to gain direct insights and valuable advice, helping them navigate their own career paths with greater confidence and clarity. "}
            </p>
            {expandedIndex === 1 && (
              <div className="expanded-details">
                <div className="pie-chart-container">
                  {/* <PieChart
                    data={{
                      participants: 80,
                      signups: 30,
                    }}
                  /> */}
                </div>
                {/* <div className="additional-info">
                  <p>Participants: 80</p>
                  <p>Signups: 30</p>
                </div> */}
              </div>
            )}

            <h2>{expandedIndex === 2 && "Orientation"}</h2>
            <small>{expandedIndex === 2 && "30th October 2023"}</small>
            <p>
              {expandedIndex === 2 &&
                "The first year of college often brings a mix of confusion and curiosity, especially when it comes to coding. It’s crucial to address these early on so that students can embark on their coding journey with a strong foundation. Recognizing this need, the CDC organized an orientation, designed to answer student’s questions, fuel their curiosity, and guide them as they begin their coding journey. "}
            </p>
            {expandedIndex === 2 && (
              <div className="expanded-details">
                <div className="pie-chart-container">
                  <PieChart
                    data={{
                      participants: 120,
                      signups: 90,
                    }}
                  />
                </div>
                <div className="additional-info">
                  <p>Participants: 120</p>
                  <p>Signups: 90</p>
                </div>
              </div>
            )}

            <h2>{expandedIndex === 3 && "Code Cascade"}</h2>
            <small>{expandedIndex === 3 && "9th – 12th January 2023"}</small>
            <p>
              {expandedIndex === 3 &&
                "A solid understanding of programming languages is essential for students to successfully embark on their journey in Competitive Programming (CP) and Data Structures and Algorithms (DSA). In recognition of this, the CDC organized a special event for first-year students to provide them with the foundational knowledge needed to excel in these areas. This event was designed to boost their confidence and equip them with the necessary skills to begin their future coding endeavours. "}
            </p>
            {expandedIndex === 3 && (
              <div className="expanded-details">
                <div className="pie-chart-container">
                  <PieChart
                    data={{
                      participants: 60,
                      signups: 20,
                    }}
                  />
                </div>
                <div className="additional-info">
                  <p>Participants: 60</p>
                  <p>Signups: 20</p>
                </div>
              </div>
            )}

            <h2>{expandedIndex === 4 && "Syntax Siege"}</h2>
            <small>{expandedIndex === 4 && "7th - 15th March 2023"}</small>
            <p>
              {expandedIndex === 4 &&
                "It is crucial to expose students to the realities of competitive programming to motivate and prepare them for the challenges ahead. To this end, the CDC organized “SYNTAX-SIEGE,” a week-long program designed to immerse first-year students in the concepts of Competitive Programming (CP) and Data Structures and Algorithms (DSA). Throughout the week, executive members of our society conducted in-depth lectures, equipping students with the necessary skills, which benefited more than 700 students. The program culminated in a competition where students faced off against their batchmates, fostering a spirit of healthy competition and further motivating them to excel."}
            </p>
            {expandedIndex === 4 && (
              <div className="expanded-details">
                <div className="pie-chart-container">
                  <PieChart
                    data={{
                      participants: 70,
                      signups: 40,
                    }}
                  />
                </div>
                <div className="additional-info">
                  <p>Participants: 70</p>
                  <p>Signups: 40</p>
                </div>
              </div>
            )}

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
