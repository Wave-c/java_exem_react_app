import React from "react";
import "./PageSelector.component.css";

const PageSelector = (props) => { 
  const pagePlusHandler = () =>
  {
    props.setPageHook(props.page + 1);
  }
  const pageMinusHandler = () =>
  {
    props.setPageHook(props.page - 1);
  }
  return (
    <div className="PageSelector">
      <h1 onClick={pageMinusHandler}>&lt;</h1>
      <h1 onClick={pagePlusHandler}>&gt;</h1>
    </div>
  ); 
};

export default PageSelector;