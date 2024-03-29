import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div className="product__card">
      <Link href={`/product/${slug.current}`}>
        <div className="product__card__content">
          <img 
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">{price}€</p>
        </div>
      <div className="button__slug">
        <button type="button">
          See More...
        </button>
      </div>
      </Link>
    </div>
  )
}

export default Product