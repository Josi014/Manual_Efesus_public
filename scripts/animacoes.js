export function abrirTelaCheia(src) {
  const img = document.getElementById("lightbox-img");
  img.src = src;
  document.getElementById("lightbox").style.display = "flex";
}

export function fecharTela() {
  document.getElementById("lightbox").style.display = "none";
}

export function accordion() {
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', function () {
      const content = this.nextElementSibling;
      const isActive = this.classList.contains('active');

      // console.log(content);

      accordionHeaders.forEach(otherHeader => {
        if(otherHeader !== this) {
          otherHeader.classList.remove('active');
          otherHeader.nextElementSibling.style.maxHeight = '0';
        }
      });

      this.classList.toggle('active');

      content.style.maxHeight = isActive ? '0' : content.scrollHeight + 'px';

      if(!isActive) {
        setTimeout(() => {
          const targetHeading = content.closest('.accordion-item');
          if(targetHeading) {
            targetHeading.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 300);
      }

    });

  });
}


export function closeAllAccordions() {
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(header => {
    header.classList.remove('active');
    const content = header.nextElementSibling;
    content.style.maxHeight = '0';
  });
}


let carousel = document.querySelector( '.carousel' ),
    track = carousel.querySelector( '.carousel--track' ),
    row = carousel.querySelector( '.carousel--row' );

let clonedRow = row.cloneNode( true );

track.appendChild( clonedRow );


