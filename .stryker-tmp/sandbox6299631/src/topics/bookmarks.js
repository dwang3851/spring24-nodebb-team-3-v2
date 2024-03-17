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
const async = require('async');
const db = require('../database');
const user = require('../user');
module.exports = function (Topics) {
  if (stryMutAct_9fa48("0")) {
    {}
  } else {
    stryCov_9fa48("0");
    Topics.getUserBookmark = async function (tid, uid) {
      if (stryMutAct_9fa48("1")) {
        {}
      } else {
        stryCov_9fa48("1");
        if (stryMutAct_9fa48("5") ? parseInt(uid, 10) > 0 : stryMutAct_9fa48("4") ? parseInt(uid, 10) < 0 : stryMutAct_9fa48("3") ? false : stryMutAct_9fa48("2") ? true : (stryCov_9fa48("2", "3", "4", "5"), parseInt(uid, 10) <= 0)) {
          if (stryMutAct_9fa48("6")) {
            {}
          } else {
            stryCov_9fa48("6");
            return null;
          }
        }
        return await db.sortedSetScore(stryMutAct_9fa48("7") ? `` : (stryCov_9fa48("7"), `tid:${tid}:bookmarks`), uid);
      }
    };
    Topics.getUserBookmarks = async function (tids, uid) {
      if (stryMutAct_9fa48("8")) {
        {}
      } else {
        stryCov_9fa48("8");
        if (stryMutAct_9fa48("12") ? parseInt(uid, 10) > 0 : stryMutAct_9fa48("11") ? parseInt(uid, 10) < 0 : stryMutAct_9fa48("10") ? false : stryMutAct_9fa48("9") ? true : (stryCov_9fa48("9", "10", "11", "12"), parseInt(uid, 10) <= 0)) {
          if (stryMutAct_9fa48("13")) {
            {}
          } else {
            stryCov_9fa48("13");
            return tids.map(stryMutAct_9fa48("14") ? () => undefined : (stryCov_9fa48("14"), () => null));
          }
        }
        return await db.sortedSetsScore(tids.map(stryMutAct_9fa48("15") ? () => undefined : (stryCov_9fa48("15"), tid => stryMutAct_9fa48("16") ? `` : (stryCov_9fa48("16"), `tid:${tid}:bookmarks`))), uid);
      }
    };
    Topics.setUserBookmark = async function (tid, uid, index) {
      if (stryMutAct_9fa48("17")) {
        {}
      } else {
        stryCov_9fa48("17");
        await db.sortedSetAdd(stryMutAct_9fa48("18") ? `` : (stryCov_9fa48("18"), `tid:${tid}:bookmarks`), index, uid);
      }
    };
    Topics.getTopicBookmarks = async function (tid) {
      if (stryMutAct_9fa48("19")) {
        {}
      } else {
        stryCov_9fa48("19");
        return await db.getSortedSetRangeWithScores(stryMutAct_9fa48("20") ? `` : (stryCov_9fa48("20"), `tid:${tid}:bookmarks`), 0, stryMutAct_9fa48("21") ? +1 : (stryCov_9fa48("21"), -1));
      }
    };
    Topics.updateTopicBookmarks = async function (tid, pids) {
      if (stryMutAct_9fa48("22")) {
        {}
      } else {
        stryCov_9fa48("22");
        const maxIndex = await Topics.getPostCount(tid);
        const indices = await db.sortedSetRanks(stryMutAct_9fa48("23") ? `` : (stryCov_9fa48("23"), `tid:${tid}:posts`), pids);
        const postIndices = indices.map(stryMutAct_9fa48("24") ? () => undefined : (stryCov_9fa48("24"), i => (stryMutAct_9fa48("27") ? i !== null : stryMutAct_9fa48("26") ? false : stryMutAct_9fa48("25") ? true : (stryCov_9fa48("25", "26", "27"), i === null)) ? 0 : stryMutAct_9fa48("28") ? i - 1 : (stryCov_9fa48("28"), i + 1)));
        const minIndex = stryMutAct_9fa48("29") ? Math.max(...postIndices) : (stryCov_9fa48("29"), Math.min(...postIndices));
        const bookmarks = await Topics.getTopicBookmarks(tid);
        const uidData = stryMutAct_9fa48("30") ? bookmarks.map(b => ({
          uid: b.value,
          bookmark: parseInt(b.score, 10)
        })) : (stryCov_9fa48("30"), bookmarks.map(stryMutAct_9fa48("31") ? () => undefined : (stryCov_9fa48("31"), b => stryMutAct_9fa48("32") ? {} : (stryCov_9fa48("32"), {
          uid: b.value,
          bookmark: parseInt(b.score, 10)
        }))).filter(stryMutAct_9fa48("33") ? () => undefined : (stryCov_9fa48("33"), data => stryMutAct_9fa48("37") ? data.bookmark < minIndex : stryMutAct_9fa48("36") ? data.bookmark > minIndex : stryMutAct_9fa48("35") ? false : stryMutAct_9fa48("34") ? true : (stryCov_9fa48("34", "35", "36", "37"), data.bookmark >= minIndex))));
        await async.eachLimit(uidData, 50, async data => {
          if (stryMutAct_9fa48("38")) {
            {}
          } else {
            stryCov_9fa48("38");
            let bookmark = stryMutAct_9fa48("39") ? Math.max(data.bookmark, maxIndex) : (stryCov_9fa48("39"), Math.min(data.bookmark, maxIndex));
            postIndices.forEach(i => {
              if (stryMutAct_9fa48("40")) {
                {}
              } else {
                stryCov_9fa48("40");
                if (stryMutAct_9fa48("44") ? i >= data.bookmark : stryMutAct_9fa48("43") ? i <= data.bookmark : stryMutAct_9fa48("42") ? false : stryMutAct_9fa48("41") ? true : (stryCov_9fa48("41", "42", "43", "44"), i < data.bookmark)) {
                  if (stryMutAct_9fa48("45")) {
                    {}
                  } else {
                    stryCov_9fa48("45");
                    stryMutAct_9fa48("46") ? bookmark += 1 : (stryCov_9fa48("46"), bookmark -= 1);
                  }
                }
              }
            });

            // make sure the bookmark is valid if we removed the last post
            bookmark = stryMutAct_9fa48("47") ? Math.max(bookmark, maxIndex - pids.length) : (stryCov_9fa48("47"), Math.min(bookmark, stryMutAct_9fa48("48") ? maxIndex + pids.length : (stryCov_9fa48("48"), maxIndex - pids.length)));
            if (stryMutAct_9fa48("51") ? bookmark !== data.bookmark : stryMutAct_9fa48("50") ? false : stryMutAct_9fa48("49") ? true : (stryCov_9fa48("49", "50", "51"), bookmark === data.bookmark)) {
              if (stryMutAct_9fa48("52")) {
                {}
              } else {
                stryCov_9fa48("52");
                return;
              }
            }
            const settings = await user.getSettings(data.uid);
            if (stryMutAct_9fa48("55") ? settings.topicPostSort !== 'most_votes' : stryMutAct_9fa48("54") ? false : stryMutAct_9fa48("53") ? true : (stryCov_9fa48("53", "54", "55"), settings.topicPostSort === (stryMutAct_9fa48("56") ? "" : (stryCov_9fa48("56"), 'most_votes')))) {
              if (stryMutAct_9fa48("57")) {
                {}
              } else {
                stryCov_9fa48("57");
                return;
              }
            }
            await Topics.setUserBookmark(tid, data.uid, bookmark);
          }
        });
      }
    };
  }
};