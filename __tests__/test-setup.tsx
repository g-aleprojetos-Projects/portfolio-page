import React from 'react';
import {NextIntlProvider} from 'next-intl';
import {render} from '@testing-library/react';
import {LanguageEnum} from '@/types';
import enUSMessages from '../src/messages/en-US.json';
import frFRMessages from '../src/messages/fr-FR.json';
import ptBRMessages from '../src/messages/pt-BR.json';

const messages = {
  [LanguageEnum.en_US]: enUSMessages,
  [LanguageEnum.fr_FR]: frFRMessages,
  [LanguageEnum.pt_BR]: ptBRMessages,
};

const selectMessages = (locale: LanguageEnum) => {
  return messages[locale];
};

const customRender = (
  ui: React.ReactElement,
  locale: LanguageEnum = LanguageEnum.en_US,
) => {
  return render(
    <NextIntlProvider messages={selectMessages(locale)} locale={locale}>
      {ui}
    </NextIntlProvider>,
  );
};

export * from '@testing-library/react';
export {customRender};
