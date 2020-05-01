package wachauhub

import grails.gorm.transactions.Transactional
import grails.plugins.rest.client.RestBuilder
import grails.plugins.rest.client.RestResponse
import groovy.json.JsonSlurper
import org.grails.web.json.JSONElement

@Transactional
class WebRequestService {

    def getData(String url) {
        RestBuilder restBuilder = new RestBuilder()
        RestResponse response = restBuilder.get(url)
        return response.json
    }
}
