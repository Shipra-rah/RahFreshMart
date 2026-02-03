import {
  ShoppingBasket,
  Coffee,
  Home,
  Sparkles,
} from "lucide-react";

export default function Products() {
  const categories = [
    {
      title: "Groceries",
      icon: ShoppingBasket,
      items: [
        "Rice & Wheat",
        "Pulses & Lentils",
        "Cooking Oils",
        "Spices & Masalas",
        "Flours & Grains",
      ],
    },
    {
      title: "Daily Essentials",
      icon: Coffee,
      items: [
        "Tea & Coffee",
        "Sugar & Salt",
        "Biscuits & Snacks",
        "Packaged Foods",
      ],
    },
    {
      title: "Household Items",
      icon: Home,
      items: [
        "Detergents",
        "Cleaning Supplies",
        "Soaps & Shampoos",
        "Toothpaste & Brushes",
      ],
    },
    {
      title: "Personal Care",
      icon: Sparkles,
      items: [
        "Skin Care",
        "Hair Care",
        "Baby Products",
        "Health & Hygiene",
      ],
    },
  ];

  return (
    <section className="bg-[#f7f3ea] text-slate-700">
      <div className="mx-auto max-w-7xl px-6 py-20">

        {/* Header */}
        <div className="max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-800">
            Our Products
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            A carefully curated selection of daily-use products to meet
            your household needs with reliability and quality.
          </p>
        </div>

        {/* Categories */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2">

          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <div
                key={index}
                className="rounded-xl border border-black/10 bg-white p-6 shadow-sm shadow-black/10"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-black/5">
                    <Icon size={20} />
                  </div>
                  <h2 className="text-lg font-medium text-slate-800">
                    {category.title}
                  </h2>
                </div>

                {/* Items */}
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {category.items.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-6 text-sm font-medium text-slate-700">
                  Order via WhatsApp or Call
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 rounded-xl border border-black/10 bg-white p-10 text-center shadow-sm shadow-black/10">
          <h3 className="text-xl font-medium text-slate-800">
            Need something specific?
          </h3>
          <p className="mt-3 text-slate-600">
            If you don’t see a product listed, contact us directly.
            We’ll help you find it.
          </p>
        </div>

      </div>
    </section>
  );
}
