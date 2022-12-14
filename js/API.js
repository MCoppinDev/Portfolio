fetch('https://mcoppinger-blog.herokuapp.com/GetTopXPosts/3')
.then(response => response.json())
.then(function(data){    
  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };    
  let blogUrl = "//mcoppinger-blog.herokuapp.com/Posts/URLFriendly/"
  let blogAnchor = $("#blog1 > div.card-body > h3 > a");    
  let blogLink = `${blogUrl}${data[0].slug}`;
  blogAnchor.html(data[0].title);
  blogAnchor.attr("href", blogLink);
  $("#blog1 > div.card-img > a").attr("href", blogLink)
  $("#blog1 > div.card-img > a > img").attr("src", `data:${data[0].contentType};base64,${data[0].imageData}`)    
  $("#blog1 > div.card-body > p").html(data[0].abstract);      
  $("#blog1 > div.card-footer > div > span").text(`Created: ${new Date(data[0].created).toLocaleDateString("en-US", options)}`)
  blogAnchor = $("#blog2 > div.card-body > h3 > a");    
  blogLink = `${blogUrl}${data[1].slug}`;
  blogAnchor.text(data[1].title);
  blogAnchor.attr("href", blogLink);
  $("#blog2 > div.card-img > a").attr("href", blogLink)
  $("#blog2 > div.card-img > a > img").attr("src", `data:${data[1].contentType};base64,${data[1].imageData}`)    
  $("#blog2 > div.card-body > p").html(data[1].abstract);      
  $("#blog2 > div.card-footer > div > span").text(`Created: ${new Date(data[1].created).toLocaleDateString("en-US", options)}`)
  blogAnchor = $("#blog3 > div.card-body > h3 > a");    
  blogLink = `${blogUrl}${data[2].slug}`;
  blogAnchor.text(data[2].title);
  blogAnchor.attr("href", blogLink);
  $("#blog3 > div.card-img > a").attr("href", blogLink)
  $("#blog3 > div.card-img > a > img").attr("src", `data:${data[2].contentType};base64,${data[2].imageData}`)    
  $("#blog3 > div.card-body > p").html(data[2].abstract);      
  $("#blog3 > div.card-footer > div > span").text(`Created: ${new Date(data[2].created).toLocaleDateString("en-US", options)}`)
});

