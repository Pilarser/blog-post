import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

interface CreatePostProps {
  submitHandler: (values: any) => void;
}

const validationSchema = yup.object({
  userId: yup.number().required("User Id is required"),
  id: yup.number().required("Id is required"),
  title: yup.string().required("Title is required"),
  body: yup.string().required("Content is required")
});

const CreatePost: React.FC<CreatePostProps> = ({ submitHandler }) => {
  const formik = useFormik({
    initialValues: {
      userId: "",
      id: "",
      title: "",
      body: ""
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      submitHandler(values);
    }
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="number"
          name="userId"
          placeholder="User Id"
          value={formik.values.userId}
          onChange={formik.handleChange}
        />
        {formik.touched.userId && formik.errors.userId && (
          <div>{formik.errors.userId}</div>
        )}
        <input
          type="number"
          name="id"
          placeholder="Id"
          value={formik.values.id}
          onChange={formik.handleChange}
        />
        {formik.touched.id && formik.errors.id && <div>{formik.errors.id}</div>}
        <input
          type="text"
          name="title"
          placeholder="title"
          value={formik.values.title}
          onChange={formik.handleChange}
        />
        {formik.touched.title && formik.errors.title && (
          <div>{formik.errors.title}</div>
        )}
        <input
          type="text"
          name="body"
          placeholder="Content"
          value={formik.values.body}
          onChange={formik.handleChange}
        />
        {formik.touched.body && formik.errors.body && (
          <div>{formik.errors.body}</div>
        )}

        <button type="submit"> Submit</button>
      </form>
    </div>
  );
};

export default CreatePost;
