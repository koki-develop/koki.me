import config from "@/config";
import { LuArrowRight } from "react-icons/lu";
import { Link } from "react-router";
import SocialCard from "./components/SocialCard";

const navItems: {
  name: string;
  description: string;
  to: string;
}[] = [
  {
    name: "Works",
    to: "/works",
    description: "今までにつくったもの。",
  },
  {
    name: "Notes",
    to: "/notes",
    description: "最近書いた技術ブログ。",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="sr-only">Koki Sato</h1>

      {/* Profile */}
      <section>
        <h2 className="sr-only">Profile</h2>

        <div className="flex items-center justify-center gap-4">
          <img
            className="size-24 rounded-full bg-slate-50"
            src="/images/profile.png"
            alt=""
          />

          <div className="flex flex-col">
            <span className="text-2xl">{config.profile.name}</span>
            <span className="text-base text-slate-400">
              {config.profile.bio}
            </span>
          </div>
        </div>
      </section>

      {/* Socials */}
      <section>
        <h2 className="sr-only">Socials</h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {config.socials.map((social) => (
            <SocialCard key={social.url} social={social} />
          ))}
        </div>
      </section>

      <div className="flex flex-col gap-8 md:flex-row md:gap-4">
        {/* Skills */}
        <section className="flex-1">
          <h2 className="mb-4 text-2xl">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {config.skills.map((skill) => (
              <a
                key={skill.url}
                className="flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800 px-3 py-1"
                href={skill.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <skill.icon className="size-5" />
                <span className="text-base">{skill.name}</span>
              </a>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="flex-1">
          <h2 className="mb-4 text-2xl">Certifications</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {config.certifications.map((certification) => (
              <a
                key={certification.url}
                href={certification.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="size-24 md:size-28"
                  src={certification.imageUrl}
                  alt={certification.name}
                />
              </a>
            ))}
          </div>
        </section>
      </div>

      {/* Navigate */}
      <section>
        <h2 className="sr-only">Navigate</h2>

        <div className="flex flex-col gap-4 md:flex-row">
          {navItems.map((item) => (
            <Link
              key={item.to}
              className="group flex flex-1 flex-col rounded border border-slate-700 bg-slate-800 px-6 py-4"
              to={item.to}
            >
              <div className="mb-2 flex items-center gap-1">
                <span className="text-xl">{item.name}</span>
                <LuArrowRight className="size-5 text-slate-400 transition-transform group-hover:translate-x-1" />
              </div>
              <span className="text-sm text-slate-400">{item.description}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
