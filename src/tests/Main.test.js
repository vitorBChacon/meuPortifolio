import { screen } from '@testing-library/react';
import { renderWithRouterAndRedux } from './helpers/renderWithRouterAndRedux';
import App from '../App';
import '@testing-library/jest-dom/extend-expect'

describe('Testes para a página principal', () => {
  it('renderiza a página principal', async () => {
    const {history} = renderWithRouterAndRedux(<App />, {}, '/');
    
    const mainElement = screen.getByTestId('main');

    expect(history.location.pathname).toBe('/');
    expect(mainElement).toBeInTheDocument();
    expect(mainElement.className).toMatch('dark');
  });
});
