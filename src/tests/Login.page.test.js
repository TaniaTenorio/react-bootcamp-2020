/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
// import { MemoryRouter } from 'react-router-dom';
import LoginPage from '../pages/Login';

describe('Login page', () => {
  it('renders welcome text', () => {
    render(<LoginPage />);
    expect(screen.getByText('Welcome back!')).toBeTruthy();
  });

  it('renders username input', () => {
    render(<LoginPage />);
    expect(screen.queryByLabelText('username')).toBeTruthy();
    expect(screen.queryByRole('textbox', { name: 'username' })).toBeTruthy();
  });

  it('renders password input', () => {
    render(<LoginPage />);
    expect(screen.queryByLabelText('password')).toBeTruthy();
  });

  it('updates values for username input', () => {
    render(<LoginPage />);
    const usernameInput = screen.getByRole('textbox', { name: 'username' });
    fireEvent.change(usernameInput, { target: { value: 'Tania' } });
    expect(screen.getByDisplayValue('Tania')).toBeTruthy();
  });

  // it('triggers the login button', () => {
  //   const authenticate = jest.fn();
  //   render(<LoginPage />, { wrapper: MemoryRouter });
  //   const loginButton = screen.getByText('login');
  //   fireEvent.click(loginButton);
  //   expect(authenticate).toHaveBeenCalledTimes(1);
  // });
});
