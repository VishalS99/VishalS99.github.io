import { AiFillMail } from "solid-icons/ai";
import { AiFillGithub } from "solid-icons/ai";
import { AiFillLinkedin } from "solid-icons/ai";
import { AiFillInstagram } from "solid-icons/ai";
import { AiOutlineTwitter } from "solid-icons/ai";

export default function AboutBody() {
  return (
    <div class="md:w-11/12 flex flex-col m-auto">
      <div class="flex z-50">
        <div class="md:w-[60%] md:ml-title w-[70%] m-auto flex flex-col shadow-[0_0_15px_15px_#051420] rounded-md text-center font-bold bg-base-100">
          <div class="md:text-2xl text-md text-[#808080]">Hey, I am</div>
          <div>
            <span class="md:text-4xl text-3xl text-accent">
              Vishal Saranathan
            </span>
            &nbsp
            <span class="text-secondary text-xs hidden md:inline">
              {" "}
              (He/Him)
            </span>
          </div>
        </div>
      </div>
      <div class="md:text-xl md:text-left p-9 pb-12 bg-neutral border-2 text-md border-solid border-primary rounded-lg shadow-mainbox font-body text-center prose">
        → A Masters student pursuing Computer Science at{" "}
        <span class="text-primary">Columbia University</span>; <br />→ A
        coffeeholic trying to decipher the world through code, quick captures
        and magic ✨
        <span class="md:hidden flex flex-row mt-4">
          <AiFillMail size={24} class=" mx-auto" />
          <AiFillGithub size={24} class=" mx-auto" />
          <AiFillLinkedin size={24} class=" mx-auto" />
          <AiFillInstagram size={24} class=" mx-auto" />
          <AiOutlineTwitter size={24} class=" mx-auto" />
        </span>
      </div>
    </div>
  );
}
