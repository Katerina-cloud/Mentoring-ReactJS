import React from "react";

export function DottedIcon(props) {
  return (
    <svg
      width={45}
      height={44}
      viewBox="0 0 45 44"
      fill="none"
    >
      <ellipse cx={22.5} cy={22} rx={22.5} ry={22} fill="#232323" />
      <circle cx={21.5} cy={29.5} r={2.5} fill="#fff" />
      <circle cx={21.5} cy={21.5} r={2.5} fill="#fff" />
      <circle cx={21.5} cy={13.5} r={2.5} fill="#fff" />
    </svg>
  )
}
