import React from "react";
import Router from "next/router";
import styled from "styled-components";
import { connect } from "react-redux";
import { setBlogTitle } from "../../../store/actions/main";
const TvShowContainer = styled.div`
  width: 100%;
  min-height: 5em;
  display: flex;
  border-bottom: 2px solid #d8d8d852;
  padding: 6px 8px;
  align-items: center;
  margin-top: 1rem;
`;

const Name = styled.h3`
  font-size: 15px;
  color: #000;
  margin-left: 10px;
  flex: 2;
  display: flex;
`;
const TvShow = (props) => {
  const { name } = props;

  return (
    <TvShowContainer
      onClick={() => {
        localStorage.setItem("blogTitle", name);
        props.setBlogTitle(name);
        Router.push(`/blogs/blog?title=${name.replace(/ /g, "-")}`);
      }}
    >
      <Name>{name}</Name>
    </TvShowContainer>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setBlogTitle: (data) => {
      dispatch(setBlogTitle(data));
    },
  };
};

export default connect(null, mapDispatchToProps)(TvShow);
