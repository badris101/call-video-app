import React from "react";

const members = [
  {
    name: "Andy Will",
    picture:
      "https://images.unsplash.com/photo-1566821582776-92b13ab46bb4?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
  },
  {
    name: "Emmy Lou",
    picture:
      "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
  },
  {
    name: "Tim Russel",
    picture:
      "https://images.unsplash.com/photo-1576110397661-64a019d88a98?ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80"
  },
  {
    name: "Jessica Bell",
    picture:
      "https://images.unsplash.com/photo-1600207438283-a5de6d9df13e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80"
  },
  {
    name: "Ryan Patrick",
    picture:
      "https://images.unsplash.com/photo-1581824283135-0666cf353f35?ixlib=rb-1.2.1&auto=format&fit=crop&w=1276&q=80"
  },
  {
    name: "Tina Cate",
    picture:
      "https://images.unsplash.com/photo-1542596594-649edbc13630?ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80"
  }
];

const CallWrapper = () => {
  return (
    <div className="video-call-wrapper">
      {members.map((member, idx) => {
        return (
          <div key={idx} className="video-participant">
            <div className="participant-actions">
              <button className="btn-mute"></button>
              <button className="btn-camera"></button>
            </div>
            <a href="/" className="name-tag">
              {member.name}
            </a>
            <img src={member.picture} alt="participant" />
          </div>
        );
      })}
    </div>
  );
};

export default CallWrapper;
