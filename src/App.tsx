import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { AppLayout } from "./pages/Layout.tsx";

/** Load all the pages lazily */
const HomePage = React.lazy(() => import("./pages/Home"));
const LoginPage = React.lazy(() => import("./pages/Login"));

const withSuspense = (component: React.ReactElement) => <Suspense fallback="Loading...">{component}</Suspense>;

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={withSuspense(<HomePage />)} />
        <Route path="/login" element={withSuspense(<LoginPage />)} />
      </Route>
    </Routes>
  );
}

export default App;
