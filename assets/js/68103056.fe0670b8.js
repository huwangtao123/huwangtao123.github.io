"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[185],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>p});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),h=c(a),p=i,y=h["".concat(s,".").concat(p)]||h[p]||d[p]||n;return a?r.createElement(y,l(l({ref:t},u),{},{components:a})):r.createElement(y,l({ref:t},u))}));function p(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,l=new Array(n);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<n;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5141:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var r=a(7462),i=(a(7294),a(3905));const n={sidebar_position:1},l=void 0,o={unversionedId:"Defi-basics/Clever",id:"Defi-basics/Clever",title:"Clever",description:"Source",source:"@site/docs/Defi-basics/Clever.md",sourceDirName:"Defi-basics",slug:"/Defi-basics/Clever",permalink:"/docs/Defi-basics/Clever",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar"},s={},c=[{value:"Why use CLever?",id:"why-use-clever",level:2},{value:"How does it work?",id:"how-does-it-work",level:2},{value:"When can I have my locked CVX back",id:"when-can-i-have-my-locked-cvx-back",level:2},{value:"What is clevCVX?",id:"what-is-clevcvx",level:2},{value:"Is this a loan?",id:"is-this-a-loan",level:2},{value:"Can I repay my claimed future yields early?",id:"can-i-repay-my-claimed-future-yields-early",level:2},{value:"Are you trying to trick me into giving you my CVX? Or using my CVX to vote for your thing?",id:"are-you-trying-to-trick-me-into-giving-you-my-cvx-or-using-my-cvx-to-vote-for-your-thing",level:2},{value:"What\u2019s the deal with the Furnace?",id:"whats-the-deal-with-the-furnace",level:2},{value:"Is it safe?",id:"is-it-safe",level:2},{value:"How much does it cost?",id:"how-much-does-it-cost",level:2}],u={toc:c};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.aladdin.club/clever",title:"Permalink to CLever - AladdinDAO"},"Source")),(0,i.kt)("p",null,"CLever gives CVX holders a continuous, automated way to harvest bribes and rewards AND allows users to claim their future bribes and rewards today."),(0,i.kt)("p",null,"CLever Project"),(0,i.kt)("h2",{id:"why-use-clever"},"Why use CLever?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Automate the process of earning yield with CVX: locking, voting, collecting bribes, even re-locking in Convex as needed!")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Claim your future yields today! You can even swap them to CVX and re-deposit them to earn even more yields.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Your future yield \u201cloan\u201d is non liquidating, low risk, and has certainty in funding costs."))),(0,i.kt)("h2",{id:"how-does-it-work"},"How does it work?"),(0,i.kt)("p",null,"Users lock their CVX and can immediately claim 50% of their future yields as clevCVX, for zero cost. Users can swap clevCVX for CVX using either the Curve liquidity pool or the clevCVX Furnace. For users that want to create leverage, they may re-deposit their CVX to claim and swap even more, looping as much as they wish to a maximum of ~2X their initial CVX deposit. All CVX locked with CLever will itself be vote-locked with Convex and used to vote for ",(0,i.kt)("strong",{parentName:"p"},"maximum bribe income"),", with all bribes swapped to CVX and claimable as more clevCVX."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://2935593128-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-M_YfO-qiTw04svyvm5V%2Fuploads%2FoQtlHgrzVUOboaYGRztt%2Fimage.png?alt=media&token=aa48c879-08ae-4f5f-a7cd-cc0b63323c82",alt:null})),(0,i.kt)("h2",{id:"when-can-i-have-my-locked-cvx-back"},"When can I have my locked CVX back"),(0,i.kt)("p",null,"Users are required to leave at least 2x their claimed future yields locked in the system, until such time as those future yields are earned (or until they exit early, see \u201crepay\u201d below)."),(0,i.kt)("p",null,"When a user is ready to withdraw, they simply make an unlock request. Their requested CVX will be withdrawable when it next unlocks from Convex (could be up to 17 weeks) Users who wish to continue earning don\u2019t have to do anything, and their underlying CVX will be re-locked automatically after each unlock."),(0,i.kt)("h2",{id:"what-is-clevcvx"},"What is clevCVX?"),(0,i.kt)("p",null,"clevCVX is a synthetic token minted against real CVX (or vlCVX) in the Clever system, and each clevCVX token is backed by at least one CVX or vlCVX in the system. clevCVX can be redeemed for CVX 1:1 using the Furnace (where there may be a delay, see below) or immediately in the clevCVX/CVX pool on Curve."),(0,i.kt)("h2",{id:"is-this-a-loan"},"Is this a loan?"),(0,i.kt)("p",null,"Yes, you can think of it that way. Your locked CVX is the collateral, and the yields from it automatically pay down your debt\u2026 but CLever loans are special and offer what we think is the best risk/reward profile for borrowing in all DeFi. Our technique of using a synthetic token paired with a real one (i.e. clevCVX with CVX) offers several advantages:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Synthetic token can\u2019t realistically be worth more than real one, so there is no need for liquidation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"No need to use any oracle price feed to monitor loan health (less attack surface, less risk)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Borrowers do not have to take on risk other collateral assets paired with the same borrowed token, like a stablecoin borrowing system would")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Funding cost is fixed and doesn\u2019t fluctuate with liquidity adding/removal/utilization like all other systems do"))),(0,i.kt)("h2",{id:"can-i-repay-my-claimed-future-yields-early"},"Can I repay my claimed future yields early?"),(0,i.kt)("p",null,"Yes, claimed future yields may be repaid any time directly in clevCVX or CVX (1:1) but any early repayment of claimed future yields is subject to a repayment fee (see fees below)."),(0,i.kt)("h2",{id:"are-you-trying-to-trick-me-into-giving-you-my-cvx-or-using-my-cvx-to-vote-for-your-thing"},"Are you trying to trick me into giving you my CVX? Or using my CVX to vote for your thing?"),(0,i.kt)("p",null,"No! Users retain ownership of their locked CVX, and votes are cast to maximize bribe value (initially by delegating to Votium). All yields are harvested on users\u2019 behalf, then swapped into CVX, and those CVX are distributed as claimable clevCVX backed by CVX in the Furnace (see below for details)"),(0,i.kt)("h2",{id:"whats-the-deal-with-the-furnace"},"What\u2019s the deal with the Furnace?"),(0,i.kt)("p",null,"The furnace helps to keep the value of clevCVX very close to CVX. Each time new CVX enters the system from a bribe/reward harvest (or a direct CVX repayment), clevCVX is minted 1:1 against this income. The CVX is placed in the Furnace while the clevCVX is claimable by the users that earned it."),(0,i.kt)("p",null,"Any user may request to burn clevCVX from their wallet in exchange for the CVX in the Furnace. If there is not sufficient CVX in the Furnace for all claimants, CVX entering the Furnace will be distributed proportionally between all users with active requests."),(0,i.kt)("h2",{id:"is-it-safe"},"Is it safe?"),(0,i.kt)("p",null,"CLever is built by the experienced and security-obsessed AladdinDAO team and is audited by SECBIT Labs. The audit is ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/AladdinDAO/aladdin-v3-contracts/blob/main/audit-reports/SECBIT_CLever_Report_v1.1.pdf"},"here"),". This is the Aladdin way."),(0,i.kt)("h2",{id:"how-much-does-it-cost"},"How much does it cost?"),(0,i.kt)("p",null,"During the beta phase (prior to launch of Curve liquidity in clevCVX/CVX), CLever will charge 2% of yields harvested, which will cover the gas required for harvest transactions."),(0,i.kt)("p",null,"Once clevCVX liquidity is launched and the product is fully operational, CLever will charge 20% of yields, which will be split 50/50 between clevCVX/CVX liquidity pool and a yet-to-be-announced revenue sharing program."),(0,i.kt)("p",null,"Early repayment of claimed future yields are subject to a 5% repayment fee."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"CLever Github?")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/AladdinDAO/aladdin-v3-contracts/tree/main/contracts/clever"},"CLever Github")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Deployed Contracts?")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/AladdinDAO/deployments#clever"},"Contracts Github")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"CLever "),"Governance Multisig"),(0,i.kt)("p",null,"CLever Treasury: ",(0,i.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0xFC08757c505eA28709dF66E54870fB6dE09f0C5E"},"0xFC08757c505eA28709dF66E54870fB6dE09f0C5E")))}d.isMDXComponent=!0}}]);