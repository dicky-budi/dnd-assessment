import { useState } from "react";
import "./App.css";
import { cardType, options as optionData } from "./constant";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { CardType, OptionsData } from "./types";
import CardContainer from "./Components/CardContainer";

function App() {
  const [currentOptions, setCurrentOptions] =
    useState<OptionsData[]>(optionData);

  const selectedOptions = currentOptions
    .filter((item) => item.parent_id === "selected_services")
    .sort((a, b) => (a.label.toLowerCase() > b.label.toLowerCase() ? 1 : -1));

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (!over) return;

    const cardId = active.id as string;
    const newValue = over.id as OptionsData["parent_id"];

    setCurrentOptions((currentOptions) => {
      const newData = currentOptions.map((option) =>
        option.value === cardId
          ? {
              ...option,
              parent_id: newValue,
            }
          : option
      );
      return newData;
    });
  }

  return (
    <>
      {selectedOptions.length > 0 && (
        <section className="flex gap-2 mb-4">
          {selectedOptions.map((option) => (
            <div
              key={option.value}
              className="rounded-md bg-[#F5EFE7] py-0.5 px-2.5 border border-transparent text-sm text-[#3E5879] transition-all shadow-sm"
            >
              {option.label}
            </div>
          ))}
        </section>
      )}
      <div className="container flex justify-center gap-12">
        <DndContext onDragEnd={handleDragEnd}>
          {cardType.map((card: CardType) => (
            <CardContainer
              key={card.id}
              card={card}
              option={currentOptions.filter(
                (item) => item.parent_id === card.id
              )}
            />
          ))}
        </DndContext>
      </div>
    </>
  );
}

export default App;
