import { Meta, Story } from '@storybook/react';
import { InternalSidebarMenu, InternalSidebarMenuProps } from '.';

export default {
  component: InternalSidebarMenu,
  title: 'Components/InternalSidebarMenu',
} as Meta;

const Template: Story<InternalSidebarMenuProps> = (args) => {
  return <InternalSidebarMenu {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  selectedSectionType: 'fcl',
};

export const dark = Template.bind({});
dark.args = Default.args;
dark.parameters = {
  themes: {
    default: 'dark',
  },
};

export const mobile = Template.bind({});
mobile.args = {
  selectedSectionType: 'port',
};
mobile.parameters = {
  viewport: {
    defaultViewport: 'xs',
  },
};
