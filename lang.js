// 言語の切り替え。#ja / #en があればそれ、なければブラウザの言語（日本語以外は英語）。
(function () {
  document.documentElement.classList.add("js");
  function pick() {
    var h = location.hash.replace("#", "");
    if (h === "ja" || h === "en") return h;
    return (navigator.language || "").toLowerCase().indexOf("ja") === 0 ? "ja" : "en";
  }
  function show(lang) {
    document.querySelectorAll("section[lang]").forEach(function (s) {
      s.classList.toggle("shown", s.getAttribute("lang") === lang);
    });
    document.querySelectorAll("nav.lang a").forEach(function (a) {
      a.setAttribute("aria-current", a.getAttribute("href") === "#" + lang ? "true" : "false");
    });
    document.documentElement.lang = lang;
  }
  window.addEventListener("hashchange", function () { show(pick()); });
  document.addEventListener("DOMContentLoaded", function () { show(pick()); });
})();
