import { useState } from "react";

export default function useProductModal() {
  const [showModal, setShowModal] = useState(false);

  return {
    showModal,
    setShowModal,
  };
}
