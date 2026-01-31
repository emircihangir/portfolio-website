class ContactModal extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div id="contact-modal">
            <div id="contact-modal-panel">
                <div id="close-contact-modal-button"></div>

                <p style="font-size: 48px; position: relative; z-index: 99; font-weight: 600;">Contact</p>
                <div style="width: 300px; height: 70px; background-color: var(--main-color);position: relative; bottom: 40px;"></div>
                <p>Call: <a href="tel:+905332058243">+90-533-205-8243</a></p>
                <p>Write: <a href="mailto:m.emircihangir@gmail.com">m.emircihangir@gmail.com</a></p>
                <div style="display: flex; justify-content: center;">
                    <div style="background-image: url('/assets/images/github-mark.svg');" class="logo-div" onclick="window.open('https://github.com/emircihangir', '_blank')"></div>
                    <div style="background-image: url('/assets/images/linkedin-logo.png');" class="logo-div" onclick="window.open('https://www.linkedin.com/in/emir-cihangir-683146313/', '_blank')"></div>
                    <div style="background-image: url('/assets/images/instagram-logo.svg');" class="logo-div" onclick="window.open('https://www.instagram.com/emir.cihangirr/', '_blank')"></div>
                </div>
            </div>
        </div>
      `;
  }
}

class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="navbar">
        <div id="navbar-left-section">
            <span style="font-weight: 700;">I'm Emir Cihangir,</span>
            <a href="/index.html"><span style="font-weight: 300;">a <mark>Software Engineer.</mark></span></a>
        </div>
        
        <div id="navbar-right-section">
            <a href="/index.html"><span>About Me</span></a>
            <a href="/assets/resume.pdf"><span>My Resumé</span></a>
            <a href="/pages/my-projects.html"><span>My Projects</span></a>
            <a href="/pages/blog.html"><span>Blog</span></a>
            <a class="contact-link"><span>Contact</span></a>
        </div>
      </div>

      <div id="mobile-menu-modal">
        <br>
        <a href="/index.html"><span>About Me</span></a>
        <br>
        <a href="/assets/resume.pdf"><span>My Resumé</span></a>
        <br>
        <a href="/pages/my-projects.html"><span>My Projects</span></a>
        <br>
        <a href="/pages/blog.html"><span>Blog</span></a>
        <br>
        <a class="contact-link"><span>Contact</span></a>
        <br>
      </div>
    `;
  }
}

class ProjectLink extends HTMLElement {
  connectedCallback() {
    let iconType = this.getAttribute("icon-type");
    if (iconType == null) iconType = "svg";

    let backgroundImage = "/projects/" + this.getAttribute("app-name") + "/assets/app-icon." + iconType;
    if (this.getAttribute("scaffold-icon") == "true") backgroundImage = "/assets/images/scaffold-icon.svg";

    let supportedPlatforms = this.getAttribute("supported-platforms");
    if (supportedPlatforms != null) supportedPlatforms = supportedPlatforms.replaceAll(" ", "").split(",");

    let platformIcons = [];
    supportedPlatforms.forEach(element => {
      let iconPath = "/assets/images/" + element + "_platform_icon.svg";
      platformIcons.push(`<div class="platform-icon" style="background-image: url('` + iconPath + `');"></div>`);
    });
    platformIcons = platformIcons.join('');
    this.innerHTML = `
      <div class="project-link" data-appname="`+ this.getAttribute("app-name") + `">
          <div class="project-link-icon" style="background-image: url('` + backgroundImage + `');"></div>
          <div class="project-link-content">
            <p class="project-link-title">` + this.getAttribute("app-title") + `</p>
            <p class="project-link-description">` + this.getAttribute("app-description") + `</p>
            <div class="platform-icons-container">`+ platformIcons + `</div>
          </div>
      </div>
    `;
  }
}

customElements.define('contact-modal', ContactModal);
customElements.define('nav-bar', Navbar);
customElements.define('project-link', ProjectLink);