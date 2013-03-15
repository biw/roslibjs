/**
 * @author Brandon Alexander - balexander@willowgarage.com
 */

/**
 * Message objects are used for publishing and subscribing to and from topics.
 * 
 * @constructor
 * @param values - object matching the fields defined in the .msg definition file.
 */
ROSLIB.Message = function(values) {
  var that = this;
  if (values) {
    Object.keys(values).forEach(function(name) {
      that[name] = values[name];
    });
  }
};
