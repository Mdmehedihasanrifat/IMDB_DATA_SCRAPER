const request =require("request-promise");
const cheerio=require("cheerio");
const json2csv=require("json2csv").Parser;
const fs=require(fs);


const movie="https://www.imdb.com/title/tt0242519/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_hera%2520phe";

(async()=>{

let imdbData=[];

const response=await request({

    uri:movie,
    headers:{
       "Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
       "Accept-Encoding":"gzip, deflate, br",
       "Accept-Language":"en-US,en;q=0.9"
    },
    gzip:true,


})



})();


let $=cheerio.load(response);
const h1Element=document.querySelector('[data-testid="hero__pageTitle"]');
const text=h1Element.querySelector('span').textContent;
const RatingElement = document.querySelector('[data-testid="hero-rating-bar__aggregate-rating__score"]');
const ratings=RatingElement.querySelector('span').textContent;
const summeryElement = document.querySelector('span[data-testid="plot-l"].sc-466bb6c-1.dRrIo').textContent;
