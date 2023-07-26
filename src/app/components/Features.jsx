import Line from "./Line";
import MiniFeatureCard from "./MiniFeatureCard";

const Features = () => {
	return (
		<div className="features">
			<div className="  text-blue-500 font-bold  text-center mt-7 mb-7 text-3xl flex justify-center items-center">
				<Line />
				<span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="icon icon-tabler icon-tabler-brain"
						width="36"
						height="36"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="rgb(59,130,246)"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<path d="M15.5 13a3.5 3.5 0 0 0 -3.5 3.5v1a3.5 3.5 0 0 0 7 0v-1.8" />
						<path d="M8.5 13a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1 -7 0v-1.8" />
						<path d="M17.5 16a3.5 3.5 0 0 0 0 -7h-.5" />
						<path d="M19 9.3v-2.8a3.5 3.5 0 0 0 -7 0" />
						<path d="M6.5 16a3.5 3.5 0 0 1 0 -7h.5" />
						<path d="M5 9.3v-2.8a3.5 3.5 0 0 1 7 0v10" />
					</svg>
				</span>
				<span className="ml-3 text-blue-500">Key Highlights</span>
				<Line />{" "}
			</div>
			<div className="bg-white h-80 w-400 flex justify-around">
				<MiniFeatureCard
					title="Hyper-Intelligent Conversations!"
					svg="undraw_quick_chat_re_bit5.svg"
					description="Engage in natural, human-like conversations with Intellica AI, powered by cutting-edge AI technology, delivering insightful responses to your queries."
				/>
				<MiniFeatureCard
					title="Personalized User Experience"
					svg="undraw_mobile_user_re_xta4.svg"
					description="Experience a chatbot that understands you - Intellica AI remembers your preferences and adapts its responses to cater to your individual needs."
				/>
				<MiniFeatureCard
					title="Powerful Integrations"
					svg="undraw_version_control_re_mg66.svg"
					description="Unlock endless possibilities with Intellica AI as it seamlessly integrates with a variety of services, making it your ultimate virtual assistant."
				/>
			</div>
		</div>
	);
};
export default Features;
