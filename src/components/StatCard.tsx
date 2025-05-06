import { useRef, useState, useEffect } from "react";
import AnimatedNumber from "@/components/ui/animated-number";
// import { useInView } from "motion/react";

export function StatCard({
	stat,
	text,
	duration,
	icon,
}: {
	stat: number | string;
	text: string;
	duration: number;
	icon?: any;
}) {
	// const ref = useRef(null);
	// const isInView = useInView(ref);

	const endNumber =
		typeof stat === "string" ? Number(stat.replace(",", "")) : stat;

	const [currentNumber, setCurrentNumber] = useState(0);

	useEffect(() => {
		// if (isInView)
		setTimeout(() => {
			setCurrentNumber(endNumber);
		}, 200);
		// }, [currentNumber, isInView]);
	}, [currentNumber]);
	return (
		<div
			// ref={ref}
			data-slot="card"
			className="bg-muted/50 text-card-foreground flex flex-col gap-6 shadow-sm rounded-3xl border-2 p-4 md:p-5 xl:p-8 transition hover:-translate-y-3 hover:border-primary m-4 sm:m-0">
			<div className="block p-0">
				<div className="flex flex-col items-center md:items-start gap-4">
					<span className="relative flex justify-center items-center size-8 shrink-0 h-12 w-12 overflow-hidden rounded-full border">
						{/* <slot name="icon" /> */}
						{icon ? icon : ""}
					</span>
					<div
						data-stat={stat}
						className="mt-4 text-4xl lg:text-5xl leading-tight font-semibold">
						<AnimatedNumber value={currentNumber} duration={duration} />
					</div>
					<p className="mb-5 max-w-52 text-base lg:text-lg font-medium text-center md:text-left">
						{text}
					</p>
				</div>
			</div>
		</div>
	);
}
