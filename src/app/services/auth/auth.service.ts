import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users: {
    id: number,
    name: string,
    email: string,
    password: string,
  }[] = [{
    id: 1,
    name: 'Guillermina Sanchez',
    email: 'guisanchez@correo.com',
    password: 'uveg'
  },
  {
    id: 2,
    name: 'Daniel Hernandez',
    email: 'daniel@correo.com',
    password: '20025946'
  }
  ]

  constructor() { }

  login(email: string, password: string): boolean {
    const userFound = this.users.find((user) => user.email === email && user.password === password);

    if (userFound) {
      localStorage.setItem('isLogged', JSON.stringify(userFound));
      return true;
    } else {
      localStorage.clear();
      return false;
    }
  }

  logout() {
    localStorage.clear();
  }

  signIn(name: string, email: string, password:string){
    const lastUser = this.users[this.users.length - 1];
    const newUser = {name, email, password, id: lastUser.id + 1};
    this.users = [
      ...this.users,
      newUser,
    ];
    localStorage.setItem('isLogged', JSON.stringify(newUser));
  }

}
