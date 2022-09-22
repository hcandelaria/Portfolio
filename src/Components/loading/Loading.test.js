import { render, screen } from '@testing-library/react';
import Loading from '.';

describe('Loading component', () => {
  it('should render a loading status', () => {
    render(<Loading />)
    const loadingEl = screen.getByRole("status")
    expect(loadingEl).toBeInTheDocument()
  })

});
