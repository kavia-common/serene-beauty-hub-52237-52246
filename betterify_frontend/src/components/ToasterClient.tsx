"use client";

import React from "react";
import { Toaster } from "react-hot-toast";

// PUBLIC_INTERFACE
export default function ToasterClient() {
  /** Global toast UI layer. */
  return (
    <Toaster
      position="bottom-center"
      toastOptions={{
        duration: 3200,
        style: {
          background: "rgba(20,19,33,0.9)",
          color: "rgba(229,231,235,0.95)",
          border: "1px solid rgba(124,58,237,0.25)",
          backdropFilter: "blur(12px)",
        },
      }}
    />
  );
}
