import axios from "axios";
import { DeleteData, GetData, UpdateData } from "./Action";

export const getPublicData = (page,value,order) => async (dispatch) => {
  try {
    await axios
      .get(`https://lms-backend-jowg.onrender.com?course=${value}&page=${page}&limit=3&sortby=createdAt&order=${order}`)
      .then((res) => {
        console.log(res.data.user)
        dispatch(GetData(res.data.user));
      });
  } catch (error) {
    console.log(error);
  }
};


export const postData = (blog) => async (dispatch) => {
  console.log(blog);
  let token = JSON.parse(sessionStorage.getItem("token"));
  console.log(token);
  try {
    await axios.post(
      "https://lms-backend-jowg.onrender.com/course/create",
      blog,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
  } catch (error) {
    console.log("Error creating blog", error);
  }
};

export const deleteData = (_id) => async (dispatch) => {
  try {
    console.log(_id);
    const res = await axios.delete(
      `https://lms-backend-jowg.onrender.com/course/delete/${_id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${JSON.parse(
            sessionStorage.getItem("token")
          )}`,
        },
      }
    );
    console.log("Delete response:", res);
    dispatch(DeleteData(_id));
  } catch (error) {
    console.log("Error:", error);
  }
};

export const updateValue = (id, value) => async (dispatch) => {
  try {
    const res = await axios.put(
      `https://lms-backend-jowg.onrender.com/course/edit/${id}`,
      value,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${JSON.parse(
            sessionStorage.getItem("token")
          )}`,
        },
      }
    );

    dispatch(UpdateData(res.data.users));
  } catch (error) {
    console.log("Error:", error);
  }
};
