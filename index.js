

// "https://www.merinfo.se/search?who=0702990271"

//https://ghg7femhx6.execute-api.us-east-1.amazonaws.com/

var info = [];
/*
dict.push({
    key:   "keyName",
    value: "the value"
});
*/
// XPath:
// '/html/body/div/main/div/div[3]/div[2]/div[3]/div[1]/div/div/div[1]/h2/a'

function getHTML(link) {
  let PROXY = "https://ghg7femhx6.execute-api.us-east-1.amazonaws.com/";
  //let finalLink = proxy + link;
  let finalLink = PROXY + link;
  response = fetch(finalLink).then(response => response.text()).then((html) => {
      var parser = new DOMParser();
      var doc = parser.parseFromString(html, 'text/html');
      console.log(doc);
      let t = doc.getElementsByClassName("link-primary")[0];
      console.log(t);
      //let element = doc.getElementsByClassName("link-primary")[0];
      //let href1 = element.getAttribute("href");
  }).catch(err => console.log(err))
};
getHTML("https://www.merinfo.se/search?who=0702990271");

