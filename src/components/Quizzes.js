import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useAuth } from "../contexts/AuthContext";
import useAnswers from "../hooks/useAnswers";
import useQuizList from "../hooks/useQuizList";
import "./assets/css/Quizzes.css";
import QuizCard from "./QuizCard";

export default function Quizzes() {
  const [page, Setpage] = useState(0);
  const { loading, error, quizList, hasMore } = useQuizList(page);
  const auth = useAuth();
  const { currentUser } = auth;
  const { answers } = useAnswers(currentUser?.photoURL);

  const prevAns = () => {
    let prevRecords = [],
      prevSl = [];

    answers?.forEach((answer) => {
      prevSl.push(answer.sl);
      prevRecords.push({
        prevScore: answer.correctAns,
      });
    });
    return [
      {
        prevRecords,
        prevSl,
      },
    ];
  };

  const prevSlArr = prevAns();

  return (
    <div className="quizzes">
      {quizList.length > 0 && (
        <InfiniteScroll
          dataLength={quizList.length}
          hasMore={hasMore}
          next={() => Setpage((prev) => prev + 10)}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>That's all the quizzes for now!</b>
            </p>
          }
        >
          {quizList.map((item, index) =>
            answers?.length > 0 ? (
              prevSlArr[0].prevSl.includes(item.sl.toString()) ? (
                <QuizCard
                  item={item}
                  key={item.sl}
                  score={
                    prevSlArr[0].prevRecords[
                      prevSlArr[0].prevSl.indexOf(item.sl.toString())
                    ].prevScore
                  }
                />
              ) : (
                <QuizCard item={item} key={item.sl} />
              )
            ) : (
              <QuizCard item={item} key={item.sl} />
            )
          )}
        </InfiniteScroll>
      )}
      {!loading && quizList.length === 0 && <div>No Data Found!</div>}
      {error && <div>There was an error!</div>}
      {loading && <div>Loading...</div>}
    </div>
  );
}
