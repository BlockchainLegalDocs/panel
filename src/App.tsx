import { BrowserRouter } from 'react-router-dom'
import Layout from './shared/components/Layout'
import Router from './views/Router'

function App () {
  return (
    <BrowserRouter>
      <Layout>
        <Router />
      </Layout>
    </BrowserRouter>
  )
}

export default App
