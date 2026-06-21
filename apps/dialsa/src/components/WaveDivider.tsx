export function WaveDivider({
  from = "white",
  to = "gray-50",
  flip = false,
}: {
  from?: string;
  to?: string;
  flip?: boolean;
}) {
  return (
    <div
      className={`relative -mt-1 ${flip ? "rotate-180" : ""}`}
      style={{ lineHeight: 0 }}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className={`w-full bg-${from}`}
        style={{ height: "80px", display: "block" }}
      >
        <path
          className={`fill-${to}`}
          d="M0,60 C160,100 320,0 480,60 C640,120 800,20 960,60 C1120,100 1280,20 1440,60 L1440,120 L0,120 Z"
        />
      </svg>
    </div>
  );
}
