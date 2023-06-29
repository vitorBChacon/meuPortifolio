import { screen } from '@testing-library/react';
import { renderWithRouterAndRedux } from './helpers/renderWithRouterAndRedux';
import App from '../App';

describe('Testes para a página principal', () => {
  it('renderiza a página principal', async () => {
    renderWithRouterAndRedux(<App />);
    const head1 = await screen.findByText('Vitor Breno Chacon e Silva');

    expect(head1).toBeInTheDocument();
  });
});

