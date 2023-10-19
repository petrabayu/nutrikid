class nutrikidFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer id="footer" class="footer-1">
  <div class="main-footer">
    <div class="container">
      <div class="row">

        <div class="col-xs-12 col-sm-6 col-md-3">
          <div class="widget subscribe no-box">
            <img class="img-fluid logo-footer" src="assets/images/logo-nutrikid-text.png" alt="logofooter">
            <p>XYZ Tower</p>
            <p>Jl. Kemana Saja No. 15</p>
            <p>Jakarta </p>
          </div>
        </div>

        <div class="col-xs-12 col-sm-6 col-md-3">
          <div class="widget no-box">
            <h5 class="widget-title">About<span></span></h5>
          <ul class="thumbnail-widget">
            <li>
            <div class="thumb-content"><a href="#.">FAQ</a></div> 
            </li>
            <li>
            <div class="thumb-content"><a href="#.">Syarat dan Ketentuan</a></div> 
            </li>
            <li>
            <div class="thumb-content"><a href="#.">Kebijakan Privasi</a></div> 
            </li>
            <li>
            <div class="thumb-content"><a href="#.">Kebijakan Finansial</a></div> 
            </li>
          </ul>
          </div>
        </div>

        <div class="col-xs-12 col-sm-6 col-md-3">
          <div class="widget no-box">
            <h5 class="widget-title">Collaboration<span></span></h5>
            <ul class="thumbnail-widget">
              <li>
              <div class="thumb-content"><a href="#.">Karir</a></div> 
              </li>
              <li>
              <div class="thumb-content"><a href="#.">Kerjasama</a></div> 
              </li>
              <li>
              <div class="thumb-content"><a href="#.">Membership</a></div> 
              </li>
            </ul>
          </div>
        </div>

        <div class="col-xs-12 col-sm-6 col-md-3">
          <div class="widget no-box">
            <h5 class="widget-title">Contact Us<span></span></h5>
            <p><a href="mailto:info@domain.com" title="glorythemes">Email: nutrikid@gmail.com</a></p>
            <p>Phone : +621 234 567 890</p>
        </div>
      </div>
    </div>
  </div>
    
    <div class="footer-copyright">
      <div class="container">
        <div class="row justify-content-between copyright">
          <div class="col-6 ol-sm-3 text-left">
            <p>Copyright Nutrikid © 2023. All rights reserved.</p>
          </div>
          <div class="col-6 col-sm-3 text-right">
            <ul class="social-footer2">
              <li class=""><a title="instagram" target="_blank" href="https://www.instagram.com/"><img alt="instagram" width="30" height="30" src="assets/images/instagram.png"></a></li>
              <li class=""><a href="https://www.facebook.com/" target="_blank" title="Facebook"><img alt="Facebook" width="30" height="30" src="assets/images/facebook.png"></a></li>
              <li class=""><a href="https://www.linkedin.com/" target="_blank" title="Linkedin"><img alt="LinkedIn" width="30" height="30" src="assets/images/linkedin.png"></a></li>
            </ul>  
          </div>
          </div>
      </div>
    </div>
  </div>
</footer>
     `;
  }
}

customElements.define("nutrikid-footer", nutrikidFooter);
