import { industries } from '@assets/industries.json';
const menuIndustriesArray = industries.map(item => {
	const itemObject = {
		href: item.href,
		label: item.label,
		description: item.description,
		svg: item.svg
	}
	return itemObject;
})

export const navLinks: {
	label: string;
	href: string;
	children?: { label: string; href: string; description?: string | null }[];
}[] = [
		{
			label: "About Eagles",
			href: "/about",
		},
		{
			label: "Industries",
			href: "/industries",
			children: menuIndustriesArray
			// [
			// 	{ label: 'Gastronomy', href: '#', description: null },
			// 	{ label: 'Retail', href: '#', description: null },
			// 	{ label: 'Health ', href: '#', description: null },
			// 	{ label: 'Services', href: '#', description: null },
			// 	{ label: 'Technology', href: '#', description: null },
			// 	{ label: 'Education', href: '#', description: null },
			// 	{ label: 'Entertainment', href: '#', description: null },
			// 	{ label: 'Financial Services', href: '#', description: null },
			// 	{ label: 'Transport', href: '#', description: null },
			// 	{ label: 'Logistics', href: '#', description: null },
			// ],
		},
		{
			label: "Contact",
			href: "/contact",
		},
	];


export const footerLinks = [
	{
		label: "Terms and Conditions",
		href: "/terms-and-conditions",
	},
	{
		label: "Privacy Policy",
		href: "/privacy-policy",
	},
];