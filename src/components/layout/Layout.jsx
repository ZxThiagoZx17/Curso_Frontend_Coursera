import Header from "../header/Header";
import Footer from "../footer/Footer";

const Layout = ({ children }) => {
  const navLinks = [
    {
      name: "Home",
      path: "/#home",
      hashLink: true,
    },
    {
      name: "Menu",
      path: "/orderOnline",
      hashLink: true,
    },
    {
      name: "Reservations",
      path: "/reservations",
      hashLink: false,
    },
    {
      name: "Login",
      path: "/login",
      hashLink: false,
    },
    {
      name: "About",
      path: "/#about",
      hashLink: true,
    },
  ];

  return (
    <>
      <Header navLinks={navLinks} />
      <main id="home">{children}</main>
      <Footer navLinks={navLinks} />
    </>
  );
};

export default Layout;
