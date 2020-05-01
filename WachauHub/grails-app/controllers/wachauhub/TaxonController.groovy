package wachauhub


import grails.rest.*
import grails.converters.*

class TaxonController {
	static responseFormats = ['json']

    TaxonService taxonService
	
    def getTaxonGroups() {
        def response = taxonService.getTaxonGroups()
        render response as grails.converters.JSON
    }

    def getRecordCountForTaxon(String taxon) {
        def response = taxonService.getRecordCountForTaxon(taxon)
        render response
    }
}
