function(b){this._hasSameServerInstance(b,a)&&(l=b+this._gwTokenUrl);
return!!l},this);
l||(c=a.toLowerCase().indexOf("/sharing"),-1!==c&&(l=a.substring(0,c)+this._gwTokenUrl));
l||(l=this._getOrigin(a)+this._gwTokenUrl);
l&&(b=(new k(a)).port,/^http:\/\//i.test(a)&&"7080"===b&&(l=l.replace(/:7080/i,":7443")),l=l.replace(/http:/i,"https:"));
return l}if(-1!==a.toLowerCase().indexOf("premium.arcgisonline.com"))return"https://premium.arcgisonline.com/server/tokens"},

_getPortalSelf:function(a,b){"https:"===window.location.protocol?a=a.replace(/^http:/i,"https:").replace(/:7080/i,":7443")
 
