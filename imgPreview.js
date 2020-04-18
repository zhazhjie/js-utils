/**
 *
 * @authors zhazhjie (zhazhjie@vip.qq.com)
 * @date    2018-05-12 15:32:18
 * @version 1.0
 */
(function (global, factory) {
  typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
      (global.imgPreview = factory());
})(window, function () {

  var imgPreview = {};
  var el = {};
  var targetSize = {};

  function toggleBodyOverflow(showFlag) {
    document.body.style.overflow = showFlag ? "auto" : "hidden";
  }

  function toggleWrapper(showFlag, cb) {
    if (showFlag) {
      el.wrapper.style.display = 'block';
      setTimeout(function () {
        el.wrapper.style.backgroundColor = 'rgba(0,0,0,0.3)';
        if (cb) cb();
      }, 10);
    } else {
      el.wrapper.style.backgroundColor = 'rgba(0,0,0,0)';
      setTimeout(function () {
        el.wrapper.style.display = 'none';
        if (cb) cb();
      }, 300);
    }
  }

  function setImgSize(img, size) {
    img.style.width = size.width + 'px';
    img.style.height = size.height + 'px';
    img.style.top = size.top + 'px';
    img.style.left = size.left + 'px';
  }

  function createEl(originalImg) {
    el.originalImg = originalImg;
    if (el.wrapper && el.img) {
      setImgSize(el.img, originalImg.getBoundingClientRect());
      el.img.src = originalImg.src;
      return el;
    }
    var wrapper = document.createElement('div');
    wrapper.style = 'width:100vw;height:100vh;position:fixed;top:0;left:0;z-index:9998;overflow-x:hidden;overflow-y:auto;backgroundColor:rgba(0, 0, 0, 0);transition:all .3s;';
    var img = document.createElement('img');
    img.src = originalImg.src;
    img.style = 'cursor:zoom-out;position:absolute;transition:all .3s;margin-bottom:15px';
    setImgSize(img, originalImg.getBoundingClientRect());
    wrapper.appendChild(img);
    document.body.appendChild(wrapper);
    wrapper.addEventListener('click', hideImg);
    el.wrapper = wrapper;
    el.img = img;
    return el;
  }

  function showImg(e) {
    createEl(this);
    var img = el.img;
    var wrapper = el.wrapper;
    img.onload = function () {
      toggleBodyOverflow(false);
      var margin = 30;
      var imgWidth = img.naturalWidth || img.offsetWidth;
      var imgHeight = img.naturalHeight || img.offsetHeight;
      var imgRatio = imgWidth / imgHeight;
      var winWidth = window.innerWidth - margin;
      var winHeight = window.innerHeight - margin;
      // var winRatio = winWidth / winHeight;
      if (imgWidth > winWidth) {
        imgWidth = winWidth;
        imgHeight = imgWidth / imgRatio;
      }
      // else if (imgWidth > winWidth && imgRatio < winRatio) {
      //   imgHeight = winHeight;
      //   imgWidth = imgHeight * imgRatio;
      // }
      // if (imgHeight > winHeight) {
      //   imgHeight = winHeight;
      //   imgWidth = imgHeight * imgRatio;
      // }
      var top = margin >> 1;
      var left = ((winWidth - imgWidth) >> 1) + top;
      if (imgHeight <= winHeight) {
        top = ((winHeight - imgHeight) >> 1) + top;
      } else {
        imgWidth -= wrapper.offsetWidth - wrapper.clientWidth;
      }
      targetSize = {
        width: imgWidth,
        height: imgHeight,
        top: top,
        left: left
      };
      toggleWrapper(true, function () {
        setImgSize(img, targetSize);
      });
    }
  }

  function hideImg() {
    if (!el.img || !el.originalImg) return;
    setImgSize(el.img, el.originalImg.getBoundingClientRect());
    toggleWrapper(false);
    toggleBodyOverflow(true);
  }

  imgPreview.install = function (Vue) {
    Vue.directive('img-preview', {
      bind: function (el) {
        el.style.cursor = 'zoom-in';
        el.addEventListener('click', showImg);
      },
      unbind: function (el) {
        hideImg();
        el.removeEventListener('click', showImg);
      }
    })
  };
  return imgPreview;
});
