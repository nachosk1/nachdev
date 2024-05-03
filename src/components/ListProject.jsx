import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

export default function ListProyect({ listProjects }) {
  return (
    <div className="mt-8">
      <Swiper
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
        }}
      >
        {listProjects.map(
          ({ id, title, url, description, skills, image, type }) => (
            <SwiperSlide
              className="h-[40vh] md:h-[65vh] shadow hover:shadow-lg dark:bg-slate-200 dark:text-black rounded"
              key={id}
            >
              <a href={url} className="group">
                <div className="relative overflow-hidden">
                  <img
                    src={image}
                    alt={`imagen ${title}`}
                    width={300}
                    height={300}
                    className="rounded-t group-hover:scale-105 transition duration-300 ease-in-out transform w-full h-[300px] object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-black/25 backdrop-blur-sm rounded-full px-4 py-1 text-white">
                      {type}
                    </span>
                  </div>
                </div>
                <div className="p-4 border dark:border-none">
                  <h3 className="font-bold ">{title}</h3>
                  <p className="mt-2 text-gray-900 line-clamp-5">
                    {description}
                  </p>
                  <div className="mt-4 flex gap-2 flex-wrap">
                    {skills.map((skill) => (
                      <span
                        className="bg-secondary text-white rounded-full px-2 py-1 dark:bg-dark-third"
                        key={skill}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
}
