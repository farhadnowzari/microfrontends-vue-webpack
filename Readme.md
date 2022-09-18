# Microfrontends sample with Vue and Webpack

This is a example code for trying out the `Microfrontends` idea with using Vuejs and Webpack 5.

`Webpack 5` is used with `vue-cli-5`.

`vue-dashboard` project uses `vue-notifications` exposed components remotely. This means that if a logic changes inside `vue-notifications` project, we would NOT need redeploy the vue-dashboard and only deploy the `vue-notifications` project is enough.

Also since we are using `vuetify` in both projects, when we load the `NotificationsList` for example in `vue-dashboard` it can take the theme of the target project.


Here is the link to the video: https://youtu.be/G89XTjk_Fls


Have fun coding ♥