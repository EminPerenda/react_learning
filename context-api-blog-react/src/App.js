import "./App.css";
import UserInfoContext from "./context/UserInfoContext";
import BlogPage from "./components/BlogPage";

function App() {
  const userInfo = { username: "Admin", isAdmin: true };
  return (
    <UserInfoContext value={userInfo}>
      <BlogPage></BlogPage>
    </UserInfoContext>
  );
}

export default App;
