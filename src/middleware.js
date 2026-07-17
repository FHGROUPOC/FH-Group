import { withAuth } from "next-auth/middleware"

export default withAuth(
    // `withAuth` augments your `Request` with the token's token.
    function middleware(req) {
        console.log(req.nextauth.token)
    }, {
        callbacks: {
            authorized: ({ token }) => token && token.role === "Admin" || token && token.role ==='doctoradmin'
        },
    },
)

export const config = { matcher: ["/dash/:path*"] }