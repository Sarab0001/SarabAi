import axios from "axios";
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import Main from "./Main/Main";

const App = () => {
  // const [question, setQuestion] = useState("");
  // const [Answere, setAnswere] = useState("");

  // async function generateAnswere() {
  //   setAnswere("Loading....");

  //   const response = await axios({
  //     url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyCmc2P4g2T19A3XtkvlAH_prs3HsQVSGJQ",
  //     method: "post",
  //     data: {
  //       contents: [{ parts: [{ text: question }] }],
  //     },
  //   });
  //   console.log(
  //     setAnswere(
  //       response["data"]["candidates"][0]["content"]["parts"][0]["text"]
  //     )
  //   );
  // }
  return (
    <div>
      <div className="set">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
};

export default App;
