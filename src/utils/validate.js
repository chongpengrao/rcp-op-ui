/**
 * 邮箱
 * @param {*} s
 */
export function isEmail (s) {
  return /^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(s)
}

/**
 * 手机号码
 * @param {*} s
 */
export function isMobile (s) {
  return /^1[0-9]{10}$/.test(s)
}

/**
 * 电话号码
 * @param {*} s
 */
export function isPhone (s) {
  return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(s)
}

/**
 * URL地址
 * @param {*} s
 */
export function isURL (s) {
  return /^http[s]?:\/\/.*/.test(s)
}

/**
 * 正整数或0
 * @param {*} s
 */
export function isNumber (s) {
  return /^\+?[1-9][0-9]*|0$/.test(s)
}

/**
 * 字母数字组成得1-30位字符串
 * @param {*} s
 */
export function isAlphanumeric (s) {
  return /^[a-zA-Z0-9]{1,30}$/.test(s)
}

/**
 * 特殊字符校验
 * @param {*} s
 */
export function hasSpecialcharacters (s) {
  var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]")
  return pattern.test(s)
}

/**
 * ip地址校验
 * @param {*} s
 */
export function isIp (s) {
  return /^((2[0-4]\d|25[0-5]|[01]?\d\d?)\.){3}(2[0-4]\d|25[0-5]|[01]?\d\d?)$/.test(s)
}

/**
 * 网址域名校验
 * @param {*} s
 */
export function isDomain (s) {
  return /^(?=^.{3,255}$)[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+$/.test(s)
}

/**
 * ip端口或域名格式
 * @param s
 * @returns {boolean}
 */
export function isIpOrDomain (s) {
  return /^(((2[0-4]\d|25[0-5]|[01]?\d\d?)\.){3}(2[0-4]\d|25[0-5]|[01]?\d\d?)(:\d)?)|((?=^.{3,255}$)[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+)$/.test(s)
}
