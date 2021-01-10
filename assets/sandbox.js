Apicart
	.setDevEnv()
	.configure({
		store: new Apicart.Store({ token: '9mCu3DlBCa4REI?Q7kKly!Rw6!_FvD8K_dgPXe1b20?r6!sPTQMyCpq_ADt!jXOD' }),
		payments: new Apicart.Payments({ token: 'Q84lNQyLl?nBGvKxxbcdc!nWFKEZrK?L_Is2r9IaOJo14ONbXw1SMlPIeptcaFza' }),
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
