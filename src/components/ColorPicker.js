import { Group, ColorInput, Button } from "@mantine/core";
import { useState } from "react";
import { useSwatches } from "./SwatchProvider";

export default function ColorPicker() {
  const { addSwatch, mode } = useSwatches();
  const [color, setColor] = useState("");

  const handleAddSwatch = () => {
    addSwatch(color);
    setColor("");
  };
  return (
    <Group spacing="xs" align="end">
      <ColorInput
        size="xs"
        sx={{ flex: 1 }}
        placeholder="Pick color"
        label="Add new swatch"
        value={color}
        onChange={setColor}
        autocomplete="off"
        format={mode}
      />
      <Button size="xs" onClick={handleAddSwatch} color="dark">
        Save
      </Button>
    </Group>
  );
}
