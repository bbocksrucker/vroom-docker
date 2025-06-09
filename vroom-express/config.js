module.exports = {
  cliArgs: {
    geometry: false,
    planmode: false,
    threads: 4,
    explore: 5,
    limit: '1mb',
    logdir: './logs',
    logsize: '100M',
    maxlocations: 1000,
    maxvehicles: 200,
    override: true,
    path: '',
    port: 3000,
    router: 'osrm',
    timeout: 300000,
    baseurl: '/'
  },
  routingServers: {
    osrm: {
      car: {
        host: 'osrm-backend-834z.onrender.com',
        port: 443
      }
    }
  },
  vroomErrorCodes: {
    ok: 0,
    internal: 1,
    input: 2,
    routing: 3,
    tooLarge: 4
  }
};
