import React, { ReactNode, useEffect } from "react";
interface IMCustomModal {
  children: ReactNode;
  height: string;
  width: string;
  onClose: () => void;
  showModal: boolean;
}

const MCustomModal: React.FC<IMCustomModal> = (props, children) => {
  const { height, width, showModal , onClose} = props;

  const toggleModal = (e : React.MouseEvent ) => {
      const modalElement = document.querySelector(".modal-element")
    if(e.target !== modalElement && modalElement?.contains( e.target as HTMLElement )  === false) {
        onClose()
    } 
  }

  return (
    <>
      {showModal && (
        <section  onClick={toggleModal} className=" fixed left-0 top-0 h-screen w-screen bg-black bg-opacity-30">
          <div style={{ height: height, width: width }} className=" modal-element">
            {children}
          </div>
        </section>
      )}
    </>
  );
};

export default MCustomModal;
