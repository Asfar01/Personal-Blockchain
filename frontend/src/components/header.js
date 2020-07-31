import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return (
      <header class='main-header header-1'>
        <div class='top-area'>
          <div class='auto-container'>
            <div class='row'>
              <div class='col-lg-8 col-md-12 col-sm-12 col-12'>
                <div class='info-menu'>
                  <ul>
                    <li>
                      <a href='#'>
                        <i class='icofont icofont-time'></i> Opening Hours - Mon to Sat: 9AM to 5PM
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class='col-lg-4 col-md-12 col-sm-12 col-12'>
                <div class='info-menu'>
                  <ul>
                    <li>
                      <a href='#'>
                        <i class='icofont icofont-login'></i> Login{" "}
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i class='icofont icofont-user-alt-5'></i> Register{" "}
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i class='icofont icofont-hand-drag2'></i> Help{" "}
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i class='icofont icofont-live-support'></i> Support{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class='logo-area'>
          <div class='auto-container'>
            <div class='row'>
              <div class='col-lg-5 col-md-3 col-sm-6 col-7 mx-auto pl-0 mb-lg-0 mb-5'>
                <div class='logo'>
                  <a href='index-2.html'>
                    <img class='img-fluid' src='assets/img/logo.png' alt='' />
                  </a>
                </div>
              </div>

              <div class='col-lg-7 col-md-12 col-sm-12 col-12'>
                <div class='header-info-box'>
                  <div class='header-info-icon'>
                    <i class='fa fa-envelope-open'></i>
                  </div>
                  <p>Email Us</p>
                  <h6>info@yoursite.com</h6>
                </div>
                <div class='header-info-box'>
                  <div class='header-info-icon'>
                    <i class='icofont icofont-phone'></i>
                  </div>
                  <p>Call Us</p>
                  <h6>123-456-0975</h6>
                </div>
                <div class='header-info-box'>
                  <a href='#' class='quote-btn'>
                    Get Started <i class='icofont icofont-caret-right'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class='sticky-menu'>
          <div class='mainmenu-area'>
            <div class='auto-container'>
              <div class='row'>
                <div class='col-lg-9 d-none d-lg-block d-md-none'>
                  <nav class='navbar navbar-expand-lg justify-content-left'>
                    <ul class='navbar-nav'>
                      <li class='dropdown'>
                        <a href='index-2.html' class='active nav-link'>
                          Home
                        </a>
                        <ul class='dropdown-menu'>
                          <li>
                            <a href='index-2.html'>Home 1</a>
                          </li>
                          <li>
                            <a href='index-3.html'>Home 2</a>
                          </li>
                          <li>
                            <a href='index-4.html'>Home 3</a>
                          </li>
                          <li>
                            <a href='index-5.html'>Home 4</a>
                          </li>
                        </ul>
                      </li>
                      <li class='dropdown'>
                        <a class='nav-link' href='#'>
                          Pages
                        </a>
                        <ul class='dropdown-menu'>
                          <li>
                            <a href='about.html'>About Us</a>
                          </li>
                          <li>
                            <a href='team.html'>Our Team</a>
                          </li>
                          <li>
                            <a href='single-team.html'>Team Single</a>
                          </li>
                          <li>
                            <a href='gallery.html'>Gallery</a>
                          </li>
                          <li>
                            <a href='pricing.html'>Our Pricing</a>
                          </li>
                          <li>
                            <a href='faq.html'>FAQ</a>
                          </li>
                          <li>
                            <a href='error.html'>404</a>
                          </li>
                        </ul>
                      </li>
                      <li class='dropdown'>
                        <a href='service.html' class='nav-link'>
                          Services
                        </a>
                        <ul class='dropdown-menu'>
                          <li>
                            <a href='service.html'>Our All Services</a>
                          </li>
                          <li>
                            <a href='single-service.html'>Bitcoin Trading</a>
                          </li>
                          <li>
                            <a href='single-service.html'>Coin Buy & Sell</a>
                          </li>
                          <li>
                            <a href='single-service.html'>Bitcoin & Ethereum</a>
                          </li>
                          <li>
                            <a href='single-service.html'>Cryptocurrency</a>
                          </li>
                        </ul>
                      </li>
                      <li class='dropdown'>
                        <a href='service.html' class='nav-link'>
                          Shop
                        </a>
                        <ul class='dropdown-menu'>
                          <li>
                            <a href='shop.html'>Our Products</a>
                          </li>
                          <li>
                            <a href='single-product.html'>Product Details</a>
                          </li>
                          <li>
                            <a href='shop-cart.html'>Shopping Cart</a>
                          </li>
                          <li>
                            <a href='shop-checkout.html'>Shopping Checkout</a>
                          </li>
                        </ul>
                      </li>
                      <li class='dropdown'>
                        <a href='buy.html' class='nav-link'>
                          Coin
                        </a>
                        <ul class='dropdown-menu'>
                          <li>
                            <a href='buy.html'>Buy & Sell</a>
                          </li>
                          <li>
                            <a href='data.html'>Analyze</a>
                          </li>
                          <li>
                            <a href='wallet.html'>wallet</a>
                          </li>
                          <li>
                            <a href='exchange.html'>Exchange</a>
                          </li>
                        </ul>
                      </li>
                      <li class='dropdown'>
                        <a href='blog.html' class='nav-link'>
                          News
                        </a>
                        <ul class='dropdown-menu'>
                          <li>
                            <a href='blog.html'>Latest News</a>
                          </li>
                          <li>
                            <a href='single-blog.html'>Single News</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href='contact.html' class='nav-link'>
                          Contact
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div class='col-lg-3 d-none d-lg-block d-md-none text-right pr-0'>
                  <form class='navbar-form'>
                    <div class='form-group'>
                      <input class='form-control' name='search' value='Search here...' type='text' />
                      <button type='submit' class='btn'>
                        <i class='fa fa-search-plus'></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
