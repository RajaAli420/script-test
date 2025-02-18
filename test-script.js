// !function(){"use strict";let a={endpoint:"http://localhost:8082/api/v1/analytics/create",apiKey:null,batchSize:20,batchInterval:3e4,debug:!1},i=[],e=null,n=!1,r="1.5.0",t=null;function o(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){let i=16*Math.random()|0;return("x"===a?i:3&i|8).toString(16)})}function s(){return t||(t=sessionStorage.getItem("analytics_visit_id"))||(t=o(),sessionStorage.setItem("analytics_visit_id",t)),t}function c(){let a=localStorage.getItem("analytics_user_id");return a||(a=o(),localStorage.setItem("analytics_user_id",a)),a}function u(){let a=navigator.userAgent,i="Unknown";i=/Mobi|Android/i.test(a)&&!/Tablet|iPad/i.test(a)?"Mobile":/Tablet|iPad/i.test(a)?"Tablet":"Desktop";let e="Unknown";/Windows/i.test(a)?e="Windows":/Mac OS X/i.test(a)?e="MacOS":/Linux/i.test(a)?e="Linux":/Android/i.test(a)?e="Android":/iPhone|iPad|iPod/i.test(a)&&(e="iOS");let n="Unknown";return/Edge/i.test(a)?n="Edge":/Chrome/i.test(a)&&!/Chromium/i.test(a)?n="Chrome":/Firefox/i.test(a)?n="Firefox":/Safari/i.test(a)&&!/Chrome/i.test(a)?n="Safari":/MSIE|Trident/i.test(a)&&(n="Internet Explorer"),{browser:n,os:e,device:i}}function A(){let a=new Intl.DateTimeFormat().resolvedOptions().timeZone,i={"Europe/Andorra":"Andorra","Asia/Dubai":"United Arab Emirates","Asia/Kabul":"Afghanistan","Europe/Tirane":"Albania","Asia/Yerevan":"Armenia","Antarctica/Casey":"Antarctica","Antarctica/Davis":"Antarctica","Antarctica/Mawson":"Antarctica","Antarctica/Palmer":"Antarctica","Antarctica/Rothera":"Antarctica","Antarctica/Troll":"Antarctica","Antarctica/Vostok":"Antarctica","America/Argentina/Buenos_Aires":"Argentina","America/Argentina/Cordoba":"Argentina","America/Argentina/Salta":"Argentina","America/Argentina/Jujuy":"Argentina","America/Argentina/Tucuman":"Argentina","America/Argentina/Catamarca":"Argentina","America/Argentina/La_Rioja":"Argentina","America/Argentina/San_Juan":"Argentina","America/Argentina/Mendoza":"Argentina","America/Argentina/San_Luis":"Argentina","America/Argentina/Rio_Gallegos":"Argentina","America/Argentina/Ushuaia":"Argentina","Pacific/Pago_Pago":"Samoa (American)","Europe/Vienna":"Austria","Australia/Lord_Howe":"Australia","Antarctica/Macquarie":"Australia","Australia/Hobart":"Australia","Australia/Melbourne":"Australia","Australia/Sydney":"Australia","Australia/Broken_Hill":"Australia","Australia/Brisbane":"Australia","Australia/Lindeman":"Australia","Australia/Adelaide":"Australia","Australia/Darwin":"Australia","Australia/Perth":"Australia","Australia/Eucla":"Australia","Asia/Baku":"Azerbaijan","America/Barbados":"Barbados","Asia/Dhaka":"Bangladesh","Europe/Brussels":"Belgium","Europe/Sofia":"Bulgaria","Atlantic/Bermuda":"Bermuda","Asia/Brunei":"Brunei","America/La_Paz":"Bolivia","America/Noronha":"Brazil","America/Belem":"Brazil","America/Fortaleza":"Brazil","America/Recife":"Brazil","America/Araguaina":"Brazil","America/Maceio":"Brazil","America/Bahia":"Brazil","America/Sao_Paulo":"Brazil","America/Campo_Grande":"Brazil","America/Cuiaba":"Brazil","America/Santarem":"Brazil","America/Porto_Velho":"Brazil","America/Boa_Vista":"Brazil","America/Manaus":"Brazil","America/Eirunepe":"Brazil","America/Rio_Branco":"Brazil","Asia/Thimphu":"Bhutan","Europe/Minsk":"Belarus","America/Belize":"Belize","America/St_Johns":"Canada","America/Halifax":"Canada","America/Glace_Bay":"Canada","America/Moncton":"Canada","America/Goose_Bay":"Canada","America/Toronto":"Canada","America/Nipigon":"Canada","America/Thunder_Bay":"Canada","America/Iqaluit":"Canada","America/Pangnirtung":"Canada","America/Winnipeg":"Canada","America/Rainy_River":"Canada","America/Resolute":"Canada","America/Rankin_Inlet":"Canada","America/Regina":"Canada","America/Swift_Current":"Canada","America/Edmonton":"Canada","America/Cambridge_Bay":"Canada","America/Yellowknife":"Canada","America/Inuvik":"Canada","America/Dawson_Creek":"Canada","America/Fort_Nelson":"Canada","America/Whitehorse":"Canada","America/Dawson":"Canada","America/Vancouver":"Canada","Indian/Cocos":"Cocos (Keeling) Islands","Europe/Zurich":"Switzerland","Africa/Abidjan":"C\xf4te d'Ivoire","Pacific/Rarotonga":"Cook Islands","America/Santiago":"Chile","America/Punta_Arenas":"Chile","Pacific/Easter":"Chile","Asia/Shanghai":"China","Asia/Urumqi":"China","America/Bogota":"Colombia","America/Costa_Rica":"Costa Rica","America/Havana":"Cuba","Atlantic/Cape_Verde":"Cape Verde","Indian/Christmas":"Christmas Island","Asia/Nicosia":"Cyprus","Asia/Famagusta":"Cyprus","Europe/Prague":"Czech Republic","Europe/Berlin":"Germany","Europe/Copenhagen":"Denmark","America/Santo_Domingo":"Dominican Republic","Africa/Algiers":"Algeria","America/Guayaquil":"Ecuador","Pacific/Galapagos":"Ecuador","Europe/Tallinn":"Estonia","Africa/Cairo":"Egypt","Africa/El_Aaiun":"Western Sahara","Europe/Madrid":"Spain","Africa/Ceuta":"Spain","Atlantic/Canary":"Spain","Europe/Helsinki":"Finland","Pacific/Fiji":"Fiji","Atlantic/Stanley":"Falkland Islands","Pacific/Chuuk":"Micronesia","Pacific/Pohnpei":"Micronesia","Pacific/Kosrae":"Micronesia","Atlantic/Faroe":"Faroe Islands","Europe/Paris":"France","Europe/London":"Britain (UK)","Asia/Tbilisi":"Georgia","America/Cayenne":"French Guiana","Europe/Gibraltar":"Gibraltar","America/Nuuk":"Greenland","America/Danmarkshavn":"Greenland","America/Scoresbysund":"Greenland","America/Thule":"Greenland","Europe/Athens":"Greece","Atlantic/South_Georgia":"South Georgia & the South Sandwich Islands","America/Guatemala":"Guatemala","Pacific/Guam":"Guam","Africa/Bissau":"Guinea-Bissau","America/Guyana":"Guyana","Asia/Hong_Kong":"Hong Kong","America/Tegucigalpa":"Honduras","America/Port-au-Prince":"Haiti","Europe/Budapest":"Hungary","Asia/Jakarta":"Indonesia","Asia/Pontianak":"Indonesia","Asia/Makassar":"Indonesia","Asia/Jayapura":"Indonesia","Europe/Dublin":"Ireland","Asia/Jerusalem":"Israel","Asia/Kolkata":"India","Asia/Calcutta":"India","Indian/Chagos":"British Indian Ocean Territory","Asia/Baghdad":"Iraq","Asia/Tehran":"Iran","Atlantic/Reykjavik":"Iceland","Europe/Rome":"Italy","America/Jamaica":"Jamaica","Asia/Amman":"Jordan","Asia/Tokyo":"Japan","Africa/Nairobi":"Kenya","Asia/Bishkek":"Kyrgyzstan","Pacific/Tarawa":"Kiribati","Pacific/Kanton":"Kiribati","Pacific/Kiritimati":"Kiribati","Asia/Pyongyang":"Korea (North)","Asia/Seoul":"Korea (South)","Asia/Almaty":"Kazakhstan","Asia/Qyzylorda":"Kazakhstan","Asia/Qostanay":"Kazakhstan","Asia/Aqtobe":"Kazakhstan","Asia/Aqtau":"Kazakhstan","Asia/Atyrau":"Kazakhstan","Asia/Oral":"Kazakhstan","Asia/Beirut":"Lebanon","Asia/Colombo":"Sri Lanka","Africa/Monrovia":"Liberia","Europe/Vilnius":"Lithuania","Europe/Luxembourg":"Luxembourg","Europe/Riga":"Latvia","Africa/Tripoli":"Libya","Africa/Casablanca":"Morocco","Europe/Monaco":"Monaco","Europe/Chisinau":"Moldova","Pacific/Majuro":"Marshall Islands","Pacific/Kwajalein":"Marshall Islands","Asia/Yangon":"Myanmar (Burma)","Asia/Ulaanbaatar":"Mongolia","Asia/Hovd":"Mongolia","Asia/Choibalsan":"Mongolia","Asia/Macau":"Macau","America/Martinique":"Martinique","Europe/Malta":"Malta","Indian/Mauritius":"Mauritius","Indian/Maldives":"Maldives","America/Mexico_City":"Mexico","America/Cancun":"Mexico","America/Merida":"Mexico","America/Monterrey":"Mexico","America/Matamoros":"Mexico","America/Mazatlan":"Mexico","America/Chihuahua":"Mexico","America/Ojinaga":"Mexico","America/Hermosillo":"Mexico","America/Tijuana":"Mexico","America/Bahia_Banderas":"Mexico","Asia/Kuala_Lumpur":"Malaysia","Asia/Kuching":"Malaysia","Africa/Maputo":"Mozambique","Africa/Windhoek":"Namibia","Pacific/Noumea":"New Caledonia","Pacific/Norfolk":"Norfolk Island","Africa/Lagos":"Nigeria","America/Managua":"Nicaragua","Europe/Amsterdam":"Netherlands","Europe/Oslo":"Norway","Asia/Kathmandu":"Nepal","Pacific/Nauru":"Nauru","Pacific/Niue":"Niue","Pacific/Auckland":"New Zealand","Pacific/Chatham":"New Zealand","America/Panama":"Panama","America/Lima":"Peru","Pacific/Tahiti":"French Polynesia","Pacific/Marquesas":"French Polynesia","Pacific/Gambier":"French Polynesia","Pacific/Port_Moresby":"Papua New Guinea","Pacific/Bougainville":"Papua New Guinea","Asia/Manila":"Philippines","Asia/Karachi":"Pakistan","Europe/Warsaw":"Poland","America/Miquelon":"St Pierre & Miquelon","Pacific/Pitcairn":"Pitcairn","America/Puerto_Rico":"Puerto Rico","Asia/Gaza":"Palestine","Asia/Hebron":"Palestine","Europe/Lisbon":"Portugal","Atlantic/Madeira":"Portugal","Atlantic/Azores":"Portugal","Pacific/Palau":"Palau","America/Asuncion":"Paraguay","Asia/Qatar":"Qatar","Indian/Reunion":"R\xe9union","Europe/Bucharest":"Romania","Europe/Belgrade":"Serbia","Europe/Kaliningrad":"Russia","Europe/Moscow":"Russia","Europe/Simferopol":"Russia","Europe/Kirov":"Russia","Europe/Volgograd":"Russia","Europe/Astrakhan":"Russia","Europe/Saratov":"Russia","Europe/Ulyanovsk":"Russia","Europe/Samara":"Russia","Asia/Yekaterinburg":"Russia","Asia/Omsk":"Russia","Asia/Novosibirsk":"Russia","Asia/Barnaul":"Russia","Asia/Tomsk":"Russia","Asia/Novokuznetsk":"Russia","Asia/Krasnoyarsk":"Russia","Asia/Irkutsk":"Russia","Asia/Chita":"Russia","Asia/Yakutsk":"Russia","Asia/Khandyga":"Russia","Asia/Vladivostok":"Russia","Asia/Ust-Nera":"Russia","Asia/Magadan":"Russia","Asia/Sakhalin":"Russia","Asia/Srednekolymsk":"Russia","Asia/Kamchatka":"Russia","Asia/Anadyr":"Russia","Asia/Riyadh":"Saudi Arabia","Pacific/Guadalcanal":"Solomon Islands","Indian/Mahe":"Seychelles","Africa/Khartoum":"Sudan","Europe/Stockholm":"Sweden","Asia/Singapore":"Singapore","America/Paramaribo":"Suriname","Africa/Juba":"South Sudan","Africa/Sao_Tome":"Sao Tome & Principe","America/El_Salvador":"El Salvador","Asia/Damascus":"Syria","America/Grand_Turk":"Turks & Caicos Is","Africa/Ndjamena":"Chad","Indian/Kerguelen":"French Southern & Antarctic Lands","Asia/Bangkok":"Thailand","Asia/Dushanbe":"Tajikistan","Pacific/Fakaofo":"Tokelau","Asia/Dili":"East Timor","Asia/Ashgabat":"Turkmenistan","Africa/Tunis":"Tunisia","Pacific/Tongatapu":"Tonga","Europe/Istanbul":"Turkey","Pacific/Funafuti":"Tuvalu","Asia/Taipei":"Taiwan","Europe/Kiev":"Ukraine","Europe/Uzhgorod":"Ukraine","Europe/Zaporozhye":"Ukraine","Pacific/Wake":"US minor outlying islands","America/New_York":"United States","America/Detroit":"United States","America/Kentucky/Louisville":"United States","America/Kentucky/Monticello":"United States","America/Indiana/Indianapolis":"United States","America/Indiana/Vincennes":"United States","America/Indiana/Winamac":"United States","America/Indiana/Marengo":"United States","America/Indiana/Petersburg":"United States","America/Indiana/Vevay":"United States","America/Chicago":"United States","America/Indiana/Tell_City":"United States","America/Indiana/Knox":"United States","America/Menominee":"United States","America/North_Dakota/Center":"United States","America/North_Dakota/New_Salem":"United States","America/North_Dakota/Beulah":"United States","America/Denver":"United States","America/Boise":"United States","America/Phoenix":"United States","America/Los_Angeles":"United States","America/Anchorage":"United States","America/Juneau":"United States","America/Sitka":"United States","America/Metlakatla":"United States","America/Yakutat":"United States","America/Nome":"United States","America/Adak":"United States","Pacific/Honolulu":"United States","America/Montevideo":"Uruguay","Asia/Samarkand":"Uzbekistan","Asia/Tashkent":"Uzbekistan","America/Caracas":"Venezuela","Asia/Ho_Chi_Minh":"Vietnam","Pacific/Efate":"Vanuatu","Pacific/Wallis":"Wallis & Futuna","Pacific/Apia":"Samoa (western)","Africa/Johannesburg":"South Africa","America/Antigua":"Antigua & Barbuda","America/Anguilla":"Anguilla","Africa/Luanda":"Angola","Antarctica/McMurdo":"Antarctica","Antarctica/DumontDUrville":"Antarctica","Antarctica/Syowa":"Antarctica","America/Aruba":"Aruba","Europe/Mariehamn":"\xc5land Islands","Europe/Sarajevo":"Bosnia & Herzegovina","Africa/Ouagadougou":"Burkina Faso","Asia/Bahrain":"Bahrain","Africa/Bujumbura":"Burundi","Africa/Porto-Novo":"Benin","America/St_Barthelemy":"St Barthelemy","America/Kralendijk":"Caribbean NL","America/Nassau":"Bahamas","Africa/Gaborone":"Botswana","America/Blanc-Sablon":"Canada","America/Atikokan":"Canada","America/Creston":"Canada","Africa/Kinshasa":"Congo (Dem. Rep.)","Africa/Lubumbashi":"Congo (Dem. Rep.)","Africa/Bangui":"Central African Rep.","Africa/Brazzaville":"Congo (Rep.)","Africa/Douala":"Cameroon","America/Curacao":"Cura\xe7ao","Europe/Busingen":"Germany","Africa/Djibouti":"Djibouti","America/Dominica":"Dominica","Africa/Asmara":"Eritrea","Africa/Addis_Ababa":"Ethiopia","Africa/Libreville":"Gabon","America/Grenada":"Grenada","Europe/Guernsey":"Guernsey","Africa/Accra":"Ghana","Africa/Banjul":"Gambia","Africa/Conakry":"Guinea","America/Guadeloupe":"Guadeloupe","Africa/Malabo":"Equatorial Guinea","Europe/Zagreb":"Croatia","Europe/Isle_of_Man":"Isle of Man","Europe/Jersey":"Jersey","Asia/Phnom_Penh":"Cambodia","Indian/Comoro":"Comoros","America/St_Kitts":"St Kitts & Nevis","Asia/Kuwait":"Kuwait","America/Cayman":"Cayman Islands","Asia/Vientiane":"Laos","America/St_Lucia":"St Lucia","Europe/Vaduz":"Liechtenstein","Africa/Maseru":"Lesotho","Europe/Podgorica":"Montenegro","America/Marigot":"St Martin (French)","Indian/Antananarivo":"Madagascar","Europe/Skopje":"North Macedonia","Africa/Bamako":"Mali","Pacific/Saipan":"Northern Mariana Islands","Africa/Nouakchott":"Mauritania","America/Montserrat":"Montserrat","Africa/Blantyre":"Malawi","Africa/Niamey":"Niger","Asia/Muscat":"Oman","Africa/Kigali":"Rwanda","Atlantic/St_Helena":"St Helena","Europe/Ljubljana":"Slovenia","Arctic/Longyearbyen":"Svalbard & Jan Mayen","Europe/Bratislava":"Slovakia","Africa/Freetown":"Sierra Leone","Europe/San_Marino":"San Marino","Africa/Dakar":"Senegal","Africa/Mogadishu":"Somalia","America/Lower_Princes":"St Maarten (Dutch)","Africa/Mbabane":"Eswatini (Swaziland)","Africa/Lome":"Togo","America/Port_of_Spain":"Trinidad & Tobago","Africa/Dar_es_Salaam":"Tanzania","Africa/Kampala":"Uganda","Pacific/Midway":"US minor outlying islands","Europe/Vatican":"Vatican City","America/St_Vincent":"St Vincent","America/Tortola":"Virgin Islands (UK)","America/St_Thomas":"Virgin Islands (US)","Asia/Aden":"Yemen","Indian/Mayotte":"Mayotte","Africa/Lusaka":"Zambia","Africa/Harare":"Zimbabwe"}[a];return console.log(i),i||"Unknown"}function l(){let{browser:a,device:i,os:e}=u(),n=document.referrer||"direct",r=window.location.pathname,t={type:"pageview",url:window.location.href,path:r,referrer:n,title:document.title,user_id:c(),visit_id:s(),timestamp:Date.now(),browser:a,device:i,os:e,country:A()};d(t),g("Page view tracked:",r)}function m(a,i,e,n){let{browser:r,device:t,os:o}=u(),l=new URL(a),m={type:"request",url:a,host:l.hostname,path:l.pathname,method:i,status_code:e,response_size:n,user_id:c(),visit_id:s(),timestamp:Date.now(),browser:r,device:t,os:o,country:A()};d(m),g("Request tracked:",i,a,e)}function d(n){i.push(n),i.length>=a.batchSize?h():e||function n(){e||(e=setTimeout(()=>{i.length>0&&h(),e=null,i.length>0&&n()},a.batchInterval))}()}function h(){if(0===i.length)return;let e=Math.min(i.length,a.batchSize),n=i.slice(0,e);i=i.slice(e),g("Sending batch of",n.length,"events");let t={api_key:a.apiKey,sdk_version:r,timestamp:Date.now(),events:n};fetch(a.endpoint,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t),keepalive:!0}).catch(a=>{console.error("[Analytics] Failed to send data:",a),g("Events returned to queue. New size:",(i=[...n,...i]).length)})}function g(...i){a.debug&&console.log("[Analytics]",...i)}let p={init:function e(t={}){if(!n){if(!(a={...a,...t}).apiKey){console.error("[Analytics] API key is required");return}!function i(){let e=window.fetch;window.fetch=async function(i,n={}){if(i===a.endpoint)return e(i,n);let r=n.method||"GET";try{let t=await e(i,n),o=parseInt(t.headers.get("Content-Length"),10)||0;return m(i.toString(),r,t.status,o),t}catch(s){throw m(i.toString(),r,0,0),s}};let n=window.XMLHttpRequest;window.XMLHttpRequest=function(){let i=new n,e=i.open;return i.open=function(a,i){this._method=a,this._url=i,e.apply(this,arguments)},i.addEventListener("load",function(){if(this._url===a.endpoint)return;let i=parseInt(this.getResponseHeader("Content-Length"),10)||0;m(this._url,this._method,this.status,i)}),i.addEventListener("error",function(){this._url!==a.endpoint&&m(this._url,this._method,0,0)}),i}}(),function a(){l();let i=window.history.pushState,e=window.history.replaceState;window.history.pushState=function(){i.apply(this,arguments),l()},window.history.replaceState=function(){e.apply(this,arguments),l()},window.addEventListener("popstate",l)}(),window.addEventListener("beforeunload",()=>{if(i.length>0){let e=JSON.stringify({api_key:a.apiKey,sdk_version:r,timestamp:Date.now(),events:i});navigator.sendBeacon(a.endpoint,e),i=[]}}),window.addEventListener("beforeunload",h),n=!0,g("SDK initialized with config:",a)}},trackPageView:l};window.Analytics=p,window.ANALYTICS_CONFIG?p.init(window.ANALYTICS_CONFIG):window.ANALYTICS_API_KEY&&p.init({apiKey:window.ANALYTICS_API_KEY})}();
(function() {
  'use strict';

  const DEFAULT_CONFIG = {
      endpoint: 'https://api.example.com/collect',
      apiKey: null,
      batchSize: 20,
      batchInterval: 30000, 
      debug: false
  };

  let config = { ...DEFAULT_CONFIG };
  let eventQueue = [];
  let batchTimerId = null;
  let initialized = false;
  const SDK_VERSION = '1.5.0';
  let visitId = null;

  function generateUUID() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          const r = Math.random() * 16 | 0;
          const v = c === 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
      });
  }

  function getVisitId() {
      if (visitId) return visitId;

      visitId = sessionStorage.getItem('analytics_visit_id');
      if (!visitId) {
          visitId = generateUUID();
          sessionStorage.setItem('analytics_visit_id', visitId);
      }
      return visitId;
  }

  function getUserId() {
      let userId = localStorage.getItem('analytics_user_id');
      if (!userId) {
          userId = generateUUID();
          localStorage.setItem('analytics_user_id', userId);
      }
      return userId;
  }

  function getBrowserInfo() {
      const ua = navigator.userAgent;

      let device = 'Unknown';
      if (/Mobi|Android/i.test(ua) && !/Tablet|iPad/i.test(ua)) {
          device = 'Mobile';
      } else if (/Tablet|iPad/i.test(ua)) {
          device = 'Tablet';
      } else {
          device = 'Desktop';
      }

      let os = 'Unknown';
      if (/Windows/i.test(ua)) {
          os = 'Windows';
      } else if (/Mac OS X/i.test(ua)) {
          os = 'MacOS';
      } else if (/Linux/i.test(ua)) {
          os = 'Linux';
      } else if (/Android/i.test(ua)) {
          os = 'Android';
      } else if (/iPhone|iPad|iPod/i.test(ua)) {
          os = 'iOS';
      }

      let browser = 'Unknown';
      if (/Edge/i.test(ua)) {
          browser = 'Edge';
      } else if (/Chrome/i.test(ua) && !/Chromium/i.test(ua)) {
          browser = 'Chrome';
      } else if (/Firefox/i.test(ua)) {
          browser = 'Firefox';
      } else if (/Safari/i.test(ua) && !/Chrome/i.test(ua)) {
          browser = 'Safari';
      } else if (/MSIE|Trident/i.test(ua)) {
          browser = 'Internet Explorer';
      }

      return { browser, os, device };
  }

  function getCountry() {
    const timezonemap={
      "Europe/Andorra": "Andorra",
      "Asia/Dubai": "United Arab Emirates",
      "Asia/Kabul": "Afghanistan",
      "Europe/Tirane": "Albania",
      "Asia/Yerevan": "Armenia",
      "Antarctica/Casey": "Antarctica",
      "Antarctica/Davis": "Antarctica",
      "Antarctica/Mawson": "Antarctica",
      "Antarctica/Palmer": "Antarctica",
      "Antarctica/Rothera": "Antarctica",
      "Antarctica/Troll": "Antarctica",
      "Antarctica/Vostok": "Antarctica",
      "America/Argentina/Buenos_Aires": "Argentina",
      "America/Argentina/Cordoba": "Argentina",
      "America/Argentina/Salta": "Argentina",
      "America/Argentina/Jujuy": "Argentina",
      "America/Argentina/Tucuman": "Argentina",
      "America/Argentina/Catamarca": "Argentina",
      "America/Argentina/La_Rioja": "Argentina",
      "America/Argentina/San_Juan": "Argentina",
      "America/Argentina/Mendoza": "Argentina",
      "America/Argentina/San_Luis": "Argentina",
      "America/Argentina/Rio_Gallegos": "Argentina",
      "America/Argentina/Ushuaia": "Argentina",
      "Pacific/Pago_Pago": "Samoa (American)",
      "Europe/Vienna": "Austria",
      "Australia/Lord_Howe": "Australia",
      "Antarctica/Macquarie": "Australia",
      "Australia/Hobart": "Australia",
      "Australia/Melbourne": "Australia",
      "Australia/Sydney": "Australia",
      "Australia/Broken_Hill": "Australia",
      "Australia/Brisbane": "Australia",
      "Australia/Lindeman": "Australia",
      "Australia/Adelaide": "Australia",
      "Australia/Darwin": "Australia",
      "Australia/Perth": "Australia",
      "Australia/Eucla": "Australia",
      "Asia/Baku": "Azerbaijan",
      "America/Barbados": "Barbados",
      "Asia/Dhaka": "Bangladesh",
      "Europe/Brussels": "Belgium",
      "Europe/Sofia": "Bulgaria",
      "Atlantic/Bermuda": "Bermuda",
      "Asia/Brunei": "Brunei",
      "America/La_Paz": "Bolivia",
      "America/Noronha": "Brazil",
      "America/Belem": "Brazil",
      "America/Fortaleza": "Brazil",
      "America/Recife": "Brazil",
      "America/Araguaina": "Brazil",
      "America/Maceio": "Brazil",
      "America/Bahia": "Brazil",
      "America/Sao_Paulo": "Brazil",
      "America/Campo_Grande": "Brazil",
      "America/Cuiaba": "Brazil",
      "America/Santarem": "Brazil",
      "America/Porto_Velho": "Brazil",
      "America/Boa_Vista": "Brazil",
      "America/Manaus": "Brazil",
      "America/Eirunepe": "Brazil",
      "America/Rio_Branco": "Brazil",
      "Asia/Thimphu": "Bhutan",
      "Europe/Minsk": "Belarus",
      "America/Belize": "Belize",
      "America/St_Johns": "Canada",
      "America/Halifax": "Canada",
      "America/Glace_Bay": "Canada",
      "America/Moncton": "Canada",
      "America/Goose_Bay": "Canada",
      "America/Toronto": "Canada",
      "America/Nipigon": "Canada",
      "America/Thunder_Bay": "Canada",
      "America/Iqaluit": "Canada",
      "America/Pangnirtung": "Canada",
      "America/Winnipeg": "Canada",
      "America/Rainy_River": "Canada",
      "America/Resolute": "Canada",
      "America/Rankin_Inlet": "Canada",
      "America/Regina": "Canada",
      "America/Swift_Current": "Canada",
      "America/Edmonton": "Canada",
      "America/Cambridge_Bay": "Canada",
      "America/Yellowknife": "Canada",
      "America/Inuvik": "Canada",
      "America/Dawson_Creek": "Canada",
      "America/Fort_Nelson": "Canada",
      "America/Whitehorse": "Canada",
      "America/Dawson": "Canada",
      "America/Vancouver": "Canada",
      "Indian/Cocos": "Cocos (Keeling) Islands",
      "Europe/Zurich": "Switzerland",
      "Africa/Abidjan": "Côte d'Ivoire",
      "Pacific/Rarotonga": "Cook Islands",
      "America/Santiago": "Chile",
      "America/Punta_Arenas": "Chile",
      "Pacific/Easter": "Chile",
      "Asia/Shanghai": "China",
      "Asia/Urumqi": "China",
      "America/Bogota": "Colombia",
      "America/Costa_Rica": "Costa Rica",
      "America/Havana": "Cuba",
      "Atlantic/Cape_Verde": "Cape Verde",
      "Indian/Christmas": "Christmas Island",
      "Asia/Nicosia": "Cyprus",
      "Asia/Famagusta": "Cyprus",
      "Europe/Prague": "Czech Republic",
      "Europe/Berlin": "Germany",
      "Europe/Copenhagen": "Denmark",
      "America/Santo_Domingo": "Dominican Republic",
      "Africa/Algiers": "Algeria",
      "America/Guayaquil": "Ecuador",
      "Pacific/Galapagos": "Ecuador",
      "Europe/Tallinn": "Estonia",
      "Africa/Cairo": "Egypt",
      "Africa/El_Aaiun": "Western Sahara",
      "Europe/Madrid": "Spain",
      "Africa/Ceuta": "Spain",
      "Atlantic/Canary": "Spain",
      "Europe/Helsinki": "Finland",
      "Pacific/Fiji": "Fiji",
      "Atlantic/Stanley": "Falkland Islands",
      "Pacific/Chuuk": "Micronesia",
      "Pacific/Pohnpei": "Micronesia",
      "Pacific/Kosrae": "Micronesia",
      "Atlantic/Faroe": "Faroe Islands",
      "Europe/Paris": "France",
      "Europe/London": "Britain (UK)",
      "Asia/Tbilisi": "Georgia",
      "America/Cayenne": "French Guiana",
      "Europe/Gibraltar": "Gibraltar",
      "America/Nuuk": "Greenland",
      "America/Danmarkshavn": "Greenland",
      "America/Scoresbysund": "Greenland",
      "America/Thule": "Greenland",
      "Europe/Athens": "Greece",
      "Atlantic/South_Georgia": "South Georgia & the South Sandwich Islands",
      "America/Guatemala": "Guatemala",
      "Pacific/Guam": "Guam",
      "Africa/Bissau": "Guinea-Bissau",
      "America/Guyana": "Guyana",
      "Asia/Hong_Kong": "Hong Kong",
      "America/Tegucigalpa": "Honduras",
      "America/Port-au-Prince": "Haiti",
      "Europe/Budapest": "Hungary",
      "Asia/Jakarta": "Indonesia",
      "Asia/Pontianak": "Indonesia",
      "Asia/Makassar": "Indonesia",
      "Asia/Jayapura": "Indonesia",
      "Europe/Dublin": "Ireland",
      "Asia/Jerusalem": "Israel",
      "Asia/Kolkata": "India",
      "Asia/Calcutta": "India",
      "Indian/Chagos": "British Indian Ocean Territory",
      "Asia/Baghdad": "Iraq",
      "Asia/Tehran": "Iran",
      "Atlantic/Reykjavik": "Iceland",
      "Europe/Rome": "Italy",
      "America/Jamaica": "Jamaica",
      "Asia/Amman": "Jordan",
      "Asia/Tokyo": "Japan",
      "Africa/Nairobi": "Kenya",
      "Asia/Bishkek": "Kyrgyzstan",
      "Pacific/Tarawa": "Kiribati",
      "Pacific/Kanton": "Kiribati",
      "Pacific/Kiritimati": "Kiribati",
      "Asia/Pyongyang": "Korea (North)",
      "Asia/Seoul": "Korea (South)",
      "Asia/Almaty": "Kazakhstan",
      "Asia/Qyzylorda": "Kazakhstan",
      "Asia/Qostanay": "Kazakhstan",
      "Asia/Aqtobe": "Kazakhstan",
      "Asia/Aqtau": "Kazakhstan",
      "Asia/Atyrau": "Kazakhstan",
      "Asia/Oral": "Kazakhstan",
      "Asia/Beirut": "Lebanon",
      "Asia/Colombo": "Sri Lanka",
      "Africa/Monrovia": "Liberia",
      "Europe/Vilnius": "Lithuania",
      "Europe/Luxembourg": "Luxembourg",
      "Europe/Riga": "Latvia",
      "Africa/Tripoli": "Libya",
      "Africa/Casablanca": "Morocco",
      "Europe/Monaco": "Monaco",
      "Europe/Chisinau": "Moldova",
      "Pacific/Majuro": "Marshall Islands",
      "Pacific/Kwajalein": "Marshall Islands",
      "Asia/Yangon": "Myanmar (Burma)",
      "Asia/Ulaanbaatar": "Mongolia",
      "Asia/Hovd": "Mongolia",
      "Asia/Choibalsan": "Mongolia",
      "Asia/Macau": "Macau",
      "America/Martinique": "Martinique",
      "Europe/Malta": "Malta",
      "Indian/Mauritius": "Mauritius",
      "Indian/Maldives": "Maldives",
      "America/Mexico_City": "Mexico",
      "America/Cancun": "Mexico",
      "America/Merida": "Mexico",
      "America/Monterrey": "Mexico",
      "America/Matamoros": "Mexico",
      "America/Mazatlan": "Mexico",
      "America/Chihuahua": "Mexico",
      "America/Ojinaga": "Mexico",
      "America/Hermosillo": "Mexico",
      "America/Tijuana": "Mexico",
      "America/Bahia_Banderas": "Mexico",
      "Asia/Kuala_Lumpur": "Malaysia",
      "Asia/Kuching": "Malaysia",
      "Africa/Maputo": "Mozambique",
      "Africa/Windhoek": "Namibia",
      "Pacific/Noumea": "New Caledonia",
      "Pacific/Norfolk": "Norfolk Island",
      "Africa/Lagos": "Nigeria",
      "America/Managua": "Nicaragua",
      "Europe/Amsterdam": "Netherlands",
      "Europe/Oslo": "Norway",
      "Asia/Kathmandu": "Nepal",
      "Pacific/Nauru": "Nauru",
      "Pacific/Niue": "Niue",
      "Pacific/Auckland": "New Zealand",
      "Pacific/Chatham": "New Zealand",
      "America/Panama": "Panama",
      "America/Lima": "Peru",
      "Pacific/Tahiti": "French Polynesia",
      "Pacific/Marquesas": "French Polynesia",
      "Pacific/Gambier": "French Polynesia",
      "Pacific/Port_Moresby": "Papua New Guinea",
      "Pacific/Bougainville": "Papua New Guinea",
      "Asia/Manila": "Philippines",
      "Asia/Karachi": "Pakistan",
      "Europe/Warsaw": "Poland",
      "America/Miquelon": "St Pierre & Miquelon",
      "Pacific/Pitcairn": "Pitcairn",
      "America/Puerto_Rico": "Puerto Rico",
      "Asia/Gaza": "Palestine",
      "Asia/Hebron": "Palestine",
      "Europe/Lisbon": "Portugal",
      "Atlantic/Madeira": "Portugal",
      "Atlantic/Azores": "Portugal",
      "Pacific/Palau": "Palau",
      "America/Asuncion": "Paraguay",
      "Asia/Qatar": "Qatar",
      "Indian/Reunion": "Réunion",
      "Europe/Bucharest": "Romania",
      "Europe/Belgrade": "Serbia",
      "Europe/Kaliningrad": "Russia",
      "Europe/Moscow": "Russia",
      "Europe/Simferopol": "Russia",
      "Europe/Kirov": "Russia",
      "Europe/Volgograd": "Russia",
      "Europe/Astrakhan": "Russia",
      "Europe/Saratov": "Russia",
      "Europe/Ulyanovsk": "Russia",
      "Europe/Samara": "Russia",
      "Asia/Yekaterinburg": "Russia",
      "Asia/Omsk": "Russia",
      "Asia/Novosibirsk": "Russia",
      "Asia/Barnaul": "Russia",
      "Asia/Tomsk": "Russia",
      "Asia/Novokuznetsk": "Russia",
      "Asia/Krasnoyarsk": "Russia",
      "Asia/Irkutsk": "Russia",
      "Asia/Chita": "Russia",
      "Asia/Yakutsk": "Russia",
      "Asia/Khandyga": "Russia",
      "Asia/Vladivostok": "Russia",
      "Asia/Ust-Nera": "Russia",
      "Asia/Magadan": "Russia",
      "Asia/Sakhalin": "Russia",
      "Asia/Srednekolymsk": "Russia",
      "Asia/Kamchatka": "Russia",
      "Asia/Anadyr": "Russia",
      "Asia/Riyadh": "Saudi Arabia",
      "Pacific/Guadalcanal": "Solomon Islands",
      "Indian/Mahe": "Seychelles",
      "Africa/Khartoum": "Sudan",
      "Europe/Stockholm": "Sweden",
      "Asia/Singapore": "Singapore",
      "America/Paramaribo": "Suriname",
      "Africa/Juba": "South Sudan",
      "Africa/Sao_Tome": "Sao Tome & Principe",
      "America/El_Salvador": "El Salvador",
      "Asia/Damascus": "Syria",
      "America/Grand_Turk": "Turks & Caicos Is",
      "Africa/Ndjamena": "Chad",
      "Indian/Kerguelen": "French Southern & Antarctic Lands",
      "Asia/Bangkok": "Thailand",
      "Asia/Dushanbe": "Tajikistan",
      "Pacific/Fakaofo": "Tokelau",
      "Asia/Dili": "East Timor",
      "Asia/Ashgabat": "Turkmenistan",
      "Africa/Tunis": "Tunisia",
      "Pacific/Tongatapu": "Tonga",
      "Europe/Istanbul": "Turkey",
      "Pacific/Funafuti": "Tuvalu",
      "Asia/Taipei": "Taiwan",
      "Europe/Kiev": "Ukraine",
      "Europe/Uzhgorod": "Ukraine",
      "Europe/Zaporozhye": "Ukraine",
      "Pacific/Wake": "US minor outlying islands",
      "America/New_York": "United States",
      "America/Detroit": "United States",
      "America/Kentucky/Louisville": "United States",
      "America/Kentucky/Monticello": "United States",
      "America/Indiana/Indianapolis": "United States",
      "America/Indiana/Vincennes": "United States",
      "America/Indiana/Winamac": "United States",
      "America/Indiana/Marengo": "United States",
      "America/Indiana/Petersburg": "United States",
      "America/Indiana/Vevay": "United States",
      "America/Chicago": "United States",
      "America/Indiana/Tell_City": "United States",
      "America/Indiana/Knox": "United States",
      "America/Menominee": "United States",
      "America/North_Dakota/Center": "United States",
      "America/North_Dakota/New_Salem": "United States",
      "America/North_Dakota/Beulah": "United States",
      "America/Denver": "United States",
      "America/Boise": "United States",
      "America/Phoenix": "United States",
      "America/Los_Angeles": "United States",
      "America/Anchorage": "United States",
      "America/Juneau": "United States",
      "America/Sitka": "United States",
      "America/Metlakatla": "United States",
      "America/Yakutat": "United States",
      "America/Nome": "United States",
      "America/Adak": "United States",
      "Pacific/Honolulu": "United States",
      "America/Montevideo": "Uruguay",
      "Asia/Samarkand": "Uzbekistan",
      "Asia/Tashkent": "Uzbekistan",
      "America/Caracas": "Venezuela",
      "Asia/Ho_Chi_Minh": "Vietnam",
      "Pacific/Efate": "Vanuatu",
      "Pacific/Wallis": "Wallis & Futuna",
      "Pacific/Apia": "Samoa (western)",
      "Africa/Johannesburg": "South Africa",
      "America/Antigua": "Antigua & Barbuda",
      "America/Anguilla": "Anguilla",
      "Africa/Luanda": "Angola",
      "Antarctica/McMurdo": "Antarctica",
      "Antarctica/DumontDUrville": "Antarctica",
      "Antarctica/Syowa": "Antarctica",
      "America/Aruba": "Aruba",
      "Europe/Mariehamn": "Åland Islands",
      "Europe/Sarajevo": "Bosnia & Herzegovina",
      "Africa/Ouagadougou": "Burkina Faso",
      "Asia/Bahrain": "Bahrain",
      "Africa/Bujumbura": "Burundi",
      "Africa/Porto-Novo": "Benin",
      "America/St_Barthelemy": "St Barthelemy",
      "America/Kralendijk": "Caribbean NL",
      "America/Nassau": "Bahamas",
      "Africa/Gaborone": "Botswana",
      "America/Blanc-Sablon": "Canada",
      "America/Atikokan": "Canada",
      "America/Creston": "Canada",
      "Africa/Kinshasa": "Congo (Dem. Rep.)",
      "Africa/Lubumbashi": "Congo (Dem. Rep.)",
      "Africa/Bangui": "Central African Rep.",
      "Africa/Brazzaville": "Congo (Rep.)",
      "Africa/Douala": "Cameroon",
      "America/Curacao": "Curaçao",
      "Europe/Busingen": "Germany",
      "Africa/Djibouti": "Djibouti",
      "America/Dominica": "Dominica",
      "Africa/Asmara": "Eritrea",
      "Africa/Addis_Ababa": "Ethiopia",
      "Africa/Libreville": "Gabon",
      "America/Grenada": "Grenada",
      "Europe/Guernsey": "Guernsey",
      "Africa/Accra": "Ghana",
      "Africa/Banjul": "Gambia",
      "Africa/Conakry": "Guinea",
      "America/Guadeloupe": "Guadeloupe",
      "Africa/Malabo": "Equatorial Guinea",
      "Europe/Zagreb": "Croatia",
      "Europe/Isle_of_Man": "Isle of Man",
      "Europe/Jersey": "Jersey",
      "Asia/Phnom_Penh": "Cambodia",
      "Indian/Comoro": "Comoros",
      "America/St_Kitts": "St Kitts & Nevis",
      "Asia/Kuwait": "Kuwait",
      "America/Cayman": "Cayman Islands",
      "Asia/Vientiane": "Laos",
      "America/St_Lucia": "St Lucia",
      "Europe/Vaduz": "Liechtenstein",
      "Africa/Maseru": "Lesotho",
      "Europe/Podgorica": "Montenegro",
      "America/Marigot": "St Martin (French)",
      "Indian/Antananarivo": "Madagascar",
      "Europe/Skopje": "North Macedonia",
      "Africa/Bamako": "Mali",
      "Pacific/Saipan": "Northern Mariana Islands",
      "Africa/Nouakchott": "Mauritania",
      "America/Montserrat": "Montserrat",
      "Africa/Blantyre": "Malawi",
      "Africa/Niamey": "Niger",
      "Asia/Muscat": "Oman",
      "Africa/Kigali": "Rwanda",
      "Atlantic/St_Helena": "St Helena",
      "Europe/Ljubljana": "Slovenia",
      "Arctic/Longyearbyen": "Svalbard & Jan Mayen",
      "Europe/Bratislava": "Slovakia",
      "Africa/Freetown": "Sierra Leone",
      "Europe/San_Marino": "San Marino",
      "Africa/Dakar": "Senegal",
      "Africa/Mogadishu": "Somalia",
      "America/Lower_Princes": "St Maarten (Dutch)",
      "Africa/Mbabane": "Eswatini (Swaziland)",
      "Africa/Lome": "Togo",
      "America/Port_of_Spain": "Trinidad & Tobago",
      "Africa/Dar_es_Salaam": "Tanzania",
      "Africa/Kampala": "Uganda",
      "Pacific/Midway": "US minor outlying islands",
      "Europe/Vatican": "Vatican City",
      "America/St_Vincent": "St Vincent",
      "America/Tortola": "Virgin Islands (UK)",
      "America/St_Thomas": "Virgin Islands (US)",
      "Asia/Aden": "Yemen",
      "Indian/Mayotte": "Mayotte",
      "Africa/Lusaka": "Zambia",
      "Africa/Harare": "Zimbabwe"
    }
    
    const timeZone=new Intl.DateTimeFormat().resolvedOptions().timeZone;
    const country=timezonemap[timeZone];
    console.log(country)
    return country ||"Unknown"
  }

  function trackPageView() {
      const { browser, device, os } = getBrowserInfo();
      const referrer = document.referrer || 'direct';
      const path = window.location.pathname;

      const event = {
          type: 'pageview',
          url: window.location.href,
          path: path,
          referrer: referrer,
          title: document.title,
          user_id: getUserId(),
          visit_id: getVisitId(),
          timestamp: Date.now(),
          browser,
          device,
          os,
          country: getCountry()
      };

      queueEvent(event);

      log('Page view tracked:', path);
  }

  function trackRequest(url, method, statusCode, responseSize) {
      const { browser, device, os } = getBrowserInfo();
      const parsedUrl = new URL(url);

      const event = {
          type: 'request',
          url: url,
          host: parsedUrl.hostname,
          path: parsedUrl.pathname,
          method: method,
          status_code: statusCode,
          response_size: responseSize,
          user_id: getUserId(),
          visit_id: getVisitId(),
          timestamp: Date.now(),
          browser,
          device,
          os,
          country: getCountry()
      };

      queueEvent(event);

      log('Request tracked:', method, url, statusCode);
  }

  function queueEvent(event) {
      eventQueue.push(event);

      if (eventQueue.length >= config.batchSize) {
          sendBatch();
      }
      else if (!batchTimerId) {
          scheduleBatch();
      }
  }

  function scheduleBatch() {
      if (batchTimerId) return; 

      batchTimerId = setTimeout(() => {
          if (eventQueue.length > 0) {
              sendBatch();
          }
          batchTimerId = null;

          if (eventQueue.length > 0) {
              scheduleBatch();
          }
      }, config.batchInterval);
  }

  function sendBatch() {
      if (eventQueue.length === 0) return;

      
      const batchSize = Math.min(eventQueue.length, config.batchSize);
      const batch = eventQueue.slice(0, batchSize);
      eventQueue = eventQueue.slice(batchSize);

      log('Sending batch of', batch.length, 'events');

      const payload = {
          api_key: config.apiKey,
          sdk_version: SDK_VERSION,
          timestamp: Date.now(),
          events: batch
      };

      fetch(config.endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          keepalive: true
      }).catch(error => {
          console.error('[Analytics] Failed to send data:', error);
          eventQueue = [...batch, ...eventQueue];
          log('Events returned to queue. New size:', eventQueue.length);
      });
  }

  function trackNetworkRequests() {
      const originalFetch = window.fetch;
      window.fetch = async function(url, options = {}) {
          if (url === config.endpoint) {
              return originalFetch(url, options);
          }

          const method = options.method || 'GET';

          try {
              const response = await originalFetch(url, options);
              const responseSize = parseInt(response.headers.get('Content-Length'), 10) || 0;

              trackRequest(
                  url.toString(),
                  method,
                  response.status,
                  responseSize
              );

              return response;
          } catch (error) {
              trackRequest(url.toString(), method, 0, 0);
              throw error;
          }
      };

      // Override XMLHttpRequest
      const originalXHR = window.XMLHttpRequest;
      window.XMLHttpRequest = function() {
          const xhr = new originalXHR();
          const open = xhr.open;

          xhr.open = function(method, url) {
              this._method = method;
              this._url = url;
              open.apply(this, arguments);
          };

          xhr.addEventListener('load', function() {
              if (this._url === config.endpoint) return;

              const responseSize = parseInt(this.getResponseHeader('Content-Length'), 10) || 0;

              trackRequest(
                  this._url,
                  this._method,
                  this.status,
                  responseSize
              );
          });

          xhr.addEventListener('error', function() {
              if (this._url === config.endpoint) return;

              trackRequest(this._url, this._method, 0, 0);
          });

          return xhr;
      };
  }

  function trackHistoryChanges() {
      trackPageView();

      const originalPushState = window.history.pushState;
      const originalReplaceState = window.history.replaceState;

      window.history.pushState = function() {
          originalPushState.apply(this, arguments);
          trackPageView();
      };

      window.history.replaceState = function() {
          originalReplaceState.apply(this, arguments);
          trackPageView();
      };

      window.addEventListener('popstate', trackPageView);
  }

  function log(...args) {
      if (config.debug) {
          console.log('[Analytics]', ...args);
      }
  }

  function init(userConfig = {}) {
      if (initialized) return;

      config = { ...config, ...userConfig };

      if (!config.apiKey) {
          console.error('[Analytics] API key is required');
          return;
      }

      trackNetworkRequests();
      trackHistoryChanges();

      window.addEventListener('beforeunload', () => {
        console.log(eventQueue.length )  
        if (eventQueue.length > 0) {
              const payload = JSON.stringify({
                  api_key: config.apiKey,
                  sdk_version: SDK_VERSION,
                  timestamp: Date.now(),
                  events: eventQueue
              });

              navigator.sendBeacon(config.endpoint, payload);
              eventQueue = [];
              localStorage.removeItem('analytics_visit_id');

          }
      });

      initialized = true;
      log('SDK initialized with config:', config);
  }

  const Analytics = {
      init,
      trackPageView
  };

  window.Analytics = Analytics;

  if (window.ANALYTICS_CONFIG) {
      Analytics.init(window.ANALYTICS_CONFIG);
  } else if (window.ANALYTICS_API_KEY) {
      Analytics.init({ apiKey: window.ANALYTICS_API_KEY });
  }
})();
