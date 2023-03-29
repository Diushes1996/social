import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from './components/Profile/ProfileContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {

  return (
    <BrowserRouter >
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile/*" element={
              <ProfileContainer
                state={props.state}
                dispatch={props.dispatch}
              />}
            />
            <Route path="/dialogs" element={
              <DialogsContainer
                state={props.state}
                dispatch={props.dispatch}
              />}
            />
            <Route path="/users" element={
              <UsersContainer
                state={props.state}
                dispatch={props.dispatch}
              />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
