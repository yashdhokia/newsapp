import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, des, imgurl, newsurl } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img
            src={
              !imgurl
                ? "https://webhostingmedia.net/wp-content/uploads/2018/01/http-error-404-not-found.png"
                : imgurl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{des}</p>
            <a
              rel="noreferrer"
              href={newsurl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
