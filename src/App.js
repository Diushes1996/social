import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { UsersContainer } from "./components/Users/UsersContainer";
import Layout from "./components/Layout";
import NotFoundPage from "./components/NotFoundPage";
import { Profile } from "./components/Profile/Profile";
import { Settings } from "./components/Settings/Settings";
import { useState, useEffect } from "react";

const App = (props) => {

  const getInitialTheme = () => {
    const data = localStorage.getItem('darkTheme')
    return data ? JSON.parse(data) : theme
  }

  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    localStorage.setItem('darkTheme', theme)
  }, [theme])

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
