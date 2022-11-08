import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  {Modal}  from '../components/Modal';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Modal',
  component: Modal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  // primary: true,
  titleModal: 'George',
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   titleModal: 'siempre siempre',
// };

// export const Large = Template.bind({});
// Large.args = {
//   // size: 'large',
//   titleModal: 'alalalalal',
// };

// export const Small = Template.bind({});
// Small.args = {
//   // size: 'small',
//   titleModal: 'adasdasdadasd',
// };
