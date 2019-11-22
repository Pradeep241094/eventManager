const  DEVCONFIGURATION = require('./configdev.json')
const PRODCONFIGURATION = require('./configprod.json')

export default key => {
  
  const environment = "production"

  switch (environment) {
    case "production":
      return PRODCONFIGURATION[key];
    default:
      return DEVCONFIGURATION[key];
  }
};
