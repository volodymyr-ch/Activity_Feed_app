import { Note, NoteType, User } from 'types';
import { v4 as uuidv4 } from 'uuid';

export const mockOwner: User = {
  id: uuidv4(),
  fullName: 'John Doe',
};

export const mockParticipant: User = {
  id: uuidv4(),
  fullName: 'Milton Romaguera',
};

export const mockNotes: Note[] = [
  {
    id: uuidv4(),
    timestamp: Date.now() - 1000 * 60 * 60 * 24 * 3, // 3 days ago
    description: 'And a more formal meeting.',
    type: NoteType.meeting,
    owner: mockOwner,
    participant: mockParticipant,
  },
  {
    id: uuidv4(),
    timestamp: Date.now() - 1000 * 60 * 60 * 24 * 5, // 5 days ago
    description: 'Then we had a follow-up call.',
    type: NoteType.phoneCall,
    owner: mockOwner,
    participant: mockParticipant,
  },
  {
    id: uuidv4(),
    timestamp: Date.now() - 1000 * 60 * 60 * 24 * 6, // 6 days ago
    description: 'We had a coffee!',
    type: NoteType.coffee,
    owner: mockOwner,
    participant: mockParticipant,
  },
  {
    id: uuidv4(),
    timestamp: Date.now() - 1000 * 60 * 60 * 24 * 14, // 14 days ago
    description: 'A test note of message type!',
    type: NoteType.message,
    owner: mockOwner,
    participant: mockParticipant,
  },
];
