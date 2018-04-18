class GoogleSearchService {
    static getImageUrl(queryValue){

      //fetch('https://www.googleapis.com/customsearch/v1?q="' + queryValue + '"&cx=010405780277447613704:1hncv4q_5vg&key=AIzaSyCtwoZBifiQjNXrsdVI4W-UCFteFusdf1g&searchtype=image&alt=json')
      
      fetch('https://www.googleapis.com/customsearch/v1element?key=AIzaSyCVAXiUzRYsML1Pv6RwSG1gunmMikTzQqY&rsz=filtered_cse&num=1&hl=en&source=gcsc&gss=.fr&sig=e1802cf5e026ddfc00efb195494e1737&cx=010405780277447613704:1hncv4q_5vg&q="' + queryValue + '"&cse_tok=ABPF6HgR_zF0_i_5ZK8FQugZvT2Aw04fNQ:1523969027879&sort=&googlehost=www.google.com&oq=chat%20sacr%C3%A9&gs_l=partner-generic.12...229176.233433.5.239390.13.1.12.0.0.0.33.33.1.1.0.gsnos%2Cn%3D13...0.5209j4084769j15j2..1ac.1.25.partner-generic..58.0.0.6ydBMwO0bVQ&alt=json')
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        var url = data.results[0].richSnippet.cseImage.src;
        document.getElementById("dynamic-image").src = url;
        document.getElementById("new-url-image").value = url;
      });
    }
  }