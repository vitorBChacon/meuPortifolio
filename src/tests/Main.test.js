import { cleanup, screen } from '@testing-library/react';
import { renderWithRouterAndRedux } from './helpers/renderWithRouterAndRedux';
import App from '../App';
import configureStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

describe('Testes para a página principal', () => {
  const mockStore = configureStore();
  const initialState = {
    theme: {
      isDarkThemeOn: true,
    },
  };
  const store = mockStore(initialState);
  
  afterEach(() => {
    cleanup();
  });
  
  it('testa a renderização da página principal', async () => {
    const { history } = await renderWithRouterAndRedux(<App />, {}, '/', store);
    
    const mainElement = await screen.getByTestId('main');

    expect(history.location.pathname).toBe('/');
    expect(mainElement).toBeInTheDocument();
    console.log(mainElement.className)
    expect(mainElement.className).toMatch('dark');
  });
  it('testa a funcionalidade do botão do modo noturno', async () => {
    await renderWithRouterAndRedux(<App />, { store }, '/');
    
    const mainElement = await screen.getByTestId('main');
    const darkModeButton = await screen.getByTestId('dark-mode');

    userEvent.click(darkModeButton);
    console.log(mainElement.className)

    expect(mainElement.className).toMatch('light');
  });
});
