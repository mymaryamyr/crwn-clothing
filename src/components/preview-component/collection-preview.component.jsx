import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import { withRouter } from "react-router-dom";

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items, history, match, linkUrl }) => (
    <div className='collection-preview'>
        <h1 className='title' onClick={() => history.push(`${match.url}/${title.toLowerCase()}`)}>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items.slice(0, 4).map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))
            }
        </div>
    </div>
);

export default withRouter(CollectionPreview);