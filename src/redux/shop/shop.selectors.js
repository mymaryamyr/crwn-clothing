import { createSelector } from 'reselect';

const selectShopData = state => state.shop;

export const selectCollections = createSelector(
    [selectShopData],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)

export const selectCollection = collectionUrlParam => 
    createSelector(
        [selectCollections],
        collections => collections ? collections[collectionUrlParam] : null
    );

export const selectIsCollectionFetching = createSelector(
    [selectShopData],
    shop => shop.isFetching
    
)
export const selectIsCollectionsLoaded = createSelector(
    [selectShopData],
    shop => !!shop.collections
)
// export const selectCollection = memoize((collectionUrlParam) =>
//     createSelector(
//       [selectCollections],
//       (collections) => collections[collectionUrlParam]
//     )
// );