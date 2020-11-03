import React from "react";

const Camera = (props) => {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-camera-off"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M1 1l22 22m-2-2H3a2 2 0 01-2-2V8a2 2 0 012-2h3m3-3h6l2 3h4a2 2 0 012 2v9.34m-7.72-2.06a4 4 0 11-5.56-5.56" />
    </svg>
  );
};

export default Camera;
