import NumberFlow from "@number-flow/react";

export default function AnimatedNumber({
	value,
	duration,
}: {
	value: number;
	duration: number;
}) {
	return (
		<>
			<span className="flex items-center justify-center gap-2">
				<NumberFlow
					value={value}
					transformTiming={{
						duration: duration | 750,
						easing:
							"linear(0, 0.0015, 0.0058 1.06%, 0.0216 2.13%, 0.0496 3.35%, 0.0907 4.71%, 0.1799 7.15%, 0.405 12.62%, 0.5112 15.36%, 0.6114, 0.6976, 0.7695 24.03%, 0.8018, 0.8306 27.07%, 0.8573, 0.8806 30.26%, 0.9018, 0.9199 33.61%, 0.936 35.36%, 0.95 37.18%, 0.962 39.08%, 0.9724 41.14%, 0.9809 43.27%, 0.9878 45.55%, 0.9974 50.79%, 1.0014 55.66%, 1.0029 61.89%, 1.0002 99.99%)",
					}}
					className="font-semibold"
					// format={{ style: "currency", currency: "USD" }}
				/>
			</span>
		</>
	);
}
