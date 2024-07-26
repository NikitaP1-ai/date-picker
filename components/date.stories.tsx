//import { fn } from '@storybook/test';
import DatePicker from './date';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  component: DatePicker,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    labelText: 'Add date',
  },
};
