import { useEffect, useRef } from "react";

export default function useOutsideClick(handeler, listenCapturing = true) {
  const ref = useRef();

  useEffect(() => {
    function handelCick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        handeler();
      }
    }

    document.addEventListener("click", handelCick, listenCapturing);
    document.addEventListener("touchstart", handelCick, listenCapturing);

    return () => {
      document.removeEventListener("click", handelCick, listenCapturing);
      document.removeEventListener("touchstart", handelCick, listenCapturing);
    };
  }, [handeler, listenCapturing]);

  return ref;
}
