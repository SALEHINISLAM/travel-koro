import React from "react";
import Navbar from "../../components/Navbar/Navbar";

const Blog = () => {
  return (
    <div
      style={{
        backgroundImage: `url('/images/Rectangle 1.png')`,
        backgroundSize: "cover",
      }}
    >
      <div className="bg-black bg-opacity-70 min-h-screen w-full">
        <div className="container mx-auto">
          <Navbar from={0} />
          <div className="flex flex-col py-16 gap-16 px-4 justify-center items-center">
            <h1 className="text-center text-2xl font-bold text-white">Blogs</h1>
            <div className="bg-white flex flex-col rounded-2xl pt-10">
              <div className="text-gray-700 flex flex-col justify-center items-center rounded-2xl" >
                <h3 className="text-2xl font-bold">
                  Sajek Valley: Bangladesh's Cloud-Kissed Paradise
                </h3>
                <div className="flex flex-col lg:flex-row justify-center items-center gap-8 p-4">
                  <img src="/images/Sajek.png" alt="sajek" />
                  <div className="font-medium text-base">
                    <p>
                      Sajek Valley, often dubbed the "Rooftop of Bangladesh," is
                      a breathtaking natural wonder that has captured the hearts
                      of travelers from around the world. Nestled amidst the
                      lush green hills of Rangamati district, this enchanting
                      valley offers a surreal escape from the hustle and bustle
                      of city life.
                    </p>
                    <h4 className="text-lg font-semibold">
                      A Symphony of Nature
                    </h4>
                    <p>
                      What sets Sajek apart is its ethereal beauty. Imagine
                      waking up to a world shrouded in mist, with the sun's rays
                      gradually piercing through the clouds, casting a golden
                      hue on the surrounding mountains. As the day unfolds, the
                      valley reveals its true splendor – rolling hills carpeted
                      with emerald green, cascading waterfalls, and pristine
                      rivers meandering through the landscape.
                    </p>
                    <h4 className="text-lg font-semibold">
                      Things to Do in Sajek
                    </h4>
                    <ul className="list-disc">
                      <li>
                        Trekking: Embark on a thrilling adventure through the
                        verdant hills. There are several trekking trails that
                        cater to different fitness levels, offering breathtaking
                        views at every turn.
                      </li>
                      <li>
                        Cloud Watching: One of the most unique experiences in
                        Sajek is cloud watching. Witness the mesmerizing
                        spectacle of clouds rolling in and out, creating a
                        dreamy atmosphere.
                      </li>
                      <li>
                        Visiting Indigenous Villages: Immerse yourself in the
                        rich culture of the indigenous people who call Sajek
                        home. Explore their villages, interact with the locals,
                        and learn about their traditions.
                      </li>
                      <li>
                        Picnicking: Pack a delicious spread and find a secluded
                        spot amidst nature to enjoy a leisurely picnic. The
                        fresh air and serene surroundings create the perfect
                        ambiance for a relaxing day.
                      </li>
                      <li>
                        Photography: Capture the essence of Sajek through your
                        lens. From stunning landscapes to candid shots of local
                        life, there are endless opportunities for photography
                        enthusiasts.
                      </li>
                    </ul>
                    <h4 className="text-lg font-semibold">
                      Best Time to Visit
                    </h4>
                    <p>
                      The best time to visit Sajek is during the winter season
                      (November to February) when the weather is pleasant and
                      the skies are clear. However, the valley is equally
                      enchanting during the monsoon (March to May) when the lush
                      greenery is at its peak.
                    </p>
                    <h4 className="text-lg font-semibold">
                      Tips for Your Sajek Adventure
                    </h4>
                    <ul className="list-decimal">
                      <li>
                        Pack comfortable clothing and sturdy footwear,
                        especially if you plan on trekking.
                      </li>
                      <li>
                        Carry essentials like sunscreen, insect repellent, and a
                        first-aid kit.
                      </li>
                      <li>Respect the local culture and environment.</li>
                      <li>
                        Book your accommodation in advance, especially during
                        peak season.
                      </li>
                    </ul>
                    <p>
                      Sajek Valley is a place that will leave you spellbound.
                      Its natural beauty, coupled with the warm hospitality of
                      the locals, creates an unforgettable experience. So, pack
                      your bags and embark on a journey to this hidden gem of
                      Bangladesh.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Blog.propTypes = {};

export default Blog;
