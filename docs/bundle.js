!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e,t=[];["devs_and_truckers_skills","choreographer","dentists","nurses","chiropractors","farmers","construction_managers","firefighters","geographers","embalmers","pipelayers"].forEach(function(e){t.push("assets/data/"+e+".csv")}),(e=d3).loadData.apply(e,t.concat([function(e,t){var n=d3.select("div.skill-difference"),i=d3.select("div.skill-stack-difference"),o=d3.select("div.all-skills-difference"),r=t[0],a=t[1],l=t[2],c=t[3],s=t[4],d=t[5],u=t[6],b=t[7],f=t[8],p=t[9],m=t[10],k=(t[11],[a,l,c,s,d,u,b,f,p,m]),v=["choreographers","dentists","nurses","chiropractors","farmers","construction_managers","firefighters","geographers","embalmers","pipelayers"],j=[[{name:"choreographers"}],[{name:"dentists"}],[{name:"nurses"}],[{name:"chiropractors"}],[{name:"farmers"}],[{name:"construction_managers"}],[{name:"firefighters"}],[{name:"geographers"}],[{name:"embalmers"}],[{name:"pipelayers"}]];r.forEach(function(e){e.difference=Math.abs(+e.devs-+e.truckers)});var y=void 0,h=0;for(y=0;y<r.length;y++)r[y].xCoordStacked=h,h+=r[y].difference+1;k.forEach(function(e){var t=void 0,n=0;for(t=0;t<e.length;t++)e[t].xCoordStacked=n,n+=+e[t].difference+1});var g=d3.select("body").append("div.svg-container").append("svg.scatter");g.at("height",2200).at("width",800).st("fill","#00000");var x=d3.scaleLinear().domain([0,100]).range([0,400]),S=g.selectAll("g.skill-section").data(r).enter().append("g.skill-section"),_={};for(y=0;y<v.length;y++)_[""+v[y]]=g.selectAll("g.skill-section-"+v[y]).data(k[y]).enter().append("g.skill-section-"+v[y]);var J=S.append("circle.devs-skill-circle"),w=S.append("circle.truckers-skill-circle");J.at("cx",function(e){return 250+x(e.devs)}).at("r",5).st("fill","#0B24FB").on("mouseenter"),w.at("cx",function(e){return 250+x(e.truckers)}).at("r",5).st("fill","#EB5757");var O=S.at("transform",function(e,t){return"translate(50,"+(20+15*t)+")"}).append("text").text(function(e){return e.skills}).st("text-anchor","right"),A={};for(y=0;y<v.length;y++)A[""+v[y]]=_[v[y]].select("text.all-jobs.job-"+v[y]).data(j[y]).enter().append("text.all-jobs.job-"+v[y]);var N=S.append("line.skill-axis").at("x1",200).at("y1",0).at("x2",800).at("y2",0).at("stroke-width",1).st("stroke","black"),D=S.append("rect.skill-difference-axis"),E={};for(y=0;y<v.length;y++)E[""+v[y]]=_[v[y]].append("rect.other-job-skills.skill-difference-axis-"+v[y]);for(D.at("x",function(e){return 250+x(e.truckers)}).at("width",function(e){return x(e.difference)}).at("height",3).st("fill","#E530BE").st("opacity",0),y=0;y<v.length;y++)E[v[y]].at("x",function(e){return 250+x(e.job_selected)}).at("width",function(e){return x(e.difference)}).at("height",3).st("fill","#E530BE").st("opacity",0);n.on("click",function(){D.transition().st("opacity",1)});var M=d3.scaleLinear().domain([0,100]).range([0,15]);i.on("click",function(){D.at("x",function(e){return M(e.xCoordStacked)}).at("width",function(e){return M(e.difference)}).on("mouseenter",function(e){return console.log(e.skills)}),S.transition().at("transform","translate(250,10)"),N.st("opacity",0),O.st("opacity",0).text(function(e,t){return t===r.length-1?"Developers":""}).transition().st("opacity",1),J.st("opacity",0),w.st("opacity",0)}),o.on("click",function(){d3.selectAll("rect.other-job-skills").st("opacity",1);var e=0;for(y=0;y<v.length;y++)e=20*y+20,E[v[y]].at("x",function(e){return 250+M(e.xCoordStacked)}).at("width",function(e){return M(e.difference)}).at("height",3).transition().at("transform","translate(0,"+e+")").st("fill","#E530BE").st("opacity",1),A[v[y]].at("transform","translate(50,"+e+")").st("opacity",1).text(function(e){return e.name})})}]))}},function(module,exports,__webpack_require__){"use strict";function numberWithCommas(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function selectJobData(e,t){return e.filter(function(e){return e.id_selected===t})}function setupXScale(e){return d3.scaleLinear().domain(d3.extent(e,function(e){return e.similarity})).range([0,800])}function compare(e,t){return e.imp<t.imp?1:e.imp>t.imp?-1:0}function loadScatterplot(){var _d,allData=null,keyObjectJobName={},keyObjectJobNumber={},keyObjectJobAuto={},keyObjectJobWage={},keyObjectSkillName={},selectedJobSkills=[0,0,0,0,0],skills=[],MAX_AUTO=1,MIN_AUTO=0,pathData="assets/data/",fileNames=["crosswalk_jobs","similarity","crosswalk_skills","skills"],files=[];fileNames.forEach(function(e){files.push(pathData+e+".csv")}),(_d=d3).loadData.apply(_d,files.concat([function(err,response){var crosswalk=response[0],similarity=response[1],crosswalkSkills=response[2];skills=response[3],crosswalk.forEach(function(e){e.id=+e.id,e.auto=+e.auto,e.wage=+e.wage,e.number=+e.number}),similarity.forEach(function(e){e.similarity=+e.similarity,e.id_compared=+e.id_compared,e.id_selected=+e.id_selected}),skills.forEach(function(e){e.id_selected=+e.id_selected,e.imp=+e.imp,e.skill_id=+e.skill_id,e.rank=+e.rank}),crosswalkSkills.forEach(function(e){e.skill_id=+e.skill_id}),allData=similarity;var jobSelector=d3.select("body").append("div.job-selector"),currentJobName=d3.select("body").append("div.job-selected-name"),jobSelectedNumber=d3.select("body").append("div.job-selected-number"),chartSvg=d3.select("svg.scatter"),selectedJobData=selectJobData(similarity,415),yScale=d3.scaleLinear().domain([MIN_AUTO,MAX_AUTO]).range([0,600]),xScale=setupXScale(selectedJobData),colorScale=d3.scaleLinear().domain([5,2,1.25,1.1,.9,.75,.5,.2]).range(["#a50026","#d73027","#f46d43","#fee090","#e0f3f8","#74add1","#4575b4","#313695"]),radiusScale=d3.scaleSqrt().domain([0,d3.max(crosswalk,function(e){return e.wage})]).range([0,6]);crosswalk.forEach(function(e){keyObjectJobName[e.id]=e.job_name}),crosswalk.forEach(function(e){keyObjectJobNumber[e.id]=e.number}),crosswalk.forEach(function(e){keyObjectJobAuto[e.id]=e.auto}),crosswalk.forEach(function(e){keyObjectJobWage[e.id]=e.wage}),crosswalkSkills.forEach(function(e){return keyObjectSkillName[e.skill_id]=e.skill});var jobDropdownMenu=d3.select("div.job-selector").append("select.scatter-dropdown-menu"),jobButtons=jobDropdownMenu.selectAll("option.job-button").data(crosswalk).enter().append("option.job-button").at("value",function(e){return e.id});jobButtons.text(function(e){return e.job_name}),jobDropdownMenu.on("change",function(d,i,n){var selectedJobID=eval(d3.select(n[i]).property("value"));console.log(selectedJobID);var updatedData=selectJobData(allData,selectedJobID),xScale=setupXScale(updatedData);d3.selectAll("circle.job").remove();var jobCircles=d3.select("svg.scatter").selectAll("circle.job").data(updatedData).enter().append("circle.job");jobCircles.at("cx",function(e){return xScale(e.similarity)}).at("cy",function(e){return yScale(keyObjectJobAuto[e.id_compared])}).st("fill",function(e){var t=keyObjectJobWage[e.id_selected],n=keyObjectJobWage[e.id_compared];return colorScale(t/n)}).at("r",function(e){var t=keyObjectJobNumber[e.id_compared];return radiusScale(t)}).st("stroke","black"),jobCircles.on("mouseenter",function(e,t,n){var i=d3.select("div.jobTooltip");i.st("visibility","visible");var o=d3.select(n[t]).at("cx"),r=d3.select(n[t]).at("cy");i.st("left",o+"px").st("top",r+"px"),selectedJobSkills=(selectedJobSkills=selectJobData(skills,e.id_compared)).sort(compare),d3.select("div.job-selected-name").text("Main job: "+keyObjectJobName[e.id_selected]),d3.select("div.job-compared-name").text("Compared job: "+keyObjectJobName[e.id_compared]),d3.select("div.job-selected-number").text("Main job quantity: "+numberWithCommas(keyObjectJobNumber[e.id_selected])),d3.select("div.job-compared-number").text("Compared job quantity: "+numberWithCommas(keyObjectJobNumber[e.id_compared]));var a=i.select("div.job-skills-container"),l=(a.selectAll("div.bar-container"),a.selectAll("div.job-bar-name").data(selectedJobSkills)),c=a.selectAll("div.job-bar").data(selectedJobSkills),s=a.selectAll("div.job-bar-value").data(selectedJobSkills);console.log(selectedJobSkills),c.st("height","20px").st("width",function(e){return e.imp+"px"}).st("background","black"),l.text(function(e){return keyObjectSkillName[e.skill_id]}),s.text(function(e){return e.imp})}).on("mouseleave",function(){jobTooltip.st("visibility","hidden")})});var jobCircles=chartSvg.selectAll("circle.job").data(selectedJobData).enter().append("circle.job");jobCircles.at("cx",function(e){return xScale(e.similarity)}).at("cy",function(e){return yScale(keyObjectJobAuto[e.id_compared])}).at("r",function(e){var t=keyObjectJobNumber[e.id_compared];return radiusScale(t)}).st("stroke","black").st("fill",function(e){var t=keyObjectJobWage[e.id_selected],n=keyObjectJobWage[e.id_compared];return colorScale(t/n)});var jobTooltip=d3.select("div.svg-container").append("div.jobTooltip"),jobSelectedName=d3.select("div.job-selected-name"),jobComparedName=jobTooltip.append("div.job-compared-name"),jobComparedNumber=jobTooltip.append("div.job-compared-number"),jobSkillsContainer=jobTooltip.append("div.job-skills-container"),jobSkillsBarRow=jobSkillsContainer.selectAll("div.job-bar-container").data(selectedJobSkills).enter().append("div.bar-container"),jobSkillsNames=jobSkillsBarRow.append("div.job-bar-name").data(selectedJobSkills).enter(),jobSkillsBars=jobSkillsBarRow.append("div.job-bar").data(selectedJobSkills).enter(),jobSkillsValues=jobSkillsBarRow.append("div.job-bar-value").data(selectedJobSkills).enter();jobCircles.on("mouseenter",function(e,t,n){selectedJobSkills=(selectedJobSkills=selectJobData(skills,e.id_compared)).sort(compare);var i=d3.select("div.jobTooltip");i.st("visibility","visible");var o=d3.select(n[t]).at("cx"),r=d3.select(n[t]).at("cy");i.st("left",o+"px").st("top",r+"px"),d3.select("div.job-selected-name").text("Main job: "+keyObjectJobName[e.id_selected]),d3.select("div.job-compared-name").text("Compared job: "+keyObjectJobName[e.id_compared]),d3.select("div.job-selected-number").text("Main job quantity: "+numberWithCommas(keyObjectJobNumber[e.id_selected])),d3.select("div.job-compared-number").text("Compared job quantity: "+numberWithCommas(keyObjectJobNumber[e.id_compared]));var a=i.select("div.job-skills-container"),l=(a.selectAll("div.bar-container"),a.selectAll("div.job-bar-name").data(selectedJobSkills)),c=a.selectAll("div.job-bar").data(selectedJobSkills),s=a.selectAll("div.job-bar-value").data(selectedJobSkills);console.log(selectedJobSkills),c.st("height","20px").st("width",function(e){return e.imp+"px"}).st("background","black"),l.text(function(e){return keyObjectSkillName[e.skill_id]}),s.text(function(e){return e.imp})}).on("mouseleave",function(){jobTooltip.st("visibility","hidden")})}]))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=loadScatterplot},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(n(1)),o=r(n(0));function r(e){return e&&e.__esModule?e:{default:e}}window.innerWidth,t.default={init:function(){var e=d3.select("body").append("div.buttons-container"),t=e.append("div.transition-button.all-skills").text("AllSkills"),n=(e.append("div.transition-button.skill-difference").text("DifferenceInSkills"),e.append("div.transition-button.skill-stack-difference").text("StackDifference"),e.append("div.transition-button.all-skills-difference").text("StackAllSkills"),e.append("div.transition-button.only-similarity-axis").text("showSingleAxisSimilarity"),e.append("div.transition-button.final-scatter").text("showScatter"));t.on("click",function(){return(0,o.default)()}),n.on("click",function(){return(0,i.default)()})},resize:function(){}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={android:function(){return navigator.userAgent.match(/Android/i)},blackberry:function(){return navigator.userAgent.match(/BlackBerry/i)},ios:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},opera:function(){return navigator.userAgent.match(/Opera Mini/i)},windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return i.android()||i.blackberry()||i.ios()||i.opera()||i.windows()}};t.default=i},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){(function(t){var n=NaN,i="[object Symbol]",o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,s="object"==typeof t&&t&&t.Object===Object&&t,d="object"==typeof self&&self&&self.Object===Object&&self,u=s||d||Function("return this")(),b=Object.prototype.toString,f=Math.max,p=Math.min,m=function(){return u.Date.now()};function k(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&b.call(e)==i}(e))return n;if(k(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=k(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var s=a.test(e);return s||l.test(e)?c(e.slice(2),s?2:8):r.test(e)?n:+e}e.exports=function(e,t,n){var i,o,r,a,l,c,s=0,d=!1,u=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function j(t){var n=i,r=o;return i=o=void 0,s=t,a=e.apply(r,n)}function y(e){var n=e-c;return void 0===c||n>=t||n<0||u&&e-s>=r}function h(){var e=m();if(y(e))return g(e);l=setTimeout(h,function(e){var n=t-(e-c);return u?p(n,r-(e-s)):n}(e))}function g(e){return l=void 0,b&&i?j(e):(i=o=void 0,a)}function x(){var e=m(),n=y(e);if(i=arguments,o=this,c=e,n){if(void 0===l)return function(e){return s=e,l=setTimeout(h,t),d?j(e):a}(c);if(u)return l=setTimeout(h,t),j(c)}return void 0===l&&(l=setTimeout(h,t)),a}return t=v(t)||0,k(n)&&(d=!!n.leading,r=(u="maxWait"in n)?f(v(n.maxWait)||0,t):r,b="trailing"in n?!!n.trailing:b),x.cancel=function(){void 0!==l&&clearTimeout(l),s=0,i=c=o=l=void 0},x.flush=function(){return void 0===l?a:g(m())},x}}).call(this,n(4))},function(e,t,n){"use strict";var i=a(n(5)),o=a(n(3)),r=a(n(2));function a(e){return e&&e.__esModule?e:{default:e}}var l=d3.select("body"),c=0;l.classed("is-mobile",o.default.any()),window.addEventListener("resize",(0,i.default)(function(){var e=l.node().offsetWidth;c!==e&&(c=e,r.default.resize())},150)),r.default.init()}]);