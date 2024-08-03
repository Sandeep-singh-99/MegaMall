import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


function App() {
  const location = useLocation();

  const adminRoutes = ["/admin-panel", "/admin-login"];

  const isAdminRoutes = () => {
    return adminRoutes.some(route => location.pathname.startsWith(route));
  }
  return (
    <>
      {!isAdminRoutes() && <Navbar />}
      <Outlet />
      {!isAdminRoutes() && <Footer />}
    </>
  );
}

export default App;
