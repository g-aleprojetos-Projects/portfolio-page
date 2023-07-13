import RootLayout, {metadata} from '../src/app/layout';
import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

describe('layout', () => {
  describe('Renderização', () => {
    test('Deve renderizar o componente Layout corretamente', () => {
      const {container} = render(<RootLayout>Hello World</RootLayout>);

      expect(container.querySelector('html')).toBeInTheDocument();
      expect(container.querySelector('body')).toBeInTheDocument();
      expect(
        container.querySelector('body')?.classList.contains('className'),
      ).toBe(true);
    });
  });
});
