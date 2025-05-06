import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const steps: {
	value: string;
	title: string;
	description?: string;
	htmlDescription?: string;
	image?: string;
	emoji?: string;
}[] = [
	{
		value: "collect",
		title: "Review Collection",
		description:
			"We gather real customer reviews from trusted online platforms to understand public sentiment.",
		htmlDescription:
			// "<p>We begin by gathering authentic customer reviews from trusted online sources such as directories, review platforms, and social media. These reviews represent real experiences and provide a strong foundation for evaluating a company’s reputation and service quality.</p><p>By relying on genuine feedback, we ensure our process is transparent and reflective of public opinion. This step helps us identify businesses that consistently meet or exceed customer expectations in their respective industries and regions.</p>",
			"<p>We begin by collecting verified customer reviews from a wide range of trusted online platforms, including business directories, review aggregators, and social media. These reviews are unfiltered and reflect the honest opinions of real customers based on their direct experiences with businesses.</p><p>By leveraging these public insights, we build a reliable picture of how a company is perceived in the market. This approach ensures that only businesses delivering consistent quality and customer satisfaction are considered for further evaluation and potential recognition.</p>",
		image: "",
		emoji: "📄",
	},
	{
		value: "analysis",
		title: "Rating Analysis",
		description:
			"Our proprietary algorithm analyzes and aggregates reviews to calculate a fair, average score.",
		htmlDescription:
			// "<p>Our proprietary algorithm aggregates reviews and ratings from various platforms to calculate an accurate, unbiased average score for each business. This ensures fairness across industries and eliminates the influence of paid reviews or manipulated scores.</p><p>By standardizing the data, we’re able to compare businesses objectively and highlight those that truly stand out. Every score is backed by real user input, creating a reliable benchmark of quality and trust.</p>",
			"<p>Next, we process the gathered reviews through our proprietary algorithm, which calculates a standardized average rating for each company. This algorithm filters out anomalies and outliers, providing a balanced and fair score based on actual customer sentiment.</p><p>Our goal is to eliminate bias and ensure every business, regardless of size or platform visibility, is judged equally. This method provides a data-driven foundation for identifying the true leaders within each local market and industry.</p>",
		image: "",
		emoji: "📊",
	},
	{
		value: "ranking",
		title: "Business Ranking",
		description:
			"The top-rated companies in each industry and region are featured in our exclusive ranking list.",
		htmlDescription:
			// "<p>Once scores are calculated, we ideBased on their calculated scores, the highest-rated businesses are featured in our exclusive Diamond Eagles USA rankings. These rankings showcase local leaders who consistently deliver outstanding value, quality, and service to their customers.</p><p>Being listed among the top performers gives companies added visibility and credibility in their market. It also serves as an external validation of their commitment to excellence and customer satisfaction.ntify the highest-rated businesses within each region and industry. These companies are featured in our exclusive Diamond Eagles USA ranking, positioning them as local market leaders recognized for quality and trust.</p>",
			"<p>Once the ratings are finalized, we identify the highest-performing companies within each region and industry. These top-rated businesses are included in our exclusive Diamond Eagles USA rankings—a curated list of market leaders recognized for their excellence.</p><p>Being featured in the ranking sets a business apart from the competition and acts as a powerful endorsement. It boosts visibility, enhances trust with customers, and affirms the company’s dedication to delivering superior products and servces.</p>",
		image: "",
		emoji: "🥇",
	},
	{
		value: "recognition",
		title: "Official Recognition",
		description:
			"Ranked businesses receive a certificate confirming their excellence and customer trust.",
		htmlDescription:
			// "<p>Companies featured in our rankings receive an official Diamond Eagles USA certificate. This document confirms their status as a trusted and highly rated business in their region, recognized for quality and reliability.</p><p>Displaying the certificate reinforces customer confidence and strengthens brand identity. It becomes a lasting symbol of excellence that can be shared online, in-store, or through marketing materials.</p>",
			"<p>Every business that earns a place in the ranking receives a personalized Diamond Eagles USA certificate. This certificate is a mark of achievement, validating the company’s commitment to quality, professionalism, and outstanding customer service.</p><p>It can be proudly displayed in-store, in offices, or on digital platforms to increase credibility and reassure potential clients. The certificate is not just a symbol—it's a strategic asset for building trust and strengthening brand identity.</p>",
		image: "",
		emoji: "📜",
	},
	{
		value: "awards",
		title: "Trophy Award",
		description:
			"Eligible businesses may also receive a prestigious trophy to showcase their success.",
		htmlDescription:
			// "<p>Top-ranked businesses are also eligible to receive a beautifully crafted Diamond Eagles USA trophy. This prestigious award highlights their achievement and distinguishes them from competitors in a meaningful, visible way.</p><p>The trophy is more than a symbol—it’s a marketing asset. Whether showcased in offices, events, or promotional campaigns, it communicates a message of leadership, integrity, and top-tier performance.</p>",
			"<p>In addition to the certificate, top-ranked businesses are eligible for the prestigious Diamond Eagles USA trophy. This elegantly crafted award celebrates the company’s excellence and serves as a lasting representation of its success.</p><p>The trophy can be featured at company events, showcased in physical locations, or used in marketing campaigns to enhance public recognition. It offers a tangible way to communicate achievement, build prestige, and inspire both customers and employees alike.</p>",
		image: "",
		emoji: "🏆",
	},
];

