document.addEventListener('DOMContentLoaded', () => {
  const b = document.body;
  b.style.backgroundColor = b.dataset.bg || 'hsl(' + Math.floor(Math.random() * 360) + ',75%,88%)';

  // bio sayfası: sayfa çevirme
  const s = document.querySelectorAll('.sheet'); let i = 0;
  const show = n => { i = (n + s.length) % s.length; s.forEach((e, k) => e.classList.toggle('hide', k !== i)); };
  document.querySelectorAll('[data-flip]').forEach(x => x.onclick = () => show(i + Number(x.dataset.flip)));

  // pins: her yenilemede sıra karışsın
  document.querySelectorAll('.shuffle').forEach(g => {
    [...g.children].sort(() => Math.random() - .5).forEach(c => g.appendChild(c));
  });

  // dönen küp
  const cube = document.getElementById('cube');
  if (cube) {
    // 1) rastgele dönüş
    let x = -20, y = 30;
    const spin = () => {
      const r = () => 90 * (1 + Math.floor(Math.random() * 3)) * (Math.random() < .5 ? -1 : 1);
      x += r(); y += r();
      cube.style.transform = 'rotateX(' + x + 'deg) rotateY(' + y + 'deg)';
    };
    spin();
    setInterval(spin, 2600);

    // 2) yüzlerde fotoğraf değişimi
    const photos = ['2.jpeg','3.jpeg','4.jpeg','5.jpeg','6.jpeg','7.jpeg'];    const faces = cube.querySelectorAll('img');
    let n = 6;
    setInterval(() => {
      const f = faces[Math.floor(Math.random() * faces.length)];
      f.style.opacity = 0;
      setTimeout(() => {
        f.src = 'images/' + photos[n % photos.length];
        n++;
        f.style.opacity = 1;
      }, 400);
    }, 2000);
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("carouselTrack");
  if (!track) return;

  const images = track.querySelectorAll("img");
  if (images.length === 0) return;

  let currentIndex = 0;

  function updateCarousel() {
    // Önceki sınıfları temizle
    images.forEach((img) => {
      img.classList.remove("prev", "active", "next");
    });

    const total = images.length;
    // Sol, orta ve sağ indeksleri hesapla (döngüsel / modular arithmetic)
    const prevIndex = (currentIndex - 1 + total) % total;
    const nextIndex = (currentIndex + 1) % total;

    images[prevIndex].classList.add("prev");
    images[currentIndex].classList.add("active");
    images[nextIndex].classList.add("next");

    // Bir sonraki adıma geç
    currentIndex = (currentIndex + 1) % total;
  }

  // İlk açılışta konumlandır
  updateCarousel();

  // 2.5 saniyede bir otomatik dönsün (interval timer)
  setInterval(updateCarousel, 2500);
});
