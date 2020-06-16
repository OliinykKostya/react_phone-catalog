(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],{20:function(e,a,t){e.exports=t(32)},25:function(e,a,t){},32:function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),s=t(17),r=t.n(s),l=t(3),m=(t(25),t(1)),o=function(){return n.a.createElement("header",{className:"header"},n.a.createElement("div",{className:"header__nav--log--box"},n.a.createElement("div",{className:"header__logo"},n.a.createElement("img",{src:"../img/LOGO.svg",alt:"logo"})),n.a.createElement("nav",{className:"nav header__nav"},n.a.createElement("ul",{className:"nav__list"},n.a.createElement("li",{className:"nav__item"},n.a.createElement(l.b,{to:"/HomePage",activeClassName:"nav__link--active",className:"nav__link"},"home")),n.a.createElement("li",{className:"nav__item"},n.a.createElement(l.b,{to:"/PhonesPage",activeClassName:"nav__link--active",className:"nav__link"},"phones")),n.a.createElement("li",{className:"nav__item"},n.a.createElement(l.b,{to:"/TabletsPage",activeClassName:"nav__link--active",className:"nav__link"},"tablets")),n.a.createElement("li",{className:"nav__item"},n.a.createElement(l.b,{to:"/AccessoriesPage",activeClassName:"nav__link--active",className:"nav__link"},"accessories"))))),n.a.createElement("div",{className:"header__fav--cart--box"},n.a.createElement("div",{className:"header__favorites"},n.a.createElement(l.b,{to:"/favorites",className:"header__favorites--link",activeClassName:"header__favorites--link--active"},n.a.createElement("img",{src:"../img/icons/Favourites.svg",alt:"logo",className:"header__favorites--icon"}))),n.a.createElement("div",{className:"header__cart"},n.a.createElement(l.b,{to:"/cart",className:"header__cart--link",activeClassName:"header__cart--link--active"},n.a.createElement("img",{src:"../img/icons/Cart.svg",alt:"cart",className:"header__cart--icon"})))))},i=function(){return n.a.createElement("footer",{className:"footer"},n.a.createElement("div",{className:"footer__box home__box"},n.a.createElement("div",{className:"footer__logo"},n.a.createElement("img",{src:"../img/LOGO.svg",alt:"logo"})),n.a.createElement("nav",{className:"footer__nav"},n.a.createElement("ul",{className:"footer__nav__list"},n.a.createElement("li",{className:"footer__nav__item"},n.a.createElement("a",{href:"https://github.com/",className:"nav__link"}," github")),n.a.createElement("li",{className:"footer__nav__item"},n.a.createElement("a",{href:"https://github.com/",className:"nav__link"}," github")),n.a.createElement("li",{className:"footer__nav__item"},n.a.createElement("a",{href:"https://github.com/",className:"nav__link"},"github")))),n.a.createElement("div",{className:"footer__back"},n.a.createElement("p",{className:"footer__back--p"},"back to top"),n.a.createElement("button",{className:"footer__back--button",type:"button"},n.a.createElement("img",{src:"../img/icons/VectorTop.svg",alt:"arrowToTop"})))))},_=t(7),p=function(){var e=Object(c.useState)(0),a=Object(_.a)(e,2),t=a[0],s=a[1],r=[1,2,3,4];return n.a.createElement("div",{className:"home__slider--box"},n.a.createElement("button",{type:"button",className:"home__goLeft",onClick:function(){s(0===t?-100*(r.length-1):t+100)}},n.a.createElement("img",{src:"/img/icons/Vleft.svg",alt:"right arrow"})),n.a.createElement("div",{className:"home__slider"},r.map((function(e){return n.a.createElement("div",{className:"home__slide",style:{transform:"translateX(".concat(t,"%)")}},n.a.createElement("img",{src:"./img/".concat(e,".jpg"),className:"home__slider_img",alt:"phone img"}))}))),n.a.createElement("button",{type:"button",className:"home__goRight",onClick:function(){t===-100*(r.length-1)?s(0):s(t-100)}},n.a.createElement("img",{src:"./img/icons/Vright.svg",className:"test",alt:"right arrow"})))},E=t(13),u=t.n(E),d=function(e){var a=e.title,t=e.item,c=t.price,s=t.imageUrl,r=t.name,l=t.discount,m=t.screen,o=t.capacity,i=t.ram;return n.a.createElement("div",{className:"product__card--container product__card"},n.a.createElement("article",{className:"product__card"},n.a.createElement("div",{className:"product__card--box"},n.a.createElement("div",{className:"product__card__img--box"},n.a.createElement("img",{src:s,alt:"phone",className:"product__card__img border--hover"})),n.a.createElement("p",{className:"product__card--phone--model"},r),n.a.createElement("div",{className:"product__card__price"},a?n.a.createElement("p",{className:"product__card__price--new"},"$",c):n.a.createElement(n.a.Fragment,null,n.a.createElement("p",{className:"product__card__price--new"},"$",c-c*l/100),n.a.createElement("p",{className:"product__card__price--old"},"$",c))),n.a.createElement("div",{className:"product__card__technical__specifications technical__specifications"},n.a.createElement("div",{className:"technical__specifications--box"},n.a.createElement("p",{className:"technical__specifications--name"},"Screen"),n.a.createElement("p",{className:"technical__specifications--spec"},m)),n.a.createElement("div",{className:"technical__specifications--box"},n.a.createElement("p",{className:"technical__specifications--name"},"Capacity"),n.a.createElement("p",{className:"technical__specifications--spec"},o)),n.a.createElement("div",{className:"technical__specifications--box"},n.a.createElement("p",{className:"technical__specifications--name"},"Ram"),n.a.createElement("p",{className:"technical__specifications--spec"},i))),n.a.createElement("div",{className:"product__card__button"},n.a.createElement("button",{className:"product__card__button--add",type:"button"},"Add to cart"),n.a.createElement("button",{className:"product__card__button--favorite",type:"button"},n.a.createElement("img",{src:"../img/icons/Favourites.svg",alt:"cart",className:"header__cart--icon"}))))))},g=t(14),h=t.n(g),v=t(19),N=function(){var e=Object(v.a)(h.a.mark((function e(){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mate-academy.github.io/react_phone-catalog/api/products.json").then((function(e){return e.json()}));case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(e){var a=e.title,t=Object(c.useState)(0),s=Object(_.a)(t,2),r=s[0],l=s[1],m=Object(c.useState)([]),o=Object(_.a)(m,2),i=o[0],p=o[1],E=Object(c.useState)([]),g=Object(_.a)(E,2),h=g[0],v=g[1],b=Object(c.useState)(!1),f=Object(_.a)(b,2),y=f[0],C=f[1],S=Object(c.useState)(!0),k=Object(_.a)(S,2),B=k[0],x=k[1],P="Hot prices"===a?h.length:i.length;Object(c.useEffect)((function(){N().then((function(e){p(e.sort((function(e,a){return e-a}))),v(e.filter((function(e){return e.discount})))}))}),[]);return n.a.createElement("div",{className:"prices prices__hot"},n.a.createElement("div",{className:"prices__nav"},n.a.createElement("h1",{className:"prices__h1"},a),n.a.createElement("div",{className:"prices__nav--button"},n.a.createElement("button",{type:"button",className:u()("prices__goLeft",{"prices__goLeft--disabled":0===r}),onClick:function(){0!==r?(C(!1),l(r+288)):x(!0)},disabled:B},n.a.createElement("img",{src:"../img/icons/Vleft.svg",alt:"goLeft"})),n.a.createElement("button",{type:"button",className:u()("prices__goRight",{"prices__goRight--disabled":-288*(P-4)===r}),onClick:function(){-288*(P-4)!==r?(x(!1),l(r-288)):C(!0)},disabled:y},n.a.createElement("img",{src:"../img/icons/Vright.svg",alt:"goRight"})))),n.a.createElement("div",{className:"prices__hot--list--box"},n.a.createElement("div",{className:"prices__hot--list",style:{transform:"translateX(".concat(r,"px)")}},"Hot prices"===a?h.map((function(e){return n.a.createElement(d,{item:e})})):i.map((function(e){return n.a.createElement(d,{item:e,title:a})})))))},f=function(){return n.a.createElement("div",{className:"ShopByCategory__box"},n.a.createElement("div",{className:"ShopByCategory__h1"},n.a.createElement("h1",{className:"ShopByCategory__title"},"Shop by category")),n.a.createElement("div",{className:"ShopByCategory__sections--box"},n.a.createElement("div",{className:"ShopByCategory__mobile"},n.a.createElement(l.b,{to:"/PhonesPage"},n.a.createElement("div",{className:"ShopByCategory__mobile--link"},n.a.createElement("div",{className:"ShopByCategory__mobile--img"}))),n.a.createElement("div",{className:"ShopByCategory__mobile--info"},n.a.createElement("p",{className:"ShopByCategory__mobile--h2"},"Mobile phones"),n.a.createElement("p",{className:"ShopByCategory__mobile--number"},"95 models"))),n.a.createElement("div",{className:"ShopByCategory__tablet"},n.a.createElement(l.b,{to:"/TabletsPage"},n.a.createElement("div",{className:"ShopByCategory__tablet--link"},n.a.createElement("div",{className:"ShopByCategory__tablet--img"}))),n.a.createElement("div",{className:"ShopByCategory__tablet--info"},n.a.createElement("p",{className:"ShopByCategory__tablet--h2"},"Tablets"),n.a.createElement("p",{className:"ShopByCategory__tablet--number"},"0 models"))),n.a.createElement("div",{className:"ShopByCategory__accessory"},n.a.createElement(l.b,{to:"/AccessoriesPage"},n.a.createElement("div",{className:"ShopByCategory__accessory--link"},n.a.createElement("div",{className:"ShopByCategory__accessory--img"}))),n.a.createElement("div",{className:"ShopByCategory__accessory--info"},n.a.createElement("p",{className:"ShopByCategory__accessory--h2"},"Accessory"),n.a.createElement("p",{className:"ShopByCategory__accessory--number"},"0 models")))))},y=function(){return n.a.createElement("div",{className:"home"},n.a.createElement("div",{className:"home__box"},n.a.createElement(p,null),n.a.createElement(b,{title:"Hot prices"}),n.a.createElement(f,null),n.a.createElement(b,{title:"Brand new models"})))},C=function(){return n.a.createElement(n.a.Fragment,null,"PhonesPage")},S=function(){return n.a.createElement(n.a.Fragment,null,"TabletsPage")},k=function(){return n.a.createElement(n.a.Fragment,null,"AccessoriesPage")},B=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(o,null),n.a.createElement("main",null,n.a.createElement(m.d,null,n.a.createElement(m.b,{path:"/HomePage",exact:!0,component:y}),n.a.createElement(m.b,{path:"/PhonesPage",exact:!0,component:C}),n.a.createElement(m.b,{path:"/TabletsPage",exact:!0,component:S}),n.a.createElement(m.b,{path:"/AccessoriesPage",exact:!0,component:k}),n.a.createElement(m.a,{from:"/",to:"/HomePage"}))),n.a.createElement(i,null))};r.a.render(n.a.createElement(l.a,null,n.a.createElement(B,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.bedcd52f.chunk.js.map