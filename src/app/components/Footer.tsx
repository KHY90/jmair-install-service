import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 py-10">
      <div className="container mx-auto max-w-3xl text-center space-y-4 px-4">
        {/* 상단 로고 겸 상호 */}
        <h3 className="text-2xl font-semibold">진명에어컨 이전설치</h3>

        {/* 연락처 */}
        {/* <p className="text-base">H.P: 010-1234-5678&nbsp;|&nbsp;</p> */}

        {/* 저작권 */}
        <p className="text-sm text-gray-600">
          copyright(c) 2025 진명에어컨 all rights reserved.
        </p>

        {/* 사업자 정보 */}
        {/* <p className="text-sm text-gray-600">
          상호: 진명에어컨&nbsp;|&nbsp;
          사업자 등록번호: 000-00-0000&nbsp;|&nbsp;
          대표자: 진명에어컨
        </p> */}
      </div>
    </footer>
  );
}
