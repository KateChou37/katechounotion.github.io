var posts=["2025/08/27/JS如何宣告變數-筆記/","2025/08/27/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };