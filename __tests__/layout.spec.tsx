import LocaleLayout from '@/app/[locale]/layout';
import {LanguageEnum} from '@/types';
import '@testing-library/jest-dom';
import {RenderResult, act, renderHook} from '@testing-library/react';
import {NextIntlClientProvider} from 'next-intl';
import React from 'react';

const mockMessages = {};

function MyComponent(): JSX.Element {
  return <div data-testid='teste-texto'>Hello, World!</div>;
}

const myElement: React.ReactElement = <MyComponent />;

describe('layout', () => {
  describe('Renderização', () => {
    const locale = LanguageEnum.en_US;

    test('renders without crashing', async () => {
      await act(async () => {
        const {result} = renderHook(() => (
          <NextIntlClientProvider locale={locale} messages={mockMessages}>
            <LocaleLayout params={{locale}}>{myElement}</LocaleLayout>
          </NextIntlClientProvider>
        ));
        expect(result.current).toBeNull();
      });
    });
  });
});
