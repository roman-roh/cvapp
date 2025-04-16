import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

test('calls onClick when clicked', () => {
  const handleClick = jest.fn();
  const name = 'test-name';
  render(<Button onClick={handleClick} className={'my-custom-class'} name={name}>Click</Button>);
  
  const button = screen.getByText('Click');
  
  fireEvent.click(button);
  
  expect(button).toBeInTheDocument();
  expect(handleClick).toHaveBeenCalledTimes(1);
  expect(handleClick).toHaveBeenCalledWith(name);
  expect(button.className).toContain('my-custom-class');
  expect(screen.getByText('Click')).not.toBeDisabled();  
});
