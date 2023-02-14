var duckDNS = {
  domain: "your_sub_domain",
  token: "b1ef80e8-4foi-45g6-9475-79c4d7854p99"
}

var properties = PropertiesService.getScriptProperties();
var last_ip = properties.getProperty("last_ip");

function doPost(e){
  duckDNS.domain = e.parameter.domain || duckDNS.domain
  duckDNS.token = e.parameter.token || duckDNS.token
  const res = e.postData.contents;
  const routerIP = extractIP(res);
  if(!last_ip || last_ip.ip != routerIP){
          last_ip = routerIP;
          updateDuckDNS(routerIP);
          properties.setProperty('last_ip', routerIP);
  }
  return ContentService.createTextOutput(routerIP)
}

function doGet(e){
  last_ip = properties.getProperty("last_ip");
  return ContentService.createTextOutput(last_ip || "-1")
}

function updateDuckDNS(ip){
  var url = "https://www.duckdns.org/update?domains="+duckDNS.domain + "&token=" + duckDNS.token + "&ip=" + ip;
  return UrlFetchApp.fetch(url, {});
}

function extractIP(str){
return str.match(/\b(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\b/g)[0]
}
