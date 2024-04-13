import { auth } from "@/auth";

const publicRoutes = [
    '/',
];

const privateRoutes = [
    '/profile',
];

const staffRouter = [
    '/admin',
]

export default auth(async (req) => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;

    const session = await auth();
    let isStaff = false;

    if (session?.user && ['admin', 'moderator'].includes(session.user.role)) {
        isStaff = true;
    }

    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
    const isPrivateRoute = privateRoutes.includes(nextUrl.pathname);
    const isStaffRoute = staffRouter.includes(nextUrl.pathname);

    if (isPublicRoute) return null

    if (isPrivateRoute && !isLoggedIn)
        return Response.redirect(new URL('/api/auth/signin', nextUrl));

    if (isStaffRoute && !isStaff)
        return Response.redirect(new URL('/', nextUrl)); // /?error=access_denied
})

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}