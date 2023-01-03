/*global chrome*/
import React, { createContext, useContext, useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { useListState } from "@mantine/hooks";

const SwatchContext = createContext();

export const useSwatches = () => useContext(SwatchContext);

export default function SwatchProvider({ children }) {
  const [mode, setMode] = useState("hex");
  const [swatches, handlers] = useListState([]);

  const addSwatch = (color) => {
    handlers.prepend({ color, id: nanoid() });
  };

  const removeSwatch = (id) => {
    const index = swatches.findIndex((swatch) => swatch.id === id);
    handlers.remove(index);
  };

  const reorderSwatches = (from, to) => {
    handlers.reorder({ from, to });
  };

  const loadSwatches = async () => {
    const result = await chrome.storage.local.get("swatches");
    handlers.setState(result?.swatches || []);
  };

  useEffect(() => {
    chrome.storage.local.set({ swatches });
  }, [swatches]);

  return (
    <SwatchContext.Provider
      value={{
        mode,
        setMode,
        swatches,
        loadSwatches,
        addSwatch,
        removeSwatch,
        reorderSwatches,
      }}
    >
      {children}
    </SwatchContext.Provider>
  );
}
