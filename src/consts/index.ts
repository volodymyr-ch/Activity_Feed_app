import { IconType } from 'react-icons';
import { BiSolidMessageRounded } from "react-icons/bi";
import { FaCoffee, FaUser } from 'react-icons/fa';
import { PiPhoneCallFill } from 'react-icons/pi';
import { RiBeerFill } from 'react-icons/ri';
import { NoteType } from 'types';

export const iconsByNoteType: Record<NoteType, IconType> = {
  [NoteType.meeting]: FaUser,
  [NoteType.phoneCall]: PiPhoneCallFill,
  [NoteType.coffee]: FaCoffee,
  [NoteType.message]: BiSolidMessageRounded,
  [NoteType.beer]: RiBeerFill,
};
