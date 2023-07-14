import heroi from "../../assets/heroHQ.png";

interface ModalProps {
  isOpen: boolean;
  setModalOpen: () => void;
}

export function Modal(props: ModalProps) {
  if (props.isOpen) {
    return (
      <div className="text-white">
        <div
          onClick={props.setModalOpen}
          className="fixed top-0 left-0 z-50 w-screen h-screen bg-neutral-800 opacity-50"
        />
        <div className="fixed top-20 left-20 right-20 bottom-20 z-50 rounded-xl w-3/4 m-auto bg-header max-w-7xl p-10">
          <div className="flex items-center gap-10">
            <img src={heroi} alt="" />
            <div>
              <h4 className="text-3xl mb-5">Homem Aranha</h4>
              <p className="text-xl">
                Lorem ipsum dolor sit. Lorem ipsum dolor sit.
              </p>
            </div>
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

          <div className="h-1 w-full bg-white rounded-xl my-10"></div>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque non
            quidem sapiente? Dolore vero quaerat laboriosam, eligendi
            consequuntur ipsa deleniti suscipit nobis cumque aperiam tenetur,
            sequi id, doloremque nulla adipisci esse a voluptate ratione eius
            eveniet reiciendis natus commodi neque? Laboriosam dicta dolore,
            corrupti cumque repellendus corporis? Perspiciatis possimus
            reiciendis numquam magni fuga sed. Commodi, corporis maiores
            deserunt blanditiis nobis magnam numquam similique facilis, eius
            cupiditate hic alias at! Dolorem quas deleniti perferendis quisquam
            corrupti consequatur vel, quibusdam, assumenda nihil repudiandae
            reprehenderit nam! Cupiditate sapiente ab, eaque asperiores nostrum
            repudiandae laudantium facilis illum perspiciatis ipsam, molestiae
            ratione ad labore enim qui facere nam ducimus? Dolore vitae
            voluptatem vero at provident sint totam eaque explicabo ut vel aut,
            quos officiis perferendis, eum autem? Magnam quaerat autem non
            voluptas placeat similique vero libero iure! Iste maiores quaerat
            quibusdam deleniti, consequatur ut eveniet sunt ea dolores. Expedita
            odit ad officia animi fugit id porro adipisci labore vero quasi,
            ducimus aliquam nam eaque quibusdam veniam consequuntur ipsam hic
            dolorum error tenetur possimus nobis recusandae! Non, tempore quos
            fugit dolor, voluptas facere eius, distinctio deserunt nostrum dicta
            error dolorem iure. Aliquam quasi ab provident nisi, eos dolorum
            reprehenderit fugiat omnis, quae quibusdam, quo unde esse?
          </p>
        </div>
      </div>
    );
  }

  return null;
}
