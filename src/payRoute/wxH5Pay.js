/**
 * @author: zzj
 * @date: 2019-07-29 10:48:57
 * @version: 1.0
 */
import Vue from 'vue';

const BASE_URL = process.env.BASE_URL;

export function wxH5Pay(data, resolve, reject, path) {
  if (data) {
    let url = data;
    let redirectUrl = BASE_URL + "/paySuccess"+(path?"?path="+path:"");
    if (url.indexOf("?") > -1) {
      url = url + "&redirect_url=" + encodeURIComponent(redirectUrl);
    } else {
      url = url + "?redirect_url=" + encodeURIComponent(redirectUrl);
    }
    resolve();
    window.location.href = url;
  } else {
    Vue.prototype.$msg.error("微信支付暂时无法使用，请稍候再试！");
    reject();
  }
}
