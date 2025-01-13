import { useDroppable } from "@dnd-kit/core";
import { CardType, OptionsData } from "../types";
import CardOption from "./CardOption";

export default function CardContainer({
  card,
  option,
}: {
  card: CardType;
  option: OptionsData[];
}) {
  const { setNodeRef, isOver } = useDroppable({
    id: card.id,
  });

  return (
    <div
      className={`rounded-lg bg-[#3E5879] p-5 md:p-2 w-full md:w-[25rem] space-y-4 h-full ${
        isOver &&
        "shadow-[0px_2px_3px_8px_rgba(255,_255,_255,_0.05)] transition-shadow ease-out delay-150 "
      }`}
      ref={setNodeRef}
    >
      <h2 className="flex flex-col gap-2 text-[#D8C4B6] font-bold pb-2 pt-2 text-2xl">
        {card.title}
      </h2>
      <div className="flex flex-col gap-4 h-auto">
        {option
          .sort((a, b) =>
            a.label.toLowerCase() > b.label.toLowerCase() ? 1 : -1
          )
          .map((option, index) => (
            <CardOption key={index} option={option} />
          ))}
      </div>
    </div>
  );
}
