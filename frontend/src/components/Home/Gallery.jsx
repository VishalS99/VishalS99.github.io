import { createRenderEffect, createSignal, For } from "solid-js";

function GalleryMobile() {
  const [photos, setPhotos] = createSignal([]);
  const [activeIndex, setActiveIndex] = createSignal(0);
  const [loading, setLoading] = createSignal(true);
  let carouselRef;

  const onCarouselScroll = () => {
    if (!carouselRef) return;
    const container = carouselRef;
    const items = container.querySelectorAll(".carousel-item");
    let closest = 0;
    let minDist = Infinity;
    items.forEach((item, i) => {
      const dist = Math.abs(item.offsetLeft - container.scrollLeft);
      if (dist < minDist) {
        minDist = dist;
        closest = i;
      }
    });
    setActiveIndex(closest);
  };

  createRenderEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setPhotos(data.photos || []);
        setTimeout(() => {
          if (window.instgrm) window.instgrm.Embeds.process();
          setTimeout(() => setLoading(false), 2000);
        }, 100);
      });
  });

  return (
    <div class="h-full flex" id="photography-mb">
      <div class="w-11/12 h-3/4 flex flex-col m-auto">
        <div class="flex z-50 ">
          <div class="w-1/2 flex flex-col mx-auto shadow-[0_0_15px_15px_#051420] text-center rounded-md bg-base-100">
            <span class="text-3xl text-accent">Gallery</span>
          </div>
        </div>
        <div class="p-2 border-2 border-solid border-primary rounded-lg shadow-mainbox font-body bg-neutral">
          <div class="flex flex-col h-full">
            <p class="text-center mb-8 text-primary">
              Photos from my travels! Follow me on{" "}
              <a
                href="https://www.instagram.com/_vishal_here_/"
                class="text-accent underline hover:text-secondary"
              >
                Instagram
              </a>{" "}
              for more.
            </p>

            <div
              ref={carouselRef}
              onScroll={onCarouselScroll}
              class="w-full carousel rounded-box gap-4"
            >
              <For each={photos()}>
                {(photo, i) => (
                  <div
                    id={"gallery-mb-" + i()}
                    class="carousel-item w-full flex justify-center items-center"
                  >
                    <div class="w-full max-w-[450px] relative bg-white rounded-lg border border-gray-200">
                      {loading() && (
                        <div class="absolute inset-0 flex items-center justify-center z-10">
                          <div class="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                        </div>
                      )}
                      <blockquote
                        class="instagram-media"
                        data-instgrm-permalink={photo.data.instagram_url}
                        data-instgrm-version="14"
                        data-instgrm-theme="dark"
                        style={{
                          background: "#FFF",
                          border: "0",
                          margin: "0",
                          padding: "0",
                          width: "100%",
                          minWidth: "0",
                        }}
                      />
                    </div>
                  </div>
                )}
              </For>
            </div>
            <div class="flex justify-center w-full py-2 gap-2">
              <For each={photos()}>
                {(photo, i) => (
                  <a
                    href={"#gallery-mb-" + i()}
                    class={
                      i() == activeIndex()
                        ? "btn btn-accent btn-xs"
                        : "btn btn-primary btn-xs"
                    }
                    onClick={() => setActiveIndex(i())}
                  >
                    {i() + 1}
                  </a>
                )}
              </For>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Gallery() {
  const [photos, setPhotos] = createSignal([]);
  const [loading, setLoading] = createSignal(true);

  createRenderEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setPhotos(data.photos || []);
        setTimeout(() => {
          if (window.instgrm) window.instgrm.Embeds.process();
          setTimeout(() => setLoading(false), 2000);
        }, 100);
      });
  });

  return (
    <div class="h-full flex" id="photography">
      <div class="w-full h-min flex flex-col m-auto">
        <div class="flex z-50">
          <div class="w-[18%] ml-[9rem] flex flex-col shadow-[0_0_15px_15px_#051420] rounded-md text-center bg-base-100">
            <span class="text-4xl text-accent">Gallery</span>
          </div>
        </div>
        <div class="p-8 border-2 border-solid border-primary rounded-lg shadow-mainbox font-body bg-neutral">
          <p class="text-center mb-8 text-primary">
            Photos from my travels! Follow me on{" "}
            <a
              href="https://www.instagram.com/_vishal_here_/"
              class="text-accent underline hover:text-secondary"
            >
              Instagram
            </a>{" "}
            for more.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
            <For each={photos()}>
              {(photo) => (
                <div class="w-full max-w-[400px] flex justify-center">
                  <div class="w-full relative bg-white rounded-lg overflow-hidden">
                    {loading() && (
                      <div class="absolute inset-0 flex items-center justify-center z-10">
                        <div class="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                      </div>
                    )}
                    <blockquote
                      class="instagram-media"
                      data-instgrm-permalink={photo.data.instagram_url}
                      data-instgrm-version="14"
                      data-instgrm-theme="dark"
                      style={{
                        background: "#FFF",
                        border: "0",
                        margin: "0",
                        padding: "0",
                        width: "100%",
                        minWidth: "0",
                      }}
                    />
                  </div>
                </div>
              )}
            </For>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Gallery, GalleryMobile };
