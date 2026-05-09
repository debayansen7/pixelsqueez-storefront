import Link from "next/link";
import { siteContent } from "../../data/content";

export default function AboutPage() {
  const { hero, mission, stats, features, techStack, cta } =
    siteContent.about;

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-20">
      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          {hero.title}{" "}
          <span className="text-indigo-600">{hero.highlight}</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          {hero.description}
        </p>
      </section>

      {/* Stats Bar */}
      <section className="bg-indigo-600 rounded-3xl p-8 md:p-12 shadow-xl shadow-indigo-600/15">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <p className="text-3xl md:text-4xl font-extrabold text-white mb-1">
                {stat.value}
              </p>
              <p className="text-indigo-200 font-medium text-sm md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white/60 backdrop-blur-md rounded-3xl p-8 md:p-16 border border-white/50 shadow-sm">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          {/* Icon Cluster */}
          <div className="flex-shrink-0">
            <div className="w-28 h-28 md:w-36 md:h-36 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-lg shadow-indigo-500/20 rotate-3 hover:rotate-0 transition-transform duration-300">
              <svg
                className="w-14 h-14 md:w-18 md:h-18 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
              </svg>
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              {mission.title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {mission.description}
            </p>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section>
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            What Makes Us Different
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            PixelSqueez is not just another compression tool — it&apos;s
            engineered for the modern web.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white/60 backdrop-blur-md rounded-2xl p-8 border border-white/50 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="bg-white/60 backdrop-blur-md rounded-3xl p-8 md:p-16 border border-white/50 shadow-sm">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            {techStack.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {techStack.description}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {techStack.items.map((tech, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                {tech.name.charAt(0)}
              </div>
              <h4 className="font-bold text-gray-900 mb-1">{tech.name}</h4>
              <p className="text-sm text-gray-500">{tech.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-12 md:py-20">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          {cta.title}
        </h2>
        <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto font-medium">
          {cta.description}
        </p>
        <Link
          href={cta.buttonLink}
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-lg py-4 px-10 rounded-full transition-transform hover:scale-105 shadow-xl shadow-indigo-600/20"
        >
          {cta.buttonText}
        </Link>
      </section>
    </main>
  );
}