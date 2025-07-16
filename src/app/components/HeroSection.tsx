"use client";
import SplitText from "../components/styles/SplitText";

export function HeroSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="w-full bg-cover bg-center bg-no-repeat min-h-[300px] sm:min-h-[400px] md:min-h-[480px] flex flex-col items-center justify-center gap-6 p-4 md:gap-8"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("/images/03.webp")',
      }}
    >
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em]">
          <SplitText
            text="시원한 바람을 선물하세요."
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
        </h1>
        <h2 className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-normal leading-normal">
          진명에어컨 이전설치 서비스를 통해 안전하고 신속하게 설치해보세요.
        </h2>
      </div>
      <button
        onClick={scrollToContact}
        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 sm:h-12 sm:px-5 bg-lime-700 text-white text-sm sm:text-base font-bold leading-normal tracking-[0.015em]"
      >
        <span className="truncate">설치 문의</span>
      </button>
    </div>
  );
}
