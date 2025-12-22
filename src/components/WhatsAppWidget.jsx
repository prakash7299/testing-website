import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppWidget.css";

export default function WhatsAppWidget() {
  return (
    <a
      href="https://wa.me/919025956834"  // your WhatsApp number here
      className="whatsapp_float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  );
}
