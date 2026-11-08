// 天鼎官网 - 全局头部与底部组件
(function() {
  const path = window.location.pathname;
  const page = path.split("/").pop() || "index.html";
  const isEn = path.includes('/en/');
  const isHans = path.includes('/zh-hans/');
  const prefix = (isEn || isHans) ? '../' : '';

  const navText = {
    zh: { home: "首頁", prod: "產品與服務", sci: "科學與溯源", proc: "服務流程", abt: "關於天鼎", b2b: "渠道合作", cont: "聯絡我們", langB: "繁", langS: "简" },
    hans: { home: "首页", prod: "产品与服务", sci: "科学与溯源", proc: "服务流程", abt: "关于天鼎", b2b: "渠道合作", cont: "联络我们", langB: "繁", langS: "简" },
    en: { home: "Home", prod: "Products & Services", sci: "Science & Traceability", proc: "Our Process", abt: "About Us", b2b: "Partners", cont: "Contact", langB: "繁", langS: "简" }
  };
  const t = isEn ? navText.en : (isHans ? navText.hans : navText.zh);

  const headerHTML = `
  <header class="custom-nav">
    <div class="nav-container">
      <a href="${prefix}index.html" class="flex items-center">
        <img src="${prefix}assets/logo-horizontal.svg" alt="天鼎國際" style="height: 40px;">
      </a>
      <button class="menu-toggle" onclick="document.getElementById('nav-menu').classList.toggle('show')">☰</button>
      <div class="nav-links" id="nav-menu">
        <a href="${prefix}index.html" class="${page === 'index.html' ? 'active' : ''}">${t.home}</a>
        <a href="${prefix}products.html" class="${page === 'products.html' ? 'active' : ''}">${t.prod}</a>
        <a href="${prefix}science.html" class="${page === 'science.html' ? 'active' : ''}">${t.sci}</a>
        <a href="${prefix}process.html" class="${page === 'process.html' ? 'active' : ''}">${t.proc}</a>
        <a href="${prefix}about.html" class="${page === 'about.html' ? 'active' : ''}">${t.abt}</a>
        <a href="${prefix}b2b.html" class="${page === 'b2b.html' ? 'active' : ''}">${t.b2b}</a>
        <a href="${prefix}contact.html" class="${page === 'contact.html' ? 'active' : ''}">${t.cont}</a>
        <div class="lang-switch">
          <a href="${prefix}index.html" class="${!isEn && !isHans ? 'active' : ''}">${t.langB}</a>
          <a href="${prefix}zh-hans/index.html" class="${isHans ? 'active' : ''}">${t.langS}</a>
          <a href="${prefix}en/index.html" class="${isEn ? 'active' : ''}">EN</a>
        </div>
      </div>
    </div>
  </header>
  `;

  const footerHTML = `
  <footer style="background-color: #111f19; padding: 40px 20px; border-top: 1px solid rgba(176,141,87,0.2); display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;">
    <div style="display: flex; align-items: center; justify-content: center; gap: 12px; margin-bottom: 18px;">
      <div style="width: 42px; height: 42px; background-color: #B08D57; color: #1F3A2E; display: flex; align-items: center; justify-content: center; border-radius: 6px; font-family: serif; font-size: 24px; font-weight: bold;">鼎</div>
      <div style="text-align: left;">
        <div style="color: #F7F4EC; font-size: 22px; font-weight: bold; letter-spacing: 2px; line-height: 1.2;">${isEn ? 'TIANDING' : '天鼎國際'}</div>
        <div style="color: #B08D57; font-size: 11px; letter-spacing: 4px; text-transform: uppercase; margin-top: 2px;">${isEn ? 'INTERNATIONAL TRADE' : 'TIANDING'}</div>
      </div>
    </div>
    <div style="color: rgba(247, 244, 236, 0.6); font-size: 12px; line-height: 1.8; max-width: 800px;">
      <p style="margin-bottom: 8px;">Room 633, 6/F, Block B, Wah Luen Industrial Centre, Wong Chuk Yeung Street, Fo Tan, Shatin, HK</p>
      <p>© 2026 ${isEn ? 'HK TIANDING INTERNATIONAL TRADE LIMITED' : '香港天鼎國際貿易有限公司 HK TIANDING INTERNATIONAL TRADE LIMITED'}. All rights reserved. · <a href="mailto:tiandingtr@gmail.com" style="color: #B08D57; text-decoration: none;">tiandingtr@gmail.com</a></p>
    </div>
  </footer>
  `;

  document.getElementById('global-header').innerHTML = headerHTML;
  document.getElementById('global-footer').innerHTML = footerHTML;
})();
