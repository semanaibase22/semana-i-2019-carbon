import { CarbonLDP } from "carbonldp";
export default function init(limit) {
    const carbonldp = new CarbonLDP("https://data-itesm.lab.base22.com/");

    return carbonldp.documents.$executeSELECTQuery(`
       SELECT ?keywordLabel (COUNT(?movie) as ?movieCounter)
       WHERE{
          <https://data-itesm.lab.base22.com/keywords/> <http://www.w3.org/ns/ldp#contains> ?keyword .
          ?keyword <http://www.w3.org/2000/01/rdf-schema#label> ?keywordLabel .
          ?keyword <http://schema.org/Movie> ?movie .
       }
       GROUP BY ?keywordLabel
       LIMIT ${limit}
    `).then((response) => {
        return response.bindings
    });
}
