import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Home } from "@/pages/Home";
import { Services } from "@/pages/Services";
import { About } from "@/pages/About";
import { Gallery } from "@/pages/Gallery";
import { Contact } from "@/pages/Contact";
import { Book } from "@/pages/Book";
import { ThemeProvider } from "@/components/theme-provider";
import "./index.css";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <SiteHeader />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book" element={<Book />} />
          </Routes>
          <SiteFooter />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
