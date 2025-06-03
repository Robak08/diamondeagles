import { industries } from '$lib/industries.json';
export const industriesArray = industries.map(item => {
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
			href: "/#about",
		},
		{
			label: "Industries",
			href: "/industries",
			children: industriesArray
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

export const states = [
	"Alaska",
	"Alabama",
	"Arkansas",
	"Arizona",
	"California",
	"Colorado",
	"Connecticut",
	"District of Columbia",
	"Delaware",
	"Florida",
	"Georgia",
	"Hawaii",
	"Iowa",
	"Idaho",
	"Illinois",
	"Indiana",
	"Kansas",
	"Kentucky",
	"Louisiana",
	"Massachusetts",
	"Maryland",
	"Maine",
	"Michigan",
	"Minnesota",
	"Missouri",
	"Mississippi",
	"Montana",
	"North Carolina",
	"North Dakota",
	"Nebraska",
	"New Hampshire",
	"New Jersey",
	"New Mexico",
	"Nevada",
	"New York",
	"Ohio",
	"Oklahoma",
	"Oregon",
	"Pennsylvania",
	"Rhode Island",
	"South Carolina",
	"South Dakota",
	"Tennessee",
	"Texas",
	"Utah",
	"Virginia",
	"Vermont",
	"Washington",
	"Wisconsin",
	"West Virginia",
	"Wyoming",
] as string[];

export const statesArray = [
	{
		name: "Alabama",
		id: "AL"
	},
	{
		name: "Alaska",
		id: "AK"
	},
	{
		name: "American Samoa",
		id: "AS"
	},
	{
		name: "Arizona",
		id: "AZ"
	},
	{
		name: "Arkansas",
		id: "AR"
	},
	{
		name: "California",
		id: "CA"
	},
	{
		name: "Colorado",
		id: "CO"
	},
	{
		name: "Connecticut",
		id: "CT"
	},
	{
		name: "Delaware",
		id: "DE"
	},
	{
		name: "District Of Columbia",
		id: "DC"
	},
	{
		name: "Federated States Of Micronesia",
		id: "FM"
	},
	{
		name: "Florida",
		id: "FL"
	},
	{
		name: "Georgia",
		id: "GA"
	},
	{
		name: "Guam",
		id: "GU"
	},
	{
		name: "Hawaii",
		id: "HI"
	},
	{
		name: "Idaho",
		id: "ID"
	},
	{
		name: "Illinois",
		id: "IL"
	},
	{
		name: "Indiana",
		id: "IN"
	},
	{
		name: "Iowa",
		id: "IA"
	},
	{
		name: "Kansas",
		id: "KS"
	},
	{
		name: "Kentucky",
		id: "KY"
	},
	{
		name: "Louisiana",
		id: "LA"
	},
	{
		name: "Maine",
		id: "ME"
	},
	{
		name: "Marshall Islands",
		id: "MH"
	},
	{
		name: "Maryland",
		id: "MD"
	},
	{
		name: "Massachusetts",
		id: "MA"
	},
	{
		name: "Michigan",
		id: "MI"
	},
	{
		name: "Minnesota",
		id: "MN"
	},
	{
		name: "Mississippi",
		id: "MS"
	},
	{
		name: "Missouri",
		id: "MO"
	},
	{
		name: "Montana",
		id: "MT"
	},
	{
		name: "Nebraska",
		id: "NE"
	},
	{
		name: "Nevada",
		id: "NV"
	},
	{
		name: "New Hampshire",
		id: "NH"
	},
	{
		name: "New Jersey",
		id: "NJ"
	},
	{
		name: "New Mexico",
		id: "NM"
	},
	{
		name: "New York",
		id: "NY"
	},
	{
		name: "North Carolina",
		id: "NC"
	},
	{
		name: "North Dakota",
		id: "ND"
	},
	{
		name: "Northern Mariana Islands",
		id: "MP"
	},
	{
		name: "Ohio",
		id: "OH"
	},
	{
		name: "Oklahoma",
		id: "OK"
	},
	{
		name: "Oregon",
		id: "OR"
	},
	{
		name: "Palau",
		id: "PW"
	},
	{
		name: "Pennsylvania",
		id: "PA"
	},
	{
		name: "Puerto Rico",
		id: "PR"
	},
	{
		name: "Rhode Island",
		id: "RI"
	},
	{
		name: "South Carolina",
		id: "SC"
	},
	{
		name: "South Dakota",
		id: "SD"
	},
	{
		name: "Tennessee",
		id: "TN"
	},
	{
		name: "Texas",
		id: "TX"
	},
	{
		name: "Utah",
		id: "UT"
	},
	{
		name: "Vermont",
		id: "VT"
	},
	{
		name: "Virgin Islands",
		id: "VI"
	},
	{
		name: "Virginia",
		id: "VA"
	},
	{
		name: "Washington",
		id: "WA"
	},
	{
		name: "West Virginia",
		id: "WV"
	},
	{
		name: "Wisconsin",
		id: "WI"
	},
	{
		name: "Wyoming",
		id: "WY"
	}
];