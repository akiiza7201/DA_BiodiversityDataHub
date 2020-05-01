import { CheckboxRequiredValidator } from '@angular/forms';

export class Species {
  dataProviderName: string;
  dataResourceName: string;
  dataResourceUid: string;
  occurrenceId: number;
  collector: string;
  basisOfRecord: string;
  occurrenceStatus: string;

  eventDate: number;
  datePrecision: string;

  rawScientificName: string;
  scientificName: string;
  taxonRank: string;
  vernacularName: string;
  kingdom: string;
  phylum: string;
  classID: string;
  order: string;
  family: string;
  genus: string;
  genusId: number;
  species: string;

  decimalLatitude: number;
  decimalLongitude: number;
  geodeticDatum: string;

  uuid: string;


  constructor(speciesResponse: any, aufrufer: string) {
    // schauen ob der wert überhaupt da ist, wenn nicht dann 0 bzw. leer setzten
    if (aufrufer === 'profile' || aufrufer === 'searchResults' || aufrufer === 'SpeciesMapTable') {
    this.dataProviderName = speciesResponse.dataProviderName;
    this.dataResourceName = speciesResponse.dataRessourceName;
    this.dataResourceUid = speciesResponse.dataResourceUid;
    this.occurrenceId = speciesResponse.occurrenceID;
    this.collector = speciesResponse.collector;
    this.basisOfRecord = speciesResponse.basisOfRecord;
    this.occurrenceStatus = speciesResponse.occurrenceStatus;

    this.eventDate = speciesResponse.eventDate;
    this.datePrecision = speciesResponse.datePrecision;

    this.rawScientificName = speciesResponse.raw_scientificName;
    this.scientificName = speciesResponse.scientificName;
    this.taxonRank = speciesResponse.taxonRank;
    this.vernacularName = speciesResponse.vernacularName;
    this.kingdom = speciesResponse.kingdom;
    this.phylum = speciesResponse.phylum;
    this.classID = speciesResponse.classs;
    this.order = speciesResponse.order;
    this.family = speciesResponse.family;
    this.genus = speciesResponse.genus;
    this.genusId = speciesResponse.genusId;
    this.species = speciesResponse.species;

    this.decimalLatitude = speciesResponse.decimalLatitude;
    this.decimalLongitude = speciesResponse.decimalLongitude;
    this.geodeticDatum = speciesResponse.geodeticDatum;

    this.uuid = speciesResponse.uuid;
    }

    if (aufrufer === 'dataTable') {
      this.dataProviderName = speciesResponse.processed.attribution.dataProviderName;
      this.dataResourceName = speciesResponse.processed.attribution.dataResourceName;
      this.dataResourceUid = speciesResponse.processed.attribution.dataProviderUid;
      this.occurrenceId = speciesResponse.raw.occurrence.occurrenceID;
      this.collector = speciesResponse.collector;
      this.basisOfRecord = speciesResponse.processed.occurrence.basisOfRecord;
      this.occurrenceStatus = speciesResponse.processed.occurrence.occurrenceStatus;
    }

    if (aufrufer === 'geoTable') {
      this.decimalLatitude = speciesResponse.raw.location.decimalLatitude;
      this.decimalLongitude = speciesResponse.raw.location.decimalLongitude;
      this.geodeticDatum = speciesResponse.processed.location.geodeticDatum;
    }

    if (aufrufer === 'taxTable') {
      this.scientificName = speciesResponse.processed.classification.scientificName;
      this.taxonRank = speciesResponse.processed.classification.taxonRank;
      this.vernacularName = speciesResponse.processed.classification.vernacularName;
      this.kingdom = speciesResponse.processed.classification.kingdom;
      this.phylum = speciesResponse.processed.classification.phylum;
      this.classID = speciesResponse.processed.classification.classs;
      this.order = speciesResponse.processed.classification.order;
      this.family = speciesResponse.processed.classification.family;
      this.genus = speciesResponse.processed.classification.genus;
      this.genusId = speciesResponse.processed.classification.genusId;
      this.species = speciesResponse.processed.classification.species;
    }

    if (aufrufer === 'eventTable') {
      this.eventDate = speciesResponse.processed.event.eventDate;
      this.datePrecision = speciesResponse.processed.event.datePrecision;
    }

    if (aufrufer === 'profile') {
      this.decimalLatitude = speciesResponse.raw.location.decimalLatitude;
      this.decimalLongitude = speciesResponse.raw.location.decimalLongitude;
    }

  }
}
