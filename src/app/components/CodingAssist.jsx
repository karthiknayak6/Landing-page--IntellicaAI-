const CodingAssist = () => {
	return (
		<div className=" bg-gradient-to-l from-neutral-50 to-neutral-100 h-[25rem] mt-16 rounded-md shadow-md w-auto flex items-center justify-center">
			<img src="undraw_programming_re_kg9v.svg" className="w-96 h-96" />
			<div>
				<p className="mb-7 mx-6 font-bold text-3xl text-blue-500">
					Real-time Intelligent Coding Assistance
				</p>
				<div className="mx-8">
					<p className="mb-5 text-base">
						<span className=" font-bold text-lg text-grey-400 flex items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="icon icon-tabler icon-tabler-brand-python"
								width="32"
								height="32  "
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="rgb(55,61,85)"
								fill="none"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<path d="M12 9h-7a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h3" />
								<path d="M12 15h7a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-3" />
								<path d="M8 9v-4a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2h-4a2 2 0 0 0 -2 2v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4" />
								<path d="M11 6l0 .01" />
								<path d="M13 18l0 .01" />
							</svg>
							<span className="ml-3 text-gray-700">
								Experience Effortless Programming
							</span>
						</span>{" "}
						Intellica AI offers real-time coding assistance seamlessly
						integrated with popular IDEs and code editors. Say goodbye to
						frustrating bugs and logical errors as Intellica AI checks your code
						on the fly, providing instant feedback to enhance your coding
						efficiency.
					</p>
					<p className="text-base">
						<span className="font-bold text-lg text-grey-700 flex items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="icon icon-tabler icon-tabler-code"
								width="32"
								height="32"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="rgb(55,61,85)"
								fill="none"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<path d="M7 8l-4 4l4 4" />
								<path d="M17 8l4 4l-4 4" />
								<path d="M14 4l-4 16" />
							</svg>
							<span className="ml-3 text-gray-700">
								Smart Code Snippet Suggestions
							</span>
						</span>{" "}
						Boost your productivity with Intellica AI's intelligent code snippet
						suggestions. It understands your context and programming language,
						offering relevant code blocks and solutions to accelerate your
						development process, all within your favorite coding environment.
					</p>
				</div>
			</div>
			<img src="undraw_hacker_mind_-6-y85.svg" className="w-72 h-72" />
		</div>
	);
};
export default CodingAssist;
