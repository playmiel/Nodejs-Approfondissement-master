module.exports = {
  apps: [
    {
      name: "app",
      script: "./www/app.js",
      instances: 3,  // 3 instances in parallel
      max_memory_restart: "200M",  // Max memory per instance
      error_file: "/logs/err.log",  // Error log file
      out_file: "/dev/null",  // Redirecting standard output to null as we only want error logs
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
// commande pour lancer avec pm2: pm2 start ecosystem.config.js --env production
// commande pour stopper: pm2 stop ecosystem.config.js --env production