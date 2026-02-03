import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ChevronDown,
  Award,
  Users,
  Star,
  Heart,
  Handshake,
  TrendingUp,
  Building2,
  Target,
  Clock,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

// ============================================================================
// ANIMATED PROGRESS BAR
// ============================================================================
const ProgressBar = () => {
  const { scrollY } = useScroll();
  const scaleX = useTransform(scrollY, [0, 3000], [0, 1]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 via-teal-400 to-emerald-600 z-30 origin-left"
      style={{ scaleX }}
    />
  );
};

// ============================================================================
// OWNER CARD WITH PROFESSIONAL DESIGN
// ============================================================================
const OwnerCard = ({ name, role, image, index, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.2, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-50px' }}
      className="group"
    >
      <div
        className="relative mb-8 mx-auto w-56 h-56 rounded-3xl overflow-hidden bg-gradient-to-br from-emerald-50 to-white transition-all duration-500"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          boxShadow: isHovered
            ? '0 25px 50px rgba(5, 150, 105, 0.25), 0 10px 30px rgba(5, 150, 105, 0.1)'
            : '0 10px 30px rgba(0, 0, 0, 0.08), 0 2px 10px rgba(0, 0, 0, 0.05)',
        }}
      >
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.08 : 1 }}
          transition={{ duration: 0.4 }}
        />

        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 via-transparent to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        <motion.div
          className="absolute inset-0 rounded-3xl border-2 border-transparent"
          initial={{ borderColor: 'transparent' }}
          animate={{
            borderColor: isHovered ? 'rgba(5, 150, 105, 0.5)' : 'transparent',
          }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="text-center px-4">
        <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-emerald-600 transition-colors">
          {name}
        </h3>
        <p className="text-sm font-semibold text-emerald-600 mb-4">
          {role}
        </p>

        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isHovered ? 'auto' : 0, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-emerald-200">
            {description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

const StatBox = ({ value, label, icon: Icon, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="p-7 rounded-2xl bg-white border border-emerald-100 shadow-lg hover:shadow-xl hover:border-emerald-300 transition-all duration-300 cursor-pointer group"
    >
      <motion.div
        className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 flex items-center justify-center mb-4 group-hover:from-emerald-100 group-hover:to-emerald-200 transition-all"
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        <Icon className="w-6 h-6 text-emerald-600" />
      </motion.div>

      <div className="text-4xl font-bold text-slate-900 mb-2">{value}</div>
      <p className="text-sm text-slate-600 font-medium">{label}</p>
    </motion.div>
  );
};

// ============================================================================
// TIMELINE COMPONENT
// ============================================================================
const TimelineItem = ({ year, title, description, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`mb-12 flex ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      <div className="md:w-1/2 md:px-6">
        <div className="bg-white p-7 rounded-2xl border border-emerald-100 shadow-lg hover:shadow-xl hover:border-emerald-300 transition-all">
          <span className="inline-block bg-emerald-600 text-white px-4 py-1 rounded-full text-xs font-bold mb-3 tracking-wide">
            {year}
          </span>
          <h4 className="text-lg font-bold text-slate-900 mb-2">{title}</h4>
          <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
        </div>
      </div>

      <div className="hidden md:flex md:w-1/2 items-center justify-center">
        <motion.div
          className="w-5 h-5 rounded-full bg-gradient-to-r from-emerald-600 to-teal-400 shadow-lg border-4 border-white"
          whileHover={{ scale: 1.2 }}
          transition={{ type: 'spring', stiffness: 400 }}
        />
      </div>
    </motion.div>
  );
};

// ============================================================================
// VALUE CARD COMPONENT
// ============================================================================
const ValueCard = ({ icon: Icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="p-8 rounded-2xl bg-white border border-emerald-100 shadow-lg hover:shadow-xl hover:border-emerald-300 transition-all duration-300 group cursor-pointer"
    >
      <motion.div
        className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 flex items-center justify-center mb-5 group-hover:from-emerald-100 group-hover:to-emerald-200 transition-all"
        whileHover={{ scale: 1.15, rotate: -5 }}
      >
        <Icon className="w-7 h-7 text-emerald-600" />
      </motion.div>
      <h3 className="text-lg font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed">{description}</p>

      <motion.div
        className="mt-5 flex items-center text-emerald-600 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
        animate={{ x: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        Learn more
        <ArrowRight className="w-3 h-3 ml-2" />
      </motion.div>
    </motion.div>
  );
};

// ============================================================================
// MAIN ABOUT COMPONENT
// ============================================================================
export default function About() {
  const scrollYProgress = useScroll();

  return (
    <div className="bg-white text-slate-900">
      <ProgressBar />

      {/* ===== HERO SECTION ===== */}
      <section className="relative px-6 py-20 md:py-32 overflow-hidden">
        {/* Animated Background Gradient */}
        <motion.div
          className="absolute inset-0 -z-10"
          animate={{
            background: [
              'linear-gradient(135deg, rgba(5, 150, 105, 0.08) 0%, rgba(110, 231, 183, 0.04) 100%)',
              'linear-gradient(135deg, rgba(110, 231, 183, 0.04) 0%, rgba(5, 150, 105, 0.08) 100%)',
            ],
          }}
          transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
        />

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 mb-8"
          >
            <Building2 className="w-4 h-4 text-emerald-600" />
            <span className="text-xs font-semibold text-emerald-600 tracking-wide uppercase">
              Our Legacy
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Built Together,
              <span className="block bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-400 bg-clip-text text-transparent">
                Grown with Trust
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-sm md:text-sm text-slate-600 leading-relaxed max-w-3xl"
            >
              Founded by Rajaram, Achhelal, and Harishankar, we have proudly spent over 26 years serving our community with integrity, dedication, and quality at heart. From humble beginnings as a local shop to becoming a respected and trusted brand, our commitment to genuine care and excellence has never changed.
            </motion.p>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="mt-12"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
          >
            <ChevronDown className="w-6 h-6 text-emerald-600" />
          </motion.div>
        </div>
      </section>

      {/* ===== STATISTICS SECTION - BENTO GRID ===== */}
      <section className="px-6 py-20 md:py-28 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center">
              A Legacy of Trust
            </h2>
            <p className="text-center text-slate-600 mt-4 text-lg">
              26 years of dedication to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatBox
              value="26+"
              label="Years of Service"
              icon={Award}
              delay={0}
            />
            <StatBox
              value="10,000+"
              label="Satisfied Customers"
              icon={Users}
              delay={0.1}
            />
            <StatBox
              value="100%"
              label="Commitment Quality"
              icon={Star}
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* ===== OUR STORY SECTION ===== */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-10">
              Our Story
            </h2>

            <div className="space-y-6 text-slate-700 leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0 }}
                viewport={{ once: true }}
                className="text-lg"
              >
                What started as a small neighborhood shop with three determined
                brothers has evolved into a cornerstone of community trust.
                Rajaram, Achhelal, and Harishankar believed in providing quality
                products at fair prices, backed by genuine customer care—a
                philosophy that remains unchanged today.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-lg"
              >
                Every single day, we focus on what matters most: stocking
                products that families trust, building lasting relationships
                with our neighbors, and maintaining the integrity that has
                defined us for over two decades. We don't follow trends; we set
                standards.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg"
              >
                Our success isn't measured in balance sheets alone—it's in the
                unwavering trust our customers place in us and the vibrant
                community we've built together. We are honored to serve you.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== TIMELINE SECTION ===== */}
      <section className="px-6 py-20 md:py-28 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Timeline
            </h2>
            <p className="text-slate-600 text-lg">
              A journey of growth and commitment
            </p>
          </motion.div>

          <div className="space-y-8">
            <TimelineItem
              year="1999"
              title="The Foundation"
              description="Three brothers open their first small shop with a big vision to serve the community with integrity and quality products at fair prices."
              index={0}
            />
            <TimelineItem
              year="2009"
              title="Community Growth"
              description="Expanded operations to serve over 5,000 regular customers, establishing ourselves as a trusted neighborhood institution."
              index={1}
            />
            <TimelineItem
              year="2017"
              title="Modernization"
              description="Integrated modern technology while maintaining our personal touch and family values that define our brand."
              index={2}
            />
            <TimelineItem
              year="2025"
              title="Legacy Milestone"
              description="Celebrating 26 years of unwavering service to families who have trusted us across generations."
              index={3}
            />
          </div>
        </div>
      </section>

      {/* ===== LEADERSHIP SECTION ===== */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              The Founders
            </h2>
            <p className="text-slate-600 text-lg">
              Visionary leaders dedicated to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <OwnerCard
              name="Mr. Rajaram"
              role="Founder & Vision"
              description="Initiated the vision with integrity at its core. His leadership principles guide every decision we make and every customer we serve."
              image="/shipra.jpeg"
              index={0}
            />
            <OwnerCard
              name="Mr. Achhelal"
              role="Operations & Community"
              description="The operational backbone connecting us to every customer. Known for his attention to detail and genuine commitment to community relationships."
              image="/shipra.jpeg"
              index={1}
            />
            <OwnerCard
              name="Mr. Harishankar"
              role="Quality & Standards"
              description="Champion of excellence ensuring every product meets our rigorous standards. His passion for quality has never wavered across 26 years."
              image="/shipra.jpeg"
              index={2}
            />
          </div>
        </div>
      </section>

      {/* ===== VALUES SECTION ===== */}
      <section className="px-6 py-20 md:py-28 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-slate-600 text-lg">
              Principles that define every action
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard
              icon={CheckCircle2}
              title="Quality Excellence"
              description="Every product meets rigorous standards. We ensure freshness, reliability, and excellence in everything we offer our customers."
              delay={0}
            />
            <ValueCard
              icon={Handshake}
              title="Trusted Partnership"
              description="Built on transparency, fair pricing, and honest relationships. Your trust is our most valuable asset and greatest responsibility."
              delay={0.1}
            />
            <ValueCard
              icon={Heart}
              title="Community First"
              description="We're invested in our neighborhood and celebrate the families we serve. Your success is our success."
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="md:px-6  px-0 py-20 md:py-28">
        <div className="md:max-w-4xl w-full mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="p-8 md:p-16 md:rounded-3xl bg-gradient-to-br from-emerald-600 to-emerald-700 text-white shadow-2xl border border-emerald-500/50"
          >
            <div className="flex items-start gap-4 mb-6">
              <TrendingUp className="w-8 h-8 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Join Our Growing Community
                </h3>
                <p className="text-emerald-100 text-sm leading-relaxed mb-8">
                  We're grateful for every customer who has entrusted us over the
                  years. Your loyalty keeps us committed to excellence every
                  single day. Visit us today and experience the difference that
                  26 years of dedication brings.
                </p>

                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 15px 40px rgba(0,0,0,0.2)' }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 bg-white text-emerald-600 font-bold rounded-lg hover:bg-emerald-50 transition-all shadow-lg"
                >
                  Visit Our Store
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}