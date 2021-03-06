/*
 * Copyright (c) 2017. Dana-Farber Cancer Institute. All rights reserved.
 *
 *  Licensed under the GNU Affero General Public License, Version 3.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *
 * See the file LICENSE in the root of this repository.
 *
 * Contributing authors:
 * - berndvdveen
 *
 */

/**
 * Created by zachary on 9/21/16.
 * Service for the statistics page
 */
'use strict';

angular.module('matchminerUiApp')
	.factory('StatisticsService',
		['$resource', 'ENV', function($resource, ENV) {
		return $resource(ENV.api.endpoint + '/statistics');
	}]);
