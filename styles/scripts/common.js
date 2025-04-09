// 回到頂部的功能
window.onload = function () {
  d;
  const backToTop = document.getElementById("back-to-top");

  // 當滾動超過 200px 時顯示按鈕
  window.onscroll = function () {
    if (document.documentElement.scrollTop > 200) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  };

  // 點擊按鈕回到頂部
  backToTop.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
};
