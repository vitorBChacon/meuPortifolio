import { cleanup, screen, act } from '@testing-library/react';
import { renderWithRouterAndRedux } from './helpers/renderWithRouterAndRedux';
import App from '../App';
import configureStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect'

describe('Testes para a página principal', () => {
  afterEach(() => {
    cleanup();
  });
  it('testa a renderização da página principal', async () => {
    const {history} = await renderWithRouterAndRedux(<App />, {}, '/');
    
    act(() => {
      history.push('/projects');
    })

  });
});
