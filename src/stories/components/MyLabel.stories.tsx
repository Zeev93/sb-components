import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel";

export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes: {
        color: { control: 'select' },
        size: { control: 'select' },
        fontColor: { control: 'color' }
    }
} as ComponentMeta <typeof MyLabel>

const Template: ComponentStory<typeof MyLabel> = ( args ) => <MyLabel {...args} />

export const Basic = Template.bind({})
Basic.args = {
    label: "Basic",
    size: 'normal',
    allCaps: false
}
export const AllCaps = Template.bind({})
AllCaps.args = {
    size: 'normal',
    allCaps: true
}

export const Secondary = Template.bind({})
Secondary.args = {
    size: 'normal',
    color: 'secondary'
}

export const Tertiary = Template.bind({})
Tertiary.args = {
    size: 'normal',
    color: 'tertiary'
}

export const CustomFontColor = Template.bind({})
CustomFontColor.args = {
    fontColor: '#4c5ce9',
    size: 'h1'
}

export const CustomBackgroundColor = Template.bind({})
CustomBackgroundColor.args = {
    fontColor: '#fff',
    backgroundColor: '#000',
    size: 'h1'
}