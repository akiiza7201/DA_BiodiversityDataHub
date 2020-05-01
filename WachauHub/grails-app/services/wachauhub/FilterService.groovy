package wachauhub

import grails.core.GrailsApplication
import grails.gorm.transactions.Transactional
import org.locationtech.jts.awt.PointShapeFactory
import org.locationtech.jts.io.WKTWriter

import javax.annotation.PostConstruct

import org.locationtech.jts.geom.*

@Transactional
class FilterService {
    GrailsApplication grailsApplication

    GeometryFactory geometryFactory
    Polygon wachauPol

    @PostConstruct
    def init() {
        geometryFactory = new GeometryFactory()
        loadWachauPolygon()
    }

    private void loadWachauPolygon() {
        def kml = new XmlSlurper().parse(grailsApplication.config.getProperty('locations.wachaupolygon'))
        String strCoordinates = kml.Document.Folder.Placemark.MultiGeometry.Polygon.outerBoundaryIs.LinearRing.coordinates.text()
        String[] strArr = strCoordinates.split(' ')

        Coordinate[] coordinates = new Coordinate[strArr.length]
        for(int i=0; i < strArr.length; i++)
        {
            String[] coordinate = strArr[i].split(',')
            def lon = Double.parseDouble(coordinate[0])
            def lat = Double.parseDouble(coordinate[1])
            Coordinate c = new Coordinate(lat, lon)
            coordinates[i] = c
        }

        wachauPol=geometryFactory.createPolygon(coordinates)
    }

    def filterDataforWachau(def data) {
        def notInWachau = new ArrayList<>()

        if(wachauPol == null)
            loadWachauPolygon()
        for(def i=0; i < data.occurrences.size(); i++) {
            if(data.occurrences[i].decimalLatitude != null && data.occurrences[i].decimalLongitude != null) {
                Coordinate c = new Coordinate(data.occurrences[i].decimalLatitude, data.occurrences[i].decimalLongitude)
                Point p = geometryFactory.createPoint(c)

                if (!(wachauPol.contains(p))) {
                    notInWachau.add(data.occurrences[i])
                }
            }
        }

        for(def i=0; i<notInWachau.size(); i++) {
            data.occurrences.remove(notInWachau[i])
        }
        data.totalRecords -= notInWachau.size()
        return data
    }
}
