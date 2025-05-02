import { toast } from "sonner"
import { Button } from "@/components/ui/button";

// TODO show icon when on mobile

export function CopyText({ text }: {text:string}) {
  	const copyText = () => {
		if (!text || !navigator) return;
		navigator.clipboard.writeText(text);
		toast.success(text, {
			classNames: {
				title: 'text-base',
				description: 'text-sm !text-foreground/80',
			},
			description: "Succesfully copied!",
		  })
	};
  return (
	<Button
		variant="ghost"
		size="icon"
		className="cursor-pointer"
		title={text}
		aria-label={`Copy ${text}`}
		onClick={copyText}
	>
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-2.5 md:w-4 h-2.5 md:h-4"
			><path
				stroke="currentColor"
				strokeLinecap="square"
				strokeWidth="2"
				d="M2 10.5L2.00002 20.5C2.00003 21.3284 2.6716 22 3.50002 22H13.5C14.3285 22 15 21.3284 15 20.5L15 10.5C15 9.6716 14.3284 9.00003 13.5 9.00002L3.50001 9C2.67158 9 2 9.67158 2 10.5Z"
			></path><path
				stroke="currentColor"
				strokeWidth="2"
				d="M15 15H20.5C21.3285 15 22 14.3284 22 13.5L22 3.50002C22 2.6716 21.3284 2.00003 20.5 2.00002L10.5 2C9.67158 2 9 2.67158 9 3.50001L9.00001 9"
			></path>
		</svg>
	</Button>
  )
};