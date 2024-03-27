import { getNewPrice } from "./utils";

export const getSortedProducts = (products, sortType, sortValue) => {
    if (products && sortType && sortValue) {

        if (sortType === "all") {
          return products;
        }
        
        if (sortType === "category") {
          return products.filter(
            product => product.category === sortValue
          )
        }
        else if (sortType === "color") {
          return products.filter(
            product => product.color === sortValue
          )
        }
        else if (sortType === "brand") {
          return products.filter(
            product => product.brand === sortValue
          )
        }
        else if (sortType === "size") {
          return products.filter(
            product => product.size === sortValue
          )
        }
        else if (sortType === "price") {
          if (sortValue === "under50") {
            return products.filter( (item) => {
              return getNewPrice(item.price,item.discount) < 50
            })
          }
          if (sortValue === "50to100") {
            return products.filter( (item) => {
              return item.price > 50 && item.price < 100 ;
            })
          }
          if (sortValue === "100to150") {
            return products.filter((item) => {
              return item.price >= 100 && item.price <= 150 ;
            });
          }
          if (sortValue === "150to200") {
            return products.filter((item) => {
              return item.price >= 150 && item.price <= 200 ;
            });
          }
          if (sortValue === "200to300") {
            return products.filter((item) => {
              return item.price >= 200 && item.price <= 300 ;
            });
          }
          if (sortValue === "over1000") {
            return products.filter((item) => {
              return item.price > 1000 ;
            });
          }
        }

        else if (sortType === "filterSort") {
          let sortProducts = [...products];
          if (sortValue === "default") {
            return sortProducts;
          }
          if (sortValue === "pricehightolow") {
            return sortProducts.sort((a, b) => {
              return b.price - a.price;
            });
          }
          if (sortValue === "pricelowtohigh") {
            return sortProducts.sort((a, b) => {
              return a.price - b.price;
            });
          }
          if (sortValue === "popularity") {
            return sortProducts.sort((a, b) => {
              return b.ratings - a.ratings;
            });
          }
          if (sortValue === "oldest") {
            return sortProducts.sort((a, b) => {
              return b.createdAt - a.createdAt
            });
          }
        }
    }else{ 
      return products;
    }
  } 