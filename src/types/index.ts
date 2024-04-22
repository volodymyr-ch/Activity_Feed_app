export enum NoteType {
  meeting = 'meeting',
  phoneCall = 'phoneCall',
  coffee = 'coffee',
  beer = 'beer',
  message = 'message',
}

export type User = {
  id: string;
  fullName: string;
};

export type Note = {
  id: string;
  timestamp: number;
  description: string;
  type: NoteType;
  owner: User;
  participant: User;
};
