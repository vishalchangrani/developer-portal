import { Meta, Story } from "@storybook/react"
import { ToolCard, ToolCardProps } from "."

export default {
  component: ToolCard,
  title: "Components/ToolCard",
} as Meta

const Template: Story<ToolCardProps> = (args) => {
  return (
    <div className="bg-gray-100 p-4 dark:bg-black">
      <ToolCard {...args} />
    </div>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  authorIcon: "https://avatars.githubusercontent.com/u/62387156?s=64&v=4",
  authorName: "mini flow",
  description:
    "Lorem ipsum text here can go a two liner sentence or a one liner",
  link: "#",
  stars: 52,
  tags: ["Tags"],
  title: "Flow Port",
}

export const Minimal = Template.bind({})
Minimal.args = {
  link: "#",
  title: "Flow Port",
}
