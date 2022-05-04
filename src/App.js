import { BrowserRouter as Router, Routes, Route, Link
} from "react-router-dom";

import Home from "./route/Home.js"
import Header from "./layouts/Header"
import Topbar from "./layouts/Topbar"
import Footer from "./layouts/Footer"

function App() {
  return (
    <Router>
      <Topbar />
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
