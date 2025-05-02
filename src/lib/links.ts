export const navLinks: {
	label: string;
	href: string;
	children?: { label: string; href: string; description?: string }[];
}[] = [
	{
		label: "About Eagles",
		href: "/about",
	},
	{
		label: "Industries",
		href: "/industries",
		children: [
			{
				label: "Industry 1",
				href: "/",
				description: "Desc 1",
			},
			{
				label: "Industry 2",
				href: "/",
			},
			{
				label: "Industry 3",
				href: "/",
			},
			{
				label: "Industry 4",
				href: "/",
			},
			{
				label: "Industry 5",
				href: "/",
			},
			{
				label: "Industry 6",
				href: "/",
				description: "Desc 6",
			},
			{
				label: "Industry 7",
				href: "/",
			},
			{
				label: "Industry 8",
				href: "/",
			},
		],
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

