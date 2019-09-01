import { takeLatest, call, put, all } from "redux-saga/effects";
import { toast } from "react-toastify";

import api from "~/services/api";
import { updateProfileSuccess, updateProfileFailure } from "./actions";

export function* updateProfile({ payload }) {
  try {
    const { name, email, ...rest } = payload.data;

    const profile = Object.assign(
      { name, email },
      rest.oldPassword ? rest : {}
    );

    console.tron.log(profile);
    const response = yield call(api.put, "users", profile);
    console.tron.log(response);
    toast.success("Successful updated profile");
    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    toast.error("Please, Confirm your data");
    console.tron.log(err);
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest("@user/UPDATE_PROFILE_REQUEST", updateProfile)]);
