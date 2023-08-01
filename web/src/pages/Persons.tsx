import superman from "../assets/iconHeroes/superman.png";
import batman from "../assets/iconHeroes/batman.png";
import coringa from "../assets/iconHeroes/coringa.png";
import cap from "../assets/iconHeroes/cap.png";
import flash from "../assets/iconHeroes/flash.png";
import panter from "../assets/iconHeroes/panter.png";
import wonder from "../assets/iconHeroes/wonder.png";
import ironman from "../assets/iconHeroes/ironman.png";
import wanda from "../assets/iconHeroes/wanda.png";
import arrow from "../assets/iconHeroes/arrow.png";
import spider from "../assets/iconHeroes/spider.png";

import Csuperman from "../assets/iconHQ/superman.png";
import Cbatman from "../assets/iconHQ/batman.png";
import Ccoringa from "../assets/iconHQ/coringa.png";
import Ccap from "../assets/iconHQ/cap.png";
import Cflash from "../assets/iconHQ/flash.png";
import Cpantera from "../assets/iconHQ/pantera.png";
import Cwonder from "../assets/iconHQ/wonder.png";
import CironMan from "../assets/iconHQ/ironMan.png";
import Cwanda from "../assets/iconHQ/wanda.png";
import Carrow from "../assets/iconHQ/arrow.png";
import Cmiranha from "../assets/iconHQ/miranha.png";

import { useTranslation } from "react-i18next";

import { IconHeroe } from "../components/utils/IconHeroe";
import { useState } from "react";
import { Modal } from "../components/StoriesFamous/Modal";

