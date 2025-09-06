export type AUTH_USER = {
    userId: string,
    role: "admin" | "faculty" | "student",
    iat: number,
    exp: number
}