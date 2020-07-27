<template>
  <div id="app">
    <div id="wrapper">
      <header id="header">
        <div class="inner">
  <!-- Logo -->
          <a href="index.html" class="logo">
            <span class="symbol"><img src="../public/images/cls/CLS Logo Only Graphic.jpg" alt=""/></span>
            <span class="title">Concrete Landscape Services LIC.#932604</span>
          </a>
  <!-- Nav -->
            <nav>
              <ul>
                <li><a href="#menu">Menu</a></li>
              </ul>
            </nav>
              </div>
          </header>

      <router-view/>

      <!-- Footer -->
      <footer id="footer">
        <div class="inner">
<!-- Section -->
          <section class="main special">
            <h2>Get in touch</h2>
            <p>Contact us for a consultation!</p>
            <ul class="contact-icons">
              <li>
                <span class="icon major alt fa-envelope"></span>
                <p><a href="#">RonDavis@concretelandscapeservices.com</a></p>
              </li>
              <li>
                <span class="icon major alt fa-map"></span>
                <p>4862 E. 2nd Street<br />
                Benicia, CA 94510</p>
              </li>
              <li>
                <span class="icon solid major alt fa-mobile-alt"></span>
                <p><a href="#">916-688-1550</a></p>
              </li>
            </ul>
          </section>
          <ul class="copyright">
            <li>&copy; Untitled. All rights reserved</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
          </ul>
        </div>
      </footer>

    </div>
<!-- Menu -->
      <nav id="menu">
        <div class="inner">
          <h2>Menu</h2>
          <ul>
            <li><a href="http://localhost:8080">Home</a></li>
            <li><a href="http://localhost:8080/Concrete">Concrete</a></li>
            <li><a href="http://localhost:8080/Landscape">Landscape</a></li>
            <li><a href="http://localhost:8080/Gallery">Gallery</a></li>
            <li><a href="http://localhost:8080/About">About Us</a></li>
          </ul>
        </div>
      </nav>
  </div>
</template>

<style>
h2 {text-align: left;}
p {text-align: left;}
</style>
