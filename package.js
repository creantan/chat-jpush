const JPushSDK = 'jpush-sdk'
Package.describe({
  name: 'yeyongping:chat-jpush',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'rocketchat jpush package',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/D8Ge/chat-jpush.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.6.1');
  api.use('ecmascript');
  api.mainModule('chat-jpush.js', 'server');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('yeyongping:chat-jpush');
  api.mainModule('chat-jpush-tests.js');
});

Npm.depends({
  [JPushSDK]: '3.4.5'
})