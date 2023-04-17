const RSSParser=require('rss-parser');
const express=require('express')
const cors=require('cors')
const bodyParser=require('body-parser')
const app=express()
const SibApiV3Sdk = require('sib-api-v3-sdk');


app.use(bodyParser.json())
//technology
const techcrunch='https://techcrunch.com/feed/'
const wirede='https://www.wired.com/feed/';
const verge='https://www.theverge.com/rss/index.xml'
const gizmodo='http://gizmodo.com/vip.xml'
const ubergizmo='https://www.ubergizmo.com/feed/'


/// for busniss
const forbes='https://www.forbes.com/business/feed/'
const stocktwits='https://blog.stocktwits.com/feed'
const reddit=' http://www.reddit.com/.rss'
const bloomberg='http://www.bloomberg.com/feeds/podcasts/view.xml'
const financial='https://www.reutersagency.com/feed/?best-topics=business-finance&post_type=best'


//for politic
const politico='https://www.politico.eu/feed/'
const cnn='https://crawltest.cis.upenn.edu/cnn/cnn_allpolitics.rss.xml'
const hill='https://thehill.com/homenews/feed/'
const fivethirtyeight='https://fivethirtyeight.com/contributors/nate-silver/feed/'
//entertainements
const variety='https://variety.com/feed'
const et='https://www.etonline.com/news/rss'
const deadline='https://deadline.com/feed'

/// sports
const espn='https://www.espn.com/espn/rss/news'
const bleacher='https://www.ncaa.com/news/basketball-men/d1/rss.xml'
const cbss='https://www.cbssports.com/rss/headlines/boxing/'
const yahoo='https://sports.yahoo.com/rss/'
// food
const bonapitie='https://www.bonappetit.com/feed'
const eater='https://www.eater.com/rss/index.xml'
const eats='https://www.seriouseats.com/atom.xml'
const network='https://www.epicurious.com/feed/rss'
//beauty 
const Vogue='https://www.vogue.com/rss'
 const Refinery29= 'https://www.refinery29.com/en-us/rss.xml'
const Cosmopolitan= 'https://www.cosmopolitan.com/rss/'
const Glamour='https://www.glamour.com/rss'
/// history
const New_Yorker='https://www.newyorker.com/feed/news'
const BBC='https://www.historyextra.com/feed/'
const history='https://www.theguardian.com/uk/culture/rss'
const Archaeology='http://historynewsnetwork.org/rss.xml'
///Science
const ScienceDaily='https://phys.org/rss-feed/'
 const Scientist='https://www.theverge.com/science/rss/index.xml'
 const Environmental='https://www.livescience.com/feeds/all'
 const EurekAlert='https://www.smithsonianmag.com/rss/science-nature/'

///Science
const   plant ='https://www.cntraveler.com/feed/rss'
 const travel='https://www.theguardian.com/uk/travel/rss'
 const bbc='https://skift.com/feed/'
 const weekly='https://www.travelingmom.com/feed/'




app.use(cors())
const parser=new RSSParser()
app.use(cors())

const axios = require('axios');


