import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "../services/auth/authSlice";

const useAuthCheck = () => {
  const [isAuth, setIsAuth] = useState(false);
  const dispatch = useDispatch();

  //check user authorization
  useEffect(() => {
    const localAuth = localStorage?.getItem("auth");
    if (localAuth) {
      const auth = JSON.parse(localAuth);
      if (auth?.accessToken && auth?.user) {
        dispatch(
          userLogin({ accessToken: auth?.accessToken, user: auth?.user })
        );
      }
    }
    setIsAuth(true);
  }, [dispatch]);

  return isAuth;
};

export default useAuthCheck;
