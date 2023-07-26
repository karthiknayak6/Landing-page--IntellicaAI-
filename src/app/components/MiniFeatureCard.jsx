const MiniFeatureCard = ({ title, svg, description }) => {
	return (
		<div className="bg-gradient-to-r from-neutral-50 to-neutral-100 shadow-md rounded-md h-[22rem] w-96 flex flex-col items-center">
			<img className="w-72 h-72 text-blue-500" src={svg} alt="SVG Icon" />
			<p className="mt-[-30px] text-xl font-bold text-blue-600">{title}</p>
			<p className="p-4 text-center">{description}</p>
		</div>
	);
};

export default MiniFeatureCard;
