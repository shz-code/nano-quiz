import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useQuizList from "../hooks/useQuizList";
import "./assets/css/Quizzes.css";
import QuizCard from "./QuizCard";

export default function Quizzes() {
  const [page, Setpage] = useState(0);
  const { loading, error, quizList, hasMore } = useQuizList(page);
  return (
    <div className="quizzes">
      {quizList.length > 0 && (
        <InfiniteScroll
          dataLength={quizList.length}
          hasMore={hasMore}
          next={() => Setpage((prev) => prev + 8)}
        >
          {quizList.map((item) => (
            <QuizCard item={item} key={item.sl} />
          ))}
        </InfiniteScroll>
      )}
      {!loading && quizList.length === 0 && <div>No Data Found!</div>}
      {error && <div>There was an error!</div>}
      {loading && <div>Loading...</div>}
    </div>
  );
}
