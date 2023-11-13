import { Route, Routes } from "react-router-dom";

import LogIn from "@/screens/LogIn";
// import type { Location } from "react-router-dom";

// import { Layout } from "@/layout";
// import { NotFound, Settings } from "@/screens";
// import { Login } from "@/screens/Login";
import { SignUp } from "@/screens/SignUp";
// import { ProtectedRoute } from "./ProtectedRoute";
import { ROUTES } from "./routes";

export const Router = () => {
  //   const location = useLocation();
  //   const { previousLocation } = (location.state ?? {}) as {
  //     previousLocation?: Location;
  //   };

  return (
    <div>
      <Routes>
        <Route element={<SignUp />} path={ROUTES.signUp} />
        <Route element={<LogIn />} path={ROUTES.logIn} />
      </Routes>
    </div>
    // <div>
    //   {/* PUBLIC ONLY ROUTES */}
    //   <Routes location={previousLocation ?? location}>
    //     <Route element={<ProtectedRoute expected="loggedOut" />}>
    //         <Route element={<SignUp />} path={ROUTES.signUp} />
    //       {/* <Route element={<Login />} path={ROUTES.login} /> */}
    //     </Route>
    //   </Routes>
    //   {/* PRIVATE ONLY ROUTES */}
    //   <Routes location={previousLocation ?? location}>
    //     <Route element={<ProtectedRoute expected="loggedIn" />}>
    //       <Route element={<Layout />}>
    //         <Route
    //           element={<Navigate to={ROUTES.settings} />}
    //           path={ROUTES.base}
    //         />

    //         <Route element={<Settings />} path={ROUTES.settings} />

    //         <Route path={ROUTES.notFound} element={<NotFound />} />
    //       </Route>
    //     </Route>
    //   </Routes>
    // </div>
  );
};
