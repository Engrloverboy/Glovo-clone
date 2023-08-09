import React from "react";
import EachMovie from "./EachMovie";
import styled from "styled-components";

const AllMovies = () => {
  return (
    <Danas>
      <EachMovie
        img="https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        match="70"
        rated="18"
        duration="2hrs 35mins"
        resolution="4k"
        type="Action"
        types="Comedy"
        typess="Suspense"
      />
      <EachMovie
        img="https://images.unsplash.com/photo-1512149074996-e923ac45be6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        match="95"
        rated="16"
        duration="2hrs 15mins"
        resolution="HD"
        type="Action"
        types="Comedy"
        typess="Horror"
      />

      <EachMovie
        img="https://images.unsplash.com/photo-1595769816263-9b910be24d5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1479&q=80"
        match="95"
        rated="16"
        duration="2hrs 05mins"
        resolution="HD"
        type="Drama"
        types="Comedy"
        typess="Romance"
      />

      <EachMovie
        img="https://images.unsplash.com/photo-1616097970275-1e187b4ce59f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        match="90"
        rated="16"
        duration="3 Seasons"
        resolution="HD"
        type="Thriller"
        types="Science Fiction"
        typess="Horror"
      />

      <EachMovie
        img="https://images.unsplash.com/photo-1595769816263-9b910be24d5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1479&q=80"
        match="80"
        rated="18"
        duration="2hrs 45mins"
        resolution="HD"
        type="Action"
        types="Comedy"
        typess="Horror"
      />

      <EachMovie
        img="https://images.unsplash.com/photo-1512149074996-e923ac45be6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        match="95"
        rated="16"
        duration="2hrs 30mins"
        resolution="4k"
        type="Action"
        types="Suspense"
        typess="Horror"
      />

      <EachMovie
        img="https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        match="95"
        rated="16"
        duration="2hrs 15mins"
        resolution="HD"
        type="Action"
        types="Comedy"
        typess="War"
      />

      <EachMovie
        img="https://images.unsplash.com/photo-1595769816263-9b910be24d5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1479&q=80"
        match="95"
        rated="16"
        duration="2hrs 15mins"
        resolution="HD"
        type="Action"
        types="Comedy"
        typess="Horror"
      />

      <EachMovie
        img="https://images.unsplash.com/photo-1616097970275-1e187b4ce59f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        match="85"
        rated="17"
        duration="1hrs 15mins"
        resolution="HD"
        type="Action"
        types="Suspense"
        typess="Science Fiction"
      />
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
