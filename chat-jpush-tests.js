// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by chat-jpush.js.
import { name as packageName } from "meteor/yeyongping:chat-jpush";

// Write your tests here!
// Here is an example.
Tinytest.add('chat-jpush - example', function (test) {
  test.equal(packageName, "chat-jpush");
});
