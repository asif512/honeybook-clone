"use strict";(self["webpackChunkhoneybook_clone"]=self["webpackChunkhoneybook_clone"]||[]).push([[783],{1685:function(t,e,s){s.r(e),s.d(e,{default:function(){return h}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"blog-view"},[e("div",{staticClass:"blog-section"},[e("div",{staticClass:"blog-wrapper"},[e("div",{staticClass:"blog-tabs"},t._l(t.blogs,(function(s,i){return e("div",{key:i,staticClass:"blog-tab",class:{seleted:s.type===t.selectedBlog.type},on:{click:function(e){return t.handleSeletedPost(s)}}},[e("span",{staticClass:"blog-type"},[t._v(t._s(s.type))])])})),0),e("div",{staticClass:"blog-content"},[e("div",{staticClass:"media-element"},[e("router-link",{attrs:{to:`/blog/${t.selectedBlog.posts[0].href}`}},[e("img",{staticClass:"image",attrs:{src:t.selectedBlog.posts[0].image,alt:"image"}})])],1),e("div",{staticClass:"posts-list"},t._l(t.selectedBlog.posts,(function(s,i){return e("div",{key:i,staticClass:"post-list"},[e("img",{staticClass:"post-image",attrs:{src:s.image,alt:"image"}}),e("div",{staticClass:"info"},[e("h2",{staticClass:"title"},[t._v(t._s(s.title))]),e("router-link",{staticClass:"read-more",attrs:{to:`/blog/${s.href}`}},[t._v("Read more")])],1)])})),0)])])]),e("div",{staticClass:"section container"},[t._m(0),e("div",{staticClass:"content-info"},[e("h2",{staticClass:"title"},[t._v(" 86% of clients hire the business that responds first ")]),e("h4",{staticClass:"sub-title"},[t._v("Want more insights? This report covers:")]),e("div",{staticClass:"list-items"},t._l(3,(function(s){return e("div",{key:s,staticClass:"list-item"},[e("div",{staticClass:"icon-wrapper"},[e("b-icon",{staticClass:"icon",attrs:{icon:"arrow-right-short"}})],1),e("span",{staticClass:"label"},[t._v("The best ways to win and wow clients")])])})),0),e("b-button",{staticClass:"report-btn"},[t._v("Get the report")])],1)]),e("div",{staticClass:"section container learn-more"},[e("div",{staticClass:"content-info"},[e("h2",{staticClass:"title"},[t._v(" Read our report on the state of independent businesses in the U.S. ")]),e("p",{staticClass:"sub-title"},[t._v(" We gathered data from more than 2,500 U.S. adults to understand how attitudes toward independent work have changed. What we learned might surprise you. ")]),e("b-button",{staticClass:"report-btn"},[t._v("learn more")])],1),t._m(1)]),e("div",{staticClass:"slider-section container"},[t._m(2),e("slider-items")],1),e("div",{staticClass:"videos-wrapper container"},[t._m(3),e("div",{staticClass:"videos"},[e("div",{staticClass:"video-preview"},[e("iframe",{attrs:{width:"580",height:"350",src:t.seletedVideo.src,title:t.seletedVideo.title,frameborder:"0",allowfullscreen:""}})]),e("div",{staticClass:"videos-list"},t._l(t.videos,(function(s,i){return e("div",{key:i,staticClass:"video-list"},[e("iframe",{attrs:{width:"100",height:"100",src:s.src,title:s.title}}),e("h2",{staticClass:"title",on:{click:function(e){return t.handleSelect(s)}}},[t._v(" "+t._s(s.title)+" ")])])})),0)])]),e("div",{staticClass:"news-letter"},[e("div",{staticClass:"content container"},[e("h2",{staticClass:"title"},[t._v("Join our newsletter")]),e("h4",{staticClass:"sub-title"},[t._v(" Subscribe to get the latest tips for independent business owners and product updates right to your inbox. ")]),e("div",{staticClass:"form-wrapper"},[e("input",{staticClass:"input-field",attrs:{type:"text",placeholder:"Enter your email address"}}),e("b-button",{staticClass:"subssribe-btn"},[t._v("Subscribe")])],1)])]),e("div",{staticClass:"social-posts container"},[t._m(4),e("div",{staticClass:"posts-wrapper"},t._l(4,(function(t){return e("div",{key:t,staticClass:"social-post"})})),0)])])},a=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"element-media"},[e("img",{staticClass:"image",attrs:{src:"https://www.honeybook.com/blog/wp-content/webp-express/webp-images/uploads/2023/03/Knowyourclientflowcover-777x1024.png.webp",alt:"image"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"element-media"},[e("img",{staticClass:"image",attrs:{src:"https://www.honeybook.com/blog/wp-content/webp-express/webp-images/uploads/2023/03/Blog-Header-NEW-BRAND-1-1536x1189.png.webp",alt:"image"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"menu"},[e("h2",{staticClass:"title"},[t._v("Our editors picks")]),e("div",{staticClass:"line"})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"menu"},[e("h2",{staticClass:"title"},[t._v("Watch our videos")]),e("div",{staticClass:"line"})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"menu"},[e("h2",{staticClass:"title"},[t._v("Get social")]),e("div",{staticClass:"line"})])}],o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"slider-wrapper"},[e("div",{staticClass:"btn previous",class:{disablesd:t.isDisablesPrevioustButton},on:{click:t.handlePrevious}},[e("b-icon",{staticClass:"icon",attrs:{icon:"caret-left-fill"}})],1),e("div",{staticClass:"slider-items"},t._l(t.items,(function(s,i){return e("div",{key:i,staticClass:"slider-item",style:t.getTranslate},[e("img",{staticClass:"element-media",attrs:{src:s.image,alt:"image"}}),e("h2",{staticClass:"title"},[t._v(t._s(s.title))])])})),0),e("div",{staticClass:"btn next",class:{disablesd:t.isDisablesNextButton},on:{click:t.handleNext}},[e("b-icon",{staticClass:"icon",attrs:{icon:"caret-right-fill"}})],1)])},l=[],n={name:"SliderItems",data(){return{items:[{image:"https://www.honeybook.com/blog/wp-content/webp-express/webp-images/uploads/2023/01/Feature-Images-16-1024x793.jpg.webp",title:"A new look for HoneyBook: why we rebranded"},{image:"https://www.honeybook.com/blog/wp-content/webp-express/webp-images/uploads/2023/01/Feature-Images-16-1024x793.jpg.webp",title:"25 powerful mission statement examples that make good companies great"},{image:"https://www.honeybook.com/blog/wp-content/webp-express/webp-images/uploads/2023/01/Feature-Images-16-1024x793.jpg.webp",title:"A new look for HoneyBook: why we rebranded"},{image:"https://www.honeybook.com/blog/wp-content/webp-express/webp-images/uploads/2023/01/Feature-Images-16-1024x793.jpg.webp",title:"A new look for HoneyBook: why we rebranded"},{image:"https://www.honeybook.com/blog/wp-content/webp-express/webp-images/uploads/2023/02/client-welcome-packet-feature-1024x793.jpg.webp",title:"How to use a welcome packet to successfully onboard new clients "},{image:"https://www.honeybook.com/blog/wp-content/webp-express/webp-images/uploads/2021/10/brochure-templates-feature-1024x793.jpg.webp",title:"Customize these free brochure templates to send to clients "},{image:"https://www.honeybook.com/blog/wp-content/webp-express/webp-images/uploads/2021/10/brochure-templates-feature-1024x793.jpg.webp",title:"How to remind someone to pay you: 7 tips & examples "},{image:"https://www.honeybook.com/blog/wp-content/webp-express/webp-images/uploads/2023/02/client-welcome-packet-feature-1024x793.jpg.webp",title:"How to leverage AI to get unstuck"},{image:"https://www.honeybook.com/blog/wp-content/webp-express/webp-images/uploads/2023/02/client-welcome-packet-feature-1024x793.jpg.webp",title:"A new look for HoneyBook: why we rebranded"},{image:"https://www.honeybook.com/blog/wp-content/webp-express/webp-images/uploads/2023/02/client-welcome-packet-feature-1024x793.jpg.webp",title:"A new look for HoneyBook: why we rebranded"}],translate:0,initialTranslate:255}},computed:{getTranslate(){return`transform: translateX(${this.translate}px;`},isDisablesNextButton(){return 0===this.translate},isDisablesPrevioustButton(){return this.translate===-this.initialTranslate*(this.items.length-4)}},methods:{handlePrevious(){let t=this.initialTranslate*(this.items.length-1-4);t>=-1*this.translate&&(this.translate=this.translate-this.initialTranslate)},handleNext(){let t=this.translate+this.initialTranslate;t<=0&&(this.translate=t)}}},r=n,c=s(1001),p=(0,c.Z)(r,o,l,!1,null,"681c564a",null),d=p.exports,w=s(1603),u={name:"BlogView",components:{"slider-items":d},data(){return{blogs:[],selectedBlog:{},seletedVideo:{},videos:[{title:"Sales Strategies for Independent Business Owners with Erika Tebbens",src:"https://www.youtube.com/embed/yQAaFiYccDE"},{title:"Efficiency & Streamlining Your Business Processes - October 2022 Global Virtual TuesdaysTogether",src:"https://www.youtube.com/embed/9R-tk4D1aNo"},{title:"HoneyBook HotSeat: Bring Your Process to Life with Smart Files",src:"https://www.youtube.com/embed/yQAaFiYccDE"},{title:"Efficiency & Streamlining Your Business Processes - October 2022 Global Virtual TuesdaysTogether",src:"https://www.youtube.com/embed/yQAaFiYccDE"},{title:"Sales Strategies for Independent Business Owners with Erika Tebbens",src:"https://www.youtube.com/embed/yQAaFiYccDE"},{title:"Efficiency & Streamlining Your Business Processes - October 2022 Global Virtual TuesdaysTogether",src:"https://www.youtube.com/embed/yQAaFiYccDE"}]}},created(){this.blogs=w.Z,this.selectedBlog=this.blogs[0],this.seletedVideo=this.videos[0]},methods:{handleSeletedPost(t){this.selectedBlog=t},handleSelect(t){this.seletedVideo=t}}},b=u,m=(0,c.Z)(b,i,a,!1,null,"3825eeb1",null),h=m.exports}}]);
//# sourceMappingURL=BlogView.63628450.js.map