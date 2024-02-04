import { Routes, Route, useLocation } from "react-router-dom";
import { HomePage } from "../../pages/home/home";
import { LogInPage } from "../../pages/login/login";
import { SignUpPage } from "../../pages/signup/signup";
import { Layout } from "../layout/layout";
import { ProtectedRoute } from "../protected-route/protected-route";

export const App = () => {
  const location = useLocation();
  return (
    <Routes location={location}>
      <Route path="/" element={<Layout />}>
        <Route index element={<ProtectedRoute children={<HomePage />} anonymous={false} />} />
        <Route
          path="login"
          element={<ProtectedRoute children={<LogInPage />} anonymous={true} />}
        />
        <Route
          path="signup"
          element={<ProtectedRoute children={<SignUpPage />} anonymous={true} />}
        />
      </Route>
    </Routes>
  );
};
