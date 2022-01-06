import { useState } from "react";

export default function Person({ navFocus, defaultHex, activeHex }) {
  let [state, setState] = useState({ color: defaultHex, isFocused: false });

  const handleGetHex = (element) => {
    if (navFocus === element) {
      setHex(activeHex);
    } else {
      setHex(defaultHex);
    }
  };

  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setState({ color: activeHex })}
      onMouseLeave={() => setState({ color: defaultHex })}
    >
      <g id="me" clipPath="url(#clip0)">
        <g id="Group">
          <path
            id="Vector"
            d="M15.9999 15.6501C19.5577 15.6501 22.4422 12.1467 22.4422 7.8251C22.4422 3.50336 21.4952 0 15.9999 0C10.5046 0 9.55737 3.50336 9.55737 7.8251C9.55737 12.1467 12.4419 15.6501 15.9999 15.6501Z"
            fill={navFocus === "profile" ? activeHex : state.color}
          />
          <path
            id="Vector_2"
            d="M3.83153 27.598C3.83048 27.3345 3.82944 27.5238 3.83153 27.598V27.598Z"
            fill={navFocus === "profile" ? activeHex : state.color}
          />
          <path
            id="Vector_3"
            d="M28.1677 27.8038C28.171 27.7317 28.1688 27.3033 28.1677 27.8038V27.8038Z"
            fill={navFocus === "profile" ? activeHex : state.color}
          />
          <path
            id="Vector_4"
            d="M28.154 27.2821C28.0347 19.7536 27.0515 17.6084 19.5275 16.2505C19.5275 16.2505 18.4684 17.6001 15.9999 17.6001C13.5313 17.6001 12.472 16.2505 12.472 16.2505C5.03017 17.5936 3.98715 19.707 3.85001 27.0375C3.83877 27.6361 3.83355 27.6675 3.83154 27.598C3.832 27.7282 3.83255 27.969 3.83255 28.389C3.83255 28.389 5.62382 32 15.9999 32C26.3757 32 28.1672 28.389 28.1672 28.389C28.1672 28.1192 28.1674 27.9316 28.1676 27.8039C28.1656 27.8469 28.1616 27.7636 28.154 27.2821Z"
            fill={navFocus === "profile" ? activeHex : state.color}
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0">
          <rect
            width="32"
            height="32"
            fill={navFocus === "profile" ? activeHex : state.color}
          />
        </clipPath>
      </defs>
    </svg>
  );
}
