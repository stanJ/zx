function hasClass(ele, cls) {
  return ele.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
}
//为指定的dom元素添加样式
function addClass(ele, cls) {
  if (!this.hasClass(ele, cls)) ele.className += " " + cls;
}
//删除指定dom元素的样式
function removeClass(ele, cls) {
  if (hasClass(ele, cls)) {
      var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");//正则表达式，需要补血
      ele.className = ele.className.replace(reg, " ");
  }
} 
function addStartClass(el, className) {
  removeClass(el, className + '-end');
  addClass(el, className + '-start');
}
function addEndClass(el, className) {
  removeClass(el, className + '-start');
  addClass(el, className + '-end');
}
var app = {
  curPageIndex: 0,
  slide: null,
  popup: {
    info: document.querySelector('.popup_4-wrap'),
    choose: document.querySelector('.popup_6-wrap')
  },
  close: {
    info: document.querySelector('.popup_4-wrap .close-img'),
    choose: document.querySelector('.popup_6-wrap .close-img')
  },
  page1: {
    plane: document.querySelector('.page_1 .plane'),
    title: document.querySelector('.page_1 .title')
  },
  page2: {
    plane: document.querySelector('.page_2 .plane'),
    card1: document.querySelector('.page_2 .card_1'),
    card2: document.querySelector('.page_2 .card_2'),
    cloud: document.querySelector('.page_2 .cloud'),
    name: document.querySelector('.page_2 .card_name'),
    btn: document.querySelector('.page_2 .btn')
  },
  page3: {
    plane: document.querySelector('.page_3 .plane'),
    content1: document.querySelector('.page_3 .content_1'),
    content2: document.querySelector('.page_3 .content_2'),
    cloudTop: document.querySelector('.page_3 .cloud_top'),
    cloudBottom: document.querySelector('.page_3 .cloud_bottom'),
    iconTop: document.querySelector('.page_3 .icon_top'),
    iconBottom: document.querySelector('.page_3 .icon_bottom')
  },
  page4: {
    btn: document.querySelector('.page_4 .btn_4')
  },
  page6: {
    btn: document.querySelector('.page_6 .btn')
  },
  initSlide: function () {
    var slideWrapper = document.querySelector('.slide');
    var slide = new BScroll(slideWrapper, {
      scrollX: false,
      scrollY: true,
      momentum: false,
      snap: {
        loop: false,
        threshold: 0.3,
        speed: 400,
        easing: {
          style: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
        }
      },
      bounce: false,
      click: true
    })
    app.slide = slide;
    slide.on('scrollEnd', app.onScrollEnd);
  },
  onScrollEnd: function () {
    var pageIndex = app.slide.getCurrentPage().pageY;
    if (pageIndex === app.curPageIndex) {
      return
    }
    if (app.curPageIndex === 0) {
      app.page_1_init()
    } else if (app.curPageIndex === 1) {
      app.page_2_init()
    } else if (app.curPageIndex === 2) {
      app.page_3_init()
    } else if (app.curPageIndex === 3) {
      app.page_4_init()
    } else if (app.curPageIndex === 4) {
      app.page_5_init()
    } else if (app.curPageIndex === 5) {
      app.page_6_init()
    }
    if (pageIndex === 0) {
      app.page_1_animate()
    } else if (pageIndex === 1) {
      app.page_2_animate()
    } else if (pageIndex === 2) {
      app.page_3_animate()
    } else if (pageIndex === 3) {
      app.page_4_animate()
    } else if (pageIndex === 4) {
      app.page_5_animate()
    } else if (pageIndex === 5) {
      app.page_6_animate()
    }
    app.curPageIndex = pageIndex
  },
  initEvent: function () {
    app.page2.btn.addEventListener('click', function () {
      app.popup.choose.style.display = 'block';
    })
    app.close.choose.addEventListener('click', function () {
      app.popup.choose.style.display = 'none';
    })
    app.page4.btn.addEventListener('click', function () {
      app.popup.info.style.display = 'block';
    })
    app.close.info.addEventListener('click', function () {
      app.popup.info.style.display = 'none';
    })
    app.page6.btn.addEventListener('click', function () {
      app.popup.choose.style.display = 'block';
    })
    app.close.choose.addEventListener('click', function () {
      app.popup.choose.style.display = 'none';
    })
  },
  page_1_init: function () {
    var plane = app.page1.plane;
    var title = app.page1.title;
    addStartClass(plane, 'plane');
    addStartClass(title, 'title');
  },
  page_2_init: function () {
    var plane = app.page2.plane;
    var card1 = app.page2.card1;
    var card2 = app.page2.card2;
    var cloud = app.page2.cloud;
    var name = app.page2.name;
    var btn = app.page2.btn;
    addStartClass(plane, 'plane');
    addStartClass(card1, 'card_1');
    addStartClass(card2, 'card_2');
    addStartClass(cloud, 'cloud');
    addStartClass(name, 'card_name');
    addStartClass(btn, 'btn');
  },
  page_3_init: function () {
    var plane = app.page3.plane;
    var content1 = app.page3.content1;
    var content2 = app.page3.content2;
    var cloudTop = app.page3.cloudTop;
    var cloudBottom = app.page3.cloudBottom;
    var iconTop = app.page3.iconTop;
    var iconBottom = app.page3.iconBottom;
    addStartClass(plane, 'plane');
    addStartClass(content1, 'content_1');
    addStartClass(content2, 'content_2');
    addStartClass(cloudTop, 'cloud_top');
    addStartClass(cloudBottom, 'cloud_bottom');
    addStartClass(iconTop, 'icon_top');
    addStartClass(iconBottom, 'icon_bottom');
  },
  page_4_init: function () {

  },
  page_5_init: function () {

  },
  page_6_init: function () {

  },
  page_1_animate: function () {
    var plane = app.page1.plane;
    var title = app.page1.title;
    plane.addEventListener('transitionend', function () {
      plane.style.transition = '';
      title.style.transition = '';
    })
    app.page_1_init();
    setTimeout(function () {
      plane.style.transition = 'top 1.5s linear, left 1.5s linear';
      title.style.transition = 'opacity 0.8s linear';
    }, 20)
    
    setTimeout(function () {
      addEndClass(title, 'title');
    }, 100)
    setTimeout(function () {
      addEndClass(plane, 'plane');
    }, 1000)
  },
  page_2_animate: function () {
    var plane = app.page2.plane;
    var card1 = app.page2.card1;
    var card2 = app.page2.card2;
    var cloud = app.page2.cloud;
    var name = app.page2.name;
    var btn = app.page2.btn;
    plane.addEventListener('transitionend', function () {
      plane.style.transition = '';
      card1.style.transition = '';
      card2.style.transition = '';
      cloud.style.transition = '';
      name.style.transition = '';
      btn.style.transition = '';
    })
    app.page_2_init();
    setTimeout(function () {
      plane.style.transition = 'top 1s linear, left 1s linear';
      card1.style.transition = 'top 0.5s, opacity 0.5s';
      card2.style.transition = 'top 0.5s, opacity 0.5s';
      cloud.style.transition = 'opacity 0.1s';
      name.style.transition = 'opacity 0.3s';
      btn.style.transition = 'opacity 0.3s';
    }, 20);
    setTimeout(function () {
      addEndClass(cloud, 'cloud');
    }, 0)
    setTimeout(function () {
      addEndClass(card1, 'card_1');
    }, 100)
    setTimeout(function () {
      addEndClass(card2, 'card_2');
    }, 600)
    setTimeout(function () {
      addEndClass(name, 'card_name');
    }, 1100)
    setTimeout(function () {
      addEndClass(btn, 'btn');
    }, 1100)
    setTimeout(function () {
      addEndClass(plane, 'plane');
    }, 1100)
  },
  page_3_animate: function () {
    var plane = app.page3.plane;
    var content1 = app.page3.content1;
    var content2 = app.page3.content2;
    var cloudTop = app.page3.cloudTop;
    var cloudBottom = app.page3.cloudBottom;
    var iconTop = app.page3.iconTop;
    var iconBottom = app.page3.iconBottom;
    plane.addEventListener('transitionend', function () {
      plane.style.transition = '';
      content1.style.transition = '';
      content2.style.transition = '';
      cloudTop.style.transition = '';
      cloudBottom.style.transition = '';
      iconTop.style.transition = '';
      iconBottom.style.transition = '';
    })
    iconTop.addEventListener('animationend', function () {
      addEndClass(iconTop, 'icon_top');
      addEndClass(iconBottom, 'icon_bottom');
      removeClass(iconTop, 'icon_top_animate');
      removeClass(iconBottom, 'icon_bottom_animate');
    })
    app.page_3_init();
    setTimeout(function () {
      // plane.style.transition = 'top 1s linear, left 1s linear';
      // card1.style.transition = 'top 0.5s, opacity 0.5s';
      // card2.style.transition = 'top 0.5s, opacity 0.5s';
      // cloud.style.transition = 'opacity 0.1s';
      // name.style.transition = 'opacity 0.3s';
      // btn.style.transition = 'opacity 0.3s';

      plane.style.transition = 'top 1s linear, left 1s linear';
      content1.style.transition = 'top 1s, opacity 1s';
      content2.style.transition = 'top 1s, opacity 1s';
      cloudTop.style.transition = 'right 0.3s';
      cloudBottom.style.transition = 'left 0.3s';
      // iconTop.style.transition = '';
      // iconBottom.style.transition = '';
    }, 20);
    setTimeout(function () {
      addEndClass(cloudTop, 'cloud_top');
    }, 100)
    setTimeout(function () {
      addEndClass(cloudBottom, 'cloud_bottom');
    }, 100)
    setTimeout(function () {
      addEndClass(content1, 'content_1');
    }, 400)
    setTimeout(function () {
      addEndClass(content2, 'content_2');
    }, 400)
    setTimeout(function () {
      addClass(iconTop, 'icon_top_animate');
    }, 1400)
    setTimeout(function () {
      addClass(iconBottom, 'icon_bottom_animate');
    }, 1400)
    setTimeout(function () {
      addEndClass(plane, 'plane');
    }, 2000)
  },
  page_4_animate: function () {

  },
  page_5_animate: function () {

  },
  page_6_animate: function () {

  },
}

app.initSlide();
app.initEvent();
app.page_1_animate();



