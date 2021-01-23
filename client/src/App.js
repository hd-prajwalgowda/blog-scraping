import React, { useState } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ForgotPassword from "./components/ForgotPassword";
import Navbar from "./components/Navbar";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

import { useAuth } from "./provider/AuthProvider";

import HomeScreen from "./screens/HomeScreen";
import AddPost from "./screens/AddPost";
import Profile from "./screens/Profile";
import SinglePost from "./screens/SinglePost";
import { QueryClient, QueryClientProvider } from "react-query";

const base_url = "http://localhost:8080";
const queryClient = new QueryClient();

// function App() {
//   axios.interceptors.request.use(
//     (config) => {
//       const { origin } = new URL(config.url);
//       const allowedOrigins = [base_url];
//       const token = localStorage.getItem("accessToken");
//       if (allowedOrigins.includes(origin)) {
//         config.headers.authorization = `Bearer ${token}`;
//       }
//       console.log(config);
//       return config;
//     },
//     (error) => {
//       return Promise.reject(error);
//     }
//   );

//   axios.interceptors.response.use(
//     (response) => {
//       return response;
//     },
//     async function (error) {
//       console.log(error);
//       const originalRequest = error.config;
//       let refreshToken = localStorage.getItem("refreshToken");
//       if (
//         refreshToken &&
//         error.response.status === 401 &&
//         !originalRequest._retry
//       ) {
//         originalRequest._retry = true;
//         return axios
//           .post(`${base_url}/auth/refreshToken`, {
//             refreshToken: refreshToken,
//           })
//           .then((res) => {
//             console.log(res);
//             if (res.status === 200) {
//               localStorage.setItem("accessToken", res.access.token);
//               localStorage.setItem("refreshToken", res.refresh.token);
//               return axios(originalRequest);
//             }
//           })
//           .catch((err) => {
//             console.log(err);
//           });
//       }
//       return Promise.reject(error);
//     }
//   );

//   return (
//     <QueryClientProvider client={queryClient}>
//       <Router>
//         <div className="bg-blue-100 dark:bg-gray-900 min-h-screen">
//           {/* <div className="fixed w-screen"></div> */}
//           <Navbar />
//           {/* <div className="pt-20"> */}
//           <Switch>
//             <Route path="/register">
//               <Signup />
//             </Route>
//             <Route path="/login">
//               <Signin />
//             </Route>
//             <Route path="/forgot-password">
//               <ForgotPassword />
//             </Route>
//             <Route path="/posts/:slug">
//               <SinglePost />
//             </Route>
//             <PrivateRoute path="/addpost" exact>
//               <AddPost />
//             </PrivateRoute>
//             <PrivateRoute path="/profile/:user" exact>
//               <Profile />
//             </PrivateRoute>
//             <Route path="/">
//               <HomeScreen />
//             </Route>
//           </Switch>
//           {/* </div> */}
//         </div>
//       </Router>
//     </QueryClientProvider>
//   );
// }

function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !auth.isLoggedIn() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

// function Student({ children }) {
//   return { children };
// }
function Usn({ children }) {
  return <p>{children}</p>;
}

function Name({ children }) {
  return <p>{children}</p>;
}

function College({ children }) {
  return <p>{children}</p>;
}
function Email({ children }) {
  return <p>{children}</p>;
}

function App() {
  return (
    <div>
      <div>
        <Name>Name : Prajwal HD</Name>
        <Usn>USN : 1SK17CS023</Usn>
        <Email>E-mail : hdprajwalgowda@gmail.com</Email>
        <College>College : Govt. SKSJTI</College>
      </div>
      <div>
        <Name>Name : Prajwal HD</Name>
        <Usn>USN : 1SK17CS023</Usn>
        <Email>E-mail : hdprajwalgowda@gmail.com</Email>
        <College>College : Govt. SKSJTI</College>
      </div>
      <div>
        <Name>Name : Prajwal HD</Name>
        <Usn>USN : 1SK17CS023</Usn>
        <Email>E-mail : hdprajwalgowda@gmail.com</Email>
        <College>College : Govt. SKSJTI</College>
      </div>
      <div>
        <Name>Name : Prajwal HD</Name>
        <Usn>USN : 1SK17CS023</Usn>
        <Email>E-mail : hdprajwalgowda@gmail.com</Email>
        <College>College : Govt. SKSJTI</College>
      </div>
    </div>
  );
}

export default App;
