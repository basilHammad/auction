import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import stl from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={stl.main}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
