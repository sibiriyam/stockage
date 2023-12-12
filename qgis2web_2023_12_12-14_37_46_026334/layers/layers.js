var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_regions_be_1 = new ol.format.GeoJSON();
var features_regions_be_1 = format_regions_be_1.readFeatures(json_regions_be_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_regions_be_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_regions_be_1.addFeatures(features_regions_be_1);
var lyr_regions_be_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_regions_be_1, 
                style: style_regions_be_1,
                interactive: true,
    title: 'regions_be<br />\
    <img src="styles/legend/regions_be_1_0.png" /> Bruxelles-Capitale<br />\
    <img src="styles/legend/regions_be_1_1.png" /> Flandre<br />\
    <img src="styles/legend/regions_be_1_2.png" /> Wallonie<br />'
        });
var lyr_elevation_srtm_bxl_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "elevation_srtm_bxl",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/elevation_srtm_bxl_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [472568.085407, 6579782.970500, 498931.629284, 6605952.305137]
                            })
                        });
var lyr_Espaces_verts_31370_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Espaces_verts_31370",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Espaces_verts_31370_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [472386.162570, 6579593.511871, 498757.651779, 6606068.675180]
                            })
                        });
var format_pharmacies_4 = new ol.format.GeoJSON();
var features_pharmacies_4 = format_pharmacies_4.readFeatures(json_pharmacies_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pharmacies_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pharmacies_4.addFeatures(features_pharmacies_4);
var lyr_pharmacies_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pharmacies_4, 
                style: style_pharmacies_4,
                interactive: true,
                title: '<img src="styles/legend/pharmacies_4.png" /> pharmacies'
            });
var lyr_Massedeaudesurface_5 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.environnement.brussels/be_wms?VERSION%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "bruenvi_water_bodies_surface",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Masse d'eau de surface",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Massedeaudesurface_5, 0]);
var format_Buildings_6 = new ol.format.GeoJSON();
var jsonSource_Buildings_6 = new ol.source.Vector({
    attributions: ' ',
    format: format_Buildings_6
});var lyr_Buildings_6 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_Buildings_6, 
    style: style_Buildings_6,
    interactive: true,
    title: "Buildings"
});

function getBuildings_6Json(geojson) {
    var features_Buildings_6 = format_Buildings_6.readFeatures(geojson);
    jsonSource_Buildings_6.addFeatures(features_Buildings_6);
}

lyr_OSMStandard_0.setVisible(true);lyr_regions_be_1.setVisible(true);lyr_elevation_srtm_bxl_2.setVisible(true);lyr_Espaces_verts_31370_3.setVisible(true);lyr_pharmacies_4.setVisible(true);lyr_Massedeaudesurface_5.setVisible(true);lyr_Buildings_6.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_regions_be_1,lyr_elevation_srtm_bxl_2,lyr_Espaces_verts_31370_3,lyr_pharmacies_4,lyr_Massedeaudesurface_5,lyr_Buildings_6];
lyr_regions_be_1.set('fieldAliases', {'fid': 'fid', 'REGION_NAM': 'REGION_NAM', });
lyr_pharmacies_4.set('fieldAliases', {'POI_TXT_DU': 'POI_TXT_DU', 'POI_TXT_FR': 'POI_TXT_FR', 'POI_PZ_ID': 'POI_PZ_ID', 'POI_T_TYPE': 'POI_T_TYPE', 'PN_NAME_DU': 'PN_NAME_DU', 'PN_NAME_FR': 'PN_NAME_FR', 'MU_NAME_DU': 'MU_NAME_DU', 'MU_NAME_FR': 'MU_NAME_FR', });
lyr_Buildings_6.set('fieldAliases', {'BU_INSPIRE_ID': 'BU_INSPIRE_ID', 'BU_CAPAKEY': 'BU_CAPAKEY', 'BU_STATUS': 'BU_STATUS', 'BU_CATEGORY': 'BU_CATEGORY', 'BU_ID': 'BU_ID', });
lyr_regions_be_1.set('fieldImages', {'fid': 'TextEdit', 'REGION_NAM': 'TextEdit', });
lyr_pharmacies_4.set('fieldImages', {'POI_TXT_DU': 'TextEdit', 'POI_TXT_FR': 'TextEdit', 'POI_PZ_ID': 'TextEdit', 'POI_T_TYPE': 'TextEdit', 'PN_NAME_DU': 'TextEdit', 'PN_NAME_FR': 'TextEdit', 'MU_NAME_DU': 'TextEdit', 'MU_NAME_FR': 'TextEdit', });
lyr_Buildings_6.set('fieldImages', {'BU_INSPIRE_ID': '', 'BU_CAPAKEY': '', 'BU_STATUS': '', 'BU_CATEGORY': '', 'BU_ID': '', });
lyr_regions_be_1.set('fieldLabels', {'fid': 'no label', 'REGION_NAM': 'no label', });
lyr_pharmacies_4.set('fieldLabels', {'POI_TXT_DU': 'no label', 'POI_TXT_FR': 'no label', 'POI_PZ_ID': 'no label', 'POI_T_TYPE': 'header label', 'PN_NAME_DU': 'header label', 'PN_NAME_FR': 'header label', 'MU_NAME_DU': 'header label', 'MU_NAME_FR': 'header label', });
lyr_Buildings_6.set('fieldLabels', {'BU_INSPIRE_ID': 'no label', 'BU_CAPAKEY': 'no label', 'BU_STATUS': 'no label', 'BU_CATEGORY': 'no label', 'BU_ID': 'no label', });
lyr_Buildings_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});