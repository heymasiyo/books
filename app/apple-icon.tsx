import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="#2563EB" />
      <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" stroke="#E4E4E7" />
      <rect x="7" y="7" width="8" height="8" rx="2" fill="#FAFAFA" />
      <rect x="17" y="7" width="8" height="8" rx="2" fill="white" />
      <rect x="7" y="17" width="8" height="8" rx="2" fill="#FAFAFA" />
      <rect x="17" y="17" width="8" height="8" rx="2" fill="#2563EB" />
    </svg>,
    {
      ...size,
    },
  );
}
