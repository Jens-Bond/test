
//"https://www.merinfo.se/search?who=0702990271"


/*
let request = fetch('https://proxy.cors.sh/https://www.merinfo.se/search?who=0702990271', {
  method: 'GET',
  headers: {
    "Content-Type": "text/html",
    'Accept': 'text/html',
  }
})

console.log(request.json)
*/
//'https://proxy.cors.sh/https://www.merinfo.se/search?who=0702990271'









/*
const PROXY = 'http://alloworigin.com/get?url=';




function getHTML(link) {
  let proxy = PROXY;
  let finalLink = proxy + link;
  fetch(finalLink).then(function (response) {
    // The API call was successful!
    return response.text();
  }).then(function (html) {
    // This is the HTML from our response as a text string
    //console.log(html);
    getFirstLink(html);
    //getTheHTML(html);
    //return html;
  }).catch(function (err) {
    // There was an error
    console.warn('Something went wrong.', err);
  });
};

function getHTML2(link) {
  let proxy = PROXY;
  let finalLink = proxy + link;
  fetch(finalLink).then(function (response) {
    // The API call was successful!
    return response.text();
  }).then(function (html) {
    // This is the HTML from our response as a text string
    //console.log(html);
    getCode(html);
    //getTheHTML(html);
    //return html;
  }).catch(function (err) {
    // There was an error
    console.warn('Something went wrong.', err);
  });
};

function getAPI(link) {
  fetch(link, {method: "POST", headers: {'Content-type': 'application/json', 'Accept': 'text/plain'}}).then(function (response) {
    // The API call was successful!
    return response.json();
  }).then(function (data) {
    // This is the JSON from our response
    handleJSON(data);
  }).catch(function (err) {
    // There was an error
    console.warn('Something went wrong.', err);
  });
};

function getCarsHTML(link) {
  let proxy = PROXY;
  let finalLink = proxy + link;
  fetch(finalLink).then(function (response) {
    // The API call was successful!
    return response.text();
  }).then(function (html) {
    // This is the HTML from our response as a text string
    // console.log(html);
    // Convert the HTML string into a document object
    var parser = new DOMParser();
    var doc = parser.parseFromString(html, 'text/html');
    var clickableTr = doc.getElementsByClassName("clickable-tr");
    console.log(clickableTr);
    console.log(clickableTr[0]);
    //.getElementByTagName("innerHTML")
  }).catch(function (err) {
    // There was an error
    console.warn('Something went wrong.', err);
  });
};








function getFirstLink(html) {
  const regex = /href="(https:\/\/www.merinfo.se\/person\/.+\/.+\/.+)" /;
  let res = html.match(regex)[1];
  console.log('getFirstLink:', res);
  getHTML2(res);
};

function getCode(html) {
  //console.log(html);
  const regex = /uuid="(.+)"/;
  let res = html.match(regex)[1];
  console.log(res);
  nowAPI(res);
};

function nowAPI(code) {
  let part1 = "https://www.merinfo.se/api/v1/people/";
  let part3 = "/vehicles";
  apiLink = part1 + code + part3;
  console.log(apiLink)
  getAPI(apiLink)
};

function handleJSON(obj) {
  console.log(obj.data.url);
  getCarsHTML(obj.data.url)
};

getHTML('https://www.merinfo.se/search?who=0702990271');



//getHTML('https://www.merinfo.se/search?who=0702990271');


//getHTML('https://www.merinfo.se/person/Karlstad/Eva-Anna-Maria-Lidstr%C3%B6m-1971/bqh7a-2vy13');

//console.log(getFirstLink(getHTML()));
//console.log(getHTML());



// "https://www.merinfo.se/search?who=0702990271"


*/


//https://ghg7femhx6.execute-api.us-east-1.amazonaws.com/

let nmr = "0702990271";
let link = "https://www.merinfo.se/search?who=" + nmr;

let html = fetch("https://ghg7femhx6.execute-api.us-east-1.amazonaws.com/");
console.log(html);