import { GET_SAMPLE, SAMPLE_ERROR } from "../types";
import Cookies from "js-cookie";

// export const getSampleData = () => async (dispatch) => {
//   try {
//     dispatch({
//       type: GET_SAMPLE,
//       payload: Cookies.get("token"),
//       // payload: [1, 2, 3, 4, 5, 6],
//     });
//   } catch (error) {
//     dispatch({
//       type: SAMPLE_ERROR,
//       payload: "error message",
//     });
//   }
// };

export const getSampleToken = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_SAMPLE,
      payload: localStorage.getItem("token")
        ? JSON.parse(localStorage.getItem("token"))
        : {},
    });
  } catch (error) {
    dispatch({
      type: SAMPLE_ERROR,
      payload: "error message",
    });
  }
};
