import React from 'react'

interface PricingItem {
  label: string
  price: string
}

interface PricingCategory {
  title: string
  items: PricingItem[]
}

const pricingData: PricingCategory[] = [
  {
    title: '가정용 벽걸이형',
    items: [
      { label: '기본 설치비용', price: '40,000원' },
      { label: '철거', price: '30,000원' },
      { label: '배관 (1m 기준)', price: '13,000원' },
      { label: '가스 보충비', price: '30,000~50,000원' },
      { label: '앵글 설치', price: '100,000원~' },
    ],
  },
  {
    title: '가정용 스탠드형',
    items: [
      { label: '기본 설치비용', price: '40,000원' },
      { label: '철거', price: '30,000원' },
      { label: '배관 (1m 기준)', price: '15,000원' },
      { label: '가스 보충비', price: '30,000~50,000원' },
      { label: '앵글 설치', price: '100,000원~' },
    ],
  },
  {
    title: '가정용 투인원',
    items: [
      { label: '기본 설치비용', price: '80,000원' },
      { label: '철거', price: '50,000원' },
      { label: '배관 (벽걸이/스탠드, 1m 기준)', price: '13,000원 / 15,000원' },
      { label: '가스 보충비', price: '30,000~50,000원' },
      { label: '앵글 설치', price: '100,000원~' },
    ],
  },
]

const additionalCosts: PricingItem[] = [
  { label: '기존 앵글 재설치', price: '30,000~50,000원' },
  { label: '배수 펌프', price: '60,000~130,000원' },
  { label: '용접비 (개당)', price: '10,000원' },
  { label: '벽에 타공을 해야 하는 경우 (개당)', price: '30,000원' },
  { label: '사다리차 이용이 필요한 경우', price: '고객 부담' },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          에어컨 설치 가격 안내
        </h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {pricingData.map((cat) => (
            <div
              key={cat.title}
              className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-4">{cat.title}</h3>
              <ul className="space-y-2">
                {cat.items.map((item) => (
                  <li
                    key={item.label}
                    className="flex justify-between text-base"
                  >
                    <span>{item.label}</span>
                    <span className="font-medium text-gray-700">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-6">
            추가 비용이 발생하는 경우
          </h3>
          <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow">
            <ul className="space-y-2">
              {additionalCosts.map((item) => (
                <li
                  key={item.label}
                  className="flex justify-between text-base"
                >
                  <span>{item.label}</span>
                  <span className="font-medium text-gray-700">
                    {item.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
