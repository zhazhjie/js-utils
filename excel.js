/**
 * @authors zhazhjie (zhazhjie@vip.qq.com)
 * @date    2018-05-14 10:00:27
 * @version 1.0
 */

/**
 * 导入excel
 * @param file {File}
 */
export function importExcel(file) {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.onload = function (e) {
      let result = XLSX.read(this.result, {
        type: 'binary'
      });
      let data = XLSX.utils.sheet_to_json(result.Sheets[result.SheetNames[0]]);
      resolve(data);
    };
    reader.onerror = function (error) {
      reject(error);
    };
    reader.readAsBinaryString(file);
  });
}

/**
 * 导出excel
 * @param json {Array}
 * @param header {Object}
 * @param name {String}
 * @param type {'xlsx'|'xls'}
 */
export function exportExcel(json, header, name = '表格', type = 'xls') {
  json.unshift(header);
  let keyMap = []; //获取keys
  for (let k in header) {
    keyMap.push(k);
  }
  let tmpData = []; //用来保存转换好的json
  json.map((v, i) => keyMap.map((k, j) => Object.assign({}, {
    v: v[k],
    position: (j > 25 ? getCharCol(j) : String.fromCharCode(65 + j)) + (i + 1)
  }))).reduce((prev, next) => prev.concat(next)).forEach((v, i) => tmpData[v.position] = {
    v: v.v
  });
  let outputPos = Object.keys(tmpData); //设置区域,比如表格从A1到D10
  let tmpWB = {
    SheetNames: ['mySheet'], //保存的表标题
    Sheets: {
      'mySheet': Object.assign({},
        tmpData, //内容
        {
          '!ref': outputPos[0] + ':' + outputPos[outputPos.length - 1] //设置填充区域
        })
    }
  };
  let tmpDown = new Blob([s2ab(XLSX.write(tmpWB, {
      bookType: type,
      bookSST: false,
      type: 'binary'
    } //这里的数据是用来定义导出的格式类型
  ))], {
    type: ""
  }); //创建二进制对象写入转换好的字节流
  let href = URL.createObjectURL(tmpDown); //创建对象超链接
  let link = document.createElement("a");
  link.href = href; //绑定a标签
  link.download = name + '.' + type; //绑定a标签
  document.body.appendChild(link);
  link.click(); //模拟点击实现下载
  setTimeout(function () { //延时释放
    URL.revokeObjectURL(href); //用URL.revokeObjectURL()来释放这个object URL
    document.body.removeChild(link);
  }, 100);
}

function s2ab(s) { //字符串转字符流
  let buf = new ArrayBuffer(s.length);
  let view = new Uint8Array(buf);
  for (let i = 0; i !== s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
  return buf;
}

// 将指定的自然数转换为26进制表示。映射关系：[0-25] -> [A-Z]。
function getCharCol(n) {
  let temCol = '',
    s = '',
    m = 0;
  while (n > 0) {
    m = n % 26 + 1;
    s = String.fromCharCode(m + 64) + s;
    n = (n - m) / 26
  }
  return s
}
