var posts=["2026/01/04/hello-world/","2024/01/08/文章標題/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };