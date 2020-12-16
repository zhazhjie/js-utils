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
  var elMap = {};
  var naturalSize = {};

  function toggleBodyOverflow(showFlag) {
    document.body.style.overflow = showFlag ? "auto" : "hidden";
  }

  function toggleWrapper(showFlag, cb) {
    if (showFlag) {
      elMap.wrapper.style.display = 'block';
      setTimeout(function () {
        elMap.wrapper.style.backgroundColor = 'rgba(0,0,0,0.3)';
        if (cb) cb();
      }, 10);
    } else {
      elMap.wrapper.style.backgroundColor = 'rgba(0,0,0,0)';
      setTimeout(function () {
        elMap.wrapper.style.display = 'none';
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

  function createPreviewEL(originalImg) {
    elMap.originalImg = originalImg;
    if (elMap.wrapper && elMap.img) {
      if (elMap.img.src === originalImg.src) return;
      setImgSize(elMap.img, originalImg.getBoundingClientRect());
      elMap.img.src = originalImg.src;
    } else {
      var wrapper = document.createElement('div');
      wrapper.style = 'width:100vw;height:100vh;position:fixed;top:0;left:0;z-index:9998;overflow-x:hidden;overflow-y:auto;backgroundColor:rgba(0, 0, 0, 0);transition:all .3s;';
      var img = document.createElement('img');
      img.src = originalImg.src;
      img.style = 'cursor:zoom-out;position:absolute;transition:all .3s;margin-bottom:15px';
      setImgSize(img, originalImg.getBoundingClientRect());
      wrapper.appendChild(img);
      document.body.appendChild(wrapper);
      wrapper.addEventListener('click', hideImg);
      elMap.wrapper = wrapper;
      elMap.img = img;
    }
  }

  function showImg(e) {
    loadNaturalSize(this);
    createPreviewEL(this);
    toggleBodyOverflow(false);
    toggleWrapper(true, function () {
      setImgSize(elMap.img, naturalSize);
    });
  }

  function hideImg() {
    if (!elMap.img || !elMap.originalImg) return;
    setImgSize(elMap.img, elMap.originalImg.getBoundingClientRect());
    toggleWrapper(false);
    toggleBodyOverflow(true);
  }

  function loadNaturalSize(img) {
    var margin = 30;
    var imgWidth = img.naturalWidth || img.offsetWidth;
    var imgHeight = img.naturalHeight || img.offsetHeight;
    var imgRatio = imgWidth / imgHeight;
    var winWidth = window.innerWidth - margin;
    var winHeight = window.innerHeight - margin;
    if (imgWidth > winWidth) {
      imgWidth = winWidth;
      imgHeight = imgWidth / imgRatio;
    }
    var top = margin >> 1;
    var left = ((winWidth - imgWidth) >> 1) + top;
    if (imgHeight <= winHeight) {
      top = ((winHeight - imgHeight) >> 1) + top;
    } else {
      imgWidth -= wrapper.offsetWidth - wrapper.clientWidth;
    }
    naturalSize = {
      width: imgWidth,
      height: imgHeight,
      top: top,
      left: left
    };
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
