import CardPersons from "./CardPersons";

import spiderMan from "../../assets/hq/spiderman.png";
import coringa from "../../assets/hq/coringa.png";
import stark from "../../assets/hq/stark.png";
import batman from "../../assets/hq/batman.png";
import arlequina from "../../assets/hq/arlequina.png";
import wanda from "../../assets/hq/wanda.png";
import thanos from "../../assets/hq/thanos.png";
import cap from "../../assets/hq/cap.png";
import arrow from "../../assets/hq/arrow.png";
import superman from "../../assets/hq/superman.png";
import loki from "../../assets/hq/loki.png";

import marvelLogo from "../../assets/marvel.png";
import { useTranslation } from "react-i18next";
import { Modal } from "./Modal";
import { useState } from "react";

import Chomiranha from "../../assets/iconHQ/miranha.png";
import Ccoringa from "../../assets/iconHQ/coringa.png";
import CironMan from "../../assets/iconHQ/ironMan.png";
import Carlequina from "../../assets/iconHQ/arlequina.png";
import Cbatman from "../../assets/iconHQ/batman.png";
import Cwanda from "../../assets/iconHQ/wanda.png";
import Ccap from "../../assets/iconHQ/cap.png";
import Cthanos from "../../assets/iconHQ/thanos.png";
import Carrow from "../../assets/iconHQ/arrow.png";
import Csuperman from "../../assets/iconHQ/superman.png";
import Cloki from "../../assets/iconHQ/loki.png";

interface Hero {
  id: number;
  image: string;
  name: string;
  title: string;
  story: string;
}

