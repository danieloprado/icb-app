export class AuthService {
  setToken(token: string): void {
    localStorage.setItem("token", token);
  }

  getToken(): string {
    return localStorage.getItem("token");
  }

  hasToken(): boolean {
    return !!this.getToken();
  }
}
