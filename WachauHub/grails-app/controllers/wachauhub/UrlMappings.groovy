package wachauhub

class UrlMappings {

    static mappings = {
        group "/data", {
            group "/records", {
                get "/all"(controller: 'record', action: 'getAllRecords')
                get "/taxon/$taxon"(controller: 'record', action: 'getTaxonRecords')
                get "/$occurrenceId"(controller: 'record', action: 'getRecordById')
                get "/search/$searchterms"(controller: 'record', action: 'searchRecords')
            }

            group "/taxon", {
                get "/groups"(controller: 'taxon', action: 'getTaxonGroups')
                get "/recordcount/$taxon"(controller: 'taxon', action: 'getRecordCountForTaxon')
            }
        }

        "/"(uri: '/index.html')
        "/home"(uri: '/index.html')
        "500"(view: '/error')
        "404"(view: '/notFound')
    }
}
