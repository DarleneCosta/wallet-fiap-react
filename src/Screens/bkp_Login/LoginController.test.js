import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginController from './LoginController';

describe('Testing Login', () => {
    test('First Test Login', () => {
        render(<LoginController />);
        const linkElement = screen.getByText(/Sign in to continue/i);
        expect(linkElement).toBeInTheDocument();
    });

    test('Test Validation Form', async () => {
        render(<LoginController />);

        const emailField = screen.getByTestId('email');
        userEvent.type(emailField, "aaaaa");

        const passwordField = screen.getByTestId('password');
        // userEvent.type(passwordField, "");

        const buttonField = screen.getByTestId('button');
        userEvent.click(buttonField);

        await waitFor(() => {
            let info = screen.getByText(/email must be a valid email/i);
            expect(info).toBeInTheDocument();

            info = screen.getByText("Password is required", { exact: false });
            expect(info).toBeInTheDocument();
        })

        userEvent.type(passwordField, "12");
        userEvent.click(buttonField);

        await waitFor(() => {
            let info = screen.getByText(/email must be a valid email/i);
            expect(info).toBeInTheDocument();

            info = screen.getByText("Password is too short", { exact: false });
            expect(info).toBeInTheDocument();
        })
    });

    test('Test Validation Form Email', async () => {
        render(<LoginController />);

        const emailField = screen.getByTestId('email');
        userEvent.type(emailField, "a@a.com");

        const passwordField = screen.getByTestId('password');
        userEvent.type(passwordField, "123456");

        const buttonField = screen.getByTestId('button');
        userEvent.click(buttonField);

        await waitFor(() => {
            let info = screen.queryByText(/email must be a valid email/i);
            expect(info).not.toBeInTheDocument();

            info = screen.queryByText("Password is too short", { exact: false });
            expect(info).not.toBeInTheDocument();

            info = screen.queryByText("a@a.com - 123456", { exact: false });
            expect(info).toBeInTheDocument();
        })
    });

});