export function HowItWorksTabs() {
	return (
		<Tabs defaultValue="collect" orientation="horizontal">
			<TabsList className="relative grid items-start gap-6 gap-y-12 lg:gap-y-6 lg:grid-cols-5 h-fit w-full bg-transparent">
				<div className="absolute top-[38px] right-0 left-8 -z-10 hidden h-px bg-input lg:block w-[calc(100%_-_3rem)]" />
				{steps.map(({ value, title, description, image }, index) => (
					<TabsTrigger
						key={value + index}
						value={value}
						className="group relative pointer-events-none lg:pointer-events-auto h-full hover:bg-muted !border-transparent data-[state=active]:!bg-transparent lg:data-[state=active]:!bg-muted">
						<div className="w-full h-full flex flex-col gap-4 lg:block rounded-md p-0 text-left sm:py-4 lg:px-4 text-foreground lg:text-current">
							{/* horizontal line for lg+ */}
							<div className="absolute top-[34px] right-0 left-8 z-1 hidden h-px bg-primary lg:group-data-[state=active]:block w-[calc(100%_-_2rem)]" />
							{/* vertical line for lg- */}
							<div className="absolute top-8 left-[38px] z-1 h-1/2 w-px bg-muted lg:hidden" />
							<div className="flex items-start gap-3 lg:items-center lg:contents bg-transparent p-4 lg:p-0">
								{/* NUMBER */}
								<span className="flex size-7 relative z-1 shrink-0 items-center justify-center rounded-full border bg-muted lg:bg-background font-mono text-xs font-medium lg:group-data-[state=active]:bg-gradient lg:group-data-[state=active]:text-background lg:group-data-[state=active]:font-semibold lg:group-data-[state=active]:ring lg:group-data-[state=active]:ring-muted-foreground/40">
									{index + 1}
								</span>
								{/* <span className="h-full w-px bg-input lg:hidden"></span> */}
								<div>
									<h3 className="mb-1 font-medium lg:mt-4 text-base">
										{title}
									</h3>
									<p className="!text-xs xl:!text-sm mt-2 mb-0 text-wrap">{description}</p>
								</div>
							</div>
							<div className="mt-3 lg:mt-6 block border bg-muted px-4 py-6 lg:hidden">
								<div className="aspect-video">
									{/* <img
										src={image}
										alt="placeholder"
										className="h-full w-full rounded-md border object-cover shadow"
									/> */}
									<div className="placeholder aspect-3/2">
										IMAGE PLACEHOLDER
									</div>
								</div>
							</div>
						</div>
					</TabsTrigger>
				))}
			</TabsList>
			<div className="mt-10 hidden rounded-xl lg:border bg-muted/50 lg:bg-transparent p-6 lg:p-10 lg:block">
				{steps.map(
					({ value, title, description, htmlDescription, image }, index) => (
						<TabsContent key={value + "#" + index} value={value} title={title}>
							<div className="flex flex-row gap-x-10">
								<div className="placeholder aspect-square w-full max-w-[220px]">
									IMAGE PLACEHOLDER
								</div>
								<div
									aria-description={description}
									dangerouslySetInnerHTML={{
										__html: `${htmlDescription}`,
									}}></div>
							</div>
						</TabsContent>
					)
				)}
			</div>
		</Tabs>
	);
}
