<template>
  <div id="app">
    <div id="wrapper">
      <header id="header">
        <div class="inner">
  <!-- Logo -->
          <a href="/" class="logo">
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
        <container>
          <section class="inner">
            <h2 style="text-align:center;">Get in touch</h2>
            <h4 style="text-align:center;">Contact us for a consultation!</h4>
            <p style="text-align:center;">SB Cert.16405<br />Caltrans Certified  DBE 43013<br /> Dir No. 1000038082</p>
            <br>
            <center>
              <ul class="contact-icons">
                <li>
                  <span class="icon major alt fa-envelope"></span>
                  <p style="text-align:center;"><a href="mailto: RonDavis@CLSconcrete.com">rondavis@clsconcrete.com</a></p>
                </li>
                <li>
                  <span class="icon major alt fa-map"></span>
                  <p style="text-align:center;">11151 Trade Center, Suite 204<br />
                  Rancho Cordova, CA 95670</p>
                </li>
                <li>
                  <span class="icon solid major alt fa-mobile-alt"></span>
                  <p style="text-align:center;"><a href="tel:916-688-1550">O. (916) 688-1550</a><br /><a href="tel:916-597-2083">F. (916) 597-2083</a></p>
                </li>
              </ul>
              <div>
                <img src="../public/images/cls/visa.png" class="cards">
                <img src="../public/images/cls/mastercard.png" class="cards">
              </div>
            </center>
          </section>
        </container>
        <br>
      </div>
<!-- Menu -->
      <nav id="menu">
        <div class="inner">
          <h2>Menu</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/Concrete">Concrete</a></li>
            <li><a href="/Landscape">Landscape</a></li>
            <li><a href="/Repair">Repairs & Restoration</a></li>
            <li><a href="/Gallery">Gallery</a></li>
            <li><a href="/About">About Us</a></li>
          </ul>
        </div>
      </nav>
  </div>
</template>

<style>
h2 {text-align: center;}
p {text-align: center;}
</style>
