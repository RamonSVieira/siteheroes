interface cardProps {
  urlImg: string;
  title: string;
  paragraph: string;
}

export function Card(props: cardProps) {
  return (
    <div className="max-w-[364px] bg-primary dark:bg-secondary rounded-2xl p-6 relative pt-44 flex flex-col gap-5 mt-32">
      <img src={props.urlImg} alt="" className="absolute -top-24" />
      <h4 className="text-4xl font-bold">{props.title}</h4>
      <p className="text-2xl">{props.paragraph}</p>
    </div>
  );
}
