import { cleanup, screen } from '@testing-library/react';
import { renderWithRouterAndRedux } from './helpers/renderWithRouterAndRedux';
import App from '../App';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect'

describe('Testes para a página principal', () => {
  afterEach(() => {
    cleanup();
  })
  it('testa a renderização da página principal', async () => {
    const {history} = await renderWithRouterAndRedux(<App />, {}, '/');
    
    const mainElement = await screen.getByTestId('main');

    expect(history.location.pathname).toBe('/');
    expect(mainElement).toBeInTheDocument();
    expect(mainElement.className).toMatch('dark');
  });
  it('testa a funcionalidade do botão do modo noturno', async () => {
    await renderWithRouterAndRedux(<App />, {}, '/');
    
    const mainElement = await screen.getByTestId('main');
    const darkModeButton = await screen.getByTestId('dark-mode');

    userEvent.click(darkModeButton);

    expect(mainElement.className).toMatch('light');
  })
});
