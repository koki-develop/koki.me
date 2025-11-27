import config from "@/config";
import WorkCard from "./components/WorkCard";

export default function WorksPage() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl">Works</h1>

      {config.workCategories.map((category) => (
        <section key={category.name}>
          <h2 className="mb-4 flex items-center gap-2 text-2xl">
            <category.icon />
            <span>{category.name}</span>
          </h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {category.works.map((work) => (
              <WorkCard key={work.url} work={work} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
