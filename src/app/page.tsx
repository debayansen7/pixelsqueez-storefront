import Link from "next/link";
import ImageCompareSlider from "../components/ImageCompareSlider";
import { siteContent } from "../data/content";
import { HowitWorks } from "../components/HowitWorks";

export default function HomePage() {
const {hero, features, howItWorks, cta} = siteContent.home;

return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-24">
      {/* Main Layout Container: Vertical on Mobile, Horizontal on Desktop/Tablet */}
      <div className="flex flex-col md:flex-row gap-12 items-center">
        {/* Section 1: Value Proposition & Details */}
        <div className="flex-1 space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            {hero.title} <br />
            <span className="text-indigo-600">
              {hero.highlight}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            {hero.descriptionPre}{" "}
            <strong className="text-gray-900 font-semibold">
              {hero.formats.slice(0, 3).join(", ")},
            </strong>{" "}
            and <strong className="text-gray-900 font-semibold">GIF</strong>.
          </p>

          <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-bold text-indigo-900 mb-4">
              {features.title}
            </h3>
            <ul className="space-y-4 text-indigo-800">
              {features.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-2xl leading-none">{item.icon}</span>
                  <span>
                    {item.textPre}{" "}
                    {item.highlight && (
                      <strong className="font-bold">{item.highlight}</strong>
                    )}{" "}
                    {item.textPost}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Section 2: Interactive Before & After Slider */}
        <div className="flex-1 w-full">
          <ImageCompareSlider />
        </div>
      </div>

      <HowitWorks {...howItWorks} />

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
