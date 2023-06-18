/**
 * demo.js
 *
 * Licensed under the MIT license.
 * https://opensource.org/license/mit/
 * 
 * Copyright 2023, WANNABEDEV
 * https://wannabedev.io
 */

const wannabedev3dCarousel = () => {
  // variables
  const carousel = document.querySelector('.wannabedev-3d-carousel');
  const loader = document.querySelector('.loader');
  const timeline = gsap.timeline();
  const boxes = document.querySelectorAll('.item');
  const stage = document.querySelector('.stage');
  const nav = document.querySelector('#nav');
  const angle = 360 / 3;
  const descTarget = document.querySelectorAll('.description-target');
  const headTarget = document.querySelectorAll('.headline-target');
  const discTarget = document.querySelectorAll('.discover-more-target');

  // handle next item click
  const handleNextClick = () => {
    // animation timeline
    timeline
      .to(descTarget, {
        duration: 0.5,
        yPercent: 100,
        ease: 'power2.out',
        stagger: 0.025
      })
      .to(headTarget, {
        duration: 0.5,
        yPercent: 100,
        ease: 'power2.out',
        stagger: 0.025
      }, '-=0.5')
      .to(discTarget, {
        duration: 0.5,
        yPercent: 100,
        ease: 'power2.out',
        stagger: 0.025
      }, '-=0.5')
      .to(boxes, {
        duration: 0.5,
        width: '80%',
        height: '80%',
        top: '10%',
        right: '10%',
        bottom: '10%',
        left: '10%',
        ease: 'power2.out',
        stagger: 0.1
      })
      .to(boxes, {
        duration: 1,
        rotationX: (index, element) => {
          const y1 = +element.dataset.rotationX;
          const y2 = y1 - angle;
          element.dataset.rotationX = y2;
          return y2;
        },
        ease: 'expo.inOut',
        stagger: 0
      })
      .to(boxes, {
        duration: 0.5,
        width: '100%',
        height: '100%',
        top: '0%',
        right: '0%',
        bottom: '0%',
        left: '0%',
        ease: 'power2.out',
        stagger: 0.1
      }, '+=0.3')
      .to(descTarget, {
        duration: 0.5,
        yPercent: 0,
        ease: 'power2.out',
        stagger: 0.025
      }, '-=0.5')
      .to(headTarget, {
        duration: 0.5,
        yPercent: 0,
        ease: 'power2.out',
        stagger: 0.025
      }, '-=0.5')
      .to(discTarget, {
        duration: 0.5,
        yPercent: 0,
        ease: 'power2.out',
        stagger: 0.025
      }, '-=0.5');
  };

  // handle previous item click
  const handlePrevClick = () => {
    // animation timeline
    timeline
      .to(descTarget, {
        duration: 0.5,
        yPercent: -100,
        ease: 'power2.out',
        stagger: 0.025
      })
      .to(headTarget, {
        duration: 0.5,
        yPercent: -100,
        ease: 'power2.out',
        stagger: 0.025
      }, '-=0.5')
      .to(discTarget, {
        duration: 0.5,
        yPercent: -100,
        ease: 'power2.out',
        stagger: 0.025
      }, '-=0.5')
      .to(boxes, {
        duration: 0.5,
        width: '80%',
        height: '80%',
        top: '10%',
        right: '10%',
        bottom: '10%',
        left: '10%',
        ease: 'power2.out',
        stagger: 0.1
      })
      .to(boxes, {
        duration: 1,
        rotationX: (index, element) => {
          const y1 = +element.dataset.rotationX;
          const y2 = y1 + angle;
          element.dataset.rotationX = y2;
          return y2;
        },
        ease: 'expo.inOut',
        stagger: 0
      })
      .to(boxes, {
        duration: 0.5,
        width: '100%',
        height: '100%',
        top: '0%',
        right: '0%',
        bottom: '0%',
        left: '0%',
        ease: 'power2.out',
        stagger: 0.1
      }, '+=0.3')
      .to(descTarget, {
        duration: 0.5,
        yPercent: 0,
        ease: 'power2.out',
        stagger: 0.025
      })
      .to(headTarget, {
        duration: 0.5,
        yPercent: 0,
        ease: 'power2.out',
        stagger: 0.025
      }, '-=0.5')
      .to(discTarget, {
        duration: 0.5,
        yPercent: 0,
        ease: 'power2.out',
        stagger: 0.025
      }, '-=0.5');
  };

  // wait for images to load
  imagesLoaded(carousel, {
    background: true
  }, () => {
    // hide loader
    loader.classList.add('is-loaded');

    // set stage properties
    gsap.set(stage, {
      perspective: '86vh',
      transformStyle: 'preserve-3d'
    });
    if (navigator.userAgent.search('Safari') >= 0 && navigator.userAgent.search('Chrome') < 0) {
      gsap.set(stage, {
        perspective: '8000px',
        transformStyle: 'preserve-3d'
      });
    }

    // set data rotation for each item
    boxes.forEach((element, index) => {
      const rotationX = index * angle;
      gsap.set(element, {
        rotationX
      });
      element.dataset.rotationX = rotationX;
    });

    // attach event listeners for next and previous buttons
    nav.querySelector('#next').addEventListener('click', handleNextClick);
    nav.querySelector('#prev').addEventListener('click', handlePrevClick);
  });
};

// Call the function to initialize the carousel
wannabedev3dCarousel();
