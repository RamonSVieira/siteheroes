import { Link } from "react-router-dom";

interface buttonProps {
  text: string;
  link: string;
}

export function Button(props: buttonProps) {
  return (
    <div>
      <Link
        className="py-4 px-8 bg-red-700 inline-block rounded-full text-white font-bold text-xl md:text-2xl hover:bg-red-600"
        to={props.link}
      >
        {props.text}
      </Link>
    </div>
  );
}
