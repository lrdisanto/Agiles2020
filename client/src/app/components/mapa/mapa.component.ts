import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {
   map: mapboxgl.Map;
   marker: mapboxgl.Marker;

  constructor() { }

  ngOnInit(): void {
    mapboxgl.accessToken = environment.mapboxKey;
    this.map = new mapboxgl.Map({
    container: 'mapa', // container id
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-58.3125516,-34.6980005], // starting position
    zoom: 14 // starting zoom
    });

    this.crearMarcador(-58.3125516,-34.6980005);
    
  }

  crearMarcador(lng:number, lat:number){
   this.marker = new mapboxgl.Marker({
   draggable: true
    })
   .setLngLat([lng, lat])
   .addTo(this.map);
   }

}
