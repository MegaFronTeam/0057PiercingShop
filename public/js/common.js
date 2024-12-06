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

  document.querySelectorAll(".slider-auto--js").forEach(slider => {
    new Swiper(slider, {
      slidesPerView: "auto",
      freeMode: true,
      watchOverflow: true
    });
  })

	const partnersSwiper = new Swiper(".sBrands__slider--js .swiper", {
		spaceBetween: 16,
		slidesPerView: "auto",
		loop: true,
		navigation: {
			nextEl: ".sBrands__slider--js .swiper-button-next",
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
			nextEl: ".sCertificates__slider--js .swiper-button-next",
		},
		breakpoints: {
			768: {
				spaceBetween: 21,
			},
		},
	});

  document.querySelectorAll(".slider").forEach(slider => {
    new Swiper(slider.querySelector('.sGallery-slider--js'), {
      slidesPerView: "auto",
      freeMode: true,
      watchOverflow: true,
      navigation: {
        nextEl: slider.querySelector(".swiper-button-next"),
        prevEl: slider.querySelector(".swiper-button-prev"),
      }
    });
  })

	const masterSwiper = new Swiper(".master-slider--js", {
		spaceBetween: 6,
		slidesPerView: 3,
		watchOverflow: true,
		navigation: {
			nextEl: ".master-slider--js .swiper-button-next",
			prevEl: ".master-slider--js .swiper-button-prev",
		},
		breakpoints: {
			992: {
				spaceBetween: 13,
			},
    }
	});
	const masterCertifSwiper = new Swiper(".master-certif-slider--js", {
		spaceBetween: 6,
		slidesPerView: 'auto',
		breakpoints: {
			992: {
				spaceBetween: 15,
			},
    }
	});

	const productSwiper = new Swiper(".sProductSlider--1 .sProductSlider__slider--js", {
		spaceBetween: 7,
		slidesPerView: 2,
		navigation: {
			nextEl: ".sProductSlider--1 .swiper-button-next",
			prevEl: ".sProductSlider--1 .swiper-button-prev",
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

  const productSwiper2 = new Swiper(".sProductSlider--2 .sProductSlider__slider--js", {
		spaceBetween: 15,
		slidesPerView: 2,
		navigation: {
			nextEl: ".sProductSlider--2 .swiper-button-next",
			prevEl: ".sProductSlider--2 .swiper-button-prev",
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

  const showMoreBtn = document.querySelector('.show-more--js')
  if (showMoreBtn) {
    showMoreBtn.addEventListener('click', () => {

      const imgs = document.querySelectorAll('.sGallery__img-wrap')

      imgs.forEach(img => {
        img.style.display = 'block'
      })

      showMoreBtn.classList.add('d-none')
    })
  }

  const sections = document.querySelectorAll('.rule-item, .sArticle__item-memo');
  const navLinks = document.querySelectorAll('.article-navigation li');

  function highlightLink() {
    if (!sections.length) return
    let index = sections.length;

    while (--index && window.scrollY + 100 < sections[index].offsetTop) {}

    navLinks.forEach((link) => link.classList.remove('active'));
    navLinks[index].classList.add('active');
  }

  highlightLink();
  window.addEventListener(
    'scroll',
    highlightLink,
    {passive: true}
  );

  /* side sticky */

	let sidebar = document.querySelector(".sidebar-sticky");
	new hcSticky(sidebar, {
		stickTo: ".sticky-wrap",
		top: 10,
		bottomEnd: 0,
	});

  /* price table */
  const tableTitles = [
    'Хрящи ушей (хлекс, конч, и т. д.)',
    'Мочка, за один прокол',
    'Двойные (индастриал, орбитал)',
    'Крыло носа, септ ум, бридж',
    'Язык, пупок, бровь, губа',
    'Сосок, за один прокол',
    'Микодерма',
    'Генитальные',
    'Восстановление прокола',
    'Растягивание тоннеля'
  ]

  let isDone = false

  function insertTablesTitleOnMobile() {
    const tableRows = document.querySelectorAll('.table-wrap tbody tr');

    tableRows.forEach((row, i) => {
      const rowTitle =
      `<tr class="title">
        <td colspan="4">${tableTitles[i]}</td>
      </tr>`

      row.insertAdjacentHTML(
        'beforebegin',
        rowTitle
      );
    })

    const titles =  document.querySelectorAll('.table-wrap .title');
    titles.forEach((title) => {
      title.addEventListener('click', () => title.classList.toggle('show'))
    })

  }

  function checkWindowSize() {
    if (window.innerWidth < 992 && !isDone) {
      isDone = true;
      insertTablesTitleOnMobile();
    }
  }

  checkWindowSize();

  window.addEventListener('resize', () => {
    if (isDone === true) return
    checkWindowSize(),
    {passive: true}
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
	const dropItem = document.querySelectorAll(".dropdown li");

	const dropdownToggle = document.querySelector(".dropdown .dropdown-toggle");

	if (dropItem.length && dropdownToggle) {
		dropItem.forEach(item => {
			item.addEventListener("click", function (event) {
				dropdownToggle.textContent = this.textContent;
			});
		});
	}

	/* filters */

	const filterNav = document.querySelector(".filters-wrap.filter-nav");
	const filterWrap = document.querySelector(".filters-wrap--js");
	const iconClose = document.querySelector(
		".filters-wrap--js .icon-close-wrap"
	);
	const btnClose = document.querySelector(".filters-wrap--js #btn-apply-mob");

	if (filterNav) {
		filterNav.addEventListener("click", () => {
			filterWrap.classList.toggle("show");
      document.body.classList.add("filters-show");
		});
	}

	if (iconClose) {
		const closeItems = [iconClose, btnClose];
		closeItems.forEach(item => {
			item.addEventListener("click", () => {
				filterWrap.classList.remove("show");
        document.body.classList.remove("filters-show");
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
