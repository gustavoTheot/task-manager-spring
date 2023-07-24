import { ThemeProvider } from 'styled-components'
import { Router } from './Routes'
import { BrowserRouter } from 'react-router-dom'
import { defaultTheme } from './styles/themes/default'
import { AppContainer } from './AppStyle'
import { GlobalStyles } from './styles/global'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppContainer>
        <GlobalStyles />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </AppContainer>
    </ThemeProvider>
  )
}

export default App
