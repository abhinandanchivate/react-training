import { registerService } from "../../services/auth.service";
import { REGISTER_SUCCESS } from "../types";

export const registerAction = (formData, navigate) => async (dispatch) => {
  try {
    const res = await registerService(formData);
    //
    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    navigate("/dashboard");
  } catch (err) {}
};
