import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GifsService {

  public gifList: Gif[] = []; // Aqui vamos almacenar los gif

  private _tagsHistory: string[] = []; // Propiedad creada para almacenar las busquedas del search
  private apiKey: string = 'dt3zyWHTsxR0y2iNpvDueATyFJZD7hBw';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) {}

  // Get creado para acceder sin modificar los valores de la propiedad original
  get tagsHistory() {
    return [...this._tagsHistory]; // spread operator creado para hacer copia del arreglo (propiedad) original
  }

  // Metodo creado para organizar y limitar las busquedas
  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag); // Aqui validamos si ya existe el tag a buscar
    }

    this._tagsHistory.unshift(tag); // Aqui insertamos una nueva busqueda
    this._tagsHistory = this._tagsHistory.splice(0, 10); // Aqui limitamos la vista a 10
  }

  // Funcion creada para recibir el valor del input y almacenarlo en la propíedad
  searchTag(tag: string): void {
    if (tag.length === 0) return;

    this.organizeHistory(tag);

    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit', '10')
    .set('q', tag)

    this.http
      .get<SearchResponse>(
        `${this.serviceUrl}/search`, { params: params }
      )
      .subscribe((resp) => {

        this.gifList = resp.data;
        console.log({ gifs: this.gifList });


      });

    // await fetch(
    //   'api.giphy.com/v1/gifs/search?api_key=dt3zyWHTsxR0y2iNpvDueATyFJZD7hBw&q=valorant&limit=10'
    // ).then( resp => resp.json()
    // ).then( data => console.log(data) );

    // this._tagsHistory.unshift( tag );
  }
}
