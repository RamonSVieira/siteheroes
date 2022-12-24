import { Button } from "../utils/Button";
import heroeImg from "../../assets/heroes-img.png";
import wave from "/wave.svg";

export function Main() {
  return (
    <div className="bg-header dark:bg-zinc-800 relative">
      <div className="py-6 max-w-5xl mx-auto flex items-center flex-col gap-10 text-primary-text dark:text-white">
        <h1 className="font-bold text-6xl text-center">Lorem Ipsum</h1>
        <p className="max-w-2xl text-2xl font-semibold">
          Are you okay? Biff. Welcome to my latest experiment. It's the one I've
          been waiting for all my life. Hey boy, are you alright? Keys?
        </p>
        <Button text="Ler Histórias" link="#" />
        <img src={heroeImg} alt="" />

        <div className="absolute w-full h-52 bottom-[-160px] -z-10">
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
      </div>
    </div>
  );
}
