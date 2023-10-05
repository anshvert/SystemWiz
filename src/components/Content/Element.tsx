import React from "react";

interface ElementProps {
    image?: string,
    name?: string,
    liked?: boolean,
    views?: number,
}

const Element: React.FC<ElementProps> = ({ image, name, liked = true, views = 0 }) => {
  return (
    <div className="pd-2 flex-col">
        <div className=" max-w-lg h-auto block">
            <img src={image} alt="Main Image" style={{width: "100%"}}/>
            <span>{name}</span>
         </div>
        <div className="flex justify-around p-2">
            <span className="liked">{liked ? "liked": "notliked"}</span>
            <span className="viewed">{views}</span>
        </div>
    </div>
  );
};

export default Element;