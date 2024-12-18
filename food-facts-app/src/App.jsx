import { Route, Routes } from "react-router";

import Homepage from "./pages/Homepage";
import Productpage from "./pages/Productpage";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/product/:id" element={<Productpage />} />
      </Routes>
    </>
  );
}

export default App;
