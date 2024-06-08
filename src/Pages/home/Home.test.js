import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Home from '.';

describe('Home page', () => {
  it('should mount', () => {
    render(<Home />);
    const homePage = screen.getByTestId('homePage');
    expect(homePage).toBeInTheDocument();
  });

  it('should render welcome text', () => {
    render(<Home />);
    const welcomeComponent = screen.getByText(/welcome/i);
    expect(welcomeComponent).toBeInTheDocument();
  });

  it('should render correctly', () => {
    const tree = renderer.create(<Home />).toJSON()
    expect(tree).toMatchSnapshot();
  })

});
