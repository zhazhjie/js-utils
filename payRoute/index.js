/**
 * @author: zzj
 * @date: 2019-07-29 10:00:27
 * @version: 1.0
 */
import {aliPay} from "./aliPay";
import {isWeiXin} from "../util";
import {wxMpPay} from "./wxMpPay";
import {wxH5Pay} from "./wxH5Pay";

/**
 * payType：支付方式, orderNo：订单号, unifiedOrder：预下单api，path：支付完成页面跳转地址
 * @param data
 * @returns {Promise<*>}
 */
export function payRoute(data) {
  let {payType, orderNo, aliPayUrl, path, prepay} = data;
  switch (payType) {
    case "ALIPAY":
      return aliPay(orderNo, aliPayUrl, path);
    case "WX":
      return new Promise((resolve, reject) => {
        if (isWeiXin()) {
          wxMpPay(prepay, resolve, reject, path);
        } else {
          wxH5Pay(prepay, resolve, reject, path);
        }
      });
  }
}
