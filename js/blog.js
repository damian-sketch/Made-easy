fetch("https://blog.central-insurance.com/wp-json/wp/v2/posts/")
.then(response => {return response.json()})
.then( post => {
  for(var i=0; i<10 ; i++){
    const text = JSON.stringify(post);
    const articles = document.getElementById("articles");
    articles.innerHTML = text;
  }
});