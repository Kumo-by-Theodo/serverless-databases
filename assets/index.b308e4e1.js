var G=Object.defineProperty,Q=Object.defineProperties;var $=Object.getOwnPropertyDescriptors;var B=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var z=(a,t,n)=>t in a?G(a,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[t]=n,T=(a,t)=>{for(var n in t||(t={}))j.call(t,n)&&z(a,n,t[n]);if(B)for(var n of B(t))_.call(t,n)&&z(a,n,t[n]);return a},U=(a,t)=>Q(a,$(t));import{j as r,S as c,a as e,A as D,T as y,D as A,C as p,d as F,b as E,c as W,L,e as Y,F as x,B as k,f as K,g as H,h as J,i as V,k as X,u as Z,l as ee,r as ae,m as te,n as se,o as ne,R as re,p as ie,q as oe,s as M,t as le,v as C,M as f,w,x as ce,y as de,z as me,E as ue,G as pe,H as he,I as P,J as ge,K as be,N as ve,O as ye,P as S,Q as fe,U as we}from"./vendor.33ef2f6a.js";const Se=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))m(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&m(u)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function m(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}};Se();var o=(a=>(a.SelfHosted="SelfHosted",a.Managed="Managed",a.Serverless="Serverless",a))(o||{}),De="/serverless-databases/assets/dynamodb.91853182.svg",xe="/serverless-databases/assets/databaseMigrationService.2ceccd48.svg",Ie="/serverless-databases/assets/glue.79950dde.svg",Ae="/serverless-databases/assets/auroraServerless.dfb833b4.svg",ke="/serverless-databases/assets/qldb.fc98b6f5.svg",Le="/serverless-databases/assets/timestream.f5594fcf.svg",Me="/serverless-databases/assets/neptune.ae97bf75.svg",Ce="/serverless-databases/assets/athenaS3.3c4fa860.svg",Re="/serverless-databases/assets/s3.2bfe0813.svg",Be="/serverless-databases/assets/redshift.a0c61ae2.svg",ze="/serverless-databases/assets/opensearch.df2588cd.svg",Te="/serverless-databases/assets/rds.9a46579d.svg",Ue="/serverless-databases/assets/documentdb.c63c83d8.svg";const N={DynamoDB:{name:"DynamoDB",src:De,releaseDate:"2012",tags:[],pricing:"Cheap",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",documentationUrl:"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/index.html",awesomeUrl:"https://github.com/alexdebrie/awesome-dynamodb",implementationUrl:"https://github.com/serverless/examples/tree/v3/aws-node-express-dynamodb-api",infrastructure:o.Serverless,dataMigrationServices:["Database Migration Service","Glue"],typescriptLibraries:[{name:"DynamoDB One Table",link:"https://github.com/sensedeep/dynamodb-onetable"},{name:"DynamoDB Toolbox",link:"https://github.com/jeremydaly/dynamodb-toolbox"}]},AuroraServerless:{name:"Aurora Serverless",src:Ae,releaseDate:"2018",tags:[],pricing:"Cheap",description:"Amazon Aurora Serverless is an on-demand, auto-scaling configuration for Amazon Aurora. It automatically starts up, shuts down, and scales capacity up or down based on your application's needs. It enables you to run your database in the cloud without managing any database capacity.",documentationUrl:"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html",implementationUrl:"https://github.com/serverless/examples/tree/v3/aws-node-express-dynamodb-api",infrastructure:o.Serverless,dataMigrationServices:["Glue"],typescriptLibraries:[{name:"TypeORM",link:"https://github.com/typeorm/typeorm"},{name:"Prisma",link:"https://github.com/prisma/prisma"},{name:"MikroORM",link:"https://github.com/mikro-orm/mikro-orm"}]},QLDB:{name:"Quantum Ledger Database",src:ke,releaseDate:"2019",tags:[],pricing:"Cheap",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",documentationUrl:"https://docs.aws.amazon.com/qldb/latest/developerguide/index.html",awesomeUrl:"https://github.com/mlewis7127/awesome-qldb",implementationUrl:"https://www.google.com",dataMigrationServices:[]},Timestream:{name:"Timestream",src:Le,releaseDate:"2020",tags:[],pricing:"Cheap",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",documentationUrl:"https://docs.aws.amazon.com/timestream/latest/developerguide/index.html",awesomeUrl:"https://github.com/awslabs/amazon-timestream-tools",implementationUrl:"https://www.google.com",infrastructure:o.Serverless,dataMigrationServices:[]},Neptune:{name:"Neptune",src:Me,releaseDate:"2018",tags:["VPC needed"],pricing:"Cheap",description:"Graph-oriented AWS managed database. Its query processing engine is optimized for leading graph query languages, Apache TinkerPop\u2122 Gremlin and the W3C\u2019s RDF SPARQL.",documentationUrl:"https://docs.aws.amazon.com/neptune/latest/userguide/intro.html",implementationUrl:"https://github.com/dabit3/cdk-appsync-neptune",infrastructure:o.Managed,dataMigrationServices:[]},AthenaS3:{name:"Athena with S3",src:Ce,releaseDate:"2016",tags:["Pay per use"],pricing:"Cheap",description:"Amazon Athena is an interactive query service that makes it easy to analyze data directly in Amazon Simple Storage Service (Amazon S3) using standard SQL.",documentationUrl:"https://docs.aws.amazon.com/athena/latest/ug/what-is.html",implementationUrl:"https://github.com/theodo/serverless-databases/tree/main/athena",infrastructure:o.Serverless,dataMigrationServices:[]},S3Select:{name:"S3 Select",src:Re,releaseDate:"2018",tags:["Pay per use"],pricing:"Cheap",description:"S3 Select enables applications to retrieve only a subset of data from an object by using simple SQL expressions.",documentationUrl:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/selecting-content-from-objects.html",implementationUrl:"https://aws.amazon.com/fr/blogs/developer/introducing-support-for-amazon-s3-select-in-the-aws-sdk-for-javascript/",dataMigrationServices:["Glue"]},RDS:{name:"RDS",src:Te,releaseDate:"",tags:[],pricing:"Expensive",description:"RDS description",documentationUrl:"https://docs.aws.amazon.com/rds/index.html",implementationUrl:"",infrastructure:o.Managed,dataMigrationServices:["Database Migration Service","Glue"]},DocumentDB:{name:"DocumentDB",src:Ue,releaseDate:"",tags:[],pricing:"Expensive",description:"DocumentDB (with MongoDB compatibility)",documentationUrl:"https://docs.aws.amazon.com/managedservices/latest/userguide/document-db.html",implementationUrl:"",infrastructure:o.Managed,dataMigrationServices:["Database Migration Service"]},OpenSearch:{name:"OpenSearch (ex-ElasticSearch)",src:ze,releaseDate:"",tags:[],pricing:"Expensive",description:"OpenSearch (ex-ElasticSearch)",documentationUrl:"https://docs.aws.amazon.com/opensearch-service/latest/developerguide/what-is.html",implementationUrl:"",infrastructure:o.Managed,dataMigrationServices:[]},Redshift:{name:"Redshift",src:Be,releaseDate:"2013",tags:["Pay per use"],pricing:"Cheap",description:"Amazon Redshift uses SQL to analyze structured and semi-structured data across data warehouses, operational databases, and data lakes, using AWS-designed hardware and machine learning to deliver the best price performance at any scale.",documentationUrl:"https://docs.aws.amazon.com/redshift/latest/gsg/index.html",implementationUrl:"https://docs.aws.amazon.com/redshift/latest/gsg/index.html",infrastructure:o.Serverless,dataMigrationServices:["Glue"]}},O=({solution:a})=>{const{name:t,src:n,releaseDate:m,pricing:s,description:i,documentationUrl:u,awesomeUrl:l,implementationUrl:I,tags:b,infrastructure:h,dataMigrationServices:g,typescriptLibraries:d}=N[a];return r(c,{direction:"row",spacing:4,children:[e(D,{alt:t,src:n,variant:"square",sx:{marginTop:2,height:120,width:120}}),r(c,{spacing:2,children:[e(y,{variant:"h2",children:t}),e(A,{light:!0}),e(c,{direction:"row",spacing:2,children:e(p,{icon:e(F,{}),label:m,variant:"outlined"})}),r(c,{direction:"row",spacing:2,children:[e(p,{icon:e(E,{}),label:s,color:s==="Cheap"?"success":"error",variant:"outlined"}),e(p,{icon:e(W,{}),label:"Parti-QL compatible",color:"success",variant:"outlined"}),h&&e(L,{href:"/infrastructures",children:e(p,{icon:e(Y,{}),label:h,color:"info",variant:"outlined"})}),b.map(v=>e(p,{label:v,color:"secondary",variant:"outlined"}))]}),e(A,{light:!0}),g.length!==0&&r(x,{children:[r(c,{direction:"row",spacing:2,children:[e(y,{variant:"h6",children:"Migration tools"}),g.includes("Database Migration Service")&&e(p,{icon:e(D,{alt:"Database Migration Service",src:xe,sx:{width:24,height:24}}),label:"Database Migration Service compatible",color:"info",variant:"outlined"}),g.includes("Glue")&&e(p,{icon:e(D,{alt:"Glue",src:Ie,sx:{width:24,height:24}}),label:"Glue compatible",color:"info",variant:"outlined"})]}),e(A,{light:!0})]}),e(y,{variant:"body1",children:i}),r(c,{direction:"row",spacing:4,children:[e(k,{variant:"contained",target:"_blank",href:u,children:"Documentation"}),l!==void 0&&e(k,{variant:"contained",target:"_blank",href:l,children:"Awesome Repository"}),e(k,{variant:"contained",target:"_blank",href:I,children:"Implementation example"})]}),d&&r(K,{children:[e(H,{expandIcon:e(J,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:e(y,{children:"Typescript libraries"})}),d.map(v=>e(V,{children:r(c,{direction:"row",spacing:2,children:[e(X,{})," ",e(L,{href:v.link,children:v.name})]})}))]})]})]})},Pe=a=>a.solution!==void 0,Ne=({questions:a})=>{const{control:t}=Z(),n=ee([q.Cache]),[m,s]=ae.exports.useState(),i=l=>{n.add(l)},u=l=>{if(Pe(l)){s(l.solution);return}i(l.nextQuestionId)};return r("form",{children:[e(c,{spacing:2,children:a.filter(({id:l})=>n.has(l)).map(({id:l,question:I,answers:b})=>e(te,{name:l,control:t,render:({field:h})=>{var g;return h.value?e("span",{children:(g=b.find(({label:d})=>d===h.value))==null?void 0:g.conclusion}):r(se,U(T({},h),{children:[e(ne,{id:"demo-radio-buttons-group-label",children:I}),e(re,{row:!0,children:b.map(d=>e(ie,{value:d.label,control:e(oe,{}),onClick:()=>u(d),label:d.label},d.label))})]}))}},l))}),m&&e(O,{solution:m})]})},Oe=()=>r(M,{sx:{flexGrow:1},children:[e(le,{position:"absolute",sx:{zIndex:a=>a.zIndex.drawer+1},children:r(C,{children:[e(f,{component:w,to:"/",children:e(ce,{})}),e(f,{component:w,to:"/builder",children:"Serverless databases selector"}),e(f,{component:w,to:"/solutions",children:"Solutions catalog"}),e(f,{component:w,to:"/infrastructures",children:"Infrastructures"})]})}),e(C,{})]}),qe=()=>r(de,{sx:{flexShrink:0,"& .MuiDrawer-paper":{boxSizing:"border-box"}},variant:"permanent",anchor:"left",children:[e(C,{}),e(M,{sx:{overflow:"auto"},children:e(me,{children:Object.values(R).sort((a,t)=>a.localeCompare(t)).map(a=>{const{name:t,src:n}=N[a];return e(ue,{children:e(L,{href:`#${a}`,underline:"none",color:"inherit",children:r(M,{display:"flex",flexDirection:"row",children:[e(pe,{children:e(D,{alt:t,src:n,sx:{width:24,height:24},variant:"square"})}),e(he,{children:t})]})})})})})})]}),Ge=()=>r(x,{children:[e(qe,{}),e(c,{children:Object.values(R).sort((a,t)=>a.localeCompare(t)).map(a=>e(P,{sx:{marginBottom:2,marginTop:2,padding:2},id:a,children:e(O,{solution:a})}))})]}),Qe={[o.SelfHosted]:["Self hosted"],[o.Managed]:["Managed"],[o.Serverless]:["Serverless"]},$e=({infrastructure:a})=>r(x,{children:[e("h2",{children:a}),Qe[a].map(t=>e("p",{children:t}))]}),je=()=>e(c,{children:Object.values(o).sort((a,t)=>a.localeCompare(t)).map(a=>e(P,{sx:{marginBottom:2,marginTop:2,padding:2},children:e($e,{infrastructure:a})}))});var q=(a=>(a.AcessPatternsNumber="AccessPatternsNumber",a.AcessPatternsKnown="AccessPatternsKnown",a.Temperature="Temperature",a.Temporality="Temporality",a.Cache="Cache",a.Time="Time",a.RelationsCount="RelationsCount",a.DataInRelations="DataInRelations",a.SearchCatalogue="SearchCatalogue",a.SearchAccessbility="SearchAccessibility",a.MachineLearning="MachineLearning",a))(q||{}),R=(a=>(a.DynamoDB="DynamoDB",a.AuroraServerless="AuroraServerless",a.RDS="RDS",a.QLDB="QLDB",a.Timestream="Timestream",a.Neptune="Neptune",a.AthenaS3="AthenaS3",a.S3Select="S3Select",a.DocumentDB="DocumentDB",a.OpenSearch="OpenSearch",a.Redshift="Redshift",a))(R||{});const _e=[{id:"Cache",question:"Does your data need to be in persistent storage?",answers:[{label:"Yes",conclusion:"I need a database",nextQuestionId:"Temperature"},{label:"No",conclusion:"I need a cache system",solution:"DynamoDB"}]},{id:"Temperature",question:"What is the more frequent operations on your data?",answers:[{label:"Write operations",conclusion:"I need an OTLP solution",nextQuestionId:"Temporality"},{label:"Read operations",conclusion:"TODO: I need an OLAP solution",solution:"DynamoDB"}]},{id:"Temporality",question:"Is history an important part of your data?",answers:[{label:"Yes",conclusion:"Data history is important",nextQuestionId:"Time"},{label:"No",conclusion:"Data history is not important",nextQuestionId:"AccessPatternsNumber"}]},{id:"AccessPatternsKnown",question:"Do you already know the access patterns for your data?",answers:[{label:"Yes",conclusion:"I know the acess patterns for my data",nextQuestionId:"AccessPatternsNumber"},{label:"No",conclusion:"I do not know the acess patterns for my data",nextQuestionId:"SearchCatalogue"}]},{id:"AccessPatternsNumber",question:"Do you have more than 20 access patterns on a single entity?",answers:[{label:"Yes",conclusion:"I have more than 20 access patterns to my data",nextQuestionId:"RelationsCount"},{label:"No",conclusion:"I have less than 20 access patterns to my data",solution:"DynamoDB"}]},{id:"RelationsCount",question:"[WIP] Do you have a lot of relations between your entities",answers:[{label:"Yes",conclusion:"I have a lot of relations between my entities",nextQuestionId:"DataInRelations"},{label:"No",conclusion:"TODO: I do not have a lot of relations between my entities",solution:"DynamoDB"}]},{id:"DataInRelations",question:"Is the relation between my entites the valuable part of my data?",answers:[{label:"Yes",conclusion:"I am looking for a Graph DB",solution:"Neptune"},{label:"No",conclusion:"I am looking for an SQL DB",solution:"AuroraServerless"}]},{id:"Time",question:"Is your data a serie of timestamped data points?",answers:[{label:"Yes",conclusion:"I need a time series database",solution:"Timestream"},{label:"No",conclusion:"I don't know",solution:"DynamoDB"}]}];function Fe(){return r(x,{children:[e(ge,{}),e("div",{className:"App",children:r(be,{basename:"/serverless-databases",children:[e(Oe,{}),e(ve,{maxWidth:"md",children:r(ye,{children:[e(S,{path:"/",element:e("h1",{children:"hello, this is the home"})}),e(S,{path:"/builder",element:e(Ne,{questions:_e})}),e(S,{path:"/solutions",element:e(Ge,{})}),e(S,{path:"/infrastructures",element:e(je,{})})]})})]})})]})}fe.render(e(we.StrictMode,{children:e(Fe,{})}),document.getElementById("root"));