"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5494],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),g=o,u=d["".concat(l,".").concat(g)]||d[g]||m[g]||r;return n?a.createElement(u,i(i({ref:t},c),{},{components:n})):a.createElement(u,i({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},31848:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(25773),o=(n(27378),n(35318)),r=n(76911);const i={slug:"moon-v1.6",title:"moon v1.6 - Persistent tasks and task extending RFC",authors:["milesj"],tags:["tasks","rfc","log"],image:"./img/moon/v1.6.png"},s=void 0,l={permalink:"/blog/moon-v1.6",editUrl:"https://github.com/moonrepo/moon/tree/master/website/blog/2023-05-15_moon-v1.6.mdx",source:"@site/blog/2023-05-15_moon-v1.6.mdx",title:"moon v1.6 - Persistent tasks and task extending RFC",description:"In this release, we're introducing a new feature called persistent tasks, and an RFC for extending",date:"2023-05-15T00:00:00.000Z",formattedDate:"May 15, 2023",tags:[{label:"tasks",permalink:"/blog/tags/tasks"},{label:"rfc",permalink:"/blog/tags/rfc"},{label:"log",permalink:"/blog/tags/log"}],readingTime:3.155,hasTruncateMarker:!0,authors:[{name:"Miles Johnson",title:"Founder, developer",url:"https://github.com/milesj",imageURL:"/img/authors/miles.jpg",key:"milesj"}],frontMatter:{slug:"moon-v1.6",title:"moon v1.6 - Persistent tasks and task extending RFC",authors:["milesj"],tags:["tasks","rfc","log"],image:"./img/moon/v1.6.png"},nextItem:{title:"moon v1.5 - Rust tier 2 and 3 support",permalink:"/blog/moon-v1.5"}},p={image:n(69922).Z,authorsImageUrls:[void 0]},c=[{value:"RFC: Task extending/variants",id:"rfc-task-extendingvariants",level:2},{value:"Persistent tasks",id:"persistent-tasks",level:2},{value:"Logging migration",id:"logging-migration",level:2},{value:"Other changes",id:"other-changes",level:2}],m={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this release, we're introducing a new feature called persistent tasks, and an RFC for extending\ntasks."),(0,o.kt)("h2",{id:"rfc-task-extendingvariants"},"RFC: Task extending/variants"),(0,o.kt)("p",null,"Before we dive into this release, we want to briefly talk about a new RFC that we're looking for\nfeedback on, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/moonrepo/moon/issues/849"},"task extending/variants"),". This is a\nfeature that has been top-of-mind since moon's inception, but we haven't had the foundation in place\nto support it, nor what the API should look like."),(0,o.kt)("p",null,"The gist of the RFC is that we want to support tasks that extend other tasks with additional\narguments. This is a common workflow with npm scripts:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "lint": "eslint .",\n    "lint:fix": "npm run lint --fix"\n  }\n}\n')),(0,o.kt)("p",null,"As consumers of moon, we'd appreciate any feedback on the RFC before we move forward!"),(0,o.kt)("div",{class:"flex justify-center"},(0,o.kt)(r.Z,{label:"View RFC",href:"https://github.com/moonrepo/moon/issues/849",size:"lg",mdxType:"Button"})),(0,o.kt)("h2",{id:"persistent-tasks"},"Persistent tasks"),(0,o.kt)("p",null,"Tasks that never complete, like servers and watchers, are known as persistent tasks. Historically we\nhad support for these kinds of tasks through the ",(0,o.kt)("a",{parentName:"p",href:"/docs/config/project#local"},(0,o.kt)("inlineCode",{parentName:"a"},"local"))," setting in\n",(0,o.kt)("a",{parentName:"p",href:"/docs/config/project"},(0,o.kt)("inlineCode",{parentName:"a"},"moon.yml")),". This setting would modify the task for continuous execution by\ndisabling caching, streaming output, and not running in CI."),(0,o.kt)("p",null,"While this worked for the most part, there was one scenario that was still problematic, and that was\nrunning multiple persistent tasks in parallel. Depending on the task dependency chain, sometimes\nthese tasks would ",(0,o.kt)("em",{parentName:"p"},"not")," run in parallel, some may never start (blocked on another tasks), or the\norder of nodes in the graph is non-ideal. A great example of this can be found in this\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/moonrepo/moon/discussions/830"},"discussion thread"),"."),(0,o.kt)("p",null,"To mitigate this problem, we're introducing a new task option,\n",(0,o.kt)("a",{parentName:"p",href:"/docs/config/project#persistent"},(0,o.kt)("inlineCode",{parentName:"a"},"persistent"))," (which is also enabled by the ",(0,o.kt)("inlineCode",{parentName:"p"},"local")," setting). When\na task is marked as persistent, it will always ",(0,o.kt)("em",{parentName:"p"},"run last and in parallel")," within the dependency\ngraph, after all dependencies (from all other persistent tasks) have completed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="moon.yml"',title:'"moon.yml"'},"tasks:\n  dev:\n    command: 'next dev'\n    local: true\n    # OR\n    options:\n      persistent: true\n")),(0,o.kt)("p",null,"This is a perfect solution to running multiple development servers and tools in watch mode:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="moon.yml"',title:'"moon.yml"'},"tasks:\n  dev:\n    command: 'noop'\n    deps:\n      - 'frontend:dev'\n      - 'backend:dev'\n      - 'database:start'\n      - 'tailwind:watch'\n")),(0,o.kt)("h2",{id:"logging-migration"},"Logging migration"),(0,o.kt)("p",null,"This is more of a heads up than anything, but we've started an internal Rust migration from the old\n",(0,o.kt)("a",{parentName:"p",href:"https://crates.io/crates/log"},"log")," crate to the new ",(0,o.kt)("a",{parentName:"p",href:"https://crates.io/crates/tracing"},"tracing"),"\ncrate. Tracing provides is with far more information, metrics, and instrumentation, which we hope to\ntake advantage of in the future."),(0,o.kt)("p",null,"This will be an ongoing migration that will last for many releases, and during this time while we\nsupport both ",(0,o.kt)("inlineCode",{parentName:"p"},"log")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"tracing")," in unison, the logs will be a bit noisy. We'll be working to clean\nup the logs as we gradually convert the codebase."),(0,o.kt)("p",null,"And lastly, the move to ",(0,o.kt)("inlineCode",{parentName:"p"},"tracing"),' has also caused the log output to change. For example, in the log\nexcerpt below, all messages with "log" after the date are the old ',(0,o.kt)("inlineCode",{parentName:"p"},"log")," crate, while the others with\ndistinct module names are the new ",(0,o.kt)("inlineCode",{parentName:"p"},"tracing")," crate."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-log"},'[DEBUG 14:44:19] moon_process::command_inspector  Running command git status --porcelain --untracked-files -z  env_vars={} working_dir="~/Projects/moon"\n[DEBUG 14:44:19] log  Filtering based on touched status "all"  log.target="moon:query:touched-files" log.module_path="moon_cli::queries::touched_files" log.file="crates/cli/src/queries/touched_files.rs" log.line=85\n[DEBUG 14:44:19] log  Creating dependency graph  log.target="moon:dep-graph" log.module_path="moon_dep_graph::dep_builder" log.file="crates/core/dep-graph/src/dep_builder.rs" log.line=35\n[DEBUG 14:44:19] log  Running 32 actions across 5 batches  log.target="moon:action-pipeline" log.module_path="moon_action_pipeline::pipeline" log.file="crates/core/action-pipeline/src/pipeline.rs" log.line=93\n[DEBUG 14:44:19] log  Setting up Node.js 20.0.0 toolchain  log.target="moon:action:setup-tool" log.module_path="moon_action_pipeline::actions::setup_tool" log.file="crates/core/action-pipeline/src/actions/setup_tool.rs" log.line=26\n[DEBUG 14:44:19] proto_node::resolve  Resolving a semantic version for "20.0.0"\n[DEBUG 14:44:19] proto_core::resolver:load_versions_manifest  Loading versions manifest from local cache  cache_file=~/.proto/temp/3d16d1693e83828f98bae178f181d5a01103b7f222db27cdeaec9b4950e951d7.json\n')),(0,o.kt)("h2",{id:"other-changes"},"Other changes"),(0,o.kt)("p",null,"View the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/moonrepo/moon/releases/tag/v1.6.0"},"official release")," for a full list of\nchanges."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Updated long running processes to log a checkpoint indicating it's still running."),(0,o.kt)("li",{parentName:"ul"},"Reworked file groups to use workspace relative paths, instead of project relative."),(0,o.kt)("li",{parentName:"ul"},"Reworked processes to better handle command line arguments, shells, and piped stdin input.")))}d.isMDXComponent=!0},69922:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/v1.6-5fc0fb4e6b0bbe85a5016ff7f3c28b89.png"}}]);