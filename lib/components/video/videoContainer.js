'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactJplayerUtils = require('react-jplayer-utils');

var _video = require('./video');

var _video2 = _interopRequireDefault(_video);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.toJS().jPlayers;
  var id = _ref2.id;
  return {
    require: jPlayers[id].mediaSettings.video
  };
};

exports.default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps)(_video2.default);