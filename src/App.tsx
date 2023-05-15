import { ThemeProvider } from "styled-components"
import { Button } from "./components/Button"
import { defaultTheme } from "./styles/themes/default"

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button background-color="primary" />
      <Button background-color="secondary" />
      <Button background-color="sucess" />
      <Button background-color="danger" />
      <Button />
    </ThemeProvider>
  )
}

