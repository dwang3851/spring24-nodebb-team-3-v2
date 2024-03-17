// @ts-nocheck
'use strict';

function stryNS_9fa48() {
  var g = typeof globalThis === 'object' && globalThis && globalThis.Math === Math && globalThis || new Function("return this")();
  var ns = g.__stryker__ || (g.__stryker__ = {});
  if (ns.activeMutant === undefined && g.process && g.process.env && g.process.env.__STRYKER_ACTIVE_MUTANT__) {
    ns.activeMutant = g.process.env.__STRYKER_ACTIVE_MUTANT__;
  }
  function retrieveNS() {
    return ns;
  }
  stryNS_9fa48 = retrieveNS;
  return retrieveNS();
}
stryNS_9fa48();
function stryCov_9fa48() {
  var ns = stryNS_9fa48();
  var cov = ns.mutantCoverage || (ns.mutantCoverage = {
    static: {},
    perTest: {}
  });
  function cover() {
    var c = cov.static;
    if (ns.currentTestId) {
      c = cov.perTest[ns.currentTestId] = cov.perTest[ns.currentTestId] || {};
    }
    var a = arguments;
    for (var i = 0; i < a.length; i++) {
      c[a[i]] = (c[a[i]] || 0) + 1;
    }
  }
  stryCov_9fa48 = cover;
  cover.apply(null, arguments);
}
function stryMutAct_9fa48(id) {
  var ns = stryNS_9fa48();
  function isActive(id) {
    if (ns.activeMutant === id) {
      if (ns.hitCount !== void 0 && ++ns.hitCount > ns.hitLimit) {
        throw new Error('Stryker: Hit count limit reached (' + ns.hitCount + ')');
      }
      return true;
    }
    return false;
  }
  stryMutAct_9fa48 = isActive;
  return isActive(id);
}
const db = require('../database');
module.exports = function (Topics) {
  if (stryMutAct_9fa48("3876")) {
    {}
  } else {
    stryCov_9fa48("3876");
    Topics.isOwner = async function (tid, uid) {
      if (stryMutAct_9fa48("3877")) {
        {}
      } else {
        stryCov_9fa48("3877");
        uid = parseInt(uid, 10);
        if (stryMutAct_9fa48("3881") ? uid > 0 : stryMutAct_9fa48("3880") ? uid < 0 : stryMutAct_9fa48("3879") ? false : stryMutAct_9fa48("3878") ? true : (stryCov_9fa48("3878", "3879", "3880", "3881"), uid <= 0)) {
          if (stryMutAct_9fa48("3882")) {
            {}
          } else {
            stryCov_9fa48("3882");
            return stryMutAct_9fa48("3883") ? true : (stryCov_9fa48("3883"), false);
          }
        }
        const author = await Topics.getTopicField(tid, stryMutAct_9fa48("3884") ? "" : (stryCov_9fa48("3884"), 'uid'));
        return stryMutAct_9fa48("3887") ? author !== uid : stryMutAct_9fa48("3886") ? false : stryMutAct_9fa48("3885") ? true : (stryCov_9fa48("3885", "3886", "3887"), author === uid);
      }
    };
    Topics.getUids = async function (tid) {
      if (stryMutAct_9fa48("3888")) {
        {}
      } else {
        stryCov_9fa48("3888");
        return await db.getSortedSetRevRangeByScore(stryMutAct_9fa48("3889") ? `` : (stryCov_9fa48("3889"), `tid:${tid}:posters`), 0, stryMutAct_9fa48("3890") ? +1 : (stryCov_9fa48("3890"), -1), stryMutAct_9fa48("3891") ? "" : (stryCov_9fa48("3891"), '+inf'), 1);
      }
    };
  }
};