export const getProductQuery = `
query HomepageProduct {
    product {
      productName
      price
      productDescription
      productImage {
        id
      }
      productCategories {
        categories_id {
          id
          categoryName
        }
      }
    }
  }

`;

export const getPostQuery = `
query HomepagePost{
    post{
        id
        title
        slug
        featured_image{
            id
        }
        body
    }
}

`;

export const getCategoryQuery = `

query category{

    categories{
      id
      categoryName
      slug

    }

  }


`;

export const filterByCategory = `


query HomepageProductFilter($category:[Float]) {
    product (filter:{productCategories:{categories_id:{id:

    {_in:$category}}}}) {
      productName
      price
      productDescription
      productImage {
        id
      }
      productCategories {
        categories_id {
          id
          categoryName
        }
      }
    }
  }


`;
