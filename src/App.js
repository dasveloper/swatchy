import { useEffect } from "react";
import { Divider } from "@mantine/core";

import { Stack, ScrollArea } from "@mantine/core";
import SwatchList from "./components/SwatchList";
import { useSwatches } from "./components/SwatchProvider";
import AddSwatch from "./components/ColorPicker";
import ColorMode from "./components/ColorMode";

function App() {
  const { loadSwatches } = useSwatches();

  useEffect(() => {
    loadSwatches();
  }, []);

  return (
    <Stack
      spacing="xs"
      p="sm"
      sx={{
        width: 350,
        height: 600,
      }}
    >
      <AddSwatch />
      <ColorMode />
      <Divider />
      <ScrollArea sx={{ flex: 1 }}>
        <SwatchList />
      </ScrollArea>
    </Stack>
  );
}

export default App;
