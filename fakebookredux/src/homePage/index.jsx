import React, { useState } from "react";
import Input from "../component/input";
import Button from "../component/button";
import { useDispatch, useSelector } from "react-redux";
import { addCommentAction } from "../redux/action";
function HomePage() {
  const stateDefault = useSelector((state) => state.fakeReducer.comments);
  const dispatch = useDispatch();
  const [state, setstate] = useState({
    name: "",
    content: "",
    avatar: "",
  });
  console.log("state", state);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setstate({
      ...state,
      [name]: value,
    });
    // setstate({ ...state });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let newState = {
      ...state,
      avatar: `https://i.pravatar.cc/150?u=${state.name}`,
    };

    dispatch(addCommentAction(newState));
  };
  return (
    <div className="container">
      <h1>FakeBook App</h1>
      <div className="card">
        <div className="card-header">
          {stateDefault.map((object, index) => {
            const { name, content, avatar } = object;
            return (
              <div className="row" key={index} style={{ textAlign: "left" }}>
                <div className="col-1">
                  <img
                    className="card-img-top"
                    src={avatar}
                    alt
                    style={{ height: 50 }}
                  />
                </div>
                <div className="col-11">
                  <h6 className="text-danger text-left">{name}</h6>
                  <p>{content}</p>
                </div>
              </div>
            );
          })}
        </div>

        <form
          onSubmit={handleSubmit}
          className="card-body"
          style={{ textAlign: "left" }}
        >
          <div className="form-group">
            <h4 className="card-title">Name</h4>
            <Input
              onChange={handleChange}
              type="text"
              className="form-control"
              placeholder="Username"
              name="name"
              //   value={state.name}
            />
          </div>
          <div className="form-group mt-2">
            <h4 className="card-title">Content</h4>
            <Input
              onChange={handleChange}
              type="text"
              className="form-control"
              placeholder="Content"
              name="content"
              //   value={state.content}
            />
          </div>
          <div className="form-group mt-2">
            <Button Name="Submit" className="btn btn-success" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default HomePage;
