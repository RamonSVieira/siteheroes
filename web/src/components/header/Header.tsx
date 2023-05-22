import { Link } from "react-router-dom";

import { Button } from "../utils/Button";
import { ToggleButton } from "../utils/ToggleButton";
import { ButtonMenu } from "./ButtonMenu";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChangeLanguage } from "../utils/ChangeLanguage";


export function Header() {
  const {t}= useTranslation()

  
  const [button, setButton] = useState(false);

  const handleMenu = () => {
    setButton(!button);
    if (button) {
      console.log(true);
    } else {
      console.log(false);
    }
  };
  return (
    <div className={`bg-header dark:bg-zinc-800`}>
      <div className="py-6 px-6 max-w-5xl mx-auto flex justify-between items-center text-primary-text dark:text-white">
        <div className="">
          <Link to="/">
            <svg
              className="fill-primary-text dark:fill-white w-24 h-24"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M44.0876 80C47.9613 77.582 51.6063 74.7832 54.9792 71.6549L54.9805 71.6564L54.9697 72.1895L54.0358 75.6502L65.148 76.1746C63.2694 74.7203 58.7203 72.0899 57.9921 71.2932C59.4485 72.995 60.8277 73.8796 62.5128 75.1845L55.323 74.6778L55.9497 72.3521L55.9835 70.7059V70.7044L55.9984 70.0058C55.9984 70.0058 53.8436 63.9396 53.5688 56.9214C53.5688 56.9214 51.4926 49.395 50.3164 44.4067C50.3164 44.4067 46.3398 51.1291 43.2443 56.4557C43.2443 56.4557 42.3226 61.4015 39.9323 67.4472C39.9323 67.4472 39.2272 68.9484 38.836 70.7249C38.6736 71.4924 39.7591 73.6555 38.4827 75.4701C38.3866 75.6063 38.2486 75.7176 38.0807 75.807L38.0821 75.8084L37.427 76.0296C36.4917 76.2859 34.4655 76.0369 33.4667 75.8509C33.2487 75.4262 34.5278 74.1959 34.969 73.6072C33.7604 74.4932 32.0956 75.0381 32.8264 76.7999C34.3694 77.1119 37.5393 77.6655 38.9416 76.466L44.0876 80ZM58.1802 68.4973C71.6367 54.4126 80 34.6981 80 12.8732C71.2659 7.42214 61.3677 3.8984 50.8077 2.84245C50.6385 3.00355 50.3935 3.16905 50.0633 3.22177C50.1039 4.25429 49.9333 5.1711 50.4991 6.14943C50.759 6.59905 50.5478 6.69864 50.3962 6.82606C49.6288 7.46754 50.6304 8.80615 49.9645 9.40515C48.9683 10.3015 48.9818 11.334 50.2717 11.7382C51.1907 12.0267 52.593 12.0824 53.4727 12.1849C56.5614 12.3855 56.6305 15.1594 58.8069 17.3636C59.933 18.5059 62.0296 21.7294 62.7551 23.2409C63.4805 24.7523 64.0869 25.2605 63.0095 26.5918C62.0187 27.8162 59.2089 31.1788 57.004 32.4793C56.3774 32.8484 56.1567 33.134 56.0593 33.3932C56.4369 33.3317 56.6183 33.4254 56.8037 33.2556C57.0473 33.0315 57.7051 33.5529 55.8806 34.9501C55.8806 34.9501 55.8454 35.3147 56.2961 36.3502C56.7469 37.3856 57.6104 40.0072 58.0016 43.4108C58.3927 46.8145 58.6485 49.7729 57.8649 55.946C57.8649 55.946 59.1669 59.4551 58.3832 65.8391C58.3832 65.8391 58.2817 67.1397 58.1802 68.4973ZM43.7411 2.50853C44.0916 2.0677 44.1607 1.83776 44.8442 1.5097C45.9676 0.970739 47.6365 1.03518 48.7409 1.59171C49.4975 1.96957 50.2907 2.62423 51.1014 2.4602C51.6442 2.05012 51.877 1.84801 52.0489 1.55071C50.1716 2.05452 49.6681 0.708582 48.0818 0.206237C46.1016 -0.42206 43.3946 0.395166 42.6474 2.52171V2.52318C37.8899 2.62423 33.246 3.22324 28.7578 4.27626C21.5234 5.97222 14.584 8.87498 8.17379 12.8732C8.17379 15.2942 8.27801 17.6873 8.48374 20.0965L8.48239 20.095C6.80134 19.9529 5.13789 19.7611 3.50692 19.5326L0 19.0434C1.99235 20.7511 4.13765 22.1864 5.48032 24.5736C6.65922 26.6723 5.91209 27.4076 3.71536 29.1914C7.53088 30.1185 11.253 30.9533 9.21057 35.9635C10.07 36.545 11.1745 37.3666 12.1395 38.3303L14.0588 43.6378L14.0575 43.6393C13.6934 44.3584 13.0626 44.9428 12.5226 45.5359C13.6027 46.1115 14.63 46.6768 15.6343 47.3022H15.6356C20.4 57.5277 26.8453 66.217 35.126 73.3846C35.8069 72.3857 36.3077 71.239 36.4308 70.7191C36.4308 70.7191 36.5635 61.7501 38.5612 55.7893C38.5612 55.7893 38.8658 55.2079 39.0607 52.7767C39.4518 47.9261 41.7731 39.5385 44.2148 35.2532C44.2148 35.2532 42.9114 36.2257 41.9612 35.3367C41.9612 35.3367 41.4807 34.8988 41.2601 34.6454C41.0517 34.4038 41.3102 34.0962 41.6689 34.2749C41.0706 33.6832 40.5414 34.4946 41.1992 35.1024C41.7189 35.5842 42.06 36.1642 42.7354 36.3634C42.2211 37.4779 41.7149 38.7403 41.2398 40.0658C33.7089 46.9477 24.5918 53.61 19.956 49.25C17.6632 47.0927 14.1752 45.2327 14.1752 45.2327C18.2113 40.7937 10.4531 35.552 10.4531 35.552C12.6079 30.2664 6.00548 28.6598 6.00548 28.6598C9.49345 25.8273 3.37969 20.5842 3.37969 20.5842C23.4264 23.3859 33.2366 18.5455 37.2835 15.4406C37.8574 14.373 39.1026 12.8366 41.5592 12.6872C42.9926 12.5525 45.5534 12.1043 45.0377 9.99098C45.0377 9.99098 45.008 9.61166 44.606 9.34218C42.7706 8.11048 43.0521 3.73144 43.7411 2.50853ZM41.5822 33.2497C41.5755 33.2468 41.5728 33.2453 41.5741 33.2438L41.5822 33.2497ZM41.5741 33.2424C39.0498 32.5057 35.3656 31.3033 31.3186 28.8223C29.8609 27.9304 29.0366 27.0985 29.8393 25.2473C30.0545 24.7508 30.2088 24.2046 30.4362 23.7125C32.2471 19.7933 35.4536 17.2142 36.8572 16.4702C32.4285 19.641 31.1779 24.2602 30.5864 25.6237C29.9963 26.9887 30.5688 27.245 31.764 28.0739C33.7171 29.4287 36.6298 30.984 37.8073 31.542C39.0634 32.1396 40.7715 32.6492 41.5741 33.2424ZM55.3352 31.3135C55.3352 31.3135 55.2188 31.0177 54.9981 30.8654C54.9981 30.8654 55.1403 27.9846 54.9833 25.9547C54.9833 25.9547 55.9632 24.846 56.2569 23.1442C56.2569 23.1442 56.8443 24.2426 58.6472 24.9515C58.6472 24.9515 59.0316 25.1404 59.2522 25.2942C56.6629 29.1826 56.2786 30.7468 55.3352 31.3135ZM44.3705 32.0927C44.3705 32.0927 43.9373 30.5344 44.1728 29.5297C44.1728 29.5297 40.9881 26.4439 39.2637 23.4005C39.2637 23.4005 38.2269 24.4257 36.4633 24.8534C36.5039 24.846 37.6693 24.8724 39.1541 24.2822C40.2775 26.0411 42.1602 28.1984 43.6152 29.6703C43.5678 29.9456 43.5245 30.6472 43.7275 31.025C43.5245 30.8771 43.0846 30.5154 42.2265 30.3894C39.4139 27.4251 36.757 25.943 36.757 25.943C38.2107 27.1044 40.628 29.1445 41.9775 30.883C43.04 31.0162 43.5854 31.4219 44.3705 32.0927Z"
              />
            </svg>
          </Link>
        </div>

        <div className="fixed z-50 top-0 right-0">
          <ChangeLanguage></ChangeLanguage>
        </div>

        <div className="hidden lg:block">
          <nav>
            <ul className="flex gap-9 text-2xl font-semibold">
              <li>
                <Link
                  to="#"
                  className="relative after:content-[''] after:block after:h-[2px] after:w-0 after:bg-primary-text dark:after:bg-white after:absolute after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {t("item1")}
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="relative after:content-[''] after:block after:h-[2px] after:w-0 after:bg-primary-text dark:after:bg-white after:absolute after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {t("item2")}
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="relative after:content-[''] after:block after:h-[2px] after:w-0 after:bg-primary-text dark:after:bg-white after:absolute after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {t("item3")}
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="relative after:content-[''] after:block after:h-[2px] after:w-0 after:bg-primary-text dark:after:bg-white after:absolute after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {t("item4")}
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="hidden lg:block">
          <Button text={t("buttonContribute")} link="#" />
        </div>

        <div className="hidden lg:block">
          <ToggleButton />
        </div>

        <div
          className="w-32 lg:hidden flex justify-center"
          onClick={handleMenu}
        >
          <ButtonMenu />
        </div>

        <div
          className={`fixed z-10  left-0 right-0 w-full h-0  transition-all duration-300 ease-linear flex flex-col items-center justify-center gap-16 bg-cyan-600 ${
            button ? "h-full -top-0" : "-top-56"
          }`}
        >
          <ul className="flex flex-col items-center gap-9 text-2xl font-semibold">
            <li>
              <Link
                to="#"
                className="relative after:content-[''] after:block after:h-[2px] after:w-0 after:bg-primary-text dark:after:bg-white after:absolute after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
              >
                Início
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="relative after:content-[''] after:block after:h-[2px] after:w-0 after:bg-primary-text dark:after:bg-white after:absolute after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
              >
                Histórias
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="relative after:content-[''] after:block after:h-[2px] after:w-0 after:bg-primary-text dark:after:bg-white after:absolute after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="relative after:content-[''] after:block after:h-[2px] after:w-0 after:bg-primary-text dark:after:bg-white after:absolute after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
              >
                Personagens
              </Link>
            </li>
          </ul>
          <ToggleButton />
        </div>
      </div>
    </div>
  );
}
