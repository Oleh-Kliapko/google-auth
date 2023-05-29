import { Route, Routes } from "react-router-dom";

import RegistrationForm from "./pages/RegistrationForm";
import RedirectPage from "./pages/RedirectPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RegistrationForm />} />
      <Route path="/api/users/google/callback" element={<RedirectPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
