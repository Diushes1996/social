import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { UsersContainer } from "./components/Users/UsersContainer";
import Layout from "./components/Layout";
import NotFoundPage from "./components/NotFoundPage";
import { Profile } from "./components/Profile/Profile";
import { Settings } from "./components/Settings/Settings";
import { useState } from "react";

const App = (props) => {

  const [theme, setTheme] = useState(true)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout theme={theme}/>}>
          <Route
            index
            element={
              <Profile state={props.state} dispatch={props.dispatch} />
            }
          />
          <Route
            path="/dialogs"
            element={
              <DialogsContainer state={props.state} dispatch={props.dispatch} />
            }
          />
          <Route path="/users" element={<UsersContainer />} />
          <Route path="/settings" element={<Settings setTheme={setTheme}/>} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
