import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { UsersContainer } from "./components/Users/UsersContainer";
import Layout from "./components/Layout";
import NotFoundPage from "./components/NotFoundPage";
import { Profile } from "./components/Profile/Profile";
import { Settings } from "./components/Settings/Settings";

const App = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
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
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
