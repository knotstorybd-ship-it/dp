import { Outlet, useLocation } from "react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ScrollToTop } from "../components/ScrollToTop";

export function RootLayout() {
  const location = useLocation();
  const isWriterPath = location.pathname.startsWith("/writer");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <ScrollToTop />
      {!isWriterPath && <Navbar />}
      <main className="flex-1">
        <Outlet />
      </main>
      {!isWriterPath && <Footer />}
    </div>
  );
}
