import { authMiddleware } from "@clerk/nextjs";
export default authMiddleware ({
    //only homepage is accessible to the public
    publicRoutes:['/']
})

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};