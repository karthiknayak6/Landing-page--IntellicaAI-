"use client";
export default function NavBar() {
	return (
		<nav className="bg-white fixed top-0 left-0 right-0 flex justify-center items-center h-16 bg-white-800 text-black shadow-sm">
			<div className="flex items-center space-x-4">
				<h1 className="text-2xl font-bold ml-9 mr-6 text-white-600 cursor-pointer">
					Intellica
				</h1>
				<ul className="flex space-x-4 font-bold">
					<li>
						<a className="cursor-pointer font-blue">About</a>
					</li>
					<li>
						<a className="cursor-pointer">Pricing</a>
					</li>
					<li>
						<a className="cursor-pointer">Contact</a>
					</li>
				</ul>
			</div>
			<button
				onClick={() => {
					window.location.href = "https://bard.google.com";
				}}
				className=" font-bold h-7 w-20 text-sm text-white rounded-md bg-blue-500 ml-auto mr-8 cursor-pointer"
			>
				Try Now
			</button>
		</nav>
	);
}
