import { useState, useEffect } from "react";
import AnimatedNumber from "@/components/ui/animated-number";
import { cn } from "@/lib/utils";
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
	const endNumber =
		typeof stat === "string" ? Number(stat.replace(",", "")) : stat;

	const [currentNumber, setCurrentNumber] = useState(0);
	const [iconClass, setIconClass] = useState("scale-90 opacity-85");
	const [svgClass, setSvgClass] = useState("");

	useEffect(() => {
		// if (isInView)
		setTimeout(() => {
			setCurrentNumber(endNumber);
			setSvgClass("animate-circle");
		}, 100);
		setTimeout(() => {
			setIconClass("scale-[1.05] opacity-100");
		}, 2200);
		// }, [currentNumber, isInView]);
	}, [currentNumber, iconClass]);
	return (
		<div
			// ref={ref}
			data-slot="card"
			className="stat-card-inner overflow-none">
			<div className="block p-0">
				<div className="flex flex-col items-center md:items-start gap-4">
					<span className="relative flex justify-center items-center shrink-0 h-16 w-16 overflow-hidden rounded-full border-primary/20">
						<svg className={`stat-card-svg ${svgClass}`} viewBox="0 0 60 60">
							<circle
								cx="30"
								cy="30"
								r="30"
								strokeWidth="8"
								fill="transparent"
							/>
						</svg>
						{/* <slot name="icon" /> */}
						<div
							className={`stat-card-icon transition-all duration-[300ms] ease-in-out ${iconClass}`}>
							{icon ? icon : ""}
						</div>
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
