import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from './Input';

describe('TEST INPUT', () => {
  test("reset-btn cleares the input", () => {
    const changeHandler = jest.fn();
  
    render(<Input inputValue="microsoftttttt" changeHeandler={changeHandler} placeholder="Test Placeholder" />);

    const btn = screen.getByTestId('input-reset-btn');

    userEvent.click(btn);
    expect(screen.queryByText('microsoftttttt')).toBeNull();
  });

});