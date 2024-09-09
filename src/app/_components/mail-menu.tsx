"use client";

import Link from "next/link";
import { useState } from "react";
import { BsEnvelope, BsLink45Deg } from "react-icons/bs";

export default function MailMenu() {
  const [feedback, setFeedback] = useState("Copy mail");
  return (
    <div className="dropdown">
      <div tabIndex={0} role="button">
        <BsEnvelope size={24}/>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box p-2 shadow"
        onBlur={() => {
          setFeedback("Copy mail");
        }}
      >
        <li>
          <div className="menu-title text-xs">triet0612@gmail.com</div>
        </li>
        <li>
          <Link href="mailto:triet0612@gmail.com" className="font-bold">
            Go to mail!
          </Link>
        </li>
        <li>
          <div
            className="font-bold transition ease-in"
            onClick={() => {
              navigator.clipboard.writeText("triet0612@gmail.com");
              setFeedback("Copied");
            }}
          >
            {feedback}
            <BsLink45Deg />
          </div>
        </li>
      </ul>
    </div>
  );
}
