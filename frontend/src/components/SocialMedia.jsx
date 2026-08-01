import { FiMail } from "solid-icons/fi";
import { FiGithub, FiInstagram, FiTwitter } from "solid-icons/fi";
import { TbOutlineBrandLinkedin } from "solid-icons/tb";
import { createSignal, onMount } from "solid-js";

export default function SocialMedia() {
  const [links, setLinks] = createSignal([]);

  onMount(() => {
    let linksJson = {
      1: { data: { link: "mailto:vishalsaranathan@gmail.com" } },
      3: { data: { link: "https://github.com/VishalS99" } },
      4: { data: { link: "https://www.linkedin.com/in/vishalsaranathan/" } },
      0: { data: { link: "https://www.instagram.com/_vishal_here_/" } },
      2: { data: { link: "https://x.com/vishys99" } },
    };
    setLinks(linksJson);
  });

  return (
    <div class="flex flex-col h-[calc(100vh-7rem)] gap-8 place-items-center">
      <div class="h-full w-px bg-base-content" />

      <div>
        <a
          href={links()[1] ? "mailto:" + links()[1].data.link : "#"}
          target="_blank"
        >
          <FiMail size={24} class="stroke-primary hover:fill-accent" />
        </a>
      </div>

      <div>
        <a href={links()[3]?.data.link || "#"} target="_blank">
          <FiGithub size={24} class="stroke-primary hover:fill-accent" />
        </a>
      </div>

      <div>
        <a href={links()[4]?.data.link || "#"} target="_blank">
          <TbOutlineBrandLinkedin
            size={24}
            class="stroke-primary hover:fill-accent"
          />
        </a>
      </div>

      <div>
        <a href={links()[0]?.data.link || "#"} target="_blank">
          <FiInstagram size={24} class="stroke-primary hover:fill-accent" />
        </a>
      </div>

      <div>
        <a href={links()[2]?.data.link || "#"} target="_blank">
          <FiTwitter size={24} class="stroke-primary hover:fill-accent" />
        </a>
      </div>
    </div>
  );
}
