import React from "react";
import EachMovie from "./EachMovie";
import styled from "styled-components";
import cinema from "../assets/json/dummyData";

const AllMovies = () => {
  return (
    <Danas>
      {cinema.map((eachmovies) => (
        <EachMovie
          img={eachmovies.img}
          match={eachmovies.match}
          rated={eachmovies.rated}
          duration={eachmovies.duration}
          resolution={eachmovies.resolution}
          genre={eachmovies.genre}
        />
      ))}
    </Danas>
  );
};

export default AllMovies;

let Danas = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .eachmovies {
    width: 20%;
  }
`;
