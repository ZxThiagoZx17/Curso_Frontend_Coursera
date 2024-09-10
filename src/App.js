import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home/Home";
import Reservations from "./pages/Reservations/Reservations";
import ConfirmedReservation from "./pages/Reservations/components/confirmedReservation";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/Login/Login"
import OrderOnline from "./pages/Order/OrderOnline";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route
            path="/orderOnline"
            element={<OrderOnline />}
          />
          <Route
            path="/confirmedReservation"
            element={<ConfirmedReservation />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;