app.post('/email',async (req,res)=>{
    let articles=[]
    console.log(req.query.source);
    if(req.query.source=="techcrunch"){

       
        const feed=await parser.parseURL(techcrunch)


        feed.items.forEach(item=>{
            articles.push({item})
           
            })
    }
   else if(req.query.source=="theverge"){
      

        const feed=await parser.parseURL(verge)

        feed.items.forEach(item=>{
            articles.push({item})
           
            })
    }else if (req.query.source=='wired'){
        const feed=await parser.parseURL(wirede)
        feed.items.forEach(item=>{
            articles.push({item})
           
            })}
            else if (req.query.source=='gizmodo'){
                const feed=await parser.parseURL(gizmodo)
                feed.items.forEach(item=>{
                    articles.push({item})
                   
                    })

    } else if (req.query.source=='ubergizmo'){
        const feed=await parser.parseURL(ubergizmo)
        feed.items.forEach(item=>{
            articles.push({item})
           
            })

}
//for busniss
else if (req.query.source=='forbes'){
    const feed=await parser.parseURL(forbes)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}
else if (req.query.source=='stocktwits'){
    const feed=await parser.parseURL(stocktwits)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}
else if (req.query.source=='reddit'){
    const feed=await parser.parseURL(reddit)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}
else if (req.query.source=='bloomberg'){
    const feed=await parser.parseURL(bloomberg)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}

else if (req.query.source=='financial'){
    const feed=await parser.parseURL(financial)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}


// for politic

else if (req.query.source=='politico'){
    const feed=await parser.parseURL(politico)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}
else if (req.query.source=='cnn'){
    const feed=await parser.parseURL(cnn)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}
else if (req.query.source=='hill'){
    const feed=await parser.parseURL(hill)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}
else if (req.query.source=='fivethirtyeight'){
    const feed=await parser.parseURL(fivethirtyeight)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}
// entertainements
else if (req.query.source=='variety'){
    const feed=await parser.parseURL(variety)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}
else if (req.query.source=='et'){
    const feed=await parser.parseURL(et)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}
else if (req.query.source=='deadline'){
    const feed=await parser.parseURL(deadline)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}
/// sports

else if (req.query.source=='espn'){
    const feed=await parser.parseURL(espn)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}

else if (req.query.source=='bleacher'){
    const feed=await parser.parseURL(bleacher)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}
else if (req.query.source=='cbss'){
    const feed=await parser.parseURL(cbss)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}

else if (req.query.source=='yahoo'){
    const feed=await parser.parseURL(yahoo)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}
//food

else if (req.query.source=='bonapitie'){
    const feed=await parser.parseURL(bonapitie)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}
else if (req.query.source=='eater'){
    const feed=await parser.parseURL(eater)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}

else if (req.query.source=='eats'){
    const feed=await parser.parseURL(eats)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}
else if (req.query.source=='network'){
    const feed=await parser.parseURL(network)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}

//beauty




else if (req.query.source=='Vogue'){
    const feed=await parser.parseURL(Vogue)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}


else if (req.query.source=='Refinery29'){
    const feed=await parser.parseURL(Refinery29)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}
else if (req.query.source=='Cosmopolitan'){
    const feed=await parser.parseURL(Cosmopolitan)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}
else if (req.query.source=='Glamour'){
    const feed=await parser.parseURL(Glamour)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}
//////////history
else if (req.query.source=='New_Yorker'){
    const feed=await parser.parseURL(New_Yorker)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}

else if (req.query.source=='BBC'){
    const feed=await parser.parseURL(BBC)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}
else if (req.query.source=='history'){
    const feed=await parser.parseURL(history)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}
else if (req.query.source=='Archaeology'){
    const feed=await parser.parseURL(Archaeology)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}
////Science
else if (req.query.source=='ScienceDaily'){
    const feed=await parser.parseURL(ScienceDaily)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}
else if (req.query.source=='Scientist'){
    const feed=await parser.parseURL(Scientist)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}
else if (req.query.source=='Environmental'){
    const feed=await parser.parseURL(Environmental)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}
else if (req.query.source=='EurekAlert'){
    const feed=await parser.parseURL(EurekAlert)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}
///travel

else if (req.query.source=='plant'){
    const feed=await parser.parseURL(plant)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}
else if (req.query.source=='travel'){
    const feed=await parser.parseURL(travel)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}
else if (req.query.source=='bbc'){
    const feed=await parser.parseURL(bbc)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}
else if (req.query.source=='weekly'){
    const feed=await parser.parseURL(weekly)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}
res.send(articles)
let formatted={day:'numeric',
month:'long',
year:'numeric'
}

// Define the email data
const emailData={
    "sender":{
      "name":"newspilot",
      "email":"newspilot394@gmail.com"
    },
    "to":[
      {
        "email":"elhagouchihalima@gmail.com",
        "name":"halima"
      }
    ],
    "subject":"sites that you follow:",
    "htmlContent":`<html>
    <head>
        <style>
          /* inline styles */
          body {
            font-family: Arial, sans-serif;
          }
          h1{
            color:black;
            text-decoration:none;
             font-weight: bold;
          }
          p{color:black;
            font-size: 30px;
            margin: 5px;
            padding: 5px;
          }
          div{
           border-width:2 ;
           border-radius: 10px;
           border-color: #191970;
           padding: 5px;
          }
          img{
            width:300px;
          }
.fl{display:flex; justify-content:between;}
        </style>
      </head>
    <body>
    
    <img src='https://drive.google.com/file/d/1-c0B3aT3WHRk92GXgJqen778rik-4-w5/view?usp=sharing'>
    <p>Stay informed and engaged with 
    our comprehensive news article recommendations, 
    available to you anytime, anywhere.</p>
   
    <div> <p>news of ${req.query.source} :</p>
    ${articles.map((item) => {
          return (
` <div><h1>
<a href=${item.item.link}>${item.item.title}</a></h1>
<p>${new Date(item.item.pubDate).toLocaleDateString("en-GB",formatted)}</p></div>`)}).join('')}
    
    </div>
    
    </body></html>`
 
  };

  // Calculate the Unix timestamp for 9am each day
// const now = new Date();
// const timestamp = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 9).getTime() / 1000;

// // Set the sendAt parameter to the calculated timestamp
// emailData.sendAt = timestamp;
axios.post('https://api.sendinblue.com/v3/smtp/email',emailData , {
  headers: {
    'api-key':'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'
  }
})
.then(()=>console.log('email send successfuly'))
.catch(function (error) {console.log(error);});

})

app.post('/subscribe', async (req, res) => {
  const { email, website } = req.body;

  // Fetch RSS feed from the API endpoint
  const response = await axios.get('http://localhost:4000/getNews');
  const feed = await parser.parseString(response.data);

  // Send email for each new item in the RSS feed
  feed.items.forEach((item) => {
    const msg = {
      to: email,
      from: 'your-email@example.com',
      subject: `New article on ${feed.title}`,
      html: `<h2>${item.title}</h2><p>${item.contentSnippet}</p><a href="${item.link}">Read more</a>`,
    };
    sgMail.send(msg);
  });

  res.send('Subscription successful!');
});

