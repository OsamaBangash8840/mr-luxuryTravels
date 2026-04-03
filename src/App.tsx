import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LocaleProvider } from '@/contexts/LocaleContext';
import { Footer, Header } from '@/components/layout';
import { GlobalLoader } from '@/components/common';
import { Home } from '@/pages/Home';
import '@/index.css';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';

function App() {
  return (
    <LocaleProvider >
      <BrowserRouter >
        <GlobalLoader />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </LocaleProvider>
  );
}

export default App;
