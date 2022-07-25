import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor() { }

  clientsArray:any[] = [
    {
      id:`client1`,
      name:`Himanshi Khurana`,
      imgSrc:`assets/images/clients/himanshi-khurana-actress.jpg`,
      profession:`Model and Actress`,
      socialLinks:{
        instgram:``,
        facebook:``,
        twitter:``,
      }
    },
    {
      id:`client2`,
      name:`Ammy Virk`,
      imgSrc:`assets/images/clients/ammy-virk-client.jpg`,
      profession:`Actor and Singer`,
      socialLinks:{
        instgram:``,
        facebook:``,
        twitter:``,
      }
    },
    {
      id:`client3`,
      name:`Sonam Bajwa`,
      imgSrc:`assets/images/clients/sonam-bajwa-client.jpg`,
      profession:`Actress, Model`,
      socialLinks:{
        instgram:``,
        facebook:``,
        twitter:``,
      }
    },
    {
      id:`client4`,
      name:`Nia Sharma`,
      imgSrc:`assets/images/clients/nia-sharma-client.jpg`,
      profession:`Actress, Model`,
      socialLinks:{
        instgram:``,
        facebook:``,
        twitter:``,
      }
    },
    {
      id:`client5`,
      name:`Tania`,
      imgSrc:`assets/images/clients/tania-client.jpg`,
      profession:`Actress, Model`,
      socialLinks:{
        instgram:``,
        facebook:``,
        twitter:``,
      }
    },
    {
      id:`client6`,
      name:`Inder Chahal`,
      imgSrc:`assets/images/clients/inder-chahal-client.jpg`,
      profession:`Singer`,
      socialLinks:{
        instgram:``,
        facebook:``,
        twitter:``,
      }
    },
    {
      id:`client7`,
      name:`Amar Sehmbi`,
      imgSrc:`assets/images/clients/amar-sehmbi-client.jpg`,
      profession:`Singer`,
      socialLinks:{
        instgram:``,
        facebook:``,
        twitter:``,
      }
    },
    {
      id:`client8`,
      name:`Jordan Sandhu`,
      imgSrc:`assets/images/clients/jordan-sandhu-client.jpg`,
      profession:`Singer and Actor`,
      socialLinks:{
        instgram:``,
        facebook:``,
        twitter:``,
      }
    },
    {
      id:`client9`,
      name:`Baani Sandhu`,
      imgSrc:`assets/images/clients/baani-sandhu-client.jpg`,
      profession:`Singer`,
      socialLinks:{
        instgram:``,
        facebook:``,
        twitter:``,
      }
    },
    {
      id:`client10`,
      name:`Binnu Dhillon`,
      imgSrc:`assets/images/clients/binnu-dhillon-client.jpg`,
      profession:`Actor and Comedian`,
      socialLinks:{
        instgram:``,
        facebook:``,
        twitter:``,
      }
    },
    {
      id:`client11`,
      name:`Kainaat Arora`,
      imgSrc:`assets/images/clients/Kainaat-Arora-client.jpg`,
      profession:`Actress`,
      socialLinks:{
        instgram:``,
        facebook:``,
        twitter:``,
      }
    },
    {
      id:`client12`,
      name:`Priyanka Bhardwaj`,
      imgSrc:`assets/images/clients/priyanka-bhardwaj-client.jpg`,
      profession:`Actress, Model`,
      socialLinks:{
        instgram:``,
        facebook:``,
        twitter:``,
      }
    },
    {
      id:`client13`,
      name:`Bunty Bains`,
      imgSrc:`assets/images/clients/bunty-bains-client.jpg`,
      profession:`Lyricist, Song Writer`,
      socialLinks:{
        instgram:``,
        facebook:``,
        twitter:``,
      }
    },
    {
      id:`client14`,
      name:`Sara Gurpal`,
      imgSrc:`assets/images/clients/sara-gurpal-client.jpg`,
      profession:`Model, Actress`,
      socialLinks:{
        instgram:``,
        facebook:``,
        twitter:``,
      }
    },
    {
      id:`client15`,
      name:`Raavi Kaur Bal`,
      imgSrc:`assets/images/clients/raavi-bal-client.jpg`,
      profession:`Model, Actress`,
      socialLinks:{
        instgram:``,
        facebook:``,
        twitter:``,
      }
    },
    {
      id:`client16`,
      name:`Firoza Khan`,
      imgSrc:`assets/images/clients/firoza-khan-client.jpg`,
      profession:`Actress`,
      socialLinks:{
        instgram:``,
        facebook:``,
        twitter:``,
      }
    },
    {
      id:`client17`,
      name:`Gulab Sidhu`,
      imgSrc:`assets/images/clients/gulab-sidhu-client.jpg`,
      profession:`Punjabi Singer`,
      socialLinks:{
        instgram:``,
        facebook:``,
        twitter:``,
      }
    },
    {
      id:`client18`,
      name:`Arman Bedil`,
      imgSrc:`assets/images/clients/armaan-bedil-client.jpg`,
      profession:`Punjabi Singer`,
      socialLinks:{
        instgram:``,
        facebook:``,
        twitter:``,
      }
    },
    {
      id:`client19`,
      name:`Harsimran`,
      imgSrc:`assets/images/clients/harsimran-client.jpg`,
      profession:`Punjabi Singer`,
      socialLinks:{
        instgram:``,
        facebook:``,
        twitter:``,
      }
    },
    {
      id:`client20`,
      name:`Pav Dharia`,
      imgSrc:`assets/images/clients/pav-dharia-client.jpg`,
      profession:`Punjabi Singer`,
      socialLinks:{
        instgram:``,
        facebook:``,
        twitter:``,
      }
    },
    {
      id:`client21`,
      name:`Prophec`,
      imgSrc:`assets/images/clients/prophec-client.jpg`,
      profession:`Singer`,
      socialLinks:{
        instgram:``,
        facebook:``,
        twitter:``,
      }
    },
    {
      id:`client22`,
      name:`Aneri Vajani`,
      imgSrc:`assets/images/clients/aneri-vajani.jpg`,
      profession:`Actress`,
      socialLinks:{
        instgram:``,
        facebook:``,
        twitter:``,
      }
    },
    {
      id:`client23`,
      name:`Anushka Arora`,
      imgSrc:`assets/images/clients/anushka-arora-client.jpg`,
      profession:`TV Presenter, Influencer`,
      socialLinks:{
        instgram:``,
        facebook:``,
        twitter:``,
      }
    },
    {
      id:`client24`,
      name:`Bannet Dosanjh`,
      imgSrc:`assets/images/clients/bannet-dosanjh-client.jfif`,
      profession:`Singer`,
      socialLinks:{
        instgram:``,
        facebook:``,
        twitter:``,
      }
    },
    {
      id:`client25`,
      name:`Emiway Bantai`,
      imgSrc:`assets/images/clients/emiway-bantai.jpg`,
      profession:`Singer, Rapper`,
      socialLinks:{
        instgram:``,
        facebook:``,
        twitter:``,
      }
    },
    {
      id:`client26`,
      name:`Girik Aman`,
      imgSrc:`assets/images/clients/girik-aman-client.jpg`,
      profession:`Singer`,
      socialLinks:{
        instgram:``,
        facebook:``,
        twitter:``,
      }
    },
    {
      id:`client27`,
      name:`Gurmoh`,
      imgSrc:`assets/images/clients/Gurmoh-client.png`,
      profession:`Singer`,
      socialLinks:{
        instgram:``,
        facebook:``,
        twitter:``,
      }
    },
    {
      id:`client28`,
      name:`Harleen Kaur Deol`,
      imgSrc:`assets/images/clients/harleen-deol-client.jpg`,
      profession:`Indian Crickter, Athlete`,
      socialLinks:{
        instgram:``,
        facebook:``,
        twitter:``,
      }
    },
    {
      id:`client29`,
      name:`Harp Farmer`,
      imgSrc:`assets/images/clients/harp-farmer-client.jpg`,
      profession:`Influencer, Model`,
      socialLinks:{
        instgram:``,
        facebook:``,
        twitter:``,
      }
    },
    {
      id:`client30`,
      name:`Harsh Rajput`,
      imgSrc:`assets/images/clients/harsh-rajput-client.jpg`,
      profession:`Indian Television Actor`,
      socialLinks:{
        instgram:``,
        facebook:``,
        twitter:``,
      }
    },
    {
      id:`client31`,
      name:`Jagdeep Sidhu`,
      imgSrc:`assets/images/clients/jagdeep-sidhu-client.jpg`,
      profession:`Filmmaker, Writer`,
      socialLinks:{
        instgram:``,
        facebook:``,
        twitter:``,
      }
    },
    {
      id:`client32`,
      name:`Jimmy Sharma`,
      imgSrc:`assets/images/clients/jimmy-sharma-client.jpg`,
      profession:`Model`,
      socialLinks:{
        instgram:``,
        facebook:``,
        twitter:``,
      }
    },
    {
      id:`client33`,
      name:`Kaajal jain`,
      imgSrc:`assets/images/clients/kaajal-jain-client.jpg`,
      profession:`Model`,
      socialLinks:{
        instgram:``,
        facebook:``,
        twitter:``,
      }
    },
    {
      id:`client34`,
      name:`Kamal Kahlon`,
      imgSrc:`assets/images/clients/kamal-kahlon-client.jpg`,
      profession:`Singer`,
      socialLinks:{
        instgram:``,
        facebook:``,
        twitter:``,
      }
    },
    {
      id:`client35`,
      name:`Kavita Ghai`,
      imgSrc:`assets/images/clients/kavita-ghai-client.jpg`,
      profession:`Actress`,
      socialLinks:{
        instgram:``,
        facebook:``,
        twitter:``,
      }
    },
    {
      id:`client36`,
      name:`Khan Bhaini`,
      imgSrc:`assets/images/clients/khan-bhaini-client.jpg`,
      profession:`Punjabi Singer`,
      socialLinks:{
        instgram:``,
        facebook:``,
        twitter:``,
      }
    },
    {
      id:`client37`,
      name:`Kritika Sobti`,
      imgSrc:`assets/images/clients/kritika-sobti.jpg`,
      profession:`Model, Content Creator`,
      socialLinks:{
        instgram:``,
        facebook:``,
        twitter:``,
      }
    },
    {
      id:`client38`,
      name:`Maahi Sharma`,
      imgSrc:`assets/images/clients/maahi-sharma-client.jpg`,
      profession:`Model, Actress`,
      socialLinks:{
        instgram:``,
        facebook:``,
        twitter:``,
      }
    },
    {
      id:`client39`,
      name:`Kul Sidhu`,
      imgSrc:`assets/images/clients/kul-sidhu-client.jpg`,
      profession:`Actress`,
      socialLinks:{
        instgram:``,
        facebook:``,
        twitter:``,
      }
    },
    {
      id:`client40`,
      name:`Manni Sandhu`,
      imgSrc:`assets/images/clients/manni-sandhu-client.jpg`,
      profession:`Music Producer`,
      socialLinks:{
        instgram:``,
        facebook:``,
        twitter:``,
      }
    },
    {
      id:`client41`,
      name:`Manpreet Toor`,
      imgSrc:`assets/images/clients/manpreet-toor-client.jpg`,
      profession:`Dancer, Choreographer`,
      socialLinks:{
        instgram:``,
        facebook:``,
        twitter:``,
      }
    },
    {
      id:`client42`,
      name:`Mix Singh`,
      imgSrc:`assets/images/clients/mix-singh-client.jpg`,
      profession:`Music Producer and Director`,
      socialLinks:{
        instgram:``,
        facebook:``,
        twitter:``,
      }
    },
    {
      id:`client43`,
      name:`Navjit Buttar`,
      imgSrc:`assets/images/clients/navjit-buttar-client.jpg`,
      profession:`Film director`,
      socialLinks:{
        instgram:``,
        facebook:``,
        twitter:``,
      }
    },
    {
      id:`client44`,
      name:`Orvana Ghai`,
      imgSrc:`assets/images/clients/orvana-ghai-client.jpg`,
      profession:`Digital Creator`,
      socialLinks:{
        instgram:``,
        facebook:``,
        twitter:``,
      }
    },
    {
      id:`client45`,
      name:`Param Singh`,
      imgSrc:`assets/images/clients/param-singh-client.jpg`,
      profession:`Singer, Songwriter`,
      socialLinks:{
        instgram:``,
        facebook:``,
        twitter:``,
      }
    },
    {
      id:`client46`,
      name:`Payal Rajput`,
      imgSrc:`assets/images/clients/payal-rajput-client.jpg`,
      profession:`Actress, Model`,
      socialLinks:{
        instgram:``,
        facebook:``,
        twitter:``,
      }
    },
    {
      id:`client47`,
      name:`Piyush Sehdev`,
      imgSrc:`assets/images/clients/piyush-sehdev-client.jpg`,
      profession:`Actor, Model`,
      socialLinks:{
        instgram:``,
        facebook:``,
        twitter:``,
      }
    },
    {
      id:`client48`,
      name:`Prakruti Mishra`,
      imgSrc:`assets/images/clients/prakruti-mishra-client.jfif`,
      profession:`Actress`,
      socialLinks:{
        instgram:``,
        facebook:``,
        twitter:``,
      }
    },
    {
      id:`client49`,
      name:`Raashi Sood`,
      imgSrc:`assets/images/clients/raashi-sood-client.jpg`,
      profession:`Actress`,
      socialLinks:{
        instgram:``,
        facebook:``,
        twitter:``,
      }
    },
    {
      id:`client50`,
      name:`Amardeep Singh`,
      imgSrc:`assets/images/clients/amardeep-singh-client.jfif`,
      profession:`Film director`,
      socialLinks:{
        instgram:``,
        facebook:``,
        twitter:``,
      }
    },
    {
      id:`client51`,
      name:`Ahen vaatish`,
      imgSrc:`assets/images/clients/ahen-client.jpg`,
      profession:`Actor and Art director`,
      socialLinks:{
        instgram:``,
        facebook:``,
        twitter:``,
      }
    },
    {
      id:`client52`,
      name:`Rahim Pardesi`,
      imgSrc:`assets/images/clients/rahim-pardesi-client.jpg`,
      profession:`Youtuber, Actor`,
      socialLinks:{
        instgram:``,
        facebook:``,
        twitter:``,
      }
    },
    {
      id:`client53`,
      name:`Rajiv Thakur`,
      imgSrc:`assets/images/clients/rajiv-thakur-client.jpg`,
      profession:`Actor, Anchor`,
      socialLinks:{
        instgram:``,
        facebook:``,
        twitter:``,
      }
    },
    {
      id:`client54`,
      name:`Rakshit Wahi`,
      imgSrc:`assets/images/clients/rakshit-wahi-client.jpg`,
      profession:`Actor`,
      socialLinks:{
        instgram:``,
        facebook:``,
        twitter:``,
      }
    },
    {
      id:`client55`,
      name:`Reema Malhotra`,
      imgSrc:`assets/images/clients/reema-malhotra-client.jpg`,
      profession:`Crickter`,
      socialLinks:{
        instgram:``,
        facebook:``,
        twitter:``,
      }
    },
    {
      id:`client56`,
      name:`Resham Singh Anmol`,
      imgSrc:`assets/images/clients/resham-anmol-client.jpg`,
      profession:`Punjabi Singer`,
      socialLinks:{
        instgram:``,
        facebook:``,
        twitter:``,
      }
    },
    {
      id:`client57`,
      name:`Reyhna Pandit`,
      imgSrc:`assets/images/clients/reyna-pandit-client.jpg`,
      profession:`Actress`,
      socialLinks:{
        instgram:``,
        facebook:``,
        twitter:``,
      }
    },
    {
      id:`client58`,
      name:`Rohanpreet Singh`,
      imgSrc:`assets/images/clients/rohanpreet-singh-client.jpg`,
      profession:`Singer`,
      socialLinks:{
        instgram:``,
        facebook:``,
        twitter:``,
      }
    },
    {
      id:`client59`,
      name:`Rumman Ahmed`,
      imgSrc:`assets/images/clients/rumman-ahmed-client.jpg`,
      profession:`Model, Actress`,
      socialLinks:{
        instgram:``,
        facebook:``,
        twitter:``,
      }
    },
    {
      id:`client60`,
      name:`Sandeepa Virk`,
      imgSrc:`assets/images/clients/sandeepa-virk.jpg`,
      profession:`Actress`,
      socialLinks:{
        instgram:``,
        facebook:``,
        twitter:``,
      }
    },
    {
      id:`client61`,
      name:`Satinder Satti`,
      imgSrc:`assets/images/clients/satinder-satti-clients.jpg`,
      profession:`Singer, Anchor`,
      socialLinks:{
        instgram:``,
        facebook:``,
        twitter:``,
      }
    },
    {
      id:`client62`,
      name:`Shagun Ajmani`,
      imgSrc:`assets/images/clients/shagun-ajmani-client.jfif`,
      profession:`Indian TV Actress`,
      socialLinks:{
        instgram:``,
        facebook:``,
        twitter:``,
      }
    },
    {
      id:`client63`,
      name:`Shree Brar`,
      imgSrc:`assets/images/clients/shree-brar-client.jpg`,
      profession:`Singer, Song writer`,
      socialLinks:{
        instgram:``,
        facebook:``,
        twitter:``,
      }
    },
    {
      id:`client64`,
      name:`Urvashi Dholakia`,
      imgSrc:`assets/images/clients/urvashi-dholakia-client.jpg`,
      profession:`Actress`,
      socialLinks:{
        instgram:``,
        facebook:``,
        twitter:``,
      }
    },
    {
      id:`client65`,
      name:`Zayed Khan`,
      imgSrc:`assets/images/clients/zayed-khan-client.jpg`,
      profession:`Actor`,
      socialLinks:{
        instgram:``,
        facebook:``,
        twitter:``,
      }
    },
    {
      id:`client66`,
      name:`Sehban Azim`,
      imgSrc:`assets/images/clients/sehban-azim-client.jpg`,
      profession:`Indian TV Actor`,
      socialLinks:{
        instgram:``,
        facebook:``,
        twitter:``,
      }
    },
    {
      id:`client67`,
      name:`Arsh Bajwa`,
      imgSrc:`assets/images/clients/arsh-bajwa-client.jpg`,
      profession:`Singer`,
      socialLinks:{
        instgram:``,
        facebook:``,
        twitter:``,
      }
    },
    {
      id:`client68`,
      name:`Aarushi N Sharma`,
      imgSrc:`assets/images/clients/aarushi-sharma-client.jpg`,
      profession:`Actress, Model`,
      socialLinks:{
        instgram:``,
        facebook:``,
        twitter:``,
      }
    },
   
  ]
}
