(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{100:function(e,n,t){},102:function(e,n,t){"use strict";t.r(n);var i=t(2),a=t(1),o=t.n(a),s=t(25),r=t.n(s),c=t(15),l=t(16),m=t(18),d=t(17),p=t(104),h=t(8),b=t(21),g=t(105),u=t(106),f=function(){document.querySelector(".navbar").style.backgroundColor="yellow";for(var e=document.querySelectorAll(".nav-link"),n=0;n<e.length;n++)e[n].classList.add("nav-link-black")},j=function(e){Object(m.a)(t,e);var n=Object(d.a)(t);function t(){return Object(c.a)(this,t),n.apply(this,arguments)}return Object(l.a)(t,[{key:"componentDidMount",value:function(){window.innerWidth<=768&&f(),function(){if(window.innerWidth<=768)return f();window.addEventListener("scroll",(function(e){var n=window.innerHeight/4,t=Math.min(Math.max(0,window.pageYOffset/n),1);if(document.querySelector(".navbar").style.backgroundColor="rgba(255,255,0,".concat(t,")"),t>.8)for(var i=document.querySelectorAll(".nav-link"),a=0;a<i.length;a++)i[a].classList.add("nav-link-black");else for(var o=document.querySelectorAll(".nav-link"),s=0;s<o.length;s++)o[s].classList.remove("nav-link-black")}))}()}},{key:"render",value:function(){return Object(i.jsxs)(g.a,{fixed:"bottom",style:{overflow:"hidden"},children:[Object(i.jsx)(g.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(i.jsx)(g.a.Collapse,{id:"basic-navbar-nav",className:"d-flex",children:Object(i.jsxs)(u.a,{className:"d-flex ml-auto",children:[Object(i.jsx)(b.c,{className:"nav-link",to:"/",alt:"HOME",onClick:function(){return window.scrollTo({top:0,behavior:"smooth"})},children:"HOME"}),Object(i.jsx)(b.c,{className:"nav-link",to:"/about",alt:"ABOUT",onClick:function(){return window.scrollTo({top:0,behavior:"smooth"})},children:"ABOUT"}),Object(i.jsx)(b.c,{className:"nav-link",to:"/projects",alt:"PROJECTS",onClick:function(){return window.scrollTo({top:0,behavior:"smooth"})},children:"PROJECTS"})]})})]})}}]),t}(a.Component),v=t(11),x=t(12),k=t(46),w=t.n(k);function y(){var e=Object(v.a)(['\n  position: absolute;\n  left: 50%;\n  top: 45%;\n  transform: translate(-50%, -50%);\n  color: yellow;\n  font-size: 8.5vw;\n  font-style: italic;\n  font-weight: 900;\n  z-index: 2;\n  &:before {\n    content: "ACZELL\u200e\u200f\u200f\u200e\u2005BIEN";\n    color: rgba(0, 0, 0, 0);\n    -webkit-text-stroke: 0.5px yellow;\n    position: absolute;\n    font-size: 12.5vw;\n    white-space: nowrap;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n  }\n']);return y=function(){return e},e}function O(){var e=Object(v.a)(["\n    height: 100vh\n    position: relative;\n"]);return O=function(){return e},e}var S=x.a.div(O()),N=x.a.div(y()),E=["UI/UX","WEB DEVELOPER","VISUAL DESIGNER","VIDEO EDITOR","CONTENT CREATOR","ICAFE SOLUTIONS PROVIDER"],I=function(e){Object(m.a)(t,e);var n=Object(d.a)(t);function t(e){var i;return Object(c.a)(this,t),(i=n.call(this,e)).state={index:0,setIndex:null},i}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({setIndex:setInterval((function(){e.setState({index:e.state.index+1})}),5e3)}),document.title="Keenplify | Portfolio"}},{key:"render",value:function(){return Object(i.jsxs)(S,{children:[Object(i.jsx)(N,{children:" KEENPLIFY "}),Object(i.jsx)(w.a,{text:E[this.state.index%E.length],inline:!0,style:{overflow:"hidden",fontStretch:"condensed",fontSize:"3vw",fontWeight:"700"}})]})}}]),t}(a.Component),A=t(24),C=t(107),P=[{name:"Professionalism",desc:"He has a good grasp of the professional code and conduct. Has applied soft skills and can work in a team."},{name:"Javascript / Typescript",desc:"High level mastery of Javascript concepts and frameworks. He regularly surfs the internet to find stuffs that is new on the javascript world."},{name:"Game Development",desc:"Experienced in high level game development and is familiar to its concepts and toolings. Has experience in Roblox Studio, Unity and other proprietary game engines."},{name:"UI / UX Design",desc:"Has years of experience and knowledge on the latest UI and UX trend as well as its tooling such as Adobe XD and Figma and knowledge in latest frontend frameworks."},{name:"Backend Programming",desc:"Has the ability to handle critical tasks due to years of experience in backend programming. Highly familiar to backend concepts."},{name:"Web and Cross-Platform",desc:"Well versed in the world of cross platform libraries and frameworks such as React. Can deploy in the web using latest frameworks such as NextJS and can expand thru the mobile using Expo."},{name:"Content Creation",desc:"Was doing content creation in several social medias such as Facebook and Youtube as a hobby. He sometimes does some live streaming."},{name:"Game Modding",desc:"He has the background of modding games such as Warcraft III, Grand Theft Auto, Counter Strike and others. He is also well versed in the tools that used when modding."},{name:"ICafe Setup/Management",desc:"He has proficiency in softwares an ICafe typically uses such as iCafe timers, iPXE/diskless setup, Windows optimization and much more."},{name:"Graphics Design",desc:"Has years of experience in using graphics design applications such as Adobe Photoshop, Adobe Premiere and Adobe AfterEffects."}];function M(){var e=Object(v.a)(["\n  &:hover:after {\n    content: attr(alt);\n    background-color: black;\n    position: absolute;\n    transform: translate(-50%, -100%);\n    padding: 4px 8px;\n    border-radius: 4px;\n    z-index: 5;\n    font-size: 1rem;\n    color: yellow;\n  }\n\n  & > img {\n    height: 18px;\n    margin-right: 6px;\n    filter: saturate(0) brightness(500%);\n\n    &:hover {\n      filter: none;\n    }\n  }\n"]);return M=function(){return e},e}function R(){var e=Object(v.a)(["\n  margin-top: 4em;\n"]);return R=function(){return e},e}var H=x.a.div(R()),T=x.a.picture(M()),z=t(39),J=t(55);function L(e){var n=e.children,t=Object(J.a)(e,["children"]);return Object(i.jsx)(A.a.div,Object(z.a)(Object(z.a)({whileInView:"show",viewport:{once:!0},variants:{show:{opacity:1,x:0,transition:{staggerChildren:.5}},hide:{opacity:0,x:128}},initial:"hide"},t),{},{children:n}))}function B(){var e=Object(v.a)(["\n  @media (max-width: 600px) {4\n    padding-top: 20vh;\n  }\n"]);return B=function(){return e},e}function D(){var e=Object(v.a)(["\n  border: 1px solid yellow;\n  padding: 4px 12px;\n  margin: 8px 0;\n  border-radius: 4px;\n  font-size: 1em;\n  line-height: 1em;\n  display: block;\n  font-weight: 700;\n  transition: 0.2s;\n  &:hover {\n    background-color: black;\n    text-decoration: none;\n    box-shadow: 4px 4px yellow;\n    color: white;\n  }\n"]);return D=function(){return e},e}function G(){var e=Object(v.a)(["\n  width: 24px;\n  height: 24px;\n  margin-right: 18px;\n  border-radius: 50%;\n"]);return G=function(){return e},e}var W=x.a.img(G()),F=Object(x.a)(A.a.a)(D()),U={show:{opacity:1,x:0,transition:{staggerChildren:.25}},hide:{opacity:0,x:128}},X={show:{opacity:1,x:0},hide:{opacity:0,x:128}},Y={duration:1},V=Object(x.a)(L)(B()),_=function(e){Object(m.a)(t,e);var n=Object(d.a)(t);function t(){return Object(c.a)(this,t),n.apply(this,arguments)}return Object(l.a)(t,[{key:"componentDidMount",value:function(){document.title="Keenplify | About"}},{key:"render",value:function(){return Object(i.jsxs)(L,{className:"container",variants:{show:{opacity:1,x:0,transition:{staggerChildren:.5}},hide:{opacity:0,x:128}},initial:"hide",animate:"show",children:[Object(i.jsxs)(L,{className:"row mt-5",style:{minHeight:"100vh"},id:"info",variants:U,transition:{duration:.5},children:[Object(i.jsxs)(L,{as:V,className:"col-md-6 my-auto",variants:U,children:[Object(i.jsx)(A.a.h1,{variants:X,transition:{duration:1},children:"WHOS KEENPLIFY"}),Object(i.jsxs)(A.a.p,{variants:X,transition:Y,className:"text-justify",children:[Object(i.jsx)("b",{children:"Aczell Bien Florencio"})," is a web developer from Quezon City, Philippines. Since his childhood, he had experience with local and cloud icafe solutions, PXE diskless/network boot systems, Windows installation and optimization. As for the present, he is studying scalable technologies such as React, React Native and NodeJS. Fueled by his unending thirst for development, he is eager to work, learn and have fun with forever changing technologies. He uploads videos in his Youtube account once in a blue moon."]})]}),Object(i.jsx)("div",{className:"col-md-1"}),Object(i.jsxs)(L,{as:V,variants:U,transition:Y,className:"col-md-5 my-auto",children:[Object(i.jsx)(A.a.h1,{variants:X,transition:{duration:1},children:"SOCIAL MEDIAS"}),Object(i.jsxs)(F,{variants:X,transition:Y,href:"https://www.linkedin.com/in/aczell-bien-florencio-5bb7291a1",target:"_blank",rel:"noreferrer",children:[Object(i.jsx)(W,{src:"https://copyblogger.com/cdn-origin/images/linkedin.png",alt:"LinkedIn social"}),"(LinkedIn) Aczell Bien Florencio"]}),Object(i.jsxs)(F,{variants:X,transition:Y,href:"https://facebook.com/keenplifyy",target:"_blank",rel:"noreferrer",children:[Object(i.jsx)(W,{src:"https://index.tnwcdn.com/images/52e20473e04901dcbcea0eaa2e6a773390e5772a.png",alt:"Facebook social"}),"(Facebook) Keenplify"]}),Object(i.jsxs)(F,{href:"https://youtube.com/keenplify",target:"_blank",rel:"noreferrer",variants:X,transition:Y,children:[Object(i.jsx)(W,{src:"https://www.shareicon.net/data/256x256/2015/08/29/92756_play_607x607.png",alt:"Youtube social"}),"(Youtube) Keenplify"]}),Object(i.jsxs)(F,{href:"https://www.freecodecamp.org/keenplify",target:"_blank",rel:"noreferrer",variants:X,transition:Y,children:[Object(i.jsx)(W,{src:"https://i.ibb.co/X42HYpj/fcc512.png",alt:"Freecodecamp social"}),"(FreeCodeCamp) Keenplify"]}),Object(i.jsxs)(F,{href:"https://gamebanana.com/members/1558446",target:"_blank",rel:"noreferrer",variants:X,transition:Y,children:[Object(i.jsx)(W,{src:"https://i.ibb.co/YP4Jmm0/gb.png",alt:"Gamebanana social"}),"(Gamebanana) Keenplify"]})]})]}),Object(i.jsx)("h1",{children:"SKILLS AND EXPERIENCES"}),Object(i.jsx)(L,{className:"row",variants:U,transition:{duration:.5},style:{marginBottom:"8em"},children:P.map((function(e){return Object(i.jsx)(L,{variants:X,transition:Y,className:"col-md-6 my-2",children:Object(i.jsxs)(C.a,{bg:"dark",children:[Object(i.jsx)(C.a.Header,{className:"font-weight-bold",style:{color:"yellow"},children:e.name}),Object(i.jsx)(C.a.Body,{children:e.desc})]})})}))}),Object(i.jsx)(H,{})]})}}]),t}(a.Component),Z=t(50);function K(){var e=Object(v.a)(['\n  position: fixed;\n  z-index: -1;\n  left: 0;\n  top: -60px;\n  pointer-events: none;\n  overflow: hidden;\n  height: calc(100vh + 120px);\n  width: 100vw;\n  &:before {\n    content: "";\n    z-index: 1;\n    width: 300vw;\n    height: 300vh;\n    position: fixed;\n    top: -100vh;\n    left: -100vw;\n    transition: 0.5s;\n  }\n\n  iframe {\n    width: 100%;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n']);return K=function(){return e},e}var q=x.a.div(K()),Q=function(e){Object(m.a)(t,e);var n=Object(d.a)(t);function t(e){var i;return Object(c.a)(this,t),(i=n.call(this,e)).state={isMobile:/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)},i}return Object(l.a)(t,[{key:"render",value:function(){return this.state.isMobile?Object(i.jsx)(q,{children:Object(i.jsx)("img",{style:{opacity:".5"},alt:"Background",src:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/131f4324-b78b-438a-a277-b2a07445e47f/dwp0y1-4e71bec2-05d6-462d-a310-8f3ad76e898a.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMTMxZjQzMjQtYjc4Yi00MzhhLWEyNzctYjJhMDc0NDVlNDdmXC9kd3AweTEtNGU3MWJlYzItMDVkNi00NjJkLWEzMTAtOGYzYWQ3NmU4OThhLmpwZyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl19.jpmgJVpTmVqkM--lV2ZLRhGPo77egEOirZ5r8bSjgCY"})}):Object(i.jsx)(q,{className:"1"===this.props.strongoverlay?"overlay-strong":"overlay",children:Object(i.jsx)(Z.a,{videoId:"hFaCqkBP7CI",id:"YTBG",opts:{height:window.screen.height,width:window.screen.width,playerVars:{autoplay:1,controls:0,mute:1,loop:1,disablekb:1,playlist:"hFaCqkBP7CI",playsinline:1}}})})}}]),t}(a.Component),$=t(38),ee=(t(98),t(53)),ne=t(23),te=[{title:"CSGO HUD Plugin",image:"https://screenshots.gamebanana.com/img/ss/wips/5bb76bd62e577.jpg",year:2017,desc:"\n                        The plugin gives Counter Strike 1.6 (CS1.6) a full port of Counter Strike Government Offensive (CSGO)'s\n                        new Panorama ingame HUD using AMXMODX and Metadrawer.\n                    ",languages:[{name:"AMXMODX",img:"https://miro.medium.com/max/2476/1*GwOUMMMXKde8kr1i2kDByw.png"},{name:"Metahook",img:"https://i.ibb.co/gwf8kX3/hook.png"}],links:[{name:"Gamebanana",link:"https://gamebanana.com/wips/49236"}],icon:Object(i.jsx)(ee.a,{})},{title:"Streamland",image:"https://i.ibb.co/cJypqkx/streamland.png",year:2018,desc:"\n                        A Roblox game heavily featuring house building and active tycoon-like streaming.\n                        Join the community of live streamers where you can grow your streaming dreams and build your dream house using your stream credits!\n                    ",languages:[{name:"Roblox Studio",img:"https://upload.wikimedia.org/wikipedia/commons/b/b5/ROBLOX_Studio_icon.png"},{name:"Lua",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Lua-Logo.svg/1200px-Lua-Logo.svg.png"}],links:[{name:"Roblox",link:"https://www.roblox.com/games/5218364514/"}],icon:Object(i.jsx)(ne.a,{})},{title:"Lurkr",image:"https://i.ibb.co/rG1DSSb/tset.png",year:2020,desc:"\n                        Lurkr is keenplify's first experiment on MERN stack. The web app's vision is to create an environment\n                        where unnoticed content creators can post their contents/livestreams and get promoted not based\n                        on their popularity.\n                    ",languages:[{name:"NodeJS",img:"https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"},{name:"Create-React-App",img:"https://miro.medium.com/max/500/1*cPh7ujRIfcHAy4kW2ADGOw.png"},{name:"Express",img:"https://i.ibb.co/mSCzBHf/ex.png"},{name:"PassportJS",img:"https://miro.medium.com/max/400/1*YI1tt4kGzvea-v4dAhZ90w.png"},{name:"IGDB",img:"https://images.opencollective.com/jakecattrall/2036487/avatar/256.png"}],icon:Object(i.jsx)(ne.d,{})},{title:"Takoyaki & Shawarma",image:"https://i.ibb.co/12GsvHK/tns.png",year:2020,desc:"\n                        It is a website that was made as a final project on his Web Systems class (WS101).\n                        His tasks for this website is the PHP logics, basic REST endpoints and the database design.\n                    ",languages:[{name:"PHP",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Webysther_20160423_-_Elephpant.svg/2560px-Webysther_20160423_-_Elephpant.svg.png"},{name:"XAMPP",img:"https://i.ibb.co/kHF6JNJ/58482973cef1014c0b5e49fd.png"},{name:"MariaDB",img:"https://crestsolution.com/wp-content/uploads/2021/07/MariaDB-2.png"}],links:[{name:"Github",link:"https://github.com/keenplify/tns-ws101"},{name:"Static",link:"https://keenplify.github.io/tns-ws101"}],icon:Object(i.jsx)(ne.c,{})},{title:"QR Hang-Tag",image:"https://i.ibb.co/xfJm3Pw/hangtag.png",year:2021,desc:"\n                        Another web experiment of kin, it uses react-qr-reader to read and process QR codes,\n                        html2canvas to create printable React components. The app's goal is to turn clothing\n                        hang tags into a discount voucher, thus making hang tags reusable. \n                    ",languages:[{name:"NodeJS",img:"https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"},{name:"Create-React-App",img:"https://miro.medium.com/max/500/1*cPh7ujRIfcHAy4kW2ADGOw.png"},{name:"Express",img:"https://i.ibb.co/mSCzBHf/ex.png"},{name:"PassportJS",img:"https://miro.medium.com/max/400/1*YI1tt4kGzvea-v4dAhZ90w.png"}],links:[{name:"Github",link:"https://github.com/keenplify/qr-hang-tag"}],icon:Object(i.jsx)(ne.d,{})},{title:"SMS-QR",image:"https://i.ibb.co/Rz4BrzX/Untitled.png",year:2021,desc:"\n                        It is a commissioned mobile app project that was made in collaboration with @avidianity. The app's goal is\n                        to create attendance system that is using QR as the means of verifying attendance, then it sends\n                        SMS to authorized personnels' phone number.\n                    ",languages:[{name:"NodeJS",img:"https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"},{name:"Typescript",img:"https://i.ibb.co/ZTXf1p9/ts.png"},{name:"React Native",img:"https://miro.medium.com/max/500/1*cPh7ujRIfcHAy4kW2ADGOw.png"},{name:"Express",img:"https://i.ibb.co/mSCzBHf/ex.png"},{name:"Expo",img:"https://i.ibb.co/6tNnNBJ/Expo-1324888717852364845.png"},{name:"Semaphore",img:"https://i.ibb.co/34yZ0P1/semaphore-icon.png"}],links:[{name:"Github",link:"https://github.com/avidianity/sms-qr"},{name:"@avidianity",link:"https://github.com/avidianity"}],icon:Object(i.jsx)(ne.b,{})},{title:"Public Market Mobile App",image:"https://i.ibb.co/D55nyTB/Artboard-1.png",year:2021,desc:"\n                    Public Market Mobile App (PMMA) is another commissioned mobile app that utilizes React Native and Nativebase\n                    to provide service to online buyers and sellers. It's main goal is to become the middleman between online\n                    selling transactions and is inspired by the likes of Shopee and Lazada. It's server is hosted in Heroku and the\n                    images is stored at Amazon S3.\n                ",languages:[{name:"NodeJS",img:"https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"},{name:"Typescript",img:"https://i.ibb.co/ZTXf1p9/ts.png"},{name:"React Native",img:"https://miro.medium.com/max/500/1*cPh7ujRIfcHAy4kW2ADGOw.png"},{name:"Expo",img:"https://i.ibb.co/6tNnNBJ/Expo-1324888717852364845.png"},{name:"Heroku",img:"https://www.nicepng.com/png/full/223-2233246_heroku-logo-salesforce-heroku.png"},{name:"Amazon S3",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Amazon-S3-Logo.svg/1200px-Amazon-S3-Logo.svg.png"}],links:[{name:"Github",link:"https://github.com/keenplify/public-market-mobile-app"},{name:"APK Releases",link:"https://drive.google.com/drive/folders/15awSLZhtWikCleFPd8RUUo52mhSHcakU?usp=sharing"}],icon:Object(i.jsx)(ne.b,{})},{title:"Mobile Parking App",image:"https://i.ibb.co/x72cTWB/parkingapp.png",year:2021,desc:"\n            A simple commissioned mobile app that is built to offer digitalized parking system. It uses Firebase as its backend and\n            React Native / Expo as its mobile framework.\n          ",languages:[{name:"NodeJS",img:"https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"},{name:"React Native",img:"https://miro.medium.com/max/500/1*cPh7ujRIfcHAy4kW2ADGOw.png"},{name:"Expo",img:"https://i.ibb.co/6tNnNBJ/Expo-1324888717852364845.png"},{name:"Firebase",img:"https://i.ibb.co/my1gTj3/5847f40ecef1014c0b5e488a.png"}],links:[{name:"Github",link:"https://github.com/keenplify/public-market-mobile-app"},{name:"APK Releases",link:"https://drive.google.com/drive/folders/15awSLZhtWikCleFPd8RUUo52mhSHcakU?usp=sharing"}],icon:Object(i.jsx)(ne.b,{})}].reverse();function ie(){return Object(i.jsxs)(p.a,{children:[Object(i.jsx)($.VerticalTimeline,{children:te.map((function(e,n){var t;return Object(i.jsxs)($.VerticalTimelineElement,{className:"vertical-timeline-element--work",contentStyle:{background:"black",color:"#fff",border:"1px solid yellow"},contentArrowStyle:{borderRight:"7px solid yellow"},date:e.year,iconStyle:{background:"black",color:"yellow"},icon:e.icon,children:[Object(i.jsx)("img",{src:e.image,className:"w-100 rounded",alt:"".concat(e.title," preview")}),Object(i.jsx)("h3",{className:"vertical-timeline-element-title",style:{color:"yellow"},children:e.title}),Object(i.jsx)("h4",{className:"vertical-timeline-element-subtitle",children:e.languages.map((function(e){return Object(i.jsx)(T,{alt:e.name,children:Object(i.jsx)("img",{src:e.img,alt:e.name})})}))}),Object(i.jsxs)("div",{children:[Object(i.jsx)("span",{children:e.desc}),Object(i.jsx)("div",{className:"btn-group w-100 mt-3",role:"group","aria-label":"Basic example",children:null===(t=e.links)||void 0===t?void 0:t.map((function(e,n){return Object(i.jsx)("a",{className:"btn ".concat(0==n?"btn-warning":"btn-dark"),href:e.link,children:e.name},n)}))})]})]},n)}))}),Object(i.jsx)(H,{})]})}t(99),t(100);var ae=Object(h.f)(function(e){Object(m.a)(t,e);var n=Object(d.a)(t);function t(e){var i;return Object(c.a)(this,t),(i=n.call(this,e)).state={strongoverlay:"#/"===window.location.hash?"0":"1"},i}return Object(l.a)(t,[{key:"componentWillMount",value:function(){var e=this;this.unlisten=this.props.history.listen((function(n,t){e.setState({strongoverlay:"#/"===n.hash?"0":"1"})}))}},{key:"componentWillUnmount",value:function(){this.unlisten()}},{key:"render",value:function(){return Object(i.jsx)(b.b,{basename:"/",children:Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(j,{}),Object(i.jsx)(p.a,{fluid:!0,style:{overflow:"hidden"},children:Object(i.jsxs)(h.c,{atEnter:{opacity:0},atLeave:{opacity:0},atActive:{opacity:1},className:"switch-wrapper",children:[Object(i.jsx)(h.a,{path:"/about",component:_}),Object(i.jsx)(h.a,{path:"/projects",component:ie}),Object(i.jsx)(h.a,{path:"*",component:I})]})}),Object(i.jsx)(Q,{strongoverlay:this.state.strongoverlay})]})})}}]),t}(a.Component)),oe=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,108)).then((function(n){var t=n.getCLS,i=n.getFID,a=n.getFCP,o=n.getLCP,s=n.getTTFB;t(e),i(e),a(e),o(e),s(e)}))},se=t(54),re=t.n(se);r.a.render(Object(i.jsxs)(o.a.StrictMode,{children:[Object(i.jsx)(b.a,{children:Object(i.jsx)(ae,{})}),Object(i.jsx)(re.a,{pageId:"101047905083084",appId:"4032537310109611",themeColor:"#ff7e29"})]}),document.getElementById("root")),oe()}},[[102,1,2]]]);
//# sourceMappingURL=main.0ef16163.chunk.js.map