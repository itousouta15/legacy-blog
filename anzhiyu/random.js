var posts=["2025/07/11/ais3preexam/","2025/10/05/devlog/","2025/04/04/firstblog/","2025/08/27/hexo/","2025/07/11/zerojudge/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };