// Clock.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { Clock } from './Clock';

const meta: Meta<typeof Clock> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Clock',
  component: Clock,
};

export default meta;
type Story = StoryObj<typeof Clock>;

export const Primary: Story = {
  render: () => <Clock />,
};