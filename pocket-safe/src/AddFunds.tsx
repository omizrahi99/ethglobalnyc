import React from "react";

const AddFunds = () => {
  return (
    <iframe
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        border: "none",
        marginTop: "25px",
      }}
      src="https://global-stg.transak.com?apiKey=c71ecd4a-0819-46a7-8d63-c8b7148aaf63&amp;environment=STAGING&amp;sdkVersion=1.3.0&amp;widgetHeight=625px&amp;widgetWidth=500px"
    />
  );
};

export default AddFunds;
