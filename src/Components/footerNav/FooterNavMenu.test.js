import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FooterNav from '.';

describe('FooterNav component', () => {
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

    render(<FooterNav />, { wrapper: BrowserRouter });
    const desktopNavMenuComponent = screen.getByTestId('nav-footer')
    expect(desktopNavMenuComponent).toBeInTheDocument()


  });

  it('should mount footer', async () => {
    const links = [
      { to: '/', name: 'Home', icon: 'home-outline' },
      { to: '/about', name: 'About', icon: 'book-outline' },
      { to: '/projects', name: 'Projects', icon: 'briefcase-outline' },
    ]
    render(<FooterNav links={links} />, { wrapper: BrowserRouter });
    const desktopNavMenuComponent = screen.getByTestId('nav-footer')
    expect(desktopNavMenuComponent).toBeInTheDocument()

    const navigationLinkList = screen.getAllByRole('link')

    expect(navigationLinkList.length).toBe(4)
  });

})