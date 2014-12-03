'use strict';

angular.module('ds.shared')

/**
 * Provides default settings for the application, tenant configured dynamically in service provider.
 *
 * @type {Object}
 */
/** Acts as URL provider for service API's. */
    .provider('SiteConfigSvc', [

        function SiteConfigSvcProvider(storeConfig) {

            // Dynamic Domain is generated and replaced by build script, see gruntfile.
            var dynamicDomain = /*StartDynamicDomain*/ 'api.stage.yaas.io' /*EndDynamicDomain*/;

            var stId = '';

            // handle dynamic tenant data.
            if(!_.isEmpty(storeConfig) && !_.isEmpty(storeConfig.storeTenant)) {
                stId = storeConfig.storeTenant;
            }

            this.apis = {

                account: {
                    baseUrl: 'https://yaas-test.apigee.net/test/account/v1',
                    addresses: {
                        initialPageSize: 6
                    }
                },

                cart: {
                    baseUrl: 'https://yaas-test.apigee.net/test/cart/v5/' + stId
                },

                categories: {
                    baseUrl: 'https://yaas-test.apigee.net/test/category/v2/' + stId
                },

                checkout: {
                    baseUrl: 'https://yaas-test.apigee.net/test/checkout-mashup/v4/' + stId
                },

                configuration: {
                    baseUrl: 'http://configuration-v3.test.cf.hybris.com'             //original
                    // baseUrl: 'http://configuration-v4.test.cf.hybris.com/' + stId  //new tenant id url pending
                    //v4: 404 //Andreas Thaler indicates this is in process, team bananas.
                } ,

                customers: {
                    baseUrl: 'https://yaas-test.apigee.net/test/customer/v6/' + stId
                },

                orders: {
                    baseUrl: 'https://yaas-test.apigee.net/test/order/v4/' + stId
                },

                prices: {
                    baseUrl: 'https://yaas-test.apigee.net/test/price/v3/' + stId
                },

                products: {
                    baseUrl: 'https://yaas-test.apigee.net/test/product/v3/' + stId,
                    pageSize: 10
                },

                productDetails: {
                    baseUrl: 'https://yaas-test.apigee.net/test/product-details/v3/' + stId
                },

                shippingCosts: {
                    baseUrl: 'https://yaas-test.apigee.net/test/shipping-cost/v4/' + stId
                }
            };

            this.$get = ['storeConfig',
                function(storeConfig) {
                    return new SiteConfigSvcProvider(storeConfig);
                }
            ];

        }
    ]);
