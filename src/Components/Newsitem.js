import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description, imgurl, newsurl, author, date, source} = this.props;
    return (
        
       <div className="container">

        <div className="card my-3">
          <img
            src={
              !imgurl
                ? "https://c.ndtvimg.com/2021-10/si2o8bt_electricity-generic_625x300_16_October_21.jpg"
                : imgurl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{source}
              </span>
            </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                Published by {author} on {new Date(date).toGMTString()}
              </small>{" "}
            </p>
            <a
              href={newsurl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-primary btn-sm"
            >
              Read more
            </a>
          </div>
        </div>
       </div>
    );
  }
}

export default Newsitem;
