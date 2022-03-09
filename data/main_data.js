var main_data = {
  title: "Portfolio - Raka D Prakoso",
  name: "Raka D Prakoso",
  role: "Fullstack Developer, Web Developer, RPA Developer,Designer, Photographer",
  background_image: "assets/img/IMG_0513.JPG",
  social_media: [
    {
      socmed: "facebook",
      icon: "bx bxl-facebook",
      url: "https://facebook.com/RakaDP",
    },
    {
      socmed: "instagram",
      icon: "bx bxl-instagram",
      url: "https://instagram.com/rakadprakoso",
    },
    {
      socmed: "linkedin",
      icon: "bx bxl-linkedin",
      url: "https://www.linkedin.com/in/raka-d-p-74b67b122/",
    },
  ],
  profile_pic: "assets/img/IMG_3926.JPG",
  about: "Enthusiasm with full stack developer knowledgeable of backend and frontend development requirements. I am eager to be challenged in order to grow and further improve my skills. My greatest passion is in life is using my technical know-how to benefit other people and organizations.",
  birthday: "2000-02-16",
  website: "www.deprakoso.com",
  phone: "+62 81 226 727 363",
  city: "Jepara",
  degree: "Bachelor",
  email: "rakaprakoso2@gmail.com",
  skills: ["HTML","CSS","Javascript","PHP","UiPath","NodeJS","CorelDraw","Sony Vegas",],
  education: [
    {
      major: "Bachelor of Information System",
      duration: "2018-2022",
      institution: "President University",
    },
    {
      major: "Animation",
      duration: "2015-2018",
      institution: "Vocational High Schoold",
    },
  ],
  jobs_experience: [
    {
      position: "RPA Developer",
      duration: "2021-Present",
      company: "Indosat Ooredoo Hutchinson",
    },
    {
      position: "VR Learning Project Intern",
      duration: "2021-2022",
      company: "CIMB Niaga",
    },
    {
      position: "Quality Assurance Intern",
      duration: "2021-2021",
      company: "Agate International",
    },
  ],
  portfolio_type:["mobile-app","web","design"],
  portfolio: [
    {
      name: "Kacinvest",
      img: "assets/img/portfolio/portfolio-1.jpg",
      type: "mobile-app",
      url: "#",
    },
    {
      name: "King Smith Walking Pad – Company Profile",
      img: "assets/img/portfolio/portfolio-2.jpg",
      type: "web",
      url: "#",
    },
    {
      name: "PUSC – Organization Profile",
      img: "assets/img/portfolio/portfolio-3.jpg",
      type: "web",
      url: "#",
    },
    {
      name: "Keina Beauty – Online Shop",
      img: "assets/img/portfolio/portfolio-4.jpg",
      type: "web",
      url: "https://keinabeauty.com",
    },
  ],
  hobby: [
    {
      name: "Gaming",
      icon: "<i class='bx bx-game'></i>",
      description: "Love playing adventure & simulation games",
    },
    {
      name: "Technology Enthusiast",
      icon: "<i class='bx bx-laptop' ></i>",
      description: "Suka aja oprek oprek",
    },
    {
      name: "One Piece Lovers",
      icon: "<i class='bx bx-movie-play' ></i>",
      description: "Strawhat 11th nakama",
    },
    {
      name: "Music Lovers",
      icon: "<i class='bx bx-music'></i>",
      description: "K Pop, 90 s Music, Country",
    },
    {
      name: "Loading...",
      icon: "<i class='bx bx-loader-circle'></i>",
      description: "Null",
    },
    {
      name: "404",
      icon: "<i class='bx bx-x-circle'></i>",
      description: "Undefined",
    },
  ],
  contact:{
    address:"Jepara, Central Java",
    email:"rakaprakoso2@gmail.com",
    phone_display:"+62 81 226 727 363",
    phone:"+6281226727363",
    wa_display:"+62 81 226 727 363",
    wa:"6281226727363",
    wa_message:"Halo, boleh kenalan ?",
  }
};

document.title = main_data.title;
$(".favicon").attr("href","assets/img/logo.png");

var duration = moment.duration(moment().diff(main_data.birthday));
var years = duration.asYears();

