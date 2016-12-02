Package.describe({
  name: 'willyb321:youtube-iframe-player',
  summary: 'Control YouTube\'s embedded player using Meteor',
  version: '0.4.15',
  git: 'https://github.com/willyb321/meteor-youtube-iframe-player.git'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@0.9.3.1');
  api.use(['templating', 'reactive-var'], 'client');
  api.use('numtel:template-from-string@0.1.0', 'client');
  api.addFiles('yt.js', 'client');
  api.export('YTPlayer', 'client');
});
