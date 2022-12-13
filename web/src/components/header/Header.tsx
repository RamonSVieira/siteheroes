import { Button } from "../utils/Button";
import { ToggleButton } from "../utils/ToggleButton";

export function Header() {
  return (
    <div className={`bg-header dark:bg-zinc-800`}>
      <div className="py-6 max-w-5xl mx-auto flex justify-between items-center font-comic text-white">
        <div>
          <h2 className="text-4xl">LOGO</h2>
        </div>

        <div>
          <nav>
            <ul className="flex gap-9 text-2xl">
              <li>
                <a href="#">Início</a>
              </li>
              <li>
                <a href="#">Histórias</a>
              </li>
              <li>
                <a href="#">Sobre</a>
              </li>
              <li>
                <a href="#">Personagens</a>
              </li>
            </ul>
          </nav>
        </div>

        <div>
          <Button text="Contribua" />
        </div>
        <div>
          <ToggleButton />
        </div>
      </div>
    </div>
  );
}
