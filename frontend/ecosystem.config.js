module.exports = {
  apps : [{
    name: 'frontend',
    script: './server/index.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    autorestart: true,
    watch: true,
    watch_delay: 1000,
    ignore_watch: ["README.md"]
  }],
};
