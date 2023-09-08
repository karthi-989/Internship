import React from "react";
import Youtube from "./youtubenav";
import Cards from "./cards";
function Youtubeprops(){
    const Movies=[
        {   id:"1",
            img:"https://i.ytimg.com/vi/UTiXQcrLlv4/maxresdefault.jpg",
            tittle:"Master - Official Teaser | Thalapathy Vijay | Anirudh Ravichander | Lokesh Kanagaraj",
            Production:"sun Production",
            date:"Uploaded: Nov 14, 2020",
            img2:"https://yt3.ggpht.com/yLoFyAjWDE9wCZVMpOU_btGz8L-3iBvugSD2UDckz_WezSsZ1GvfKJnG_XN1KU3JW0wZQo1QRQ=s68-c-k-c0x00ffffff-no-rj",
        },
        {   id:"2",
            img:"https://www.cinejosh.com/newsimg/newsmainimg/dasara-teaser_b_3101230947.jpg",
            tittle:"Natural star Nani's First Pan India Film, 'Dasara' - Teaser Review",
            Production:" Nani Productions",
            date:"22november.32mviews",
            img2:"https://www.cinejosh.com/newsimg/newsmainimg/pan-india-stars-to-release-nani-dasara-teaser_b_2901230916.jpg"
        },
        {
            id:"3",
            img:"https://i.ytimg.com/vi/EywX_uxreYA/maxresdefault.jpg",
            tittle:"ANIMAL Pre-Teaser | Ranbir Kapoor | Sandeep Reddy Vanga | Bhushan Kumar | 01st December 2023",
            Production:" T-series",
            date:"Uploaded: Jun 10, 2023",
            img2:"https://i.ytimg.com/vi/EywX_uxreYA/maxresdefault.jpg"
        },
        {
            id:"4",
            img:"https://i.ytimg.com/vi/qqZhnr5d6gs/maxresdefault.jpg",
            tittle:"Hungry Cheetah||OG ||Pawan Kalyan",
            Production:"Dvv Entertainments",
            date:"Upploaded: Sep2 ,2023",
            img2:"https://yt3.ggpht.com/yLoFyAjWDE9wCZVMpOU_btGz8L-3iBvugSD2UDckz_WezSsZ1GvfKJnG_XN1KU3JW0wZQo1QRQ=s68-c-k-c0x00ffffff-no-rj"
        },
        { 
            id:"5",
            img:"https://i.ytimg.com/vi/YpRinf33fBE/maxresdefault.jpg",
            tittle:"BRO Teaser | Pawan Kalyan | Sai Tej | Trivikram | Samuthirakani | ThamanS | People Media Factory",
            Production:"Dvv Entertainments",
            date:"Uploaded: Jun 29, 2023",
            img2:"https://static.toiimg.com/photo/msid-92566428/92566428.jpg"
        },
        { 
            id:"6",
            img:"https://i.ytimg.com/vi/y1Z-Y9Di2Fk/maxresdefault.jpg",
            tittle:"How to Start a YouTube Gaming Channel in 2023",
            Production:"Karthik",
            date:"Uploaded: Dec 8, 2022",
            img2:"https://i.ytimg.com/vi/y1Z-Y9Di2Fk/maxresdefault.jpg"
        },
        {
            id:"7",
            img:"https://i.ytimg.com/vi/Z0zl84VXoTk/hq720_live.jpg?sqp=CMTMwqUG-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBVyTrEZ9M3VNAuNli5ZezbE5QPFQ",
            tittle:"LIVE : యువశక్తి బహిరంగ సభలో పవన్‌ కల్యాణ్‌ ప్రసంగం | Pawan Kalyan Speech @ Yuvashakti Sabha | 10TV",
            Production:"Janasena",
            date:"Uploaded: Jan 11, 2023",
            img2:"https://yt3.googleusercontent.com/ytc/AOPolaQghI1tI2AyTCQ9W2uHVrCIN6NU3tjVIfKi1mf5=s900-c-k-c0x00ffffff-no-rj"
        },
        {
            id:"8",
            img:"https://marketplace.canva.com/EAEqfS4X0Xw/1/0/1600w/canva-most-attractive-youtube-thumbnail-wK95f3XNRaM.jpg",
            tittle:"Free and customizable YouTube thumbnail templates | Canva",
            Production:"Canva",
            date:"Uploaded: Jan 11, 2023",
            img2:"https://encrypted-tbn2.gstatic.com/faviconV2?url=https://canva.com&client=VFE&size=64&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2"
        },
        { 
            id:"9",
            img:"https://i.ytimg.com/vi/_uQrJ0TkZlc/maxresdefault.jpg",
            tittle:"Python Tutorial - Python Full Course for Beginners",
            Production:" Demosh",
            date:"Uploaded: Feb 18, 2019",
            img2:"https://encrypted-tbn2.gstatic.com/faviconV2?url=https://youtube.com&client=VFE&size=64&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2"
        },
        {
            id:"10",
            img:"https://i.ytimg.com/vi/YJJXVk34H3Q/maxresdefault.jpg",
            tittle:"Naa anveshana two years of world tour journey",
            Production:"Na Anveshna",
            date:"Uploaded: Mar 20, 2023",
            img2:"https://img6.fresherslive.com/latestnews/2023/04/who-is-naa-anveshana-how-is-naa-anveshana-6434e200672a76726375-900.webp"
        },        { 
            id:"11",
            img:"https://i.ytimg.com/vi/hBCl4ukjHy0/maxresdefault.jpg",
            tittle:"How to Start a YouTube Gaming Channel in 2023",
            Production:"Karthik",
            date:"Uploaded: Dec 8, 2022",
            img2:"https://i.ytimg.com/vi/y1Z-Y9Di2Fk/maxresdefault.jpg"
        },{
            id:"12",
            img:"https://i.ytimg.com/vi/5-6AooHVEBk/maxresdefault.jpg",
            tittle:"How to start your own YouTube channel in 5 easy steps",
            Production:"Karthi",
            date:"Uploaded: Nov 1",
            img2:"https://encrypted-tbn2.gstatic.com/faviconV2?url=https://youtube.com&client=VFE&size=64&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2"
        },
        {
           id:"13",
           img:"https://i.ytimg.com/vi/UL2BY0NR0Eo/maxresdefault.jpg",
           tittle:"Most Savage Sports Highlight Video on Youtube (Jordan, Ali, Tyson, Brady, & More",
           Production:"Myke Tyson",
           date:"Uploaded: Oct 7,2022",
           img2:"https://yt3.googleusercontent.com/ytc/AOPolaR70iJd74A69fJ3NAr2zmD49FSQW383hDnepl5r=s900-c-k-c0x00ffffff-no-rj",
        },
        {
            id:"14",
            img:"https://i.ytimg.com/vi/-cj9b4GTERs/maxresdefault.jpg",
            tittle:"NAA ANVESHANA CHALLENGED ME 💪 | SOLO CREATORS VS CORPORATE CREATORS | SHALL I QUIT YOUTUBE",
            Production:"Na Nveshna",
            date:"Uploaded: Oct 7,2022",
            img2:"https://www.adobe.com/content/dam/cc/us/en/creativecloud/design/discover/mascot-logo-design/mascot-logo-design_fb-img_1200x800.jpg",
         },
         {
            id:"15",
            img:"https://i.ytimg.com/vi/uxbTq7O90Fo/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBqCb0VesNny0xAgtDQzHZBlbd3Uw",
            tittle:"JanaSena Party - YouTube",
            Production:"Janasena",
            date:"Uploaded: Oct 7,2022",
            img2:"https://pbs.twimg.com/media/Eg1Z2G-XkAQVaXg.jpg",
         }, 

         {
            id:"10",
            img:"https://i.ytimg.com/vi/YJJXVk34H3Q/maxresdefault.jpg",
            tittle:"Naa anveshana two years of world tour journey",
            Production:"Na Anveshna",
            date:"Uploaded: Mar 20, 2023",
            img2:"https://img6.fresherslive.com/latestnews/2023/04/who-is-naa-anveshana-how-is-naa-anveshana-6434e200672a76726375-900.webp"
        },        { 
            id:"11",
            img:"https://i.ytimg.com/vi/hBCl4ukjHy0/maxresdefault.jpg",
            tittle:"How to Start a YouTube Gaming Channel in 2023",
            Production:"Karthik",
            date:"Uploaded: Dec 8, 2022",
            img2:"https://i.ytimg.com/vi/y1Z-Y9Di2Fk/maxresdefault.jpg"
        },{
            id:"12",
            img:"https://i.ytimg.com/vi/5-6AooHVEBk/maxresdefault.jpg",
            tittle:"How to start your own YouTube channel in 5 easy steps",
            Production:"Karthi",
            date:"Uploaded: Nov 1",
            img2:"https://encrypted-tbn2.gstatic.com/faviconV2?url=https://youtube.com&client=VFE&size=64&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2"
        },
        {
           id:"13",
           img:"https://i.ytimg.com/vi/UL2BY0NR0Eo/maxresdefault.jpg",
           tittle:"Most Savage Sports Highlight Video on Youtube (Jordan, Ali, Tyson, Brady, & More",
           Production:"Myke Tyson",
           date:"Uploaded: Oct 7,2022",
           img2:"https://yt3.googleusercontent.com/ytc/AOPolaR70iJd74A69fJ3NAr2zmD49FSQW383hDnepl5r=s900-c-k-c0x00ffffff-no-rj",
        },
        {
            id:"14",
            img:"https://i.ytimg.com/vi/-cj9b4GTERs/maxresdefault.jpg",
            tittle:"NAA ANVESHANA CHALLENGED ME 💪 | SOLO CREATORS VS CORPORATE CREATORS | SHALL I QUIT YOUTUBE",
            Production:"Na Nveshna",
            date:"Uploaded: Oct 7,2022",
            img2:"https://www.adobe.com/content/dam/cc/us/en/creativecloud/design/discover/mascot-logo-design/mascot-logo-design_fb-img_1200x800.jpg",
         },
    ];
    return(
          Movies.map((u)=>{
            return(
                <Cards key={u.id}  img={u.img} tittle={u.tittle} Production={u.Production} date={u.date} img2={u.img2} ></Cards>
            ) 
          }
            )
    )
}
export default Youtubeprops