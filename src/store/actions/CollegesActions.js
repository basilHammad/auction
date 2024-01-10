import fetcher from "../../axios";
import { getColleges } from "../slices/collegeSlice";
import { setLoading } from "../slices/commonSlice";

export const getAllColleges = (cb, fcb) => async (dispatch) => {
  dispatch(setLoading(true));

  const res = await fetcher.get("colleges");

  if (res.data) {
    dispatch(getColleges(res.data));

    //   cb();
  }

  dispatch(setLoading(false));
};
