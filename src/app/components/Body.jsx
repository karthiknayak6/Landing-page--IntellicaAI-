import Intro from "./Intro";
import Features from "./Features";
import CodingAssist from "./CodingAssist";
import Pricing from "./Pricing";
const Body = () => {
	return (
		<div className="container mx-auto mt-16">
			<Intro />
			<Features />
			<CodingAssist />
			<Pricing />
			<div className="h-96	"></div>
		</div>
	);
};
export default Body;
