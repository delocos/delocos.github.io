Apicart
	.setDevEnv()
	.configure({
		store: new Apicart.Store({ token: '9mCu3DlBCa4REI?Q7kKly!Rw6!_FvD8K_dgPXe1b20?r6!sPTQMyCpq_ADt!jXOD' }),
		payments: new Apicart.Payments({ token: 'Q84lNQyLl?nBGvKxxbcdc!nWFKEZrK?L_Is2r9IaOJo14ONbXw1SMlPIeptcaFza' }),
		vueComponents: {
			cartDropdown: {
				dropdownPosition: 'right'
			},
			category: {
				products: {
					list: {
						clothes: {
							new: [
								'https://cdn.apicart.dev/external/wlhv1egho2u4p0e0nkne2mks7f9btigi/data/01/1.json',
								'https://cdn.apicart.dev/external/wlhv1egho2u4p0e0nkne2mks7f9btigi/data/02/2.json',
								'https://cdn.apicart.dev/external/wlhv1egho2u4p0e0nkne2mks7f9btigi/data/03/3.json',
								'https://cdn.apicart.dev/external/wlhv1egho2u4p0e0nkne2mks7f9btigi/data/04/4.json',

							],
							discount: [
								'https://cdn.apicart.dev/external/wlhv1egho2u4p0e0nkne2mks7f9btigi/data/04/4.json',
								'https://cdn.apicart.dev/external/wlhv1egho2u4p0e0nkne2mks7f9btigi/data/03/3.json',
								'https://cdn.apicart.dev/external/wlhv1egho2u4p0e0nkne2mks7f9btigi/data/02/2.json',
								'https://cdn.apicart.dev/external/wlhv1egho2u4p0e0nkne2mks7f9btigi/data/01/1.json',
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
