import type { Meta, StoryObj } from '@storybook/react';

import { ExitButton } from './Logout';

const meta: Meta<typeof ExitButton> = {
  component: ExitButton,
};

export default meta;
type Story = StoryObj<typeof ExitButton>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  render: () => <ExitButton />,
};
