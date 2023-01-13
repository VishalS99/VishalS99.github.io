export const exp = [
  {
    id: 1,
    role: "Graduate Research Assistant",
    company: "Columbia University",
    type: "Research",
    location: "New York",
    duration: "June 2022 (Present)",
    logo: "associations/cu.png",
    desc: [
      "Collaborated with the Digital Video and Multimedia (DVMM) Lab on improving multi-modal deep learning models",
      "Working with Prof. Shih-Fu Chang towards analyzing and extending Visual Commonsense Reasoning dataset; Benchmarking the dataset to evaluate improvements",
    ],
    tech: ["PyTorch", "Python"],
  },
  {
    id: 2,
    role: "Software Engineer",
    company: "Oracle",
    type: "Internship",
    location: "Remote",
    duration: "May 2020 (2 Months)",
    logo: "associations/oracle.png",
    desc: [
      "Collaborated with the Identity Management Group and worked on Oracle Unified Directory (OUD)",
      "Created and unit-tested 5 user-defined functions for the Helm Charts for Kubernetes of OUD servers and replication servers",
    ],
    tech: ["Docker", "Kubernetes", "Helm Charts"],
  },
  {
    id: 3,
    role: "Machine Learning Engineer",
    company: "Sutherland Global",
    type: "Internship",
    location: "Chennai, India",
    duration: "May 2019 (2 Months)",
    logo: "associations/sutherland.png",
    desc: [
      "Built a module for Sutherland Extract to auto-align skewed photographed documents",
      "Developed a custom trained UNet object segmentation module in Tensorflow and OpenCV and handled backend requests through a Flask server",
      ,
      "Improved accuracy by 40% over previous implementation",
    ],
    tech: ["Python", "Tensorflow", "Flask", "OpenCV"],
  },
];

export const bio = `&#8594; A Masters student pursuing Computer Science at
<a class="highlight" href="https://www.engineering.columbia.edu/">Columbia University</a>; <br />
&#8594; A coffeeholic trying to decipher the world through code, quick captures and magic &#10024;<br />
`;

export const skills = ["C++", "Javascript", "Python"];

export const projects = [
  {
    id: 1,
    title:
      "Performance Modeling and Analysis of Unsupervised Domain Adaptation",
    desc: "Performance analysis of SOTA <span class='proj-highlight'>image-to-image translation (i2i)</span> networks for the task of <span class='proj-highlight'>domain adaptation</span> in computer vision. A detailed study using multiple compute resources, datasets, architectures and frameworks was made to analyse the impact of these variations on performance metrics.",
    link: "https://github.com/VishalS99/COMS6998-Project",
  },
  {
    id: 2,
    title: "Real-time detection of vehicular accidents using CCTV footage ",
    desc: " Modeling and comparing two approaches through computer vision and supervised deep learning to detect accidents in real-time. A setup capitalizing on various <span class='proj-highlight'>spatio-temporal features</span> extracted from the CCTV surveillance footage, providing a robust method by achieving low false alarm rate while ensuring a high detection rate.",
    link: "",
  },
  {
    id: 3,
    title: "Project Securise",
    desc: "Developed an Automatic Number Plate Recognition System for university campus that logs entrance and exit of vehicles, using <span class='proj-highlight'>FasterRCNN</span> with <span class='proj-highlight'>ResNet101</span>. The system achieved 95% extraction accuracy. ",
    link: "https://github.com/VishalS99/Project-Securise",
  },

  {
    id: 4,
    title: "Document Requisition Portal",
    desc: "A web portal for managing university's document request and verification during pandemic, created using <span class='proj-highlight'>NodeJS/Express</span>, <span class='proj-highlight'>ReactJS</span>, <span class='proj-highlight'>SQL</span>, and deployed on custom servers.",
    link: "https://github.com/SpiderNitt/Document-Request-Portal",
  },
  {
    id: 5,
    title: "Smart SQLizer",
    desc: "An <span class='proj-highlight'>OpenCV</span> based database populator to relieve the hassle! Using image processing techniques to extract tables and, create and populate SQL databases, without much user involvement.",
    link: "https://github.com/VishalS99/Smart-SQLizer",
  },
];

export const resume_url = "https://sauron-data.s3.amazonaws.com/SDE-Vishal-Saranathan.pdf";

export const photo_body = `<em>An aimless wanderlust, marking my presence in wonderlands! </em><br />
Do check out my page
<a
  style="display: inline-block; color: lightblue"
  href="https://www.instagram.com/_vishal_here_/"
  target="_blank"
  >_vishal_here_
</a>
for more of my photomania!`
