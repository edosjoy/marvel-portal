import {Routes, Route} from "react-router";

import './App.module.css';

import Header from "../../components/Header/Header";
import routesConfig from "../../routes/routesConfig";

function App() {
  return (
    <>
      <Header />
      <Routes>
        {
          routesConfig.map((route, index) =>
            <Route
              key={index}
              path={route.path}
              element={route.element}
            />
          )
        }
      </Routes>
    </>
  );
}

export default App;
