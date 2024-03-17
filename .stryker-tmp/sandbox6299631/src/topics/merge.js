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
const plugins = require('../plugins');
const posts = require('../posts');
module.exports = function (Topics) {
  if (stryMutAct_9fa48("1305")) {
    {}
  } else {
    stryCov_9fa48("1305");
    Topics.merge = async function (tids, uid, options) {
      if (stryMutAct_9fa48("1306")) {
        {}
      } else {
        stryCov_9fa48("1306");
        options = stryMutAct_9fa48("1309") ? options && {} : stryMutAct_9fa48("1308") ? false : stryMutAct_9fa48("1307") ? true : (stryCov_9fa48("1307", "1308", "1309"), options || {});
        const topicsData = await Topics.getTopicsFields(tids, stryMutAct_9fa48("1310") ? [] : (stryCov_9fa48("1310"), [stryMutAct_9fa48("1311") ? "" : (stryCov_9fa48("1311"), 'scheduled')]));
        if (stryMutAct_9fa48("1314") ? topicsData.every(t => t.scheduled) : stryMutAct_9fa48("1313") ? false : stryMutAct_9fa48("1312") ? true : (stryCov_9fa48("1312", "1313", "1314"), topicsData.some(stryMutAct_9fa48("1315") ? () => undefined : (stryCov_9fa48("1315"), t => t.scheduled)))) {
          if (stryMutAct_9fa48("1316")) {
            {}
          } else {
            stryCov_9fa48("1316");
            throw new Error(stryMutAct_9fa48("1317") ? "" : (stryCov_9fa48("1317"), '[[error:cant-merge-scheduled]]'));
          }
        }
        const oldestTid = findOldestTopic(tids);
        let mergeIntoTid = oldestTid;
        if (stryMutAct_9fa48("1319") ? false : stryMutAct_9fa48("1318") ? true : (stryCov_9fa48("1318", "1319"), options.mainTid)) {
          if (stryMutAct_9fa48("1320")) {
            {}
          } else {
            stryCov_9fa48("1320");
            mergeIntoTid = options.mainTid;
          }
        } else if (stryMutAct_9fa48("1322") ? false : stryMutAct_9fa48("1321") ? true : (stryCov_9fa48("1321", "1322"), options.newTopicTitle)) {
          if (stryMutAct_9fa48("1323")) {
            {}
          } else {
            stryCov_9fa48("1323");
            mergeIntoTid = await createNewTopic(options.newTopicTitle, oldestTid);
          }
        }
        const otherTids = stryMutAct_9fa48("1325") ? tids.filter(tid => tid && parseInt(tid, 10) !== parseInt(mergeIntoTid, 10)) : stryMutAct_9fa48("1324") ? tids.sort((a, b) => a - b) : (stryCov_9fa48("1324", "1325"), tids.sort(stryMutAct_9fa48("1326") ? () => undefined : (stryCov_9fa48("1326"), (a, b) => stryMutAct_9fa48("1327") ? a + b : (stryCov_9fa48("1327"), a - b))).filter(stryMutAct_9fa48("1328") ? () => undefined : (stryCov_9fa48("1328"), tid => stryMutAct_9fa48("1331") ? tid || parseInt(tid, 10) !== parseInt(mergeIntoTid, 10) : stryMutAct_9fa48("1330") ? false : stryMutAct_9fa48("1329") ? true : (stryCov_9fa48("1329", "1330", "1331"), tid && (stryMutAct_9fa48("1333") ? parseInt(tid, 10) === parseInt(mergeIntoTid, 10) : stryMutAct_9fa48("1332") ? true : (stryCov_9fa48("1332", "1333"), parseInt(tid, 10) !== parseInt(mergeIntoTid, 10)))))));
        for (const tid of otherTids) {
          if (stryMutAct_9fa48("1334")) {
            {}
          } else {
            stryCov_9fa48("1334");
            /* eslint-disable no-await-in-loop */
            const pids = await Topics.getPids(tid);
            for (const pid of pids) {
              if (stryMutAct_9fa48("1335")) {
                {}
              } else {
                stryCov_9fa48("1335");
                await Topics.movePostToTopic(uid, pid, mergeIntoTid);
              }
            }
            await Topics.setTopicField(tid, stryMutAct_9fa48("1336") ? "" : (stryCov_9fa48("1336"), 'mainPid'), 0);
            await Topics.delete(tid, uid);
            await Topics.setTopicFields(tid, stryMutAct_9fa48("1337") ? {} : (stryCov_9fa48("1337"), {
              mergeIntoTid: mergeIntoTid,
              mergerUid: uid,
              mergedTimestamp: Date.now()
            }));
          }
        }
        await Promise.all(stryMutAct_9fa48("1338") ? [] : (stryCov_9fa48("1338"), [posts.updateQueuedPostsTopic(mergeIntoTid, otherTids), updateViewCount(mergeIntoTid, tids)]));
        plugins.hooks.fire(stryMutAct_9fa48("1339") ? "" : (stryCov_9fa48("1339"), 'action:topic.merge'), stryMutAct_9fa48("1340") ? {} : (stryCov_9fa48("1340"), {
          uid: uid,
          tids: tids,
          mergeIntoTid: mergeIntoTid,
          otherTids: otherTids
        }));
        return mergeIntoTid;
      }
    };
    async function createNewTopic(title, oldestTid) {
      if (stryMutAct_9fa48("1341")) {
        {}
      } else {
        stryCov_9fa48("1341");
        const topicData = await Topics.getTopicFields(oldestTid, stryMutAct_9fa48("1342") ? [] : (stryCov_9fa48("1342"), [stryMutAct_9fa48("1343") ? "" : (stryCov_9fa48("1343"), 'uid'), stryMutAct_9fa48("1344") ? "" : (stryCov_9fa48("1344"), 'cid')]));
        const params = stryMutAct_9fa48("1345") ? {} : (stryCov_9fa48("1345"), {
          uid: topicData.uid,
          cid: topicData.cid,
          title: title
        });
        const result = await plugins.hooks.fire(stryMutAct_9fa48("1346") ? "" : (stryCov_9fa48("1346"), 'filter:topic.mergeCreateNewTopic'), stryMutAct_9fa48("1347") ? {} : (stryCov_9fa48("1347"), {
          oldestTid: oldestTid,
          params: params
        }));
        const tid = await Topics.create(result.params);
        return tid;
      }
    }
    async function updateViewCount(mergeIntoTid, tids) {
      if (stryMutAct_9fa48("1348")) {
        {}
      } else {
        stryCov_9fa48("1348");
        const topicData = await Topics.getTopicsFields(tids, stryMutAct_9fa48("1349") ? [] : (stryCov_9fa48("1349"), [stryMutAct_9fa48("1350") ? "" : (stryCov_9fa48("1350"), 'viewcount')]));
        const totalViewCount = topicData.reduce(stryMutAct_9fa48("1351") ? () => undefined : (stryCov_9fa48("1351"), (count, topic) => stryMutAct_9fa48("1352") ? count - parseInt(topic.viewcount, 10) : (stryCov_9fa48("1352"), count + parseInt(topic.viewcount, 10))), 0);
        await Topics.setTopicField(mergeIntoTid, stryMutAct_9fa48("1353") ? "" : (stryCov_9fa48("1353"), 'viewcount'), totalViewCount);
      }
    }
    function findOldestTopic(tids) {
      if (stryMutAct_9fa48("1354")) {
        {}
      } else {
        stryCov_9fa48("1354");
        return Math.min.apply(null, tids);
      }
    }
  }
};