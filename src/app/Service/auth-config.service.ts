import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthConfigService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }



  public setType(type: string[]) {
      localStorage.setItem("type", JSON.stringify(type));

  }

  public setEmail(email: string) {
      localStorage.setItem("email", email);

  }

  public getEmail(): string | null {
    return localStorage.getItem("email");
  }
  public getType(): string[] {
    const rolesJson = localStorage.getItem("type");
    return rolesJson ? JSON.parse(rolesJson) : [];
  }

  public setToken(token: string) {
      localStorage.setItem("token", token);

  }
  public getToken(): string {
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem("token");
      if (token === null) {
        return "Token not found in localStorage";
      }
      return token;
    } else {
      return "localStorage is  available ";
    }
  }

  public clear() {
      const keys = Object.keys(localStorage);
      keys.forEach(key => {
        // Exclude certain items from being cleared
        if (key === 'roles') {
          // Clear the item
          localStorage.removeItem(key);
        }
        if (key === 'jwtToken') {
          // Clear the item
          localStorage.removeItem(key);
        }
        if (key === 'email') {
          // Clear the item
          localStorage.removeItem(key);
        }
      });


  }

  public isLoggedIn() {
    return  this.getType().length > 0 && this.getToken() !== null;
  }
  public isAuthenticated(): boolean {
    // Get the token from local storage or wherever you store it
    const token = localStorage.getItem('token');
    // Check if token exists and is not expired
    if (token) {
      const tokenPayload = this.decodeToken(token);
      if (tokenPayload) {
        // Get the expiration date from the token payload
        const expirationDate = new Date(tokenPayload.exp * 1000); // Convert to milliseconds
        // Check if the current date is before the expiration date
        return expirationDate > new Date();
      }
    }
    return false;
  }
  private decodeToken(token: string): any {
    try {
      // Split the token into its parts and decode the payload
      const tokenParts = token.split('.');
      const tokenPayload = JSON.parse(atob(tokenParts[1]));
      return tokenPayload;
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }
}
