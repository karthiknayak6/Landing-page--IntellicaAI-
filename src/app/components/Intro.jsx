"use client";

const Intro = () => {
	const redirectToBard = () => {
		window.location.href = "https://bard.google.com";
	};
	return (
		<div className="h-80 flex items-center justify-evenly mt-24 bg-neutral-50 p-7 rounded-md shadow-md">
			<div>
				<h1 class="text-5xl font-bold text-blue-500 mb-3">
					Welcome to Intellica AI
				</h1>
				<p className="text-xl mb-6 font-bold">
					Unlocking Intelligence, Empowering Conversations.
				</p>
				<button
					onClick={redirectToBard}
					className=" font-bold shadow-md h-8 w-20 text-base text-white rounded-md bg-blue-500 ml-auto mr-8 cursor-pointer"
				>
					Try Now
				</button>
			</div>
			<div className="">
				<img
					class="w-69 h-60 text-blue-500"
					src="undraw_chat_bot_re_e2gj.svg"
					alt="SVG Icon"
				/>
			</div>
		</div>
	);
};
export default Intro;
