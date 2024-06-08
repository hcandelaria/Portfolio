import { render, screen } from '@testing-library/react';
import Thumbnail from '.';

describe('Thumbnail image component', () => {
  it('should mount element img', () => {
    render(<Thumbnail />);
    const imageComponent = screen.getByRole('img');
    expect(imageComponent).toBeInTheDocument();
  });
  it('should have attribute src', () => {
    render(<Thumbnail />);
    const imageComponent = screen.getByRole('img');
    expect(imageComponent).toHaveAttribute('src');
  });
});
