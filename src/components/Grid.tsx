import { useEffect } from "react";
import useDimensionsContext from "~/hooks/useDimensionsContext";

export default function Grid() {
  const dimensions = useDimensionsContext();
  useEffect(() => {
    console.log(dimensions);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <></>;
}
