import React from "react";
import EachMovie from "./EachMovie";
import styled from "styled-components";

const AllMovies = () => {
  return (
    <Danas>
      <EachMovie
        img="https://images.unsplash.com/photo-1545548171-37a54e5c1ea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
        match="70"
        rated="18"
        duration="2hrs 35mins"
        resolution="4k"
      />
      <EachMovie />
      <EachMovie />
      <EachMovie />
      <EachMovie />
      <EachMovie />
      <EachMovie />
      <EachMovie />
      <EachMovie />
    </Danas>
  );
};

export default AllMovies;

let Danas = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .eachmovies {
    width: 30%;
  }
`;
