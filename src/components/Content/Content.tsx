import React from "react";
import Elements from "@/components/Content/Elements";
import ContentHeading from "./ContentHeading";

const Content: React.FC<{}> = () => {
  return (
    <div className="ml-10 flex-auto flex-col">
        <ContentHeading />
        <Elements />
    </div>
  );
};

export default Content;
