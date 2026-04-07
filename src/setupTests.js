// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import React from 'react';

const mockCtx = {
  createRadialGradient: () => ({ addColorStop: () => {} }),
  clearRect: () => {},
  fillStyle: '',
  fillRect: () => {},
  beginPath: () => {},
  arc: () => {},
  fill: () => {},
};
// jsdom has no canvas 2d context
// eslint-disable-next-line no-undef
HTMLCanvasElement.prototype.getContext = jest.fn(() => mockCtx);

window.matchMedia =
  window.matchMedia ||
  jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  }));

jest.mock('react-tilt', () => ({
  Tilt: function MockTilt({ children, className, options: _o, ...rest }) {
    return (
      <div className={className} {...rest}>
        {children}
      </div>
    );
  },
}));

