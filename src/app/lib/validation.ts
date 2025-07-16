/**
 * 입력된 문자열에서 숫자만 추출합니다.
 * @param value - 입력 문자열
 * @returns 숫자만 포함된 문자열
 */
const getDigits = (value: string) => value.replace(/\D/g, '');

/**
 * 대한민국 휴대폰 번호 형식(010-XXXX-XXXX)으로 자동 포맷합니다.
 * @param value - 포맷할 전화번호 문자열
 * @returns 포맷된 전화번호 문자열
 */
export const formatPhoneNumber = (value: string): string => {
  const digits = getDigits(value);
  if (digits.length <= 3) {
    return digits;
  }
  if (digits.length <= 7) {
    return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  }
  if (digits.length <= 11) {
    return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`;
  }
  // 11자리를 초과하는 입력은 받지 않음
  return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7, 11)}`;
};

/**
 * 대한민국 휴대폰 번호 형식에 유효한지 검사합니다. (010으로 시작하고 총 11자리)
 * @param value - 검사할 전화번호 문자열
 * @returns 유효하면 true, 아니면 false
 */
export const isValidPhoneNumber = (value: string): boolean => {
  const digits = getDigits(value);
  // 010으로 시작하는 11자리 숫자인지 확인
  const phoneRegex = /^010\d{8}$/;
  return phoneRegex.test(digits);
};
