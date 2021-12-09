import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user = { prenom: "Jean", isConnected: true };

  constructor() {
    //Enregistrer une variable user dans le local storage
    localStorage.setItem("user", JSON.stringify(this.user));

    //Récupérer la variable 
    let dataRecup = localStorage.getItem("user")!;
    let objetUser = JSON.parse(dataRecup);
    console.log(objetUser.prenom);
  }
}
