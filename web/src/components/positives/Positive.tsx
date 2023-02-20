import { Card } from "../main/Card";
import ilustration from "../../assets/ilustration.png";

export function Positive() {
  return (
    <div className="mt-32 md:mt-36 lg:mt-52 2xl:mt-64 mb-20 py-6 px-6 max-w-5xl mx-auto ">
      <h3 className="text-center text-3xl font-semibold">
        Benefícios da leitura
      </h3>

      <div className="flex flex-col md:flex-row items-center justify-around flex-wrap gap-6 m-auto">
        <Card
          urlImg={ilustration}
          title="Raciocínio"
          paragraph="Can I go now, Mr. Strickland? Erased from existence. Listen, Doc. he's an"
        />
        <Card
          urlImg={ilustration}
          title="Raciocínio"
          paragraph="Can I go now, Mr. Strickland? Erased from existence. Listen, Doc. he's an"
        />
        <Card
          urlImg={ilustration}
          title="Raciocínio"
          paragraph="Can I go now, Mr. Strickland? Erased from existence. Listen, Doc. he's an"
        />
      </div>
    </div>
  );
}
