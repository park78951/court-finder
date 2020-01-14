module.exports = {
  apps : [{
    name: 'www',
    script: './bin/www',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    autorestart: true,
    watch: true,
    watch_delay: 1000,
    ignore_watch: ["README.md"]
  }],
};
