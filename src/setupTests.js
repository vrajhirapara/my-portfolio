import '@testing-library/jest-dom/vitest';
import React from 'react';
import { vi } from 'vitest';

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
HTMLCanvasElement.prototype.getContext = vi.fn(() => mockCtx);

window.matchMedia =
  window.matchMedia ||
  vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }));

vi.mock('react-parallax-tilt', () => ({
  default: function MockTilt({ children, className, ...rest }) {
    return React.createElement('div', { className, ...rest }, children);
  },
}));
