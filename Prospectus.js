import React from "react";

const App = () => {

	// Function will execute on click of button
	const onButtonClick = () => {
		// using Java Script method to get PDF file
		fetch('SamplePDF2.pdf').then(response => {
			response.blob().then(blob => {
				// Creating new object of PDF file
				const fileURL = window.URL.createObjectURL(blob);
				// Setting various property values
				let alink = document.createElement('a');
				alink.href = fileURL;
				alink.download = 'SamplePDF2.pdf';
				alink.click();
			})
		})
	}
	return (
		<>
			<center>
				<h1>Prospectus</h1>
				<button onClick={onButtonClick}>
					Download PDF
				</button>
			</center>
		</>
	);
};

export default App;
