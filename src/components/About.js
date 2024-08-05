import React from "react";

function About({bio}) {
  return (
    <div id="about">
      <h2>About Me </h2>
      {/* You can read it as “if  is true bio, then (?) render <p>+ ' ✔', otherwise (:) render name”. 
      It's called Conditional(ternary)
      */}
      {bio ? <p> {bio}</p>: null }
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
    </div>
  );
}

export default About;
