import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "AI - LLM, Langchain Developer",
          "Open Source Contributor",
          "Software Developer",
          "FULL Stack Developer",
          "DevOps Engineer",
          "scrapping expert",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
