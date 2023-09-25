import '@testing-library/jest-dom';
import App from '../App';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('when I load the cat gif generator', () => {
  let initialCatGifUrl = null;

  beforeEach(() => {
    render(<App />);
  });

  it('should render the title', () => {
    const title = screen.getByText(/cat gif generator/i);

    expect(title).toBeInTheDocument();
  });

  it('should render a button', () => {
    const button = screen.getByRole('button', { name: /show me a new cat gif!/i });

    expect(button).toBeInTheDocument();
  });

  it('should render a random cat gif from the api', () => {
    const catGif = screen.getByAltText(/cat gif/i);
    initialCatGifUrl = catGif.src;

    expect(catGif).toBeInTheDocument();
    expect(initialCatGifUrl).toBe("https://cataas.com/cat/gif");
  });

  describe('and I click the button', () => {
    beforeEach(async () => {
      const button = screen.getByRole('button', { name: /show me a new cat gif!/i });

      userEvent.click(button);

      // this is to account for the loading time of the gif when the data has been received
      await act(async () => await new Promise((r) => setTimeout(r, 2000)));
    });

    it('should render a different cat gif from the api', () => {
      const newCatGif = screen.getByAltText(/cat gif/i);
      const newCatGifUrl = newCatGif.src;

      expect(newCatGif).toBeInTheDocument();
      expect(newCatGifUrl).not.toBe(initialCatGifUrl);
    });
  })
});
