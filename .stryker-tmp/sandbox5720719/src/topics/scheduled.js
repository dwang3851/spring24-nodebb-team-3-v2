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
const _ = require('lodash');
const winston = require('winston');
const {
  CronJob
} = require('cron');
const db = require('../database');
const posts = require('../posts');
const socketHelpers = require('../socket.io/helpers');
const topics = require('./index');
const user = require('../user');
const Scheduled = module.exports;
Scheduled.startJobs = function () {
  if (stryMutAct_9fa48("1851")) {
    {}
  } else {
    stryCov_9fa48("1851");
    winston.verbose(stryMutAct_9fa48("1852") ? "" : (stryCov_9fa48("1852"), '[scheduled topics] Starting jobs.'));
    new CronJob(stryMutAct_9fa48("1853") ? "" : (stryCov_9fa48("1853"), '*/1 * * * *'), Scheduled.handleExpired, null, stryMutAct_9fa48("1854") ? false : (stryCov_9fa48("1854"), true));
  }
};
Scheduled.handleExpired = async function () {
  if (stryMutAct_9fa48("1855")) {
    {}
  } else {
    stryCov_9fa48("1855");
    const now = Date.now();
    const tids = await db.getSortedSetRangeByScore(stryMutAct_9fa48("1856") ? "" : (stryCov_9fa48("1856"), 'topics:scheduled'), 0, stryMutAct_9fa48("1857") ? +1 : (stryCov_9fa48("1857"), -1), stryMutAct_9fa48("1858") ? "" : (stryCov_9fa48("1858"), '-inf'), now);
    if (stryMutAct_9fa48("1861") ? false : stryMutAct_9fa48("1860") ? true : stryMutAct_9fa48("1859") ? tids.length : (stryCov_9fa48("1859", "1860", "1861"), !tids.length)) {
      if (stryMutAct_9fa48("1862")) {
        {}
      } else {
        stryCov_9fa48("1862");
        return;
      }
    }
    let topicsData = await topics.getTopicsData(tids);
    // Filter deleted
    topicsData = stryMutAct_9fa48("1863") ? topicsData : (stryCov_9fa48("1863"), topicsData.filter(stryMutAct_9fa48("1864") ? () => undefined : (stryCov_9fa48("1864"), topicData => Boolean(topicData))));
    const uids = stryMutAct_9fa48("1865") ? _.uniq(topicsData.map(topicData => topicData.uid)) : (stryCov_9fa48("1865"), _.uniq(topicsData.map(stryMutAct_9fa48("1866") ? () => undefined : (stryCov_9fa48("1866"), topicData => topicData.uid))).filter(stryMutAct_9fa48("1867") ? () => undefined : (stryCov_9fa48("1867"), uid => uid))); // Filter guests topics

    // Restore first to be not filtered for being deleted
    // Restoring handles "updateRecentTid"
    await Promise.all((stryMutAct_9fa48("1868") ? ["Stryker was here"] : (stryCov_9fa48("1868"), [])).concat(topicsData.map(stryMutAct_9fa48("1869") ? () => undefined : (stryCov_9fa48("1869"), topicData => topics.restore(topicData.tid))), topicsData.map(stryMutAct_9fa48("1870") ? () => undefined : (stryCov_9fa48("1870"), topicData => topics.updateLastPostTimeFromLastPid(topicData.tid)))));
    await Promise.all((stryMutAct_9fa48("1871") ? ["Stryker was here"] : (stryCov_9fa48("1871"), [])).concat(sendNotifications(uids, topicsData), updateUserLastposttimes(uids, topicsData), ...topicsData.map(stryMutAct_9fa48("1872") ? () => undefined : (stryCov_9fa48("1872"), topicData => unpin(topicData.tid, topicData))), db.sortedSetsRemoveRangeByScore(stryMutAct_9fa48("1873") ? [] : (stryCov_9fa48("1873"), [stryMutAct_9fa48("1874") ? `` : (stryCov_9fa48("1874"), `topics:scheduled`)]), stryMutAct_9fa48("1875") ? "" : (stryCov_9fa48("1875"), '-inf'), now)));
  }
};

