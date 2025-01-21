const hamburger = document.querySelector(
  ".header .nav-bar .nav-list .hamburger"
);
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const menu_item = document.querySelectorAll(
  ".header .nav-bar .nav-list ul li a"
);
const header = document.querySelector(".header.container");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

document.addEventListener("scroll", () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.style.backgroundColor = "#29323c";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

menu_item.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
});

// Get all modal elements
var modals = document.querySelectorAll(".modal");
var links = document.querySelectorAll(".sertifikat-link");

// Loop through each modal link
links.forEach(function (link, index) {
  link.onclick = function () {
    modals[index].style.display = "block";
  };
});

// Get the <span> element that closes the modal
var spans = document.querySelectorAll(".close");

// When the user clicks on <span> (x), close the modal
spans.forEach(function (span) {
  span.onclick = function () {
    modals.forEach(function (modal) {
      modal.style.display = "none";
    });
  };
});

// Close modal if user clicks outside of modal content
window.onclick = function (event) {
  modals.forEach(function (modal) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
};

// Mendapatkan modal dan elemen terkait
var modals = document.querySelectorAll('.modal');
var closeBtns = document.querySelectorAll('.close');
var sertifikatLinks = document.querySelectorAll('.sertifikat-link');

// Menangani klik pada gambar sertifikat
sertifikatLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    var imgSrc = event.currentTarget.getAttribute('data-img');
    var targetModal = event.currentTarget.getAttribute('data-target');
    var targetImg = document.getElementById('sertifikat-image' + targetModal.charAt(targetModal.length - 1));

    // Mengubah gambar modal
    targetImg.src = imgSrc;

    // Menampilkan modal
    document.getElementById(targetModal).style.display = 'block';
  });
});

// Menutup modal ketika tombol close diklik
closeBtns.forEach(function(btn) {
  btn.onclick = function() {
    modals.forEach(function(modal) {
      modal.style.display = "none";
    });
  }
});

// Menutup modal jika area di luar modal diklik
window.onclick = function(event) {
  modals.forEach(function(modal) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
}
