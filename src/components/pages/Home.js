import { useAuth } from "../../contexts/AuthContext";
import Quizzes from "../Quizzes";

export default function Home() {
  const auth = useAuth();
  const { currentUser } = auth;

  return (
    <div>
      {currentUser && (
        <h1>
          Welcome
          <span className="Logged-in-user"> {currentUser.displayName}</span>.
          Complete available quizzes now!
        </h1>
      )}
      <Quizzes />
    </div>
  );
}
