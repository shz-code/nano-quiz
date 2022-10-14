import { useAuth } from "../../contexts/AuthContext";
import Quizzes from "../Quizzes";

export default function Home() {
  const auth = useAuth();
  const { currentUser } = auth;
  console.log(currentUser);
  return (
    <div>
      <h1>
        Welcome{" "}
        <span className="Logged-in-user">{currentUser?.displayName}</span> to
        your dashboard
      </h1>
      <Quizzes />
    </div>
  );
}
