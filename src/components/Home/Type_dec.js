import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      style={{ fontSize: "1.1rem" }} 
      options={{
        strings: [
          'Collaboration and lifelong learning are at the core of my journey, enabling me to stay ahead in the ever-evolving tech landscape. '
        ],
        wrapperClassName: "dec_class",
        cursorClassName: "dec_cursor_class",
        autoStart: true,
        loop: true,
        delay: 50,
        deleteSpeed: 30,
      }}
    />
  );
}

export default Type;
