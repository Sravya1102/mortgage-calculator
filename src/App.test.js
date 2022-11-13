import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

const testData = {
  amount: '110000',
  interest: '5',
}

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Mortgage Calculator/i);
  expect(linkElement).toBeInTheDocument();
});


test('fill form and calculate', () => {
  render(<App />);
  const amount = screen.getByTestId("mort-amount");
  fireEvent.change(amount, { target: { value: testData.amount } })
  expect(amount.value).toBe(testData.amount);

  const interest = screen.getByTestId("interest-rate");
  fireEvent.change(interest, { 'target': { 'value': testData.interest } });
  expect(interest.value).toBe(testData.interest);

  const calculate = screen.getByText('Calculate');
  fireEvent.click(calculate);

});
