Apicart
	.setDevEnv()
	.configure({
		store: new Apicart.Store({ token: 'NGs2HDfVR7cYraBo6zgKvci62?K2TvOkQO!tQiueGB7hN4uS2pJOXT2SxaMzR6Vr' }),
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
									dataUrl: 'https://cdn.apicart.dev/external/yrz6ulvdop8wkdocsymdm3lz2s7twpy6/data/02/2.json',
									pageUrl: '/green-t-shirt/'
								},
								'https://cdn.apicart.dev/external/yrz6ulvdop8wkdocsymdm3lz2s7twpy6/data/01/1.json',
								'https://cdn.apicart.dev/external/yrz6ulvdop8wkdocsymdm3lz2s7twpy6/data/02/2.json',
								'https://cdn.apicart.dev/external/yrz6ulvdop8wkdocsymdm3lz2s7twpy6/data/02/2.json',

							],
							discount: [
								'https://cdn.apicart.dev/external/yrz6ulvdop8wkdocsymdm3lz2s7twpy6/data/01/1.json',
								'https://cdn.apicart.dev/external/yrz6ulvdop8wkdocsymdm3lz2s7twpy6/data/01/1.json',
								'https://cdn.apicart.dev/external/yrz6ulvdop8wkdocsymdm3lz2s7twpy6/data/01/1.json',
								'https://cdn.apicart.dev/external/yrz6ulvdop8wkdocsymdm3lz2s7twpy6/data/01/1.json',
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
