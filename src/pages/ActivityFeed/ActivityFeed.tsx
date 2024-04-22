import { mockNotes } from 'mocks/activityFeed';
import { FC, useCallback, useState } from 'react';
import { Note, NoteType, User } from 'types';
import { v4 as uuidv4 } from 'uuid';
import * as S from './ActivityFeed.styles';
import { Input } from './components/Input';
import { List } from './components/List';

type Props = {
  user: User;
  participant: User;
};

export const ActivityFeed: FC<Props> = ({ user, participant }) => {
  const [notes, setNotes] = useState<Note[]>(mockNotes);

  const createNote = useCallback(
    (type: NoteType, description: string, timestamp: number) => {
      const newNote: Note = {
        id: uuidv4(),
        timestamp,
        description,
        type,
        owner: user,
        participant,
      };

      setNotes((prev) => [...prev, newNote]);
    },
    [user, participant]
  );

  const deleteNote = useCallback((id: string) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  }, []);

  return (
    <S.Wrapper>
      <S.Container>
        <S.ContentWrapper>
          <Input participantFullName={participant.fullName} onSubmit={createNote} />
          <List currUserId={user.id} notes={notes} onDeleteClick={deleteNote} />
        </S.ContentWrapper>
      </S.Container>
    </S.Wrapper>
  );
};
