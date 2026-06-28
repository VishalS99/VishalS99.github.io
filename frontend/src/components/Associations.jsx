import { createRenderEffect, createSignal } from "solid-js";

export default function Associations() {
  const [associations, setAssociations] = createSignal();
  createRenderEffect(() => {
    var associationsArray = [
      {
        name: "Columbia University",
        url: "education/cu.png",
      },
      {
        name: "NIT Trichy",
        url: "education/nitt.png",
      },
      {
        name: "BNY",
        url: "bny.png",
      },

      {
        name: "Oracle",
        url: "oracle.png",
      },
    ];

    setAssociations(associationsArray);
  });
  return (
    <div>
      <div class="flex flex-col h-[calc(100vh-7rem)] gap-20  place-items-center">
        <For each={associations()}>
          {(assoc) => (
            <figure class="w-2/3 place-items-center row-span-1">
              <img
                style={{
                  filter: "sepia(100%) hue-rotate(170deg) saturate(3)",
                }}
                src={assoc.url}
                alt={assoc.name}
              />
            </figure>
          )}
        </For>
        <div class="row-span-2 h-full w-0.5 bg-secondary" />
      </div>
    </div>
  );
}
