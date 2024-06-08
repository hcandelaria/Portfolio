import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import DesktopNavMenu from '.';

describe('DesktopNavMenu component', () => {
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

  it('should mount', () => {
    const links = [
      { to: '/', name: 'Home', icon: 'home-outline' },
      { to: '/about', name: 'About', icon: 'book-outline' },
      { to: '/projects', name: 'Projects', icon: 'briefcase-outline' },
    ]
    render(<DesktopNavMenu links={links} />, { wrapper: BrowserRouter });
    const desktopNavMenuComponent = screen.getByTestId('desktop-nav-container')
    expect(desktopNavMenuComponent).toBeInTheDocument()


  });

  it('should have nav links', async () => {
    const links = [
      { to: '/', name: 'Home', icon: 'home-outline' },
      { to: '/about', name: 'About', icon: 'book-outline' },
      { to: '/projects', name: 'Projects', icon: 'briefcase-outline' },
    ]
    render(<DesktopNavMenu links={links} />, { wrapper: BrowserRouter });
    const desktopNavMenuComponent = screen.getByTestId('desktop-nav-container')
    expect(desktopNavMenuComponent).toBeInTheDocument()

    const navigationLinkList = screen.getAllByRole('link')
    // includes footer links
    expect(navigationLinkList.length).toBe(7)
  });

})