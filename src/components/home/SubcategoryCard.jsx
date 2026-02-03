import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function SubcategoryCard({ item }) {
  const Icon = item.icon;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="group relative h-48 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
    >
      <img
        src={item.image}
        alt={item.name}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div
        className={`absolute top-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center`}
      >
        <Icon className="h-6 w-6 text-slate-700" />
      </div>

      <div className="absolute bottom-0 p-4">
        <h3 className="text-white font-semibold">{item.name}</h3>
        <span className="flex items-center gap-1 text-xs text-white/80">
          Explore <ArrowRight className="h-3 w-3" />
        </span>
      </div>
    </motion.div>
  );
}
