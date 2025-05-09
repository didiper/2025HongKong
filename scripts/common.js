// 回到頂部按鈕功能
window.onload = function () {
  const backToTop = document.getElementById("back-to-top");

  if (backToTop) {
    // 顯示與隱藏按鈕
    window.onscroll = function () {
      if (document.documentElement.scrollTop > 200 || document.body.scrollTop > 200) {
        backToTop.style.display = "block";
      } else {
        backToTop.style.display = "none";
      }
    };

    // 點擊返回頂部
    backToTop.onclick = function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };
  }
};
