import { CarbonLDP } from "carbonldp";
export default function init() {
	const carbonldp = new CarbonLDP("https://data-itesm.lab.base22.com/");

	carbonldp.documents.$getChildren("genres/").then((response) => {
		console.log(response);
		const genresDiv = document.querySelector("#genres");
		response.forEach((genre) => {
			const p = document.createElement("p");
			p.appendChild(document.createTextNode(genre.originalValue));
			genresDiv.appendChild(p);
		});
	});
}
