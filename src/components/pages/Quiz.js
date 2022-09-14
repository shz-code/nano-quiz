import React from "react";
import Answer from "../Answer";
import Miniplayer from "../Miniplayer";
import Progress from "../Progress";

export default function Quiz() {
  return (
    <>
      <h1>Pick three of your favorite Star Wars Flims</h1>
      <h4>Question can have multiple answers</h4>
      <Answer />
      <Progress />
      <Miniplayer />
    </>
  );
}
