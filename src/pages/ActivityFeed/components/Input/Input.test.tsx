import { fireEvent, render, screen } from '@testing-library/react';
import { NoteType } from 'types';
import { Input } from './Input';

describe('Input', () => {
  it('should render Input component', () => {
    render(<Input participantFullName="Participant" onSubmit={jest.fn()} />);

    expect(screen.getByPlaceholderText('Add a note about Participant...')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should call onSubmit when button is clicked', () => {
    const onSubmit = jest.fn();
    render(<Input participantFullName="Participant" onSubmit={onSubmit} />);

    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'description' } });
    fireEvent.click(screen.getByRole('button'));

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith(NoteType.message, 'description', expect.any(Number));
  });

  it('should change placeholder when note type is changed', () => {
    render(<Input participantFullName="Participant" onSubmit={jest.fn()} />);

    fireEvent.click(screen.getByLabelText(NoteType.message));
    fireEvent.click(screen.getByLabelText(NoteType.phoneCall));

    expect(screen.getByPlaceholderText('Have a call with Participant...')).toBeInTheDocument();
  });

  it('should reset value when form is submitted', () => {
    render(<Input participantFullName="Participant" onSubmit={jest.fn()} />);

    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'description' } });
    fireEvent.click(screen.getByRole('button'));

    expect(screen.getByRole('textbox')).toHaveValue('');
  });

  it('should submit note with correct type', () => {
    const onSubmit = jest.fn();
    render(<Input participantFullName="Participant" onSubmit={onSubmit} />);

    fireEvent.click(screen.getByLabelText(NoteType.beer));

    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'description' } });
    fireEvent.click(screen.getByRole('button'));

    expect(onSubmit).toHaveBeenCalledWith(NoteType.beer, 'description', expect.any(Number));
  });

  it('should focus on input when note type is changed', () => {
    render(<Input participantFullName="Participant" onSubmit={jest.fn()} />);

    fireEvent.click(screen.getByLabelText(NoteType.coffee));

    expect(screen.getByRole('textbox')).toHaveFocus();
  });
});
