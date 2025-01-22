import { useContext } from "react";
import assert from "~/lib/assert";
import * as DimensionsContext from "~/contexts/DimensionsContext";

export default function useDimensionsContext() {
  const dimensions = useContext(DimensionsContext.Context);
  assert(
    dimensions,
    "useDimensionsContext must be used with a Dimensions.Context",
  );
  return dimensions;
}
