import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe("Verifica se os elementos estão na tela", () => {
  it("Verica se possui um input do tipo 'email' renderizado na tela", () => {
    render(<App />);
    const inputEmail = screen.getByLabelText(/email/i);
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail).toHaveProperty('type', 'email');
  });
  
  it("Verifica se o botão enviar esta renderizado na tela", () => {
    render(<App />);
    const sendButton = screen.getByTestId('sendButton');
    expect(sendButton).toBeInTheDocument();
    expect(sendButton).toHaveProperty('type', 'button');
    expect(sendButton).toHaveValue('Enviar');
  });
  
  it("Verifica se possui dois botões renderizados na tela", () => {
    render(<App />);
    const button = screen.getAllByRole('button');
    expect(button).toHaveLength(2);
  });
});

describe("Verifica se os elementos tem o comportamento esperado", () => {
  it("Verifica se ao digitar o email e clicar em enviar é renderizado na tela 'Valor: `valor digitado`'", () =>{
    render(<App />)
    const EMAIL_USER = 'test@test.com';

    const textEmail = screen.getByTestId('id-email-user');
    expect(textEmail).toBeInTheDocument();
    expect(textEmail).toHaveTextContent('Valor:');

    const sendButton = screen.getByTestId('sendButton');
    const inputEmail = screen.getByLabelText(/email/i);
    userEvent.type(inputEmail, EMAIL_USER);
    userEvent.click(sendButton);

    expect(inputEmail).toHaveValue('');
    expect(textEmail).toHaveTextContent(`Valor: ${ EMAIL_USER }`);
  });
})

