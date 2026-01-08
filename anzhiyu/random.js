var posts=["2026/01/04/hello-world/","2025/08/27/JS如何宣告變數-筆記/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };