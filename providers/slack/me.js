'use strict';
/* jshint camelcase: false */
/* jshint -W069 */

var me = {
  fetch: [
    {
      url: '/api/auth.test',
      export: {
        profile_id: function (result) {
          return result.user_id;
        }
      }
    },
    function (fetched_elts) {
      return '/api/users.info?user=' + fetched_elts.profile_id;
    }
  ],
  params: {},
  fields: {
    id: function (me) {
      if (me && me.user) {
        return me.user && me.user.id;
      }
    },
    avatar: function (me) {
      if (me && me.user) {
        return me.user.profile.image_48;
      }
    },
    name: function (me) {
      if (me && me.user) {
        return me.user.real_name;
      }
    },
    firstname: function (me) {
      if (me && me.user && me.user.profile) {
        return me.user.profile.first_name;
      }
    },
    lastname: function (me) {
      if (me && me.user && me.user.profile) {
        return me.user.profile.last_name;
      }
    },
    email: function (me) {
      if (me && me.user && me.user.profile) {
        return me.user.profile.email;
      }
    }
  }
};
module.exports = me;