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
const notifications = require('../notifications');
const privileges = require('../privileges');
const plugins = require('../plugins');
const utils = require('../utils');
module.exports = function (Topics) {
  if (stryMutAct_9fa48("748")) {
    {}
  } else {
    stryCov_9fa48("748");
    Topics.toggleFollow = async function (tid, uid) {
      if (stryMutAct_9fa48("749")) {
        {}
      } else {
        stryCov_9fa48("749");
        const exists = await Topics.exists(tid);
        if (stryMutAct_9fa48("752") ? false : stryMutAct_9fa48("751") ? true : stryMutAct_9fa48("750") ? exists : (stryCov_9fa48("750", "751", "752"), !exists)) {
          if (stryMutAct_9fa48("753")) {
            {}
          } else {
            stryCov_9fa48("753");
            throw new Error(stryMutAct_9fa48("754") ? "" : (stryCov_9fa48("754"), '[[error:no-topic]]'));
          }
        }
        const isFollowing = await Topics.isFollowing(stryMutAct_9fa48("755") ? [] : (stryCov_9fa48("755"), [tid]), uid);
        if (stryMutAct_9fa48("757") ? false : stryMutAct_9fa48("756") ? true : (stryCov_9fa48("756", "757"), isFollowing[0])) {
          if (stryMutAct_9fa48("758")) {
            {}
          } else {
            stryCov_9fa48("758");
            await Topics.unfollow(tid, uid);
          }
        } else {
          if (stryMutAct_9fa48("759")) {
            {}
          } else {
            stryCov_9fa48("759");
            await Topics.follow(tid, uid);
          }
        }
        return stryMutAct_9fa48("760") ? isFollowing[0] : (stryCov_9fa48("760"), !isFollowing[0]);
      }
    };
    Topics.follow = async function (tid, uid) {
      if (stryMutAct_9fa48("761")) {
        {}
      } else {
        stryCov_9fa48("761");
        await setWatching(follow, unignore, stryMutAct_9fa48("762") ? "" : (stryCov_9fa48("762"), 'action:topic.follow'), tid, uid);
      }
    };
    Topics.unfollow = async function (tid, uid) {
      if (stryMutAct_9fa48("763")) {
        {}
      } else {
        stryCov_9fa48("763");
        await setWatching(unfollow, unignore, stryMutAct_9fa48("764") ? "" : (stryCov_9fa48("764"), 'action:topic.unfollow'), tid, uid);
      }
    };
    Topics.ignore = async function (tid, uid) {
      if (stryMutAct_9fa48("765")) {
        {}
      } else {
        stryCov_9fa48("765");
        await setWatching(ignore, unfollow, stryMutAct_9fa48("766") ? "" : (stryCov_9fa48("766"), 'action:topic.ignore'), tid, uid);
      }
    };
    async function setWatching(method1, method2, hook, tid, uid) {
      if (stryMutAct_9fa48("767")) {
        {}
      } else {
        stryCov_9fa48("767");
        if (stryMutAct_9fa48("770") ? false : stryMutAct_9fa48("769") ? true : stryMutAct_9fa48("768") ? parseInt(uid, 10) > 0 : (stryCov_9fa48("768", "769", "770"), !(stryMutAct_9fa48("774") ? parseInt(uid, 10) <= 0 : stryMutAct_9fa48("773") ? parseInt(uid, 10) >= 0 : stryMutAct_9fa48("772") ? false : stryMutAct_9fa48("771") ? true : (stryCov_9fa48("771", "772", "773", "774"), parseInt(uid, 10) > 0)))) {
          if (stryMutAct_9fa48("775")) {
            {}
          } else {
            stryCov_9fa48("775");
            throw new Error(stryMutAct_9fa48("776") ? "" : (stryCov_9fa48("776"), '[[error:not-logged-in]]'));
          }
        }
        const exists = await Topics.exists(tid);
        if (stryMutAct_9fa48("779") ? false : stryMutAct_9fa48("778") ? true : stryMutAct_9fa48("777") ? exists : (stryCov_9fa48("777", "778", "779"), !exists)) {
          if (stryMutAct_9fa48("780")) {
            {}
          } else {
            stryCov_9fa48("780");
            throw new Error(stryMutAct_9fa48("781") ? "" : (stryCov_9fa48("781"), '[[error:no-topic]]'));
          }
        }
        await method1(tid, uid);
        await method2(tid, uid);
        plugins.hooks.fire(hook, stryMutAct_9fa48("782") ? {} : (stryCov_9fa48("782"), {
          uid: uid,
          tid: tid
        }));
      }
    }
    async function follow(tid, uid) {
      if (stryMutAct_9fa48("783")) {
        {}
      } else {
        stryCov_9fa48("783");
        await addToSets(stryMutAct_9fa48("784") ? `` : (stryCov_9fa48("784"), `tid:${tid}:followers`), stryMutAct_9fa48("785") ? `` : (stryCov_9fa48("785"), `uid:${uid}:followed_tids`), tid, uid);
      }
    }
    async function unfollow(tid, uid) {
      if (stryMutAct_9fa48("786")) {
        {}
      } else {
        stryCov_9fa48("786");
        await removeFromSets(stryMutAct_9fa48("787") ? `` : (stryCov_9fa48("787"), `tid:${tid}:followers`), stryMutAct_9fa48("788") ? `` : (stryCov_9fa48("788"), `uid:${uid}:followed_tids`), tid, uid);
      }
    }
    async function ignore(tid, uid) {
      if (stryMutAct_9fa48("789")) {
        {}
      } else {
        stryCov_9fa48("789");
        await addToSets(stryMutAct_9fa48("790") ? `` : (stryCov_9fa48("790"), `tid:${tid}:ignorers`), stryMutAct_9fa48("791") ? `` : (stryCov_9fa48("791"), `uid:${uid}:ignored_tids`), tid, uid);
      }
    }
    async function unignore(tid, uid) {
      if (stryMutAct_9fa48("792")) {
        {}
      } else {
        stryCov_9fa48("792");
        await removeFromSets(stryMutAct_9fa48("793") ? `` : (stryCov_9fa48("793"), `tid:${tid}:ignorers`), stryMutAct_9fa48("794") ? `` : (stryCov_9fa48("794"), `uid:${uid}:ignored_tids`), tid, uid);
      }
    }
    async function addToSets(set1, set2, tid, uid) {
      if (stryMutAct_9fa48("795")) {
        {}
      } else {
        stryCov_9fa48("795");
        await db.setAdd(set1, uid);
        await db.sortedSetAdd(set2, Date.now(), tid);
      }
    }
    async function removeFromSets(set1, set2, tid, uid) {
      if (stryMutAct_9fa48("796")) {
        {}
      } else {
        stryCov_9fa48("796");
        await db.setRemove(set1, uid);
        await db.sortedSetRemove(set2, tid);
      }
    }
    Topics.isFollowing = async function (tids, uid) {
      if (stryMutAct_9fa48("797")) {
        {}
      } else {
        stryCov_9fa48("797");
        return await isIgnoringOrFollowing(stryMutAct_9fa48("798") ? "" : (stryCov_9fa48("798"), 'followers'), tids, uid);
      }
    };
    Topics.isIgnoring = async function (tids, uid) {
      if (stryMutAct_9fa48("799")) {
        {}
      } else {
        stryCov_9fa48("799");
        return await isIgnoringOrFollowing(stryMutAct_9fa48("800") ? "" : (stryCov_9fa48("800"), 'ignorers'), tids, uid);
      }
    };
    Topics.getFollowData = async function (tids, uid) {
      if (stryMutAct_9fa48("801")) {
        {}
      } else {
        stryCov_9fa48("801");
        if (stryMutAct_9fa48("804") ? false : stryMutAct_9fa48("803") ? true : stryMutAct_9fa48("802") ? Array.isArray(tids) : (stryCov_9fa48("802", "803", "804"), !Array.isArray(tids))) {
          if (stryMutAct_9fa48("805")) {
            {}
          } else {
            stryCov_9fa48("805");
            return;
          }
        }
        if (stryMutAct_9fa48("809") ? parseInt(uid, 10) > 0 : stryMutAct_9fa48("808") ? parseInt(uid, 10) < 0 : stryMutAct_9fa48("807") ? false : stryMutAct_9fa48("806") ? true : (stryCov_9fa48("806", "807", "808", "809"), parseInt(uid, 10) <= 0)) {
          if (stryMutAct_9fa48("810")) {
            {}
          } else {
            stryCov_9fa48("810");
            return tids.map(stryMutAct_9fa48("811") ? () => undefined : (stryCov_9fa48("811"), () => stryMutAct_9fa48("812") ? {} : (stryCov_9fa48("812"), {
              following: stryMutAct_9fa48("813") ? true : (stryCov_9fa48("813"), false),
              ignoring: stryMutAct_9fa48("814") ? true : (stryCov_9fa48("814"), false)
            })));
          }
        }
        const keys = stryMutAct_9fa48("815") ? ["Stryker was here"] : (stryCov_9fa48("815"), []);
        tids.forEach(stryMutAct_9fa48("816") ? () => undefined : (stryCov_9fa48("816"), tid => keys.push(stryMutAct_9fa48("817") ? `` : (stryCov_9fa48("817"), `tid:${tid}:followers`), stryMutAct_9fa48("818") ? `` : (stryCov_9fa48("818"), `tid:${tid}:ignorers`))));
        const data = await db.isMemberOfSets(keys, uid);
        const followData = stryMutAct_9fa48("819") ? ["Stryker was here"] : (stryCov_9fa48("819"), []);
        for (let i = 0; stryMutAct_9fa48("822") ? i >= data.length : stryMutAct_9fa48("821") ? i <= data.length : stryMutAct_9fa48("820") ? false : (stryCov_9fa48("820", "821", "822"), i < data.length); stryMutAct_9fa48("823") ? i -= 2 : (stryCov_9fa48("823"), i += 2)) {
          if (stryMutAct_9fa48("824")) {
            {}
          } else {
            stryCov_9fa48("824");
            followData.push(stryMutAct_9fa48("825") ? {} : (stryCov_9fa48("825"), {
              following: data[i],
              ignoring: data[stryMutAct_9fa48("826") ? i - 1 : (stryCov_9fa48("826"), i + 1)]
            }));
          }
        }
        return followData;
      }
    };
    async function isIgnoringOrFollowing(set, tids, uid) {
      if (stryMutAct_9fa48("827")) {
        {}
      } else {
        stryCov_9fa48("827");
        if (stryMutAct_9fa48("830") ? false : stryMutAct_9fa48("829") ? true : stryMutAct_9fa48("828") ? Array.isArray(tids) : (stryCov_9fa48("828", "829", "830"), !Array.isArray(tids))) {
          if (stryMutAct_9fa48("831")) {
            {}
          } else {
            stryCov_9fa48("831");
            return;
          }
        }
        if (stryMutAct_9fa48("835") ? parseInt(uid, 10) > 0 : stryMutAct_9fa48("834") ? parseInt(uid, 10) < 0 : stryMutAct_9fa48("833") ? false : stryMutAct_9fa48("832") ? true : (stryCov_9fa48("832", "833", "834", "835"), parseInt(uid, 10) <= 0)) {
          if (stryMutAct_9fa48("836")) {
            {}
          } else {
            stryCov_9fa48("836");
            return tids.map(stryMutAct_9fa48("837") ? () => undefined : (stryCov_9fa48("837"), () => stryMutAct_9fa48("838") ? true : (stryCov_9fa48("838"), false)));
          }
        }
        const keys = tids.map(stryMutAct_9fa48("839") ? () => undefined : (stryCov_9fa48("839"), tid => stryMutAct_9fa48("840") ? `` : (stryCov_9fa48("840"), `tid:${tid}:${set}`)));
        return await db.isMemberOfSets(keys, uid);
      }
    }
    Topics.getFollowers = async function (tid) {
      if (stryMutAct_9fa48("841")) {
        {}
      } else {
        stryCov_9fa48("841");
        return await db.getSetMembers(stryMutAct_9fa48("842") ? `` : (stryCov_9fa48("842"), `tid:${tid}:followers`));
      }
    };
    Topics.getIgnorers = async function (tid) {
      if (stryMutAct_9fa48("843")) {
        {}
      } else {
        stryCov_9fa48("843");
        return await db.getSetMembers(stryMutAct_9fa48("844") ? `` : (stryCov_9fa48("844"), `tid:${tid}:ignorers`));
      }
    };
    Topics.filterIgnoringUids = async function (tid, uids) {
      if (stryMutAct_9fa48("845")) {
        {}
      } else {
        stryCov_9fa48("845");
        const isIgnoring = await db.isSetMembers(stryMutAct_9fa48("846") ? `` : (stryCov_9fa48("846"), `tid:${tid}:ignorers`), uids);
        const readingUids = stryMutAct_9fa48("847") ? uids : (stryCov_9fa48("847"), uids.filter(stryMutAct_9fa48("848") ? () => undefined : (stryCov_9fa48("848"), (uid, index) => stryMutAct_9fa48("851") ? uid || !isIgnoring[index] : stryMutAct_9fa48("850") ? false : stryMutAct_9fa48("849") ? true : (stryCov_9fa48("849", "850", "851"), uid && (stryMutAct_9fa48("852") ? isIgnoring[index] : (stryCov_9fa48("852"), !isIgnoring[index]))))));
        return readingUids;
      }
    };
    Topics.filterWatchedTids = async function (tids, uid) {
      if (stryMutAct_9fa48("853")) {
        {}
      } else {
        stryCov_9fa48("853");
        if (stryMutAct_9fa48("857") ? parseInt(uid, 10) > 0 : stryMutAct_9fa48("856") ? parseInt(uid, 10) < 0 : stryMutAct_9fa48("855") ? false : stryMutAct_9fa48("854") ? true : (stryCov_9fa48("854", "855", "856", "857"), parseInt(uid, 10) <= 0)) {
          if (stryMutAct_9fa48("858")) {
            {}
          } else {
            stryCov_9fa48("858");
            return stryMutAct_9fa48("859") ? ["Stryker was here"] : (stryCov_9fa48("859"), []);
          }
        }
        const scores = await db.sortedSetScores(stryMutAct_9fa48("860") ? `` : (stryCov_9fa48("860"), `uid:${uid}:followed_tids`), tids);
        return stryMutAct_9fa48("861") ? tids : (stryCov_9fa48("861"), tids.filter(stryMutAct_9fa48("862") ? () => undefined : (stryCov_9fa48("862"), (tid, index) => stryMutAct_9fa48("865") ? tid || !!scores[index] : stryMutAct_9fa48("864") ? false : stryMutAct_9fa48("863") ? true : (stryCov_9fa48("863", "864", "865"), tid && (stryMutAct_9fa48("866") ? !scores[index] : (stryCov_9fa48("866"), !(stryMutAct_9fa48("867") ? scores[index] : (stryCov_9fa48("867"), !scores[index]))))))));
      }
    };
    Topics.filterNotIgnoredTids = async function (tids, uid) {
      if (stryMutAct_9fa48("868")) {
        {}
      } else {
        stryCov_9fa48("868");
        if (stryMutAct_9fa48("872") ? parseInt(uid, 10) > 0 : stryMutAct_9fa48("871") ? parseInt(uid, 10) < 0 : stryMutAct_9fa48("870") ? false : stryMutAct_9fa48("869") ? true : (stryCov_9fa48("869", "870", "871", "872"), parseInt(uid, 10) <= 0)) {
          if (stryMutAct_9fa48("873")) {
            {}
          } else {
            stryCov_9fa48("873");
            return tids;
          }
        }
        const scores = await db.sortedSetScores(stryMutAct_9fa48("874") ? `` : (stryCov_9fa48("874"), `uid:${uid}:ignored_tids`), tids);
        return stryMutAct_9fa48("875") ? tids : (stryCov_9fa48("875"), tids.filter(stryMutAct_9fa48("876") ? () => undefined : (stryCov_9fa48("876"), (tid, index) => stryMutAct_9fa48("879") ? tid || !scores[index] : stryMutAct_9fa48("878") ? false : stryMutAct_9fa48("877") ? true : (stryCov_9fa48("877", "878", "879"), tid && (stryMutAct_9fa48("880") ? scores[index] : (stryCov_9fa48("880"), !scores[index]))))));
      }
    };
    Topics.notifyFollowers = async function (postData, exceptUid, notifData) {
      if (stryMutAct_9fa48("881")) {
        {}
      } else {
        stryCov_9fa48("881");
        notifData = stryMutAct_9fa48("884") ? notifData && {} : stryMutAct_9fa48("883") ? false : stryMutAct_9fa48("882") ? true : (stryCov_9fa48("882", "883", "884"), notifData || {});
        let followers = await Topics.getFollowers(postData.topic.tid);
        const index = followers.indexOf(String(exceptUid));
        if (stryMutAct_9fa48("887") ? index === -1 : stryMutAct_9fa48("886") ? false : stryMutAct_9fa48("885") ? true : (stryCov_9fa48("885", "886", "887"), index !== (stryMutAct_9fa48("888") ? +1 : (stryCov_9fa48("888"), -1)))) {
          if (stryMutAct_9fa48("889")) {
            {}
          } else {
            stryCov_9fa48("889");
            followers.splice(index, 1);
          }
        }
        followers = await privileges.topics.filterUids(stryMutAct_9fa48("890") ? "" : (stryCov_9fa48("890"), 'topics:read'), postData.topic.tid, followers);
        if (stryMutAct_9fa48("893") ? false : stryMutAct_9fa48("892") ? true : stryMutAct_9fa48("891") ? followers.length : (stryCov_9fa48("891", "892", "893"), !followers.length)) {
          if (stryMutAct_9fa48("894")) {
            {}
          } else {
            stryCov_9fa48("894");
            return;
          }
        }
        let {
          title
        } = postData.topic;
        if (stryMutAct_9fa48("896") ? false : stryMutAct_9fa48("895") ? true : (stryCov_9fa48("895", "896"), title)) {
          if (stryMutAct_9fa48("897")) {
            {}
          } else {
            stryCov_9fa48("897");
            title = utils.decodeHTMLEntities(title);
          }
        }
        const notification = await notifications.create(stryMutAct_9fa48("898") ? {} : (stryCov_9fa48("898"), {
          subject: title,
          bodyLong: postData.content,
          pid: postData.pid,
          path: stryMutAct_9fa48("899") ? `` : (stryCov_9fa48("899"), `/post/${postData.pid}`),
          tid: postData.topic.tid,
          from: exceptUid,
          topicTitle: title,
          ...notifData
        }));
        notifications.push(notification, followers);
      }
    };
  }
};