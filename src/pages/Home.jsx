import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Wheat,
  Droplets,
  Flame,
  Cookie,
  Coffee,
  HomeIcon,
  ArrowRight,
} from "lucide-react";

/* ---------------- ANIMATION ---------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

/* ---------------- HERO IMAGE DATA ================= */

const heroImages = [
  {
    image: "/homeImage/MusteredOil.jpg",
    title: "Premium Cooking Oils",
    description:
      "We offer the finest selection of pure cooking oils including mustard oil, refined oil, and desi ghee. Each bottle is carefully sourced to ensure the highest quality for your family's health and cooking needs.",
  },
  {
    image: "/homeImage/seeds-grains.jpg",
    title: "Fresh Grains & Rice",
    description:
      "Our premium collection of rice, grains, and flour ensures nutritious meals for your family. From Basmati rice to whole wheat flour, we provide the finest quality grains sourced directly from trusted farms.",
  },
  {
    image: "/homeImage/Spices&Masalas.jpg",
    title: "Aromatic Spices & Masalas",
    description:
      "Discover our vibrant collection of aromatic spices and traditional masala blends. Every spice is freshly ground and packed to preserve its authentic flavor, bringing traditional taste to your kitchen.",
  },
  {
    image: "/homeImage/DailyEssentials.jpg",
    title: "Daily Essentials",
    description:
      "From basic groceries to household items, we have everything you need for daily living. Our carefully curated selection ensures you get the best value and quality for your family.",
  },
  {
    image: "/homeImage/fresh-milk.jpg",
    title: "Fresh Dairy Products",
    description:
      "Experience the freshness of our dairy collection including milk, yogurt, and cheese. All products are sourced from trusted local dairies to ensure freshness and quality at your doorstep.",
  },
];

/* ---------------- CATEGORY SECTIONS DATA ================= */

const categorySections = [
  {
    title: "Grocery Essentials",
    subtitle: "Daily needs for every household",
    items: [
      {
        name: "Atta & Flour",
        icon: Wheat,
        image: "/homeImage/Atta&Flour.jpg",
        color: "from-amber-100 to-orange-100",
      },
      {
        name: "Rice & Grains",
        icon: Wheat,
        image: "/homeImage/Rice&Grains.jpeg",
        color: "from-yellow-100 to-amber-100",
      },
      {
        name: "Pulses & Dal",
        icon: Wheat,
        image: "/homeImage/Pulses&Dal.jpg",
        color: "from-orange-100 to-red-100",
      },
      {
        name: "Spices & Masala",
        icon: Flame,
        image: "/homeImage/Spices&Masala.jpg",
        color: "from-red-100 to-amber-100",
      },
    ],
  },
  {
    title: "Oil & Ghee",
    subtitle: "Pure and trusted cooking essentials",
    items: [
      {
        name: "Mustard Oil",
        icon: Droplets,
        image: "/homeImage/MustardOil.png",
        color: "from-yellow-100 to-amber-100",
      },
      {
        name: "Refined Oil",
        icon: Droplets,
        image: "/homeImage/RefinedOil.png",
        color: "from-amber-100 to-orange-100",
      },
      {
        name: "Desi Ghee",
        icon: Droplets,
        image: "/homeImage/DesiGhee.jpg",
        color: "from-orange-100 to-yellow-100",
      },
      {
        name: "Cooking Oil",
        icon: Droplets,
        image: "/homeImage/CookingOoil.jpeg",
        color: "from-yellow-100 to-orange-100",
      },
    ],
  },
  {
    title: "Snacks & Beverages",
    subtitle: "For tea-time and refreshment",
    items: [
      {
        name: "Biscuits",
        icon: Cookie,
        image: "/homeImage/butter-cookies.jpg",
        color: "from-amber-100 to-orange-100",
      },
      {
        name: "Namkeen & Snacks",
        icon: Cookie,
        image: "/homeImage/Namkeen&Snacks.jpg",
        color: "from-orange-100 to-amber-100",
      },
      {
        name: "Tea & Coffee",
        icon: Coffee,
        image: "/homeImage/Tea&Coffee.jpg",
        color: "from-amber-100 to-brown-100",
      },
      {
        name: "Cold Drinks",
        icon: Coffee,
        image: "/homeImage/ColdDrinks.jpg",
        color: "from-blue-100 to-cyan-100",
      },
    ],
  },
  {
    title: "Household Items",
    subtitle: "Clean and organized living",
    items: [
      {
        name: "Cleaning Supplies",
        icon: HomeIcon,
        image: "/homeImage/CleaningSupplies.jpg",
        color: "from-green-100 to-emerald-100",
      },
      {
        name: "Detergents",
        icon: HomeIcon,
        image: "/homeImage/Detergents.jpg",
        color: "from-blue-100 to-indigo-100",
      },
      {
        name: "Soaps & Toiletries",
        icon: HomeIcon,
        image: "/homeImage/Soaps&Toiletries.jpg",
        color: "from-purple-100 to-pink-100",
      },
      {
        name: "Daily Utilities",
        icon: HomeIcon,
        image: "/homeImage/DailyUtilities.jpg",
        color: "from-slate-100 to-gray-100",
      },
    ],
  },
];

