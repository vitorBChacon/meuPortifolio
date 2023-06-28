import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import { screen } from '@testing-library/react';
import App from '../App';

describe('Testes para a página principal', () => { 
  renderWithRouterAndRedux(<App />)
  const head1 = screen.getByText('Vitor Breno Chacon e Silva')
  expect(head1).toBeInTheDocument()
})
