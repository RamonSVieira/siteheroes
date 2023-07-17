interface ModalProps {
  hero: {
    image: string;
    name: string;
    title: string;
    story: string;
  };
  isOpen: boolean;
  setModalOpen: () => void;
}

export function Modal(props: ModalProps) {
  if (props.isOpen) {
    return (
      <div className="text-white">
        <div
          onClick={props.setModalOpen}
          className="fixed top-0 left-0 z-[99] w-screen h-screen bg-neutral-800 opacity-50"
        />
        <div className="fixed top-20 left-20 right-20 bottom-20 z-[99] rounded-xl w-3/4 m-auto bg-header max-w-7xl">
          <div className="overflow-auto p-10 h-full scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-[#291A47]">
            <div className="flex items-center gap-10">
              <img src={props.hero.image} alt="" />
              <div>
                <h4 className="text-3xl mb-5">{props.hero.name}</h4>
                <p className="text-xl">{props.hero.title}</p>
              </div>
            </div>
            <div className="h-[2px] w-full bg-white rounded-xl my-10"></div>
            <p className="text-xl">{props.hero.story}</p>
          </div>

          <button
            onClick={props.setModalOpen}
            className="w-16 h-16 bg-[#A0A8F3] rounded-full absolute -top-8 -right-8 border-4 cursor-pointer border-red-600 flex items-center justify-center"
          >
            <svg
              className="h-10 fill-red-600"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 384 512"
            >
              <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
            </svg>
          </button>
        </div>
      </div>
    );
  }

  return null;
}
