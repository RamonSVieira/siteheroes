interface buttonProps {
  text: string;
}

export function Button(props: buttonProps) {
  return (
    <div>
      <a
        className="py-4 px-8 bg-red-600 inline-block rounded-full text-white font-bold text-2xl "
        href="#"
      >
        {props.text}
      </a>
    </div>
  );
}
