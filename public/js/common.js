"use strict";

// import Swiper from '../libs/swiper/swiper-bundle.min.mjs';
// import JSCCommon from "./JSCCommon.js";

function eventHandler() {
	// const $ = jQuery;
	JSCCommon.init();

	function whenResize() {
		JSCCommon.setFixedNav();
	}

	window.addEventListener(
		"scroll",
		() => {
			JSCCommon.setFixedNav();
		},
		{passive: true}
	);
	window.addEventListener("resize", whenResize, {passive: true});

	whenResize();

	let defaultSl = {
		spaceBetween: 0,
		lazy: {
			loadPrevNext: true,
		},
		watchOverflow: true,
		loop: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: {
			el: " .swiper-pagination",
			type: "bullets",
			clickable: true,
			// renderBullet: function (index, className) {
			// 	return '<span class="' + className + '">' + (index + 1) + '</span>';
			// }
		},
	};

	new Swiper(".breadcrumb-slider--js", {
		slidesPerView: "auto",
		freeMode: true,
		watchOverflow: true,
	});

	const swiper4 = new Swiper(".sBanners__slider--js", {
		// slidesPerView: 5,
		...defaultSl,
		slidesPerView: "auto",
		freeMode: true,
		loopFillGroupWithBlank: true,
		touchRatio: 0.2,
		slideToClickedSlide: true,
		freeModeMomentum: true,
	});

  
	const partnersSwiper = document.querySelector('.sBrands__slider--js');
	new Swiper(partnersSwiper.querySelector('.swiper'), {
		spaceBetween: 16,
		slidesPerView: "auto",
		loop: true,
		navigation: {
			nextEl: partnersSwiper.querySelector(".swiper-button-next"),
			prevEl: partnersSwiper.querySelector(".swiper-button-prev"),
		},
    breakpoints: {
      768: {
        spaceBetween: 60,
      }
    }
	});

    /* headerBlock animation */
    
  const headerBlock = document.querySelector('.headerBlock');
  const beforeEls = document.querySelectorAll('.before-js');
  const afterEls = document.querySelectorAll('.after-js');
  const after = document.querySelector('.after');

  if (beforeEls.length) {

    beforeEls.forEach((beforeEl) => {
      beforeEl.addEventListener('mouseenter', function() {
        after.style.transform = 'translateX(100px)';
        console.log('вправо (before)');
      });
    })


    afterEls.forEach((afterEl) => {
      afterEl.addEventListener('mouseenter', function() {

        after.style.transform = 'translateX(-100px)';
        console.log('влево (after)');

      });
    })

    headerBlock.addEventListener('mouseleave', function() {
        after.style.transform = 'translateX(0)';
        console.log('курсор ушел из headerBlock');
    });
  }
}
if (document.readyState !== "loading") {
	eventHandler();
} else {
	document.addEventListener("DOMContentLoaded", eventHandler);
}

// window.onload = function () {
// 	document.body.classList.add('loaded_hiding');
// 	window.setTimeout(function () {
// 		document.body.classList.add('loaded');
// 		document.body.classList.remove('loaded_hiding');
// 	}, 500);
// }
