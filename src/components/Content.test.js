/**
 * Test-driven development is a software development process relying on software requirements
 * being converted to test cases before software is fully developed, and tracking all software
 * development by repeatedly testing the software against all test cases.
 */

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Content from './Content';

describe('Content Component', () => {
  test('renders "test driven development" as a text', () => {
    // ARRANGE
    render(<Content />);

    // ACT
    // ..nothing in this case

    // ASSERT
    // get functions will throw error if an element is not found.
    // query functions won't do that.
    // find functions will return a promise.

    const TDDElement = screen.getByText('Test Driven Development', {
      exact: false,
    });
    expect(TDDElement).toBeInTheDocument();
  });

  test('renders "Testing is boring" if the button was not clicked', () => {
    // ARRANGE
    render(<Content />);

    // ACT
    // ..nothing in this case

    // ASSERT
    const outputParagraph = screen.getByText('Testing is Boring..', {
      exact: false,
    });
    expect(outputParagraph).toBeInTheDocument();
  });

  test('renders "But It is an important SDLC phase!" if the button is clicked', () => {
    // ARRANGE
    render(<Content />);

    // ACT
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    // ASSERT
    const outputParagraph = screen.getByText(
      'But It is an important SDLC phase!'
    );
    expect(outputParagraph).toBeInTheDocument();
  });

  test('does not renders "Testing is boring" if the button is clicked', () => {
    // ARRANGE
    render(<Content />);

    // ACT
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    // ASSERT
    const outputParagraph = screen.queryByText('Testing is boring..');
    expect(outputParagraph).toBeNull();
  });
});
