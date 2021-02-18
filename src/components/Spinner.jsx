import React from "react";

const Spinner = () => {
  return (
    <div className="ui icon message">
      <i className="notched circle loading icon" />
      <div className="content">
        <div className="header">Loading...</div>
      </div>
    </div>
  );
};

export default Spinner;
