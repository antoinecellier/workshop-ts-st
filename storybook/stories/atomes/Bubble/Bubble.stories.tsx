import React from 'react';

import {storiesOf} from '@storybook/react-native';
import {select, text} from '@storybook/addon-knobs';

import Bubble, {BubbleType} from '../../../../components/Bubble';
import CenterView from '../../layout/CenterView';

const message = "C'est pas faux";

type bubbleTypeSelect = {
  label: string;
  options: Record<string, BubbleType>;
};

const bubbleTypeSelect: bubbleTypeSelect = {
  label: 'Type',
  options: {
    primary: 'primary',
    secondary: 'secondary',
  },
};

const getBubbleTypeSelect = (value: BubbleType) =>
  select(bubbleTypeSelect.label, bubbleTypeSelect.options, value);

storiesOf('Atomes / Bubble', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Primary', () => (
    <Bubble
      content={text('Content', message)}
      type={getBubbleTypeSelect(bubbleTypeSelect.options.primary)}
    />
  ))
  .add('Secondary', () => (
    <Bubble
      content={text('Content', message)}
      type={getBubbleTypeSelect(bubbleTypeSelect.options.secondary)}
    />
  ))
  .add('On several lines', () => {
    const longText =
      "Vous savez, moi je ne crois pas qu'il y ait de bonne ou de mauvaise situation. Moi, si je devais résumer ma vie aujourd'hui avec vous, je dirais que c'est d'abord des rencontres. Des gens qui m'ont tendu la main, peut-être à un moment où je ne pouvais pas, où j'étais seul chez moi.";
    return (
      <Bubble
        content={text('Content', longText)}
        type={getBubbleTypeSelect(bubbleTypeSelect.options.secondary)}
      />
    );
  });
