import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CssVarsProvider } from '@mui/joy/styles'
import { kukunTheme } from '@/theme/kukunTheme'
import { Layout } from '@/components/Layout'
import './index.css'
import 'react-datepicker/dist/react-datepicker.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CssVarsProvider theme={kukunTheme}>
      <Layout>
        <App />
      </Layout>
    </CssVarsProvider>
  </StrictMode>,
)
