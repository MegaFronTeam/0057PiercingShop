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
  new Swiper(".sBlog-slider--js", {
		slidesPerView: "auto",
		freeMode: true,
		watchOverflow: true,
	});
  
  new Swiper(".sGallery-slider--js", {
		slidesPerView: "auto",
		freeMode: true,
		watchOverflow: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		breakpoints: {
			992: {
        // watchOverflow: false,
			},
		},
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

	const partnersSwiper = new Swiper(".sBrands__slider--js .swiper", {
		spaceBetween: 16,
		slidesPerView: "auto",
		loop: true,
		navigation: {
			nextEl: ".swiper-button-next",
			// prevEl: ".swiper-button-prev",
		},
		breakpoints: {
			768: {
				spaceBetween: 60,
			},
		},
	});

	const certifSwiper = new Swiper(".sCertificates__slider--js .swiper", {
		spaceBetween: 13,

		slidesPerView: "auto",
		freeMode: true,
		watchOverflow: true,
		navigation: {
			nextEl: ".swiper-button-next",
			// prevEl: ".swiper-button-prev",
		},
		breakpoints: {
			768: {
				spaceBetween: 21,
			},
		},
	});

	const productSwiper = new Swiper("#sProductSlider1 .sProductSlider__slider--js", {
		spaceBetween: 7,
		slidesPerView: 2,
		loop: true,
		navigation: {
			nextEl: "#sProductSlider1 .swiper-button-next",
			prevEl: "#sProductSlider1 .swiper-button-prev",
		},
		breakpoints: {
			768: {
				slidesPerView: 3,
			},
			992: {
				spaceBetween: 20,
				slidesPerView: 4,
			},
		},
	});

  const productSwiper2 = new Swiper("#sProductSlider2 .sProductSlider__slider--js", {
		spaceBetween: 15,
		slidesPerView: 2,
		loop: true,
		navigation: {
			nextEl: "#sProductSlider2 .swiper-button-next",
			prevEl: "#sProductSlider2 .swiper-button-prev",
		},
		breakpoints: {
			768: {
				slidesPerView: 3,
			},
			1400: {
				spaceBetween: 32,
				// slidesPerView: 4,
			},
		},
	});

	const blogSwiper = new Swiper(".sBlog__slider--js", {
		spaceBetween: 20,
		slidesPerView: 2,
		loop: true,
		navigation: {
			nextEl: ".sBlog__slider--js .swiper-button-next",
			prevEl: ".sBlog__slider--js .swiper-button-prev",
		},
		breakpoints: {
			768: {
				slidesPerView: 3,
			},
			992: {
				spaceBetween: 20,
				slidesPerView: 4,
			},
		},
	});

  const instaSwiper = new Swiper(".sInsta__slider-insta--js", {
    spaceBetween: 25,
		slidesPerView: 'auto',
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			450: {
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 3,
			},
			1400: {
				spaceBetween: 50,
				slidesPerView: 3,
			},
		},
	});

  const promoSwiper = new Swiper(".sPromoSlider__slider--js", {
    spaceBetween: 25,
		slidesPerView: 'auto',
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			768: {
				slidesPerView: 1,
			},
			992: {
				slidesPerView: 1,
			},
		},
	});

  const aboutSwiper = new Swiper(".sAbout__slider--js", {
    spaceBetween: 0,
		slidesPerView: 1,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".sAbout__slider--js .swiper-button-next",
			prevEl: ".sAbout__slider--js .swiper-button-prev",
		},
		breakpoints: {
			// 768: {
			// 	slidesPerView: 1,
			// },
		},
	});

	let prodCardThumb = new Swiper(".sProdCard-thumb-js", {
		slidesPerView: 4,
		spaceBetween: 0,
	});
	let prodCardSlider = new Swiper(".sProdCard-slider-js", {
		spaceBetween: 10,
		thumbs: {
			swiper: prodCardThumb,
		},
		loop: true,
	}); //

  document.querySelectorAll('.article-navigation a').forEach(item => {
    item.addEventListener('click', function(event) {
        // event.preventDefault();
        
        let currentActive = document.querySelector('li.active');
        if (currentActive) {
            currentActive.classList.remove('active');
        }

        this.parentElement.classList.add('active');
    });
  });

  /* video*/
  const videoWrap = document.querySelector('.video-wrap')
  if (videoWrap) {
    videoWrap.addEventListener('click', function() {

    const video = document.querySelector('.video');
      if (video.paused) {
        video.play();
        video.classList.add('is-playing');
    } else {
        video.pause();
        video.classList.remove('is-playing');
    }
    });
  }

  const tiny = document.querySelectorAll('.tinny-item-js');
  tiny.forEach((el) => {
    const template = el.querySelector('.tinny-template');

    tippy(el, {
      content: template.innerHTML,
      allowHTML: true,
      interactive: true,
      // arrow: false,
    });
  });

	/* dropdown */
	const regionLinks = document.querySelectorAll(".dropdown li");

	const dropdownToggle = document.querySelector(".dropdown .dropdown-toggle");

	if (regionLinks && dropdownToggle) {
		regionLinks.forEach(link => {
			link.addEventListener("click", function (event) {
				event.preventDefault();

				dropdownToggle.textContent = this.textContent;
			});
		});
	}

	/* headerBlock animation */

	const headerBlock = document.querySelector(".headerBlock");
	const beforeEls = document.querySelectorAll(".before-js");
	const afterEls = document.querySelectorAll(".after-js");
	const after = document.querySelector(".after");

	if (beforeEls.length) {
		beforeEls.forEach(beforeEl => {
			beforeEl.addEventListener("mouseenter", function () {
				after.style.transform = "translateX(100px)";
			});
		});

		afterEls.forEach(afterEl => {
			afterEl.addEventListener("mouseenter", function () {
				after.style.transform = "translateX(-100px)";
			});
		});

		headerBlock.addEventListener("mouseleave", function () {
			after.style.transform = "translateX(0)";
		});
	}

	/* filters */
	const filtersWraps = document.querySelectorAll(".filter__wrap");
	if (filtersWraps.length) {
		filtersWraps.forEach(filter => {
			filter.addEventListener("click", e => {
				e.stopPropagation();
			});
		});
	}

	const filterNav = document.querySelector(".filters-wrap.filter-nav");
	const filterWrap = document.querySelector(".filters-wrap--js");
	const iconClose = document.querySelector(
		".filters-wrap--js .icon-close-wrap"
	);
	const btnClose = document.querySelector(".filters-wrap--js #btn-apply-mob");

	if (filterNav) {
		filterNav.addEventListener("click", () => {
			filterWrap.classList.toggle("show");
		});
	}

	if (iconClose) {
		const closeItems = [iconClose, btnClose];
		closeItems.forEach(item => {
			item.addEventListener("click", () => {
				filterWrap.classList.remove("show");
			});
		});
	}

	const filters = document.querySelectorAll(".filter--js");
	let activeFilter = null;

	function closeAllFilters() {
		filters.forEach(filter => filter.classList.remove("show"));
		activeFilter = null;
	}

	function handleFilterClick(event) {
		const filter = event.currentTarget;

		if (activeFilter && activeFilter !== filter) {
			closeAllFilters();
		}

		filter.classList.toggle("show");

		if (filter.classList.contains("show")) {
			activeFilter = filter;
		} else {
			activeFilter = null;
		}
		event.stopPropagation();
	}

	if (filters.length) {
		filters.forEach(filter => {
			filter.addEventListener("click", handleFilterClick);
		});
	}

	document.addEventListener("click", () => {
		if (activeFilter) {
			closeAllFilters();
		}
	});

	/* range */
	function currencyFormat(num) {
		return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
	}

	$(".range-wrap").each(function () {
		let _this = $(this);

		var $range = _this.find(".slider-js");

		var $inputFrom = _this.find(".input_from");

		var $inputTo = _this.find(".input_to");

		var instance,
			from,
			to,
			min = $range.data("min"),
			max = $range.data("max");
		$range.ionRangeSlider({
			skin: "round",
			type: "double",
			grid: false,
			grid_snap: false,
			hide_min_max: true,
			hide_from_to: false,
			//here
			onStart: updateInputs,
			onChange: updateInputs,
			onFinish: updateInputs,
		});
		instance = $range.data("ionRangeSlider");

		function updateInputs(data) {
			from = data.from;
			to = data.to;
			$inputFrom.prop("value", currencyFormat(from));
			$inputTo.prop("value", currencyFormat(to)); // InputFormat();
		}

		$inputFrom.on("change input ", function () {
			var val = +$(this).prop("value").replace(/\s/g, ""); // validate

			if (val < min) {
				val = min;
			} else if (val > to) {
				val = to;
			}

			instance.update({
				from: val,
			});
			$(this).prop("value", currencyFormat(val));
		});
		$inputTo.on("change input ", function () {
			var val = +$(this).prop("value").replace(/\s/g, ""); // validate

			if (val < from) {
				val = from;
			} else if (val > max) {
				val = max;
			}

			instance.update({
				to: val,
			});
			$(this).prop("value", currencyFormat(val));
		});
	});

	let passCode = document.querySelectorAll(".passcode-js");

	if (passCode.length > 0) {
		passCode.forEach((item, index) => {
			item.addEventListener("input", e => {
				if (index < passCode.length - 1) {
					if (!e.data == "") {
						passCode[index + 1].focus();
					}
				}
			});
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
