import { BrowserRouter } from 'react-router-dom'
import Layout from './shared/components/Layout'
import EthereumProvider from './shared/services/ethereum/EthereumProvider'
import Router from './views/Router'

function App () {
  return (
    <BrowserRouter>
      <EthereumProvider>
        <Layout>
          <Router />
        </Layout>
      </EthereumProvider>
    </BrowserRouter>
  )
}

export default App
