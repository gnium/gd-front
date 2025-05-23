import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
  query GetProducts($category: String!) {
    products(category: $category) {
      id
      name
      price
      description
    }
  }
`;

export const GET_ADVERTISER_COMMISSIONS = gql`
    query GetAdvertiserCommissions(
        $forAdvertisers: [String!]!
        $sincePostingDate: String!
        $beforePostingDate: String!
    ) {
        advertiserCommissions(
            forAdvertisers: $forAdvertisers
            sincePostingDate: $sincePostingDate
            beforePostingDate: $beforePostingDate
        ) {
            count
            payloadComplete
            records {
                publisherId
                publisherName
                advertiserId
                actionTrackerName
                websiteName
                advertiserName
                postingDate
                pubCommissionAmountUsd
                items {
                    quantity
                    perItemSaleAmountPubCurrency
                    totalCommissionPubCurrency
                }
            }
        }
    }
`;


/**
 * curl --location 'https://commissions.api.cj.com/query' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer 15FG3Tx12JMZUk8_GSj1QtmduQ' \
--data '{ advertiserCommissions(forAdvertisers: ["5331920"],
 sincePostingDate:"2025-01-01T00:00:00Z",beforePostingDate:"2025-01-31T00:00:00Z")
 {count payloadComplete records {commissionId actionTrackerName websiteName advertiserName postingDate pubCommissionAmountUsd 
 items { quantity perItemSaleAmountPubCurrency totalCommissionPubCurrency }}}}'
 */

 /**
  * --data '{ advertiserCommissions(forAdvertisers: ["5331920"], sincePostingDate:"2025-01-01T00:00:00Z",beforePostingDate:"2025-01-31T00:00:00Z")
  * {count payloadComplete records {actionTrackerName websiteName advertiserName postingDate pubCommissionAmountUsd 
  * items { quantity perItemSaleAmountPubCurrency totalCommissionPubCurrency }}}}'
  */



/* PUBLISHER COMMISSIONS */
/**
 * curl --location 'https://commissions.api.cj.com/query' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer 15FG3Tx12JMZUk8_GSj1QtmduQ' \
--data '{ publisherCommissions(forPublishers: ["7297379"], sincePostingDate:"2025-01-01T00:00:00Z",beforePostingDate:"2025-01-31T00:00:00Z"){count payloadComplete records {actionTrackerName websiteName advertiserName postingDate pubCommissionAmountUsd items { quantity perItemSaleAmountPubCurrency totalCommissionPubCurrency }}}}'
 */

