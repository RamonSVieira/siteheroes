import React, { HTMLAttributes } from "react";
import { Link } from "react-router-dom";

interface IconHeroeProps extends HTMLAttributes<HTMLDivElement> {
  urlImage: string;
  name: string;
}

export function IconHeroe({ ...props }: IconHeroeProps) {
  return (
    <Link to="#">
      <div {...props}>
        <img
          src={props.urlImage}
          alt={`Um ícone em tema de quadrinhos do ${props.name}`}
          className="absolute bottom-0"
        />
      </div>
    </Link>
  );
}
