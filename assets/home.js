function search_cities() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('cities');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input))
         {
            x[i].style.display="none";
         }
        else {
            x[i].style.display="";                 
        }
    }
}

// subscribers thanks message

const varbody = document.getElementById('struct')
function blurbody()
{
  varbody.style.opacity='0.2'
  varbody.style.pointerEvents='none'
  document.getElementById('footer-blur').style.opacity='0.2'
  document.getElementById('footer-blur').style.pointerEvents='none'
  document.getElementById('mob-footer-blur').style.opacity='0.2'
  document.getElementById('mob-footer-blur').style.pointerEvents='none'

}
function freebody()
{
      varbody.style.opacity='1'
      varbody.style.pointerEvents='auto'
      document.getElementById('footer-blur').style.opacity='1'
      document.getElementById('footer-blur').style.pointerEvents='auto'
      document.getElementById('mob-footer-blur').style.opacity='1'
      document.getElementById('mob-footer-blur').style.pointerEvents='auto'
}
function prt() {
    document.getElementById('popuppage').style.display = 'block';
     blurbody();
  }
  setTimeout(prt, 2000);
  document.getElementById("closePopup")
    .addEventListener("click", function () {
      document.getElementById('popuppage').style.display = 'none';
      freebody()
    });


    ///
    // mobile menu
    const burger = document.getElementById('burger')
    const navbar = document.getElementById('navbar')
    const navlist = document.getElementById('nav-list')
    const closemenu = document.getElementById('closemenu')
    burger.addEventListener('click',function openmenu()
    {
            navbar.style.maxHeight='300px'
            navlist.style.opacity='1'
            navlist.style.pointerEvents='auto'
            closemenu.style.display='block'
            burger.style.display='none'
    })
    closemenu.addEventListener('click',function closenav()
    {
        burger.style.display='block'
        closemenu.style.display='none'
        navlist.style.opacity='0'
        navbar.style.maxHeight='60px'
        navlist.style.pointerEvents='none'
    })


      // slider
      let slideIndex = 1;
      showSlides(slideIndex);

      function plusSlides(n) {
        showSlides((slideIndex += n));
      }

      function currentSlide(n) {
        showSlides((slideIndex = n));
      }

      function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) {
          slideIndex = 1;
        }
        if (n < 1) {
          slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
     }
     // to get user location code................
     let locationButton = document.getElementById("get-location");
            let locationDiv = document.getElementById("location-details");
            locationButton.addEventListener("click", () => {
  //Geolocation APU is used to get geographical position of a user and is available inside the navigator object
  if (navigator.geolocation) {
    //returns position(latitude and longitude) or error
    navigator.geolocation.getCurrentPosition(showLocation, checkError);
  } else {
    //For old browser i.e IE
    locationDiv.innerText = "The browser does not support geolocation";
  }
});
//Error Checks
const checkError = (error) => {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      locationDiv.innerText = "Please allow access to location";
      break;
    case error.POSITION_UNAVAILABLE:
      //usually fired for firefox
      locationDiv.innerText = "Location Information unavailable";
      break;
    case error.TIMEOUT:
      locationDiv.innerText = "The request to get user location timed out";
  }
};
const showLocation = async (position) => {
  //We user the NOminatim API for getting actual addres from latitude and longitude
  let response = await fetch(
    `https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`
  );
  //store response object
  let data = await response.json();
  if(`${data.address.city}`=='undefined')
  {
    locationDiv.innerText=`${data.address.country}`
  }
  else
  {
  locationDiv.innerText = `${data.address.city}, ${data.address.country}`;
  }
};
const privacypopup = document.getElementById('privacypopup')
    document.getElementById('closeprivacypopup').addEventListener('click',closepopup)
    function closepopup()
    {
       
        privacypopup.style.display='none'
        var struct = document.getElementById('struct')
        struct.style.opacity='1'
        struct.style.pointerEvents='auto'
    }  
     //open popuop
    document.getElementById('openprivacypopup').addEventListener('click',openpopup)
    document.getElementById('openmobprivacypopup').addEventListener('click',openpopup)
    function openpopup()
    {
       
        privacypopup.style.display='block'
        privacypopup.style.opacity='1'
        var struct=document.getElementById('struct');
        struct.style.opacity='0.2'
        struct.style.pointerEvents='none'
    }  
// terms popup
const termspopup = document.getElementById('termspopup')
    document.getElementById('closetermspopup').addEventListener('click',closetermspopup)
    function closetermspopup()
    {
        
        termspopup.style.display='none'
        var struct = document.getElementById('struct')
        struct.style.opacity='1'
        struct.style.pointerEvents='auto'
    }  
     //open popuop
    document.getElementById('opentermspopup').addEventListener('click',opentermspopup)
    document.getElementById('openmobtermspopup').addEventListener('click',opentermspopup)
    function opentermspopup()
    {
        
        termspopup.style.display='block'
        termspopup.style.opacity='1'
        var struct=document.getElementById('struct');
        struct.style.opacity='0.2'
        struct.style.pointerEvents='none'
    } 
    // Faq popup
const faqpopup = document.getElementById('faqpopup')
    document.getElementById('closefaqpopup').addEventListener('click',closefaqpopup)
    function closefaqpopup()
    {
       
        faqpopup.style.display='none'
        var struct = document.getElementById('struct')
        struct.style.opacity='1'
        struct.style.pointerEvents='auto'
    }  
     //open popuop
    document.getElementById('openfaqpopup').addEventListener('click',openfaqpopup)
    document.getElementById('openmobfaqpopup').addEventListener('click',openfaqpopup)
    function openfaqpopup()
    {
        
        faqpopup.style.display='block'
        faqpopup.style.opacity='1'
        var struct=document.getElementById('struct');
        struct.style.opacity='0.2'
        struct.style.pointerEvents='none'
    } 
    // popup script
  

    document.getElementById('opendispopup').addEventListener('click',opendisclaimer)
     document.getElementById('openmobdispopup').addEventListener('click',opendisclaimer)
     function opendisclaimer()
     {
        document.getElementById('dispopup').style.display='block'
        document.getElementById('dispopup').style.opacity='1'
        blurbody()
     }
    //close disclaimerpopup
     document.getElementById('closedispopup').addEventListener('click',()=>
     {
        document.getElementById('dispopup').style.display='none'
        freebody()
     })