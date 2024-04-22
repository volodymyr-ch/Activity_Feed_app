import { iconsByNoteType } from 'consts';
import { FC, useRef, useState } from 'react';
import { FaListUl } from 'react-icons/fa';
import { NoteType } from 'types';
import * as S from './Input.styles';

type Props = {
  participantFullName: string;
  onSubmit: (type: NoteType, description: string, timestamp: number) => void;
};

export const Input: FC<Props> = ({ participantFullName, onSubmit }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState('');
  const [noteType, setNoteType] = useState(NoteType.message);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    onSubmit(noteType, value, Date.now());
    setValue('');
    inputRef?.current?.focus();
  };

  const handleNoteTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNoteType(e.target.value as NoteType);
    inputRef?.current?.focus();
  };

  const getPlaceholder = (noteType: NoteType) => {
    switch (noteType) {
      case NoteType.meeting:
        return `Have a meeting with ${participantFullName}...`;
      case NoteType.phoneCall:
        return `Have a call with ${participantFullName}...`;
      case NoteType.coffee:
        return `Have a coffee with ${participantFullName}...`;
      case NoteType.beer:
        return `Have a beer meeting with ${participantFullName}...`;
      case NoteType.message:
      default:
        return `Add a note about ${participantFullName}...`;
    }
  };

  return (
    <S.Wrapper>
      <S.Form>
        <S.Input
          type="text"
          ref={inputRef}
          autoFocus
          value={value}
          placeholder={getPlaceholder(noteType)}
          onChange={handleChange}
        />
        <S.ButtonsBlock>
          <S.LabelsWrapper>
            {[
              NoteType.message,
              NoteType.phoneCall,
              NoteType.coffee,
              NoteType.beer,
              NoteType.meeting,
            ].map((type) => {
              const Icon = iconsByNoteType[type];
              const isActive = type === noteType;
              const iconStyles = {
                color: isActive ? '#fff' : 'gray',
              };

              return (
                <span key={type}>
                  <S.Radio
                    id={type}
                    type="radio"
                    name={type}
                    value={type}
                    checked={isActive}
                    onChange={handleNoteTypeChange}
                  />
                  <S.LabelIcon htmlFor={type} isActive={isActive} aria-label={type}>
                    <Icon style={iconStyles} />
                  </S.LabelIcon>
                </span>
              );
            })}
          </S.LabelsWrapper>
          <S.Btn type="submit" onClick={handleSubmit}>
            Submit
          </S.Btn>
        </S.ButtonsBlock>
        <S.Icon>
          <FaListUl color="gray" />
        </S.Icon>
      </S.Form>
    </S.Wrapper>
  );
};
