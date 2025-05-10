'use client'; // Mark as Client Component for interactivity

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add API call here
  };

  return (
    <div className="page">
      <h1>Contact Me</h1>
      <p>siddiquedotmax@gmail.com</p>
      <p>+91 63690 28125</p>
      <a href='https://www.linkedin.com/in/muhammed-siddique-6616042a1/'>Hire me</a>
    </div>
  );
}