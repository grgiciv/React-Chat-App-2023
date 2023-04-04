import { SignInPage } from "./pages/SignInPage";
import { ChatPage } from "./pages/ChatPage";
import { Route, Routes } from "react-router-dom";
import { FaqPage } from "./pages/FaqPages";
import {AppContext} from "./contexts/AppContext";
import {useContext} from "react";


function App() {
  const context = useContext(AppContext);

  if (context.error !==null) {
    return (
    <div>
      <h1>ERROR</h1>
      <div>Something went wrong: {context.error.toString()}</div>
    </div>);
  }

  return (
      <Routes>
        <Route path="/">
          <Route index element={<SignInPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/faq" element={<FaqPage />} />
        </Route>
      </Routes>
  );
}

export default App;
