import { HiOutlineMail } from "solid-icons/hi";
import { FiGithub } from "solid-icons/fi";
import { TbBrandLinkedin } from "solid-icons/tb";
import { FiInstagram } from "solid-icons/fi";
import { FiTwitter } from "solid-icons/fi";

export default function SocialMedia() {
  return (
    <div class="flex flex-col h-[calc(100vh-7rem)] gap-8 place-items-center">
      <div class=" h-full w-0.5 bg-secondary" />
      <div class=" place-items-center row-span-1">
        <HiOutlineMail size={24} class="stroke-primary hover:fill-accent" />
      </div>
      <div class=" place-items-center row-span-1">
        <FiGithub size={24} class="stroke-primary hover:fill-accent" />
      </div>
      <div class=" place-items-center row-span-1">
        <TbBrandLinkedin size={24} class="stroke-primary hover:fill-accent" />
      </div>
      <div class=" place-items-center row-span-1">
        <FiInstagram size={24} class="stroke-primary hover:fill-accent" />
      </div>
      <div class=" place-items-center row-span-1">
        <FiTwitter size={24} class="stroke-primary hover:fill-accent" />
      </div>
    </div>
  );
}
