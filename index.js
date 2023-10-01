const request =require("request-promise");
const cheerio=require("cheerio");
const json2csv=require("json2csv").Parser;
const fs=require("fs");


const movies=["https://www.imdb.com/title/tt0242519/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_hera%2520phe",
              "https://www.imdb.com/title/tt0374887/?ref_=tt_sims_tt_i_2"
];

(async()=>{

let imdbData=[];
for(let movie of movies){
    
const response=await request({

    uri:movie,
    headers:{
       "Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
       "Accept-Encoding":"gzip, deflate, br",
       "Accept-Language":"en-US,en;q=0.9"
    },
    gzip:true,


})

let $ = cheerio.load(response);
const h1Element = $('[data-testid="hero__pageTitle"]');
const movieName = h1Element.find('span').text();
const RatingElement = $('[data-testid="hero-rating-bar__aggregate-rating__score"]');
const ratings = RatingElement.find('span').text();
const summeryElement = $('span[data-testid="plot-l"].sc-466bb6c-1.dRrIo').text();

imdbData.push({
    movieName,
    ratings,
    summeryElement
});

}

const js2csv=new json2csv();
const csv=js2csv.parse(imdbData);

fs.writeFileSync("./imdb.csv",csv,"utf-8");


}
)();


