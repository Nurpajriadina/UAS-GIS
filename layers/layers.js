var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KomplekRia_1 = new ol.format.GeoJSON();
var features_KomplekRia_1 = format_KomplekRia_1.readFeatures(json_KomplekRia_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KomplekRia_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KomplekRia_1.addFeatures(features_KomplekRia_1);
var lyr_KomplekRia_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KomplekRia_1, 
                style: style_KomplekRia_1,
                popuplayertitle: "Komplek-Ria",
                interactive: true,
                title: '<img src="styles/legend/KomplekRia_1.png" /> Komplek-Ria'
            });
var format_Rumah_2 = new ol.format.GeoJSON();
var features_Rumah_2 = format_Rumah_2.readFeatures(json_Rumah_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rumah_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rumah_2.addFeatures(features_Rumah_2);
var lyr_Rumah_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rumah_2, 
                style: style_Rumah_2,
                popuplayertitle: "Rumah",
                interactive: true,
    title: 'Rumah<br />\
    <img src="styles/legend/Rumah_2_0.png" /> No.1<br />\
    <img src="styles/legend/Rumah_2_1.png" /> No.2<br />\
    <img src="styles/legend/Rumah_2_2.png" /> No.3<br />\
    <img src="styles/legend/Rumah_2_3.png" /> No.4<br />\
    <img src="styles/legend/Rumah_2_4.png" /> No.5<br />\
    <img src="styles/legend/Rumah_2_5.png" /> No.10<br />\
    <img src="styles/legend/Rumah_2_6.png" /> No.6<br />\
    <img src="styles/legend/Rumah_2_7.png" /> No.7<br />\
    <img src="styles/legend/Rumah_2_8.png" /> No.8<br />\
    <img src="styles/legend/Rumah_2_9.png" /> No.9<br />\
    <img src="styles/legend/Rumah_2_10.png" /> No.11<br />\
    <img src="styles/legend/Rumah_2_11.png" /> No.12<br />\
    <img src="styles/legend/Rumah_2_12.png" /> No.13<br />\
    <img src="styles/legend/Rumah_2_13.png" /> No.14<br />\
    <img src="styles/legend/Rumah_2_14.png" /> No.15<br />\
    <img src="styles/legend/Rumah_2_15.png" /> No.16<br />\
    <img src="styles/legend/Rumah_2_16.png" /> No.17<br />\
    <img src="styles/legend/Rumah_2_17.png" /> No.18<br />\
    <img src="styles/legend/Rumah_2_18.png" /> No.19<br />\
    <img src="styles/legend/Rumah_2_19.png" /> No.20<br />\
    <img src="styles/legend/Rumah_2_20.png" /> No.21<br />\
    <img src="styles/legend/Rumah_2_21.png" /> No.22<br />\
    <img src="styles/legend/Rumah_2_22.png" /> No.23<br />\
    <img src="styles/legend/Rumah_2_23.png" /> No.24<br />\
    <img src="styles/legend/Rumah_2_24.png" /> No.25<br />\
    <img src="styles/legend/Rumah_2_25.png" /> No.26<br />\
    <img src="styles/legend/Rumah_2_26.png" /> No.27<br />\
    <img src="styles/legend/Rumah_2_27.png" /> No.28<br />\
    <img src="styles/legend/Rumah_2_28.png" /> No.29<br />\
    <img src="styles/legend/Rumah_2_29.png" /> No.30<br />\
    <img src="styles/legend/Rumah_2_30.png" /> No.31<br />\
    <img src="styles/legend/Rumah_2_31.png" /> No.32<br />\
    <img src="styles/legend/Rumah_2_32.png" /> No.33<br />\
    <img src="styles/legend/Rumah_2_33.png" /> No.34<br />\
    <img src="styles/legend/Rumah_2_34.png" /> No.35<br />\
    <img src="styles/legend/Rumah_2_35.png" /> No.36<br />\
    <img src="styles/legend/Rumah_2_36.png" /> No.37<br />\
    <img src="styles/legend/Rumah_2_37.png" /> No.38<br />\
    <img src="styles/legend/Rumah_2_38.png" /> No.39<br />\
    <img src="styles/legend/Rumah_2_39.png" /> No.40<br />\
    <img src="styles/legend/Rumah_2_40.png" /> Pos Satpam<br />\
    <img src="styles/legend/Rumah_2_41.png" /> Klinik<br />'
        });