// topics/tools.js#pin/unpin would block non-admins/mods, thus the local versions
Scheduled.pin = async function (tid, topicData) {
  if (stryMutAct_9fa48("1876")) {
    {}
  } else {
    stryCov_9fa48("1876");
    return Promise.all(stryMutAct_9fa48("1877") ? [] : (stryCov_9fa48("1877"), [topics.setTopicField(tid, stryMutAct_9fa48("1878") ? "" : (stryCov_9fa48("1878"), 'pinned'), 1), db.sortedSetAdd(stryMutAct_9fa48("1879") ? `` : (stryCov_9fa48("1879"), `cid:${topicData.cid}:tids:pinned`), Date.now(), tid), db.sortedSetsRemove(stryMutAct_9fa48("1880") ? [] : (stryCov_9fa48("1880"), [stryMutAct_9fa48("1881") ? `` : (stryCov_9fa48("1881"), `cid:${topicData.cid}:tids`), stryMutAct_9fa48("1882") ? `` : (stryCov_9fa48("1882"), `cid:${topicData.cid}:tids:posts`), stryMutAct_9fa48("1883") ? `` : (stryCov_9fa48("1883"), `cid:${topicData.cid}:tids:votes`), stryMutAct_9fa48("1884") ? `` : (stryCov_9fa48("1884"), `cid:${topicData.cid}:tids:views`)]), tid)]));
  }
};
Scheduled.reschedule = async function ({
  cid,
  tid,
  timestamp,
  uid
}) {
  if (stryMutAct_9fa48("1885")) {
    {}
  } else {
    stryCov_9fa48("1885");
    await Promise.all(stryMutAct_9fa48("1886") ? [] : (stryCov_9fa48("1886"), [db.sortedSetsAdd(stryMutAct_9fa48("1887") ? [] : (stryCov_9fa48("1887"), [stryMutAct_9fa48("1888") ? "" : (stryCov_9fa48("1888"), 'topics:scheduled'), stryMutAct_9fa48("1889") ? `` : (stryCov_9fa48("1889"), `uid:${uid}:topics`), stryMutAct_9fa48("1890") ? "" : (stryCov_9fa48("1890"), 'topics:tid'), stryMutAct_9fa48("1891") ? `` : (stryCov_9fa48("1891"), `cid:${cid}:uid:${uid}:tids`)]), timestamp, tid), shiftPostTimes(tid, timestamp)]));
    return topics.updateLastPostTimeFromLastPid(tid);
  }
};
function unpin(tid, topicData) {
  if (stryMutAct_9fa48("1892")) {
    {}
  } else {
    stryCov_9fa48("1892");
    return stryMutAct_9fa48("1893") ? [] : (stryCov_9fa48("1893"), [topics.setTopicField(tid, stryMutAct_9fa48("1894") ? "" : (stryCov_9fa48("1894"), 'pinned'), 0), topics.deleteTopicField(tid, stryMutAct_9fa48("1895") ? "" : (stryCov_9fa48("1895"), 'pinExpiry')), db.sortedSetRemove(stryMutAct_9fa48("1896") ? `` : (stryCov_9fa48("1896"), `cid:${topicData.cid}:tids:pinned`), tid), db.sortedSetAddBulk(stryMutAct_9fa48("1897") ? [] : (stryCov_9fa48("1897"), [stryMutAct_9fa48("1898") ? [] : (stryCov_9fa48("1898"), [stryMutAct_9fa48("1899") ? `` : (stryCov_9fa48("1899"), `cid:${topicData.cid}:tids`), topicData.lastposttime, tid]), stryMutAct_9fa48("1900") ? [] : (stryCov_9fa48("1900"), [stryMutAct_9fa48("1901") ? `` : (stryCov_9fa48("1901"), `cid:${topicData.cid}:tids:posts`), topicData.postcount, tid]), stryMutAct_9fa48("1902") ? [] : (stryCov_9fa48("1902"), [stryMutAct_9fa48("1903") ? `` : (stryCov_9fa48("1903"), `cid:${topicData.cid}:tids:votes`), stryMutAct_9fa48("1906") ? parseInt(topicData.votes, 10) && 0 : stryMutAct_9fa48("1905") ? false : stryMutAct_9fa48("1904") ? true : (stryCov_9fa48("1904", "1905", "1906"), parseInt(topicData.votes, 10) || 0), tid]), stryMutAct_9fa48("1907") ? [] : (stryCov_9fa48("1907"), [stryMutAct_9fa48("1908") ? `` : (stryCov_9fa48("1908"), `cid:${topicData.cid}:tids:views`), topicData.viewcount, tid])]))]);
  }
}
async function sendNotifications(uids, topicsData) {
  if (stryMutAct_9fa48("1909")) {
    {}
  } else {
    stryCov_9fa48("1909");
    const usernames = await Promise.all(uids.map(stryMutAct_9fa48("1910") ? () => undefined : (stryCov_9fa48("1910"), uid => user.getUserField(uid, stryMutAct_9fa48("1911") ? "" : (stryCov_9fa48("1911"), 'username')))));
    const uidToUsername = Object.fromEntries(uids.map(stryMutAct_9fa48("1912") ? () => undefined : (stryCov_9fa48("1912"), (uid, idx) => stryMutAct_9fa48("1913") ? [] : (stryCov_9fa48("1913"), [uid, usernames[idx]]))));
    const postsData = await posts.getPostsData(topicsData.map(stryMutAct_9fa48("1914") ? () => undefined : (stryCov_9fa48("1914"), ({
      mainPid
    }) => mainPid)));
    postsData.forEach((postData, idx) => {
      if (stryMutAct_9fa48("1915")) {
        {}
      } else {
        stryCov_9fa48("1915");
        postData.user = {};
        postData.user.username = uidToUsername[postData.uid];
        postData.topic = topicsData[idx];
      }
    });
    return Promise.all(topicsData.map(stryMutAct_9fa48("1916") ? () => undefined : (stryCov_9fa48("1916"), (t, idx) => user.notifications.sendTopicNotificationToFollowers(t.uid, t, postsData[idx]))).concat(topicsData.map(stryMutAct_9fa48("1917") ? () => undefined : (stryCov_9fa48("1917"), (t, idx) => socketHelpers.notifyNew(t.uid, stryMutAct_9fa48("1918") ? "" : (stryCov_9fa48("1918"), 'newTopic'), stryMutAct_9fa48("1919") ? {} : (stryCov_9fa48("1919"), {
      posts: stryMutAct_9fa48("1920") ? [] : (stryCov_9fa48("1920"), [postsData[idx]]),
      topic: t
    }))))));
  }
}
async function updateUserLastposttimes(uids, topicsData) {
  if (stryMutAct_9fa48("1921")) {
    {}
  } else {
    stryCov_9fa48("1921");
    const lastposttimes = (await user.getUsersFields(uids, stryMutAct_9fa48("1922") ? [] : (stryCov_9fa48("1922"), [stryMutAct_9fa48("1923") ? "" : (stryCov_9fa48("1923"), 'lastposttime')]))).map(stryMutAct_9fa48("1924") ? () => undefined : (stryCov_9fa48("1924"), u => u.lastposttime));
    let tstampByUid = {};
    topicsData.forEach(tD => {
      if (stryMutAct_9fa48("1925")) {
        {}
      } else {
        stryCov_9fa48("1925");
        tstampByUid[tD.uid] = tstampByUid[tD.uid] ? tstampByUid[tD.uid].concat(tD.lastposttime) : stryMutAct_9fa48("1926") ? [] : (stryCov_9fa48("1926"), [tD.lastposttime]);
      }
    });
    tstampByUid = Object.fromEntries(Object.entries(tstampByUid).map(stryMutAct_9fa48("1927") ? () => undefined : (stryCov_9fa48("1927"), uidTimestamp => stryMutAct_9fa48("1928") ? [] : (stryCov_9fa48("1928"), [uidTimestamp[0], stryMutAct_9fa48("1929") ? Math.min(...uidTimestamp[1]) : (stryCov_9fa48("1929"), Math.max(...uidTimestamp[1]))]))));
    const uidsToUpdate = stryMutAct_9fa48("1930") ? uids : (stryCov_9fa48("1930"), uids.filter(stryMutAct_9fa48("1931") ? () => undefined : (stryCov_9fa48("1931"), (uid, idx) => stryMutAct_9fa48("1935") ? tstampByUid[uid] <= lastposttimes[idx] : stryMutAct_9fa48("1934") ? tstampByUid[uid] >= lastposttimes[idx] : stryMutAct_9fa48("1933") ? false : stryMutAct_9fa48("1932") ? true : (stryCov_9fa48("1932", "1933", "1934", "1935"), tstampByUid[uid] > lastposttimes[idx]))));
    return Promise.all(uidsToUpdate.map(stryMutAct_9fa48("1936") ? () => undefined : (stryCov_9fa48("1936"), uid => user.setUserField(uid, stryMutAct_9fa48("1937") ? "" : (stryCov_9fa48("1937"), 'lastposttime'), tstampByUid[uid]))));
  }
}
async function shiftPostTimes(tid, timestamp) {
  if (stryMutAct_9fa48("1938")) {
    {}
  } else {
    stryCov_9fa48("1938");
    const pids = await posts.getPidsFromSet(stryMutAct_9fa48("1939") ? `` : (stryCov_9fa48("1939"), `tid:${tid}:posts`), 0, stryMutAct_9fa48("1940") ? +1 : (stryCov_9fa48("1940"), -1), stryMutAct_9fa48("1941") ? true : (stryCov_9fa48("1941"), false));
    // Leaving other related score values intact, since they reflect post order correctly,
    // and it seems that's good enough
    return db.setObjectBulk(pids.map(stryMutAct_9fa48("1942") ? () => undefined : (stryCov_9fa48("1942"), (pid, idx) => stryMutAct_9fa48("1943") ? [] : (stryCov_9fa48("1943"), [stryMutAct_9fa48("1944") ? `` : (stryCov_9fa48("1944"), `post:${pid}`), stryMutAct_9fa48("1945") ? {} : (stryCov_9fa48("1945"), {
      timestamp: stryMutAct_9fa48("1946") ? timestamp + idx - 1 : (stryCov_9fa48("1946"), (stryMutAct_9fa48("1947") ? timestamp - idx : (stryCov_9fa48("1947"), timestamp + idx)) + 1)
    })]))));
  }
}