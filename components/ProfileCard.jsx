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
          As a software engineer with a passion for frontend development, I
          possess a rich skill set that includes:{" "}
          <b>
            HTML, CSS, Javascript, React/Next.js, Typescript, React Query, Unit
            Testing, and WordPress
          </b>
          . I am committed to staying up-to-date with the latest technologies
          and best practices in the field. With a dedication to delivering
          exceptional results and a genuine enthusiasm for the work, I am
          confident that I would be a valuable addition to your team.
        </p>
        {/* <p className="pt-4 text-base">
          Skills Include: <br />
          <b>
            HTML, CSS, Javascript, React/Next.js, Typescript, React Query, Unit
            Testing, & WordPress.
          </b>
        </p> */}
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
