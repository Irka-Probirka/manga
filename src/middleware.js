import { auth } from "@/auth";

const publicRoutes = [
    '/',
];

const privateRoutes = [
    '/profile',
];

export default auth((req) => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;

    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
    const isPrivateRoute = privateRoutes.includes(nextUrl.pathname);

    if (isPublicRoute) return null

    if (isPrivateRoute && !isLoggedIn) return Response.redirect(new URL('/api/auth/signin', nextUrl))
})

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}