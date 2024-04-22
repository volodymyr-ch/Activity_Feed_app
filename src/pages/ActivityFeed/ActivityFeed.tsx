import { mockNotes } from 'mocks/activityFeed';
import { FC, useCallback, useState } from 'react';
import { Note, User } from 'types';
import * as S from './ActivityFeed.styles';
import { List } from './components/List';

type Props = {
  user: User;
  participant: User;
};

export const ActivityFeed: FC<Props> = ({ user, participant }) => {
  const [notes, setNotes] = useState<Note[]>(mockNotes);

  const deleteNote = useCallback((id: string) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  }, []);

  return (
    <S.Wrapper>
      <S.Container>
        <S.ContentWrapper>
          <List currUserId={user.id} notes={notes} onDeleteClick={deleteNote} />
        </S.ContentWrapper>
      </S.Container>
    </S.Wrapper>
  );
};
