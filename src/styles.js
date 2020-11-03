import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

html, body {
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

button {
  outline : none;
  transition: .2s;
  cursor: pointer;
  
  &:hover {
    opacity: .7;
  }
}

body {
  --link-color: #c0c1c5;
  --app-background: ${(props) => (!props.darkMode ? "#eaebf5" : "#262a42")};
  --chat-background: ${(props) => (!props.darkMode ? "#fff" : "#3c3f56")};
  --button-bg: ${(props) => (!props.darkMode ? "#fff" : "#3c3f56")};
  --message-text: ${(props) =>
    !props.darkMode ? "#2c303a" : "rgba(255,255,255,0.8)"};
  --placeholder-text: ${(props) => (!props.darkMode ? "#a2a4bc" : "#fff")};
  --main-color: ${(props) => (!props.darkMode ? "#3d42df" : "#6f74ff")};
  --navigation-bg: ${(props) => (!props.darkMode ? "#fff" : "#3c3f56")};
  --message-bg: ${(props) => (!props.darkMode ? "#f3f4f9" : "#2c3046")};
  --message-bg-2: ${(props) => (!props.darkMode ? "#3d42df" : "#6f74ff")};
  --navigation-box-shadow: ${(props) =>
    !props.darkMode
      ? "0 2px 6px 0 rgba(136, 148, 171, 0.2), 0 24px 20px -24px rgba(71, 82, 107, 0.1)"
      : "0px 0px 8px 0px #282b33"};
}

a { text-decoration: none; }

.app-container {
  background-color: var(--app-background);
  width: 100%;
  height: 100vh;
  font-family: 'DM Sans', sans-serif;
  display: flex;
  transition: .2s;
}

.left-side {
  position: relative;
  padding: 16px;
  flex-basis: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.navigation {
  display: flex;
  flex-direction: column;
  background-color: var(--navigation-bg);
  padding: 24px;
  border-radius: 10px;
  box-shadow: var(--navigation-box-shadow);
}

.nav-link + .nav-link {
  margin-top: 32px;
}

.nav-link:hover svg {
  color: #3d42df;
}

.icon svg {
  width: 24px;
  height: 24px;
  color: var(--link-color);
  transition: .2s ease-in;
}

.right-side {
  margin-left: auto;
  flex-basis: 400px;
  height: 100%;
  padding: 16px;
  position: relative;
  transition: all 300ms cubic-bezier(0.190, 1.000, 0.560, 1.000);
  
  &.show {
    display: block;
    transform: translateX(0);
  }
}

.chat-container {
  background-color: var(--chat-background);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  height: calc(100% - 72px);
}

.chat-header {
  padding: 16px;
  border-bottom: 1px solid #f5f5f5;
  ${(props) => props.darkMode && "border-color: var(--message-bg);"}
}

.chat-header-button {
  background-color: var(--main-color);
  padding: 12px 16px 12px 40px;
  border: none;
  border-radius: 4px;
  color: #fff;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg' fill='%23fff'%3E%3Cpath d='M479.9 187.52l-90.19 68.53v-52.6a20 20 0 00-20-20H20a20 20 0 00-20 20V492a20 20 0 0020 20h349.71a20 20 0 0020-20v-52.6l90.18 68.52c13.05 9.91 32.1.67 32.1-15.92V203.45c0-16.5-18.94-25.92-32.1-15.93zM349.7 472H40V223.45h309.71zM472 451.68l-82.29-62.53V306.3L472 243.77zM87.96 79.24C129.62 28.88 190.86 0 256 0c65.13 0 126.37 28.88 168.03 79.24a20 20 0 01-30.82 25.5A177.6 177.6 0 00256 40a177.6 177.6 0 00-137.21 64.73 20 20 0 11-30.83-25.5zm240.36 32.21a20 20 0 11-21.02 34.03 97.57 97.57 0 00-51.3-14.53 97.6 97.6 0 00-51.31 14.53 20 20 0 11-21.02-34.03A137.53 137.53 0 01256 90.95c25.59 0 50.6 7.09 72.32 20.5zm0 0'/%3E%3C/svg%3E%0A");
  background-repeat: no-repeat;
  background-position: center left 12px;
  background-size: 16px;
  font-size: 14px;
}

.chat-area {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
}

.profile-picture {
  border-radius: 8px;
  width: 32px;
  height: 32px;
  overflow: hidden;
  margin-right: 12px;
  flex-shrink: 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.message-wrapper {
  display: flex;
}

.name {
  margin : 0;
  line-height: 16px;
  font-size: 12px;
  font-weight: 700;
  color: var(--message-text);
}

.message {
  margin-top: 8px;
  background-color: var(--message-bg);
  padding: 8px 16px;
  border-radius: 0 12px 12px 12px;
  font-size: 12px;
  line-height: 16px;
  max-width: calc(100% - 32px);
  color: var(--message-text);
}

.message-wrapper {
  padding: 16px 0;
  
  &.reverse {
    flex-direction: row-reverse;
    
    .message {
      background-color: var(--message-bg-2);
      color: #fff;
      margin-left: auto;
      border-radius: 16px 0px 16px 16px;
    }
    
    .profile-picture {
      margin-right: 0px;
      margin-left: 12px;
    }
    
    .name {
      text-align: right;
    }
  }
}

.message-file {
  border: 1px solid var(--message-bg);
  width: 100%;
  margin-top: 16px;
  border-radius: 4px;
  padding: 8px;
  display: flex;
  
  .sketch {
    border-radius: 4px;
    padding: 2px;
    background-color: #fdeee2;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    
    svg {
      width: 20px;
      height: 20px;
    }
  }
}

.file-info {
  flex: 1;
  padding: 0 40px 0 8px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='%23b8b8b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-download' viewBox='0 0 24 24'%3E%3Cpath d='M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3'/%3E%3C/svg%3E%0A");
  background-position: center right 12px;
  background-size: 20px;
  background-repeat: no-repeat;
  font-size: 12px;
}

.file-name {
  color: var(--message-text);
}

.file-size {
  color: #b8b8b8;
}

.mention {
  color: #7c80fd;
}

.chat-typing-area-wrapper {
  padding: 16px;
}

.chat-typing-area {
  display: flex;
  border-radius: 10px;
  padding: 8px;
  box-shadow: ${(props) =>
    !props.darkMode ? "var(--navigation-box-shadow)" : "none"};
  background-color: var(--message-bg);
}

.chat-input {
  border: none;
  font-size: 14px;
  line-height: 24px;
  outline: none;
  color: var(--message-text);
  flex: 1;
  background-color: transparent;
  
  &:placeholder {
    color: var(--placeholder-text);
  }
}

.send-button {
  color: #fff;
  background-color: var(--main-color);
  border-radius: 8px;
  border: none;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  svg {
    width: 20px;
    height: 20px;
  }
}

.app-main {
  flex: 1;
  width: 100%;
  padding: 72px 32px 16px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.video-call-wrapper {
  width: 100%;
  height: 100%;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
}

.video-participant {
  width: 33.3%;
  height: 50%;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.name-tag {
  position: absolute;
  bottom: 12px;
  right: 12px;
  font-size: 12px;
  color: #fff;
  background-color: rgba(0,15,47,0.5);
  border-radius: 4px;
  padding: 4px 12px;
}

.participant-actions {
  position: absolute;
  display: flex;
  left: 12px;
  top: 12px;
}

.btn-mute, .btn-camera {
  width: 32px;
  height: 32px;
  border-radius: 4px;
  background-color: rgba(0,15,47,0.5);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 16px;
  border: none;
}

.btn-mute {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-mic-off' viewBox='0 0 24 24'%3E%3Cpath d='M1 1l22 22M9 9v3a3 3 0 005.12 2.12M15 9.34V4a3 3 0 00-5.94-.6'/%3E%3Cpath d='M17 16.95A7 7 0 015 12v-2m14 0v2a7 7 0 01-.11 1.23M12 19v4M8 23h8'/%3E%3C/svg%3E%0A");
  margin-right: 4px;
}

.btn-camera {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-camera-off' viewBox='0 0 24 24'%3E%3Cpath d='M1 1l22 22M21 21H3a2 2 0 01-2-2V8a2 2 0 012-2h3m3-3h6l2 3h4a2 2 0 012 2v9.34m-7.72-2.06a4 4 0 11-5.56-5.56'/%3E%3C/svg%3E%0A");
}

.video-call-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 64px;
  max-width: 500px;
}

.video-action-button {
  background-repeat: no-repeat;
  background-size: 24px;
  border: none;
  height: 48px;
  margin: 0 8px;
  box-shadow: var(--navigation-box-shadow);
  border-radius: 8px;
  width: 48px;
  cursor: pointer;
  outline: none;
  background-color: var(--button-bg);
  
  &.mic {
    color: ${(props) => (!props.darkMode ? "#000" : "#fff")};

    svg {
      width: 20px;
      flex-shrink: 0;
    }
  }
  
  &.camera {
    color: ${(props) => (!props.darkMode ? "#000" : "#fff")};

    svg {
      width: 20px;
      flex-shrink: 0;
    }
  }
  
  &.maximize {
    color: ${(props) => (!props.darkMode ? "#000" : "#fff")};

    svg {
      width: 20px;
      flex-shrink: 0;
    }
  }
  
  &.endcall {
    color: #ff1932;
    width: auto;
    font-size: 14px;
    padding-left: 42px;
    padding-right: 12px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ff1932' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-phone-missed'%3E%3Cline x1='23' y1='1' x2='17' y2='7'/%3E%3Cline x1='17' y1='1' x2='23' y2='7'/%3E%3Cpath d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'/%3E%3C/svg%3E");
    background-size: 20px;
    background-position: center left 12px;
  }
  
  &.magnifier {
    padding: 0 12px;
    display: flex;
    align-items: center;
    width: auto;
    flex-grow: 0;
    color: ${(props) => (props.darkMode ? "#fff" : "#2c303a")};
    
    svg {
      width: 20px;
      flex-shrink: 0;
    }
    
    span {
      display: block;
      margin: 0 16px;
    }
  }
}

.participants {
  display: flex;
  background-color: var(--button-bg);
  box-shadow: var(--navigation-box-shadow);
  margin-top: 16px;
  padding: 12px;
  border-radius: 8px;
  max-width: 232px;
  margin-left: auto;
}

.participant-more {
  background-color: #e1e0e1;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #636181;
  font-weight: 700;
  border-radius: 8px;
  min-width: 32px;
}

.mode-switch  {
  z-index: 1;
  position: absolute;
  top: 20px;
  left: 36px;
  background-color: var(--chat-background);
  border: none;
  color: #ddd;
  outline: none;
  cursor: pointer;
  box-shadow: var(--navigation-box-shadow);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  transform-origin: center;
  
  svg {
    width:0;
    height: 24px;
    transition: all .3s ease-in;
    transform-origin: center;
  }
  
  .moon {
    opacity: ${(props) => (!props.darkMode ? 0 : 1)};
    ${(props) => props.darkMode && "width: 24px;"}
  }

  .sun {
    width: ${(props) => (!props.darkMode ? "24px" : 0)};
    ${(props) => props.darkMode && "opacity: 0;"}
  }
}

.expand-btn {
  position: absolute;
  right: 32px;
  top: 24px;
  border: none;
  background-color: var(--chat-background);
  border-radius: 4px;
  padding: none;
  color: var(--message-text);
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  
  display: none;
}

.btn-close-right {
  border: none;
  background-color: transparent;
  position: absolute;
  top: 24px;
  right: 24px;
  color: ${(props) => (props.darkMode ? "#fff" : "var(--light-font)")};
  outline: none;
  cursor: pointer;
  
  display: none;
}

@media screen and (max-width: 900px) {
  .expand-btn {
    display: block;
  }
  
  .right-side {
    position: absolute;
    right: 0px;
    background-color: var(--chat-background);
    transform: translateX(100%);
    z-index: 2;
    width: 100%;
    
    &.show {
      transform: translateX(0);
    }
  }
  
  .btn-close-right {
    display: block;
  }
}

@media screen and (max-width: 520px) {
  .left-side {
    display: none;
  }
  
  .app-main {
    padding: 72px 16px 16px 16px;
  }
  
  .expand-btn {
    right: 16px;
  }
  
  .mode-switch {
    left: 16px;
  }
  
  .video-call-actions {
    padding-top: 32px;
  }
  
  .video-action-button {
    width: 32px;
    height: 32px;
    background-size: 14px;
    margin: 0 4px;
  }
  
  .video-action-button.endcall {
    background-size: 14px;
    font-size: 12px;
    padding-left: 36px;
  }
  
  .video-action-button.magnifier svg {
    width: 14px;
  }
  
  .video-action-button.magnifier span {
    margin: 0 4px;
    font-size: 12px;
  }
}

@media screen and (max-width: 520px) and (max-height: 720px) {
  .video-participant {
    width: 50%;
    height: 33.3%;
  }
}
`;

export default GlobalStyle;
