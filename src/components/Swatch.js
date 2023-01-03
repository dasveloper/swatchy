import { Box, Group, ActionIcon, CopyButton, Button } from "@mantine/core";
import { IconGripVertical, IconTrash } from "@tabler/icons";
import { useSwatches } from "./SwatchProvider";
import { colord } from "colord";

export default function Swatch({ snapshot, provided, swatch }) {
  const { removeSwatch, mode } = useSwatches();

  const color = colord(swatch.color);
  const colorCode = mode === "hex" ? color.toHex() : color.toRgbString();
  const textColor = color.isDark() ? "#fff" : "#000";
  const hoverColor = color.isDark()
    ? color.lighten(0.1).toHex()
    : color.darken(0.1).toHex();
  return (
    <Box
      sx={(theme) => ({
        padding: theme.spacing.xs,
        border: `1px solid ${theme.colors.gray[3]}`,
        backgroundColor: theme.white,
        borderRadius: theme.radius.md,
        marginBottom: theme.spacing.sm,
        boxShadow: snapshot.isDragging ? theme.shadows.sm : theme.shadows.none,
      })}
      ref={provided.innerRef}
      {...provided.draggableProps}
    >
      <Group spacing="xs">
        <ActionIcon {...provided.dragHandleProps}>
          <IconGripVertical size={18} />
        </ActionIcon>
        <CopyButton value={colorCode}>
          {({ copied, copy }) => (
            <Button
              size="xs"
              onClick={copy}
              styles={(theme) => ({
                root: {
                  border: `1px solid ${theme.colors.gray[3]}`,
                  flex: 1,
                  color: textColor,
                  backgroundColor: colorCode,
                  "&:hover": {
                    backgroundColor: hoverColor,
                  },
                },
              })}
            >
              {copied ? "Copied" : colorCode}
            </Button>
          )}
        </CopyButton>
        <ActionIcon color="red" onClick={() => removeSwatch(swatch.id)}>
          <IconTrash size={18} />
        </ActionIcon>
      </Group>
    </Box>
  );
}
