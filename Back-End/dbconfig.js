module.exports = {
    HOST: "<Include Instance IP Here from GCP SQL Dashboard>",
    USER: "root",  //Change user if you need by default root user
    PASSWORD: "<Password>",  // Enter Password you entered while creating instance
    DB: "<DBName>",  //Database name you want to connect with
    // Leave As it is or configure according to your need
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };