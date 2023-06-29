import { screen } from '@testing-library/react';
import { renderWithRouterAndRedux } from './helpers/renderWithRouterAndRedux';
import App from '../App';

describe('Testes para a página principal', () => {
  it('renderiza a página principal', async () => {
    const {history} = renderWithRouterAndRedux(<App />, {}, '/');
    console.log(history)

    expect(history.location.pathname).toBe('/');
  });
});

