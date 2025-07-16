import { MdOutlineMail, MdOutlineCalendarToday, MdOutlineBuild, MdOutlineSupportAgent } from 'react-icons/md';

export function ProcessSection() {
  const steps = [
    { title: '신청 및 상담', description: '설치 신청을 하면 전문가와 상세한 상담을 진행합니다.', icon: <MdOutlineMail className="w-8 h-8" /> },
    { title: '일정 결정', description: '설치 일정과 비용을 확인하고 설치 예약을 합니다.', icon: <MdOutlineCalendarToday className="w-8 h-8" /> },
    { title: '설치 진행', description: '전문 기사가 방문하여 에어컨을 설치합니다.', icon: <MdOutlineBuild className="w-8 h-8" /> },
    { title: '사후 관리', description: '설치 후 에어컨 상태를 관리하고 지원을 제공합니다.', icon: <MdOutlineSupportAgent className="w-8 h-8" /> },
  ];

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          설치 과정
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-lime-600 text-white">
              {step.icon}
            </div>
            <h3 className="mb-2 text-xl font-bold text-center">{step.title}</h3>
            <p className="text-sm text-gray-700 text-center">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
