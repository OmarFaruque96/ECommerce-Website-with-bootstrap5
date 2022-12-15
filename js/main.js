// owl carousel js
$(document).ready(function(){

	$('#products').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:true,
	    autoplay:true,
		autoplayTimeout:3000,
		autoplayHoverPause:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:4
	        }
	    }
	});

	$('#bestsellers').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:true,
	    autoplay:true,
		autoplayTimeout:3000,
		autoplayHoverPause:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:4
	        }
	    }
	});
	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:true,
	    autoplay:true,
		autoplayTimeout:3000,
		autoplayHoverPause:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	});

	


	// carousel next and prev
	$('.owl-next span').text('Next');
	$('.owl-prev span').text('Previous');


	// slider counting number
	var dots = document.querySelectorAll('.owl-dots button span');

	for(let i=0; i<dots.length; i++){
		let val = i+1;
		if(i<10){
			dots[i].innerText = "0"+val;
		}
		
	}


  	const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

	  let today = new Date(),
	      dd = String(today.getDate()).padStart(2, "0"),
	      mm = String(today.getMonth() + 1).padStart(2, "0"),
	      yyyy = today.getFullYear(),
	      nextYear = yyyy + 1,
	      dayMonth = "09/30/",
	      birthday = dayMonth + yyyy;
	  
	  today = mm + "/" + dd + "/" + yyyy;
	  if (today > birthday) {
	    birthday = dayMonth + nextYear;
	  }
  //end
  
  const countDown = new Date(birthday).getTime(),
      x = setInterval(function() {    

        const now = new Date().getTime(),
              distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

     
        //seconds
      }, 0)


 	// add to cart 
  //$(".shopping-cart").hide();
  $("#cart").on("click", function(s) {
  	s.preventDefault();
    $(".shopping-cart").fadeToggle( "fast");
  });
 

});