import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const selectShopData = state => state.shop;

export const selectCollections = createSelector(
    [selectShopData],
    shop => shop.collections
);

export const selectCollection = collectionUrlParam => 
    createSelector(
        [selectCollections],
        collections => collections[collectionUrlParam]
    );

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
)
// export const selectCollection = memoize((collectionUrlParam) =>
//     createSelector(
//       [selectCollections],
//       (collections) => collections[collectionUrlParam]
//     )
// );