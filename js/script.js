// 1) Counter Section(Counter.js)
var counters = document.querySelectorAll(".counter");
var speed=200;  // Deviding for 200 part to Counter

window.addEventListener('scroll',function(e){
    counters.forEach(counter => {
        var editCount = () =>{   // Arrow Function Sytanx
     
           var target = +counter.getAttribute('data-target'); // + -> Convert to Number from String
           var count = +counter.innerText;  // initilazition start value which it is zero
           //counter.innerText is string, but count is number
     
        //    console.log(typeof target);
     
           var increment = target/speed;
     
           if(count<target){
              counter.innerText=count+increment;
              setTimeout(editCount,1500);
           }
           else{
             count.innerText=target;
           }

        }
        editCount();
     });
})
   

// 2) Testimonials Section(Owl-Carousel.js)

var slides=document.querySelector(".slider").children;
var iniciatorImages=document.querySelector(".slider_iniciator").children;

// console.log(slides,iniciatorImages);

for(var i=0;i<iniciatorImages.length;i++){
    // iniciatorImages Part
    // console.log(iniciatorImages[i]);
    iniciatorImages[i].addEventListener('click',function(){
    //    console.log(this);
    //    console.log(this.getAttribute('data-id'));

    // Removing All active Class ->From iniciatorImages
    for(j=0;j<iniciatorImages.length;j++){
          iniciatorImages[j].classList.remove('active');
    }
          this.classList.add('active');

        //   Slide Part
          var id=this.getAttribute('data-id');

        //   Removing All active class-> From slides
        for(i=0;i<slides.length;i++){
            slides[i].classList.remove('active');
        }
          slides[id].classList.add('active');
    });
}