const heroes: Hero[] = [
  {
    id: 1,
    image: Chomiranha,
    name: "Homem Aranha",
    title: "O espetacular homem aranha",
    story:
      'A história começa em Nova York, onde conhecemos Peter Parker, um jovem estudante do ensino médio. Peter é um rapaz inteligente, porém um tanto desajeitado e socialmente deslocado. Sua vida muda completamente quando ele participa de uma excursão científica em uma exposição de aranhas. Durante essa excursão, Peter é picado por uma aranha geneticamente modificada. Ele logo descobre que a picada lhe concedeu poderes surpreendentes. Ele se torna mais forte, ágil e adquire a habilidade de escalar paredes. Assim, o Homem-Aranha nasce! No início, Peter vê seus poderes como uma oportunidade de obter dinheiro fácil e fama. Ele cria um traje vermelho e azul e se apresenta em uma luta livre, adotando o nome "Homem-Aranha". No entanto, ele acaba aprendendo uma dura lição quando permite que um ladrão fuja, acreditando que isso não era mais responsabilidade dele. Infelizmente, essa escolha tem consequências trágicas. O mesmo ladrão acaba assassinando seu tio Ben, uma pessoa querida e importante em sua vida. Consumido pela culpa, Peter percebe que tem a responsabilidade de usar seus poderes para proteger os inocentes. Ele aprende que "com grandes poderes vêm grandes responsabilidades". Assim, o Homem-Aranha emerge como um verdadeiro herói. Ele patrulha as ruas de Nova York, lutando contra o crime e enfrentando uma galeria de vilões perigosos. Entre seus adversários mais notórios estão o Duende Verde, o Doutor Octopus, o Venom e muitos outros. Esses vilões testam suas habilidades, inteligência e força de vontade em batalhas épicas. No entanto, a vida de Peter Parker também é explorada. Ele enfrenta desafios pessoais, como equilibrar sua vida como estudante, seu trabalho como fotógrafo freelancer no Clarim Diário e seus relacionamentos pessoais, especialmente com sua amada Mary Jane Watson. A vida de Peter é repleta de altos e baixos, e ele precisa encontrar um equilíbrio entre sua vida dupla como Homem-Aranha e suas responsabilidades como Peter Parker. Ao longo dos anos, o Homem-Aranha se tornou um símbolo de esperança e inspiração para as pessoas de Nova York e além. Sua coragem, resiliência e senso de justiça o tornaram um dos heróis mais amados e populares do universo dos quadrinhos. A narrativa do Homem-Aranha é repleta de aventuras emocionantes, momentos de humor e profundidade emocional. Seja enfrentando desafios pessoais ou lutando contra super vilões, o Homem-Aranha sempre se mantém fiel aos seus princípios e continua a proteger os inocentes.',
  },
  {
    id: 2,
    image: Ccoringa,
    name: "Coringa",
    title: "A Piada Mortal",
    story:
      '"A Piada Mortal" é uma história icônica que explora a relação complexa entre Batman e o Coringa, enquanto mergulha nas origens e motivações do Palhaço do Crime. A narrativa se desdobra em duas tramas paralelas. A primeira trama acompanha o Coringa em uma tentativa de provar que qualquer pessoa, quando submetida a um dia ruim, pode ser levada à loucura. Para provar seu ponto, ele ataca o Comissário James Gordon, atirando e paralisando sua filha Barbara Gordon, também conhecida como Batgirl, deixando-a gravemente ferida. Em seguida, o vilão rapta o Comissário, submetendo-o a uma série de eventos traumáticos e perturbadores em uma tentativa de quebrar sua sanidade. Enquanto isso, a segunda trama explora a origem do Coringa. A história mostra como um comediante falido, conhecido como Jack Napier, se tornou o Coringa após um terrível acidente em uma fábrica química, que o transformou em um psicopata. O passado e o presente se entrelaçam à medida que o Coringa tenta forçar Batman a admitir que eles são dois lados da mesma moeda, ambos levados a insanidade após acontecimentos traumáticos em suas vidas. Batman se esforça para resistir às provocações do Coringa, mantendo sua postura de que ele é o oposto do vilão e que a loucura é uma escolha. A história culmina em um confronto emocionante entre Batman e o Coringa no Parque de Diversões, onde as escolhas de ambos têm consequências devastadoras. A trama levanta questões profundas sobre a natureza da insanidade, da moralidade e da essência dos personagens, deixando os leitores com uma reflexão sobre o que realmente define heróis e vilões.',
  },
  {
    id: 3,
    image: CironMan,
    name: "Homem de Ferro",
    title: "Extremis",
    story:
      '"Extremis" é uma história que redefine o Homem de Ferro e sua mitologia, atualizando o personagem para o século XXI. A trama explora temas de tecnologia, ética, guerra e responsabilidade, enquanto mergulha nas origens e evolução do herói. Na história, Tony Stark, o Homem de Ferro, é abordado por Maya Hansen, uma cientista que trabalhou em um projeto chamado Extremis. O Extremis é uma tecnologia experimental que permite a reestruturação do corpo humano e a conexão direta do usuário com a tecnologia. Maya revela que o Extremis foi roubado por terroristas e que eles pretendem vendê-lo para os mais altos lances, incluindo grupos extremistas. Tony Stark, sentindo-se responsável por sua tecnologia ter caído em mãos erradas, decide enfrentar a ameaça e impedir que o Extremis seja usado para fins nefastos. Ele se confronta com uma escolha moral e ética, já que o Extremis tem o potencial de levar a humanidade a um novo nível de evolução, mas também representa um perigo significativo se cair em mãos erradas. Para enfrentar a ameaça, Tony Stark decide implantar o Extremis em seu próprio corpo, tornando-se mais poderoso e integrado com a tecnologia do que nunca. Ele passa por uma transformação física e mental, aprimorando suas habilidades como Homem de Ferro. Enquanto Tony se adapta ao Extremis e sua nova conexão com a tecnologia, ele enfrenta inimigos poderosos e desvenda uma conspiração que ameaça o mundo inteiro. A história culmina em um confronto épico, onde o Homem de Ferro precisa usar todo o seu poder e inteligência para enfrentar a ameaça do Extremis.',
  },
  {
    id: 4,
    image: Carlequina,
    name: "Arlequina",
    title: "Batana begins",
    story: "HISTÓRIA DO BATMAN",
  },
  {
    id: 5,
    image: Cbatman,
    name: "Batman",
    title: "O cavaleiro das trevas",
    story:
      '"O Cavaleiro das Trevas" é ambientado em um futuro distópico, em um momento em que Bruce Wayne, o Batman, está aposentado há dez anos. Gotham City está mergulhada no caos e na criminalidade, com uma nova gangue de delinquentes chamada "Mutantes" dominando as ruas.Em meio a esse cenário caótico, Bruce Wayne se sente desiludido e impotente diante da corrupção e violência que tomaram conta da cidade. No entanto, quando ele testemunha um ato de violência brutal, ele é despertado do seu retiro e decide que não pode mais ficar à margem.Motivado pelo desejo de restaurar a ordem em Gotham, Bruce Wayne retoma o manto do Batman, mesmo que a sociedade e a polícia o considerem um vigilante fora da lei. Ao mesmo tempo, uma figura carismática chamada "O Líder" emerge na cidade, atraindo seguidores e se tornando uma ameaça ainda maior. Enquanto combate os Mutantes e outros vilões clássicos de Gotham City, Batman também enfrenta a oposição das autoridades, incluindo o Comissário Gordon e o governo, que vêem o Cavaleiro das Trevas como uma ameaça à estabilidade social. A história também introduz uma nova Robin, Carrie Kelley, uma adolescente que se torna a aliada do Batman em sua luta contra o crime. Conforme a narrativa avança, Batman enfrenta seus próprios demônios internos e é confrontado com sua mortalidade. Ele encara o dilema de ser um símbolo de esperança e justiça em uma cidade desesperançada e sem lei.',
  },
  {
    id: 6,
    image: Cwanda,
    name: "Wanda",
    title: "Batana begins",
    story: "HISTÓRIA DO BATMAN",
  },
  {
    id: 7,
    image: Ccap,
    name: "Capitão América",
    title: "O soldado invernal",
    story:
      '"O Soldado Invernal" apresenta Steve Rogers, o Capitão América, enfrentando uma série de ameaças, incluindo um misterioso assassino conhecido como Soldado Invernal, que aparentemente possui conexões com o seu passado. A história começa com o Capitão América descobrindo que seu antigo parceiro e amigo, Bucky Barnes, que todos acreditavam estar morto, está vivo e atuando como o temível Soldado Invernal, um assassino altamente treinado e impiedoso. O Soldado Invernal é usado como uma arma letal pela organização terrorista russa conhecida como "O Círculo" ("The Red Room"), que o mantém sob controle mental e o utiliza para realizar operações secretas. Ao longo da história, o Capitão América deve enfrentar o choque emocional de reencontrar Bucky, um dos poucos sobreviventes da Segunda Guerra Mundial que ele considerava perdido para sempre. Steve Rogers está determinado a resgatar seu amigo do controle do Círculo e trazê-lo de volta à luz, mesmo que isso signifique enfrentar uma das maiores provações de sua carreira heroica. Enquanto investiga as atividades do Soldado Invernal e do Círculo, o Capitão América descobre uma trama conspiratória que ameaça a segurança nacional e põe em risco a confiança nas instituições governamentais dos Estados Unidos. Ele se vê diante de dilemas éticos e morais, questionando quem ele pode confiar e o que é necessário para proteger a liberdade e a justiça. Ao longo da narrativa, o Capitão América recebe ajuda de aliados, incluindo a Viúva Negra (Natasha Romanoff), Sam Wilson (o Falcão) e Sharon Carter. Juntos, eles enfrentam adversários poderosos, desvendam conspirações e lutam para revelar a verdade por trás do Soldado Invernal e de suas próprias origens.',
  },
  {
    id: 8,
    image: Cthanos,
    name: "Thanos",
    title: "Batana begins",
    story: "HISTÓRIA DO BATMAN",
  },
  {
    id: 9,
    image: Carrow,
    name: "Arqueira Verdo",
    title: "Batana begins",
    story: "HISTÓRIA DO BATMAN",
  },
  {
    id: 10,
    image: Csuperman,
    name: "Superman",
    title: "O Que Aconteceu com o Homem do Amanhã?",
    story:
      '"O Que Aconteceu com o Homem do Amanhã?" é uma história única e especial que se passa no universo pré-Crise nas Infinitas Terras da DC Comics. Ela foi criada para ser uma despedida do Superman da Era de Prata, que durou por décadas, antes do reboot da DC Comics conhecido como "Crise nas Infinitas Terras". A narrativa começa anos após o presente do Universo DC, quando Lois Lane, agora uma idosa, está escrevendo suas memórias sobre o último encontro com o Superman. Ela relembra eventos que aconteceram pouco antes da suposta morte do Homem de Aço. Superman se encontra enfrentando uma série de ameaças poderosas que vão desde seus clássicos inimigos, como Lex Luthor e o Parasita, até novos e terríveis adversários, como o Sr. Mxyzptlk, cujas brincadeiras malignas se tornam mais perigosas do que nunca. À medida que os eventos se desenrolam, o Homem de Aço é empurrado até o limite, enfrentando desafios que testam sua coragem, força e moral. Ele é forçado a tomar decisões difíceis e lidar com as consequências de suas ações. A história explora a humanidade de Superman, mostrando seu amor por Lois Lane e seus amigos, bem como sua luta para equilibrar seu papel como herói e como ser humano. A narrativa culmina em um confronto épico com um vilão surpreendente, que ameaça tudo o que Superman valoriza. O final da história é emocional e impactante, refletindo sobre o legado do herói e seu significado para o mundo.',
  },
  {
    id: 11,
    image: Cloki,
    name: "Loki",
    title: "Batana begins",
    story: "HISTÓRIA DO BATMAN",
  },
];

