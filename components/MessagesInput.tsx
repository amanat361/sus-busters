"use client";

import { useState } from 'react';
import { Button } from '@/components/primitives/button';

type MessageInputProps = {
  onSendMessage: (message: string) => void;
};

export default function MessageInput({ onSendMessage }: MessageInputProps) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="flex-grow px-3 py-2 border rounded"
        placeholder="Type a message..."
      />
      <Button type="submit">Send</Button>
    </form>
  );
}import { type } from 'os';
import React, { FormEvent } from 'react';
