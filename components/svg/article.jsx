import { useState } from "react";

export default function Article({ navFocus, defaultHex, activeHex }) {
  let [state, setState] = useState({ color: defaultHex, isFocused: false });

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
      <g id="article" clipPath="url(#clip0)">
        <path
          id="Vector"
          d="M28.136 7.84104L24.1587 3.86374L16.7527 11.3318L20.7307 15.3095L28.136 7.84104Z"
          fill={navFocus === "posts" ? activeHex : state.color}
          fillOpacity="0.74"
        />
        <path
          id="Vector_2"
          d="M13.1892 17.6448C12.8672 18.418 13.6436 19.1934 14.4163 18.8704L19.1773 16.4075L15.6499 12.8802L13.1892 17.6448Z"
          fill={navFocus === "posts" ? activeHex : state.color}
          fillOpacity="0.74"
        />
        <path
          id="Vector_3"
          d="M31.7253 4.25171C32.0916 3.88549 32.0916 3.29199 31.7253 2.92578L29.074 0.274654C28.7078 -0.0915566 28.1143 -0.0915566 27.748 0.274654L25.4846 2.53808L29.4617 6.51538L31.7253 4.25171Z"
          fill={navFocus === "posts" ? activeHex : state.color}
          fillOpacity="0.74"
        />
        <path
          id="Vector_4"
          d="M2.8125 26.3125H3.75V31.0625C3.75 31.4414 3.97803 31.7839 4.32861 31.9285C4.67407 32.0728 5.07959 31.9959 5.35034 31.7253L10.7632 26.3125H21.6875C23.2383 26.3125 24.5 25.0508 24.5 23.5V14.1917L21.5427 17.1489C21.2847 17.4072 20.9834 17.6104 20.6455 17.7522L15.2778 20.5354C14.7898 20.7461 14.4236 20.8203 14.0501 20.8203C13.771 20.8203 13.502 20.7666 13.2419 20.6875H6.5625C6.04419 20.6875 5.625 20.2681 5.625 19.75C5.625 19.2317 6.04419 18.8125 6.5625 18.8125H11.3098C11.1248 18.1987 11.2041 17.5339 11.4592 16.9238L14.3523 11.3052C14.4346 11.0974 14.6379 10.7952 14.8953 10.5381L17.8709 7.56251H2.8125C1.26172 7.56251 0 8.82422 0 10.375V23.5C0 25.0508 1.26172 26.3125 2.8125 26.3125Z"
          fill={navFocus === "posts" ? activeHex : state.color}
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
