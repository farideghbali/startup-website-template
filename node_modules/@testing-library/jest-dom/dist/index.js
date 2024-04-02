'use strict';

var matchers = require('./matchers-5ae87d41.js');
require('redent');
require('lodash/isEqual.js');
require('@adobe/css-tools');
require('dom-accessibility-api');
require('aria-query');
require('chalk');
require('lodash/isEqualWith.js');
require('lodash/uniq.js');
require('css.escape');

expect.extend(matchers.extensions);
