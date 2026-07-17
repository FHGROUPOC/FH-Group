import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),

        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                email: {
                    label: "Email",
                    type: "text",
                    placeholder: "jsmith@gmail.com",
                },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                // Add logic here to look up the user from the credentials supplied
                const user = {
                    id: "1",
                    name: "FH ADMIN",
                    role: "Admin",
                    email: `${process.env.ADMIN_EMAIL}`,
                };
               const doctoruser =   {
                    id: "2",
                    name: "Dr Tauqeer Admin",
                    role: "doctoradmin",
                    email: `${process.env.DOCTOR_ADMIN_EMAIL}`,
                }

                if (
                    credentials.email.toLowerCase() === user.email.toLowerCase() &&
                    credentials.password === `${process.env.ADMIN_PASSWORD}`
                ) {
                    // Any object returned will be saved in `user` property of the JWT
                    console.log(user);
                    return user;
                } 
                else if (
                    credentials.email.toLowerCase() === doctoruser.email.toLowerCase() &&
                    credentials.password === `${process.env.DOCTOR_ADMIN_PASSWORD}`
                ) {
                    // Any object returned will be saved in `doctoruser` property of the JWT
                    console.log(doctoruser);
                    return doctoruser;
                } 
                else {
                    // If you return null then an error will be displayed advising the user to check their details.
                    return null;

                    // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                }
            },
        }),
        // ...add more providers here
    ],

    callbacks: {
        async jwt({ token, user }) {
            // Persist the OAuth access_token and or the user id to the token right after signin
            if (user) {
                token.role = user.role;
                token.name = user.name;
                token.email = user.email;
            }
            return token;
        },

        async session({ session, token, user }) {
            // Send properties to the client, like an access_token and user id from a provider.
            session.user.role = token.role;
            session.user.name = token.name;
            session.user.email = token.email;

            return session;
        },
    },
    pages: {
        signIn: "/login",
    },
});

export { handler as GET, handler as POST };