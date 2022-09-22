import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import About from '.';

describe('About page', () => {
  it('should mount', () => {
    render(<About />);
    const aboutPage = screen.getByTestId('about-page');
    expect(aboutPage).toBeInTheDocument();
  });
  it('should render correctly', () => {
    const tree = renderer.create(<About />).toJSON()
    expect(tree).toMatchSnapshot();
  })
});
