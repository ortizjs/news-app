import { render, screen, logRoles, act } from '@testing-library/react';
import App from './App';

describe("App", () => {
  test('renders the component correctly', () => {
    render(<App />);
    const headingElement = screen.getByRole('heading', {  name: /News App/i})
    expect(headingElement).toBeInTheDocument();
  });

  test('renders the text Loading... upon initial render while fetching articles', () => {
    render(<App />);
    const noArticlesHeadingElement = screen.getByRole('heading', {  name: /Loading.../i})
    expect(noArticlesHeadingElement).toBeInTheDocument();
  })
});
