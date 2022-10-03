import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useQuizList from "../hooks/useQuizList";
import "./assets/css/Quizzes.css";
import Quiz from "./Quiz";

export default function Quizzes() {
  const [page, Setpage] = useState(0);
  const { loading, error, quizList, hasMore } = useQuizList(page);
  return (
    <div className="quizzes">
      {quizList.length > 0 && (
        <InfiniteScroll
          dataLength={quizList.length}
          hasMore={hasMore}
          next={() => Setpage((prev) => prev + 4)}
        >
          {quizList.map((item) => (
            <Quiz item={item} key={item.sl} />
          ))}
        </InfiniteScroll>
      )}
      {!loading && quizList.length === 0 && <div>No Data Found!</div>}
      {error && <div>There was an error!</div>}
      {loading && <div>Loading...</div>}
    </div>
  );
}
