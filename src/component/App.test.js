import { render, screen } from '@testing-library/react';
import App from './App';

test('test children', () => {
    render(<Children />);
  
    const headElement = screen.getByRole('button');
  
    expect(headElement).toBeInTheDocument();//3
  
    expect(headElement).toHaveClass('header');//2
    screen.debug();
  
    expect(screen.getByText('CHILDREN')).toBeInTheDocument();//1
  });