export function StoriesFamous() {
  const { t } = useTranslation();

  const [selectedHero, setSelectedHero] = useState<Hero | null>(null);

  const handleHeroClick = (hero: Hero) => {
    setSelectedHero(hero);
    setOpenModal(true);
  };

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="relative">
      {selectedHero && (
        <Modal
          hero={selectedHero}
          isOpen={openModal}
          setModalOpen={() => setOpenModal(!openModal)}
        />
      )}

      <div className="absolute w-full h-52 z-99 ">
        <svg
          className="object-cover w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            className=" fill-primary dark:fill-secondary"
            fill=""
            fill-opacity="1"
            d="M0,256L34.3,224C68.6,192,137,128,206,117.3C274.3,107,343,149,411,149.3C480,149,549,107,617,96C685.7,85,754,107,823,128C891.4,149,960,171,1029,165.3C1097.1,160,1166,128,1234,117.3C1302.9,107,1371,117,1406,122.7L1440,128L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="">
        <div className="max-w-5xl mx-auto pt-6 px-6">
          <div className="mt-48 text-6xl md:text-7xl text-center mb-12 font-badaboom text-secondary-title drop-shadow-title2 tracking-wider dark:text-primary-title dark:drop-shadow-title1">
            {t("mostFamous")}
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            <CardPersons
              urlCard={spiderMan}
              urlLogo={marvelLogo}
              categoria1={t("hero")}
              categoria2="Queens"
              categoria3={t("avenger")}
              title={t("spiderMan")}
              subtitle={t("textSpiderMan")}
              villain={false}
              onClick={() => handleHeroClick(heroes[0])}
            />
            <CardPersons
              urlCard={coringa}
              urlLogo={marvelLogo}
              categoria1={t("villain")}
              categoria2="Gotham"
              categoria3={t("psi")}
              title={t("joker")}
              subtitle={t("textJoker")}
              villain={true}
              onClick={() => handleHeroClick(heroes[1])}
            />
            <CardPersons
              urlCard={stark}
              urlLogo={marvelLogo}
              categoria1={t("hero")}
              categoria2="Nova York"
              categoria3={t("avenger")}
              title={t("ironMan")}
              subtitle={t("textIronMan")}
              villain={false}
              onClick={() => handleHeroClick(heroes[2])}
            />

            <CardPersons
              urlCard={arlequina}
              urlLogo={marvelLogo}
              categoria1={t("villain")}
              categoria2="Gotham"
              categoria3={"Psicótica"}
              title={"Arlequina"}
              subtitle={"No submundo"}
              villain={true}
              onClick={() => handleHeroClick(heroes[3])}
            />

            <CardPersons
              urlCard={batman}
              urlLogo={marvelLogo}
              categoria1={t("hero")}
              categoria2="Gotham"
              categoria3={"Bilionário"}
              title={"Batman"}
              subtitle={"O cavaleiro das trevas"}
              villain={false}
              onClick={() => handleHeroClick(heroes[4])}
            />

            <CardPersons
              urlCard={wanda}
              urlLogo={marvelLogo}
              categoria1={t("hero")}
              categoria2="Sokóvia"
              categoria3={t("avenger")}
              title={"Feiticeira Escarlate"}
              subtitle={"Cruzada das crianças"}
              villain={false}
              onClick={() => handleHeroClick(heroes[5])}
            />

            <CardPersons
              urlCard={cap}
              urlLogo={marvelLogo}
              categoria1={t("hero")}
              categoria2="Nova Iorque"
              categoria3={t("avenger")}
              title={"Capitão América"}
              subtitle={"O primeiro vingador"}
              villain={false}
              onClick={() => handleHeroClick(heroes[6])}
            />

            <CardPersons
              urlCard={thanos}
              urlLogo={marvelLogo}
              categoria1={"Vilão"}
              categoria2="Titã"
              categoria3={"Eternos"}
              title={"Thanos"}
              subtitle={"Relatividade Infinita"}
              villain={true}
              onClick={() => handleHeroClick(heroes[7])}
            />

            <CardPersons
              urlCard={arrow}
              urlLogo={marvelLogo}
              categoria1={t("hero")}
              categoria2="Star City"
              categoria3={"plaboy"}
              title={"Arqueiro Verde"}
              subtitle={"A guerra dos renegados"}
              villain={false}
              onClick={() => handleHeroClick(heroes[8])}
            />

            <CardPersons
              urlCard={superman}
              urlLogo={marvelLogo}
              categoria1={t("hero")}
              categoria2="Krypton"
              categoria3={"Liga da Justiça"}
              title={"Superman"}
              subtitle={"Origem Secreta"}
              villain={false}
              onClick={() => handleHeroClick(heroes[9])}
            />

            <CardPersons
              urlCard={loki}
              urlLogo={marvelLogo}
              categoria1={t("hero")}
              categoria2="Asgard"
              categoria3={"Mentiroso"}
              title={"Loki"}
              subtitle={"Onde mora a trapaça"}
              villain={true}
              onClick={() => handleHeroClick(heroes[10])}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
