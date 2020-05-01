package wachauhub

import grails.core.GrailsApplication
import grails.gorm.transactions.Transactional
import groovy.json.JsonSlurper

@Transactional
class RecordService {
    GrailsApplication grailsApplication

    WebRequestService webRequestService
    FilterService filterService
    TaxonService taxonService

    def getAllRecords() {
        def anzRecords = getAllRecordCount()
        String url = grailsApplication.config.getProperty('locations.records.all') + anzRecords
        def data = filterService.filterDataforWachau(webRequestService.getData(url))
        return data
    }

    def getAllRecordCount() {
        String url = grailsApplication.config.getProperty('locations.records.allRecordCount')
        def anzRecords = webRequestService.getData(url)[0]
        return anzRecords
    }

    def getTaxonRecords(String taxon) {
        def anzRecords = getAllRecordCount()
        String taxonGroups = taxonService.getTaxonGroups()
        if(taxonGroups.toLowerCase().contains(taxon)) {
            String url = grailsApplication.config.getProperty('locations.records.taxon') + taxon + "&pageSize=" + anzRecords
            def data = filterService.filterDataforWachau(webRequestService.getData(url))
            return data
        }
        else
            return new JsonSlurper().parseText('{ "message": "given parameter is not a taxon"}')
    }

    def getRecordById(String occurrenceId) {
        String url = grailsApplication.config.getProperty('locations.records.id') + occurrenceId
        def data = webRequestService.getData(url)
        return data
    }

    def searchRecords(String searchterms) {
        def anzRecords = getAllRecordCount()
        String url = grailsApplication.config.getProperty('locations.records.search') + searchterms + "&pageSize=" + anzRecords
        def data = filterService.filterDataforWachau(webRequestService.getData(url))
        return data
    }
}
