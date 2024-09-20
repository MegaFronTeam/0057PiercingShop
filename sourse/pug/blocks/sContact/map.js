var myMap;

					ymaps.ready(init);

					function init () {
						myMap = new ymaps.Map('map', {
							center:[55.765857, 37.646736],
							clusterize: true,
							zoom:16
						});

						var placemark = new ymaps.Placemark([55.765857, 37.646736], {
							// Свойства метки (например, описание)	,
							balloonContent: 'Малый Харитоньевский пер., 9/13 стр. 6',
							iconCaption: 'Малый Харитоньевский пер., 9/13 стр. 6'
						}, {
							iconColor: '#FF4433',
						});
						myMap.geoObjects.add(placemark);

						myMap.behaviors.disable('scrollZoom');
						if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
							myMap.behaviors.disable('drag');
						};
					};