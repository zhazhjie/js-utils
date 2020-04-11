/**
 * @author: zzj
 * @date: 2019-07-29 10:33:29
 * @version: 1.0
 */

export function aliPay(data) {
  let {payUrl, body = {}} = data;
  return new Promise((resolve, reject) => {
    let form = document.createElement("form");
    form.action = payUrl;
    form.method = "post";
    let html = "";
    for (let key in body) {
      html += `<input type="hidden" name="${key}" value="${body[key]}">`;
    }
    form.innerHTML = html;
    document.body.append(form);
    form.submit();
    resolve();
  })
}
