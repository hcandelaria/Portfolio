import { render, screen } from '@testing-library/react';
import IconLink from '.';

describe('IconLink component', () => {
  it('should render a link with icon', () => {
    render(<IconLink link={"www.hcandelaria.com"} icon={"logo-github"} />)
    const iconLinkEl = screen.getByRole("link")
    expect(iconLinkEl).toBeInTheDocument()
  })

});
