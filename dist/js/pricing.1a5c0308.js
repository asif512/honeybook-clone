"use strict";(self["webpackChunkhoneybook_clone"]=self["webpackChunkhoneybook_clone"]||[]).push([[717],{6384:function(e,a,i){i.r(a),i.d(a,{default:function(){return O}});var s=function(){var e=this,a=e._self._c;return a("div",{staticClass:"pricing-view"},[a("div",{staticClass:"hero-section container"},[a("h2",{staticClass:"title"},[e._v("Plans that scale with your business")]),a("h3",{staticClass:"sub-title"},[e._v(" Try HoneyBook free for 7 days, no credit card required. ")]),a("b-button",{staticClass:"trial-btn"},[e._v("Start free trial")])],1),a("div",{staticClass:"pricing-details"},[a("div",{staticClass:"plan-switcher"},e._l(e.plans,(function(i,s){return a("div",{key:s,staticClass:"plan",class:{active:i.component==e.activePlan},on:{click:function(a){return e.seletedPlan(i.component)}}},[e._v(" "+e._s(i.label)+" ")])})),0),a("div",{staticClass:"plan-details"},[a(e.renderComponent,{tag:"component"})],1)]),a("all-plans"),a("trusted-bussiness"),a("faq-section"),a("div",{staticClass:"banner-section"},[a("div",{staticClass:"container"},[a("div",{staticClass:"content"},[a("h2",{staticClass:"title"},[e._v("It’s free to try. We hope you do.")]),a("h4",{staticClass:"sub-title"},[e._v(" 93% of members would recommend HoneyBook to a friend. ")]),a("b-button",{staticClass:"trial-btn"},[e._v("Start free trial")]),a("div",{staticClass:"require-label"},[e._v("Start free trial")])],1),e._m(0)])])],1)},t=[function(){var e=this,a=e._self._c;return a("div",{staticClass:"element-media"},[a("img",{staticClass:"img",attrs:{src:"https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/moneystack.png",alt:"img"}})])}],n=function(){var e=this,a=e._self._c;return a("div",{staticClass:"monthly-plans container"},[a("div",{staticClass:"pricing-card-wrapper"},e._l(e.pacakages,(function(e,i){return a("pricing-card",{key:i,staticClass:"monthly-price-card",attrs:{card:e}})})),1),a("div",{staticClass:"compares-plan-features"},[a("b-button",{staticClass:"compare-plan__btn",on:{click:e.handleComparePlanCollapse}},[e._v(" Compare plan features "),a("b-icon",{staticClass:"icon",attrs:{icon:e.comparePlanCollapse?"chevron-double-up":"chevron-double-down"}})],1),e.comparePlanCollapse?a("div",{staticClass:"compares-wrapper"},[a("feature-comparison",{attrs:{features:e.features,pacakages:e.pacakages}})],1):e._e()],1)])},l=[],o=function(){var e=this,a=e._self._c;return a("div",{staticClass:"pricing-card",class:{"papular-package":e.card.isPapular}},[e.card.isPapular?a("label",{staticClass:"label"},[e._v("most popular")]):e._e(),a("h2",{staticClass:"title"},[e._v(e._s(e.card.name))]),a("h4",{staticClass:"sub-title"},[e._v(e._s(e.card.label))]),a("div",{staticClass:"price"},[e._v(e._s(e.card.price))]),a("div",{staticClass:"duration"},[e._v(e._s(e.card.duration))]),a("div",{staticClass:"extra"},[e._v(e._s(e.card.extra))]),a("div",{staticClass:"benefits"},e._l(e.card.benefits,(function(i,s){return a("div",{key:s,staticClass:"benefit"},[a("b-icon",{attrs:{width:"18",height:"18",icon:"check2"}}),a("label",[e._v(e._s(i))])],1)})),0),a("b-button",{staticClass:"trial-btn",class:{normal:!e.card.isPapular}},[e._v("Start free trial")])],1)},r=[],c={name:"PricingCard",props:["card"]},d=c,p=i(1001),u=(0,p.Z)(d,o,r,!1,null,"2e4b4418",null),m=u.exports,b=function(){var e=this,a=e._self._c;return a("div",{staticClass:"feature-comparison container"},[a("div",{staticClass:"feature-header"},[a("div",{staticClass:"left-info"}),e._l(e.pacakages,(function(i,s){return a("div",{key:s,staticClass:"package"},[a("h2",{staticClass:"name"},[e._v(e._s(i.name))]),a("h4",{staticClass:"price"},[e._v(e._s(i.price))]),a("p",{staticClass:"duration"},[e._v(e._s(i.duration))]),a("b-button",{staticClass:"try-btn"},[e._v("Try for free")])],1)}))],2),a("div",{staticClass:"features-container"},e._l(e.features,(function(i,s){return a("div",{key:s,staticClass:"feature"},[a("div",{staticClass:"feature-title-header"},[a("div",{staticClass:"name"},[a("h2",{staticClass:"feature-name"},[e._v(e._s(i.name))])]),a("div",{staticClass:"border-right"}),a("div",{staticClass:"border-right"}),a("div",{staticClass:"border-right"}),a("div",{staticClass:"border-right"}),a("div",{staticClass:"border-right"})]),e._l(i.services,(function(i,s){return a("div",{key:s,staticClass:"feature-servies"},[a("div",{staticClass:"info"},[a("h4",{staticClass:"title"},[e._v(e._s(i.title))]),a("p",{staticClass:"sub-title"},[e._v(e._s(i.subTitle))])]),a("div",{staticClass:"icon-wrapper"},[a("b-icon",{attrs:{icon:i.isAvailableInAsia?"check2":"x"}})],1),a("div",{staticClass:"icon-wrapper"},[a("b-icon",{attrs:{icon:i.isAvailableInAfrica?"check2":"x"}})],1),a("div",{staticClass:"icon-wrapper"},[a("b-icon",{attrs:{icon:i.isAvailableInEurope?"check2":"x"}})],1),a("div",{staticClass:"icon-wrapper"},[a("b-icon",{attrs:{icon:i.isAvailableInAmerica?"check2":"x"}})],1),a("div",{staticClass:"icon-wrapper"},[a("b-icon",{attrs:{icon:i.isAvailableInCaneda?"check2":"x"}})],1)])}))],2)})),0)])},v=[],_={name:"FeatureComparison",props:["features","pacakages"],data(){return{}}},f=_,h=(0,p.Z)(f,b,v,!1,null,"cae5aaec",null),y=h.exports,g={name:"MonthlyPlans",components:{"pricing-card":m,"feature-comparison":y},data(){return{comparePlanCollapse:!1,pacakages:[{name:"asia",label:"Easily create seamless client experiences.",price:"$16",duration:"per month",extra:"What's included",benefits:["Unlimited clients and projects","Invoices and payments","Scheduler","Automations","Calendar","Client portal","Basic reports"]},{name:"Africa",label:"Easily create seamless client experiences.",price:"$20",duration:"per month",extra:"What's included",isPapular:!0,benefits:["Unlimited clients and projects","Invoices and payments","Scheduler","Automations","Calendar","Client portal","Basic reports"]},{name:"Europe",label:"Easily create seamless client experiences.",price:"$10",duration:"per month",extra:"What's included",benefits:["Unlimited clients and projects","Invoices and payments","Scheduler","Automations","Calendar","Client portal","Basic reports"]},{name:"America",label:"Easily create seamless client experiences.",price:"$16",duration:"per month",extra:"What's included",benefits:["Unlimited clients and projects","Invoices and payments","Scheduler","Automations","Calendar","Client portal","Basic reports"]},{name:"Canada",label:"Easily create seamless client experiences.",price:"$12",duration:"per month",extra:"What's included",benefits:["Unlimited clients and projects","Invoices and payments","Scheduler","Automations","Calendar","Client portal","Basic reports"]}],features:[{name:"Clientflow management",services:[{title:"Unlimited clients and projects",subTitle:"Keep all your client info and projects organized under one roof.",isAvailableInAsia:!0,isAvailableInAfrica:!0,isAvailableInCaneda:!0,isAvailableInAmerica:!0,isAvailableInEurope:!0},{title:"Project pipeline",subTitle:"See where projects stand, from inquiry to completed.",isAvailableInAsia:!0,isAvailableInAfrica:!1,isAvailableInCaneda:!0,isAvailableInAmerica:!0,isAvailableInEurope:!1},{title:"Project pipeline",subTitle:"See where projects stand, from inquiry to completed.",isAvailableInAsia:!0,isAvailableInAfrica:!0,isAvailableInCaneda:!1,isAvailableInAmerica:!0,isAvailableInEurope:!0},{title:"Project pipeline",subTitle:"See where projects stand, from inquiry to completed.",isAvailableInAsia:!1,isAvailableInAfrica:!0,isAvailableInCaneda:!0,isAvailableInAmerica:!0,isAvailableInEurope:!1}]},{name:"Scheduling",services:[{title:"Scheduler",subTitle:"Manage availability, let clients book online, and automate reminders.",isAvailableInAsia:!0,isAvailableInAfrica:!0,isAvailableInCaneda:!0,isAvailableInAmerica:!0,isAvailableInEurope:!0},{title:"Schedule and pay",subTitle:"Let clients book a session and pay in one go.",isAvailableInAsia:!0,isAvailableInAfrica:!0,isAvailableInCaneda:!1,isAvailableInAmerica:!0,isAvailableInEurope:!0},{title:"Schedule and pay",subTitle:"Let clients book a session and pay in one go.",isAvailableInAsia:!0,isAvailableInAfrica:!0,isAvailableInCaneda:!0,isAvailableInAmerica:!0,isAvailableInEurope:!0},{title:"Schedule and pay",subTitle:"Let clients book a session and pay in one go.",isAvailableInAsia:!0,isAvailableInAfrica:!0,isAvailableInCaneda:!0,isAvailableInAmerica:!0,isAvailableInEurope:!1}]}]}},methods:{handleComparePlanCollapse(){this.comparePlanCollapse=!this.comparePlanCollapse}}},C=g,A=(0,p.Z)(C,n,l,!1,null,"12817605",null),k=A.exports,I=function(){var e=this,a=e._self._c;return a("div",{staticClass:"yearly-plans container"},[a("div",{staticClass:"pricing-card-wrapper"},e._l(e.pacakages,(function(e,i){return a("pricing-card",{key:i,staticClass:"monthly-price-card",attrs:{card:e}})})),1),a("div",{staticClass:"compares-plan-features"},[a("b-button",{staticClass:"compare-plan__btn",on:{click:e.handleComparePlanCollapse}},[e._v(" Compare plan features "),a("b-icon",{staticClass:"icon",attrs:{icon:e.comparePlanCollapse?"chevron-double-up":"chevron-double-down"}})],1),e.comparePlanCollapse?a("div",{staticClass:"compares-wrapper"},[a("feature-comparison",{attrs:{features:e.features,pacakages:e.pacakages}})],1):e._e()],1)])},w=[],x={name:"YearlyPlans",components:{"pricing-card":m,"feature-comparison":y},data(){return{comparePlanCollapse:!1,pacakages:[{name:"asia",label:"Easily create seamless client experiences.",price:"$26",duration:"per month (billed annually)",extra:"What's included",benefits:["Unlimited clients and projects","Invoices and payments","Scheduler","Automations","Calendar","Client portal","Basic reports"]},{name:"Africa",label:"Easily create seamless client experiences.",price:"$50",duration:"per month (billed annually)",extra:"What's included",isPapular:!0,benefits:["Unlimited clients and projects","Invoices and payments","Scheduler","Automations","Calendar","Client portal","Basic reports"]},{name:"Europe",label:"Easily create seamless client experiences.",price:"$40",duration:"per month (billed annually)",extra:"What's included",benefits:["Unlimited clients and projects","Invoices and payments","Scheduler","Automations","Calendar","Client portal","Basic reports"]},{name:"America",label:"Easily create seamless client experiences.",price:"$39",duration:"per month (billed annually)",extra:"What's included",benefits:["Unlimited clients and projects","Invoices and payments","Scheduler","Automations","Calendar","Client portal","Basic reports"]},{name:"Canada",label:"Easily create seamless client experiences.",price:"$20",duration:"per month (billed annually)",extra:"What's included",benefits:["Unlimited clients and projects","Invoices and payments","Scheduler","Automations","Calendar","Client portal","Basic reports"]}],features:[{name:"Clientflow management",services:[{title:"Unlimited clients and projects",subTitle:"Keep all your client info and projects organized under one roof.",isAvailableInAsia:!0,isAvailableInAfrica:!0,isAvailableInCaneda:!0,isAvailableInAmerica:!0,isAvailableInEurope:!0},{title:"Project pipeline",subTitle:"See where projects stand, from inquiry to completed.",isAvailableInAsia:!0,isAvailableInAfrica:!1,isAvailableInCaneda:!0,isAvailableInAmerica:!0,isAvailableInEurope:!1},{title:"Project pipeline",subTitle:"See where projects stand, from inquiry to completed.",isAvailableInAsia:!0,isAvailableInAfrica:!0,isAvailableInCaneda:!1,isAvailableInAmerica:!0,isAvailableInEurope:!0},{title:"Project pipeline",subTitle:"See where projects stand, from inquiry to completed.",isAvailableInAsia:!1,isAvailableInAfrica:!0,isAvailableInCaneda:!0,isAvailableInAmerica:!0,isAvailableInEurope:!1}]},{name:"Scheduling",services:[{title:"Scheduler",subTitle:"Manage availability, let clients book online, and automate reminders.",isAvailableInAsia:!0,isAvailableInAfrica:!0,isAvailableInCaneda:!0,isAvailableInAmerica:!0,isAvailableInEurope:!0},{title:"Schedule and pay",subTitle:"Let clients book a session and pay in one go.",isAvailableInAsia:!0,isAvailableInAfrica:!0,isAvailableInCaneda:!1,isAvailableInAmerica:!0,isAvailableInEurope:!0},{title:"Schedule and pay",subTitle:"Let clients book a session and pay in one go.",isAvailableInAsia:!0,isAvailableInAfrica:!0,isAvailableInCaneda:!0,isAvailableInAmerica:!0,isAvailableInEurope:!0},{title:"Schedule and pay",subTitle:"Let clients book a session and pay in one go.",isAvailableInAsia:!0,isAvailableInAfrica:!0,isAvailableInCaneda:!0,isAvailableInAmerica:!0,isAvailableInEurope:!1}]}]}},methods:{handleComparePlanCollapse(){this.comparePlanCollapse=!this.comparePlanCollapse}}},P=x,S=(0,p.Z)(P,I,w,!1,null,"306f4cdc",null),q=S.exports,E=function(){var e=this,a=e._self._c;return a("div",{staticClass:"all-plans"},[a("div",{staticClass:"container"},[a("h2",{staticClass:"title"},[e._v("All plans include")]),a("div",{staticClass:"plans"},e._l(e.allPlans,(function(i,s){return a("div",{key:s,staticClass:"plan"},[a("img",{staticClass:"plan-logo",attrs:{src:i.logo,alt:"logo"}}),a("h2",{staticClass:"plan-title"},[e._v(e._s(i.title))]),a("p",{staticClass:"plan-sub-title"},[e._v(e._s(i.subTitle))])])})),0)])])},B=[],j={name:"AllPlans",data(){return{allPlans:[{logo:"https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/pricing/invoices.png",title:"Invoicing & payments",subTitle:"Send invoices and get paid fast with online payments."},{logo:"https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/pricing/contracts.png",title:"Contracts",subTitle:"Send invoices and get paid fast with online payments."},{logo:"https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/pricing/setup.png",title:"Free file setup",subTitle:"Send invoices and get paid fast with online payments."},{logo:"https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/pricing/support.png",title:"Support 7 days a week",subTitle:"Send invoices and get paid fast with online payments."}]}}},T=j,H=(0,p.Z)(T,E,B,!1,null,"e981294e",null),$=H.exports,W=function(){var e=this,a=e._self._c;return a("div",{staticClass:"trusted-bussiness container"},[a("h2",{staticClass:"title"},[e._v("Trusted by 100,000+ independent businesses")]),a("div",{staticClass:"rating"},e._l(e.ratings,(function(i,s){return a("div",{key:s,staticClass:"rating-wrapper"},[a("h2",{staticClass:"rating-amout"},[e._v(e._s(i.ratingAmout))]),a("img",{staticClass:"rating-icons",attrs:{src:i.img}}),a("div",{staticClass:"reviews"},[e._v(e._s(i.reviews)+" reviews")])])})),0),a("div",{staticClass:"testimonials"},e._l(e.testimonails,(function(e,i){return a("testimonial-card",{key:i,attrs:{card:e}})})),1)])},U=[],Z=i(7284),L={name:"TrustedBussiness",components:{"testimonial-card":Z.Z},data(){return{ratings:[{ratingAmout:"4.8",img:"https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/testimonials/starts-4-8.png",reviews:"431"},{ratingAmout:"4.4",img:"https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/testimonials/starts-4-8.png",reviews:"456"}],testimonails:[{name:"danielle j.",role:"bussiness consultant",avator:"https://res.cloudinary.com/honeybook/image/upload/c_thumb,dpr_2.0,f_auto,fl_lossy,g_faces,h_80,q_auto,r_max,w_80/v1/marketing_site/testimonials/member-5.png",signature:"https://res.cloudinary.com/honeybook/image/upload/c_scale,dpr_2.0,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/testimonials/member-logo-1.png",bio:"HoneyBook makes my client experience look and feel professional and helps my clients be at peace while working with me"},{name:"mark d.",role:"photograper",avator:"https://res.cloudinary.com/honeybook/image/upload/c_thumb,dpr_2.0,f_auto,fl_lossy,g_faces,h_80,q_auto,r_max,w_80/v1/marketing_site/testimonials/member-2.png",signature:"https://res.cloudinary.com/honeybook/image/upload/c_scale,dpr_2.0,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/testimonials/member-logo-2.png",bio:"HoneyBook makes my client experience look and feel professional and helps my clients be at peace while working with me"},{name:"Angie",role:"photograper",avator:"https://res.cloudinary.com/honeybook/image/upload/c_thumb,dpr_2.0,f_auto,fl_lossy,g_faces,h_80,q_auto,r_max,w_80/v1/marketing_site/testimonials/member-3.png",signature:"https://res.cloudinary.com/honeybook/image/upload/c_scale,dpr_2.0,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/testimonials/member-logo-4.png",bio:"HoneyBook makes my client experience look and feel professional and helps my clients be at peace while working with me"},{name:"Dianuh A",role:"Artist",avator:"https://res.cloudinary.com/honeybook/image/upload/c_thumb,dpr_2.0,f_auto,fl_lossy,g_faces,h_80,q_auto,r_max,w_80/v1/marketing_site/testimonials/member-1.png",signature:"https://res.cloudinary.com/honeybook/image/upload/c_scale,dpr_2.0,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/testimonials/member-logo-3.png",bio:"HoneyBook makes my client experience look and feel professional and helps my clients be at peace while working with me"}]}}},F=L,M=(0,p.Z)(F,W,U,!1,null,"6e5a58de",null),z=M.exports,K=function(){var e=this,a=e._self._c;return a("div",{staticClass:"faq-section container"},[a("h2",{staticClass:"title"},[e._v("Pricing FAQs")]),a("div",{staticClass:"questions"},e._l(e.questions,(function(i,s){return a("b-card",{key:s,staticClass:"mb-3",staticStyle:{background:"#f6f7f8",border:"none"},attrs:{"no-body":""}},[a("b-card-header",{staticClass:"p-1",staticStyle:{border:"none"},attrs:{"header-tag":"header",role:"tab"}},[a("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:`accordion-${s}`,expression:"`accordion-${index}`"}],staticClass:"collapse-header",attrs:{block:""}},[a("span",{staticClass:"question"},[e._v(e._s(i.question))]),a("b-icon",{attrs:{width:"28",height:"28",icon:"plus"}})],1)]),a("b-collapse",{attrs:{id:`accordion-${s}`,visible:"",accordion:"my-accordion",role:"tabpanel"}},[a("b-card-body",{staticStyle:{background:"#f6f7f8"}},[a("b-card-text",{staticClass:"answer",staticStyle:{background:"#f6f7f8"}},[e._v(e._s(i.answer))])],1)],1)],1)})),1)])},Y=[],D={name:"FaqSection",data(){return{questions:[{question:"What is HoneyBook and how does it work?",answer:"HoneyBook is the leading clientflow management platform for independent service-based businesses. By combining essential tools for client communication, booking, and payments, HoneyBook lets independents manage their front-end client experience and back-end workflows in one place."},{question:"What type of support do you offer?",answer:"HoneyBook is the leading clientflow management platform for independent service-based businesses. By combining essential tools for client communication, booking, and payments, HoneyBook lets independents manage their front-end client experience and back-end workflows in one place."},{question:"Is HoneyBook a CRM?",answer:"HoneyBook is the leading clientflow management platform for independent service-based businesses. By combining essential tools for client communication, booking, and payments, HoneyBook lets independents manage their front-end client experience and back-end workflows in one place."}]}}},N=D,Q=(0,p.Z)(N,K,Y,!1,null,"0fa3a77d",null),R=Q.exports,V={name:"PricingView",components:{"monthly-plans":k,"yearly-plans":q,"all-plans":$,"trusted-bussiness":z,"faq-section":R},data(){return{activePlan:"monthly",plans:[{label:"monthly",component:"monthly"},{label:"Yearly (2 months free)",component:"yearly"}]}},computed:{renderComponent(){return`${this.activePlan}-plans`}},methods:{seletedPlan(e){this.activePlan=e}}},G=V,J=(0,p.Z)(G,s,t,!1,null,"33315303",null),O=J.exports}}]);
//# sourceMappingURL=pricing.1a5c0308.js.map