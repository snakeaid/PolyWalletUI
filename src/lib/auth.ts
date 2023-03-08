import axios from 'axios';

export class Auth {
  private static authBaseUrl = process.env.API_URL;

  static async login(credentials: Record<"username" | "password", string> | undefined) {
    const url = this.authBaseUrl + "/auth/login";
    console.log(url);
    const result = await axios.post(url, {
      username: credentials?.username,
      password: credentials?.password,
      headers: { "Content-Type": "application/json" }
    });
    const user = await result.data;

    console.log(user);

    if (result.status === 200 && user) {
      return user;
    }

    return null;
  }
}