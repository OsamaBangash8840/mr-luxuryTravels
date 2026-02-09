import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LocaleProvider } from '@/contexts/LocaleContext';
import { Header } from '@/components/layout';
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import '@/index.css';

function App() {
  return (
    <LocaleProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </LocaleProvider>
  );
}

export default App;
