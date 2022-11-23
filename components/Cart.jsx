import React, { useRef } from "react";
import Link from "next/link";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import toast from "react-hot-toast";

import { useStateContext } from "../context/StateContext";
import { urlFor } from "../lib/client";
import getStripe from "../lib/getStripe";
import Image from "next/image";
import empty from "../assets/empty.gif";

const Cart = () => {
  const cartRef = useRef();
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    toggleCartItemQuanitity,
    onRemove,
  } = useStateContext();

  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItems),
    });

    if (response.statusCode === 500) return;

    const data = await response.json();

    toast.loading("Redirecting...");

    stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <div className="cart__wrapper" ref={cartRef}>
      <div className="cart__container">
        {cartItems.length < 1 && (
          <div className="empty__cart">
            <h2 className="empty__cart__title">Your shopping bag is empty</h2>
            {/* <AiOutlineShopping size={150} /> */}
            <Image
              src={empty}
              width={290}
              height={290}
              alt="funny gif john travolta"
            />

            <button
              type="button"
              onClick={() => setShowCart(false)}
              className="empty__cart__btn"
            >
              Continue Shopping
            </button>
          </div>
        )}

        <div className="cart__product__container">
          {cartItems.length >= 1 &&
            cartItems.map((item) => (
              <div className="cart__product" key={item._id}>
                <img
                  src={urlFor(item?.image[0])}
                  className="cart__product__image"
                />
                <div className="cart__item__desc">
                  <div>
                    <h2 className="cart__item__title">{item.name}</h2>
                    <h3 type="number" className="cart__item__price">
                      {item.price}€
                    </h3>
                  </div>
                  <div className="qty__container">
                    <div className="qty__content">
                      <span
                        className="minus"
                        onClick={() => toggleCartItemQuanitity(item._id, "dec")}
                      >
                        <AiOutlineMinus />
                      </span>
                      <span type="number" className="num" onClick="">
                        {item.quantity}
                      </span>

                      <span
                        className="plus"
                        onClick={() => toggleCartItemQuanitity(item._id, "inc")}
                      >
                        <AiOutlinePlus />
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="remove__item"
                    onClick={() => onRemove(item)}
                  >
                    <TiDeleteOutline />
                  </button>
                </div>
              </div>
            ))}
        
        {cartItems.length >= 1 && (
          <div className="cart__bottom">
            <div className="total">
              <h3>Subtotal:</h3>
              <h3>{totalPrice}€</h3>
            </div>
            <div className="btns__cart">
              <button
                type="button"
                className="cart__btn"
                onClick={handleCheckout}
              >
                Pay with Stripe
              </button>
              <Link href="/">
                <button
                  type="button"
                  onClick={() => setShowCart(false)}
                  className="cart__btn"
                >
                  Continue Shopping
                </button>
              </Link>
            </div>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
