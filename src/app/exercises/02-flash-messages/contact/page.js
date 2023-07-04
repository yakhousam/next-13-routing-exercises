"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { ToastContext } from "../../../../components/ToastProvider";

function ContactPage() {
  const router = useRouter();
  const { createToast } = React.useContext(ToastContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    createToast(
      "Your message was received. We'll get back to you soon!",
      "success"
    );
    router.push("/exercises/02-flash-messages");
  };
  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input id="name" required={true} />

        <label htmlFor="message">Message:</label>
        <textarea id="message" />

        <button>Submit</button>
      </form>
    </main>
  );
}

export default ContactPage;
