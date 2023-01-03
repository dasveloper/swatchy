import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Swatch from "./Swatch";
import { useSwatches } from "./SwatchProvider";
import { Center, Text } from "@mantine/core";
export default function SwatchList() {
  const { swatches, reorderSwatches } = useSwatches();

  return (
    <div>
      <DragDropContext
        onDragEnd={({ destination, source }) =>
          reorderSwatches(source.index, destination?.index || 0)
        }
      >
        <Droppable droppableId="dnd-list" direction="vertical">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {swatches.length === 0 && (
                <Center>
                  <Text size="xs" c="dimmed">
                    No swatches found.
                  </Text>
                </Center>
              )}
              {swatches.map((swatch, index) => (
                <Draggable
                  key={swatch.id}
                  index={index}
                  draggableId={swatch.id}
                >
                  {(provided, snapshot) => (
                    <Swatch {...{ provided, snapshot, swatch }} />
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
