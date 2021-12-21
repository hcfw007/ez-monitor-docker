'use strict';

module.exports = () => {
  const config = {};

  config.xtransitManager = process.env.MANAGER_ENDPOINT

  return config;
};