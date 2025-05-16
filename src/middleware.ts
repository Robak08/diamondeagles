import { defineMiddleware } from "astro:middleware";
export const onRequest = defineMiddleware((context, next) => {

    /* TODO
        get domain config files here
        set context based on domain
        use context in pages
    */
    switch (context.url.hostname) {
        case 'diamondeagles.vercel.app':
            context.locals.website.title = "Diamentowe Orzeły w juesej";
            context.locals.website.description = "Opis dla vercela"
            break;
    }

    // console.log('onRequest context', context.url, context.url.hostname)
    return next();
});