app.get('/getNews',async (req,res)=>{
    const articles=[]

    console.log(req.query);
    if(req.query.source=="techcrunch"){

       
        const feed=await parser.parseURL(techcrunch)


        feed.items.forEach(item=>{
            articles.push({item})
           
            })
    }
   else if(req.query.source=="theverge"){
      

        const feed=await parser.parseURL(verge)

        feed.items.forEach(item=>{
            articles.push({item})
           
            })
    }else if (req.query.source=='wired'){
        const feed=await parser.parseURL(wirede)
        feed.items.forEach(item=>{
            articles.push({item})
           
            })}
            else if (req.query.source=='gizmodo'){
                const feed=await parser.parseURL(gizmodo)
                feed.items.forEach(item=>{
                    articles.push({item})
                   
                    })

    } else if (req.query.source=='ubergizmo'){
        const feed=await parser.parseURL(ubergizmo)
        feed.items.forEach(item=>{
            articles.push({item})
           
            })

}
//for busniss
else if (req.query.source=='forbes'){
    const feed=await parser.parseURL(forbes)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}
else if (req.query.source=='stocktwits'){
    const feed=await parser.parseURL(stocktwits)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}
else if (req.query.source=='reddit'){
    const feed=await parser.parseURL(reddit)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}
else if (req.query.source=='bloomberg'){
    const feed=await parser.parseURL(bloomberg)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}

else if (req.query.source=='financial'){
    const feed=await parser.parseURL(financial)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}


// for politic

else if (req.query.source=='politico'){
    const feed=await parser.parseURL(politico)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}
else if (req.query.source=='cnn'){
    const feed=await parser.parseURL(cnn)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}
else if (req.query.source=='hill'){
    const feed=await parser.parseURL(hill)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}
else if (req.query.source=='fivethirtyeight'){
    const feed=await parser.parseURL(fivethirtyeight)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}
// entertainements
else if (req.query.source=='variety'){
    const feed=await parser.parseURL(variety)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}
else if (req.query.source=='et'){
    const feed=await parser.parseURL(et)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}
else if (req.query.source=='deadline'){
    const feed=await parser.parseURL(deadline)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}
/// sports

else if (req.query.source=='espn'){
    const feed=await parser.parseURL(espn)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}

else if (req.query.source=='bleacher'){
    const feed=await parser.parseURL(bleacher)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}
else if (req.query.source=='cbss'){
    const feed=await parser.parseURL(cbss)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}

else if (req.query.source=='yahoo'){
    const feed=await parser.parseURL(yahoo)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}
//food

else if (req.query.source=='bonapitie'){
    const feed=await parser.parseURL(bonapitie)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}
else if (req.query.source=='eater'){
    const feed=await parser.parseURL(eater)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}

else if (req.query.source=='eats'){
    const feed=await parser.parseURL(eats)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}
else if (req.query.source=='network'){
    const feed=await parser.parseURL(network)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}

//beauty




else if (req.query.source=='Vogue'){
    const feed=await parser.parseURL(Vogue)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}


else if (req.query.source=='Refinery29'){
    const feed=await parser.parseURL(Refinery29)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}
else if (req.query.source=='Cosmopolitan'){
    const feed=await parser.parseURL(Cosmopolitan)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}
else if (req.query.source=='Glamour'){
    const feed=await parser.parseURL(Glamour)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}
//////////history
else if (req.query.source=='New_Yorker'){
    const feed=await parser.parseURL(New_Yorker)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}

else if (req.query.source=='BBC'){
    const feed=await parser.parseURL(BBC)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}
else if (req.query.source=='history'){
    const feed=await parser.parseURL(history)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}
else if (req.query.source=='Archaeology'){
    const feed=await parser.parseURL(Archaeology)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}
////Science
else if (req.query.source=='ScienceDaily'){
    const feed=await parser.parseURL(ScienceDaily)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}
else if (req.query.source=='Scientist'){
    const feed=await parser.parseURL(Scientist)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}
else if (req.query.source=='Environmental'){
    const feed=await parser.parseURL(Environmental)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}
else if (req.query.source=='EurekAlert'){
    const feed=await parser.parseURL(EurekAlert)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}
///travel

else if (req.query.source=='plant'){
    const feed=await parser.parseURL(plant)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}
else if (req.query.source=='travel'){
    const feed=await parser.parseURL(travel)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}
else if (req.query.source=='bbc'){
    const feed=await parser.parseURL(bbc)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}
else if (req.query.source=='weekly'){
    const feed=await parser.parseURL(weekly)
    feed.items.forEach(item=>{
        articles.push({item})
       
        })

}
res.send(articles)
})

app.listen(4000,()=>{
    console.log(`server tevhnology on http://localhost:4000/`)
})

