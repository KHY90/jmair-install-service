export function GallerySection() {
  const images = [
    "/images/001.jpg",
    "/images/002.jpg",
    "/images/003.jpg",
    "/images/install.webp",
    "/images/repair.webp",
    "/images/banner.jpg",
  ];

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h2 className="text-2xl sm:text-3xl font-bold leading-tight tracking-[-0.015em] pb-5 text-center">
        갤러리
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-lg">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover transition-transform duration-300 ease-in-out hover:scale-105"
              style={{ backgroundImage: `url(${src})` }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}
