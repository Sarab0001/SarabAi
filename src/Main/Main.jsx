import React, { useContext } from "react";
import "../Main/Main.css";
import { assets } from "../assets/assets/assets";
import { Context } from "../context/Context";
import axios from "axios";
import { useState } from "react";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    setInput,
    input,
    resultData,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>SarabAi</p>
        <img src={assets.main_icon} alt="" />
      </div>

      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello people</span>
              </p>
              <p>How can I help you ? </p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Briefly summarise this concept: urban planning</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>How to became an good software engineer</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Improve the readability of the following code</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.main_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              type="text"
              value={input}
              placeholder="Message SarabAI"
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input ? (
                <img onClick={() => onSent()} src={assets.send_icon} alt="" />
              ) : null}
            </div>
          </div>
          <p className="bottom-info">
            SarabAI may display inaccurate information , so double-check its
            result
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
