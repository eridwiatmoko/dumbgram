import { useEffect } from "react";
import { useUserContext } from "./context/userContext";
import { Route, Routes, useNavigate } from "react-router-dom";
import { DetailFeedModal, PrivateRoute } from "./components/molecules";
import {
  LandingPage,
  Home,
  Explore,
  Inbox,
  CreatePost,
  User,
  PageNotFound,
} from "./pages";
import EditProfile from "./pages/EditProfile";
import { API } from "./config/api";

function App() {
  const api = API();
  const navigate = useNavigate();
  const [state, dispatch] = useUserContext();

  useEffect(() => {
    // TODO get path each page

    if (!state.isLogin && !localStorage.token) {
      return navigate("/", { replace: true });
    }

    navigate(window.location.pathname, { replace: true });
  }, [state]);

  const checkAuth = async () => {
    try {
      const config = {
        method: "GET",
        headers: {
          Authorization: "Basic " + localStorage.token,
        },
      };

      const response = await api.get("/check-auth", config);

      if (response.status === "failed") {
        return dispatch({
          type: "AUTH_ERROR",
        });
      }

      dispatch({
        type: "AUTH_SUCCESS",
        payload: {
          ...response.data.user,
          token: localStorage.token,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <Routes>
      <Route exac path="/" element={<LandingPage />} />
      <Route element={<PrivateRoute />}>
        <Route path="feed" element={<Home />} />
        <Route path="feed/:username" element={<User />} />
        <Route path="explore" element={<Explore />} />
        <Route path="inbox" element={<Inbox />} />
        <Route path="create-post" element={<CreatePost />} />
        <Route path="edit-profile" element={<EditProfile />} />
      </Route>
      <Route exac path="*" element={<PageNotFound />} />
      <Route exac path="test" element={<DetailFeedModal />} />
    </Routes>
  );
}

export default App;
