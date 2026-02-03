import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./components/common/ScrollToTop";
import FloatingActions from "./components/common/FloatingActions";

export default function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />

      <main className="pt-16">
        <AppRoutes />
      </main>

      <Footer />

      {/* Floating WhatsApp & Call */}
      <FloatingActions />
    </>
  );
}
