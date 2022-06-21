

var company_name = ["Taskmo","Apple", "Microsoft", "Infosys","Amazon","Flipkart"];
var company  = company_name [Math.floor(Math.random()*company_name.length)];


var web = [
  "www.Taskmo.com",
  "www.Apple.com",
  "www.microsoft.com",
  "www.infosys.com",
  "www.amazon.com",
  "www.flipkaert.com"
];

var webSite = web[Math.floor(Math.random()*web.length)];

var id = ["123ed45", "321we56", "098c566", "5567ytg87", "2345rfgb", "169er987"];
var taxId = id[Math.floor(Math.random()*id.length)];


export {company, webSite, taxId};