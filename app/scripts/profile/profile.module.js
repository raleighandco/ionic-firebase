angular.module('Profile', ['firebase']);

angular.module('Profile')
  .factory("Profile", ["$firebaseObject",
    function($firebaseObject) {
      return function(username) {
      //Create a reference to the Firebase where we will store our data
      var RoomId = Math.round(Math.random() * 100000000);
      var ref = new Firebase('https://blank.firebaseio.com/room/' + RoomId);
      var profileRef = ref.child(username);

      //Return as a synchronized object
      return $firebaseObject(profileRef);
      }
    }
  ]);
