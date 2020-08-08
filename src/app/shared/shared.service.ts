import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private http: HttpClient) {}

  getSpaceXData(launchSucces?, landSuccess?, year?) {
    let params = new HttpParams();
    if (year != null && year != undefined)
      params = params.append('launch_year', year);
    if (landSuccess != null && landSuccess != undefined)
      params = params.append('land_success', landSuccess);
    if (launchSucces != null && launchSucces != undefined)
      params = params.append('launch_succes', launchSucces);

    return this.http.get('https://api.spacexdata.com/v3/launches?limit=100', {
      params: params,
    });
  }
}
