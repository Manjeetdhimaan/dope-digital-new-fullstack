import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getServices() {
    return this.serviceArray.slice();
  }

  getSelectedService = new Subject<any>();
  constructor() { }
  serviceArray: any[] = [
    {
      id: 'service1',
      name: `SEO`,
      imgSrc: "assets/images/serviceImages/SEO.png",
      header: ` <em>Search Engine Optimization</em> Ideas`,
      title: `Whether you are looking to improve your ranking on search engines, rank higher for a keyword, or clean up your website structure, we’ve got you covered.`,
      subHeader: `SEO Analysis`,
      subTitle:`Improve your ranking on search engines.`,
      includes:['Local Business SEO', 'Website Audit', 'Keyword Tracking', 'Google Analytics Set Up', 'On-Page Optimization', 'Google My Business Set Up', 'Competitor Research', 'YouTube Channel & Video SEO', 'Local SEO', 'Images Optimization'],
      instaSimpleLink: '',
      twitterSimpleLink: '',
      facebookSimpleLink: '',
      linkedinSimpleLink: '',
      description: ``
    },
    {
      id: 'service2',
      name: `Web Design`,
      imgSrc: "assets/images/serviceImages/web-design.png",
      header: `<em>Website Design and Developement</em>`,
      title: `Whether you want just a landing page, an e-commerce set up, or a complete, modern website redesign, we’ve got you covered.`,
      subHeader: `Web development`,
      subTitle:`Modern web development.`,
      includes:['We offer modern, mobile-ready, responsive and SEO-friendly websites designed to convert traffic on your page', 'Dope Digital Marketing Agency will build you a website where intuitive function meets creative design. If your website is running slow and your business isn’t seeing growth every month, you’re missing out on money every passing day', 'We offer comprehensive web design services for all type of businesses and individuals. We offer complimentary website support for at least thirty (30) days on all website builds. This means you can rest assured your new site will be in good hands, months after we hand it over to you.'],
      instaSimpleLink: '',
      twitterSimpleLink: '',
      facebookSimpleLink: '',
      linkedinSimpleLink: '',
      description: ``
    },
    {
      id: 'service3',
      name: `Youtube Marketing`,
      imgSrc: "assets/images/serviceImages/youtube-marketing.png",
      header: `Grow your brand with our <em>Youtube marketing service</em>`,
      title: `INCREASE YOUR VIEWS AND REVENUE WITH YOUTUBE MARKETING.`,
      subHeader: `Youtube Marketing`,
      subTitle:`Significance of YouTube Marketing.`,
      reasons:``,
      includes:['We know the significance of YouTube Marketing.', 'Our team will join you and support you in every way, any problem related to your video, any discussion, share it with us'],
      instaSimpleLink: '',
      twitterSimpleLink: '',
      facebookSimpleLink: '',
      linkedinSimpleLink: '',
      description: ``
    },
    {
      id: 'service4',
      name: `Paid Ad Management`,
      imgSrc: "assets/images/serviceImages/paid-ad.png",
      header: `Grow your brand with our <em>Paid Ad</em> management service`,
      title: `As Google Ads Certified experts, we help you use the power of programmatic advertising to increase leads, sales and web traffic with budgets of any size.`,
      subHeader: `Paid Ad Management`,
      subTitle:`Ad Management.`,
      reasons:`Dope Digital Marketing Agency makes it easier for you to connect with the right people, at the right time, with the right message. We do this using paid channels on search engines, partner sites and social media. We manage ad campaigns for your organization on a wide range of platforms including:`,
      includes:['Google Search & Display Network', 'YouTube', 'Facebook', 'Instagram', 'Microsoft Advertising (formerly Bing Advertising)', 'Twitter', 'and more'],
      instaSimpleLink: '',
      twitterSimpleLink: '',
      facebookSimpleLink: '',
      linkedinSimpleLink: '',
      description: ``
    },
    {
      id: 'service5',
      name: `Social Media Management`,
      imgSrc: "assets/images/serviceImages/social-media-management.jpg",
      header: `Grow your brand with our <em>SMM</em> service`,
      title: `Is your business using the most effective and latest social media strategies of 2020? Originally written off as a fad, the truth is if your business is not using social media the right way this year, you are losing out on sales and dollars.`,
      subHeader: `Social Media`,
      subTitle:`Latest social media strategies.`,
      reasons:`Digital Marketing Agency makes it easier for you to focus on the other parts of your business with our social media management and marketing services. Here are 7 of the most common reasons why business owners are struggling with social media:`,
      includes:['Too time consuming', 'Challenging to get content to a new or larger audience', 'Not sure how to create a social media strategy that works', 'Hard to create quality visuals, graphics or articles', 'Difficult to come up with content to share', 'Not knowing how to establish an authentic connection with audience', 'Unsure how use data to make content better'],
      instaSimpleLink: '',
      twitterSimpleLink: '',
      facebookSimpleLink: '',
      linkedinSimpleLink: '',
      description: ``
    },
    {
      id: 'service6',
      name: `Logo Design`,
      imgSrc: "assets/images/serviceImages/logo-design.jpg",
      header: `Grow your brand with our <em>Logo</em> and <em>Graphic</em> design`,
      title: `Whether you want an eye-catching logo, a professional brand style guide, or engaging graphic design content, we’ve got you covered.`,
      subHeader: `Graphic design`,
      subTitle:`Logo and Graphic design.`,
      reasons:`There’s more to creating a brand than just getting a logo. The design team at YouNedia is committed to supplying
      you with all the elements to make your brand capture the eyeballs that impact your bottom line.`,
      includes:['Logo Creation', 'Brand Style Guide Creation', 'Logo Copyright', '360 Brand Assessments', 'Website & Social Media Graphics', 'YouTube Thumbnails', 'Design Mock-Ups', 'Branding Collateral', 'Album Artwork', 'Motion Graphics'],
      instaSimpleLink: '',
      twitterSimpleLink: '',
      facebookSimpleLink: '',
      linkedinSimpleLink: '',
      description: ``
    },
  ]
}
