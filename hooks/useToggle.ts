import { useCallback, useState } from "react";

function useToggle(initialValue: boolean = false): [boolean, () => void] {
  const [isToggled, setIsToggled] = useState(initialValue);
  const toggle = useCallback(() => setIsToggled(!isToggled), []);

  return [isToggled, toggle];
}

export default useToggle;
