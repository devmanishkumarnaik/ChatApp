import React from "react";
import {Helmet} from "react-helmet-async";

const Title = ({
  title = "ChatApp",
  description = "This is the Chat App 2.0-developed by manishkumar!, try out now",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};
export default Title;
