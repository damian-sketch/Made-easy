 
fetch('https://blog.cinfin.com/wp-json/wp/v2/posts')
.then(function(responses){
  return responses.json()
})
.then(function(post){
    for (var i =0; i<3 ; i++){
    
    $(`#articles`).append(`<div class= "card">`)
    $(`#articles`).append(`<h1>${post[i].title.rendered}</h1>`)
    $(`#articles`).append(post[i].content.rendered)
    $(`#articles`).append(post[i].excerpt.rendered)
    $(`#articles`).append(post[i].yoast_head)
    
    $(`#articles`).append(`<div>`)
        }
})