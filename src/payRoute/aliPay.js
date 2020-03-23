/**
 * @author: zzj
 * @date: 2019-07-29 10:33:29
 * @version: 1.0
 */
import {getStore} from "../util";

const REMOTE_URL = process.env.REMOTE_URL;
const API_ROOT = process.env.API_ROOT;

export function aliPay(orderNo, aliPayUrl, path) {
  return new Promise((resolve, reject) => {
    let token = getStore('token', 'local');
    let form = document.createElement("form");
    form.action = `${REMOTE_URL + API_ROOT}`+aliPayUrl;
    form.method = "post";
    form.innerHTML = `<input type="hidden" name="token" value="${token}"><input type="hidden" name="orderNo" value="${orderNo}">`;
    document.body.append(form);
    form.submit();
    resolve();
  })
}
