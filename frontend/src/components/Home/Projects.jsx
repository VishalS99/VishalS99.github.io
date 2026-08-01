import { createRenderEffect, createSignal, For } from "solid-js";

function ProjectsMobile() {
  const [projects, setProjects] = createSignal([]);
  createRenderEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setProjects(data.projects));
  });
  const getSelectedProject = (event) => {
    $(".proj-btn").each(function(index) {
      $(this).removeClass("btn-accent")
      $(this).hasClass("btn-primary")? null :  $(this).addClass("btn-primary");
    })
    $(event.target).addClass("btn-accent")
    $(event.target).removeClass("btn-primary")
  };
  return (
    <div class="flex" id="project-mb">
      <div class="w-11/12 flex flex-col m-auto">
        <div class="flex flex-col items-center">
          <div class="w-fit mx-auto relative z-10 -mb-0.5 px-6 py-1.5 bg-gradient-to-b from-base-100 to-neutral border-2 border-solid border-primary rounded-t-lg border-b-0 text-center md:mx-0 md:self-start md:ml-10">
            <span class="text-3xl text-accent">Projects</span>
          </div>
          <div class="w-full border-2 border-solid border-primary rounded-lg shadow-mainbox font-body bg-neutral overflow-hidden flex flex-col">
            <div class="p-2 flex-1">
            <p class="text-center mb-4 mt-4 text-primary">
              Visit my{" "}
              <a
                href="https://github.com/VishalS99"
                target="_blank"
                rel="noopener noreferrer"
                class="text-accent underline hover:text-secondary"
              >
                Github
              </a>{" "}
              to view all my projects{" "}
            </p>
            <div class="carousel w-full">
            <For each={projects()}>
              {(project, i) => (
                <div id={"item" + (i() + 1)} class="carousel-item w-full">
                  <div class="card bg-base-100 text-primary-content">
                    <div class="card-body">
                      <h2 class="card-title">
                        {project.data.title}
                      </h2>
                      <p class="prose">
                        <span innerHTML={project.data.desc}></span>
                      </p>
                      <div class="card-actions justify-center">
                        <button class="btn btn-outline">
                          {" "}
                          <a
                            target="_blank"
                            href={project.data.link}
                          >
                            Code
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </For>
          </div>
          <div class="flex justify-center w-full py-2 gap-2">
            <For each={projects()}>
              {(project, i) => (
                <a
                  href={"#item" + (i() + 1).toString()}
                  class={i() == 0? "btn btn-accent btn-xs proj-btn": "btn btn-primary btn-xs proj-btn"}
                  data-project={i()}
                  onClick={getSelectedProject}
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
    </div>
  );
}

function Projects() {
  const [projects, setProjects] = createSignal();
  createRenderEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setProjects(data.projects));
  });
  return (
    <div class="min-h-full flex relative" id="project">
      <div class="w-full h-min flex flex-col m-auto">
        <div class="flex flex-col items-center">
          <div class="w-fit mx-auto relative z-10 -mb-0.5 px-8 py-1.5 bg-gradient-to-b from-base-100 to-neutral border-2 border-solid border-primary rounded-t-lg border-b-0 text-center md:mx-0 md:self-start md:ml-10">
            <span class="text-4xl text-accent">Projects</span>
          </div>
          <div class="w-full border-2 border-solid border-primary rounded-lg shadow-mainbox font-body bg-neutral overflow-hidden flex flex-col">
            <div class="p-8 flex-1">
            <p class="text-center mb-8 text-primary">
              Visit my{" "}
              <a
                href="https://github.com/VishalS99"
                target="_blank"
                rel="noopener noreferrer"
                class="text-accent underline hover:text-secondary"
              >
                Github
              </a>{" "}
              to view all my projects{" "}
            </p>
            <div class="grid grid-cols-12 gap-4">
              <For each={projects()}>
                {(project, i) => (
                  <div class="col-span-4">
                    <div class="card bg-base-100 text-primary-content">
                      <div class="card-body" data-project={i()}>
                        <h2 class="card-title">{project.data.title}</h2>
                        <p class="prose">
                          <span innerHTML={project.data.desc}></span>
                        </p>
                        <div class="card-actions justify-end">
                          <button class="btn btn-outline">
                            {" "}
                            <a target="_blank" href={project.data.link}>
                              Code
                            </a>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </For>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export { Projects, ProjectsMobile };
