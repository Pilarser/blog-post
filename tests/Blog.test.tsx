import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import Blog from "../src/Blog";

const mockStore = configureStore([thunk]);

test("renders the blog component", () => {
  const loading = false;
  const error = null;
  const data = [
    { id: 1, title: "First Blog", body: "Text of first article" },
    { id: 2, title: "Second Blog", body: "Text of second article" }
  ];
  const fetchPosts = jest.fn();
  const submitHandler = jest.fn();

  const store = mockStore({
    blog: {
      loading,
      error,
      data
    }
  });

  const { container, getByText } = render(
    <Provider store={store}>
      <Blog
        loading={loading}
        error={error}
        data={data}
        fetchPosts={fetchPosts}
        submitHandler={submitHandler}
      />
    </Provider>
  );

  console.log(container.innerHTML);

  expect(getByText("First Blog")).toBeInTheDocument();
  expect(getByText("Second Blog")).toBeInTheDocument();

  const form = container.querySelector(`form`);

  const userIdInput = form.querySelector('input[name="userId"]');
  const idInput = form.querySelector('input[name="id"]');
  const titleInput = form.querySelector('input[name="title"]');
  const bodyInput = form.querySelector('input[name="body"]');

  fireEvent.change(userIdInput, { target: { value: "123" } });
  fireEvent.change(idInput, { target: { value: "456" } });
  fireEvent.change(titleInput, { target: { value: "Test Title" } });
  fireEvent.change(bodyInput, { target: { value: "Test Content" } });

  act(() => {
    fireEvent.submit(form);
  });

  expect(submitHandler).toHaveBeenCalled();
});
