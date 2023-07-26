import Line from "./Line";

const Pricing = () => {
	return (
		<div className="mt-9">
			<div className="flex justify-center items-center">
				<Line />
				<span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="icon icon-tabler icon-tabler-tag"
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
						<circle cx="8.5" cy="8.5" r="1" fill="currentColor" />
						<path d="M4 7v3.859c0 .537 .213 1.052 .593 1.432l8.116 8.116a2.025 2.025 0 0 0 2.864 0l4.834 -4.834a2.025 2.025 0 0 0 0 -2.864l-8.117 -8.116a2.025 2.025 0 0 0 -1.431 -.593h-3.859a3 3 0 0 0 -3 3z" />
					</svg>
				</span>

				<span className="ml-3 font-bold text-3xl text-blue-500">Pricing</span>

				<Line />
			</div>
			<div className="flex justify-around mt-3">
				<div className="h-[35.5rem] w-[20.5rem] mt-8 rounded-xl shadow-md bg-gradient-to-r from-slate-400 to-slate-300 flex items-center justify-center">
					<div className="h-[35rem] w-80 bg-neutral-100 rounded-xl shadow-md  flex justify-center ">
						<div className="w-full h-20 shadow-inherit rounded-t-md bg-gradient-to-r from-slate-400 to-slate-300 flex justify-center">
							<div>
								<div className=" items-center flex-col mt-7 text-2xl font-bold text-white flex">
									<div className="flex ">
										<svg
											className="mr-3"
											xmlns="http://www.w3.org/2000/svg"
											class="icon icon-tabler icon-tabler-box"
											width="30"
											height="30"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="#ffffff"
											fill="none"
											stroke-linecap="round"
											stroke-linejoin="round"
										>
											<path stroke="none" d="M0 0h24v24H0z" fill="none" />
											<path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5" />
											<path d="M12 12l8 -4.5" />
											<path d="M12 12l0 9" />
											<path d="M12 12l-8 -4.5" />
										</svg>
										<div>Essential</div>
									</div>
									<div>
										{/* content */}
										<img
											src="undraw_button_style_re_uctt.svg"
											alt="SVG Icon"
											className="w-72 h-72"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="h-[35.5rem] w-[20.5rem] mt-8 rounded-xl shadow-md bg-gradient-to-r from-[#ffc533] to-[#fae85c] flex items-center justify-center">
					<div className="h-[35rem] w-[20rem] bg-neutral-100 rounded-xl flex justify-center">
						<div className="w-full h-20 rounded-t-md bg-gradient-to-r from-[#ffc533] to-[#fae85c] flex justify-center">
							<div>
								<div className=" items-center flex-col mt-7 text-2xl font-bold text-white flex">
									<div className="flex ">
										<svg
											className="mr-2"
											xmlns="http://www.w3.org/2000/svg"
											class="icon icon-tabler icon-tabler-premium-rights"
											width="30"
											height="30"
											viewBox="0 0 24 24"
											strokeWidth="1.5"
											stroke="#ffffff"
											fill="none"
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											<path stroke="none" d="M0 0h24v24H0z" fill="none" />
											<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
											<path d="M13.867 9.75c-.246 -.48 -.708 -.769 -1.2 -.75h-1.334c-.736 0 -1.333 .67 -1.333 1.5c0 .827 .597 1.499 1.333 1.499h1.334c.736 0 1.333 .671 1.333 1.5c0 .828 -.597 1.499 -1.333 1.499h-1.334c-.492 .019 -.954 -.27 -1.2 -.75" />
											<path d="M12 7v2" />
											<path d="M12 15v2" />
										</svg>
										<div>Pro</div>
									</div>
								</div>
								<div>
									{/* content */}
									<img
										src="undraw_button_style_re_uctt.svg"
										alt="SVG Icon"
										className="w-72 h-72"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="h-[35.5rem] w-[20.5rem] mt-8 rounded-xl shadow-md bg-gradient-to-r  from-[#ca0fd4] to-[#ea75ff]  flex items-center justify-center">
					<div className="h-[35rem] w-80 bg-neutral-100  rounded-xl   flex justify-center ">
						<div className="w-full h-20 shadow-inherit  bg-gradient-to-r  from-[#ca0fd4] to-[#ea75ff] flex justify-center">
							<div className="mt-7 text-2xl font-bold text-white flex ">
								<span>
									<svg
										className="mr-2"
										xmlns="http://www.w3.org/2000/svg"
										class="icon icon-tabler icon-tabler-vip"
										width="32"
										height="32"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="#ffffff"
										fill="none"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<path stroke="none" d="M0 0h24v24H0z" fill="none" />
										<path d="M3 5h18" />
										<path d="M3 19h18" />
										<path d="M4 9l2 6h1l2 -6" />
										<path d="M12 9v6" />
										<path d="M16 15v-6h2a2 2 0 1 1 0 4h-2" />
									</svg>
								</span>
								<div>Enterprise</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Pricing;
