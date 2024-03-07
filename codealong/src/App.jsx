import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import EditorPage from "./pages/EditorPage.jsx";
import toast, { Toaster } from "react-hot-toast";
import "./App.css";
import Landing from "./pages/Landing.jsx";
import { RecoilRoot } from "recoil";
function App() {
  return (
    <>
      <div>
        <Toaster
          position="top-center"
          toastOptions={{
            success: {
              theme: {
                primary: "#4aed88",
              },
            },
          }}
        ></Toaster>
      </div>
      <BrowserRouter>
        <RecoilRoot>
          <Routes>
            <Route exact path="/" element={<Landing />}></Route>
            {/* Home Page */}
            <Route exact path="/join-room" element={<Home />}></Route>

            {/* Editor Page */}
            <Route
              exact
              path="/editor/:roomID"
              element={<EditorPage />}
            ></Route>
          </Routes>
        </RecoilRoot>
      </BrowserRouter>
    </>
  );
}

export default App;
