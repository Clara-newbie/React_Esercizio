import { useEffect, useRef } from "react";

export default function MountedRef() {
  const mountingRef = useRef(false);

  useEffect(() => {
    if (!mountingRef.current) {
      mountingRef.current = true;
      console.log("Primo montaggio effettuato");
    } else {
      console.log("Secondo montaggio effettuato");
    }
  });
}
