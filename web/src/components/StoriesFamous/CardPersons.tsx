interface CardPersonsProps {
  urlCard: string;
  urlLogo: string;
  categoria1: string;
  categoria2: string;
  categoria3: string;
  title: string;
  subtitle: string;
  villain: boolean;
}

export default function CardPersons(props: CardPersonsProps) {
  return (
    <a
      className={`w-80 grid grid-cols-3 grid-rows-[1fr_auto] ${
        props.villain ? "bg-[#6A3889]" : "bg-[#FC9331]"
      }  rounded-2xl overflow-hidden text-white font-semibold`}
      href=""
    >
      <div className="col-span-2">
        <img
          className="w-full h-full object-cover"
          src={props.urlCard}
          alt=""
        />
      </div>
      <div className="flex flex-col items-stretch gap-3 pt-2 border-l-4 border-white">
        <img src={props.urlLogo} alt="" />
        <span
          className={`text-center ${
            props.villain ? "bg-[#602186]" : "bg-[#E85D0E]"
          }`}
        >
          {props.categoria1}
        </span>
        <span
          className={`text-center ${
            props.villain ? "bg-[#602186]" : "bg-[#E85D0E]"
          }`}
        >
          {props.categoria2}
        </span>
        <span
          className={`text-center ${
            props.villain ? "bg-[#602186]" : "bg-[#E85D0E]"
          }`}
        >
          {props.categoria3}
        </span>
      </div>
      <div className="col-span-3 p-2 border-t-4 border-white">
        <h3 className="text-2xl">{props.title}</h3>
        <p className="text-xl">{props.subtitle}</p>
      </div>
    </a>
  );
}
