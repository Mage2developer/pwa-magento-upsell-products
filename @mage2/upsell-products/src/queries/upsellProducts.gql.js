import { gql } from '@apollo/client';

export const GET_UPSELL_PRODUCTS = gql`
    query getUpsellProducts($sku: String!) {
        products(filter: { sku: { eq: $sku } }) {
            items {
                id
                name
                upsell_products {
                    id
                    name
                    small_image {
                        label
                        url
                    }
                    url_key
                    url_suffix
                    price_range {
                        minimum_price {
                            regular_price {
                                currency
                                value
                            }
                        }
                    }
                }
            }
        }
    }
`;
