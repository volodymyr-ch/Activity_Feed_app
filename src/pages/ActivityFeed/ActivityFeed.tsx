import { mockNotes } from 'mocks/activityFeed';
import { FC, useState } from 'react';
import { Note, User } from 'types';

type Props = {
  user: User;
  participant: User;
};

export const ActivityFeed: FC<Props> = ({ user, participant }) => {
  const [notes, setNotes] = useState<Note[]>(mockNotes);

  return <span>ActivityFeed</span>;
};
