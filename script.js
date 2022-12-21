// paralax animation
gsap.from("#m1",{
    scrollTrigger :{
        scrub :true
    },
    y:100,
})
gsap.from("#m2",{
    scrollTrigger: {
        scrub: true
    },
    y:50,
})
gsap.from("#t2",{
    scrollTrigger : {
        scrub: true
    },
    x:-50,
})
gsap.from("#t1",{
    scrollTrigger: {
        scrub:true
    },
    x:50,
})
gsap.from("#man",{
    scrollTrigger: {
        scrub:true
    },
    x:-250,
})
gsap.from("#plants",{
    scrollTrigger: {
        scrub:true
    },
    x:-50,
})
gsap.from("#text",{
    scrollTrigger: {
        scrub:true
    },
    x:400,
})

// module menu
var mainApp = angular.module("mainApp", ['ngRoute']);

mainApp.config(function($routeProvider) {
	$routeProvider
        .when('/', {
            templateUrl: 'home.htm',
        })
		.when('/showHistory', {
			templateUrl: 'history.htm',
		})
        .when('/showTypes', {
            templateUrl: 'types.htm',
        })
        .when('/showTechniques', {
            templateUrl: 'techniques.htm'
        })
        .when('/showSheltering', {
            templateUrl: 'sheltering.htm'
        })
        .when('/showHazards', {
            templateUrl: 'hazard.htm'
        })
        .when('/guide', {
            templateUrl: 'guide.htm'
        })
        .when('/mapsAPI', {
            templateUrl: 'Maps.htm'
        })
        .otherwise({
			rredirectTo: '/'
		});

});

//maps api
function initMap() {
    var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, {
      center: {lat: 44.540, lng: -78.546},
      zoom: 8
    });
  }

  var marker = new google.maps.Marker({
    position: {lat: 44.540, lng: -78.546},
    map: map,
    title: 'Mountaineering Route'
  });

  var infoWindow = new google.maps.InfoWindow({
    content: '<h1>Mountaineering Route</h1><p>Description of the route goes here</p>'
  });
  
  marker.addListener('click', function() {
    infoWindow.open(map, marker);
  });
  
