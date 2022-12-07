import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./header";
// import Header from "./ReactHeader";
import Footer from "./footer";

function Layout({ children }) {
  return (
    <div className="main">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
