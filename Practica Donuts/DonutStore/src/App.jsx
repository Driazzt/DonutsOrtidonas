import './App.css'
import HomePage from './pages/HomePage'
import store from './core/redux/store/store'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ContactPage from './pages/ContactPage'
import CreateDonutPage from './pages/CreateDonutPage'
import DonutsDetailPage from './pages/DonutDetailPage'
import ProductListPage from './pages/ProductListPage'

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/productList' element={<ProductListPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/createDonut' element={<CreateDonutPage />} />
          <Route path='/donutsDetails' element={<DonutsDetailPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
