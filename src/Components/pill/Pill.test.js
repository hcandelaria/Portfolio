import { render, screen } from '@testing-library/react';
import Pill from '.';

describe('Pill component', () => {
  it('should mount and have text JavaScript', () => {
    render(<Pill tech='JavaScript' />);
    const pillComponent = screen.getByText('JavaScript');
    expect(pillComponent.textContent).toEqual('JavaScript');
  });


});
