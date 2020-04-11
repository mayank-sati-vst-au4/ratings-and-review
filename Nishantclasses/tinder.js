class MatchMaker {
    constructor(id) {
      this.userId = id;
      this.relatedUsers = [];
      this.superLikedUsers = [];
      this.likedUsers = [];
      this.ignoredUsers = [];
      // Get logged in user details
      let user = new User(id);
      this.user = user; // Class User {}
      this.latitude = user.latitude;
      this.longitude = user.longitude;
      this.premium = user.premium;
      this.maxRadius = user.maxRadius || 10; // KMs
    }
    searchUsers() {
      this.user.getInterests((error, interests, callback) => {
        if(error) {
          return callback(error);
        }
        // Below function will return users who are likely to have same interest of
        // the logged in user, and will be in 10
        this.user.getRelatedUsers(interests, this.latitude, this.longitude, this.maxRadius, (error, users) => {
          if(error) {
            return callback(error);
          }
          this.relatedUsers = users;
          return callback(null, this.relatedUsers);
        });
      });
    }
    superLike(interetedPersonUserId, callback) {
      // (5 - 4 = 1) > 0
      if((this.user.superLikeCount - this.user.superLikeUsed) > 0) {
        if(this.superLikedUsers.indexOf(interetedPersonUserId) > -1) {
          return callback("Error! You have already superliked this user");
        } else {
          this.user.sendSuperLikeNotification(interetedPersonUserId, this.userId, (error, response) => {
            if(error) {
              return callback(error);
            }
            if(response === true) {
              this.user.superLikeUsed += 1;
              this.superLikedUsers.push(interetedPersonUserId);
              return callback(null, true);
            } else {
              return callback(null, false);
            }
          });
        }
      } else {
        return callback("Error! Insufficient Super Likes");
      }
    }
    swipeRight(interetedPersonUserId, callback) {
      if(this.likedUsers.indexOf(interetedPersonUserId) > -1) {
        return callback("Error! You've already liked this user");
      } else {
        this.likedUsers.push(interetedPersonUserId);
        return callback(null, true);
      }
    }
    swipeLeft() {
    }
    block() {
    }
    unblock() {
    }
    report() {
    }
  }
  