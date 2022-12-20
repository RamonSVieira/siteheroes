interface buttonProps {
  text: string;
  link: string;
}

export function Button(props: buttonProps) {
  return (
    <div>
      <a
        className="py-4 px-8 bg-red-700 inline-block rounded-full text-white font-bold text-2xl hover:bg-red-600"
        href={props.link}
      >
        {props.text}
      </a>
    </div>
  );
}
