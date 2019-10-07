fetch("https://api.giphy.com/v1/gifs/random?api_key=ZTI232TBLR3x3oJf8m90IMd0z11srUFQ&tag=&rating=G")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data.data.bitly_gif_url);
  });

  // bitly_gif_url: "https://gph.is/1IKA6Yl"