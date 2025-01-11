import { useDraggable } from "@dnd-kit/core";
import { OptionsData } from "../types";

export default function CardOption({ option }: { option: OptionsData }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: option.value,
  });
  const style = transform
    ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`,
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="rounded-lg text-[#3E5879] border-gray-400 p-4 hover:cursor-move cursor-grab bg-[#F5EFE7]"
    >
      <div>{option.label}</div>
    </div>
  );
}
