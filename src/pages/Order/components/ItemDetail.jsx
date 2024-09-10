import React from 'react';
import './ItemDetail.css';

const ItemDetail = ({ item, onClose }) => {
  if (!item) {
    return null;
  }

  return (
    <div className="item-detail">
      <div className="item-detail__overlay" onClick={onClose}></div>
      <div className="item-detail__content">
        <button className="item-detail__close-button" onClick={onClose}>X</button>
        <img src={item.image} alt={item.title} className="item-detail__image" />
        <h2 className="item-detail__title">{item.title}</h2>
        <p className="item-detail__description">{item.description}</p>
        <p className="item-detail__price">{item.price}</p>
        <button className="item-detail__buy-button">Comprar</button>
      </div>
    </div>
  );
};

export default ItemDetail;
