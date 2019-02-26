// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
    production: false,
    silent: false,
    API_AUTH_ENDPOINT: 'http://localhost:8070/authentication/Application/public/api/v1/',
    API_MANAGER_ENDPOINT: 'http://localhost:8070/manager-api/Application/public/api/v1/',
};


