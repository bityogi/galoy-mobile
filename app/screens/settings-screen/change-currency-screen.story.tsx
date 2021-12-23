import { withKnobs } from "@storybook/addon-knobs"
import { storiesOf } from "@storybook/react-native"
import * as React from "react"
import { StoryScreen } from "../../../storybook/views"
import { ChangeCurrencyScreen } from "./change-currency-screen"

declare let module

storiesOf("Set username", module)
  .addDecorator(withKnobs)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Default", () => <ChangeCurrencyScreen />)
