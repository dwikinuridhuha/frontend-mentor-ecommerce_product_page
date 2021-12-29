import React from "react";
import Image from "next/image";

import ImageProduct from "../images/image-product-1.jpg"
import IconPrev from "../images/icon-previous.svg"
import IconNext from "../images/icon-next.svg"
import IconMinus from "../images/icon-minus.svg"
import IconPlus from "../images/icon-plus.svg"
import IconToCart from "../images/icon-cart.svg"

export default function Main() {
  return (
    <main className="product-page">
      <div className="images-wrapper">
        <Image
          src={ImageProduct}
          alt="product image"
          className="product--image"
        />
        <div className="next-wrapper">
          <Image
            src={IconNext}
            alt="next"
            className="img--controller"
          />
        </div>
        <div className="previous-wrapper">
          <Image
            src={IconPrev}
            alt="previous"
            className="img--controller"
          />
        </div>
        <div className="carousel-wrapper" />
      </div>
      <article className="item-description">
        <h5>SNEAKER COMPANY</h5>
        <h2>Fall Limited Edition Sneakers</h2>
        <p className="item-description--paragraph">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they&apos;ll withstand everything
          the weather can offer.
        </p>
        <div className="price-wrapper">
          <div className="left-wrapper">
            <span className="discounted--price">$125.00</span>
            <span className="discount--percentage">50%</span>
          </div>
          <div className="right-wrapper">
            <span className="marked--price">$250.00</span>
          </div>
        </div>
        <div className="quantity-add-to-cart-wrapper">
          <div className="quantity-wrapper">
            <div className="remove-icon">
              <Image
                src={IconMinus}
                alt="remove"
                className="remove--icon"
              />
            </div>
            <span className="quantity--span">0</span>
            <div className="add-icon">
              <Image
                src={IconPlus}
                alt="add"
                className="add--icon"
              />
            </div>
          </div>
          <div className="add-to-cart">
            <div className="inner-wrapper">
              <Image
                src={IconToCart}
                alt="add to cart"
                className="cart--icon"
              />
              <span>Add to cart</span>
            </div>
          </div>
        </div>
      </article>
      <div className="cart-div">
        <p className="cart--text">Cart</p>
        <hr />
        <p className="cart--empty">Your cart is empty.</p>
        <div className="added-items">
          <div className="cart-checkout" />
          <button className="checkout--button">Checkout</button>
        </div>
      </div>
    </main>
  );
}
