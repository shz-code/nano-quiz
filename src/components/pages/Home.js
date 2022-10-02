import { useAuth } from "../../contexts/AuthContext";
import Videos from "../Quizzes";

export default function Home() {
  const auth = useAuth();
  const { currentUser } = auth;
  return (
    <div>
      <h1>
        Welcome{" "}
        <span className="Logged-in-user">{currentUser.displayName}</span> to
        your dashboard
      </h1>
      <Videos />
    </div>
  );
}
