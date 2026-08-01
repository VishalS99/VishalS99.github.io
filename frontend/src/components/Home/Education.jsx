import { createSignal } from "solid-js";

function EducationUnit(props) {
  const [logo, setLogo] = createSignal(props.initialLogo);
  const [degree, setDegree] = createSignal(props.initialDegree);
  const [university, setUniversity] = createSignal(props.initialUniversity);
  const [location, setLocation] = createSignal(props.initialLocation);
  const [major, setMajor] = createSignal(props.initialMajor);
  const [specialization, setSpecialization] = createSignal(
    props.initialSpecialization,
  );
  return (
    <div class="md:grid md:grid-cols-12 flex flex-col" id="education-mb">
      <div class="md:col-span-4 flex justify-center">
        <figure class="md:w-[60%] md:m-0 w-1/3 m-4">
          <img src={logo()} alt="" />
        </figure>
      </div>
      <div class="md:col-span-8 md:text-left text-center">
        <div class="flex flex-col h-full">
          <div class="md:text-4xl text-[1.3rem] text-accent font-extrabold mb-2">
            {degree()}
          </div>
          <div class="md:mt-4 mb-4">
            {university()}, {location()}
          </div>
          <div class="text-primary text-base">
            {major()} <br />
            {specialization() ? "Specialization - " + specialization() : ""}
          </div>
        </div>
      </div>
    </div>
  );
}

function Education() {
  return (
    <div class="h-full flex" id="education">
      <div class="w-full h-1/2 flex flex-col m-auto">
        <div class="flex flex-col items-center">
          <div class="w-fit mx-auto relative z-10 -mb-0.5 px-8 py-1.5 bg-gradient-to-b from-base-100 to-neutral border-2 border-solid border-primary rounded-t-lg border-b-0 text-center md:mx-0 md:self-start md:ml-10">
            <span class="text-4xl text-accent">Education</span>
          </div>
          <div class="w-full max-h-[80vh] border-2 border-solid border-primary rounded-lg shadow-mainbox font-body bg-neutral overflow-hidden flex flex-col">
            <div class="p-14 flex-1">
            <div class="grid grid-cols-12 gap-4 h-full">
              <div class="col-span-6 ">
                <EducationUnit
                  initialLogo="/education/cu.png"
                  initialDegree="Master of Science"
                  initialUniversity="Columbia University"
                  initialLocation="NY"
                  initialMajor="Computer Science"
                  initialSpecialization="Computer Vision and Machine Learning "
                />
              </div>
              <div class="col-span-6 ">
                <EducationUnit
                  initialLogo="/education/nitt.png"
                  initialDegree="Bachelor of Technology"
                  initialUniversity="National Institute of Technology, Tiruchirappalli"
                  initialLocation="India"
                  initialMajor="Computer Science with Honors | Minor - Management Studies"
                />
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

function EducationMobile() {
  return (
    <div class="flex">
      <div class="w-11/12 flex flex-col m-auto">
        <div class="flex flex-col items-center">
          <div class="w-fit mx-auto relative z-10 -mb-0.5 px-6 py-1.5 bg-gradient-to-b from-base-100 to-neutral border-2 border-solid border-primary rounded-t-lg border-b-0 text-center md:mx-0 md:self-start md:ml-10">
            <span class="text-3xl text-accent">Education</span>
          </div>
          <div class="w-full border-2 border-solid border-primary rounded-lg shadow-mainbox font-body bg-neutral overflow-hidden flex flex-col">
            <div class="p-8 flex-1">
            <div class="flex flex-col h-full">
              <div>
                <EducationUnit
                  initialLogo="/education/cu.png"
                  initialDegree="Master of Science"
                  initialUniversity="Columbia University"
                  initialLocation="NY"
                  initialMajor="Computer Science"
                  initialSpecialization="Computer Vision and Machine Learning "
                />
              </div>
              <div class="divider" />
              <div>
                <EducationUnit
                  initialLogo="/education/nitt.png"
                  initialDegree="Bachelor of Technology"
                  initialUniversity="National Institute of Technology, Tiruchirappalli"
                  initialLocation="India"
                  initialMajor="Computer Science with Honors | Minor - Management Studies"
                />
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export { Education, EducationMobile };
