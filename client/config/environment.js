/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    contentSecurityPolicy: {
    'default-src': "'none'",
    'script-src': "'self' ",
    'font-src': "'self'",
    'connect-src': "'self' *",
    'img-src': "'self' data: http://localhost:1337 ",
    'style-src': "'self' 'unsafe-inline' *",
    'media-src': "'self'",
    'frame-src': "'self' "
    },
    modulePrefix: 'client',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };
  ENV['ember-simple-auth'] = {
    authorizer: 'authorizer:token',
    crossOriginWhitelist: ['http://localhost:1337'],
    authenticationRoute: 'login',
    routeAfterAuthentication:'general.view_inventory',
    routeIfAlreadyAuthenticated:'general.view_inventory'
  };
  ENV['ember-simple-auth-token'] = {
    serverTokenEndpoint: 'http://localhost:1337/api/v1/auths/login',
    identificationField: 'username',
    passwordField: 'password',
    tokenPropertyName: 'access_token',
    tokenExpireName: 'expires',
  };
  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
