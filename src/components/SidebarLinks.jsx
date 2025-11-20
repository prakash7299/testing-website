import React from "react";
import "./SidebarLinks.css";

export default function SidebarLinks() {
  return (
    <div className="sidebar-links">
      <h3>Quick Link</h3>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About Conference</a></li>
        <li><a href="#">Registration</a></li>
        <li><a href="#">FAQ</a></li>
        <li><a href="#">Journal</a></li>
        <li><a href="#">Submission</a></li>
        <li><a href="#">Apply for Committee</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  );
}
