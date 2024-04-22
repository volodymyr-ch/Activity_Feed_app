import { FC } from 'react';
import { Note } from 'types';
import * as S from './List.styles';

type Props = {
  notes: Note[];
  currUserId: string;
  onDeleteClick: (id: string) => void;
};

export const List: FC<Props> = ({ notes, currUserId, onDeleteClick }) => {
  return (
    <S.List>
      {notes
        .sort((a, b) => b.timestamp - a.timestamp)
        .map((note) => (
          <S.StyledListItem
            key={note.id}
            note={note}
            ownerIsCurrUser={note.owner.id === currUserId}
            onDeleteClick={onDeleteClick}
          />
        ))}
    </S.List>
  );
};
