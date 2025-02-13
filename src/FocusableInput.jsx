import { useEffect, useRef } from "react";

export default function FocusableInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return <input type="text" name="username" ref={inputRef} />;
}
