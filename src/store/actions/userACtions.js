import fetcher from "../../axios";
import { setLoading } from "../slices/commonSlice";
import { getUser } from "../slices/userSlice";

export const register = (user, cb, fcb) => async (dispatch) => {
  dispatch(setLoading(true));
  const res = await fetcher.post("register", user);

  if (res.data.errors) {
    const errors = {};
    Object.entries(res.data.errors).forEach(([key, value]) => {
      errors[key] = value[0];
    });
    dispatch(setLoading(false));

    return fcb(errors);
  }

  if (res.data) {
    dispatch(getUser({ token: res.data.token, ...res.data.user }));
    localStorage.setItem(
      "user",
      JSON.stringify({ token: res.data.token, ...res.data.user })
    );
    dispatch(setLoading(false));

    cb();
  }
};

export const login = (user, cb, fcb) => async (dispatch) => {
  dispatch(setLoading(true));

  const res = await fetcher.post("login", user);

  if (res.data.errors) {
    const errors = {};
    Object.entries(res.data.errors).forEach(([key, value]) => {
      errors[key] = value[0];
    });
    dispatch(setLoading(false));

    return fcb(errors);
  }

  if (res.data) {
    dispatch(getUser({ token: res.data.token, ...res.data.user }));
    localStorage.setItem(
      "user",
      JSON.stringify({ token: res.data.token, ...res.data.user })
    );
    dispatch(setLoading(false));

    cb();
  }
};

export const logout = () => async (dispatch) => {
  console.log("first");
  dispatch(getUser({}));
  localStorage.removeItem("user");
};