var format_Mesjid_3 = new ol.format.GeoJSON();
var features_Mesjid_3 = format_Mesjid_3.readFeatures(json_Mesjid_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mesjid_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mesjid_3.addFeatures(features_Mesjid_3);
var lyr_Mesjid_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mesjid_3, 
                style: style_Mesjid_3,
                popuplayertitle: "Mesjid",
                interactive: true,
    title: 'Mesjid<br />\
    <img src="styles/legend/Mesjid_3_0.png" /> Mesjid<br />\
    <img src="styles/legend/Mesjid_3_1.png" /> T. Wudhu<br />\
    <img src="styles/legend/Mesjid_3_2.png" /> Taman Mesjid<br />'
        });
var format_Taman_4 = new ol.format.GeoJSON();
var features_Taman_4 = format_Taman_4.readFeatures(json_Taman_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Taman_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Taman_4.addFeatures(features_Taman_4);
var lyr_Taman_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Taman_4, 
                style: style_Taman_4,
                popuplayertitle: "Taman",
                interactive: true,
    title: 'Taman<br />\
    <img src="styles/legend/Taman_4_0.png" /> <br />'
        });
var format_jalan_5 = new ol.format.GeoJSON();
var features_jalan_5 = format_jalan_5.readFeatures(json_jalan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_5.addFeatures(features_jalan_5);
var lyr_jalan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalan_5, 
                style: style_jalan_5,
                popuplayertitle: "jalan",
                interactive: true,
                title: '<img src="styles/legend/jalan_5.png" /> jalan'
            });
var format_Lapangan_6 = new ol.format.GeoJSON();
var features_Lapangan_6 = format_Lapangan_6.readFeatures(json_Lapangan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lapangan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lapangan_6.addFeatures(features_Lapangan_6);
var lyr_Lapangan_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lapangan_6, 
                style: style_Lapangan_6,
                popuplayertitle: "Lapangan",
                interactive: true,
                title: '<img src="styles/legend/Lapangan_6.png" /> Lapangan'
            });

lyr_OSMStandard_0.setVisible(true);lyr_KomplekRia_1.setVisible(true);lyr_Rumah_2.setVisible(true);lyr_Mesjid_3.setVisible(true);lyr_Taman_4.setVisible(true);lyr_jalan_5.setVisible(true);lyr_Lapangan_6.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_KomplekRia_1,lyr_Rumah_2,lyr_Mesjid_3,lyr_Taman_4,lyr_jalan_5,lyr_Lapangan_6];
lyr_KomplekRia_1.set('fieldAliases', {'id': 'id', });
lyr_Rumah_2.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Luas': 'Luas', });
lyr_Mesjid_3.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Luas': 'Luas', });
lyr_Taman_4.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'Luas': 'Luas', });
lyr_jalan_5.set('fieldAliases', {'id': 'id', });
lyr_Lapangan_6.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Luas': 'Luas', });
lyr_KomplekRia_1.set('fieldImages', {'id': 'TextEdit', });
lyr_Rumah_2.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Luas': '', });
lyr_Mesjid_3.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Luas': '', });
lyr_Taman_4.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'Luas': '', });
lyr_jalan_5.set('fieldImages', {'id': 'TextEdit', });
lyr_Lapangan_6.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Luas': '', });
lyr_KomplekRia_1.set('fieldLabels', {'id': 'hidden field', });
lyr_Rumah_2.set('fieldLabels', {'id': 'hidden field', 'Nama': 'inline label - always visible', 'Luas': 'inline label - always visible', });
lyr_Mesjid_3.set('fieldLabels', {'id': 'hidden field', 'Nama': 'inline label - always visible', 'Luas': 'inline label - always visible', });
lyr_Taman_4.set('fieldLabels', {'id': 'hidden field', 'nama': 'inline label - always visible', 'Luas': 'inline label - always visible', });
lyr_jalan_5.set('fieldLabels', {'id': 'hidden field', });
lyr_Lapangan_6.set('fieldLabels', {'id': 'hidden field', 'Nama': 'inline label - always visible', 'Luas': 'inline label - always visible', });
lyr_Lapangan_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});