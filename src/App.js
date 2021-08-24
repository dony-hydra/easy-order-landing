import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import { ShopProvider } from "./context/ShopContext";

function App() {
  return (
    <ShopProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ShopProvider>
  );
}

export default App;
