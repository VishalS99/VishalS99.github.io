export default function Navbar() {
  return (
    <div class="navbar md:shadow-nav-custom">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabIndex={0} class="btn btn-ghost  md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="8"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            class="menu dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li class="text-accent font-bold">
              <a>vishal.</a>
            </li>
            <li class="text-primary">
              <a>Experience</a>
            </li>
            <li class="text-primary">
              <a>Education</a>
            </li>
            <li class="text-primary">
              <a>Projects</a>
            </li>
            <li class="text-primary">
              <a>Photography</a>
            </li>
            <li class="text-primary">
              <a>Resume</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="navbar-center hidden md:flex">
        <ul class="menu menu-horizontal px-1 gap-5">
          <li class="text-accent font-bold">
            <a href="/">vishal.</a>
          </li>
          <li class="text-primary">
            <a>Experience</a>
          </li>
          <li class="text-primary">
            <a>Education</a>
          </li>
          <li class="text-primary">
            <a>Projects</a>
          </li>
          <li class="text-primary">
            <a>Photography</a>
          </li>
          <li>
            <button class="btn btn-outline btn-border">Resume</button>
            {/* <a>Resume</a> */}
          </li>
        </ul>
      </div>
      <div class="navbar-end hidden md:flex" />
    </div>
  );
}
