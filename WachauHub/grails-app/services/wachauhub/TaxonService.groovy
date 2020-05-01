package wachauhub

import grails.core.GrailsApplication
import grails.gorm.transactions.Transactional
import groovy.json.JsonSlurper

@Transactional
class TaxonService {
    GrailsApplication grailsApplication

    WebRequestService webRequestService
    RecordService recordService

    def getTaxonGroups() {
        String url = grailsApplication.config.getProperty('locations.taxon.groups')
        def response = webRequestService.getData(url)
        def data = new JsonSlurper().parseText('{ "speciesGroups": '+response.toString()+'}')
        return data
    }

    def getRecordCountForTaxon(String taxon) {
        def response = recordService.getTaxonRecords(taxon)
        if(response.toString().contains("error"))
            return response
        else if(response.occurrences == null)
            return 0
        else {
            def recordCount = response.occurrences.size()
            return recordCount
        }
    }
}
