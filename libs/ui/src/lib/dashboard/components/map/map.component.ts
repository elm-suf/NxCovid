import { Component, OnInit } from '@angular/core';
import { GeoJsonProperties } from 'geojson';
import { LngLat, MapLayerMouseEvent } from 'mapbox-gl';

@Component({
  selector: 'nx-covid-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  selectedElement: GeoJsonProperties;
  selectedLngLat: LngLat;
  cursorStyle: string;

  onClick(evt: MapLayerMouseEvent) {
    this.selectedLngLat = evt.lngLat;
    this.selectedElement = evt.features![0].properties;
  }
  constructor() {}

  ngOnInit(): void {}
}
