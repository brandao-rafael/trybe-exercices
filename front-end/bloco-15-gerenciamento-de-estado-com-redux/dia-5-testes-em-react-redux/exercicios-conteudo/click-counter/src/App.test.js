import React from 'react';
import { Provider } from 'react-redux';
import { render, cleanup, screen } from '@testing-library/react';
import App from './App';

import { createStore, combineReducers } from 'redux';
import clickReducer from './reducers';
import userEvent from '@testing-library/user-event';

const renderWithRedux = (
  component,
  {
    initialState,
    store = createStore(combineReducers({ clickReducer }), initialState),
  } = {},
) => ({
  ...render(<Provider store={ store }>{component}</Provider>),
  store,
});

describe('testing clicks', () => {
  beforeEach(cleanup);
  
  test('the page should have a button and a text 0', () => {
    renderWithRedux(<App />);
    const buttonAdd = screen.queryByText('Clique aqui');

    expect(buttonAdd).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  test('a click in button should increment the value of clicks', () => {
    renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 } } });

    expect(screen.getByText('5')).toBeInTheDocument();
  });

  test('a click in button should increment the value', () => {
    renderWithRedux(<App />);
    
    const buttonAdd = screen.getByRole('button', { name: /clique aqui/i});
    const valueZero = screen.getByText('0')
    expect(buttonAdd).toBeInTheDocument();
    expect(valueZero).toBeInTheDocument();
    
    userEvent.click(buttonAdd);
    
    const valueOne = screen.getByText('1');
    expect(valueOne).toBeInTheDocument();
  });

  test('with another initial value, click in button should increment the counter', () => {
    renderWithRedux(<App />, { initialState: { clickReducer: { counter: 10 } } });

    const buttonAdd = screen.getByRole('button', { name: /clique aqui/i });
    const valueTen = screen.getByText('10');
    expect(buttonAdd).toBeInTheDocument();
    expect(valueTen).toBeInTheDocument();

    userEvent.click(buttonAdd);

    const valueEleven = screen.getByText('11');
    expect(valueEleven).toBeInTheDocument();
  });
});

