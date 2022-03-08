var swiper = new Swiper(".mySwiper1", {
    direction: "vertical",
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    slidesPerView: 3,
    // breakpoints: {
    //     0: {
    //         slidesPerView: 'auto'
    //     },
    //     991: {
    //         slidesPerView: 4
    //     },
    // },
    // shortSwipes: false,
    // longSwipes: false,
    // allowTouchMove: true,
    autoplay: {
        delay: 1, 
    }, 
    // freeMode: true, 
    speed: 2000,
    // disableOnInteraction: true
    });
    $(".mySwiper1").hover(function() {
        (this).swiper.autoplay.stop();
    }, function() {
        (this).swiper.autoplay.start();
});
var swiper = new Swiper(".mySwiper2", {
    direction: "vertical",
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    slidesPerView: 3,
    // breakpoints: {
    //     0: {
    //         slidesPerView: 'auto'
    //     },
    //     991: {
    //         slidesPerView: 4
    //     },
    // },
    // shortSwipes: false,
    // longSwipes: false,
    // allowTouchMove: true,
    autoplay: {
        delay: 1,
        reverseDirection: true,
    }, 
    // freeMode: true, 
    speed: 2000,
    // disableOnInteraction: true
    });
    $(".mySwiper2").hover(function() {
        (this).swiper.autoplay.stop();
    }, function() {
        (this).swiper.autoplay.start();
});
var swiper = new Swiper(".mySwiper3", {
    direction: "vertical",
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    slidesPerView: 3,
    // breakpoints: {
    //     0: {
    //         slidesPerView: 'auto'
    //     },
    //     991: {
    //         slidesPerView: 4
    //     },
    // },
    // shortSwipes: false,
    // longSwipes: false,
    // allowTouchMove: true,
    autoplay: {
        delay: 1,
    }, 
    // freeMode: true, 
    speed: 2000,
    // disableOnInteraction: true
    });
    $(".mySwiper3").hover(function() {
        (this).swiper.autoplay.stop();
    }, function() {
        (this).swiper.autoplay.start();
});

var swiper = new Swiper('.swiper-team', {
    // Default parameters
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      // when window width is >= 480px
      767: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      // when window width is >= 640px
      991: {
        slidesPerView: 4,
        spaceBetween: 30
      }
    }
  })

var swiper = new Swiper('.swiper-testimonials', {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  })

var swiper = new Swiper('.swiper-road-map', {
spaceBetween: 30,
navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    768: {
        slidesPerView: 2,
        spaceBetween: 30,
    },
    1024: {
        slidesPerView: 3,
        spaceBetween: 30,
    },
    1300: {
        slidesPerView: 4,
        spaceBetween: 30,
    },
},
})

var swiper = new Swiper('.swiper-portfolio.s1', {
    spaceBetween: 30,
    loop: true,

    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1300: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
    autoplay: {
        delay: 1,
    }, 
    speed: 2000,
    });
    $(".swiper-portfolio.s1").hover(function() {
        (this).swiper.autoplay.stop();
    }, function() {
        (this).swiper.autoplay.start();
})
var swiper = new Swiper('.swiper-portfolio.s2', {
    spaceBetween: 30,
    loop:true,
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1300: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
    },
    autoplay: {
        delay: 1,
        reverseDirection: true, 
    }, 
    speed: 2000,
    });
    $(".swiper-portfolio.s2").hover(function() {
        (this).swiper.autoplay.stop();
    }, function() {
        (this).swiper.autoplay.start();
})

var swiper = new Swiper('.swiper-testimonial2', {
    // Default parameters
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      // when window width is >= 480px
      767: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      // when window width is >= 640px
      991: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  })

var swiper = new Swiper('.swiper-partner', {
    // Default parameters
    spaceBetween: 30,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      // when window width is >= 480px
      767: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      // when window width is >= 640px
      991: {
        slidesPerView: 4,
        spaceBetween: 30
      }
    }
})

var swiper = new Swiper('.swiper-blog', {
    // Default parameters
    spaceBetween: 30,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      // when window width is >= 480px
      767: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      // when window width is >= 640px
      991: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  })


  var galleryThumbs = new Swiper('.gallery-thumbs', {
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      // when window width is >= 480px
      767: {
        slidesPerView: 5,
        spaceBetween: 10
      },
      // when window width is >= 640px
      991: {
        slidesPerView: 4,
        spaceBetween: 10
      }
    },
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: galleryThumbs
    }
  });