export function isEmail(asValue) {
    var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{1,2}$/i;
    return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
}
  export function isPassword(asValue) {
    var regExp = /^[0-9a-zA-Z]{7,9}$/; //  8 ~ 10자 영문, 숫자 조합
    return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
}