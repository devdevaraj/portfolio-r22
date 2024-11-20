import React, { useRef } from "react";

export default function Lottie({url, width, height }:{ url: string, width: string, height: string }) {
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  return (
        <lottie-player
          id="firstLottie"
          ref={ref}
          autoplay
          // controls
          loop
          mode="normal"
          src={url}
          style={{ width, height }}
        ></lottie-player>
  );
}