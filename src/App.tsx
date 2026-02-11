import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LocaleProvider } from '@/contexts/LocaleContext';
import { Footer, Header } from '@/components/layout';
import { Home } from '@/pages/Home';
import '@/index.css';
import { About } from './pages/About';
import { Services } from './pages/Services';

function App() {
  return (
    <LocaleProvider >
      <BrowserRouter >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </LocaleProvider>
  );
}

export default App;
