import { Route, Routes } from "react-router-dom";
import { HomePage, LoginPage } from "./pages";
import { AppLayout } from "./pages/Layout.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
}

export default App;