const heroes: Hero[] = [
  {
    id: 1,
    image: Csuperman,
    name: "Superman",
    title: "O Que Aconteceu com o Homem do Amanhã?",
    story:
      '"O Que Aconteceu com o Homem do Amanhã?" é uma história única e especial que se passa no universo pré-Crise nas Infinitas Terras da DC Comics. Ela foi criada para ser uma despedida do Superman da Era de Prata, que durou por décadas, antes do reboot da DC Comics conhecido como "Crise nas Infinitas Terras". A narrativa começa anos após o presente do Universo DC, quando Lois Lane, agora uma idosa, está escrevendo suas memórias sobre o último encontro com o Superman. Ela relembra eventos que aconteceram pouco antes da suposta morte do Homem de Aço. Superman se encontra enfrentando uma série de ameaças poderosas que vão desde seus clássicos inimigos, como Lex Luthor e o Parasita, até novos e terríveis adversários, como o Sr. Mxyzptlk, cujas brincadeiras malignas se tornam mais perigosas do que nunca. À medida que os eventos se desenrolam, o Homem de Aço é empurrado até o limite, enfrentando desafios que testam sua coragem, força e moral. Ele é forçado a tomar decisões difíceis e lidar com as consequências de suas ações. A história explora a humanidade de Superman, mostrando seu amor por Lois Lane e seus amigos, bem como sua luta para equilibrar seu papel como herói e como ser humano. A narrativa culmina em um confronto épico com um vilão surpreendente, que ameaça tudo o que Superman valoriza. O final da história é emocional e impactante, refletindo sobre o legado do herói e seu significado para o mundo.',
  },
  {
    id: 2,
    image: Cbatman,
    name: "Batman",
    title: "O cavaleiro das trevas",
    story:
      '"O Cavaleiro das Trevas" é ambientado em um futuro distópico, em um momento em que Bruce Wayne, o Batman, está aposentado há dez anos. Gotham City está mergulhada no caos e na criminalidade, com uma nova gangue de delinquentes chamada "Mutantes" dominando as ruas.Em meio a esse cenário caótico, Bruce Wayne se sente desiludido e impotente diante da corrupção e violência que tomaram conta da cidade. No entanto, quando ele testemunha um ato de violência brutal, ele é despertado do seu retiro e decide que não pode mais ficar à margem.Motivado pelo desejo de restaurar a ordem em Gotham, Bruce Wayne retoma o manto do Batman, mesmo que a sociedade e a polícia o considerem um vigilante fora da lei. Ao mesmo tempo, uma figura carismática chamada "O Líder" emerge na cidade, atraindo seguidores e se tornando uma ameaça ainda maior. Enquanto combate os Mutantes e outros vilões clássicos de Gotham City, Batman também enfrenta a oposição das autoridades, incluindo o Comissário Gordon e o governo, que vêem o Cavaleiro das Trevas como uma ameaça à estabilidade social. A história também introduz uma nova Robin, Carrie Kelley, uma adolescente que se torna a aliada do Batman em sua luta contra o crime. Conforme a narrativa avança, Batman enfrenta seus próprios demônios internos e é confrontado com sua mortalidade. Ele encara o dilema de ser um símbolo de esperança e justiça em uma cidade desesperançada e sem lei.',
  },
  {
    id: 3,
    image: Ccoringa,
    name: "Coringa",
    title: "A Piada Mortal",
    story:
      '"A Piada Mortal" é uma história icônica que explora a relação complexa entre Batman e o Coringa, enquanto mergulha nas origens e motivações do Palhaço do Crime. A narrativa se desdobra em duas tramas paralelas. A primeira trama acompanha o Coringa em uma tentativa de provar que qualquer pessoa, quando submetida a um dia ruim, pode ser levada à loucura. Para provar seu ponto, ele ataca o Comissário James Gordon, atirando e paralisando sua filha Barbara Gordon, também conhecida como Batgirl, deixando-a gravemente ferida. Em seguida, o vilão rapta o Comissário, submetendo-o a uma série de eventos traumáticos e perturbadores em uma tentativa de quebrar sua sanidade. Enquanto isso, a segunda trama explora a origem do Coringa. A história mostra como um comediante falido, conhecido como Jack Napier, se tornou o Coringa após um terrível acidente em uma fábrica química, que o transformou em um psicopata. O passado e o presente se entrelaçam à medida que o Coringa tenta forçar Batman a admitir que eles são dois lados da mesma moeda, ambos levados a insanidade após acontecimentos traumáticos em suas vidas. Batman se esforça para resistir às provocações do Coringa, mantendo sua postura de que ele é o oposto do vilão e que a loucura é uma escolha. A história culmina em um confronto emocionante entre Batman e o Coringa no Parque de Diversões, onde as escolhas de ambos têm consequências devastadoras. A trama levanta questões profundas sobre a natureza da insanidade, da moralidade e da essência dos personagens, deixando os leitores com uma reflexão sobre o que realmente define heróis e vilões.',
  },
  {
    id: 4,
    image: Ccap,
    name: "Capitão América",
    title: "O soldado invernal",
    story:
      '"O Soldado Invernal" apresenta Steve Rogers, o Capitão América, enfrentando uma série de ameaças, incluindo um misterioso assassino conhecido como Soldado Invernal, que aparentemente possui conexões com o seu passado. A história começa com o Capitão América descobrindo que seu antigo parceiro e amigo, Bucky Barnes, que todos acreditavam estar morto, está vivo e atuando como o temível Soldado Invernal, um assassino altamente treinado e impiedoso. O Soldado Invernal é usado como uma arma letal pela organização terrorista russa conhecida como "O Círculo" ("The Red Room"), que o mantém sob controle mental e o utiliza para realizar operações secretas. Ao longo da história, o Capitão América deve enfrentar o choque emocional de reencontrar Bucky, um dos poucos sobreviventes da Segunda Guerra Mundial que ele considerava perdido para sempre. Steve Rogers está determinado a resgatar seu amigo do controle do Círculo e trazê-lo de volta à luz, mesmo que isso signifique enfrentar uma das maiores provações de sua carreira heroica. Enquanto investiga as atividades do Soldado Invernal e do Círculo, o Capitão América descobre uma trama conspiratória que ameaça a segurança nacional e põe em risco a confiança nas instituições governamentais dos Estados Unidos. Ele se vê diante de dilemas éticos e morais, questionando quem ele pode confiar e o que é necessário para proteger a liberdade e a justiça. Ao longo da narrativa, o Capitão América recebe ajuda de aliados, incluindo a Viúva Negra (Natasha Romanoff), Sam Wilson (o Falcão) e Sharon Carter. Juntos, eles enfrentam adversários poderosos, desvendam conspirações e lutam para revelar a verdade por trás do Soldado Invernal e de suas próprias origens.',
  },
  {
    id: 5,
    image: Cflash,
    name: "Flash",
    title: "Flashpoint",
    story:
      '"Flashpoint" é uma saga que redefine o Universo DC, explorando os conceitos de realidades alternativas e viagens no tempo. A história começa com Barry Allen, o Flash, acordando em uma linha do tempo completamente diferente da que ele conhecia. Nessa realidade alternativa, os heróis da DC estão em situações muito diferentes das que ele se lembra. Barry logo descobre que ele não tem mais seus poderes de velocidade, e não há sinal de que ele tenha sido o Flash. Além disso, ele descobre que sua mãe, que foi assassinada em sua linha do tempo original, está viva nessa realidade. Conforme Barry explora essa nova linha do tempo, ele descobre que a alteração fundamental ocorreu quando ele viajou no tempo para impedir o assassinato de sua mãe. Essa ação desencadeou uma série de eventos catastróficos que resultaram na mudança drástica da realidade. Nessa nova realidade, os heróis da DC estão em situações desesperadoras e conflitantes. O Batman é Thomas Wayne, o pai de Bruce Wayne, que se tornou o Cavaleiro das Trevas após a morte de seu filho. O Superman está aprisionado pelo governo desde que sua nave espacial caiu na Terra, e a Mulher Maravilha lidera uma guerra entre Amazonas e Atlantes. À medida que Barry tenta restaurar a linha do tempo original, ele enfrenta grandes desafios e descobre que algumas mudanças podem ser irreversíveis. Ele precisa lidar com as consequências de suas ações e fazer escolhas difíceis para corrigir a realidade e salvar o mundo.',
  },
  {
    id: 6,
    image: Cpantera,
    name: "Pantera",
    title: "Uma Nação Sob Nossos Pés",
    story:
      '"Uma Nação Sob Nossos Pés" apresenta T Challa, o Pantera Negra, enfrentando uma crise política em Wakanda, o reino fictício africano que ele governa. A história começa com Wakanda em meio a uma série de revoltas e protestos liderados por uma misteriosa rebelião conhecida como "Os Queimadores de Ervas" ("The People"), que ameaçam desestabilizar o país. A crise é desencadeada por uma série de eventos, incluindo a destruição de um importante local sagrado em Wakanda e o desaparecimento de um objeto misterioso e poderoso, o Coração da Pantera. Enquanto enfrenta essas ameaças internas, o Pantera Negra também precisa lidar com a desconfiança e descontentamento de seu povo em relação à monarquia e à liderança de T Challa. Muitos wakandianos começam a questionar se o Pantera Negra é o verdadeiro protetor de Wakanda ou se ele serve apenas a seus próprios interesses. Em meio ao caos, T Challa deve tomar decisões difíceis e enfrentar seus próprios desafios pessoais, incluindo a busca por sua identidade como rei, super-herói e indivíduo. Ele também enfrenta a responsabilidade de equilibrar tradição e progresso para garantir o futuro de sua nação. Ao longo da história, o Pantera Negra recebe ajuda de aliados confiáveis, como sua irmã Shuri, a Rainha Ramonda e membros de sua guarda real, os Dora Milaje. Juntos, eles trabalham para descobrir a verdade por trás dos acontecimentos e restaurar a estabilidade em Wakanda.',
  },
  {
    id: 7,
    image: Cwonder,
    name: "Mulher Maravilha",
    title: "Deus e Mortais",
    story:
      '"Deuses e Mortais" é uma história de origem da Mulher-Maravilha, que apresenta a icônica heroína amazona ao universo pós-Crise nas Infinitas Terras da DC Comics. A trama começa com a chegada do piloto de avião Steve Trevor à misteriosa ilha de Themyscira, lar das Amazonas, após um acidente aéreo. Diana, a princesa das Amazonas e filha da Rainha Hipólita, encontra Trevor e decide ajudá-lo a retornar ao mundo dos homens. A Rainha Hipólita, preocupada com o destino de sua filha, participa de uma antiga tradição das Amazonas para escolher uma campeã para levar Steve Trevor de volta ao mundo exterior. Diana, secretamente disfarçada como uma guerreira mascarada, vence o torneio e é escolhida para essa importante tarefa. Ela recebe as roupas da Mulher-Maravilha e parte para o mundo dos homens, deixando para trás a ilha paradisíaca e seus habitantes. Chegando a Nova York com Steve Trevor, Diana enfrenta o mundo moderno pela primeira vez e rapidamente se torna a heroína conhecida como Mulher-Maravilha. Ela adota a identidade de Diana Prince e passa a lutar contra o mal e a injustiça ao lado de Trevor e outros aliados. No entanto, a jornada de Diana está longe de ser fácil. Ela deve enfrentar o desafio de ser uma estrangeira em uma terra estranha, enquanto lida com ameaças poderosas, como o deus grego da guerra, Ares, e sua irmã malévola, a Deusa Cheetah. Ares, planejando semear o caos e a guerra no mundo dos homens, busca obter a influência sobre a humanidade, enquanto a Cheetah é uma das inimigas mais perigosas da Mulher-Maravilha. Ao longo da história, a Mulher-Maravilha deve provar sua força, compaixão e sabedoria, defendendo a paz e a justiça contra as forças do mal. Ela se esforça para encontrar seu lugar neste novo mundo e combate os males que ameaçam a humanidade, mantendo seus princípios e valores como uma heroína inspiradora.',
  },
  {
    id: 8,
    image: CironMan,
    name: "Homem de Ferro",
    title: "Extremis",
    story:
      '"Extremis" é uma história que redefine o Homem de Ferro e sua mitologia, atualizando o personagem para o século XXI. A trama explora temas de tecnologia, ética, guerra e responsabilidade, enquanto mergulha nas origens e evolução do herói. Na história, Tony Stark, o Homem de Ferro, é abordado por Maya Hansen, uma cientista que trabalhou em um projeto chamado Extremis. O Extremis é uma tecnologia experimental que permite a reestruturação do corpo humano e a conexão direta do usuário com a tecnologia. Maya revela que o Extremis foi roubado por terroristas e que eles pretendem vendê-lo para os mais altos lances, incluindo grupos extremistas. Tony Stark, sentindo-se responsável por sua tecnologia ter caído em mãos erradas, decide enfrentar a ameaça e impedir que o Extremis seja usado para fins nefastos. Ele se confronta com uma escolha moral e ética, já que o Extremis tem o potencial de levar a humanidade a um novo nível de evolução, mas também representa um perigo significativo se cair em mãos erradas. Para enfrentar a ameaça, Tony Stark decide implantar o Extremis em seu próprio corpo, tornando-se mais poderoso e integrado com a tecnologia do que nunca. Ele passa por uma transformação física e mental, aprimorando suas habilidades como Homem de Ferro. Enquanto Tony se adapta ao Extremis e sua nova conexão com a tecnologia, ele enfrenta inimigos poderosos e desvenda uma conspiração que ameaça o mundo inteiro. A história culmina em um confronto épico, onde o Homem de Ferro precisa usar todo o seu poder e inteligência para enfrentar a ameaça do Extremis.',
  },
  {
    id: 9,
    image: Cwanda,
    name: "Feiticeira Escarlate",
    title: "The Amazing spider man",
    story: "HISTÓRIA DO HOMEM ARANHA",
  },
  {
    id: 10,
    image: Carrow,
    name: "Arqueiro Verde",
    title: "The Amazing spider man",
    story: "HISTÓRIA DO HOMEM ARANHA",
  },
  {
    id: 11,
    image: Cmiranha,
    name: "Homem Aranha",
    title: "O espetacular homem aranha",
    story:
      'A história começa em Nova York, onde conhecemos Peter Parker, um jovem estudante do ensino médio. Peter é um rapaz inteligente, porém um tanto desajeitado e socialmente deslocado. Sua vida muda completamente quando ele participa de uma excursão científica em uma exposição de aranhas. Durante essa excursão, Peter é picado por uma aranha geneticamente modificada. Ele logo descobre que a picada lhe concedeu poderes surpreendentes. Ele se torna mais forte, ágil e adquire a habilidade de escalar paredes. Assim, o Homem-Aranha nasce! No início, Peter vê seus poderes como uma oportunidade de obter dinheiro fácil e fama. Ele cria um traje vermelho e azul e se apresenta em uma luta livre, adotando o nome "Homem-Aranha". No entanto, ele acaba aprendendo uma dura lição quando permite que um ladrão fuja, acreditando que isso não era mais responsabilidade dele. Infelizmente, essa escolha tem consequências trágicas. O mesmo ladrão acaba assassinando seu tio Ben, uma pessoa querida e importante em sua vida. Consumido pela culpa, Peter percebe que tem a responsabilidade de usar seus poderes para proteger os inocentes. Ele aprende que "com grandes poderes vêm grandes responsabilidades". Assim, o Homem-Aranha emerge como um verdadeiro herói. Ele patrulha as ruas de Nova York, lutando contra o crime e enfrentando uma galeria de vilões perigosos. Entre seus adversários mais notórios estão o Duende Verde, o Doutor Octopus, o Venom e muitos outros. Esses vilões testam suas habilidades, inteligência e força de vontade em batalhas épicas. No entanto, a vida de Peter Parker também é explorada. Ele enfrenta desafios pessoais, como equilibrar sua vida como estudante, seu trabalho como fotógrafo freelancer no Clarim Diário e seus relacionamentos pessoais, especialmente com sua amada Mary Jane Watson. A vida de Peter é repleta de altos e baixos, e ele precisa encontrar um equilíbrio entre sua vida dupla como Homem-Aranha e suas responsabilidades como Peter Parker. Ao longo dos anos, o Homem-Aranha se tornou um símbolo de esperança e inspiração para as pessoas de Nova York e além. Sua coragem, resiliência e senso de justiça o tornaram um dos heróis mais amados e populares do universo dos quadrinhos. A narrativa do Homem-Aranha é repleta de aventuras emocionantes, momentos de humor e profundidade emocional. Seja enfrentando desafios pessoais ou lutando contra super vilões, o Homem-Aranha sempre se mantém fiel aos seus princípios e continua a proteger os inocentes.',
  },
];

