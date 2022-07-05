import React from "react";
import "./homepage.css";
import { useNavigate } from "react-router-dom";

const HomeScreen = () => {
  const Navigate = useNavigate();

  return (
    <div>
      <div class="banner-section-bg-container d-flex justify-content-center flex-column ">
        <div class="text-center">
          <h1 class="banner-heading mb-3">Welcome to InfoEat</h1>
          <p class="banner-caption mb-4">Eat Good & Healthy</p>
          <button class="custom-button" onClick={() => Navigate("/MenuPage")}>
            Order Now
          </button>
        </div>
      </div>
      <div class="wcu-section pt-5 pb-5" id="wcuSection">
        <div class="container">
          <div class="row">
            <div class="col-12 text-center">
              <h1 class="wcu-section-heading">Why Choose Us?</h1>
              <p class="wcu-section-description">
                We use both original recipes and classic versions of famous food
                items.
              </p>
            </div>
            <div class="col-12 col-md-4">
              <div class="wcu-card p-3 mb-3">
                <img
                  src="https://thumbs.dreamstime.com/z/restaurant-logo-label-menu-food-service-symbol-vector-illustration-restaurant-logo-label-menu-food-service-symbol-vector-134861170.jpg"
                  class="wcu-card-image"
                />
                <h1 class="wcu-card-title mt-3">Food Service</h1>
                <p class="wcu-card-description">
                  Experience fine dining at the comfort of your Office. All our
                  orders are carefully arranged to give you the nothing less
                  than perfect.
                </p>
              </div>
            </div>
            <div class="col-12 col-md-4">
              <div class="wcu-card p-3 mb-3">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAviO-V6Mn2Yxp2H-DkCGBH91TdmpMAW8T7w&usqp=CAU"
                  class="wcu-card-image"
                />
                <h1 class="wcu-card-title mt-3">Fresh Food</h1>
                <p class="wcu-card-description">
                  The Fresh Food group provides fresh-cut fruits and vegetables
                  directly picked from our partner farms so that you always get
                  them tree to plate.
                </p>
              </div>
            </div>
            <div class="col-12 col-md-4">
              <div class="wcu-card p-3 mb-3">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkE6uTe6J_bx82_Kl38TJUbraIV7DgcqMTyQ&usqp=CAU"
                  class="wcu-card-image"
                />
                <h1 class="wcu-card-title mt-3">Special Offers</h1>
                <p class="wcu-card-description">
                  Food Coupons & Offers upto
                  <span class="offers">50% OFF</span>
                  and Exclusive Promo Codes on All Online Food Orders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="explore-menu-section pt-5 pb-5" id="exploreMenuSection">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h1 class="menu-section-heading">Explore Menu</h1>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
              <div class="shadow menu-item-card p-3 mb-3">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf0RvxaZhJycYcKxgYxvDaoQ4OmyriL1nQRw&usqp=CAU"
                  class="menu-item-image w-100"
                />
                <div className="d-flex justify-content-around">
                  <h1 class="menu-card-title">Breakfast</h1>
                  <button
                    class="menu-item-link"
                    onClick={() => Navigate("/Breakfast")}
                  >
                    View All
                    <svg
                      width="16px"
                      height="16px"
                      viewBox="0 0 16 16"
                      class="bi bi-arrow-right-short"
                      fill="#d0b200"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
              <div class="shadow menu-item-card p-3 mb-3">
                <img
                  src="https://www.manjulaskitchen.com/wp-content/uploads/everyday-lunch-menu.jpg"
                  class="menu-item-image w-100"
                />
                <div className="d-flex justify-content-around">
                  <h1 class="menu-card-title">Lunch</h1>
                  <button
                    class="menu-item-link"
                    onClick={() => Navigate("/Lunch")}
                  >
                    View All
                    <svg
                      width="16px"
                      height="16px"
                      viewBox="0 0 16 16"
                      class="bi bi-arrow-right"
                      fill="#d0b200"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
              <div class="menu-item-card shadow p-3 mb-3">
                <img
                  src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-soup-img.png"
                  class="menu-item-image w-100"
                />
                <div className="d-flex justify-content-around">
                  <h1 class="menu-card-title">Snacks</h1>
                  <button
                    class="menu-item-link"
                    onClick={() => Navigate("/Snacks")}
                  >
                    View All
                    <svg
                      width="16px"
                      height="16px"
                      viewBox="0 0 16 16"
                      class="bi bi-arrow-right"
                      fill="#d0b200"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
              <div class="menu-item-card shadow p-3 mb-3">
                <img
                  src="https://th.bing.com/th/id/OIP.Yyz8IRfx_USJkSb1FFJgyQHaGL?w=255&h=212&c=7&r=0&o=5&dpr=1.25&pid=1.7"
                  class="menu-item-image w-100"
                />
                <div className="d-flex justify-content-around">
                  <h1 class="menu-card-title">Dinner </h1>
                  <button
                    class="menu-item-link"
                    onClick={() => Navigate("/Dinner")}
                  >
                    View All
                    <svg
                      width="16px"
                      height="16px"
                      viewBox="0 0 16 16"
                      class="bi bi-arrow-right"
                      fill="#d0b200"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="follow-us-section pt-5 pb-5" id="followUsSection">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h1 class="follow-us-section-heading">Follow Us</h1>
            </div>
            <div class="col-12">
              <div class="d-flex flex-row justify-content-center">
                <a href="https://twitter.com/InfoEat1" target="_blank">
                  <div class="follow-us-icon-container">
                    <i class="fab fa-twitter icon"></i>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/info-eat-990215244"
                  target="_blank"
                >
                  <div class="follow-us-icon-container">
                    <i class="fab fa-linkedin icon"></i>
                  </div>
                </a>

                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                >
                  <div class="follow-us-icon-container">
                    <i class="fab fa-facebook icon"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-section pt-5 pb-5">
        <div class="container">
          <div class="row">
            <div class="col-12 text-center">
              <h1 class="footer-section-mail-id">infoeat@infovision.com</h1>
              <p class="footer-section-address">
                Discoverer Building, ITPL, Whitefield, Banglore, India.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
