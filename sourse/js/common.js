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

	const partnersSwiper = new Swiper('.sBrands__slider--js .swiper', {
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
      }
    }
	});

	const productSwiper = new Swiper('.sProductSlider__slider--js', {
		spaceBetween: 7,
		slidesPerView: 2,
		loop: true,
		navigation: {
			nextEl: ".sProductSlider__slider--js .swiper-button-next",
			prevEl: ".sProductSlider__slider--js .swiper-button-prev",
		},
    breakpoints: {
      768: {
        slidesPerView: 3,
      },
      992: {
        spaceBetween: 20,
        slidesPerView: 4,
      }
    }
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

  const popoverTriggerList = document.querySelectorAll(
    '[data-bs-toggle="popover"]'
  );
  const popoverList = [...popoverTriggerList].map(
    popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl)
  );

  /* dropdown */
  const regionLinks = document.querySelectorAll(
		".dropdown li"
	);

	const dropdownToggle = document.querySelector(
		".dropdown .dropdown-toggle"
	);

	if (regionLinks && dropdownToggle) {
		regionLinks.forEach(link => {
			link.addEventListener("click", function (event) {
				event.preventDefault();

				dropdownToggle.textContent = this.textContent;
			});
		});
	}

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

  /* filters */
  const filtersWraps = document.querySelectorAll('.filter__wrap')
  if (filtersWraps.length) {
    filtersWraps.forEach((filter) => {
      filter.addEventListener('click', (e)=> {
        e.stopPropagation()
      })
    })
  }

  const filterNav = document.querySelector('.filters-wrap.filter-nav')
  const filterWrap = document.querySelector('.filters-wrap--js')
  const iconClose = document.querySelector('.filters-wrap--js .icon-close-wrap')
  const btnClose = document.querySelector('.filters-wrap--js #btn-apply-mob')

  if(filterNav) {
    filterNav.addEventListener('click', ()=> {
      filterWrap.classList.toggle('show')
    })
  }

  if (iconClose) {
    const closeItems = [iconClose, btnClose]
    closeItems.forEach((item) => {
      item.addEventListener('click', ()=> {
        filterWrap.classList.remove('show')
      })
    })
  }

  const filters = document.querySelectorAll('.filter--js')
  let activeFilter = null;

  function closeAllFilters() {
    filters.forEach(filter => filter.classList.remove('show'));
    activeFilter = null;
  }

  function handleFilterClick(event) {
    const filter = event.currentTarget;

    if (activeFilter && activeFilter !== filter) {
      closeAllFilters();
    }

    filter.classList.toggle('show');

    if (filter.classList.contains('show')) {
      activeFilter = filter;
    } else {
      activeFilter = null;
    }
    event.stopPropagation();
  }

  if (filters.length) {
    filters.forEach(filter => {
      filter.addEventListener('click', handleFilterClick);
    });
  }

  document.addEventListener('click', () => {
    if (activeFilter) {
      closeAllFilters();
    }
  });

  /* range */
  function currencyFormat(num) {
    return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
  }

  $(".range-wrap").each(function () {
    let _this = $(this);

    var $range = _this.find(".slider-js");

    var $inputFrom = _this.find(".input_from");

    var $inputTo = _this.find(".input_to");

    var instance,
        from,
        to,
        min = $range.data('min'),
        max = $range.data('max');
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
      onFinish: updateInputs
    });
    instance = $range.data("ionRangeSlider");

    function updateInputs(data) {
      from = data.from;
      to = data.to;
      $inputFrom.prop("value", currencyFormat(from));
      $inputTo.prop("value", currencyFormat(to)); // InputFormat();
    }

    $inputFrom.on("change input ", function () {
      var val = +$(this).prop("value").replace(/\s/g, ''); // validate

      if (val < min) {
        val = min;
      } else if (val > to) {
        val = to;
      }

      instance.update({
        from: val
      });
      $(this).prop("value", currencyFormat(val));
      console.log(val);
    });
    $inputTo.on("change input ", function () {
      var val = +$(this).prop("value").replace(/\s/g, ''); // validate

      if (val < from) {
        val = from;
      } else if (val > max) {
        val = max;
      }

      instance.update({
        to: val
      });
      $(this).prop("value", currencyFormat(val));
    });
  });

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
