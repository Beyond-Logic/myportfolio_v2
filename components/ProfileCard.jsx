import Image from "next/image";
import ProfilePhoto from "../images/EdemaEro.jpeg";

const ProfileCard = () => {
  return (
    <div className="Intro">
      <div className="Info">
        <h1 className="text-xl font-bold">Edema Ero @BeyondLogic</h1>
        <h3 className="pt-4 text-base">
          Software Engineer | Frontend Developer
        </h3>
        <p className="pt-8 text-base">
          As a skilled software engineer with a passion for front-end
          development and previous experience as a Junior Frontend Engineer, I
          have gained expertise in developing responsive and functional user
          interfaces using React/Next.js. I am seeking an opportunity that will allow me
          to continue to grow and improve my current skills, while also
          developing new ones. I am confident that I would be a valuable
          addition to your team.
        </p>
        <p className="pt-4 text-base">
          Skills Include: <br />
          <b>
            HTML, CSS, JavaScript, React/Next.js, TypeScript, TailwindCSS, ReduxToolKit/RTK Query,
            Webpack, Babel & NPM, Git/GitHub, RESTful API Integration, Web
            Performance and Optimization Techniques, Web Accessibility Standards
            and best Practices & WordPress
          </b>
        </p>
        <div className="buttons mt-8">
          <button className="">
            <a
              href="https://github.com/Beyond-Logic"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </button>
          <button>
            <a
              href="https://www.fiverr.com/webify20"
              target="_blank"
              rel="noreferrer"
            >
              Fiverr
            </a>
          </button>
          <button>
            <a
              href="https://www.linkedin.com/in/edemaero/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </button>
        </div>
      </div>
      <div className="InfoPhoto mb-4">
        <Image
          src={ProfilePhoto}
          alt="Edema - Frontend Developer"
          width={150}
          height={150}
          style={{ borderRadius: "100px" }}
        />
      </div>
    </div>
  );
};

export default ProfileCard;
