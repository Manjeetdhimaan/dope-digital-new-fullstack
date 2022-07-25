import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class BlogsService {
  blogsArray:any;
  getBlogsArray = new Subject<any>();
  constructor(private http: HttpClient) { 
     this.http.get(`https://backend.dopedigital.in/blogs`).subscribe((res:any) => {
      //logged in user
      this.blogsArray = res;
      // getting attendance of logged in user
    },
      error => {
        console.log(error);
      })
  }

  getBlogs() {
   return this.http.get(`https://backend.dopedigital.in/blogs`).toPromise();
  // return this.blogsArray1;

  }
    // return this.blogsArray.slice();

  getselectedBlog = new Subject<any>();

  // Tips for Instagram videos Promotion
  async  get() {
  
  }
  blogsArray1: any[] = [
    {
      "id": "blog1",
      "category": [],
      "header": "Instagram video marketing",
      "categoryId": "The Golden Tips For Driving Your Instagram Audience Crazy With Videos - The perfect video-marketing guide",
      "title": "The Golden Tips For Driving Your Instagram Audience Crazy With Videos",
      "urlTitle": "The Golden Tips For Driving Your Instagram Audience Crazy With Videos",
      "subTitles": [
        "Tips for Instagram videos Promotion"
      ],
      "dateOfCreatingBlog": "26 May 2022",
      "imgSrc": "assets/images/blogImages/first-blog.jpg",
      "instaSimpleLink": "https://www.instagram.com/p/Cd48Qm6PmuY/",
      "twitterSimpleLink": "",
      "facebookSimpleLink": "",
      "linkedinSimpleLink": "",
      "otherFacts": [
        {
          "fact": "With the new feature of video that helps people to express themselves in a better manner leaving a lasting impression on the viewers, Instagram is gaining a lot of popularity. Through Instagram video marketing, the platform has become a great space for a brand to get discovered.",
          "imgSrc": "",
          "imgCaption": "",
          "videoSrc": "",
          "instaLink": ""
        },
        {
          "fact": "It is no longer restricted to being a general social media platform, it now has become a platform for brand promotion. By the magic of videos, audience engagement gets increased because people enjoy video content more.",
          "imgSrc": "",
          "imgCaption": "",
          "videoSrc": "",
          "instaLink": ""
        },
        {
          "fact": "The power of videos is unmatched, and being added as a feature on Instagram has taken marketing to a whole new level!",
          "imgSrc": "",
          "imgCaption": "",
          "videoSrc": "",
          "instaLink": ""
        },
        {
          "fact": "This blog will give you a glimpse of the golden tips for driving your Instagram audience crazy with videos.",
          "imgSrc": "",
          "imgCaption": "",
          "videoSrc": "",
          "instaLink": ""
        },
        {
          "fact": "According to Instagram statistics, the engagement on Instagram videos is 2x times more than on any other type of post. So, promoting your brand with an element of creativity along with fun will help your business to reach its true potential.",
          "imgSrc": "",
          "imgCaption": "",
          "videoSrc": "",
          "instaLink": ""
        }
      ],
      "subTitleFacts": [
        {
          "fact": "Instagram video promotion is user-friendly as it saves the time of both the brand owners and the target audience. It gives a clear idea of the brand to the target audience in only a few seconds. For the brands, it provides an opportunity to showcase their services or products through storytelling because these days marketing is not just about the stuff that you make but about the stories you tell.",
          "imgSrc": "",
          "imgCaption": "",
          "videoSrc": "",
          "instaLink": ""
        },
        {
          "fact": "Following are the Golden tips for driving your Instagram audience crazy with videos:",
          "imgSrc": "",
          "imgCaption": "",
          "videoSrc": "",
          "instaLink": ""
        }
      ],
      "subTitleFactPoints": [
        {
          "title": "<strong>Invest your time in \tInstagram Reels</strong>",
          "point": "Instagram reels are trending these days because this feature has changed the mindset of users from scroll and shift to stop and see. These 60 seconds videos are catchy. Hopping on the trend, and using trending audios, will help get your brand noticed by grabbing the attention of your target audience.",
          "imgSrc": "assets/images/blogImages/image.png",
          "floatImage": "right",
          "imgCaption": "",
          "videoSrc": "",
          "instaLink": ""
        },
        {
          "title": "<strong>Video series is a good idea</strong>",
          "point": "You can introduce Instagram video series based on your brand. For example, if you are a food blogger who keeps trying new cafes, and you went to a cafe that you loved, and want to share your experience about it, you can just make a video series like one can be on the ambiance, another on the food it offers and many more. ",
          "imgSrc": "",
          "imgCaption": "",
          "videoSrc": "",
          "instaLink": ""
        },
        {
          "title": "<strong>Video teasers are important</strong>",
          "point": "Just making the use of videos isn't enough. Suppose you are a fashion blogger, and recently you collaborated with a big brand like Manyavar. When you collaborate and are shooting with a great brand, keep your Instagram audience updated with it by making a small video teaser which helps in keeping your followers excited about your upcoming projects and maintaining their interest in your brand.",
          "imgSrc": "",
          "imgCaption": "",
          "videoSrc": "",
          "instaLink": ""
        },
        {
          "title": "<strong>Use dimensions appropriately</strong>",
          "point": "Imagine you made a video using all the tools, sprinkling the magic of creativity in it but completely ignoring the dimensions. Well, that would be a complete blunder. Your<a href=\"https://www.younedia.com/post/reasons-why-instagram-marketing-is-beneficial-for-your-brand\" target=\"_blank\"> Instagram video marketing strategy</a> is likely to fail if you do not consider dimensions before posting. Try posting your videos in square or vertical format because Instagram is a mobile platform. If you do not post accordingly, your videos are likely to be cropped, so try checking the dimensions before uploading them to avoid any damage.",
          "imgSrc": "",
          "imgCaption": "",
          "videoSrc": "",
          "instaLink": ""
        },
        {
          "title": "<strong>Post BTS(Behind The Scenes) videos</strong>",
          "point": "Even though social media portrays the lives of big brand owners and bloggers as perfect, still we know that it isn’t roses and unicorns all the time. We all are prone to make mistakes, even the perfect brand owners have bad days, your perfect blogger also gets the perfect shot after hundreds of retakes and it is alright. You need to make your audience feel connected with you. For that, post BTS videos on your Instagram account to show the originality of your brand which people can easily relate to. BTS videos are a sneak peek of the hard work behind your successful brand and viewers love to see rawness and relatable content on Instagram.",
          "imgSrc": "",
          "imgCaption": "",
          "videoSrc": "",
          "instaLink": ""
        }
      ],
      "finalNotes": [
        {
          "finalNote": "Instagram has turned out to be one of the best platforms for brand promotion and enjoys a better engagement rate than other platforms."
        },
        {
          "finalNote": "If you are willing to grow your online presence through Instagram, it's time to start creating good ideas for Instagram videos."
        },
        {
          "finalNote": "The key is that your videos need not be expensive, they just need to be authentic with informative content. We at Dope Digital help to present your brand in a perfect manner by planning the perfect Instagram video marketing strategy that is aligned with your business goals by offering services like <a href=\"https://www.dopedigital.in/social-media-management\" target=\"_blank\">social media management</a>, website designing, SEO, SEM, and others."
        },
        {
          "finalNote": "For more information get in touch with us today"
        }
      ],
      "description": ""
    },
    {
      "id":"blog2",
      "category": [],
      "header": "Influencer Marketing",
      "categoryId": "Influencer Marketing - The New Normal In Digital Space",
      "title": "Influencer Marketing - The New Normal In Digital Space",
      "urlTitle": "Influencer Marketing",
      "dateOfCreatingBlog": "30 June 2022",
      "imgSrc": "assets/images/blogImages/june2022/influencer-marketing---dopedigital-min.jpg",
      "instaSimpleLink": "",
      "twitterSimpleLink": "",
      "facebookSimpleLink": "",
      "linkedinSimpleLink": "",
      "otherFacts": [
        {
          "fact": "Probably bloggers creating content and influencing people by promoting different products and services. The scope of influencer marketing has expanded by leaps and bounds, especially after the COVID19 pandemic. People started creating content, the audience started enjoying it, and the brand owners eventually took this as an opportunity for getting their brands discovered by absorbing this as their marketing strategy, that's how <a href=\"https://www.dopedigital.in/social-media-management\" target=\"_blank\">Digital Influencer Marketing</a> grew as an industry.",
          "imgSrc": "",
          "imgCaption": "",
          "videoSrc": "",
          "instaLink": ""
        },
      ],
      "subTitles": [
        "What is influencer marketing?"
      ],
      "subTitleFacts": [
        {
          "fact": "So, Influencer Marketing is a type of social media marketing that involves endorsements of brands through influencers or creators who create good content. The thing goes like this, brands hire social media influencers to endorse their products or service on their social media handles, and these bloggers in return, create enticing content for the audience to get more recognition for the brand, due to that, the brand engagement increases, and so do the sales!",
          "imgSrc": "",
          "imgCaption": "",
          "videoSrc": "",
          "instaLink": ""
        },
      ],
      
     
      "subTitleFactHeader": "Why do you need to incorporate influencer marketing into your marketing strategy?",
     
      "subTitleFactTitles": [
        {
          "point": "Social Influencer Marketing is hands down one of the best ways to reach the target audience, if used rightly, it can help yield great profit for any brand. Imagine an amazing content creator with a great fan base on a social media platform promoting your brand? Do you know what it entails? A hell lot of sales and eventually more profit!"
        },
        {
          "point": "Here are the reasons why you need to incorporate digital influencer marketing into your marketing strategy:"
        }
      ],
      "subTitleFactPoints": [
        {
          "title": "Increased reach and brand awareness",
          "point": "When a social media influencer having credibility promotes your brand, the people automatically feel that the brand is good, and it becomes more popular hence, helps in increasing the brand reach.",
          "imgSrc": "assets/images/blogImages/june2022/influencer-marketing.png",
          "floatImage": "right",
          "imgCaption": "",
          "videoSrc": "",
          "instaLink": ""
        },
        {
          "title": "Time-saving",
          "point": "Incorporating influencer marketing in your marketing strategy will help you in saving time because you can shift your marketing burden to the content creators who will work as marketing agents for your brand by promoting it.",
          "imgSrc": "",
          "floatImage": "",
          "imgCaption": "",
          "videoSrc": "",
          "instaLink": ""
        },
        {
          "title": "An excellent return on investment",
          "point": "Online Influencer marketing sounds too good to be true. Why? Suppose you pay an influencer a certain amount of money for the endorsement of your brand, now, they, who already have a phenomenal fanbase, would promote your brand, and the return it would yield will surely be many times more than what you paid in the first place. Isn't that a great deal? Yes, it indeed is!",
          "imgSrc": "",
          "floatImage": "",
          "imgCaption": "",
          "videoSrc": "",
          "instaLink": ""
        },
        {
          "title": "Helpful in driving conversions",
          "point": "The most significant benefit of influencer marketing is that it is helpful in driving conversions. How? Ok, imagine a consumer in a dilemma about a product or service maybe I am a person who wants a beautiful dress for my birthday and does not have enough time to go to a mall for that and am reluctant to buy it from any online platform because I am worried about the quality of it and suddenly I found a fashion blogger's reel on a haul video that includes super cool dresses. Perfect timing and the answer to my problem. Now, without a second thought, I can buy any of the dresses because they have been reviewed by a blogger. That's the mechanism behind driving conversions.",
          "imgSrc": "assets/images/blogImages/june2022/inflencers-manage-by-dopedigital.png",
          "floatImage": "left",
          "imgCaption": "",
          "videoSrc": "",
          "instaLink": ""
        }
      ],
      "finalNotesHeader": "",
      "finalNotes": [
        {
          "finalNote": "I feel now you are well-versed with the power of digital influencer marketing as the marketing strategy for a brand. \n            So, why not adopt it to entail its benefits?\n            "
        },
        {
          "finalNote": "Are you a brand owner and looking for social network influencers to give your brand the benefit of enormous awareness and reach?"
        },
        {
          "finalNote": "We at <a href=\"https://www.dopedigital.in/\" target=\"_blank\">Dope Digital</a> have a pool of talented influencers who are proven to create enticing content for various brands and have helped the brands in increasing their sales. Along with that, we offer all the digital marketing services like SEO, SEM, PPC, SMO, logo and graphic designing, etc."
        },
        {
          "finalNote": "Get in touch with us today!"
        }
      ],
      "description": ""
    }
  ]

}