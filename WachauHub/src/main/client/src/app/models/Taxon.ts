export class Taxon {
   speciesGroup: string;
   taxa: string[] = [];

   constructor(taxonResponse: any) {
     console.log(taxonResponse[1]);
    this.speciesGroup = taxonResponse[1].speciesGroup;
    taxonResponse[1].taxa.forEach(element => {
      this.taxa.push(element.common);
    });
  }
}

