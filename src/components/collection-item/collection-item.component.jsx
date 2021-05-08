import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './collection-itemstyles.scss';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions'; 
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../redux/shop/shop.selectors';

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
        <div className='collection-item'>
            <div 
                className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}$</span>
            </div>
            <CustomButton onClick={() => addItem(item)} inverted>Add to cart</CustomButton>
        </div>   
    )
};

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
});

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem);