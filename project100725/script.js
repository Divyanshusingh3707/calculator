let index = 0;
    const slides = document.getElementById("slides");
    const total = 4; // total banners

    function showSlide() {
      slides.style.transform = `translateX(${-index * 100}%)`;
    }

    function nextSlide() {
      index = (index + 1) % total;
      showSlide();
    }

    function prevSlide() {
      index = (index - 1 + total) % total;
      showSlide();
    }

    // Auto slide every 3 sec
    setInterval(nextSlide, 3000);

    gsap.from(".Home", {
      y: "100%",
      duration: 2,
      opacity: 0,
      delay: 1,
      stagger: 0.5,
      scrollTrigger:{
        trigger:'.Home',
        scroll: 'body',
        start:'top-60%',
        end: 'top-50%'
      }
    })

   
