"use client";

import { useState } from "react";

interface FacilitatorCardProps {
  name: string;
  description: string;
  photo: string;
  linkedIn: string;
}

export default function FacilitatorCard({
  name,
  description,
  photo,
  linkedIn,
}: FacilitatorCardProps) {
  const [imgError, setImgError] = useState(false);

  // Generate initials for fallback
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <a
      href={linkedIn}
      target="_blank"
      rel="noopener noreferrer"
      className="facilitator-card"
    >
      <div className="facilitator-photo-wrapper">
        {imgError ? (
          <div className="facilitator-photo-fallback">{initials}</div>
        ) : (
          <img
            src={photo}
            alt={name}
            className="facilitator-photo"
            onError={() => setImgError(true)}
          />
        )}
      </div>
      <h3 className="facilitator-name">{name}</h3>
      <p className="facilitator-desc">{description}</p>
      <span className="facilitator-linkedin-badge">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
        View Profile
      </span>
    </a>
  );
}
