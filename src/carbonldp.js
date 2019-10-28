import {CarbonLDP} from "carbonldp";

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

    // Executing a SPARQL query built with SPARQLer

    carbonldp.documents.$sparql()
        .prefix('ebucore', 'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#')
        .prefix('rdfs', 'http://www.w3.org/2000/01/rdf-schema#')
        .select('keyword', 'keywordLabel')
        .where(
            _ => [
                _.var('keyword')
                    .has('a', _.resource('ebucore:Keyword'))
                    .and(_.resource('rdfs:label'), _.var('keywordLabel'))
            ])
        .limit(10)
        .execute()
        .then((response) => {
            console.log("SPARQLer result");
            console.log(response);
        });

    // Executing a "raw" SPARQL query

    carbonldp.documents.$executeSELECTQuery(
        `
        SELECT DISTINCT ?properties
		WHERE {
			?keyword a <http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Keyword> .
			?keyword ?properties ?object .
		} 
    	`
    ).then((response) => {
        console.log("Raw SPARQL query result");
        console.log(response);
    });
}
