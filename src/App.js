import "swiper/swiper.min.css";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./App.scss";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route } from "react-router-dom";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { RouterConfig as Routes } from "./config/routes";

function App() {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <>
            <Header {...props} />
            <Routes />
            <Footer />
          </>
        )}
      />
    </BrowserRouter>
  );
}

export default App;
