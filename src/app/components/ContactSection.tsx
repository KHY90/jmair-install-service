"use client";
import React, { useState, FormEvent, ChangeEvent, useEffect } from "react";
import { formatPhoneNumber, isValidPhoneNumber } from "../lib/validation";
import { FaPaperPlane } from "react-icons/fa";

interface DaumPostcodeData {
  zonecode: string;
  address: string;
  addressType: string;
  bname: string;
  buildingName: string;
  roadAddress: string;
  jibunAddress: string;
}

interface DaumPostcode {
  new (options: { oncomplete: (data: DaumPostcodeData) => void }): {
    open: () => void;
  };
}

declare global {
  interface Window {
    daum: {
      Postcode: DaumPostcode;
    };
  }
}

export default function ContactSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [postcode, setPostcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [inquiry, setInquiry] = useState("");

  const [phoneError, setPhoneError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isConsentChecked, setIsConsentChecked] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
    script.async = true;
    document.head.appendChild(script);
  }, []);

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhone(formatted);

    if (formatted && !isValidPhoneNumber(formatted)) {
      setPhoneError("올바른 휴대폰 번호 형식(010-XXXX-XXXX)이 아닙니다.");
    } else {
      setPhoneError("");
    }
  };

  const handleAddressSearch = () => {
    if (window.daum && window.daum.Postcode) {
      new window.daum.Postcode({
        oncomplete: (data: DaumPostcodeData) => {
          setPostcode(data.zonecode);
          setAddress(data.address);
          setAddressError("");
          document.getElementById("addressDetail")?.focus();
        },
      }).open();
    } else {
      alert("주소 검색 서비스를 불러오는 중입니다. 잠시 후 다시 시도해주세요.");
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!isValidPhoneNumber(phone)) {
      setPhoneError("올바른 휴대폰 번호 형식(010-XXXX-XXXX)을 입력해주세요.");
      return;
    }
    if (!address) {
      setAddressError("주소를 검색해주세요.");
      return;
    }
    if (!isConsentChecked) {
      alert("개인정보 수집 및 이용에 동의해야 문의를 접수할 수 있습니다.");
      return;
    }

    setLoading(true);
    setPhoneError("");
    setAddressError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          postcode,
          address,
          addressDetail,
          inquiry,
        }),
      });
      const data = await res.json();

      if (res.ok) {
        alert(data.message);
        setName("");
        setPhone("");
        setPostcode("");
        setAddress("");
        setAddressDetail("");
        setInquiry("");
        setIsConsentChecked(false);
      } else {
        alert(`오류: ${data.message}`);
      }
    } catch (err) {
      console.error(err);
      alert("오류: 메일 전송에 실패했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">문의하기</h2>
        {/* <p className="text-center text-gray-600 mb-8">
          제공하신 정보는 상담 후 바로 폐기됩니다.
        </p> */}
        <p className="text-center font-bold text-red-400 mb-8">
          저희 서비스는 경기 북부(양주, 의정부, 남양주, 포천, 파주 등) 및
          서울(도봉구, 노원구, 강북구, 은평구, 성북구, 종로구 등) 지역에 한해
          제공됩니다.
        </p>
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            {/* 이름 */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
              >
                이름
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
                required
              />
            </div>

            {/* 연락처 */}
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-gray-700 font-bold mb-2"
              >
                연락처
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={handlePhoneChange}
                className={`
                  w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2
                  ${
                    phoneError
                      ? "border-red-500 focus:ring-red-500"
                      : "focus:ring-lime-500"
                  }
                `}
                required
                maxLength={13}
                placeholder="010-1234-5678"
              />
              {phoneError && (
                <p className="text-red-500 text-xs mt-1">{phoneError}</p>
              )}
            </div>

            {/* 주소 */}
            <div className="mb-4">
              <label
                htmlFor="address"
                className="block text-gray-700 font-bold mb-2"
              >
                설치 주소
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  id="postcode"
                  value={postcode}
                  placeholder="우편번호"
                  className="w-1/3 px-3 py-2 border rounded-lg bg-gray-100 focus:outline-none"
                  readOnly
                />
                <button
                  type="button"
                  onClick={handleAddressSearch}
                  className="bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-lg hover:bg-gray-300 transition duration-300"
                >
                  주소 검색
                </button>
              </div>
              <input
                type="text"
                id="address"
                value={address}
                placeholder="주소"
                className={`w-full mt-2 px-3 py-2 border rounded-lg bg-gray-100 focus:outline-none ${addressError ? "border-red-500" : ""}`}
                readOnly
              />
              <input
                type="text"
                id="addressDetail"
                value={addressDetail}
                onChange={(e) => setAddressDetail(e.target.value)}
                placeholder="상세주소 (예: 아파트 동, 호수)"
                className="w-full mt-2 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
              />
              {addressError && (
                <p className="text-red-500 text-xs mt-1">{addressError}</p>
              )}
            </div>

            {/* 문의 내용 */}
            <div className="mb-6">
              <label
                htmlFor="inquiry"
                className="block text-gray-700 font-bold mb-2"
              >
                문의 내용
              </label>
              <textarea
                id="inquiry"
                value={inquiry}
                onChange={(e) => setInquiry(e.target.value)}
                rows={6}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
                required
                placeholder={
                  "설치 요청 사항을 작성해주세요.\n" +
                  "예) 벽걸이 에어컨 설치 요청\n" +
                  "추가로 필요한 사항을 자유롭게 작성해주세요."
                }
              ></textarea>
            </div>

            {/* 개인정보 수집 및 이용 동의 */}
            <div className="mb-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-lime-600"
                  checked={isConsentChecked}
                  onChange={(e) => setIsConsentChecked(e.target.checked)}
                  required
                />
                <span className="ml-2 text-sm text-gray-700">
                  개인정보 수집 및 이용 동의 (필수) : 본인은 상담을 위해 이름,
                  연락처, 주소, 문의 내용을 수집 및 이용하는 것에 동의합니다.
                  수집된 정보는 상담 목적으로만 사용되며, 상담 완료 후 즉시
                  폐기됩니다.
                </span>
              </label>
            </div>

            {/* 전송 버튼 */}
            <div className="text-cneter flex justify-end">
              <button
                type="submit"
                disabled={!!phoneError || loading || !isConsentChecked}
                className={`
                  bg-lime-600 text-white font-bold py-3 px-8 rounded-full
                  hover:bg-lime-700 transition duration-300
                  disabled:bg-gray-400 disabled:cursor-not-allowed
                  flex items-center justify-center space-x-2
                `}
              >
                {loading ? (
                  <FaPaperPlane className="w-5 h-5 animate-bounce" />
                ) : (
                  <span>문의 접수</span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
