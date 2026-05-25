import { useState, useEffect, useRef } from 'react';

// --- Custom SVGs for Skill Icons ---
const Html5Icon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="#E34F26" d="M3.5,21h17L19,3H5L3.5,21z M12,5.5h6.5l-1,11.5L12,18.5v-13z" />
    <path fill="#F16529" d="M12,5.5v13l5.5-1.5L18.5,5.5H12z" />
    <path fill="#EBEBEB" d="M12,7.5v2h4l-0.5,5l-3.5,1v-2h2l0.2-2.5h-2.2v-2H12z" />
    <path fill="#FFFFFF" d="M12,7.5H7.5l0.2,2h4.3v2H8.2l0.2,2.5h3.6v2l-3.5-1l-0.2-2.5h-2L7,17l5,1.5V7.5z" />
  </svg>
);

const Css3Icon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="#1572B6" d="M3.5,21h17L19,3H5L3.5,21z M12,5.5h6.5l-1,11.5L12,18.5v-13z" />
    <path fill="#33A9DC" d="M12,5.5v13l5.5-1.5L18.5,5.5H12z" />
    <path fill="#FFFFFF" d="M12,7.5H7.5l0.2,2h4.3v2H8.2l0.2,2.5h3.6v2l-3.5-1l-0.2-2.5h-2L7,17l5,1.5V7.5z" />
    <path fill="#EBEBEB" d="M12,7.5v2h4l-0.2,2.5h-3.8v2h3.5l-0.5,5l-3.5,1v-2h2l0.2-2.5h-2.2v-2H12z" />
  </svg>
);

const JavascriptIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
    <path fill="#F7DF1E" d="M0 0h32v32H0z" />
    <path d="M24.2 22.5c.5.8 1.3 1.3 2.5 1.3s1.9-.4 1.9-1.5c0-.9-.6-1.3-2.1-1.9l-1.1-.4c-1.9-.8-3.2-1.8-3.2-4.1 0-2.1 1.6-3.7 4.2-3.7s3.8 1.3 4.3 2.9l-2.7.9c-.3-.8-.8-1.2-1.6-1.2s-1.2.4-1.2 1.1c0 .8.5 1.1 1.8 1.7l1.1.4c2.3.9 3.6 2 3.6 4.2 0 2.5-1.8 4-4.7 4s-4.3-1.6-5-3.4l2.8-1.1zM14.2 22.6c.5.8 1.1 1.2 2 1.2s1.4-.4 1.4-1.7V15h3.2v8.2c0 2.9-1.9 4.4-4.7 4.4s-4.1-1.5-4.8-3.1l2.9-1.1z" />
  </svg>
);

const TypescriptIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
    <path fill="#3178C6" d="M24,48H0V24A24,24,0,0,1,24,0H48V24A24,24,0,0,1,24,48Z" />
    <path fill="#fff" d="M28.2,34.1h-4.3l-1-4.8h-7.2l-1.1,4.8H10.4l7.9-19.1h4.4Zm-5.3-7.5-2.9-9.1-2.9,9.1Z" />
    <path fill="#fff" d="M40.1,28.9c0,2.1-.5,3.7-1.4,4.7s-2.3,1.5-4,1.5a10.3,10.3,0,0,1-4.4-1,4.2,4.2,0,0,1-1.7-3.1h4.2c.1,1.4.9,2,2.3,2,1,0,1.6-.3,1.6-.9,0-.3-.1-.5-.3-.7a4.3,4.3,0,0,0-1.8-.8c-1.8-.6-3-1.4-3.6-2.5a4.3,4.3,0,0,1-.9-2.9,3.7,3.7,0,0,1,1.2-3,5.2,5.2,0,0,1,3.3-1.1,8,8,0,0,1,3.8.8,3.9,3.9,0,0,1,1.4,2.8H36a1.9,1.9,0,0,0-1.8-1.5,1.2,1.2,0,0,0-1.2.8c0,.3.1.5.2.6a4.4,4.4,0,0,0,1.8.8c2.1.6,3.4,1.4,4.1,2.5.7,1.1,1.1,2.4,1.1,3.9Z" />
  </svg>
);

const ReactIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" fill="#61DAFB" {...props}>
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
    <g stroke="#61DAFB" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

const AngularIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 250" {...props}>
    <polygon fill="#DD0031" points="125,30 125,30 125,30 31.9,63.2 46.1,186.3 125,230 125,230 203.9,186.3 218.1,63.2" />
    <polygon fill="#C3002F" points="125,30 125,52.2 125,52.1 125,153.4 125,153.4 125,230 125,230 203.9,186.3 218.1,63.2" />
    <path fill="#FFFFFF" d="M125,52.1L66.8,182.6h21.7l11.7-29.2h49.4l11.7,29.2h21.7L125,52.1z M142,135.4H108.1l16.9-42.2L142,135.4z" />
  </svg>
);

const NextjsIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" {...props}>
    <circle cx="64" cy="64" r="64" fill="#000" />
    <path fill="url(#a)" d="M106.3 41.3 64 102.6 21.7 41.3h84.6Z" />
    <path fill="#fff" d="M84.2 41.3 64 74.6V102.6L106.3 41.3H84.2Z" />
    <defs>
      <linearGradient id="a" x1="64" x2="64" y1="41.3" y2="102.6" gradientUnits="userSpaceOnUse">
        <stop stopColor="#fff" />
        <stop offset="1" stopColor="#fff" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

const VuejsIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 221" {...props}>
    <path fill="#41B883" d="m204.8 0-76.8 133.1L51.2 0H0l128 220.8L256 0h-51.2z" />
    <path fill="#34495E" d="m204.8 0-76.8 133.1L51.2 0H102.4l25.6 44.2L153.6 0h-51.2z" />
  </svg>
);

const ReduxIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="#764ABC" d="M12.01,2.5C7.2,2.5,4,5.43,2.5,9.45l3.23.94c.8-2.22,2.44-3.6,5.32-3.6,2.44,0,4.1,1.11,4.1,2.8,0,1.49-.93,2.37-2.61,3.14l-1.4.63c-2.4.99-4.22,2.3-4.22,4.8,0,2.3,1.62,4.18,4.3,4.18,3.28,0,5.25-1.93,6.23-4.43l-3.26-1.1c-.6,1.47-1.74,2.3-3,2.3-1.28,0-2.11-.79-2.11-1.93,0-1.27.82-1.9,2.5-2.6l1.43-.59c2.5-.96,4.36-2.2,4.36-4.9,0-2.9-2.4-5.2-6.1-5.2Zm.46,19C6.88,21.5,2.5,17.12,2.5,12.5S6.88,3.5,12.47,3.5,22.44,7.88,22.44,12.5,18.06,21.5,12.47,21.5Z" />
  </svg>
);

const NodejsIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.12 28.5" {...props}>
    <path fill="#8CC84B" d="M12.56,0,0,7.13V21.38l12.56,7.12,12.56-7.12V7.13Zm8.8,19.33-4.4,2.5V13.11l-4.4,2.54V7.81l8.8-5v16.52Z" />
  </svg>
);

const PythonIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="#3776AB" d="M12,2.5c-3,0-5.4,2.4-5.4,5.4v3.2h3.2v-3.2c0-1.2,1-2.2,2.2-2.2h3.2V5.7C15.2,3.9,13.8,2.5,12,2.5z" />
    <path fill="#FFD43B" d="M12,21.5c3,0,5.4-2.4,5.4-5.4v-3.2h-3.2v3.2c0,1.2-1,2.2-2.2,2.2h-3.2v2.2C8.8,19.6,10.2,21.5,12,21.5z" />
    <circle fill="#fff" cx="9.3" cy="9.3" r="1.4" />
    <circle fill="#fff" cx="14.7" cy="14.7" r="1.4" />
  </svg>
);

const CsharpIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="#6A1577" d="M12.4,2.5C7,2.5,3.3,6.2,3.3,11.6s3.6,9.1,9.1,9.1c5.3,0,9.1-3.6,9.1-9.1C21.5,6.2,17.7,2.5,12.4,2.5z M14.3,15.7h-4V17H8.5v-1.3H7.2V14h1.3v-4H7.2V8.3h1.3V7H10v1.3h4V7h1.8v1.3h1.3V10h-1.3v4h1.3v1.7h-1.3V17h-1.8V15.7z M14.3,14V10h-4v4H14.3z" />
  </svg>
);

const DotnetIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="#512BD4" d="M18.3,2.5H5.7C3.9,2.5,2.5,3.9,2.5,5.7v12.6c0,1.8,1.4,3.2,3.2,3.2h12.6c1.8,0,3.2-1.4,3.2-3.2V5.7C21.5,3.9,20.1,2.5,18.3,2.5z M10.1,19.3H6.7V8.9h3.5v1.2H7.9v3.4h2.2v1.2H7.9v3.4h2.2V19.3z M17.3,19.3h-4.6l-1.5-4.2h-0.1v4.2h-1.2V8.9h2.5c2.3,0,3.9,1.3,3.9,3.6c0,1.5-0.7,2.6-1.9,3.2l2,3.6H17.3z M15.4,11.1c0-0.9-0.6-1.4-1.6-1.4h-1.2v2.9h1.2C14.8,12.6,15.4,12,15.4,11.1z" />
  </svg>
);

const PhpIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
    <circle fill="#8892BF" cx="16" cy="16" r="16" />
    <ellipse fill="#777BB4" cx="16" cy="16" rx="14" ry="14" />
    <path fill="#E0D9F4" d="M12.2 11.1c-.1 0-.3.1-.3.2s0 .2.1.3l.1.1c1.2.6 1.1 1.6.6 2.3-.5.7-1.4 1-2.4.6-.2-.1-.4-.1-.5 0-.1.1-.1.3 0 .4l.1.1c1.3.6 2.6.3 3.4-1 .9-1.3.5-3.1-1.2-4l-1.6-.8c-1.7-.9-2.2-2.3-1.3-3.6s2.5-2 4.1-1.1c.2.1.4.1.5 0 .1-.1.1-.3 0-.4l-.1-.1c-1.3-.6-2.6-.3-3.4 1-.9 1.3-.5 3.1 1.2 4l1.6.8c1.7.9 2.2 2.3 1.3 3.6-.8 1.4-2.5 2-4.1 1.1zm9-5c-2 0-3.6 1.6-3.6 3.6s1.6 3.6 3.6 3.6 3.6-1.6 3.6-3.6-1.6-3.6-3.6-3.6zm0 5.6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-7.2-5.6c-2 0-3.6 1.6-3.6 3.6s1.6 3.6 3.6 3.6 3.6-1.6 3.6-3.6-1.6-3.6-3.6-3.6zm0 5.6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
  </svg>
);

const SqlIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="#00758F" d="M12,2.5C6.8,2.5,2.5,6.8,2.5,12s4.3,9.5,9.5,9.5s9.5-4.3,9.5-9.5S17.2,2.5,12,2.5z M10.4,17.4c-0.8,0.3-1.8,0.5-2.8,0.5c-2.4,0-4.1-1.3-4.1-3.6c0-2.3,1.7-3.6,4.1-3.6c1,0,1.9,0.2,2.8,0.5V17.4z M17.3,17.9h-2.1v-8h2.1V17.9z M21.5,14.3c0,2.3-1.7,3.6-4.1,3.6c-1,0-1.9-0.2-2.8-0.5v-6.3c0.8-0.3,1.8-0.5,2.8-0.5C19.8,10.7,21.5,12,21.5,14.3z" />
    <path fill="#FFFFFF" d="M7.6,12.5c-1.4,0-2.2,0.8-2.2,1.8s0.8,1.8,2.2,1.8c0.7,0,1.3-0.2,1.8-0.3v-3C8.9,12.7,8.2,12.5,7.6,12.5z M18.7,12.5c-1.4,0-2.2,0.8-2.2,1.8s0.8,1.8,2.2,1.8c0.7,0,1.3-0.2,1.8-0.3v-3C20,12.7,19.3,12.5,18.7,12.5z" />
  </svg>
);

const WordpressIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="#21759B" d="M12,2.5C6.8,2.5,2.5,6.8,2.5,12s4.3,9.5,9.5,9.5s9.5-4.3,9.5-9.5S17.2,2.5,12,2.5z" />
    <path fill="#FFFFFF" d="M8.2,12.3c0-1.2,0.6-1.8,1.5-1.8c0.9,0,1.4,0.5,1.4,1.4c0,0.6-0.3,1-0.7,1.3l2,4.3h-1.8l-1.3-3l-0.9,1.1v1.9H8.2V12.3z M17.6,10.9c0.7,0,1.1,0.5,1.1,1.1c0,0.4-0.2,0.7-0.4,0.9l-1,0.7l1.4,2.9h-1.4l-1.1-2.4h-0.5v2.4h-1.2v-6.1h1.8c0.7,0,1.2,0.2,1.4,0.5C17.4,10.8,17.5,10.8,17.6,10.9z M16.9,12.3c-0.4,0-0.6-0.2-0.6-0.5c0-0.3,0.2-0.5,0.6-0.5h0.3v1H16.9z M6.9,8.2h2.2l0.9,2.6l1-2.6h2.2l-2,5l2.2,5H10.2l-1.2-3.1L7.9,18.2H5.7l2.2-5L6.9,8.2z" />
  </svg>
);

const ExpoIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="#000020" viewBox="0 0 24 24" {...props}>
    <path d="M16.85.12c-1.2-.24-2.44.71-2.68 1.9L12 11.95 9.83 2.02c-.24-1.19-1.48-1.9-2.68-1.9-1.2 0-2.44.71-2.68 1.9L.12 16.6c-.24 1.2.72 2.44 1.92 2.68.24.24 2.15 0 2.15 0l2.4-9.62L8.76 22c.24 1.2 1.48 2.15 2.68 2.15s2.44-.71 2.68-1.9L18.47 9.8l2.4 9.62s1.9.24 2.15 0c1.2-.24 1.9-1.48 1.9-2.68L16.85.12Z" />
  </svg>
);

const GitIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="#F05033" d="M23.5,10.8L13.2,0.5c-0.6-0.6-1.7-0.6-2.3,0L0.5,10.8c-0.6,0.6-0.6,1.7,0,2.3l4.8,4.8H9.7l-2.4-2.4l7.8-7.8l7.8,7.8l-2.4,2.4h4.3l4.8-4.8C24.1,12.5,24.1,11.5,23.5,10.8z M18.4,18.4v4.3c0,0.5-0.4,0.8-0.8,0.8h-2.9c-0.5,0-0.8-0.4-0.8-0.8v-4.3c-1.3-0.2-2.3-1.3-2.3-2.6c0-1.4,1.2-2.6,2.6-2.6s2.6,1.2,2.6,2.6C19.2,16.4,18.9,17.5,18.4,18.4z M17.6,15.8c0-0.9-0.7-1.7-1.7-1.7s-1.7,0.7-1.7,1.7s0.7,1.7,1.7,1.7S17.6,16.7,17.6,15.8z M8.5,15.8c0-1.4-1.2-2.6-2.6-2.6S3.4,14.3,3.4,15.8c0,1.4,1.2,2.6,2.6,2.6h2.6v-2.6H8.5z" />
  </svg>
);

const DockerIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="#2496ED" d="M21.5,13.4c-0.2-1.2-0.8-2.3-1.7-3.2c-0.3-0.3-0.7-0.6-1.1-0.8c-0.2-0.1-0.5-0.2-0.7-0.3c-1-0.4-2.1-0.5-3.2-0.3c-0.4,0.1-0.8,0.2-1.2,0.4c-0.1,0-0.1,0.1-0.2,0.1c-1,0.4-1.9,1-2.6,1.8c-1.2,1.3-1.8,3-1.7,4.8c0.1,1,0.4,1.9,1,2.8c0.8,1.2,2,2.1,3.5,2.4c0.1,0,0.2,0.1,0.3,0.1c2.1,0.4,4.2-0.2,5.8-1.5c1.4-1.2,2.2-2.8,2.3-4.5C21.6,13.8,21.5,13.6,21.5,13.4z M7.7,8.6H5.4V6.3h2.3V8.6z M10.5,8.6H8.2V6.3h2.3V8.6z M13.3,8.6h-2.3V6.3h2.3V8.6z M16.1,8.6h-2.3V6.3h2.3V8.6z M13.3,5.6H11V3.3h2.3V5.6z M10.5,5.6H8.2V3.3h2.3V5.6z" />
  </svg>
);

const NpmIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 576" {...props}>
    <path fill="#CB3837" d="M0 0h576v576H0z" />
    <path fill="#FFF" d="M128 128h320v192H320v64H128V128z" />
    <path fill="#CB3837" d="M320 192h64v128h-64z" />
  </svg>
);

const AdobeIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="#FF0000" d="M14.5,3h-5L3,21h5.3l1.1-3.3h5.1L15.7,21H21L14.5,3z M12,14.3L13.2,11l1.2,3.3H12z" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93-.8 0-1.39.57-1.39 1.93V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.28.98 3.28 3.9v5.24z" />
  </svg>
);

const GithubIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const LangChainIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#13B5EC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

const LangGraphIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="5" r="2.5" fill="#4F46E5" />
    <circle cx="5" cy="12" r="2.5" fill="#4F46E5" />
    <circle cx="19" cy="12" r="2.5" fill="#4F46E5" />
    <circle cx="12" cy="19" r="2.5" fill="#4F46E5" />
    <line x1="12" y1="7.5" x2="5.5" y2="10.5" />
    <line x1="12" y1="7.5" x2="18.5" y2="10.5" />
    <line x1="5.5" y1="13.5" x2="11.5" y2="16.5" />
    <line x1="18.5" y1="13.5" x2="12.5" y2="16.5" />
    <line x1="12" y1="7.5" x2="12" y2="16.5" />
  </svg>
);

const LlmIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1 0-3.12 3 3 0 0 1 0-3.88 2.5 2.5 0 0 1 0-3.12A2.5 2.5 0 0 1 9.5 2Z" />
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 0-3.12 3 3 0 0 0 0-3.88 2.5 2.5 0 0 0 0-3.12A2.5 2.5 0 0 0 14.5 2Z" />
    <path d="M12 5h.01M12 9h.01M12 13h.01M12 17h.01" />
  </svg>
);

const VectorDbIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <polygon points="12,12 15,10.5 15,13.5" fill="#F59E0B" />
  </svg>
);

const RagIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <circle cx="10" cy="13" r="2" />
    <line x1="11.5" y1="14.5" x2="16" y2="19" />
  </svg>
);

const AgenticIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.1a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" fill="none" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

// --- Animation Wrapper Component ---
const AnimationWrapper = ({ children, delay = 0, triggerOnScroll = false }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (triggerOnScroll) {
      const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (entry.isIntersecting) {
            setVisible(true);
            if (ref.current) {
              observer.unobserve(ref.current);
            }
          }
        },
        { threshold: 0.1 }
      );
      const currentRef = ref.current;
      if (currentRef) {
        observer.observe(currentRef);
      }
      return () => {
        if (currentRef) {
          observer.unobserve(currentRef);
        }
      };
    } else {
      const timer = setTimeout(() => {
        setVisible(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [delay, triggerOnScroll]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      {children}
    </div>
  );
};

// --- Toolkit Item Component ---
const SkillCard = ({ name, icon, index }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const animClass = 'animate-slide-in-left';
  const delay = index * 75;

  return (
    <div
      ref={ref}
      className={`flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-200 transition-all duration-300 ease-in-out hover:border-accent-dark hover:shadow-lg hover:-translate-y-1 ${
        visible ? animClass : 'opacity-0'
      }`}
      style={{
        animationDelay: visible ? `${delay}ms` : '0ms',
      }}
    >
      <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
        {icon}
      </div>
      <span className="font-semibold text-gray-700 text-sm">{name}</span>
    </div>
  );
};

// --- Main Home View Component ---
const Home = () => {
  const [submitStatus, setSubmitStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('Sending...');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const payload = {
      ...data,
      _subject: `JasonAJames.com contact form submission: ${data.subject}`,
    };

    try {
      const response = await fetch('https://formspree.io/f/mzzjgzjn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmitStatus('Message Sent! Thank you for reaching out.');
        form.reset();
      } else {
        const errorData = await response.json();
        const errorMessage =
          errorData.errors?.map((err) => err.message).join(', ') ||
          'Something went wrong.';
        setSubmitStatus(`Error: ${errorMessage}`);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('Error: An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Skill sets mapping
  const aiSkills = [
    { name: 'LangChain', icon: <LangChainIcon className="w-6 h-6" /> },
    { name: 'LangGraph', icon: <LangGraphIcon className="w-6 h-6" /> },
    { name: 'LLMs & APIs (OpenAI/Anthropic)', icon: <LlmIcon className="w-6 h-6" /> },
    { name: 'Vector DBs (Chroma/Pinecone)', icon: <VectorDbIcon className="w-6 h-6" /> },
    { name: 'RAG Architecture', icon: <RagIcon className="w-6 h-6" /> },
    { name: 'Agentic Workflows', icon: <AgenticIcon className="w-6 h-6" /> },
  ];

  const frontendSkills = [
    { name: 'HTML5', icon: <Html5Icon className="w-6 h-6" /> },
    { name: 'CSS3', icon: <Css3Icon className="w-6 h-6" /> },
    { name: 'JavaScript', icon: <JavascriptIcon className="w-6 h-6" /> },
    { name: 'TypeScript', icon: <TypescriptIcon className="w-6 h-6" /> },
    { name: 'React', icon: <ReactIcon className="w-6 h-6" /> },
    { name: 'Angular', icon: <AngularIcon className="w-6 h-6" /> },
    { name: 'Next.js', icon: <NextjsIcon className="w-6 h-6" /> },
    { name: 'Vue.js', icon: <VuejsIcon className="w-6 h-6" /> },
    { name: 'Redux', icon: <ReduxIcon className="w-6 h-6" /> },
  ];

  const backendSkills = [
    { name: 'Node.js', icon: <NodejsIcon className="w-6 h-6" /> },
    { name: 'Python', icon: <PythonIcon className="w-6 h-6" /> },
    { name: 'C#', icon: <CsharpIcon className="w-6 h-6" /> },
    { name: '.NET', icon: <DotnetIcon className="w-6 h-6" /> },
    { name: 'PHP', icon: <PhpIcon className="w-6 h-6" /> },
    { name: 'SQL', icon: <SqlIcon className="w-6 h-6" /> },
  ];

  const mobileSkills = [
    { name: 'React Native', icon: <ReactIcon className="w-6 h-6" /> },
    { name: 'Expo CLI', icon: <ExpoIcon className="w-6 h-6" /> },
    { name: 'WordPress', icon: <WordpressIcon className="w-6 h-6" /> },
  ];

  const toolsSkills = [
    { name: 'Git', icon: <GitIcon className="w-6 h-6" /> },
    { name: 'Docker', icon: <DockerIcon className="w-6 h-6" /> },
    { name: 'npm / Yarn', icon: <NpmIcon className="w-6 h-6" /> },
    { name: 'Adobe Suite', icon: <AdobeIcon className="w-6 h-6" /> },
  ];

  return (
    <>
      {/* Hero Header Section */}
      <section className="text-center py-12 md:py-16">
        <AnimationWrapper delay={100}>
          <img
            src="/assets/avatar.jpg"
            alt="Jason A. James"
            className="w-32 h-32 mx-auto mb-6 rounded-full object-cover ring-4 ring-white shadow-lg"
          />
        </AnimationWrapper>
        <AnimationWrapper delay={200}>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Jason James
          </h1>
        </AnimationWrapper>
        <AnimationWrapper delay={300}>
          <p className="mt-4 text-xl md:text-2xl font-semibold text-accent-dark">
            Full-Stack Software Developer & AI Specialist
          </p>
        </AnimationWrapper>
        <AnimationWrapper delay={400}>
          <div className="mt-4 flex justify-center items-center space-x-2 text-gray-600 font-medium flex-wrap">
            <span>Python</span>
            <span className="text-gray-300">•</span>
            <span>React</span>
            <span className="text-gray-300">•</span>
            <span>React Native</span>
            <span className="text-gray-300">•</span>
            <span>AI/ML</span>
          </div>
        </AnimationWrapper>
        <AnimationWrapper delay={500}>
          <p className="mt-4 max-w-2xl mx-auto text-md text-gray-500">
            Founder of AI Agent Innovation Academy | Delivering Scalable Apps & AI Training for Businesses
          </p>
        </AnimationWrapper>
        <AnimationWrapper delay={600}>
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={handleContactClick}
              className="bg-accent text-white font-semibold py-3 px-8 rounded-full hover:bg-accent-dark transition-all duration-300 transform hover:scale-105 inline-block shadow-md hover:shadow-lg w-full sm:w-auto cursor-pointer"
            >
              Contact Me
            </button>
            <a
              href="https://www.linkedin.com/in/jasonalanjames/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-linkedin text-white font-semibold py-3 px-8 rounded-full hover:opacity-90 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center shadow-md hover:shadow-lg w-full sm:w-auto"
            >
              <LinkedinIcon className="w-5 h-5 mr-2" />
              Connect with Me
            </a>
            {/* Newly added GitHub Button styled uniformly */}
            <a
              href="https://github.com/JasonAlanJames"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-white font-semibold py-3 px-8 rounded-full hover:bg-black transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center shadow-md hover:shadow-lg w-full sm:w-auto"
            >
              <GithubIcon className="w-5 h-5 mr-2" />
              GitHub
            </a>
          </div>
        </AnimationWrapper>
      </section>

      {/* AI & ML Section */}
      <section id="ai-ml" className="scroll-mt-20">
        <AnimationWrapper delay={700}>
          <div className="max-w-3xl mx-auto prose prose-lg max-w-none prose-a:text-accent-dark hover:prose-a:text-accent-dark prose-a:font-semibold prose-blockquote:border-l-accent prose-headings:text-gray-900 prose-strong:text-gray-900 mt-16">
            <h2 className="text-3xl font-bold !mb-8 border-b border-gray-200 pb-4">
              Pioneering in AI & Machine Learning
            </h2>
            <p>
              In an era defined by data and intelligence, my work in AI and Machine Learning is a cornerstone of my expertise. I possess deep, hands-on experience in the end-to-end lifecycle of AI systems, from conceptualization and data processing to model training, deployment, and maintenance in live, production environments.
            </p>
            <p>
              I have successfully built and scaled AI-driven platforms, demonstrating a command of the technologies that power modern intelligent applications. This is not just a passing interest; it is a core competency that I bring to every project, ensuring solutions are not only current but also future-proof.
            </p>
          </div>
        </AnimationWrapper>
      </section>

      {/* About Me Section */}
      <section>
        <AnimationWrapper delay={800}>
          <div className="max-w-3xl mx-auto prose prose-lg max-w-none prose-a:text-accent-dark hover:prose-a:text-accent-dark prose-a:font-semibold prose-blockquote:border-l-accent prose-headings:text-gray-900 prose-strong:text-gray-900 mt-16">
            <h2 className="text-3xl font-bold !mb-8 border-b border-gray-200 pb-4">
              About Me
            </h2>
            <p>
              I'm a full-stack software engineer based in Southern California. With over two decades of experience, I specialize in building for the web and mobile. A highlight of my career was developing one of the first HTTP live streaming platforms back in 2004.
            </p>
          </div>
        </AnimationWrapper>
      </section>

      {/* Toolkit Grid Section */}
      <section>
        <div className="not-prose mt-16 max-w-3xl mx-auto">
          <AnimationWrapper triggerOnScroll={true}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              My Toolkit
            </h3>
            <p className="text-gray-600">
              My expertise spans the full development lifecycle, from concept and design to deployment and maintenance. Here are some of the technologies and tools I use to build modern, scalable applications.
            </p>
          </AnimationWrapper>

          {/* AI Integration & Agentic Systems Category */}
          <div className="mt-8">
            <AnimationWrapper triggerOnScroll={true}>
              <h4 className="text-xl font-bold text-accent-dark mt-8 mb-2">
                AI Integration & Agentic Systems
              </h4>
              <p className="text-gray-600 mb-4 font-normal">
                Designing AI-powered workflows, agentic automation systems, RAG pipelines, and LLM-integrated applications for scalable business operations.
              </p>
            </AnimationWrapper>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {aiSkills.map((skill, u) => (
                <SkillCard key={skill.name} name={skill.name} icon={skill.icon} index={u} />
              ))}
            </div>
          </div>

          {/* Frontend Category */}
          <div className="mt-8">
            <AnimationWrapper triggerOnScroll={true}>
              <h4 className="text-xl font-bold text-accent-dark mt-8 mb-2">
                Frontend
              </h4>
              <p className="text-gray-600 mb-4 font-normal">
                Crafting responsive and engaging user interfaces with modern frameworks and libraries.
              </p>
            </AnimationWrapper>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {frontendSkills.map((skill, u) => (
                <SkillCard key={skill.name} name={skill.name} icon={skill.icon} index={u + aiSkills.length} />
              ))}
            </div>
          </div>

          {/* Backend Category */}
          <div className="mt-8">
            <AnimationWrapper triggerOnScroll={true}>
              <h4 className="text-xl font-bold text-accent-dark mt-8 mb-2">
                Backend & Databases
              </h4>
              <p className="text-gray-600 mb-4">
                Building robust server-side logic and managing data with efficiency and security.
              </p>
            </AnimationWrapper>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {backendSkills.map((skill, u) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  icon={skill.icon}
                  index={u + aiSkills.length + frontendSkills.length}
                />
              ))}
            </div>
          </div>

          {/* Mobile Category */}
          <div className="mt-8">
            <AnimationWrapper triggerOnScroll={true}>
              <h4 className="text-xl font-bold text-accent-dark mt-8 mb-2">
                Mobile & Platforms
              </h4>
              <p className="text-gray-600 mb-4">
                Developing cross-platform mobile applications and working with content management systems.
              </p>
            </AnimationWrapper>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {mobileSkills.map((skill, u) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  icon={skill.icon}
                  index={u + aiSkills.length + frontendSkills.length + backendSkills.length}
                />
              ))}
            </div>
          </div>

          {/* Tools Category */}
          <div className="mt-8">
            <AnimationWrapper triggerOnScroll={true}>
              <h4 className="text-xl font-bold text-accent-dark mt-8 mb-2">
                Tools & Design
              </h4>
              <p className="text-gray-600 mb-4">
                The essential tools and software I use to bring ideas to life, from version control to creative design.
              </p>
            </AnimationWrapper>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {toolsSkills.map((skill, u) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  icon={skill.icon}
                  index={u + aiSkills.length + frontendSkills.length + backendSkills.length + mobileSkills.length}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ventures Section */}
      <section>
        <AnimationWrapper triggerOnScroll={true}>
          <div className="max-w-3xl mx-auto prose prose-lg max-w-none prose-a:text-accent-dark hover:prose-a:text-accent-dark prose-a:font-semibold prose-blockquote:border-l-accent prose-headings:text-gray-900 prose-strong:text-gray-900 mt-16">
            <h2 className="text-3xl font-bold !mb-8 border-b border-gray-200 pb-4">
              Professional Experience & Ventures
            </h2>
            <h3 className="!mt-12 !mb-6">
              Partner at USA Marketing NOW
            </h3>
            <p>
              As a key partner at{' '}
              <a href="https://usamarketingnow.com" target="_blank" rel="noopener noreferrer">
                USA Marketing NOW
              </a>
              , I deliver comprehensive solutions, from native app and web development to marketing and branding. My work has directly contributed to significant client success, including driving over $16 million in sales growth within a single year through strategic development and marketing initiatives.
            </p>
            <h3 className="!mt-12 !mb-6">
              Founder of AI Agent Innovation Academy
            </h3>
            <p>
              Driven by a passion to cultivate the next wave of AI professionals, I founded the AI Agent Innovation Academy. We offer comprehensive, hands-on certification courses that bridge the gap between theoretical knowledge and practical, real-world application in building sophisticated Agentic AI solutions.
            </p>
            <p>
              Our curriculum is designed to equip you with the skills needed to excel in the rapidly evolving field of AI. I invite you to explore our offerings and begin your journey. Visit the academy at{' '}
              <a href="https://aiagentinnovation.com" target="_blank" rel="noopener noreferrer">
                aiagentinnovation.com
              </a>{' '}
              or browse our courses directly on our{' '}
              <a href="https://programs.aiagentinnovation.com/courses-page/" target="_blank" rel="noopener noreferrer">
                courses page
              </a>
              .
            </p>
          </div>
        </AnimationWrapper>
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-20 mt-16">
        <AnimationWrapper triggerOnScroll={true}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b border-gray-200 pb-4">
              Contact Me
            </h2>
            <p className="text-gray-600 mb-8">
              I'm always open to discussing new projects and collaboration opportunities. If you're looking for a developer with a proven track record of delivering results, feel free to reach out using the form below.
            </p>
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-accent-dark focus:border-accent-dark sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Your Email (for response)
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-accent-dark focus:border-accent-dark sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-accent-dark focus:border-accent-dark sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-accent-dark focus:border-accent-dark sm:text-sm"
                />
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-accent hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-dark disabled:bg-gray-400 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
              {submitStatus && (
                <p
                  className={`font-semibold text-center mt-4 ${
                    submitStatus.toLowerCase().includes('error') ? 'text-red-600' : 'text-green-600'
                  }`}
                >
                  {submitStatus}
                </p>
              )}
            </form>
          </div>
        </AnimationWrapper>
      </section>
    </>
  );
};

// --- 404 View Component ---
const NotFound = () => (
  <div className="text-center py-20 max-w-3xl mx-auto opacity-0 animate-fade-in-up">
    <h1 className="text-5xl font-bold text-gray-900">404</h1>
    <p className="mt-4 text-xl text-gray-600">Page Not Found</p>
    <p className="mt-2 text-gray-500">Sorry, the page you are looking for does not exist.</p>
    <div className="mt-10">
      <a
        href="#/"
        className="bg-accent text-white font-semibold py-3 px-8 rounded-full hover:bg-accent-dark transition-all duration-300 transform hover:scale-105 inline-block shadow-md hover:shadow-lg"
      >
        Go back home
      </a>
    </div>
  </div>
);

// --- Footer Component ---
const Footer = () => (
  <footer className="py-8 mt-20 border-t border-gray-200">
    <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
      <p>© {new Date().getFullYear()} Jason A. James. All rights reserved.</p>
      <p className="mt-2">Built with React and Tailwind CSS.</p>
    </div>
  </footer>
);

// --- Page Layout Wrapper Component ---
const Layout = ({ children }) => (
  <div className="bg-gray-50 text-gray-800 font-sans min-h-screen selection:bg-accent-light">
    <main className="max-w-5xl mx-auto p-6 sm:p-8">
      {children}
      <Footer />
    </main>
  </div>
);

// --- App Router Component ---
export default function App() {
  const getHash = () => window.location.hash.slice(1) || '/';
  const [hash, setHash] = useState(getHash());

  useEffect(() => {
    const handleHashChange = () => {
      setHash(getHash());
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  let view;
  if (hash === '/') {
    view = <Home />;
  } else {
    view = <NotFound />;
  }

  return <Layout>{view}</Layout>;
}
