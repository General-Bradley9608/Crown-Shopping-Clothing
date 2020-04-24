import React from 'react';
import { connect } from 'react-redux';

// import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';

// import './collection-item.styles.scss';

import {
  CollectionItemContainer,
  AddButton,
  BackgroundImage,
  CollectionFooterContainer,
  NameContainer,
  PriceContainer,
} from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <CollectionItemContainer>
      <BackgroundImage className='image' imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItem(item)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
