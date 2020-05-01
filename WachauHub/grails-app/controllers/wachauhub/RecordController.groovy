package wachauhub


import grails.rest.*
import grails.converters.*

class RecordController {
	static responseFormats = ['json']

    RecordService recordService
	
    def getAllRecords() {
        def response = recordService.getAllRecords()
        render response as grails.converters.JSON
    }

    def getTaxonRecords(String taxon) {
        def response = recordService.getTaxonRecords(taxon)
        render response as grails.converters.JSON
    }

    def getRecordById(String occurrenceId) {
        def response = recordService.getRecordById(occurrenceId)
        render response as grails.converters.JSON
    }

    def searchRecords(String searchterms) {
        def response = recordService.searchRecords(searchterms)
        render response as grails.converters.JSON
    }
}
