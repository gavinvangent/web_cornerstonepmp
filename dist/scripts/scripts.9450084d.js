"use strict";window.cpmpApp=angular.module("cpmpApp",["ngAnimate","ngCookies","ngResource","ngTouch","ngRoute","ui.router"]),window.cpmpApp.config(["$httpProvider","$resourceProvider","$routeProvider",function(a,b,c){c.when("/",{templateUrl:"views/home.html",controller:"HomeCtrl",menu:"home",footer:"default"}),c.when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",menu:"about",footer:"default"}),c.when("/contact",{templateUrl:"views/contact.html",controller:"ContactCtrl",menu:"contact"}),c.when("/portfolio",{templateUrl:"views/portfolio.html",controller:"PortfolioCtrl",menu:"portfolio",footer:"default"}),c.when("/services",{templateUrl:"views/services.html",controller:"ServicesCtrl",menu:"services",footer:"default"}),c.otherwise({redirectTo:"/"})}]),window.cpmpApp.run(["$rootScope",function(a){a.$on("$routeChangeStart",function(b,c){a.menu=c.$$route.menu,a.footer=c.$$route.footer})}]),window.cpmpApp.controller("AboutCtrl",["$scope",function(a){}]),window.cpmpApp.controller("ContactCtrl",["$scope",function(a){}]),window.cpmpApp.controller("HomeCtrl",["$scope","$timeout",function(a,b){var c,d=8,e=parseInt(Math.random()*d+1,10),f=function(){e>d&&(e=1),0>=e&&(e=d),a.image="images/places/"+e+".jpg",c=b(function(){++e,f()},4e3)};a.prevImage=function(){b.cancel(c),e--,f()},a.nextImage=function(){b.cancel(c),e++,f()},f()}]),window.cpmpApp.controller("PortfolioCtrl",["$scope",function(a){}]),window.cpmpApp.controller("ServicesCtrl",["$scope",function(a){}]),angular.module("cpmpApp").run(["$templateCache",function(a){a.put("views/about.html",'<img class="imageme" src="/images/places/8.a952eb68.jpg"> <div class="container imageme"> <div class="content"> <p class="section-title text-center">About Us</p> <hr> <p class="section-desc"> <span class="highlight">Cornerstone <smaller>PMP</smaller> Inc.</span> offers professional real estate and infrustructure project management and advisory services to public and private sector clients; from the point of initial concept, through development, design, construction and relocation to the point that operations or asset management begins. As project management consultants we are experienced in many types of real estate products in institutional, commercial, industrial, recreational, retail, municiple and residential construction sectors providing leadership to the team of internal and external resources and stakeholders. <span class="highlight">Cornerstone <smaller>PMP</smaller> Inc.</span> has the technical skills, practical experience and commercial awareness to ensure that each project receives the careful personal attention it requires. </p> <p class="section-desc"> Comprehensive project management is essential in today’s complex business environment. Assigning a project to a specialized project management consultant is a form of risk management and a means to ensure the success of any capital investment project. Project management is not only about managing process – it is about making informed decisions as well. </p> <p class="section-desc"> At <span class="highlight">Cornerstone <smaller>PMP</smaller> Inc.</span>, we have worked in connection with a varied array of built spaces – from large complex building developments to complicated phased corporate relocations. Our primary focus is providing the experience and technical expertise to lead and manage the Client’s project team in fulfillment of the financial, schedule and program goals for their projects. With a depth of experience and broad expertise, we proactively identify and control the risks and liabilities inherent in the planning, design and construction of real estate projects including new building development, existing space renovation, adaptive re-use and expansion. </p> </div> <div ng-if="footer === \'default\'" ng-include="\'/views/footer.html\'"></div> </div>'),a.put("views/contact.html",'<div class="row col-md-offset-2 col-md-8"> <p class="section-title">Contact Us</p> <div class="row"> <div class="col-md-8" style="border-right: 1px solid #999"> <iframe width="100%" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJnd-c4EUioFMRmh8MErIIq6g&key=AIzaSyDMny823bll9DuL2oHmXL4DOdog4Zin0mY" allowfullscreen></iframe> </div> <div class="col-md-4"> <p class="section-title">Edmonton</p> <p>10060 Jasper Avenue,</p> <p>Tower 1, Suite 2020,</p> <p>Edmonton, AB,</p> <p>T5J 3R8</p> <br> <div><i class="fa fa-phone" aria-hidden="true"></i> +1 (780) 238 9289</div> <a href="mailto:contactus@cornerstonepmp.ca"> <i class="fa fa-envelope" aria-hidden="true"></i> contactus@cornerstonepmp.ca </a> </div> </div> <hr> <div class="row"> <div class="col-md-8" style="border-right: 1px solid #999"> <iframe width="100%" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJv2UHKP5vcVMRTEP_PxpExu8&key=AIzaSyDMny823bll9DuL2oHmXL4DOdog4Zin0mY" allowfullscreen></iframe> </div> <div class="col-md-4"> <p class="section-title">Calgary</p> <p>1816 Crowchild Trail NW,</p> <p>Suite 700,</p> <p>Calgary, AB,</p> <p>T2M 3Y7</p> <br> <a href="mailto:contactus@cornerstonepmp.ca"> <i class="fa fa-envelope" aria-hidden="true"></i> contactus@cornerstonepmp.ca </a> </div> </div> <hr> <div class="row"> <div class="col-md-8" style="border-right: 1px solid #999"> <iframe width="100%" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=3975%20Lakeshore%20Road%2C%20Kelowna%2C%20BC%2C%20Canada&key=AIzaSyDMny823bll9DuL2oHmXL4DOdog4Zin0mY" allowfullscreen></iframe> </div> <div class="col-md-4"> <p class="section-title">Kelowna</p> <p>3975 Lakeshore Road,</p> <p>Suite 201,</p> <p>Kelowna, BC,</p> <p>V1W 1V3</p> <br> <a href="mailto:contactus@cornerstonepmp.ca"> <i class="fa fa-envelope" aria-hidden="true"></i> contactus@cornerstonepmp.ca </a> </div> </div> <br> <br> <br> </div>'),a.put("views/footer.html",'<div class="footer" ng-if="footer === \'default\'"> <div class="container text-center"> <div class="row text-center"> <div class="footer-info col-md-4"> <div><i class="fa fa-phone" aria-hidden="true"></i> +1 (780) 238 9289</div> <div> <a href="mailto:contactus@cornerstonepmp.ca"> <i class="fa fa-envelope" aria-hidden="true"></i> contactus@cornerstonepmp.ca </a> </div> <div> <i class="fa fa-linkedin" aria-hidden="true"></i> <i class="fa fa-twitter" aria-hidden="true"></i> <i class="fa fa-instagram" aria-hidden="true"></i> <i class="fa fa-weixin" aria-hidden="true"></i> </div> </div> <div class="footer-info col-md-4"> <div> <i class="fa fa-building" aria-hidden="true"></i> 10060 Jasper Ave </div> <div>Tower 1, Suite 2020</div> <div>Edmonton, AB</div> <div>Canada</div> </div> <div class="footer-info col-md-4"> <div><a ng-href="#/about">About Cornerstone PMP</a></div> <div><a ng-href="#/contact">Contact Us</a></div> <div><a ng-href="#">Site Map</a></div> </div> </div> </div> </div>'),a.put("views/home.html",'<div class="content"> <div class="full-width scrollable-image-container"> <img ng-src="{{image}}"> <div class="scroll-image prev-img" ng-click="prevImage()"> <i class="fa fa-angle-left secondary"></i> </div> <div class="scroll-image next-img" ng-click="nextImage()"> <i class="fa fa-angle-right secondary"></i> </div> </div> <div class="col-md-6 col-md-offset-3"> <p class="section-desc"> Cornerstone PMP Inc. identifies and controls the risks and liabilities inherent in the planning, design and construction of real estate projects including new building development, existing space renovation, adaptive re-use and expansion. </p> </div> </div> <div ng-if="footer === \'default\'" ng-include="\'/views/footer.html\'"></div>'),a.put("views/portfolio.html",'<img class="imageme" src="/images/places/8.a952eb68.jpg"> <div class="container imageme"> <div class="content"> <p class="section-title">Portfolio</p> </div> <div ng-if="footer === \'default\'" ng-include="\'/views/footer.html\'"></div> </div>'),a.put("views/services.html",'<img class="imageme" src="/images/places/3.4428fe27.jpg"> <div class="container imageme"> <div class="content"> <p class="section-title">Services</p> <p class="section-desc"> Project management demands a free flow of communication with and among project team members, and internal and external project stakeholders. </p> <p class="section-desc"> The project team needs frequent information from each of its team members to complete and improve the project and to understand the needs and expectations of the project’s customers. </p> <p class="section-desc"> As such, Cornerstone PMP has developed an efficient and proven project delivery process that can be tailored to meet the needs of its Clients. </p> <br> <p class="list-title">Our services can incorporate any combination of the following components based on our client’s needs:</p> <ul> <li>Project Definition and Strategy</li> <li>Market Analysis</li> <li>Design Planning and Early Procurement</li> <li>Construction Implementation</li> <li>FF&amp;E and Technology Design and Implementation</li> <li>Move Management</li> <li>Project Close-Out and Quality Assurance.</li> </ul> </div> <div ng-if="footer === \'default\'" ng-include="\'/views/footer.html\'"></div> </div>')}]);