'use client';

import React, { useState } from 'react';
import { Input } from './ui/input';

const MailchimpForm = () => {
  const [email, setEmail] = useState('');
  const [fname, setFname] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('idle');

    const formData = new FormData();
    formData.append('EMAIL', email);
    formData.append('FNAME', fname);

    const res = await fetch('/api/mailchimp', {
      method: 'POST',
      body: formData,
    });

    if (res.ok) {
      setStatus('success');
      setEmail('');
      setFname('');
    } else {
      setStatus('error');
    }
  };

  return (
    <div className="mailchimp-form-container">
      {/* <h2>Subscribe</h2> */}
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Email Address"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="text"
          placeholder="First Name"
          required
          value={fname}
          onChange={(e) => setFname(e.target.value)}
        />
        <button className="mailchimp-btn" type="submit">
          Subscribe
        </button>
      </form>
      {status === 'success' && (
        <p className="mailchimp-success">Thank you for subscribing!</p>
      )}
      {status === 'error' && (
        <p className="mailchimp-error">Something went wrong. Try again.</p>
      )}
    </div>
  );
};

export default MailchimpForm;