interface Hero {
  id: number;
  image: string;
  name: string;
  title: string;
  story: string;
}

export function Persons() {
  const { t } = useTranslation();

  const [selectedHero, setSelectedHero] = useState<Hero | null>(null);

  const handleHeroClick = (hero: Hero) => {
    setSelectedHero(hero);
    setOpenModal(true);
  };

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="container py-6 px-6 max-w-5xl mx-auto flex items-center flex-col gap-10 text-primary-text dark:text-white">
      <div className="absolute w-full h-52 top-[144px] z-99 ">
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

      <h1 className="mt-48 2xl:mt-60 text-6xl md:text-7xl text-center font-badaboom text-secondary-title drop-shadow-title2 dark:text-primary-title dark:drop-shadow-title1">
        {t("tituloPersonagens")}
      </h1>

      {selectedHero && (
        <Modal
          hero={selectedHero}
          isOpen={openModal}
          setModalOpen={() => setOpenModal(!openModal)}
        />
      )}

      <div className="flex gap-10 flex-wrap">
        <IconHeroe
          urlImage={superman}
          name=""
          className="bg-[#51AAFF] w-[200px] h-[200px] rounded-full relative hover:border-4 border-red-800 dark:border-white"
          onClick={() => handleHeroClick(heroes[0])}
        />

        <IconHeroe
          urlImage={batman}
          name=""
          className="bg-[#32322E] w-[200px] h-[200px] rounded-full relative hover:border-4 border-black dark:border-white"
          onClick={() => handleHeroClick(heroes[1])}
        />

        <IconHeroe
          urlImage={coringa}
          name=""
          className="bg-[#9C76F0] w-[200px] h-[200px] rounded-full relative hover:border-4 border-[#0C380B] dark:border-white"
          onClick={() => handleHeroClick(heroes[2])}
        />

        <IconHeroe
          urlImage={cap}
          name=""
          className="bg-[#7B9FCA] w-[200px] h-[200px] rounded-full relative hover:border-4 border-[#6A1A18] dark:border-white"
          onClick={() => handleHeroClick(heroes[3])}
        />

        <IconHeroe
          urlImage={flash}
          name=""
          className="bg-[#EBAF50] w-[200px] h-[200px] rounded-full relative hover:border-4 border-[#E12C28] dark:border-white"
          onClick={() => handleHeroClick(heroes[4])}
        />

        <IconHeroe
          urlImage={panter}
          name=""
          className="bg-[#6777A9] w-[200px] h-[200px] rounded-full relative hover:border-4 border-[#09090B] dark:border-white"
          onClick={() => handleHeroClick(heroes[5])}
        />

        <IconHeroe
          urlImage={wonder}
          name=""
          className="bg-[#851824] w-[200px] h-[200px] rounded-full relative hover:border-4 border-[#013D6C] dark:border-white"
          onClick={() => handleHeroClick(heroes[6])}
        />

        <IconHeroe
          urlImage={ironman}
          name=""
          className="bg-[#FFE98D] w-[200px] h-[200px] rounded-full relative hover:border-4 border-[#762220] dark:border-white"
          onClick={() => handleHeroClick(heroes[7])}
        />

        <IconHeroe
          urlImage={wanda}
          name=""
          className="bg-[#D98D9C] w-[200px] h-[200px] rounded-full relative hover:border-4 border-[#E43325] dark:border-white"
          onClick={() => handleHeroClick(heroes[8])}
        />

        <IconHeroe
          urlImage={arrow}
          name=""
          className="bg-[#ECEFC8] w-[200px] h-[200px] rounded-full relative hover:border-4 border-[#5C8C54] dark:border-white"
          onClick={() => handleHeroClick(heroes[9])}
        />

        <IconHeroe
          urlImage={spider}
          name=""
          className="bg-[#416984] w-[200px] h-[200px] rounded-full relative hover:border-4 border-[#B5000F] dark:border-white"
          onClick={() => handleHeroClick(heroes[10])}
        />
      </div>
    </div>
  );
}
