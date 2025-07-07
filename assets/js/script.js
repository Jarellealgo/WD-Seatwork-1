
    const wheel = document.getElementById('wheel-img');
    const centerArea = document.querySelector('.center-area');

    if (window.matchMedia('(hover: hover)').matches) {
      centerArea.addEventListener('mouseenter', function () {
        centerArea.classList.add('show-buttons');
      });
      centerArea.addEventListener('mouseleave', function () {
        centerArea.classList.remove('show-buttons');
      });
    }

    let buttonsVisible = false;

    wheel.addEventListener('click', function (e) {
      e.stopPropagation();
      buttonsVisible = !buttonsVisible;
      if (buttonsVisible) {
        centerArea.classList.add('show-buttons');
      } else {
        centerArea.classList.remove('show-buttons');
      }
    });

    document.addEventListener('click', function (e) {
      if (buttonsVisible && !centerArea.contains(e.target)) {
        centerArea.classList.remove('show-buttons');
        buttonsVisible = false;
      }
    });
