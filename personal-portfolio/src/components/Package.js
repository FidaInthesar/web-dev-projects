import React from "react";
import Cam1 from "../assets/img/cam1.jpg";
import Cam2 from "../assets/img/cam2.jpg";
import Cam3 from "../assets/img/cam3.jpg";

const packages = [
  { id: "podcast", title: "Podcasts", image: Cam1 },
  { id: "photo", title: "Photography", image: Cam2 },
  { id: "videography", title: "Videography", image: Cam3 },
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
            {/* always-visible heading */}
            <div className="package-heading">{pkg.title}</div>

            {/* hidden details on hover */}
            <div className="package-details">
              <h4>About this package</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                vehicula cursus ante, non posuere risus.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
