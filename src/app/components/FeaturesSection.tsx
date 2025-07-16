import { ShieldCheckIcon, TruckIcon, CurrencyCircleDollarIcon } from './Icons';

export function FeaturesSection() {
  return (
    <div className="flex flex-col gap-10 px-4 py-10">
      <div className="flex flex-col gap-4 text-center">
        <h1 className="text-[#111418] tracking-light text-3xl sm:text-4xl font-bold leading-tight">
          진명에어컨에서 설치해야하는 이유
        </h1>
        <p className="text-[#111418] text-base sm:text-lg font-normal leading-normal max-w-3xl mx-auto">20년 이상 경력의 이전설치 전문가로 깔끔하고 정확한 시공을 해드립니다.</p>
        <p className="text-[#111418] text-base sm:text-lg font-normal leading-normal max-w-3xl mx-auto mt-2">
          경기 북부, 서울 지역 이전설치 전문업체
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-0">
        <div className="flex flex-1 flex-col gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4">
          <div className="text-[#111418]">
            <ShieldCheckIcon />
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-[#111418] text-base font-bold leading-tight">안전한 설치</h2>
            <p className="text-[#60758a] text-sm font-normal leading-normal">안전을 최우선으로 생각하며, 다양한 에어컨 모델에 대한 허가받은 기술자를 보유하고 있습니다.</p>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4">
          <div className="text-[#111418]">
            <TruckIcon />
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-[#111418] text-base font-bold leading-tight">신속한 서비스</h2>
            <p className="text-[#60758a] text-sm font-normal leading-normal">신속한 설치 서비스를 제공하여 에어컨을 바로 사용할 수 있도록 합니다.</p>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4">
          <div className="text-[#111418]">
            <CurrencyCircleDollarIcon />
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-[#111418] text-base font-bold leading-tight">경제적인 비용</h2>
            <p className="text-[#60758a] text-sm font-normal leading-normal">합리적인 가격으로 최상의 서비스를 제공하여 예산을 절약할 수 있도록 합니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
