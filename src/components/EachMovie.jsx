import React from "react";
import styled from "styled-components";

const EachMovie = (props) => {
  return (
    <Movies className="eachmovies container">
      <img src={props.img} alt="" />

      <div className="description">
        <div className="flex-span">
          <div className="first-span">
            <span class="material-symbols-outlined">play_circle</span>
            <span class="material-symbols-outlined">add_circle</span>
            <span class="material-symbols-outlined">thumb_up</span>
          </div>
          <div className="second-span">
            <span class="material-symbols-outlined">expand_circle_down</span>
          </div>
        </div>

        <div className="text">
          <h5>{props.match}% Match</h5>
          <p className="no">{props.rated}+</p>
          <small className="sea7">{props.duration}</small>
          <h6 className="hd">{props.resolution}</h6>
        </div>

        <div className="movie-type">
          <p>{props.genre}</p>
        </div>
      </div>
    </Movies>
  );
};

export default EachMovie;

let Movies = styled.div`
.eachmovies{
    transform: scale(1)
    transition: 0.5s;
}
  img {
    width: 100%;
  }
  .description {
    background-color: rgb(20, 20, 20);
    padding: 10px;
    display: none;
    margin-top: -7px;
  }
    &:hover {
        transform: scale(1.2);
      .description {
        display: block;
      }
    }
    .flex-span {
      display: flex;
      justify-content: space-between;
    }
    span {
      color: white;
      width: 30px;
    }
    .text {
      display: flex;
      justify-content: space-between;
      width: 75%;
      align-items: center;
      padding: 0px 2px;
      margin: 20px 0;
      font-size: 12px;
      .hd {
        color: rgb(116, 116, 116);
        border: 1px solid rgb(116, 116, 116);
        padding: 0px 7px;
      }
      .no,
      h6,
      small {
        color: rgb(116, 116, 116);
      }
      h5 {
        color: rgb(78, 210, 110);
      }
      .no {
        color: rgb(116, 116, 116);
        border: 1px solid rgb(116, 116, 116);
        font-size: 10px;
        display: inline-block;
        padding: 2px 8px;
      }
    }
    .movie-type {
      color: white;
      display: flex;
      justify-content: space-between;
      width: 65%;
      font-size: 10px;
    }
  }
`;
