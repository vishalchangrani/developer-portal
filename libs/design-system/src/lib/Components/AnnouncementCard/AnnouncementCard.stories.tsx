import { Meta, Story } from '@storybook/react';
import AnnouncementCard, { AnnouncementCardProps } from '.';
import { endOfDay } from 'date-fns';

export default {
  component: AnnouncementCard,
  title: 'Components/AnnouncementCard',
} as Meta;

const Template: Story<AnnouncementCardProps> = (args) => {
  return (
    <AnnouncementCard {...args} />
  );
};

export const Primary = Template.bind({});
Primary.args = {
  sourceIcon: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
  sourceAltText: 'Github',
  heading: 'Breaking Change: Bugfix for Cadence Resource Owner Field',
  timestamp: endOfDay(new Date()),
  link: 'https://google.com'
};
