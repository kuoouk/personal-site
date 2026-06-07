"use client";

import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export function ZoomImage(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <Zoom>
      <img {...props} style={{ width: "100%", height: "auto", cursor: "zoom-in" }} />
    </Zoom>
  );
}