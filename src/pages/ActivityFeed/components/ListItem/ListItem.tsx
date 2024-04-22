import { iconsByNoteType } from 'consts';
import moment from 'moment';
import { FC, memo } from 'react';
import { MdDelete } from 'react-icons/md';
import { Note, NoteType } from 'types';
import * as S from './ListItem.styles';

type Props = {
  className?: string;
  note: Note;
  ownerIsCurrUser: boolean;
  onDeleteClick: (id: string) => void;
};

export const ListItem: FC<Props> = memo(({ className, note, ownerIsCurrUser, onDeleteClick }) => {
  const Icon = iconsByNoteType[note.type];

  const getNoteTitle = (type: NoteType, ownerFullName: string, participantFullName: string) => {
    const userName = ownerIsCurrUser ? 'You' : ownerFullName;

    switch (type) {
      case NoteType.meeting:
        return (
          <>
            <S.Name>{userName}</S.Name> had a meeting with <S.Name>{participantFullName}</S.Name>
          </>
        );
      case NoteType.phoneCall:
        return (
          <>
            <S.Name>{userName}</S.Name> had a call with <S.Name>{participantFullName}</S.Name>
          </>
        );
      case NoteType.coffee:
        return (
          <>
            <S.Name>{userName}</S.Name> had a coffee with <S.Name>{participantFullName}</S.Name>
          </>
        );
      case NoteType.message:
        return (
          <>
            <S.Name>{userName}</S.Name> added a note to <S.Name>{participantFullName}</S.Name>
          </>
        );
      case NoteType.beer:
        return (
          <>
            <S.Name>{userName}</S.Name> had a beer meeting with{' '}
            <S.Name>{participantFullName}</S.Name>
          </>
        );
      default:
        return null;
    }
  };

  const getTime = (timestamp: number) => {
    const noteDate = moment(timestamp);
    const currDate = moment();
    const daysDifference = currDate.diff(noteDate, 'days');

    if (daysDifference === 0) {
      return noteDate.format('HH:mm');
    }

    return `${daysDifference}d`;
  };

  return (
    <S.Wrapper key={note.timestamp} className={className}>
      <S.DataWrapper>
        <S.TextWrapper>
          <S.Title>
            {getNoteTitle(note.type, note.owner.fullName, note.participant.fullName)}
          </S.Title>
          <S.Description>{note.description}</S.Description>
        </S.TextWrapper>
        <S.DeleteIcon className="delete-icon" onClick={() => onDeleteClick(note.id)}>
          <MdDelete color="#fff" />
        </S.DeleteIcon>
      </S.DataWrapper>
      <S.Timestamp>{getTime(note.timestamp)}</S.Timestamp>
      <S.Icon>
        <Icon color="gray" />
      </S.Icon>
    </S.Wrapper>
  );
});
