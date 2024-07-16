import { createContext, useState } from "react";
import run from "../config/gemini.js";

export const context = createContext();

const ContextProvider = ({ children }) => {
  const [prompt, setPrompt] = useState("");
  const [question, setQuestion] = useState("");
  const [output, setOutput] = useState("");
  const [loader, setLoader] = useState(false);
  const [showHello, setShowHello] = useState(true);

  const onAsk = async () => {
    console.log("api called");
    setShowHello(false);
    setQuestion(prompt);
    setLoader(true);
    const response = await run(prompt);
    let arr1 = response.split("**"); 
    let ans1 = arr1.map((item, index) => {
      if (index % 2 === 0) {
        return item;
      } else {
        return <b key={index}>{item}</b>;
      }
    });
    let ans2 = ans1.reduce((acc, curr) => [
      acc,
      <br key={curr.toString()} />,
      curr,
    ]);

    setOutput(ans2);
    setLoader(false);
    setPrompt("");
  };

  const contextValue = {
    prompt,
    setPrompt,
    output,
    onAsk,
    loader,
    showHello,
    question,
  };

  return (
    <>
      <context.Provider value={contextValue}>{children}</context.Provider>
    </>
  );
};

export default ContextProvider;
