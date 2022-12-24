import { Card } from "../main/Card";
import ilustration from "../../assets/ilustration.png";

export function Positive() {
  return (
    <div className="mt-64 py-6 px-6 max-w-5xl mx-auto ">
      <h3 className="text-center text-4xl font-semibold">
        Benefícios da leitura
      </h3>

      <div className="flex gap-6 m-auto">
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
