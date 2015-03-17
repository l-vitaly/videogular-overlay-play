/**
 * @license Videogular v1.0.0
 * License: MIT
 */

/**
 * @ngdoc directive
 * @name com.2fdevs.videogular.plugins.overlayplay:vgOverlayPlay
 * @restrict E
 * @description
 * Shows a big play button centered when player is paused or stopped.
 *
 * ```html
 * <videogular vg-theme="config.theme.url" vg-autoplay="config.autoPlay">
 *    <vg-video vg-src="sources"></vg-video>
 *
 *    <vg-overlay-play></vg-overlay-play>
 * </videogular>
 * ```
 *
 */
(function () {
  "use strict";

  angular.module('dreamteam.videogular.plugins.overlayplay', [])
    .directive('vgOverlayPlay', VgOverlayPlay)
  ;

  VgOverlayPlay.$inject = ['VG_STATES'];

  function VgOverlayPlay(VG_STATES) {

    return {
      restrict: 'E',
      require: '^videogular',
      scope: true,
      template: '<div class="overlayPlayContainer" ng-click="onClickOverlayPlay()">' +
      '<div class="iconButton" ng-class="overlayPlayIcon"></div>' +
      '</div>',
      link: linkFunc
    };

    function linkFunc(scope, elem, attr, controllerAPI) {

      function onComplete(target, params) {
        scope.overlayPlayIcon = {play: true};
      }

      function onPlay(target, params) {
        scope.overlayPlayIcon = {};
      }

      function onChangeState(newState) {
        switch (newState) {
          case VG_STATES.PLAY:
            scope.overlayPlayIcon = {};
            break;

          case VG_STATES.PAUSE:
            scope.overlayPlayIcon = {play: true};
            break;

          case VG_STATES.STOP:
            scope.overlayPlayIcon = {play: true};
            break;
        }
      }

      scope.onClickOverlayPlay = function onClickOverlayPlay(event) {
        controllerAPI.playPause();
      };

      scope.overlayPlayIcon = {play: true};

      scope.$watch(
        function () {
          return controllerAPI.currentState;
        },
        function (newVal, oldVal) {
          if (newVal != oldVal) {
            onChangeState(newVal);
          }
        }
      );
    }
  }
});


