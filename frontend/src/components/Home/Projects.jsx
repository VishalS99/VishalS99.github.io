function ProjectsMobile() {
  return (
    <div class="h-full flex">
      <div class="w-11/12 h-3/4 flex flex-col m-auto">
        <div class="flex z-50 ">
          <div class="w-1/2 flex flex-col mx-auto shadow-[0_0_15px_15px_#051420] text-center rounded-md bg-base-100">
            <span class="text-3xl text-accent">Projects</span>
          </div>
        </div>
        <div class="p-2 h-2/3 border-2 border-solid border-primary rounded-lg shadow-mainbox font-body bg-neutral">
          <p class="text-center mb-4 mt-4 text-primary">
            Visit my{" "}
            <a
              href="https://github.com/VishalS99"
              class="text-accent underline hover:text-secondary"
            >
              Github
            </a>{" "}
            to view all my projects{" "}
          </p>
          <div class="carousel w-full">
            <div id="item1" class="carousel-item w-full">
              <div class="card bg-base-100 text-primary-content">
                <div class="card-body">
                  <h2 class="card-title">
                    Performance Modeling and Analysis of Unsupervised Domain
                    Adaptation
                  </h2>
                  <p class="prose">
                    Performance analysis of SOTA{" "}
                    <span class="proj-highlight">
                      image-to-image translation (i2i)
                    </span>{" "}
                    networks for the task of{" "}
                    <span class="badge badge-accent hover:text-white badge-outline">
                      domain adaptation
                    </span>{" "}
                    in computer vision. A detailed study using multiple compute
                    resources, datasets, architectures and frameworks was made
                    to analyse the impact of these variations on performance
                    metrics.
                  </p>
                  <div class="card-actions justify-center">
                    <button class="btn btn-outline">
                      {" "}
                      <a
                        target="_blank"
                        href="https://github.com/VishalS99/COMS6998-Project"
                      >
                        Code
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div id="item2" class="carousel-item w-full">
              <div class="card bg-base-100 text-primary-content">
                <div class="card-body">
                  <h2 class="card-title">Document Requisition Portal</h2>
                  <p class="prose">
                    A web portal for managing university's document request and
                    verification during pandemic, created using lore
                    <span class="badge badge-accent hover:text-white badge-outline">
                      NodeJS/Express
                    </span>
                    ,{" "}
                    <span class="badge badge-accent hover:text-white badge-outline">
                      ReactJS
                    </span>
                    ,{" "}
                    <span class="badge badge-accent hover:text-white badge-outline">
                      SQL
                    </span>
                    , and deployed on custom servers.
                  </p>
                  <div class="card-actions justify-center">
                    <button class="btn btn-outline">Code</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-center w-full py-2 gap-2">
            <a href="#item1" class="btn btn-accent btn-xs">
              1
            </a>
            <a href="#item2" class="btn btn-xs">
              2
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div class="min-h-full flex relative">
      <div class="w-full h-min flex flex-col m-auto">
        <div class="flex z-50">
          <div class="w-[18%] ml-[9rem] flex flex-col shadow-[0_0_15px_15px_#051420] rounded-md text-center bg-base-100">
            <span class="text-4xl text-accent">Projects</span>
          </div>
        </div>
        <div class="p-8 border-2 border-solid border-primary rounded-lg shadow-mainbox font-body bg-neutral">
          <p class="text-center mb-8 text-primary">
            Visit my{" "}
            <a
              href="https://github.com/VishalS99"
              class="text-accent underline hover:text-secondary"
            >
              Github
            </a>{" "}
            to view all my projects{" "}
          </p>
          <div class="grid grid-cols-12 gap-4">
            <div class="col-span-4">
              <div class="card bg-base-100 text-primary-content">
                <div class="card-body">
                  <h2 class="card-title">Document Requisition Portal</h2>
                  <p class="prose">
                    A web portal for managing university's document request and
                    verification during pandemic, created using{" "}
                    <span class="badge badge-accent hover:text-white badge-outline">
                      NodeJS/Express
                    </span>
                    ,{" "}
                    <span class="badge badge-accent hover:text-white badge-outline">
                      ReactJS
                    </span>
                    ,{" "}
                    <span class="badge badge-accent hover:text-white badge-outline">
                      SQL
                    </span>
                    , and deployed on custom servers.
                  </p>
                  <div class="card-actions justify-end">
                    <button class="btn btn-outline">Code</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-span-4">
              <div class="card bg-base-100 text-primary-content">
                <div class="card-body">
                  <h2 class="card-title">
                    Performance Modeling and Analysis of Unsupervised Domain
                    Adaptation
                  </h2>
                  <p class="prose">
                    Performance analysis of SOTA{" "}
                    <span class="proj-highlight">
                      image-to-image translation (i2i)
                    </span>{" "}
                    networks for the task of{" "}
                    <span class="badge badge-accent hover:text-white badge-outline">
                      domain adaptation
                    </span>{" "}
                    in computer vision. A detailed study using multiple compute
                    resources, datasets, architectures and frameworks was made
                    to analyse the impact of these variations on performance
                    metrics.
                  </p>
                  <div class="card-actions justify-end">
                    <button class="btn btn-outline">
                      {" "}
                      <a
                        target="_blank"
                        href="https://github.com/VishalS99/COMS6998-Project"
                      >
                        Code
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-span-4">
              <div class="card bg-base-100 text-primary-content">
                <div class="card-body">
                  <h2 class="card-title">Document Requisition Portal</h2>
                  <p class="prose">
                    A web portal for managing university's document request and
                    verification during pandemic, created using{" "}
                    <span class="badge badge-accent hover:text-white badge-outline">
                      NodeJS/Express
                    </span>
                    ,{" "}
                    <span class="badge badge-accent hover:text-white badge-outline">
                      ReactJS
                    </span>
                    ,{" "}
                    <span class="badge badge-accent hover:text-white badge-outline">
                      SQL
                    </span>
                    , and deployed on custom servers.
                  </p>
                  <div class="card-actions justify-end">
                    <button class="btn btn-outline">Code</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-span-4">
              <div class="card bg-base-100 text-primary-content">
                <div class="card-body">
                  <h2 class="card-title">Document Requisition Portal</h2>
                  <p class="prose">
                    A web portal for managing university's document request and
                    verification during pandemic, created using{" "}
                    <span class="badge badge-accent hover:text-white badge-outline">
                      NodeJS/Express
                    </span>
                    ,{" "}
                    <span class="badge badge-accent hover:text-white badge-outline">
                      ReactJS
                    </span>
                    ,{" "}
                    <span class="badge badge-accent hover:text-white badge-outline">
                      SQL
                    </span>
                    , and deployed on custom servers.
                  </p>
                  <div class="card-actions justify-end">
                    <button class="btn btn-outline">Code</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Projects, ProjectsMobile };
