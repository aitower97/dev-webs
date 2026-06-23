import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1a6ad4 0%, #0d3b6f 100%)",
          borderRadius: "8px",
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M6 3h5c4.5 0 8 2.8 8 8s-3.5 8-8 8H6V3zM9 6v10h2c3 0 5-2 5-5s-2-5-5-5H9z"
            fill="white"
          />
          <path
            d="M2 21c2-1.8 4-1.8 6 0s4 1.8 6 0 4-1.8 6 0"
            stroke="rgba(142,188,255,0.9)"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
