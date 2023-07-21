import React from 'react';
import {customRender, screen} from './test-setup';

import Home from '@/app/[locale]/page';
import '@testing-library/jest-dom';
import {LanguageEnum} from '@/types';

describe('Home', () => {
  describe('Renderização', () => {
    test('Home DEVE ser igual ao snapshot', () => {
      const {container} = customRender(<Home />);
      expect(container).toMatchSnapshot();
    });

    test('DEVE renderizar a pagina "Home"', () => {
      customRender(<Home />);

      expect(screen.getByTestId('teste_home')).toBeInTheDocument();
    });

    test('DEVE renderizar o texto em Inglês "Hello world!"', () => {
      customRender(<Home />);

      expect(screen.getByText(/Hello world!/i)).toBeInTheDocument();
    });

    test('DEVE renderizar o texto em Francês "Bonjour le Monde!"', () => {
      customRender(<Home />, LanguageEnum.fr_FR);

      expect(screen.getByText(/Bonjour le Monde!/i)).toBeInTheDocument();
    });

    test('DEVE renderizar o texto em Português "Olá Mundo!"', () => {
      customRender(<Home />, LanguageEnum.pt_BR);

      expect(screen.getByText(/Olá Mundo!/i)).toBeInTheDocument();
    });
  });
});
