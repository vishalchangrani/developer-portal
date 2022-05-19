import { Meta, Story } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import { InternalSidebar, InternalSidebarProps, TEMP_SIDEBAR_CONFIG } from '.';

export default {
  component: InternalSidebar,
  title: 'Components/InternalSidebar',
} as Meta;

const Template: Story<InternalSidebarProps> = (args) => (
  <MemoryRouter>
    <div style={{ height: 1024 }}>
      <InternalSidebar {...args} />
    </div>
  </MemoryRouter>
);

export const Default = Template.bind({});
Default.args = {
  config: TEMP_SIDEBAR_CONFIG,
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
  config: TEMP_SIDEBAR_CONFIG,
  selectedSectionType: 'port',
};
mobile.parameters = {
  viewport: {
    defaultViewport: 'xs',
  },
};
