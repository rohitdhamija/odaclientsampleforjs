webpackJsonp([11,68,69,70,71,72],{879:function(e,n,t){"use strict";function a(e,n,t){t=t||{onlyNumeric:!1};var a,l=r[e];return a="string"==typeof l?l:0===n||n>1?t.onlyNumeric?l.plural.replace("{{count}}",n):l.plural.replace("{{count}}",n<13?u[n]:n):l.singular,t.addSuffix?t.comparison>0?"om "+a:a+" sedan":a}Object.defineProperty(n,"__esModule",{value:!0}),n.default=a;var r={lessThanXSeconds:{singular:"mindre än en sekund",plural:"mindre än {{count}} sekunder"},xSeconds:{singular:"en sekund",plural:"{{count}} sekunder"},halfAMinute:"en halv minut",lessThanXMinutes:{singular:"mindre än en minut",plural:"mindre än {{count}} minuter"},xMinutes:{singular:"en minut",plural:"{{count}} minuter"},aboutXHours:{singular:"ungefär en timme",plural:"ungefär {{count}} timmar"},xHours:{singular:"en timme",plural:"{{count}} timmar"},xDays:{singular:"en dag",plural:"{{count}} dagar"},aboutXMonths:{singular:"ungefär en månad",plural:"ungefär {{count}} månader"},xMonths:{singular:"en månad",plural:"{{count}} månader"},aboutXYears:{singular:"ungefär ett år",plural:"ungefär {{count}} år"},xYears:{singular:"ett år",plural:"{{count}} år"},overXYears:{singular:"över ett år",plural:"över {{count}} år"},almostXYears:{singular:"nästan ett år",plural:"nästan {{count}} år"}},u=["noll","en","två","tre","fyra","fem","sex","sju","åtta","nio","tio","elva","tolv"];e.exports=n.default},880:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(200),r=function(e){return e&&e.__esModule?e:{default:e}}(a),u=(0,r.default)({LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [kl.] HH:mm",LLLL:"dddd D MMMM YYYY [kl.] HH:mm"});n.default=u,e.exports=n.default},881:function(e,n,t){"use strict";function a(e,n,t,a){return r[e]}Object.defineProperty(n,"__esModule",{value:!0}),n.default=a;var r={lastWeek:"[förra] dddd[en kl.] LT",yesterday:"[igår kl.] LT",today:"[idag kl.] LT",tomorrow:"[imorgon kl.] LT",nextWeek:"dddd [kl.] LT",other:"L"};e.exports=n.default},882:function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e){var n=Number(e),t=n%100;if(t>20||t<10)switch(t%10){case 1:case 2:return n+":a"}return n+":e"}Object.defineProperty(n,"__esModule",{value:!0});var u=t(202),l=a(u),o=t(201),i=a(o),s={narrow:["sö","må","ti","on","to","fr","lö"],short:["sön","mån","tis","ons","tor","fre","lör"],long:["söndag","måndag","tisdag","onsdag","torsdag","fredag","lördag"]},d={short:["jan","feb","mar","apr","maj","jun","jul","aug","sep","okt","nov","dec"],long:["januari","februari","mars","april","maj","juni","juli","augusti","september","oktober","november","december"]},f={long:["f.m.","e.m."]},m={ordinalNumber:r,weekday:(0,l.default)(s,"long"),weekdays:(0,i.default)(s,"long"),month:(0,l.default)(d,"long"),months:(0,i.default)(d,"long"),timeOfDay:(0,l.default)(f,"long",function(e){return e/12>=1?1:0}),timesOfDay:(0,i.default)(f,"long")};n.default=m,e.exports=n.default},883:function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var r=t(203),u=a(r),l=t(205),o=a(l),i=t(204),s=a(i),d=t(206),f=a(d),m=/^(\d+)(a|e)?/i,c={narrow:/^(sö|må|ti|on|to|fr|lö)/i,short:/^(sön|mån|tis|ons|tor|fre|lör)/i,long:/^(söndag|måndag|tisdag|onsdag|torsdag|fredag|lördag)/i},g={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},p={short:/^(jan|feb|mar|apr|maj|jun|jul|aug|sep|okt|nov|dec)/i,long:/^(januari|februari|mars|april|maj|juni|july|august|september|oktober|november|december)/i},y={any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^maj/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},M={short:/^(f.m.|e.m.)/i},j={any:[/^f/i,/^e/i]},b={ordinalNumbers:(0,s.default)(m),ordinalNumber:f.default,weekdays:(0,u.default)(c,"long"),weekday:(0,o.default)(g,"any"),months:(0,u.default)(p,"long"),month:(0,o.default)(y,"any"),timesOfDay:(0,u.default)(M,"long"),timeOfDay:(0,o.default)(j,"any")};n.default=b,e.exports=n.default},944:function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var r=t(879),u=a(r),l=t(880),o=a(l),i=t(881),s=a(i),d=t(882),f=a(d),m=t(883),c=a(m),g={formatDistance:u.default,formatLong:o.default,formatRelative:s.default,localize:f.default,match:c.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};n.default=g,e.exports=n.default}});
//# sourceMappingURL=7139247ba9fbd10c1aa1.js.map
