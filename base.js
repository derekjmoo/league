
$(document).ready(function () {
  //your code here
  var title = $(document).find("title").text();
  var image = '.hero-image';
  var lastMatch1 = '/iframe/?type=team-last-match&lang_id=2&country=106&template=139&team=';
  var lastMatch = '&timezone=Europe/Dublin&time=24&width=320&height=200&font=Verdana&fs=12&lh=24&bg=&fc=ffffff&logo=1&tlink=0&scfs=22&scfc=ffffff&scb=1&sclg=0&teamls=60&sh=0&hfb=1&hbc=ff0000&hfc=FFFFFF'
  var iframeURL1 = 'https://www.fctables.com/ireland/1-division/iframe/?type=table&lang_id=2&country=106&template=139&team=';
  var iframeURL2 = '&timezone=Europe/Dublin&time=24&po=1&ma=1&wi=1&dr=1&los=1&gf=0&ga=0&gd=0&pts=1&ng=0&form=1&width=500&height=320&font=Verdana&fs=15&lh=24&bg=&fc=ffffff&logo=1&tlink=0&ths=1&thb=1&thba=&thc=ffffff&bc=000000&hob=000000&hobc=000000&lc=333333&sh=0&hfb=1&hbc=ff0000&hfc=FFFFFF';

  $("h1").text(title);
  $(image).css('background-image', 'url(' + title + '.jpg)');

  $(".sections .nav-pills li a").attr("href", function(i, href) {
  return href + title + '.html';
  });

  $("a:contains('" + title + "')").addClass("active");
  if (title == "Shelbourne") {
    document.getElementById('table').setAttribute("src",iframeURL1 + '193893' + iframeURL2);
    document.getElementById('lmi').setAttribute("src",'https://www.fctables.com/teams/' + 'shelbourne-193893' + lastMatch1 + '193893' +lastMatch );
  }
  else if (title == "Bray") {
    document.getElementById('table').setAttribute("src",iframeURL1 + '181680' + iframeURL2);
    document.getElementById('lmi').setAttribute("src",'https://www.fctables.com/teams/' + 'bray-wanderers-181680' + lastMatch1 + '181680' +lastMatch );
  }
  else if (title == "Cobh") {
    document.getElementById('table').setAttribute("src",iframeURL1 + '182914' + iframeURL2);
    document.getElementById('lmi').setAttribute("src",'https://www.fctables.com/teams/' + 'cobh-ramblers-182914' + lastMatch1 + '182914' +lastMatch );
  }
  else if (title == "Cabinteely") {
    document.getElementById('table').setAttribute("src",iframeURL1 + '182000' + iframeURL2);
    document.getElementById('lmi').setAttribute("src",'https://www.fctables.com/teams/' + 'cabinteely-182000' + lastMatch1 + '182000' +lastMatch );
  }
  else if (title == "Drogheda") {
    document.getElementById('table').setAttribute("src",iframeURL1 + '183818' + iframeURL2);
    document.getElementById('lmi').setAttribute("src",'https://www.fctables.com/teams/' + 'drogheda-united-183818' + lastMatch1 + '183818' +lastMatch );
  }
  else if (title == "Limerick") {
    document.getElementById('table').setAttribute("src",iframeURL1 + '189006' + iframeURL2);
    document.getElementById('lmi').setAttribute("src",'https://www.fctables.com/teams/' + 'limerick-181680' + lastMatch1 + '189006' +lastMatch );
  }
  else if (title == "Wexford") {
    document.getElementById('table').setAttribute("src",iframeURL1 + '197348' + iframeURL2);
    document.getElementById('lmi').setAttribute("src",'https://www.fctables.com/teams/' + 'wexford-youths-197348' + lastMatch1 + '197348' +lastMatch );
  }
  else if (title == "Galway") {
    document.getElementById('table').setAttribute("src",iframeURL1 + '185970' + iframeURL2);
    document.getElementById('lmi').setAttribute("src",'https://www.fctables.com/teams/' + 'Galway-united-185970' + lastMatch1 + '185970' +lastMatch );
  }


});