$("#profile__name").html(main_data.name);
$("#profile__footer__name").html(main_data.name);
$("#profile__role").attr("data-typed-items", main_data.role);
$("#hero").css("background-image", "url(" + main_data.background_image + ")");

var social_media = "";
$.each( main_data.social_media, function( i, val ) {
  social_media += '<a href="'+val.url+'" class="'+val.socmed+'"><i class="'+val.icon+'"></i></a>'
});
$("#profile__socmed").html(social_media);
$("#profile__pic").attr("src", main_data.profile_pic);
$("#profile__about").html(main_data.about);
$("#profile__birthday").html(moment(main_data.birthday).format("DD MMMM YYYY"));
$("#profile__age").html(Math.floor(years));
$("#profile__website").html(main_data.website);
$("#profile__phone").html(main_data.phone);
$("#profile__city").html(main_data.city);
$("#profile__degree").html(main_data.degree);
$("#profile__email").html(main_data.email);

var skills = "";
$.each( main_data.skills, function( i, val ) {
  skills += '<div class="col-lg-6 py-2"><div class="border rounded p-2 skill-detail"><i class="bx bxs-check-circle mx-2"></i>'+val+'</div></div>'
});
$("#profile__skills").html(skills);

var education = "";
$.each( main_data.education, function( i, val ) {
  education += '<div class="resume-item">'
  +'<h4>'+ val.major +'</h4>'
  +'<h5>'+val.duration+'</h5>'
  +'<p><em>'+val.institution+'</em></p>'
  +'</div>'
});
$("#profile__education").html(education);

var jobs_experience = "";
$.each( main_data.jobs_experience, function( i, val ) {
  jobs_experience += '<div class="resume-item">'
  +'<h4>'+ val.position +'</h4>'
  +'<h5>'+val.duration+'</h5>'
  +'<p><em>'+val.company+'</em></p>'
  +'</div>'
});
$("#profile__jobs_experience").html(jobs_experience);

var portfolio_type = "";
$.each( main_data.portfolio_type, function( i, val ) {
  portfolio_type += '<li data-filter=".filter-'+val+'">'+val.replace("-", " ")+'</li>'
});
$("#profile__portfolio__filter").html(portfolio_type);

var portfolio = "";
$.each( main_data.portfolio, function( i, val ) {
  portfolio += '<div class="col-lg-4 col-md-6 portfolio-item filter-'+val.type+'"> <div class="portfolio-wrap"> <img src="'+val.img+'" class="img-fluid" alt=""> <div class="portfolio-info"> <h4>'+val.name+'</h4> <p>'+val.type.replace("-", " ")+'</p> <div class="portfolio-links"> <a href="'+val.img+'" data-gallery="portfolioGallery" class="portfolio-lightbox" title="'+val.name+'"><i class="bx bx-plus"></i></a> <a href="'+val.url+'" target="_blank" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a> </div> </div> </div> </div>'
});
$("#profile__portfolio").html(portfolio);

var hobby = "";
$.each( main_data.hobby, function( i, val ) {
  hobby += '<div class="col-lg-4 col-md-6 my-2 align-items-stretch" data-aos="zoom-in" data-aos-delay="100"> <div class="icon-box iconbox-blue"> <div class="icon"> <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg"> <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"></path> </svg> '+val.icon+' </div> <h4><a href="">'+val.name+'</a></h4> <p>'+val.description+'</p> </div> </div>'
});
$("#profile__hobby").html(hobby);

$("#profile__contact__email").html('<a href="mailto:'+main_data.contact.email+'">'+main_data.contact.email+'<a/>');
$("#profile__contact__phone").html('<a href="tel:'+main_data.contact.phone+'">'+main_data.contact.phone_display+'<a/>');
$("#profile__contact__wa").html('<a target="_blank" href="https://wa.me/'+main_data.contact.wa+'?text='+main_data.contact.wa_message+'">'+main_data.contact.wa_display+'<a/>');

var social_media = "";
$.each( main_data.social_media, function( i, val ) {
  social_media += '<a href="'+val.url+'" target="_blank" class="'+val.socmed+'"><i class="'+val.icon+'"></i></a>'
});
$("#footer__social__links").html(social_media);