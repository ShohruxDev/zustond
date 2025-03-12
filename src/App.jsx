import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Asosiypage from "./Pages/AsosiyPage";
import NewsProvider from "./context/newsadd";
import Maxsulotlarpage from "./Pages/Maxsulotlarpage";
import Korzinkapage from "./Pages/Korzinkapage";
import Addpage from "./Pages/Addpage";
import "./App.css";

function App() {
  return (
    <NewsProvider> 
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>  
            <Route index element={<Asosiypage />} />
            <Route path="korzinkapage" element={<Korzinkapage />} />
            <Route path="maxsulotlarpage" element={<Maxsulotlarpage />} />
            <Route path="addpage" element={<Addpage />} />
          </Route>
        </Routes>
      </Router>
    </NewsProvider>
  );
}

export default App;

