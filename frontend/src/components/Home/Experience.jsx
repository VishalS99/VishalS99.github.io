import { createSignal, For } from "solid-js";

function TechBubble(props) {
  return (
    <div class="md:p-4 p-2 md:text-lg text-sm text-[antiquewhite] font-extrabold badge badge-primary hover:badge-secondary">
      {props.item}
    </div>
  );
}

function ExperienceUnit(props) {
  const [role, setRole] = createSignal(props.initialRole);
  const [company, setCompany] = createSignal(props.initialCompany);
  const [type, setType] = createSignal(props.initialType);
  const [location, setLocation] = createSignal(props.initialLocation);
  const [duration, setDuration] = createSignal(props.initialDuration);
  const [logo, setLogo] = createSignal(props.initialLogo);
  const [desc, setDesc] = createSignal(props.initialDesc);
  const [tech, setTech] = createSignal(props.initialTech);

  return (
    <div class="h-full flex flex-col">
      <div class="md:grid md:grid-cols-12 flex flex-col justify-center">
        <div class="md:col-span-3 ">
          <figure class="md:w-1/2 w-1/3 m-auto">
            <img src={logo()} alt="" />
          </figure>
        </div>
        <div class="md:col-span-9 md:text-left h-full text-center">
          <div class="flex flex-col h-full">
            <div class="font-bold md:text-[2.5rem] text-xl mb-4">{role()}</div>
            <div class="text-primary md:text-base text-sm">
              {company()} &#8728; {type()} &#8728; {location()} &#8728;{" "}
              {duration()}
            </div>
          </div>
        </div>
      </div>
      <div class="md:text-xl w-full text-justify text-sm mt-2">
        <ul>
          <For each={desc()}>
            {(descItem) => <li class="m-4">&#8594; {descItem}</li>}
          </For>
        </ul>
      </div>
      <div class="md:ml-4 md:mb-0 w-full flex flex-row flex-wrap space-x-2 ml-2 mb-2 ">
        <For each={tech()}>{(techItem) => <TechBubble item={techItem} />}</For>
      </div>
    </div>
  );
}

function ExperienceMobile() {
  return (
    <div class="h-full flex">
      <div class="w-11/12 h-3/4 flex flex-col m-auto">
        <div class="flex z-50 ">
          <div class="w-1/2 flex flex-col mx-auto shadow-[0_0_15px_15px_#051420] text-center rounded-md bg-base-100">
            <span class="text-3xl text-accent">Experience</span>
          </div>
        </div>
        <div class="p-4 h-2/3 border-2 border-solid border-primary rounded-lg shadow-mainbox font-body bg-neutral">
          <div class="flex flex-col space-y-8 h-full">
            <div class="flex flex-row space-x-8 justify-center">
              <div class=" text-accent font-bold">
                <a href="#">1.</a>
              </div>
              <div class=" text-accent font-bold">
                <a href="#">2.</a>
              </div>
              <div class=" text-accent font-bold">
                <a href="#">3.</a>
              </div>
            </div>
            <ExperienceUnit
              initialRole="Machine Learning Engineer"
              initialCompany="Sutherland Global"
              initialType="Internship"
              initialLocation="Chennai, India"
              initialDuration="May 2019 (2 Months)"
              initialLogo="/associations/sutherland.png"
              initialDesc={[
                "Built a module for Sutherland Extract to auto-align skewed photographed documents",
                "Developed a custom trained UNet object segmentation module in Tensorflow and OpenCV and handled backend requests through a Flask server",
                "Improved accuracy by 40% over previous implementation",
              ]}
              initialTech={["Python", "Tensorflow", "Flask", "OpenCV"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Experience() {
  return (
    <div class="h-full flex relative">
      <div class="w-full h-min flex flex-col m-auto">
        <div class="flex z-50">
          <div class="w-[18%] ml-[9rem] flex flex-col shadow-[0_0_15px_15px_#051420] rounded-md text-center bg-base-100">
            <span class="text-4xl text-accent">Experience</span>
          </div>
        </div>
        <div class="p-14 h-2/3 border-2 border-solid border-primary rounded-lg shadow-mainbox font-body bg-neutral">
          <div class="grid grid-cols-12 gap-4 h-full">
            <div class="col-span-1 flex text-2xl flex-col">
              <div class="mb-2 text-accent font-bold">
                <a href="#">1.</a>
              </div>
              <div class="mb-2 text-primary font-bold">
                <a href="#">2.</a>
              </div>
            </div>
            <div class="col-span-11">
              <ExperienceUnit
                initialRole="Machine Learning Engineer"
                initialCompany="Sutherland Global"
                initialType="Internship"
                initialLocation="Chennai, India"
                initialDuration="May 2019 (2 Months)"
                initialLogo="/associations/sutherland.png"
                initialDesc={[
                  "Built a module for Sutherland Extract to auto-align skewed photographed documents",
                  "Developed a custom trained UNet object segmentation module in Tensorflow and OpenCV and handled backend requests through a Flask server",
                  "Improved accuracy by 40% over previous implementation",
                ]}
                initialTech={["Python", "Tensorflow", "Flask", "OpenCV"]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Experience, ExperienceMobile };
