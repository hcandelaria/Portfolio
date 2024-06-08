import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import NavigationMenu from '.';


describe('NavigationMenu component', () => {

  beforeEach(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });

  })

  it('should mount navigation', () => {
    render(<NavigationMenu />, { wrapper: BrowserRouter });
    const navigationComponent = screen.getByTestId('desktop-nav-container')
    expect(navigationComponent).toBeInTheDocument()
  });

  it('should have nav links', async () => {
    render(<NavigationMenu />, { wrapper: BrowserRouter });
    const user = userEvent.setup()

    await user.click(screen.getByRole('button'))
    // includes desktop mobile and footer links
    const navigationLinkList = screen.getAllByRole('link')
    expect(navigationLinkList.length).toBe(14)
  });


});
