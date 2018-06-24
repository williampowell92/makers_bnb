module.exports = {
  "extends": "airbnb-base",
  "plugins": [
    "cypress",
    "jasmine"
  ],
  "env": {
    "cypress/globals": true,
    "jasmine": true
  },
  "rules": {
    "comma-dangle": 0,
    "import/no-dynamic-require": 0
  }
};
