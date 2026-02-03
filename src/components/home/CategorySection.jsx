import SubcategoryCard from "./SubcategoryCard";

export default function CategorySection({ section }) {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-slate-900">
          {section.title}
        </h2>
        <p className="text-slate-600 mt-2">
          {section.subtitle}
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {section.items.map((item, i) => (
          <SubcategoryCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
}
