import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import routes from "tempo-routes";
import ProductsPage from "./components/ProductsPage";
import LoginPage from "./components/LoginPage"; 
import OurStory from "./components/OurStory";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AuthProvider } from "./components/AuthContext"; 
import NewsletterSubscription from "./components/NewsLetterSubscription";
import CookieBanner from "./components/CoockieBanner";

function App() {
  return (
    <AuthProvider> {/* 👉 Avvolgi tutto nel provider */}
      <Suspense fallback={<p>Loading...</p>}>
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
          {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}



          {/* Newsletter Subscription aggiunta qui e tolta dalla fine di Home.tsx*/}
            <section className="py-20 bg-[#F9F9F9]">
              <div className="max-w-7xl mx-auto px-6">
                <NewsletterSubscription />
              </div>
            </section>



          <Footer />
          <CookieBanner />
        </>
      </Suspense>
    </AuthProvider>
  );
}

export default App;