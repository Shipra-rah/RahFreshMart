import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  ChevronRight,
} from "lucide-react";


/* ===================================================== */
/* CONFIG                                                 */
/* ===================================================== */

const BRAND = {
  name: "RahKirana",
  highlight: "Kirana",
  description:
    "A trusted local kirana store serving families in Baskhari with consistency, fairness, and care for over 26 years.",
};

const QUICK_LINKS = ["Home", "About", "Products", "Contact"];

const CONTACT = {
  address: "Durganagar, Baskhari, Ambedkar Nagar, Uttar Pradesh",
  phones: ["+91 9598612059", "+91 9616350866"],
  email: "support@rahkirana.in",
};

const SOCIALS = [
  { icon: Facebook, label: "Facebook" },
  { icon: Instagram, label: "Instagram" },
  { icon: Twitter, label: "Twitter" },
];

/* ===================================================== */
/* REUSABLE SECTION                                      */
/* ===================================================== */

const FooterSection = ({ title, children }) => (
  <div>
    <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
      {title}
    </h3>
    {children}
  </div>
);

/* ===================================================== */
/* FOOTER                                                */
/* ===================================================== */

const Footer = () => {
  return (
    <footer className="bg-[#0b0b0b] text-slate-300">
      {/* Main */}
      <div className="mx-auto max-w-7xl px-6 py-14 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

        {/* Brand */}
        <div>
          <h2 className="text-xl font-semibold text-white">
            Rah<span className="text-green-500">{BRAND.highlight}</span>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">
            {BRAND.description}
          </p>
        </div>

        {/* Quick Links */}
        <FooterSection title="Quick Links">
          <ul className="space-y-2 text-sm">
            {QUICK_LINKS.map((link) => (
              <li
                key={link}
                className="cursor-pointer transition hover:text-white flex items-center gap-1"
              >
                <ChevronRight /> {link}
              </li>
            ))}
          </ul>
        </FooterSection>

        {/* Contact + Map */}
        <FooterSection title="Contact">
          <ul className="space-y-3 text-sm mb-4">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 text-green-500" />
              {CONTACT.address}
            </li>

            {CONTACT.phones.map((phone) => (
              <li key={phone} className="flex items-center gap-2">
                <Phone size={16} className="text-green-500" />
                {phone}
              </li>
            ))}

            <li className="flex items-center gap-2">
              <Mail size={16} className="text-green-500" />
              {CONTACT.email}
            </li>
          </ul>

          <div className="overflow-hidden rounded-lg border border-white/10">
            <iframe
  title="Rah Kirana Location"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d914646.0295437735!2d82.80025124256042!3d26.42876676496961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3990e5314e02c225%3A0x673c0f2cb0081221!2sSangam%20Kirana%20Store!5e0!3m2!1sen!2sin!4v1770014090226!5m2!1sen!2sin"
  className="
    w-full
    h-16 md:h-24
    rounded-lg
    border border-black/10
    grayscale
    opacity-90
    hover:grayscale-0
    hover:opacity-100
    transition-all
    duration-300
  "
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  allowFullScreen
/>

          </div>
        </FooterSection>

        {/* Social */}
        <FooterSection title="Follow Us">
          <div className="flex gap-4">
            {SOCIALS.map(({ icon: Icon, label }) => (
              <a
                key={label}
                aria-label={label}
                className="cursor-pointer transition hover:text-green-500"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </FooterSection>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <span>
            © {new Date().getFullYear()} Rah Kirana. All rights reserved.
          </span>
          <span className="mt-2 sm:mt-0">
            Serving our community with trust and care — every day.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
