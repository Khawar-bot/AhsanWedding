import { FamilyMessage } from '@/data/messagesData';

interface MessageCardProps {
  message: FamilyMessage;
}

export default function MessageCard({ message }: MessageCardProps) {
  return (
    <div className="message-card">
      <p className="message-text">"{message.message}"</p>
      <p className="message-author">— {message.author}</p>
    </div>
  );
}
