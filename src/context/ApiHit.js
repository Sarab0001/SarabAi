// // import React from 'react'

// // const ApiHit = () => {
// //     const [question, setQuestion] = useState("");
// //     const [Answere, setAnswere] = useState("");

// //   return (
// //     <div>ApiHit</div>
// //   )
// // }

// // export default ApiHit

// ///////////////////////////////////////////////////////////
// // const [question, setQuestion] = useState("");
// // const [Answere, setAnswere] = useState("");

// ///new Approach
// const [input, setInput] = useState("");
// const [recentPrompt, setRecentPrompt] = useState("");
// const [prevPrompt, setPrevPrompt] = useState([]);
// const [showResult, setShowResult] = useState(false);
// const [loading, setLoading] = useState(false);
// const [resultData, setResultData] = useState("");

// async function generateAnswere() {
//   setAnswere("");

//   setAnswere("Loading....");
//   // setLoading(true)
//   // setShowResult(true)
//   // setRecentPrompt(input)

//   let respnseArray = Answere.split("**");
//   let newArray;
//   for (let i = 0; i < Answere.length; i++) {
//     if (i === 0 || i % 2 == 1) {
//       newArray += respnseArray[i];
//     } else {
//       newArray += "<b>" + respnseArray[i] + "</b>";
//     }
//   }

//   setAnswere(newArray);

//   const response = await axios({
//     url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyCmc2P4g2T19A3XtkvlAH_prs3HsQVSGJQ",
//     method: "post",
//     data: {
//       contents: [{ parts: [{ text: question }] }],
//     },
//   });
//   console.log(
//     setAnswere(response["data"]["candidates"][0]["content"]["parts"][0]["text"])
//   );
// }
