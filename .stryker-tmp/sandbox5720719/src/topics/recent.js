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
const plugins = require('../plugins');
const posts = require('../posts');
module.exports = function (Topics) {
  if (stryMutAct_9fa48("1793")) {
    {}
  } else {
    stryCov_9fa48("1793");
    const terms = stryMutAct_9fa48("1794") ? {} : (stryCov_9fa48("1794"), {
      day: 86400000,
      week: 604800000,
      month: 2592000000,
      year: 31104000000
    });
    Topics.getRecentTopics = async function (cid, uid, start, stop, filter) {
      if (stryMutAct_9fa48("1795")) {
        {}
      } else {
        stryCov_9fa48("1795");
        return await Topics.getSortedTopics(stryMutAct_9fa48("1796") ? {} : (stryCov_9fa48("1796"), {
          cids: cid,
          uid: uid,
          start: start,
          stop: stop,
          filter: filter,
          sort: stryMutAct_9fa48("1797") ? "" : (stryCov_9fa48("1797"), 'recent')
        }));
      }
    };

    /* not an orphan method, used in widget-essentials */
    Topics.getLatestTopics = async function (options) {
      if (stryMutAct_9fa48("1798")) {
        {}
      } else {
        stryCov_9fa48("1798");
        // uid, start, stop, term
        const tids = await Topics.getLatestTidsFromSet(stryMutAct_9fa48("1799") ? "" : (stryCov_9fa48("1799"), 'topics:recent'), options.start, options.stop, options.term);
        const topics = await Topics.getTopics(tids, options);
        return stryMutAct_9fa48("1800") ? {} : (stryCov_9fa48("1800"), {
          topics: topics,
          nextStart: stryMutAct_9fa48("1801") ? options.stop - 1 : (stryCov_9fa48("1801"), options.stop + 1)
        });
      }
    };
    Topics.getLatestTidsFromSet = async function (set, start, stop, term) {
      if (stryMutAct_9fa48("1802")) {
        {}
      } else {
        stryCov_9fa48("1802");
        let since = terms.day;
        if (stryMutAct_9fa48("1804") ? false : stryMutAct_9fa48("1803") ? true : (stryCov_9fa48("1803", "1804"), terms[term])) {
          if (stryMutAct_9fa48("1805")) {
            {}
          } else {
            stryCov_9fa48("1805");
            since = terms[term];
          }
        }
        const count = (stryMutAct_9fa48("1808") ? parseInt(stop, 10) !== -1 : stryMutAct_9fa48("1807") ? false : stryMutAct_9fa48("1806") ? true : (stryCov_9fa48("1806", "1807", "1808"), parseInt(stop, 10) === (stryMutAct_9fa48("1809") ? +1 : (stryCov_9fa48("1809"), -1)))) ? stop : stryMutAct_9fa48("1810") ? stop - start - 1 : (stryCov_9fa48("1810"), (stryMutAct_9fa48("1811") ? stop + start : (stryCov_9fa48("1811"), stop - start)) + 1);
        return await db.getSortedSetRevRangeByScore(set, start, count, stryMutAct_9fa48("1812") ? "" : (stryCov_9fa48("1812"), '+inf'), stryMutAct_9fa48("1813") ? Date.now() + since : (stryCov_9fa48("1813"), Date.now() - since));
      }
    };
    Topics.updateLastPostTimeFromLastPid = async function (tid) {
      if (stryMutAct_9fa48("1814")) {
        {}
      } else {
        stryCov_9fa48("1814");
        const pid = await Topics.getLatestUndeletedPid(tid);
        if (stryMutAct_9fa48("1817") ? false : stryMutAct_9fa48("1816") ? true : stryMutAct_9fa48("1815") ? pid : (stryCov_9fa48("1815", "1816", "1817"), !pid)) {
          if (stryMutAct_9fa48("1818")) {
            {}
          } else {
            stryCov_9fa48("1818");
            return;
          }
        }
        const timestamp = await posts.getPostField(pid, stryMutAct_9fa48("1819") ? "" : (stryCov_9fa48("1819"), 'timestamp'));
        if (stryMutAct_9fa48("1822") ? false : stryMutAct_9fa48("1821") ? true : stryMutAct_9fa48("1820") ? timestamp : (stryCov_9fa48("1820", "1821", "1822"), !timestamp)) {
          if (stryMutAct_9fa48("1823")) {
            {}
          } else {
            stryCov_9fa48("1823");
            return;
          }
        }
        await Topics.updateLastPostTime(tid, timestamp);
      }
    };
    Topics.updateLastPostTime = async function (tid, lastposttime) {
      if (stryMutAct_9fa48("1824")) {
        {}
      } else {
        stryCov_9fa48("1824");
        await Topics.setTopicField(tid, stryMutAct_9fa48("1825") ? "" : (stryCov_9fa48("1825"), 'lastposttime'), lastposttime);
        const topicData = await Topics.getTopicFields(tid, stryMutAct_9fa48("1826") ? [] : (stryCov_9fa48("1826"), [stryMutAct_9fa48("1827") ? "" : (stryCov_9fa48("1827"), 'cid'), stryMutAct_9fa48("1828") ? "" : (stryCov_9fa48("1828"), 'deleted'), stryMutAct_9fa48("1829") ? "" : (stryCov_9fa48("1829"), 'pinned')]));
        await db.sortedSetAdd(stryMutAct_9fa48("1830") ? `` : (stryCov_9fa48("1830"), `cid:${topicData.cid}:tids:lastposttime`), lastposttime, tid);
        await Topics.updateRecent(tid, lastposttime);
        if (stryMutAct_9fa48("1833") ? false : stryMutAct_9fa48("1832") ? true : stryMutAct_9fa48("1831") ? topicData.pinned : (stryCov_9fa48("1831", "1832", "1833"), !topicData.pinned)) {
          if (stryMutAct_9fa48("1834")) {
            {}
          } else {
            stryCov_9fa48("1834");
            await db.sortedSetAdd(stryMutAct_9fa48("1835") ? `` : (stryCov_9fa48("1835"), `cid:${topicData.cid}:tids`), lastposttime, tid);
          }
        }
      }
    };
    Topics.updateRecent = async function (tid, timestamp) {
      if (stryMutAct_9fa48("1836")) {
        {}
      } else {
        stryCov_9fa48("1836");
        let data = stryMutAct_9fa48("1837") ? {} : (stryCov_9fa48("1837"), {
          tid: tid,
          timestamp: timestamp
        });
        if (stryMutAct_9fa48("1839") ? false : stryMutAct_9fa48("1838") ? true : (stryCov_9fa48("1838", "1839"), plugins.hooks.hasListeners(stryMutAct_9fa48("1840") ? "" : (stryCov_9fa48("1840"), 'filter:topics.updateRecent')))) {
          if (stryMutAct_9fa48("1841")) {
            {}
          } else {
            stryCov_9fa48("1841");
            data = await plugins.hooks.fire(stryMutAct_9fa48("1842") ? "" : (stryCov_9fa48("1842"), 'filter:topics.updateRecent'), stryMutAct_9fa48("1843") ? {} : (stryCov_9fa48("1843"), {
              tid: tid,
              timestamp: timestamp
            }));
          }
        }
        if (stryMutAct_9fa48("1846") ? data && data.tid || data.timestamp : stryMutAct_9fa48("1845") ? false : stryMutAct_9fa48("1844") ? true : (stryCov_9fa48("1844", "1845", "1846"), (stryMutAct_9fa48("1848") ? data || data.tid : stryMutAct_9fa48("1847") ? true : (stryCov_9fa48("1847", "1848"), data && data.tid)) && data.timestamp)) {
          if (stryMutAct_9fa48("1849")) {
            {}
          } else {
            stryCov_9fa48("1849");
            await db.sortedSetAdd(stryMutAct_9fa48("1850") ? "" : (stryCov_9fa48("1850"), 'topics:recent'), data.timestamp, data.tid);
          }
        }
      }
    };
  }
};