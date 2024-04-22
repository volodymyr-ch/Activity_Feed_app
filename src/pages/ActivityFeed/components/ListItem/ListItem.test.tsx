import { render, screen } from '@testing-library/react';
import moment from 'moment';
import { NoteType } from 'types';
import { ListItem } from './ListItem';

describe('ListItem', () => {
  const note = {
    id: '1',
    timestamp: Date.now(),
    description: 'description',
    type: NoteType.meeting,
    owner: {
      id: '1',
      fullName: 'Owner',
    },
    participant: {
      id: '2',
      fullName: 'Participant',
    },
  };

  it('should render ListItem component when owner is not current user', () => {
    render(<ListItem note={note} ownerIsCurrUser={false} onDeleteClick={jest.fn()} />);

    expect(screen.getByText('Owner')).toBeInTheDocument();
    expect(screen.getByText(/had a meeting with/)).toBeInTheDocument();
    expect(screen.getByText('Participant')).toBeInTheDocument();
  });

  it('should render ListItem component when note type is meeting', () => {
    render(<ListItem note={note} ownerIsCurrUser={true} onDeleteClick={jest.fn()} />);

    expect(screen.getByText('You')).toBeInTheDocument();
    expect(screen.getByText(/had a meeting with/)).toBeInTheDocument();
    expect(screen.getByText('Participant')).toBeInTheDocument();
  });

  it('should render ListItem component when note type is phone call', () => {
    render(
      <ListItem
        note={{ ...note, type: NoteType.phoneCall }}
        ownerIsCurrUser={true}
        onDeleteClick={jest.fn()}
      />
    );

    expect(screen.getByText('You')).toBeInTheDocument();
    expect(screen.getByText(/had a call with/)).toBeInTheDocument();
    expect(screen.getByText('Participant')).toBeInTheDocument();
  });

  it('should render ListItem component when note type is coffee', () => {
    render(
      <ListItem
        note={{ ...note, type: NoteType.coffee }}
        ownerIsCurrUser={true}
        onDeleteClick={jest.fn()}
      />
    );

    expect(screen.getByText('You')).toBeInTheDocument();
    expect(screen.getByText(/had a coffee with/)).toBeInTheDocument();
    expect(screen.getByText('Participant')).toBeInTheDocument();
  });

  it('should render ListItem component when note type is message', () => {
    render(
      <ListItem
        note={{ ...note, type: NoteType.message }}
        ownerIsCurrUser={true}
        onDeleteClick={jest.fn()}
      />
    );

    expect(screen.getByText('You')).toBeInTheDocument();
    expect(screen.getByText(/added a note to/)).toBeInTheDocument();
    expect(screen.getByText('Participant')).toBeInTheDocument();
  });

  it('should render ListItem component when note type is beer', () => {
    render(
      <ListItem
        note={{ ...note, type: NoteType.beer }}
        ownerIsCurrUser={true}
        onDeleteClick={jest.fn()}
      />
    );

    expect(screen.getByText('You')).toBeInTheDocument();
    expect(screen.getByText(/had a beer meeting with/)).toBeInTheDocument();
    expect(screen.getByText('Participant')).toBeInTheDocument();
  });

  it('should render `3d` when the timestamp is 3 days ago', () => {
    const timestamp = Date.now() - 3 * 24 * 60 * 60 * 1000;
    render(
      <ListItem note={{ ...note, timestamp }} ownerIsCurrUser={true} onDeleteClick={jest.fn()} />
    );

    expect(screen.getByText('3d')).toBeInTheDocument();
  });

  it('should render `10:00` when the timestamp is today at 10:00', () => {
    const timestamp = moment();
    timestamp.set({ hour: 10, minute: 0, second: 0, millisecond: 0 });
    render(
      <ListItem
        note={{ ...note, timestamp: timestamp.unix() * 1000 }}
        ownerIsCurrUser={true}
        onDeleteClick={jest.fn()}
      />
    );

    expect(screen.getByText('10:00')).toBeInTheDocument();
  });
});
