import Home from "./home/Home";

const HomePage = () => {
	return (
		<div>
			<Home
				handleClose={function (): void {
					throw new Error("Function not implemented.");
				}}
			/>
		</div>
	);
};

export default HomePage;