/* ================= SUBCATEGORY CARD ================= */

const SubcategoryCard = ({ item, index }) => {
  return (
    <motion.div
      variants={fadeUp}
      className="group relative h-48 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
    >
      <img
        src={item.image}
        alt={item.name}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
      />

      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300" />

      <div
        className={`absolute top-2 left-4 w-8 h-8 rounded-sm bg-gradient-to-br ${item.color} flex items-center justify-center shadow-md`}
      >
        <item.icon className="h-6 w-6 text-slate-700" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
        <h3 className="text-white font-semibold text-sm mb-1">{item.name}</h3>
        <div className="flex items-center gap-1 text-white/80 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span>Explore</span>
          <ArrowRight className="h-3 w-3" />
        </div>
      </div>

      <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/40 rounded-2xl transition-all duration-300 pointer-events-none" />
    </motion.div>
  );
};

/* ================= HERO SECTION WITH CAROUSEL ================= */

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPrevIndex(currentIndex);
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); 

    return () => clearInterval(timer);
  }, [currentIndex]);

  const goToSlide = (index) => {
    setPrevIndex(currentIndex);
    setCurrentIndex(index);
  };

  const current = heroImages[currentIndex];
  const prev = heroImages[prevIndex];

  return (
    <section className="px-6 py-12 md:py-20">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* LEFT SIDE - ANIMATED TEXT */}
      <motion.div
        key={`text-${currentIndex}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
        className="order-2 lg:order-1"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-slate-900">
          {current.title}
        </h1>

        <p className="mt-6 text-sm text-slate-600 leading-relaxed max-w-lg">
          {current.description}
        </p>

        {/* Quick CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-8 flex gap-4"
        >
          <button className="px-8 py-3 bg-slate-800 text-white rounded-lg font-medium hover:bg-slate-900 transition">
            Shop Now
          </button>
          <button className="px-8 py-3 bg-white border border-slate-300 text-slate-800 rounded-lg font-medium hover:bg-slate-50 transition">
            Learn More
          </button>
        </motion.div>

        <p className="mt-8 text-sm text-slate-500">
          Trusted neighborhood kirana store serving quality groceries and
          daily essentials for over <strong>26 years</strong>.
        </p>
      </motion.div>

      {/* RIGHT SIDE - IMAGE CAROUSEL */}
      <motion.div className="relative order-1 lg:order-2">
        <div className="relative h-72 lg:h-[300px] rounded-xl l md:rounded-3xl overflow-hidden shadow-2xl bg-slate-100">
          <motion.img
            key={`img-${currentIndex}`}
            src={current.image}
            alt={current.title}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </div>

        {/* Indicators */}
        <div className="mt-6 flex items-center justify-center gap-3">
          {heroImages.map((_, idx) => (
            <motion.button
              key={idx}
              onClick={() => goToSlide(idx)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`h-3 rounded-full transition-all ${
                idx === currentIndex
                  ? "bg-slate-800 w-8"
                  : "bg-slate-300 w-3 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>

        <p className="mt-4 text-center text-xs text-slate-500">
          Auto-playing • Click indicators to change
        </p>
      </motion.div>

    </div>
  </div>
</section>

  );
};



export default function Home() {
  return (
    <div className="bg-[#f7f3ea] text-slate-800">
     
      <HeroSection />

      <section className="px-6 pb-24 pt-12">
        <div className="max-w-6xl mx-auto space-y-24">
          {categorySections.map((section, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
            >
              {/* CATEGORY HEADING */}
              <motion.div
                className="mb-10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-1 w-12 bg-slate-800 rounded-full" />
                  <h2 className="text-3xl md:text-4xl font-semibold">
                    {section.title}
                  </h2>
                </div>
                <p className="text-slate-600 mt-3 text-base">
                  {section.subtitle}
                </p>
              </motion.div>

              {/* SUBCATEGORY GRID */}
              <motion.div
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                {section.items.map((item, i) => (
                  <SubcategoryCard key={i} item={item} index={i} />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>
     
    </div>
  );
}