function GalleryMobile() {
  return (
    <div class="h-full flex">
      <div class="w-11/12 h-3/4 flex flex-col m-auto">
        <div class="flex z-50 ">
          <div class="w-1/2 flex flex-col mx-auto shadow-[0_0_15px_15px_#051420] text-center rounded-md bg-base-100">
            <span class="text-3xl text-accent">Gallery</span>
          </div>
        </div>
        <div class="p-4 h-2/3 border-2 border-solid border-primary rounded-lg shadow-mainbox font-body bg-neutral">
          <div class="flex flex-col h-full">
            <p class="text-center mb-8 text-primary">
              <span class="italic">
                An aimless wanderlust, marking my presence in wonderlands!
              </span>
              <br />
              Do check out my page{" "}
              <a
                href="https://github.com/VishalS99"
                class="text-accent underline hover:text-secondary"
              >
                _vishal_here_
              </a>{" "}
              for more of my photomania.
            </p>
            <div class="w-full carousel rounded-box">
              <div class="carousel-item w-full">
                <img src="/photos/1.png" class="w-full" />
              </div>
              <div class="carousel-item w-full">
                <img src="/photos/2.png" class="w-full" />
              </div>
              <div class="carousel-item w-full">
                <img src="/photos/3.png" class="w-full" />
              </div>
              <div class="carousel-item w-full">
                <img src="/photos/4.png" class="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Gallery() {
  return (
    <div class="min-h-full flex">
      <div class="w-full flex flex-col m-auto">
        <div class="flex z-50">
          <div class="w-[18%] ml-[9rem] flex flex-col shadow-[0_0_15px_15px_#051420] rounded-md text-center bg-base-100">
            <span class="text-4xl text-accent">Gallery</span>
          </div>
        </div>
        <div class="p-8 h-2/3 border-2 border-solid border-primary rounded-lg shadow-mainbox font-body bg-neutral">
          <p class="text-center mb-8 text-primary">
            <span class="italic">
              An aimless wanderlust, marking my presence in wonderlands!
            </span>
            <br />
            Do check out my page{" "}
            <a
              href="https://github.com/VishalS99"
              class="text-accent underline hover:text-secondary"
            >
              _vishal_here_
            </a>{" "}
            for more of my photomania.
          </p>
          <div class="grid grid-cols-12">
            <div class="col-span-3">
              <div class="flex h-full container">
                <figure class="m-auto w-5/6">
                  <img src="/photos/1.png" alt="" />
                </figure>
              </div>
            </div>
            <div class="col-span-3">
              <div class="flex h-full container">
                <figure class="m-auto w-5/6">
                  <img src="/photos/2.png" alt="" />
                </figure>
              </div>
            </div>
            <div class="col-span-3">
              <div class="flex h-full container">
                <figure class="m-auto w-5/6">
                  <img src="/photos/3.png" alt="" />
                </figure>
              </div>
            </div>
            <div class="col-span-3">
              <div class="flex h-full container">
                <figure class="m-auto w-5/6">
                  <img src="/photos/4.png" alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Gallery, GalleryMobile };
