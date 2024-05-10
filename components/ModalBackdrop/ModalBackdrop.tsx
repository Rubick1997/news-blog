"use client";

import { useRouter } from "next/navigation";

function ModalBackdrop() {
  const navigate = useRouter();
  return <div className="modal-backdrop" onClick={navigate.back} />;
}
export default ModalBackdrop;
