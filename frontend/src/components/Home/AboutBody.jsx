import { AiFillMail } from "solid-icons/ai";
import { AiFillGithub } from "solid-icons/ai";
import { AiFillLinkedin } from "solid-icons/ai";
import { AiFillInstagram } from "solid-icons/ai";
import { AiOutlineTwitter } from "solid-icons/ai";
import { createRenderEffect, createSignal } from "solid-js";

export default function AboutBody() {
  const [bioData, setBioData] = createSignal("Loading...");
  createRenderEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setBioData(data.bio));
  });

  return (
    <div class="md:w-11/12 flex flex-col m-auto">
      <div class="flex flex-col items-center">
        <div class="w-fit mx-auto relative z-10 -mb-0.5 px-8 py-1.5 bg-gradient-to-b from-base-100 to-neutral border-2 border-solid border-primary rounded-t-lg border-b-0 text-center md:mx-0 md:self-start md:ml-10 font-bold">
          <span class="md:text-4xl text-3xl text-accent">
            Vishal Saranathan
          </span>
          &nbsp
          <span class="text-secondary text-xs hidden md:inline">
            {" "}
            (He/Him)
          </span>
        </div>
        <div class="w-full bg-neutral border-2 text-md border-solid border-primary rounded-lg shadow-mainbox font-body overflow-hidden flex flex-col">
          <div class="md:text-xl md:text-left p-9 pb-12 flex-1 text-center">
          <span innerHTML={bioData()} />
          <span class="md:hidden flex flex-row mt-4">
            <AiFillMail size={24} class=" mx-auto" />
            <AiFillGithub size={24} class=" mx-auto" />
            <AiFillLinkedin size={24} class=" mx-auto" />
            <AiFillInstagram size={24} class=" mx-auto" />
            <AiOutlineTwitter size={24} class=" mx-auto" />
          </span>
        </div>
      </div>
      </div>
    </div>
  );
}
