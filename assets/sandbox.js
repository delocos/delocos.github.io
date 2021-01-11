Apicart
	.setDevEnv()
	.configure({
		store: new Apicart.Store({ token: '7dSze0PQC_L32fhh3jldIpN7zJJtjZZILo58!pPMzaWpuiHG3!K8WBSoIX5MgLKL' }),
		payments: new Apicart.Payments({ token: 'ECoXYZzEwk1f23c7!npgxBABUnYbCcJpwDI6fwLgUrBlkSLFex9jXh0dOdWERpxx' }),
		vueComponents: {
			paymentMethodsList: {
				allowedMethods: ['cash', 'bank-transfer']
			},
			cartDropdown: {
				dropdownPosition: 'right'
			},
			category: {
				products: {
					list: {
						clothes: {
							new: [
								{
									dataUrl: 'https://cdn.apicart.dev/external/wlhv1egho2u4p0e0nkne2mks7f9btigi/data/02/2.json',
									pageUrl: '/green-t-shirt/'
								},
								'https://cdn.apicart.dev/external/wlhv1egho2u4p0e0nkne2mks7f9btigi/data/02/2.json',
								'https://cdn.apicart.dev/external/wlhv1egho2u4p0e0nkne2mks7f9btigi/data/03/3.json',
								'https://cdn.apicart.dev/external/wlhv1egho2u4p0e0nkne2mks7f9btigi/data/04/4.json',

							],
							discount: [
								'https://cdn.apicart.dev/external/wlhv1egho2u4p0e0nkne2mks7f9btigi/data/04/4.json',
								'https://cdn.apicart.dev/external/wlhv1egho2u4p0e0nkne2mks7f9btigi/data/03/3.json',
								'https://cdn.apicart.dev/external/wlhv1egho2u4p0e0nkne2mks7f9btigi/data/02/2.json',
								'https://cdn.apicart.dev/external/wlhv1egho2u4p0e0nkne2mks7f9btigi/data/02/2.json',
							]
						}
					}
				}
			}
		},
		vueComponentsTranslator: {
			localization: {
				en: {
					categories: {
						clothes: {
							title: 'The most beautiful clothes',
							description: "The most beautiful t-shirts.",
							menu: 'T-shirts',
							new: {
								title: 'New collection',
								description: "T-shirts from our new collection.",
								menu: 'New collection'
							},
							discount: {
								title: 'Discounted t-shirts',
								description: "The most popular T-shirts for half price",
								menu: 'Discount'
							}
						}
					}
				}
			}
		}
	}).initVueBundle();
