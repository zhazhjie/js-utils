/**
 * @author: zzj
 * @date: 2019-07-29 10:02:22
 * @version: 1.0
 */

export function wxMpPay(prepay, resolve, reject) {
  const {appId, timeStamp, nonceStr, signType, paySign, packageStr} = prepay;
  WeixinJSBridge.invoke(
    'getBrandWCPayRequest', {
      "appId": appId,     //公众号名称，由商户传入
      "timeStamp": timeStamp,         //时间戳，自1970年以来的秒数
      "nonceStr": nonceStr, //随机串
      "package": packageStr,
      "signType": signType,         //微信签名方式：
      "paySign": paySign //微信签名
    },
    (res) => {
      // alert(JSON.stringify(res))
      if (res.err_msg === "get_brand_wcpay_request:ok") {
        resolve(res);
      } else if (res.err_msg === "get_brand_wcpay_request:cancel") {
        reject(res);
      } else {
        reject(res);
      }
    });
}
