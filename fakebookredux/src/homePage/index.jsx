import React from "react";
import Input from "../component/input";
import Button from "../component/button";
function HomePage() {
  return (
    <div className="container">
      <h1>FakeBook App</h1>
      <div className="card">
        <div className="card-header">
          <div className="row" style={{ textAlign: "left" }}>
            <div className="col-1">
              <img
                className="card-img-top"
                src={`https://i.pravatar.cc/50/50/?u=bbb`}
                alt
                style={{ height: 50 }}
              />
            </div>
            <div className="col-11">
              <h6 className="text-danger text-left">aaa</h6>
              <p>Hi aaa</p>
            </div>
          </div>

          <div className="row" style={{ textAlign: "left" }}>
            <div className="col-1">
              <img
                className="card-img-top"
                src={`https://i.pravatar.cc/50/50/?u=ccc`}
                alt
                style={{ height: 50 }}
              />
            </div>
            <div className="col-11 ">
              <h6 className="text-danger text-left">aaa</h6>
              <p>Hi aaa</p>
            </div>
          </div>
        </div>

        <div className="card-body">
          <div className="form-group">
            <label htmlFor />
            <Input className="form-control" placeholder="Username" />
            <Input className="form-control" placeholder="Comment" />
            <Button Name="Submit" className="btn btn-success" />
            {/* <input
              type="text"
              name
              id
              className="form-control"
              placeholder
              aria-describedby="helpId"
            /> */}
            <small id="helpId" className="text-muted">
              Help text
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
