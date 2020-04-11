/**
 * @author: zzj
 * @date: 2019-07-29 10:48:57
 * @version: 1.0
 */

export function wxH5Pay(data, resolve, reject) {
  let {payUrl, redirectUrl} = data;
  let url = payUrl + (payUrl.indexOf("?") > -1 ? "&" : "?") + encodeURIComponent(redirectUrl);
  resolve();
  window.location.href = url;
}
