import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import PageNotFound from './components/404/404'
import GalleryProvider from './components/contexts/GalleryContext'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Gallery from './components/Main/Gallery/Gallery'
import PostDetail from './components/Main/Gallery/Post/PostDetail/PostDetail'
import Main from './components/Main/Main'

function App() {
  return (
    <GalleryProvider>
      <BrowserRouter>
        <div className="container py-3">
          <Header />
          <hr />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/gallery/:id" element={<PostDetail />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </GalleryProvider>
  )
}

export default App
