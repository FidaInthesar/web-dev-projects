import React from "react";
import Cam1 from "../assets/img/cam1.jpg";
import Cam2 from "../assets/img/cam2.jpg";
import Cam3 from "../assets/img/cam3.jpg";

const packages = [
  {
    id: "bronze",
    title: "Bronze",
    price: 500,
    image: Cam1,
    features: [
      "Single Video",
      "1–3 hours of coverage",
      "4–6 hours of editing",
      "One 30–60s video/reel or two 15–20s videos/reels",
      "5–10 professionally edited photographs",
    ],
  },
  {
    id: "silver",
    title: "Silver",
    price: 1200,
    image: Cam2,
    features: [
      "8 hours of coverage",
      "10–16 hours of editing",
      "Three 15–20s videos/reels",
      "10–20 professionally edited photographs",
    ],
  },
  {
    id: "gold",
    title: "Gold",
    price: 1800,
    image: Cam3,
    features: [
      "Monthly pro content creation",
      "10–15 hours of coverage",
      "25–30 hours of editing",
      "1–2 professional consultations / month",
      "Weekly production of 1–3 videos/reels (15–60s each)",
      "20–25 professionally edited photographs",
    ],
  },
];

export default function Packages() {
  return (
    <section id="packages" className="section overflow-hidden p-0">
      <div className="packages-full">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="package-full"
            style={{ backgroundImage: `url(${pkg.image})` }}
          >
            {/* always-visible heading + price */}
            <div className="package-heading">
              {pkg.title} — ${pkg.price}
            </div>

            {/* hidden details on hover */}
            <div className="package-details">
              <h4>{pkg.title} Package</h4>
              <ul className="list-disc list-inside mt-2 space-y-1">
                {pkg.features.map((feat, i) => (
                  <li key={i}>{feat}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
