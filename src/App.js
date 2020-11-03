import React, { useState } from "react";
import Switch from "./features/Switch";
import Navigation from "./features/Navigation";
import CallWrapper from "./features/CallWrapper";
import CallActions from "./features/CallActions";
import Participants from "./features/Participants";
import ChatContainer from "./features/ChatContainer";
import GlobalStyle from "./styles";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleClose = () => {
    const rightSide = document.querySelector(".right-side");
    const expandBtn = document.querySelector(".expand-btn");
    rightSide.classList.remove("show");
    expandBtn.classList.add("show");
  };

  const handleExpand = () => {
    const rightSide = document.querySelector(".right-side");
    const expandBtn = document.querySelector(".expand-btn");
    rightSide.classList.add("show");
    expandBtn.classList.remove("show");
  };

  return (
    <>
      <GlobalStyle darkMode={darkMode} />
      <div className="app-container">
        <Switch setDarkMode={setDarkMode} />
        <div className="left-side">
          <Navigation />
        </div>
        <div className="app-main">
          <CallWrapper />
          <CallActions />
        </div>
        <div className="right-side">
          <button class="btn-close-right" onClick={handleClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="feather feather-x-circle"
              viewBox="0 0 24 24"
            >
              <defs></defs>
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M15 9l-6 6M9 9l6 6"></path>
            </svg>
          </button>
          <ChatContainer />
          <Participants />
        </div>
        <button class="expand-btn" onClick={handleExpand}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-message-circle"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        </button>
      </div>
    </>
  );
}
