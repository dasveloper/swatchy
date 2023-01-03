import { SegmentedControl } from "@mantine/core";
import { useSwatches } from "./SwatchProvider";

export default function ColorMode() {
  const { mode, setMode } = useSwatches();

  return (
    <SegmentedControl
      size="xs"
      value={mode}
      onChange={setMode}
      data={[
        { label: "HEX", value: "hex" },
        { label: "RGB", value: "rgb" },
      ]}
    />
  );
}
