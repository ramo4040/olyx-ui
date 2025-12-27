import "./style.css";
import { Slider as SliderPrimitive } from "@base-ui/react/slider";

function Slider(props: SliderPrimitive.Root.Props) {
	const isRange =
		Array.isArray(props.value) || Array.isArray(props.defaultValue);
	return (
		<SliderPrimitive.Root data-slot="slider" {...props}>
			<SliderPrimitive.Control data-slot="slider-control">
				<SliderPrimitive.Track data-slot="slider-track">
					<SliderPrimitive.Indicator data-slot="slider-indicator" />
					<SliderPrimitive.Thumb
						index={0}
						data-slot="slider-thumb"
						tabIndex={0}
					/>
					{isRange && (
						<SliderPrimitive.Thumb index={1} data-slot="slider-thumb" />
					)}
				</SliderPrimitive.Track>
			</SliderPrimitive.Control>
		</SliderPrimitive.Root>
	);
}

export { Slider };
