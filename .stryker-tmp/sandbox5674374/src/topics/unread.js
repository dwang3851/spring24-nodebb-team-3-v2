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
const _ = require('lodash');
const db = require('../database');
const user = require('../user');
const posts = require('../posts');
const notifications = require('../notifications');
const categories = require('../categories');
const privileges = require('../privileges');
const meta = require('../meta');
const utils = require('../utils');
const plugins = require('../plugins');
module.exports = function (Topics) {
  if (stryMutAct_9fa48("3432")) {
    {}
  } else {
    stryCov_9fa48("3432");
    Topics.getTotalUnread = async function (uid, filter) {
      if (stryMutAct_9fa48("3433")) {
        {}
      } else {
        stryCov_9fa48("3433");
        filter = stryMutAct_9fa48("3436") ? filter && '' : stryMutAct_9fa48("3435") ? false : stryMutAct_9fa48("3434") ? true : (stryCov_9fa48("3434", "3435", "3436"), filter || (stryMutAct_9fa48("3437") ? "Stryker was here!" : (stryCov_9fa48("3437"), '')));
        const counts = await Topics.getUnreadTids(stryMutAct_9fa48("3438") ? {} : (stryCov_9fa48("3438"), {
          cid: 0,
          uid: uid,
          count: stryMutAct_9fa48("3439") ? false : (stryCov_9fa48("3439"), true)
        }));
        return stryMutAct_9fa48("3442") ? counts || counts[filter] : stryMutAct_9fa48("3441") ? false : stryMutAct_9fa48("3440") ? true : (stryCov_9fa48("3440", "3441", "3442"), counts && counts[filter]);
      }
    };
    Topics.getUnreadTopics = async function (params) {
      if (stryMutAct_9fa48("3443")) {
        {}
      } else {
        stryCov_9fa48("3443");
        const unreadTopics = stryMutAct_9fa48("3444") ? {} : (stryCov_9fa48("3444"), {
          showSelect: stryMutAct_9fa48("3445") ? false : (stryCov_9fa48("3445"), true),
          nextStart: 0,
          topics: stryMutAct_9fa48("3446") ? ["Stryker was here"] : (stryCov_9fa48("3446"), [])
        });
        let tids = await Topics.getUnreadTids(params);
        unreadTopics.topicCount = tids.length;
        if (stryMutAct_9fa48("3449") ? false : stryMutAct_9fa48("3448") ? true : stryMutAct_9fa48("3447") ? tids.length : (stryCov_9fa48("3447", "3448", "3449"), !tids.length)) {
          if (stryMutAct_9fa48("3450")) {
            {}
          } else {
            stryCov_9fa48("3450");
            return unreadTopics;
          }
        }
        tids = stryMutAct_9fa48("3451") ? tids : (stryCov_9fa48("3451"), tids.slice(params.start, (stryMutAct_9fa48("3454") ? params.stop === -1 : stryMutAct_9fa48("3453") ? false : stryMutAct_9fa48("3452") ? true : (stryCov_9fa48("3452", "3453", "3454"), params.stop !== (stryMutAct_9fa48("3455") ? +1 : (stryCov_9fa48("3455"), -1)))) ? stryMutAct_9fa48("3456") ? params.stop - 1 : (stryCov_9fa48("3456"), params.stop + 1) : undefined));
        const topicData = await Topics.getTopicsByTids(tids, params.uid);
        if (stryMutAct_9fa48("3459") ? false : stryMutAct_9fa48("3458") ? true : stryMutAct_9fa48("3457") ? topicData.length : (stryCov_9fa48("3457", "3458", "3459"), !topicData.length)) {
          if (stryMutAct_9fa48("3460")) {
            {}
          } else {
            stryCov_9fa48("3460");
            return unreadTopics;
          }
        }
        Topics.calculateTopicIndices(topicData, params.start);
        unreadTopics.topics = topicData;
        unreadTopics.nextStart = stryMutAct_9fa48("3461") ? params.stop - 1 : (stryCov_9fa48("3461"), params.stop + 1);
        return unreadTopics;
      }
    };
    Topics.unreadCutoff = async function (uid) {
      if (stryMutAct_9fa48("3462")) {
        {}
      } else {
        stryCov_9fa48("3462");
        const cutoff = stryMutAct_9fa48("3463") ? Date.now() + meta.config.unreadCutoff * 86400000 : (stryCov_9fa48("3463"), Date.now() - (stryMutAct_9fa48("3464") ? meta.config.unreadCutoff / 86400000 : (stryCov_9fa48("3464"), meta.config.unreadCutoff * 86400000)));
        const data = await plugins.hooks.fire(stryMutAct_9fa48("3465") ? "" : (stryCov_9fa48("3465"), 'filter:topics.unreadCutoff'), stryMutAct_9fa48("3466") ? {} : (stryCov_9fa48("3466"), {
          uid: uid,
          cutoff: cutoff
        }));
        return parseInt(data.cutoff, 10);
      }
    };
    Topics.getUnreadTids = async function (params) {
      if (stryMutAct_9fa48("3467")) {
        {}
      } else {
        stryCov_9fa48("3467");
        const results = await Topics.getUnreadData(params);
        return params.count ? results.counts : results.tids;
      }
    };
    Topics.getUnreadData = async function (params) {
      if (stryMutAct_9fa48("3468")) {
        {}
      } else {
        stryCov_9fa48("3468");
        const uid = parseInt(params.uid, 10);
        params.filter = stryMutAct_9fa48("3471") ? params.filter && '' : stryMutAct_9fa48("3470") ? false : stryMutAct_9fa48("3469") ? true : (stryCov_9fa48("3469", "3470", "3471"), params.filter || (stryMutAct_9fa48("3472") ? "Stryker was here!" : (stryCov_9fa48("3472"), '')));
        if (stryMutAct_9fa48("3475") ? params.cid || !Array.isArray(params.cid) : stryMutAct_9fa48("3474") ? false : stryMutAct_9fa48("3473") ? true : (stryCov_9fa48("3473", "3474", "3475"), params.cid && (stryMutAct_9fa48("3476") ? Array.isArray(params.cid) : (stryCov_9fa48("3476"), !Array.isArray(params.cid))))) {
          if (stryMutAct_9fa48("3477")) {
            {}
          } else {
            stryCov_9fa48("3477");
            params.cid = stryMutAct_9fa48("3478") ? [] : (stryCov_9fa48("3478"), [params.cid]);
          }
        }
        const data = await getTids(params);
        if (stryMutAct_9fa48("3481") ? (uid <= 0 || !data.tids) && !data.tids.length : stryMutAct_9fa48("3480") ? false : stryMutAct_9fa48("3479") ? true : (stryCov_9fa48("3479", "3480", "3481"), (stryMutAct_9fa48("3483") ? uid <= 0 && !data.tids : stryMutAct_9fa48("3482") ? false : (stryCov_9fa48("3482", "3483"), (stryMutAct_9fa48("3486") ? uid > 0 : stryMutAct_9fa48("3485") ? uid < 0 : stryMutAct_9fa48("3484") ? false : (stryCov_9fa48("3484", "3485", "3486"), uid <= 0)) || (stryMutAct_9fa48("3487") ? data.tids : (stryCov_9fa48("3487"), !data.tids)))) || (stryMutAct_9fa48("3488") ? data.tids.length : (stryCov_9fa48("3488"), !data.tids.length)))) {
          if (stryMutAct_9fa48("3489")) {
            {}
          } else {
            stryCov_9fa48("3489");
            return data;
          }
        }
        const result = await plugins.hooks.fire(stryMutAct_9fa48("3490") ? "" : (stryCov_9fa48("3490"), 'filter:topics.getUnreadTids'), stryMutAct_9fa48("3491") ? {} : (stryCov_9fa48("3491"), {
          uid: uid,
          tids: data.tids,
          counts: data.counts,
          tidsByFilter: data.tidsByFilter,
          cid: params.cid,
          filter: params.filter,
          query: stryMutAct_9fa48("3494") ? params.query && {} : stryMutAct_9fa48("3493") ? false : stryMutAct_9fa48("3492") ? true : (stryCov_9fa48("3492", "3493", "3494"), params.query || {})
        }));
        return result;
      }
    };
    async function getTids(params) {
      if (stryMutAct_9fa48("3495")) {
        {}
      } else {
        stryCov_9fa48("3495");
        const counts = stryMutAct_9fa48("3496") ? {} : (stryCov_9fa48("3496"), {
          '': 0,
          new: 0,
          watched: 0,
          unreplied: 0
        });
        const tidsByFilter = stryMutAct_9fa48("3497") ? {} : (stryCov_9fa48("3497"), {
          '': stryMutAct_9fa48("3498") ? ["Stryker was here"] : (stryCov_9fa48("3498"), []),
          new: stryMutAct_9fa48("3499") ? ["Stryker was here"] : (stryCov_9fa48("3499"), []),
          watched: stryMutAct_9fa48("3500") ? ["Stryker was here"] : (stryCov_9fa48("3500"), []),
          unreplied: stryMutAct_9fa48("3501") ? ["Stryker was here"] : (stryCov_9fa48("3501"), [])
        });
        if (stryMutAct_9fa48("3505") ? params.uid > 0 : stryMutAct_9fa48("3504") ? params.uid < 0 : stryMutAct_9fa48("3503") ? false : stryMutAct_9fa48("3502") ? true : (stryCov_9fa48("3502", "3503", "3504", "3505"), params.uid <= 0)) {
          if (stryMutAct_9fa48("3506")) {
            {}
          } else {
            stryCov_9fa48("3506");
            return stryMutAct_9fa48("3507") ? {} : (stryCov_9fa48("3507"), {
              counts: counts,
              tids: stryMutAct_9fa48("3508") ? ["Stryker was here"] : (stryCov_9fa48("3508"), []),
              tidsByFilter: tidsByFilter
            });
          }
        }
        params.cutoff = await Topics.unreadCutoff(params.uid);
        const [followedTids, ignoredTids, categoryTids, userScores, tids_unread] = await Promise.all(stryMutAct_9fa48("3509") ? [] : (stryCov_9fa48("3509"), [getFollowedTids(params), user.getIgnoredTids(params.uid, 0, stryMutAct_9fa48("3510") ? +1 : (stryCov_9fa48("3510"), -1)), getCategoryTids(params), db.getSortedSetRevRangeByScoreWithScores(stryMutAct_9fa48("3511") ? `` : (stryCov_9fa48("3511"), `uid:${params.uid}:tids_read`), 0, stryMutAct_9fa48("3512") ? +1 : (stryCov_9fa48("3512"), -1), stryMutAct_9fa48("3513") ? "" : (stryCov_9fa48("3513"), '+inf'), params.cutoff), db.getSortedSetRevRangeWithScores(stryMutAct_9fa48("3514") ? `` : (stryCov_9fa48("3514"), `uid:${params.uid}:tids_unread`), 0, stryMutAct_9fa48("3515") ? +1 : (stryCov_9fa48("3515"), -1))]));
        const userReadTimes = _.mapValues(_.keyBy(userScores, stryMutAct_9fa48("3516") ? "" : (stryCov_9fa48("3516"), 'value')), stryMutAct_9fa48("3517") ? "" : (stryCov_9fa48("3517"), 'score'));
        const isTopicsFollowed = {};
        followedTids.forEach(t => {
          if (stryMutAct_9fa48("3518")) {
            {}
          } else {
            stryCov_9fa48("3518");
            isTopicsFollowed[t.value] = stryMutAct_9fa48("3519") ? false : (stryCov_9fa48("3519"), true);
          }
        });
        const unreadFollowed = await db.isSortedSetMembers(stryMutAct_9fa48("3520") ? `` : (stryCov_9fa48("3520"), `uid:${params.uid}:followed_tids`), tids_unread.map(stryMutAct_9fa48("3521") ? () => undefined : (stryCov_9fa48("3521"), t => t.value)));
        tids_unread.forEach((t, i) => {
          if (stryMutAct_9fa48("3522")) {
            {}
          } else {
            stryCov_9fa48("3522");
            isTopicsFollowed[t.value] = unreadFollowed[i];
          }
        });
        const unreadTopics = stryMutAct_9fa48("3524") ? _.unionWith(categoryTids, followedTids, (a, b) => a.value === b.value).concat(tids_unread.filter(t => !ignoredTids.includes(t.value))).sort((a, b) => b.score - a.score) : stryMutAct_9fa48("3523") ? _.unionWith(categoryTids, followedTids, (a, b) => a.value === b.value).filter(t => !ignoredTids.includes(t.value) && (!userReadTimes[t.value] || t.score > userReadTimes[t.value])).concat(tids_unread.filter(t => !ignoredTids.includes(t.value))) : (stryCov_9fa48("3523", "3524"), _.unionWith(categoryTids, followedTids, stryMutAct_9fa48("3525") ? () => undefined : (stryCov_9fa48("3525"), (a, b) => stryMutAct_9fa48("3528") ? a.value !== b.value : stryMutAct_9fa48("3527") ? false : stryMutAct_9fa48("3526") ? true : (stryCov_9fa48("3526", "3527", "3528"), a.value === b.value))).filter(stryMutAct_9fa48("3529") ? () => undefined : (stryCov_9fa48("3529"), t => stryMutAct_9fa48("3532") ? !ignoredTids.includes(t.value) || !userReadTimes[t.value] || t.score > userReadTimes[t.value] : stryMutAct_9fa48("3531") ? false : stryMutAct_9fa48("3530") ? true : (stryCov_9fa48("3530", "3531", "3532"), (stryMutAct_9fa48("3533") ? ignoredTids.includes(t.value) : (stryCov_9fa48("3533"), !ignoredTids.includes(t.value))) && (stryMutAct_9fa48("3535") ? !userReadTimes[t.value] && t.score > userReadTimes[t.value] : stryMutAct_9fa48("3534") ? true : (stryCov_9fa48("3534", "3535"), (stryMutAct_9fa48("3536") ? userReadTimes[t.value] : (stryCov_9fa48("3536"), !userReadTimes[t.value])) || (stryMutAct_9fa48("3539") ? t.score <= userReadTimes[t.value] : stryMutAct_9fa48("3538") ? t.score >= userReadTimes[t.value] : stryMutAct_9fa48("3537") ? false : (stryCov_9fa48("3537", "3538", "3539"), t.score > userReadTimes[t.value]))))))).concat(stryMutAct_9fa48("3540") ? tids_unread : (stryCov_9fa48("3540"), tids_unread.filter(stryMutAct_9fa48("3541") ? () => undefined : (stryCov_9fa48("3541"), t => stryMutAct_9fa48("3542") ? ignoredTids.includes(t.value) : (stryCov_9fa48("3542"), !ignoredTids.includes(t.value)))))).sort(stryMutAct_9fa48("3543") ? () => undefined : (stryCov_9fa48("3543"), (a, b) => stryMutAct_9fa48("3544") ? b.score + a.score : (stryCov_9fa48("3544"), b.score - a.score))));
        let tids = stryMutAct_9fa48("3545") ? _.uniq(unreadTopics.map(topic => topic.value)) : (stryCov_9fa48("3545"), _.uniq(unreadTopics.map(stryMutAct_9fa48("3546") ? () => undefined : (stryCov_9fa48("3546"), topic => topic.value))).slice(0, 200));
        if (stryMutAct_9fa48("3549") ? false : stryMutAct_9fa48("3548") ? true : stryMutAct_9fa48("3547") ? tids.length : (stryCov_9fa48("3547", "3548", "3549"), !tids.length)) {
          if (stryMutAct_9fa48("3550")) {
            {}
          } else {
            stryCov_9fa48("3550");
            return stryMutAct_9fa48("3551") ? {} : (stryCov_9fa48("3551"), {
              counts: counts,
              tids: tids,
              tidsByFilter: tidsByFilter
            });
          }
        }
        const blockedUids = await user.blocks.list(params.uid);
        tids = await filterTidsThatHaveBlockedPosts(stryMutAct_9fa48("3552") ? {} : (stryCov_9fa48("3552"), {
          uid: params.uid,
          tids: tids,
          blockedUids: blockedUids,
          recentTids: categoryTids
        }));
        tids = await privileges.topics.filterTids(stryMutAct_9fa48("3553") ? "" : (stryCov_9fa48("3553"), 'topics:read'), tids, params.uid);
        const topicData = stryMutAct_9fa48("3554") ? await Topics.getTopicsFields(tids, ['tid', 'cid', 'uid', 'postcount', 'deleted', 'scheduled']) : (stryCov_9fa48("3554"), (await Topics.getTopicsFields(tids, stryMutAct_9fa48("3555") ? [] : (stryCov_9fa48("3555"), [stryMutAct_9fa48("3556") ? "" : (stryCov_9fa48("3556"), 'tid'), stryMutAct_9fa48("3557") ? "" : (stryCov_9fa48("3557"), 'cid'), stryMutAct_9fa48("3558") ? "" : (stryCov_9fa48("3558"), 'uid'), stryMutAct_9fa48("3559") ? "" : (stryCov_9fa48("3559"), 'postcount'), stryMutAct_9fa48("3560") ? "" : (stryCov_9fa48("3560"), 'deleted'), stryMutAct_9fa48("3561") ? "" : (stryCov_9fa48("3561"), 'scheduled')]))).filter(stryMutAct_9fa48("3562") ? () => undefined : (stryCov_9fa48("3562"), t => stryMutAct_9fa48("3565") ? t.scheduled && !t.deleted : stryMutAct_9fa48("3564") ? false : stryMutAct_9fa48("3563") ? true : (stryCov_9fa48("3563", "3564", "3565"), t.scheduled || (stryMutAct_9fa48("3566") ? t.deleted : (stryCov_9fa48("3566"), !t.deleted))))));
        const topicCids = stryMutAct_9fa48("3567") ? _.uniq(topicData.map(topic => topic.cid)) : (stryCov_9fa48("3567"), _.uniq(topicData.map(stryMutAct_9fa48("3568") ? () => undefined : (stryCov_9fa48("3568"), topic => topic.cid))).filter(Boolean));
        const categoryWatchState = await categories.getWatchState(topicCids, params.uid);
        const userCidState = _.zipObject(topicCids, categoryWatchState);
        const filterCids = stryMutAct_9fa48("3571") ? params.cid || params.cid.map(cid => parseInt(cid, 10)) : stryMutAct_9fa48("3570") ? false : stryMutAct_9fa48("3569") ? true : (stryCov_9fa48("3569", "3570", "3571"), params.cid && params.cid.map(stryMutAct_9fa48("3572") ? () => undefined : (stryCov_9fa48("3572"), cid => parseInt(cid, 10))));
        topicData.forEach(topic => {
          if (stryMutAct_9fa48("3573")) {
            {}
          } else {
            stryCov_9fa48("3573");
            if (stryMutAct_9fa48("3576") ? topic && topic.cid && (!filterCids || filterCids.includes(topic.cid)) || !blockedUids.includes(topic.uid) : stryMutAct_9fa48("3575") ? false : stryMutAct_9fa48("3574") ? true : (stryCov_9fa48("3574", "3575", "3576"), (stryMutAct_9fa48("3578") ? topic && topic.cid || !filterCids || filterCids.includes(topic.cid) : stryMutAct_9fa48("3577") ? true : (stryCov_9fa48("3577", "3578"), (stryMutAct_9fa48("3580") ? topic || topic.cid : stryMutAct_9fa48("3579") ? true : (stryCov_9fa48("3579", "3580"), topic && topic.cid)) && (stryMutAct_9fa48("3582") ? !filterCids && filterCids.includes(topic.cid) : stryMutAct_9fa48("3581") ? true : (stryCov_9fa48("3581", "3582"), (stryMutAct_9fa48("3583") ? filterCids : (stryCov_9fa48("3583"), !filterCids)) || filterCids.includes(topic.cid))))) && (stryMutAct_9fa48("3584") ? blockedUids.includes(topic.uid) : (stryCov_9fa48("3584"), !blockedUids.includes(topic.uid))))) {
              if (stryMutAct_9fa48("3585")) {
                {}
              } else {
                stryCov_9fa48("3585");
                if (stryMutAct_9fa48("3588") ? isTopicsFollowed[topic.tid] && userCidState[topic.cid] === categories.watchStates.watching : stryMutAct_9fa48("3587") ? false : stryMutAct_9fa48("3586") ? true : (stryCov_9fa48("3586", "3587", "3588"), isTopicsFollowed[topic.tid] || (stryMutAct_9fa48("3590") ? userCidState[topic.cid] !== categories.watchStates.watching : stryMutAct_9fa48("3589") ? false : (stryCov_9fa48("3589", "3590"), userCidState[topic.cid] === categories.watchStates.watching)))) {
                  if (stryMutAct_9fa48("3591")) {
                    {}
                  } else {
                    stryCov_9fa48("3591");
                    tidsByFilter[stryMutAct_9fa48("3592") ? "Stryker was here!" : (stryCov_9fa48("3592"), '')].push(topic.tid);
                  }
                }
                if (stryMutAct_9fa48("3594") ? false : stryMutAct_9fa48("3593") ? true : (stryCov_9fa48("3593", "3594"), isTopicsFollowed[topic.tid])) {
                  if (stryMutAct_9fa48("3595")) {
                    {}
                  } else {
                    stryCov_9fa48("3595");
                    tidsByFilter.watched.push(topic.tid);
                  }
                }
                if (stryMutAct_9fa48("3599") ? topic.postcount > 1 : stryMutAct_9fa48("3598") ? topic.postcount < 1 : stryMutAct_9fa48("3597") ? false : stryMutAct_9fa48("3596") ? true : (stryCov_9fa48("3596", "3597", "3598", "3599"), topic.postcount <= 1)) {
                  if (stryMutAct_9fa48("3600")) {
                    {}
                  } else {
                    stryCov_9fa48("3600");
                    tidsByFilter.unreplied.push(topic.tid);
                  }
                }
                if (stryMutAct_9fa48("3603") ? false : stryMutAct_9fa48("3602") ? true : stryMutAct_9fa48("3601") ? userReadTimes[topic.tid] : (stryCov_9fa48("3601", "3602", "3603"), !userReadTimes[topic.tid])) {
                  if (stryMutAct_9fa48("3604")) {
                    {}
                  } else {
                    stryCov_9fa48("3604");
                    tidsByFilter.new.push(topic.tid);
                  }
                }
              }
            }
          }
        });
        counts[stryMutAct_9fa48("3605") ? "Stryker was here!" : (stryCov_9fa48("3605"), '')] = tidsByFilter[stryMutAct_9fa48("3606") ? "Stryker was here!" : (stryCov_9fa48("3606"), '')].length;
        counts.watched = tidsByFilter.watched.length;
        counts.unreplied = tidsByFilter.unreplied.length;
        counts.new = tidsByFilter.new.length;
        return stryMutAct_9fa48("3607") ? {} : (stryCov_9fa48("3607"), {
          counts: counts,
          tids: tidsByFilter[params.filter],
          tidsByFilter: tidsByFilter
        });
      }
    }
    async function getCategoryTids(params) {
      if (stryMutAct_9fa48("3608")) {
        {}
      } else {
        stryCov_9fa48("3608");
        if (stryMutAct_9fa48("3610") ? false : stryMutAct_9fa48("3609") ? true : (stryCov_9fa48("3609", "3610"), plugins.hooks.hasListeners(stryMutAct_9fa48("3611") ? "" : (stryCov_9fa48("3611"), 'filter:topics.unread.getCategoryTids')))) {
          if (stryMutAct_9fa48("3612")) {
            {}
          } else {
            stryCov_9fa48("3612");
            const result = await plugins.hooks.fire(stryMutAct_9fa48("3613") ? "" : (stryCov_9fa48("3613"), 'filter:topics.unread.getCategoryTids'), stryMutAct_9fa48("3614") ? {} : (stryCov_9fa48("3614"), {
              params: params,
              tids: stryMutAct_9fa48("3615") ? ["Stryker was here"] : (stryCov_9fa48("3615"), [])
            }));
            return result.tids;
          }
        }
        if (stryMutAct_9fa48("3618") ? params.filter !== 'watched' : stryMutAct_9fa48("3617") ? false : stryMutAct_9fa48("3616") ? true : (stryCov_9fa48("3616", "3617", "3618"), params.filter === (stryMutAct_9fa48("3619") ? "" : (stryCov_9fa48("3619"), 'watched')))) {
          if (stryMutAct_9fa48("3620")) {
            {}
          } else {
            stryCov_9fa48("3620");
            return stryMutAct_9fa48("3621") ? ["Stryker was here"] : (stryCov_9fa48("3621"), []);
          }
        }
        const cids = stryMutAct_9fa48("3624") ? params.cid && (await user.getWatchedCategories(params.uid)) : stryMutAct_9fa48("3623") ? false : stryMutAct_9fa48("3622") ? true : (stryCov_9fa48("3622", "3623", "3624"), params.cid || (await user.getWatchedCategories(params.uid)));
        const keys = cids.map(stryMutAct_9fa48("3625") ? () => undefined : (stryCov_9fa48("3625"), cid => stryMutAct_9fa48("3626") ? `` : (stryCov_9fa48("3626"), `cid:${cid}:tids:lastposttime`)));
        return await db.getSortedSetRevRangeByScoreWithScores(keys, 0, stryMutAct_9fa48("3627") ? +1 : (stryCov_9fa48("3627"), -1), stryMutAct_9fa48("3628") ? "" : (stryCov_9fa48("3628"), '+inf'), params.cutoff);
      }
    }
    async function getFollowedTids(params) {
      if (stryMutAct_9fa48("3629")) {
        {}
      } else {
        stryCov_9fa48("3629");
        let tids = await db.getSortedSetMembers(stryMutAct_9fa48("3630") ? `` : (stryCov_9fa48("3630"), `uid:${params.uid}:followed_tids`));
        const filterCids = stryMutAct_9fa48("3633") ? params.cid || params.cid.map(cid => parseInt(cid, 10)) : stryMutAct_9fa48("3632") ? false : stryMutAct_9fa48("3631") ? true : (stryCov_9fa48("3631", "3632", "3633"), params.cid && params.cid.map(stryMutAct_9fa48("3634") ? () => undefined : (stryCov_9fa48("3634"), cid => parseInt(cid, 10))));
        if (stryMutAct_9fa48("3636") ? false : stryMutAct_9fa48("3635") ? true : (stryCov_9fa48("3635", "3636"), filterCids)) {
          if (stryMutAct_9fa48("3637")) {
            {}
          } else {
            stryCov_9fa48("3637");
            const topicData = await Topics.getTopicsFields(tids, stryMutAct_9fa48("3638") ? [] : (stryCov_9fa48("3638"), [stryMutAct_9fa48("3639") ? "" : (stryCov_9fa48("3639"), 'tid'), stryMutAct_9fa48("3640") ? "" : (stryCov_9fa48("3640"), 'cid')]));
            tids = stryMutAct_9fa48("3641") ? topicData.map(t => t.tid) : (stryCov_9fa48("3641"), topicData.filter(stryMutAct_9fa48("3642") ? () => undefined : (stryCov_9fa48("3642"), t => filterCids.includes(t.cid))).map(stryMutAct_9fa48("3643") ? () => undefined : (stryCov_9fa48("3643"), t => t.tid)));
          }
        }
        const scores = await db.sortedSetScores(stryMutAct_9fa48("3644") ? "" : (stryCov_9fa48("3644"), 'topics:recent'), tids);
        const data = tids.map(stryMutAct_9fa48("3645") ? () => undefined : (stryCov_9fa48("3645"), (tid, index) => stryMutAct_9fa48("3646") ? {} : (stryCov_9fa48("3646"), {
          value: String(tid),
          score: scores[index]
        })));
        return stryMutAct_9fa48("3647") ? data : (stryCov_9fa48("3647"), data.filter(stryMutAct_9fa48("3648") ? () => undefined : (stryCov_9fa48("3648"), item => stryMutAct_9fa48("3652") ? item.score <= params.cutoff : stryMutAct_9fa48("3651") ? item.score >= params.cutoff : stryMutAct_9fa48("3650") ? false : stryMutAct_9fa48("3649") ? true : (stryCov_9fa48("3649", "3650", "3651", "3652"), item.score > params.cutoff))));
      }
    }
    async function filterTidsThatHaveBlockedPosts(params) {
      if (stryMutAct_9fa48("3653")) {
        {}
      } else {
        stryCov_9fa48("3653");
        if (stryMutAct_9fa48("3656") ? false : stryMutAct_9fa48("3655") ? true : stryMutAct_9fa48("3654") ? params.blockedUids.length : (stryCov_9fa48("3654", "3655", "3656"), !params.blockedUids.length)) {
          if (stryMutAct_9fa48("3657")) {
            {}
          } else {
            stryCov_9fa48("3657");
            return params.tids;
          }
        }
        const topicScores = _.mapValues(_.keyBy(params.recentTids, stryMutAct_9fa48("3658") ? "" : (stryCov_9fa48("3658"), 'value')), stryMutAct_9fa48("3659") ? "" : (stryCov_9fa48("3659"), 'score'));
        const results = await db.sortedSetScores(stryMutAct_9fa48("3660") ? `` : (stryCov_9fa48("3660"), `uid:${params.uid}:tids_read`), params.tids);
        const userScores = _.zipObject(params.tids, results);
        return await (stryMutAct_9fa48("3661") ? async : (stryCov_9fa48("3661"), async.filter(params.tids, stryMutAct_9fa48("3662") ? () => undefined : (stryCov_9fa48("3662"), async tid => await doesTidHaveUnblockedUnreadPosts(tid, stryMutAct_9fa48("3663") ? {} : (stryCov_9fa48("3663"), {
          blockedUids: params.blockedUids,
          topicTimestamp: topicScores[tid],
          userLastReadTimestamp: userScores[tid]
        }))))));
      }
    }
    async function doesTidHaveUnblockedUnreadPosts(tid, params) {
      if (stryMutAct_9fa48("3664")) {
        {}
      } else {
        stryCov_9fa48("3664");
        const {
          userLastReadTimestamp
        } = params;
        if (stryMutAct_9fa48("3667") ? false : stryMutAct_9fa48("3666") ? true : stryMutAct_9fa48("3665") ? userLastReadTimestamp : (stryCov_9fa48("3665", "3666", "3667"), !userLastReadTimestamp)) {
          if (stryMutAct_9fa48("3668")) {
            {}
          } else {
            stryCov_9fa48("3668");
            return stryMutAct_9fa48("3669") ? false : (stryCov_9fa48("3669"), true);
          }
        }
        let start = 0;
        const count = 3;
        let done = stryMutAct_9fa48("3670") ? true : (stryCov_9fa48("3670"), false);
        let hasUnblockedUnread = stryMutAct_9fa48("3674") ? params.topicTimestamp <= userLastReadTimestamp : stryMutAct_9fa48("3673") ? params.topicTimestamp >= userLastReadTimestamp : stryMutAct_9fa48("3672") ? false : stryMutAct_9fa48("3671") ? true : (stryCov_9fa48("3671", "3672", "3673", "3674"), params.topicTimestamp > userLastReadTimestamp);
        if (stryMutAct_9fa48("3677") ? false : stryMutAct_9fa48("3676") ? true : stryMutAct_9fa48("3675") ? params.blockedUids.length : (stryCov_9fa48("3675", "3676", "3677"), !params.blockedUids.length)) {
          if (stryMutAct_9fa48("3678")) {
            {}
          } else {
            stryCov_9fa48("3678");
            return hasUnblockedUnread;
          }
        }
        while (stryMutAct_9fa48("3680") ? false : stryMutAct_9fa48("3679") ? done : (stryCov_9fa48("3679", "3680"), !done)) {
          if (stryMutAct_9fa48("3681")) {
            {}
          } else {
            stryCov_9fa48("3681");
            /* eslint-disable no-await-in-loop */
            const pidsSinceLastVisit = await db.getSortedSetRangeByScore(stryMutAct_9fa48("3682") ? `` : (stryCov_9fa48("3682"), `tid:${tid}:posts`), start, count, userLastReadTimestamp, stryMutAct_9fa48("3683") ? "" : (stryCov_9fa48("3683"), '+inf'));
            if (stryMutAct_9fa48("3686") ? false : stryMutAct_9fa48("3685") ? true : stryMutAct_9fa48("3684") ? pidsSinceLastVisit.length : (stryCov_9fa48("3684", "3685", "3686"), !pidsSinceLastVisit.length)) {
              if (stryMutAct_9fa48("3687")) {
                {}
              } else {
                stryCov_9fa48("3687");
                return hasUnblockedUnread;
              }
            }
            let postData = await posts.getPostsFields(pidsSinceLastVisit, stryMutAct_9fa48("3688") ? [] : (stryCov_9fa48("3688"), [stryMutAct_9fa48("3689") ? "" : (stryCov_9fa48("3689"), 'pid'), stryMutAct_9fa48("3690") ? "" : (stryCov_9fa48("3690"), 'uid')]));
            postData = stryMutAct_9fa48("3691") ? postData : (stryCov_9fa48("3691"), postData.filter(stryMutAct_9fa48("3692") ? () => undefined : (stryCov_9fa48("3692"), post => stryMutAct_9fa48("3693") ? params.blockedUids.includes(parseInt(post.uid, 10)) : (stryCov_9fa48("3693"), !params.blockedUids.includes(parseInt(post.uid, 10))))));
            done = stryMutAct_9fa48("3697") ? postData.length <= 0 : stryMutAct_9fa48("3696") ? postData.length >= 0 : stryMutAct_9fa48("3695") ? false : stryMutAct_9fa48("3694") ? true : (stryCov_9fa48("3694", "3695", "3696", "3697"), postData.length > 0);
            hasUnblockedUnread = stryMutAct_9fa48("3701") ? postData.length <= 0 : stryMutAct_9fa48("3700") ? postData.length >= 0 : stryMutAct_9fa48("3699") ? false : stryMutAct_9fa48("3698") ? true : (stryCov_9fa48("3698", "3699", "3700", "3701"), postData.length > 0);
            stryMutAct_9fa48("3702") ? start -= count : (stryCov_9fa48("3702"), start += count);
          }
        }
        return hasUnblockedUnread;
      }
    }
    Topics.pushUnreadCount = async function (uid) {
      if (stryMutAct_9fa48("3703")) {
        {}
      } else {
        stryCov_9fa48("3703");
        if (stryMutAct_9fa48("3706") ? !uid && parseInt(uid, 10) <= 0 : stryMutAct_9fa48("3705") ? false : stryMutAct_9fa48("3704") ? true : (stryCov_9fa48("3704", "3705", "3706"), (stryMutAct_9fa48("3707") ? uid : (stryCov_9fa48("3707"), !uid)) || (stryMutAct_9fa48("3710") ? parseInt(uid, 10) > 0 : stryMutAct_9fa48("3709") ? parseInt(uid, 10) < 0 : stryMutAct_9fa48("3708") ? false : (stryCov_9fa48("3708", "3709", "3710"), parseInt(uid, 10) <= 0)))) {
          if (stryMutAct_9fa48("3711")) {
            {}
          } else {
            stryCov_9fa48("3711");
            return;
          }
        }
        const results = await Topics.getUnreadTids(stryMutAct_9fa48("3712") ? {} : (stryCov_9fa48("3712"), {
          uid: uid,
          count: stryMutAct_9fa48("3713") ? false : (stryCov_9fa48("3713"), true)
        }));
        require('../socket.io').in(stryMutAct_9fa48("3714") ? `` : (stryCov_9fa48("3714"), `uid_${uid}`)).emit(stryMutAct_9fa48("3715") ? "" : (stryCov_9fa48("3715"), 'event:unread.updateCount'), stryMutAct_9fa48("3716") ? {} : (stryCov_9fa48("3716"), {
          unreadTopicCount: results[stryMutAct_9fa48("3717") ? "Stryker was here!" : (stryCov_9fa48("3717"), '')],
          unreadNewTopicCount: results.new,
          unreadWatchedTopicCount: results.watched,
          unreadUnrepliedTopicCount: results.unreplied
        }));
      }
    };
    Topics.markAsUnreadForAll = async function (tid) {
      if (stryMutAct_9fa48("3718")) {
        {}
      } else {
        stryCov_9fa48("3718");
        await Topics.markCategoryUnreadForAll(tid);
      }
    };
    Topics.markAsRead = async function (tids, uid) {
      if (stryMutAct_9fa48("3719")) {
        {}
      } else {
        stryCov_9fa48("3719");
        if (stryMutAct_9fa48("3722") ? !Array.isArray(tids) && !tids.length : stryMutAct_9fa48("3721") ? false : stryMutAct_9fa48("3720") ? true : (stryCov_9fa48("3720", "3721", "3722"), (stryMutAct_9fa48("3723") ? Array.isArray(tids) : (stryCov_9fa48("3723"), !Array.isArray(tids))) || (stryMutAct_9fa48("3724") ? tids.length : (stryCov_9fa48("3724"), !tids.length)))) {
          if (stryMutAct_9fa48("3725")) {
            {}
          } else {
            stryCov_9fa48("3725");
            return stryMutAct_9fa48("3726") ? true : (stryCov_9fa48("3726"), false);
          }
        }
        tids = stryMutAct_9fa48("3727") ? _.uniq(tids) : (stryCov_9fa48("3727"), _.uniq(tids).filter(stryMutAct_9fa48("3728") ? () => undefined : (stryCov_9fa48("3728"), tid => stryMutAct_9fa48("3731") ? tid || utils.isNumber(tid) : stryMutAct_9fa48("3730") ? false : stryMutAct_9fa48("3729") ? true : (stryCov_9fa48("3729", "3730", "3731"), tid && utils.isNumber(tid)))));
        if (stryMutAct_9fa48("3734") ? false : stryMutAct_9fa48("3733") ? true : stryMutAct_9fa48("3732") ? tids.length : (stryCov_9fa48("3732", "3733", "3734"), !tids.length)) {
          if (stryMutAct_9fa48("3735")) {
            {}
          } else {
            stryCov_9fa48("3735");
            return stryMutAct_9fa48("3736") ? true : (stryCov_9fa48("3736"), false);
          }
        }
        const [topicScores, userScores] = await Promise.all(stryMutAct_9fa48("3737") ? [] : (stryCov_9fa48("3737"), [Topics.getTopicsFields(tids, stryMutAct_9fa48("3738") ? [] : (stryCov_9fa48("3738"), [stryMutAct_9fa48("3739") ? "" : (stryCov_9fa48("3739"), 'tid'), stryMutAct_9fa48("3740") ? "" : (stryCov_9fa48("3740"), 'lastposttime'), stryMutAct_9fa48("3741") ? "" : (stryCov_9fa48("3741"), 'scheduled')])), db.sortedSetScores(stryMutAct_9fa48("3742") ? `` : (stryCov_9fa48("3742"), `uid:${uid}:tids_read`), tids)]));
        const topics = stryMutAct_9fa48("3743") ? topicScores : (stryCov_9fa48("3743"), topicScores.filter(stryMutAct_9fa48("3744") ? () => undefined : (stryCov_9fa48("3744"), (t, i) => stryMutAct_9fa48("3747") ? t.lastposttime || !userScores[i] || userScores[i] < t.lastposttime : stryMutAct_9fa48("3746") ? false : stryMutAct_9fa48("3745") ? true : (stryCov_9fa48("3745", "3746", "3747"), t.lastposttime && (stryMutAct_9fa48("3749") ? !userScores[i] && userScores[i] < t.lastposttime : stryMutAct_9fa48("3748") ? true : (stryCov_9fa48("3748", "3749"), (stryMutAct_9fa48("3750") ? userScores[i] : (stryCov_9fa48("3750"), !userScores[i])) || (stryMutAct_9fa48("3753") ? userScores[i] >= t.lastposttime : stryMutAct_9fa48("3752") ? userScores[i] <= t.lastposttime : stryMutAct_9fa48("3751") ? false : (stryCov_9fa48("3751", "3752", "3753"), userScores[i] < t.lastposttime))))))));
        tids = topics.map(stryMutAct_9fa48("3754") ? () => undefined : (stryCov_9fa48("3754"), t => t.tid));
        if (stryMutAct_9fa48("3757") ? false : stryMutAct_9fa48("3756") ? true : stryMutAct_9fa48("3755") ? tids.length : (stryCov_9fa48("3755", "3756", "3757"), !tids.length)) {
          if (stryMutAct_9fa48("3758")) {
            {}
          } else {
            stryCov_9fa48("3758");
            return stryMutAct_9fa48("3759") ? true : (stryCov_9fa48("3759"), false);
          }
        }
        const now = Date.now();
        const scores = topics.map(stryMutAct_9fa48("3760") ? () => undefined : (stryCov_9fa48("3760"), topic => topic.scheduled ? topic.lastposttime : now));
        const [topicData] = await Promise.all(stryMutAct_9fa48("3761") ? [] : (stryCov_9fa48("3761"), [Topics.getTopicsFields(tids, stryMutAct_9fa48("3762") ? [] : (stryCov_9fa48("3762"), [stryMutAct_9fa48("3763") ? "" : (stryCov_9fa48("3763"), 'cid')])), db.sortedSetAdd(stryMutAct_9fa48("3764") ? `` : (stryCov_9fa48("3764"), `uid:${uid}:tids_read`), scores, tids), db.sortedSetRemove(stryMutAct_9fa48("3765") ? `` : (stryCov_9fa48("3765"), `uid:${uid}:tids_unread`), tids)]));
        const cids = _.uniq(stryMutAct_9fa48("3766") ? topicData.map(t => t && t.cid) : (stryCov_9fa48("3766"), topicData.map(stryMutAct_9fa48("3767") ? () => undefined : (stryCov_9fa48("3767"), t => stryMutAct_9fa48("3770") ? t || t.cid : stryMutAct_9fa48("3769") ? false : stryMutAct_9fa48("3768") ? true : (stryCov_9fa48("3768", "3769", "3770"), t && t.cid))).filter(Boolean)));
        await categories.markAsRead(cids, uid);
        plugins.hooks.fire(stryMutAct_9fa48("3771") ? "" : (stryCov_9fa48("3771"), 'action:topics.markAsRead'), stryMutAct_9fa48("3772") ? {} : (stryCov_9fa48("3772"), {
          uid: uid,
          tids: tids
        }));
        return stryMutAct_9fa48("3773") ? false : (stryCov_9fa48("3773"), true);
      }
    };
    Topics.markAllRead = async function (uid) {
      if (stryMutAct_9fa48("3774")) {
        {}
      } else {
        stryCov_9fa48("3774");
        const cutoff = await Topics.unreadCutoff(uid);
        const tids = await db.getSortedSetRevRangeByScore(stryMutAct_9fa48("3775") ? "" : (stryCov_9fa48("3775"), 'topics:recent'), 0, stryMutAct_9fa48("3776") ? +1 : (stryCov_9fa48("3776"), -1), stryMutAct_9fa48("3777") ? "" : (stryCov_9fa48("3777"), '+inf'), cutoff);
        Topics.markTopicNotificationsRead(tids, uid);
        await Topics.markAsRead(tids, uid);
        await db.delete(stryMutAct_9fa48("3778") ? `` : (stryCov_9fa48("3778"), `uid:${uid}:tids_unread`));
      }
    };
    Topics.markTopicNotificationsRead = async function (tids, uid) {
      if (stryMutAct_9fa48("3779")) {
        {}
      } else {
        stryCov_9fa48("3779");
        if (stryMutAct_9fa48("3782") ? !Array.isArray(tids) && !tids.length : stryMutAct_9fa48("3781") ? false : stryMutAct_9fa48("3780") ? true : (stryCov_9fa48("3780", "3781", "3782"), (stryMutAct_9fa48("3783") ? Array.isArray(tids) : (stryCov_9fa48("3783"), !Array.isArray(tids))) || (stryMutAct_9fa48("3784") ? tids.length : (stryCov_9fa48("3784"), !tids.length)))) {
          if (stryMutAct_9fa48("3785")) {
            {}
          } else {
            stryCov_9fa48("3785");
            return;
          }
        }
        const nids = await user.notifications.getUnreadByField(uid, stryMutAct_9fa48("3786") ? "" : (stryCov_9fa48("3786"), 'tid'), tids);
        await notifications.markReadMultiple(nids, uid);
        user.notifications.pushCount(uid);
      }
    };
    Topics.markCategoryUnreadForAll = async function (tid) {
      if (stryMutAct_9fa48("3787")) {
        {}
      } else {
        stryCov_9fa48("3787");
        const cid = await Topics.getTopicField(tid, stryMutAct_9fa48("3788") ? "" : (stryCov_9fa48("3788"), 'cid'));
        await categories.markAsUnreadForAll(cid);
      }
    };
    Topics.hasReadTopics = async function (tids, uid) {
      if (stryMutAct_9fa48("3789")) {
        {}
      } else {
        stryCov_9fa48("3789");
        if (stryMutAct_9fa48("3792") ? false : stryMutAct_9fa48("3791") ? true : stryMutAct_9fa48("3790") ? parseInt(uid, 10) > 0 : (stryCov_9fa48("3790", "3791", "3792"), !(stryMutAct_9fa48("3796") ? parseInt(uid, 10) <= 0 : stryMutAct_9fa48("3795") ? parseInt(uid, 10) >= 0 : stryMutAct_9fa48("3794") ? false : stryMutAct_9fa48("3793") ? true : (stryCov_9fa48("3793", "3794", "3795", "3796"), parseInt(uid, 10) > 0)))) {
          if (stryMutAct_9fa48("3797")) {
            {}
          } else {
            stryCov_9fa48("3797");
            return tids.map(stryMutAct_9fa48("3798") ? () => undefined : (stryCov_9fa48("3798"), () => stryMutAct_9fa48("3799") ? true : (stryCov_9fa48("3799"), false)));
          }
        }
        const [topicScores, userScores, tids_unread, blockedUids] = await Promise.all(stryMutAct_9fa48("3800") ? [] : (stryCov_9fa48("3800"), [db.sortedSetScores(stryMutAct_9fa48("3801") ? "" : (stryCov_9fa48("3801"), 'topics:recent'), tids), db.sortedSetScores(stryMutAct_9fa48("3802") ? `` : (stryCov_9fa48("3802"), `uid:${uid}:tids_read`), tids), db.sortedSetScores(stryMutAct_9fa48("3803") ? `` : (stryCov_9fa48("3803"), `uid:${uid}:tids_unread`), tids), user.blocks.list(uid)]));
        const cutoff = await Topics.unreadCutoff(uid);
        const result = tids.map((tid, index) => {
          if (stryMutAct_9fa48("3804")) {
            {}
          } else {
            stryCov_9fa48("3804");
            const read = stryMutAct_9fa48("3807") ? !tids_unread[index] || topicScores[index] < cutoff || !!(userScores[index] && userScores[index] >= topicScores[index]) : stryMutAct_9fa48("3806") ? false : stryMutAct_9fa48("3805") ? true : (stryCov_9fa48("3805", "3806", "3807"), (stryMutAct_9fa48("3808") ? tids_unread[index] : (stryCov_9fa48("3808"), !tids_unread[index])) && (stryMutAct_9fa48("3810") ? topicScores[index] < cutoff && !!(userScores[index] && userScores[index] >= topicScores[index]) : stryMutAct_9fa48("3809") ? true : (stryCov_9fa48("3809", "3810"), (stryMutAct_9fa48("3813") ? topicScores[index] >= cutoff : stryMutAct_9fa48("3812") ? topicScores[index] <= cutoff : stryMutAct_9fa48("3811") ? false : (stryCov_9fa48("3811", "3812", "3813"), topicScores[index] < cutoff)) || (stryMutAct_9fa48("3814") ? !(userScores[index] && userScores[index] >= topicScores[index]) : (stryCov_9fa48("3814"), !(stryMutAct_9fa48("3815") ? userScores[index] && userScores[index] >= topicScores[index] : (stryCov_9fa48("3815"), !(stryMutAct_9fa48("3818") ? userScores[index] || userScores[index] >= topicScores[index] : stryMutAct_9fa48("3817") ? false : stryMutAct_9fa48("3816") ? true : (stryCov_9fa48("3816", "3817", "3818"), userScores[index] && (stryMutAct_9fa48("3821") ? userScores[index] < topicScores[index] : stryMutAct_9fa48("3820") ? userScores[index] > topicScores[index] : stryMutAct_9fa48("3819") ? true : (stryCov_9fa48("3819", "3820", "3821"), userScores[index] >= topicScores[index])))))))))));
            return stryMutAct_9fa48("3822") ? {} : (stryCov_9fa48("3822"), {
              tid: tid,
              read: read,
              index: index
            });
          }
        });
        return await async.map(result, async data => {
          if (stryMutAct_9fa48("3823")) {
            {}
          } else {
            stryCov_9fa48("3823");
            if (stryMutAct_9fa48("3825") ? false : stryMutAct_9fa48("3824") ? true : (stryCov_9fa48("3824", "3825"), data.read)) {
              if (stryMutAct_9fa48("3826")) {
                {}
              } else {
                stryCov_9fa48("3826");
                return stryMutAct_9fa48("3827") ? false : (stryCov_9fa48("3827"), true);
              }
            }
            const hasUnblockedUnread = await doesTidHaveUnblockedUnreadPosts(data.tid, stryMutAct_9fa48("3828") ? {} : (stryCov_9fa48("3828"), {
              topicTimestamp: topicScores[data.index],
              userLastReadTimestamp: userScores[data.index],
              blockedUids: blockedUids
            }));
            if (stryMutAct_9fa48("3831") ? false : stryMutAct_9fa48("3830") ? true : stryMutAct_9fa48("3829") ? hasUnblockedUnread : (stryCov_9fa48("3829", "3830", "3831"), !hasUnblockedUnread)) {
              if (stryMutAct_9fa48("3832")) {
                {}
              } else {
                stryCov_9fa48("3832");
                data.read = stryMutAct_9fa48("3833") ? false : (stryCov_9fa48("3833"), true);
              }
            }
            return data.read;
          }
        });
      }
    };
    Topics.hasReadTopic = async function (tid, uid) {
      if (stryMutAct_9fa48("3834")) {
        {}
      } else {
        stryCov_9fa48("3834");
        const hasRead = await Topics.hasReadTopics(stryMutAct_9fa48("3835") ? [] : (stryCov_9fa48("3835"), [tid]), uid);
        return (stryMutAct_9fa48("3838") ? Array.isArray(hasRead) || hasRead.length : stryMutAct_9fa48("3837") ? false : stryMutAct_9fa48("3836") ? true : (stryCov_9fa48("3836", "3837", "3838"), Array.isArray(hasRead) && hasRead.length)) ? hasRead[0] : stryMutAct_9fa48("3839") ? true : (stryCov_9fa48("3839"), false);
      }
    };
    Topics.markUnread = async function (tid, uid) {
      if (stryMutAct_9fa48("3840")) {
        {}
      } else {
        stryCov_9fa48("3840");
        const exists = await Topics.exists(tid);
        if (stryMutAct_9fa48("3843") ? false : stryMutAct_9fa48("3842") ? true : stryMutAct_9fa48("3841") ? exists : (stryCov_9fa48("3841", "3842", "3843"), !exists)) {
          if (stryMutAct_9fa48("3844")) {
            {}
          } else {
            stryCov_9fa48("3844");
            throw new Error(stryMutAct_9fa48("3845") ? "" : (stryCov_9fa48("3845"), '[[error:no-topic]]'));
          }
        }
        await db.sortedSetRemove(stryMutAct_9fa48("3846") ? `` : (stryCov_9fa48("3846"), `uid:${uid}:tids_read`), tid);
        await db.sortedSetAdd(stryMutAct_9fa48("3847") ? `` : (stryCov_9fa48("3847"), `uid:${uid}:tids_unread`), Date.now(), tid);
      }
    };
    Topics.filterNewTids = async function (tids, uid) {
      if (stryMutAct_9fa48("3848")) {
        {}
      } else {
        stryCov_9fa48("3848");
        if (stryMutAct_9fa48("3852") ? parseInt(uid, 10) > 0 : stryMutAct_9fa48("3851") ? parseInt(uid, 10) < 0 : stryMutAct_9fa48("3850") ? false : stryMutAct_9fa48("3849") ? true : (stryCov_9fa48("3849", "3850", "3851", "3852"), parseInt(uid, 10) <= 0)) {
          if (stryMutAct_9fa48("3853")) {
            {}
          } else {
            stryCov_9fa48("3853");
            return stryMutAct_9fa48("3854") ? ["Stryker was here"] : (stryCov_9fa48("3854"), []);
          }
        }
        const scores = await db.sortedSetScores(stryMutAct_9fa48("3855") ? `` : (stryCov_9fa48("3855"), `uid:${uid}:tids_read`), tids);
        return stryMutAct_9fa48("3856") ? tids : (stryCov_9fa48("3856"), tids.filter(stryMutAct_9fa48("3857") ? () => undefined : (stryCov_9fa48("3857"), (tid, index) => stryMutAct_9fa48("3860") ? tid || !scores[index] : stryMutAct_9fa48("3859") ? false : stryMutAct_9fa48("3858") ? true : (stryCov_9fa48("3858", "3859", "3860"), tid && (stryMutAct_9fa48("3861") ? scores[index] : (stryCov_9fa48("3861"), !scores[index]))))));
      }
    };
    Topics.filterUnrepliedTids = async function (tids) {
      if (stryMutAct_9fa48("3862")) {
        {}
      } else {
        stryCov_9fa48("3862");
        const scores = await db.sortedSetScores(stryMutAct_9fa48("3863") ? "" : (stryCov_9fa48("3863"), 'topics:posts'), tids);
        return stryMutAct_9fa48("3864") ? tids : (stryCov_9fa48("3864"), tids.filter(stryMutAct_9fa48("3865") ? () => undefined : (stryCov_9fa48("3865"), (tid, index) => stryMutAct_9fa48("3868") ? tid && scores[index] !== null || scores[index] <= 1 : stryMutAct_9fa48("3867") ? false : stryMutAct_9fa48("3866") ? true : (stryCov_9fa48("3866", "3867", "3868"), (stryMutAct_9fa48("3870") ? tid || scores[index] !== null : stryMutAct_9fa48("3869") ? true : (stryCov_9fa48("3869", "3870"), tid && (stryMutAct_9fa48("3872") ? scores[index] === null : stryMutAct_9fa48("3871") ? true : (stryCov_9fa48("3871", "3872"), scores[index] !== null)))) && (stryMutAct_9fa48("3875") ? scores[index] > 1 : stryMutAct_9fa48("3874") ? scores[index] < 1 : stryMutAct_9fa48("3873") ? true : (stryCov_9fa48("3873", "3874", "3875"), scores[index] <= 1))))));
      }
    };
  }
};