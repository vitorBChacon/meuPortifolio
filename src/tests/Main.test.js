import { screen } from '@testing-library/react';
import { renderWithRouterAndRedux } from './helpers/renderWithRouterAndRedux';
import App from '../App';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect'

describe('Testes para a página principal', () => {
  it('testa a renderização da página principal', async () => {
    const {history} = renderWithRouterAndRedux(<App />, {}, '/');
    
    const mainElement = screen.getByTestId('main');

    expect(history.location.pathname).toBe('/');
    expect(mainElement).toBeInTheDocument();
    expect(mainElement.className).toMatch('dark');
  });
  it('testa a funcionalidade do botão do modo noturno', async () => {
    renderWithRouterAndRedux(<App />, {}, '/');
    
    const mainElement = screen.getByTestId('main');
    const darkModeButton = screen.getByTestId('dark-mode');

    userEvent.click(darkModeButton);

    expect(mainElement.className).toMatch('light');
  })
});
