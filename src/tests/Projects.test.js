import { cleanup, screen, act } from '@testing-library/react';
import { renderWithRouterAndRedux } from './helpers/renderWithRouterAndRedux';
import App from '../App';
import configureStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import repositories from './mocks/repositories';
import fetchFromGitHubApi from '../utils/fetchFromAPI';

jest.mock('../utils/fetchFromAPI', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('Testes para a página principal', () => {
  const mockStore = configureStore();
  const initialState = {
    theme: {
      isDarkThemeOn: true
    },
    repositories,
  }
  const store = mockStore(initialState);
  
  beforeEach(() => {
    fetchFromGitHubApi.mockResolvedValue(repositories);
  });

  afterEach(() => {
    cleanup();
  });

  it('testa a renderização da página principal', async () => {
    const {history} = await renderWithRouterAndRedux(<App />, {}, '/', store);
    
    act(() => {
      history.push('/projects');
    })

    const listOfRepos = screen.getAllByTestId('repo');

    expect(listOfRepos).toBeInTheDocument();

  });
});
