var wms_layers = [];

var format_ADM_Region_0 = new ol.format.GeoJSON();
var features_ADM_Region_0 = format_ADM_Region_0.readFeatures(json_ADM_Region_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADM_Region_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADM_Region_0.addFeatures(features_ADM_Region_0);
var lyr_ADM_Region_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ADM_Region_0, 
                style: style_ADM_Region_0,
                interactive: true,
                title: '<img src="styles/legend/ADM_Region_0.png" /> ADM_Region'
            });
var format_RRO_Route_1 = new ol.format.GeoJSON();
var features_RRO_Route_1 = format_RRO_Route_1.readFeatures(json_RRO_Route_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RRO_Route_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RRO_Route_1.addFeatures(features_RRO_Route_1);
var lyr_RRO_Route_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RRO_Route_1, 
                style: style_RRO_Route_1,
                interactive: true,
    title: 'RRO_Route<br />\
    <img src="styles/legend/RRO_Route_1_0.png" /> DEPARTEMENTALE<br />\
    <img src="styles/legend/RRO_Route_1_1.png" /> NATIONALE<br />\
    <img src="styles/legend/RRO_Route_1_2.png" /> REGIONALE<br />'
        });
var format_Magasin_produits_agricoles_2 = new ol.format.GeoJSON();
var features_Magasin_produits_agricoles_2 = format_Magasin_produits_agricoles_2.readFeatures(json_Magasin_produits_agricoles_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Magasin_produits_agricoles_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Magasin_produits_agricoles_2.addFeatures(features_Magasin_produits_agricoles_2);
var lyr_Magasin_produits_agricoles_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Magasin_produits_agricoles_2, 
                style: style_Magasin_produits_agricoles_2,
                interactive: true,
    title: 'Magasin_produits_agricoles<br />\
    <img src="styles/legend/Magasin_produits_agricoles_2_0.png" /> Magasin de conservation d?oignon<br />\
    <img src="styles/legend/Magasin_produits_agricoles_2_1.png" /> Magasin de stockage<br />\
    <img src="styles/legend/Magasin_produits_agricoles_2_2.png" /> Magasin de Warrantage<br />'
        });
var group_group1 = new ol.layer.Group({
                                layers: [lyr_ADM_Region_0,lyr_RRO_Route_1,lyr_Magasin_produits_agricoles_2,],
                                title: "group1"});

lyr_ADM_Region_0.setVisible(true);lyr_RRO_Route_1.setVisible(true);lyr_Magasin_produits_agricoles_2.setVisible(true);
var layersList = [group_group1];
lyr_ADM_Region_0.set('fieldAliases', {'Nom': 'Nom', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_RRO_Route_1.set('fieldAliases', {'Nom': 'Nom', 'Cl_admin': 'Cl_admin', 'Revetement': 'Revetement', 'Niveau': 'Niveau', 'Praticab': 'Praticab', 'Nb_chausse': 'Nb_chausse', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Magasin_produits_agricoles_2.set('fieldAliases', {'REG': 'REG', 'PROV': 'PROV', 'COM': 'COM', 'CVIL': 'CVIL', 'LOC': 'LOC', 'TYPE DE MAGASIN': 'TYPE DE MAGASIN', 'CAPACITE': 'CAPACITE', });
lyr_ADM_Region_0.set('fieldImages', {'Nom': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_RRO_Route_1.set('fieldImages', {'Nom': 'TextEdit', 'Cl_admin': 'TextEdit', 'Revetement': 'Range', 'Niveau': 'Range', 'Praticab': 'TextEdit', 'Nb_chausse': 'Range', 'SHAPE_Leng': 'TextEdit', });
lyr_Magasin_produits_agricoles_2.set('fieldImages', {'REG': 'TextEdit', 'PROV': 'TextEdit', 'COM': 'TextEdit', 'CVIL': 'TextEdit', 'LOC': 'TextEdit', 'TYPE DE MAGASIN': 'TextEdit', 'CAPACITE': 'Range', });
lyr_ADM_Region_0.set('fieldLabels', {});
lyr_RRO_Route_1.set('fieldLabels', {});
lyr_Magasin_produits_agricoles_2.set('fieldLabels', {});
lyr_Magasin_produits_agricoles_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});