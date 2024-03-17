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
const db = require('../database');
const topics = require('.');
const categories = require('../categories');
const user = require('../user');
const plugins = require('../plugins');
const privileges = require('../privileges');
const utils = require('../utils');
module.exports = function (Topics) {
  if (stryMutAct_9fa48("3145")) {
    {}
  } else {
    stryCov_9fa48("3145");
    const topicTools = {};
    Topics.tools = topicTools;
    topicTools.delete = async function (tid, uid) {
      if (stryMutAct_9fa48("3146")) {
        {}
      } else {
        stryCov_9fa48("3146");
        return await toggleDelete(tid, uid, stryMutAct_9fa48("3147") ? false : (stryCov_9fa48("3147"), true));
      }
    };
    topicTools.restore = async function (tid, uid) {
      if (stryMutAct_9fa48("3148")) {
        {}
      } else {
        stryCov_9fa48("3148");
        return await toggleDelete(tid, uid, stryMutAct_9fa48("3149") ? true : (stryCov_9fa48("3149"), false));
      }
    };
    async function toggleDelete(tid, uid, isDelete) {
      if (stryMutAct_9fa48("3150")) {
        {}
      } else {
        stryCov_9fa48("3150");
        const topicData = await Topics.getTopicData(tid);
        if (stryMutAct_9fa48("3153") ? false : stryMutAct_9fa48("3152") ? true : stryMutAct_9fa48("3151") ? topicData : (stryCov_9fa48("3151", "3152", "3153"), !topicData)) {
          if (stryMutAct_9fa48("3154")) {
            {}
          } else {
            stryCov_9fa48("3154");
            throw new Error(stryMutAct_9fa48("3155") ? "" : (stryCov_9fa48("3155"), '[[error:no-topic]]'));
          }
        }
        // Scheduled topics can only be purged
        if (stryMutAct_9fa48("3157") ? false : stryMutAct_9fa48("3156") ? true : (stryCov_9fa48("3156", "3157"), topicData.scheduled)) {
          if (stryMutAct_9fa48("3158")) {
            {}
          } else {
            stryCov_9fa48("3158");
            throw new Error(stryMutAct_9fa48("3159") ? "" : (stryCov_9fa48("3159"), '[[error:invalid-data]]'));
          }
        }
        const canDelete = await privileges.topics.canDelete(tid, uid);
        const hook = isDelete ? stryMutAct_9fa48("3160") ? "" : (stryCov_9fa48("3160"), 'delete') : stryMutAct_9fa48("3161") ? "" : (stryCov_9fa48("3161"), 'restore');
        const data = await plugins.hooks.fire(stryMutAct_9fa48("3162") ? `` : (stryCov_9fa48("3162"), `filter:topic.${hook}`), stryMutAct_9fa48("3163") ? {} : (stryCov_9fa48("3163"), {
          topicData: topicData,
          uid: uid,
          isDelete: isDelete,
          canDelete: canDelete,
          canRestore: canDelete
        }));
        if (stryMutAct_9fa48("3166") ? !data.canDelete && data.isDelete && !data.canRestore && !data.isDelete : stryMutAct_9fa48("3165") ? false : stryMutAct_9fa48("3164") ? true : (stryCov_9fa48("3164", "3165", "3166"), (stryMutAct_9fa48("3168") ? !data.canDelete || data.isDelete : stryMutAct_9fa48("3167") ? false : (stryCov_9fa48("3167", "3168"), (stryMutAct_9fa48("3169") ? data.canDelete : (stryCov_9fa48("3169"), !data.canDelete)) && data.isDelete)) || (stryMutAct_9fa48("3171") ? !data.canRestore || !data.isDelete : stryMutAct_9fa48("3170") ? false : (stryCov_9fa48("3170", "3171"), (stryMutAct_9fa48("3172") ? data.canRestore : (stryCov_9fa48("3172"), !data.canRestore)) && (stryMutAct_9fa48("3173") ? data.isDelete : (stryCov_9fa48("3173"), !data.isDelete)))))) {
          if (stryMutAct_9fa48("3174")) {
            {}
          } else {
            stryCov_9fa48("3174");
            throw new Error(stryMutAct_9fa48("3175") ? "" : (stryCov_9fa48("3175"), '[[error:no-privileges]]'));
          }
        }
        if (stryMutAct_9fa48("3178") ? data.topicData.deleted || data.isDelete : stryMutAct_9fa48("3177") ? false : stryMutAct_9fa48("3176") ? true : (stryCov_9fa48("3176", "3177", "3178"), data.topicData.deleted && data.isDelete)) {
          if (stryMutAct_9fa48("3179")) {
            {}
          } else {
            stryCov_9fa48("3179");
            throw new Error(stryMutAct_9fa48("3180") ? "" : (stryCov_9fa48("3180"), '[[error:topic-already-deleted]]'));
          }
        } else if (stryMutAct_9fa48("3183") ? !data.topicData.deleted || !data.isDelete : stryMutAct_9fa48("3182") ? false : stryMutAct_9fa48("3181") ? true : (stryCov_9fa48("3181", "3182", "3183"), (stryMutAct_9fa48("3184") ? data.topicData.deleted : (stryCov_9fa48("3184"), !data.topicData.deleted)) && (stryMutAct_9fa48("3185") ? data.isDelete : (stryCov_9fa48("3185"), !data.isDelete)))) {
          if (stryMutAct_9fa48("3186")) {
            {}
          } else {
            stryCov_9fa48("3186");
            throw new Error(stryMutAct_9fa48("3187") ? "" : (stryCov_9fa48("3187"), '[[error:topic-already-restored]]'));
          }
        }
        if (stryMutAct_9fa48("3189") ? false : stryMutAct_9fa48("3188") ? true : (stryCov_9fa48("3188", "3189"), data.isDelete)) {
          if (stryMutAct_9fa48("3190")) {
            {}
          } else {
            stryCov_9fa48("3190");
            await Topics.delete(data.topicData.tid, data.uid);
          }
        } else {
          if (stryMutAct_9fa48("3191")) {
            {}
          } else {
            stryCov_9fa48("3191");
            await Topics.restore(data.topicData.tid);
          }
        }
        const events = await Topics.events.log(tid, stryMutAct_9fa48("3192") ? {} : (stryCov_9fa48("3192"), {
          type: isDelete ? stryMutAct_9fa48("3193") ? "" : (stryCov_9fa48("3193"), 'delete') : stryMutAct_9fa48("3194") ? "" : (stryCov_9fa48("3194"), 'restore'),
          uid
        }));
        data.topicData.deleted = data.isDelete ? 1 : 0;
        if (stryMutAct_9fa48("3196") ? false : stryMutAct_9fa48("3195") ? true : (stryCov_9fa48("3195", "3196"), data.isDelete)) {
          if (stryMutAct_9fa48("3197")) {
            {}
          } else {
            stryCov_9fa48("3197");
            plugins.hooks.fire(stryMutAct_9fa48("3198") ? "" : (stryCov_9fa48("3198"), 'action:topic.delete'), stryMutAct_9fa48("3199") ? {} : (stryCov_9fa48("3199"), {
              topic: data.topicData,
              uid: data.uid
            }));
          }
        } else {
          if (stryMutAct_9fa48("3200")) {
            {}
          } else {
            stryCov_9fa48("3200");
            plugins.hooks.fire(stryMutAct_9fa48("3201") ? "" : (stryCov_9fa48("3201"), 'action:topic.restore'), stryMutAct_9fa48("3202") ? {} : (stryCov_9fa48("3202"), {
              topic: data.topicData,
              uid: data.uid
            }));
          }
        }
        const userData = await user.getUserFields(data.uid, stryMutAct_9fa48("3203") ? [] : (stryCov_9fa48("3203"), [stryMutAct_9fa48("3204") ? "" : (stryCov_9fa48("3204"), 'username'), stryMutAct_9fa48("3205") ? "" : (stryCov_9fa48("3205"), 'userslug')]));
        return stryMutAct_9fa48("3206") ? {} : (stryCov_9fa48("3206"), {
          tid: data.topicData.tid,
          cid: data.topicData.cid,
          isDelete: data.isDelete,
          uid: data.uid,
          user: userData,
          events
        });
      }
    }
    topicTools.purge = async function (tid, uid) {
      if (stryMutAct_9fa48("3207")) {
        {}
      } else {
        stryCov_9fa48("3207");
        const topicData = await Topics.getTopicData(tid);
        if (stryMutAct_9fa48("3210") ? false : stryMutAct_9fa48("3209") ? true : stryMutAct_9fa48("3208") ? topicData : (stryCov_9fa48("3208", "3209", "3210"), !topicData)) {
          if (stryMutAct_9fa48("3211")) {
            {}
          } else {
            stryCov_9fa48("3211");
            throw new Error(stryMutAct_9fa48("3212") ? "" : (stryCov_9fa48("3212"), '[[error:no-topic]]'));
          }
        }
        const canPurge = await privileges.topics.canPurge(tid, uid);
        if (stryMutAct_9fa48("3215") ? false : stryMutAct_9fa48("3214") ? true : stryMutAct_9fa48("3213") ? canPurge : (stryCov_9fa48("3213", "3214", "3215"), !canPurge)) {
          if (stryMutAct_9fa48("3216")) {
            {}
          } else {
            stryCov_9fa48("3216");
            throw new Error(stryMutAct_9fa48("3217") ? "" : (stryCov_9fa48("3217"), '[[error:no-privileges]]'));
          }
        }
        await Topics.purgePostsAndTopic(tid, uid);
        return stryMutAct_9fa48("3218") ? {} : (stryCov_9fa48("3218"), {
          tid: tid,
          cid: topicData.cid,
          uid: uid
        });
      }
    };
    topicTools.lock = async function (tid, uid) {
      if (stryMutAct_9fa48("3219")) {
        {}
      } else {
        stryCov_9fa48("3219");
        return await toggleLock(tid, uid, stryMutAct_9fa48("3220") ? false : (stryCov_9fa48("3220"), true));
      }
    };
    topicTools.unlock = async function (tid, uid) {
      if (stryMutAct_9fa48("3221")) {
        {}
      } else {
        stryCov_9fa48("3221");
        return await toggleLock(tid, uid, stryMutAct_9fa48("3222") ? true : (stryCov_9fa48("3222"), false));
      }
    };
    async function toggleLock(tid, uid, lock) {
      if (stryMutAct_9fa48("3223")) {
        {}
      } else {
        stryCov_9fa48("3223");
        const topicData = await Topics.getTopicFields(tid, stryMutAct_9fa48("3224") ? [] : (stryCov_9fa48("3224"), [stryMutAct_9fa48("3225") ? "" : (stryCov_9fa48("3225"), 'tid'), stryMutAct_9fa48("3226") ? "" : (stryCov_9fa48("3226"), 'uid'), stryMutAct_9fa48("3227") ? "" : (stryCov_9fa48("3227"), 'cid')]));
        if (stryMutAct_9fa48("3230") ? !topicData && !topicData.cid : stryMutAct_9fa48("3229") ? false : stryMutAct_9fa48("3228") ? true : (stryCov_9fa48("3228", "3229", "3230"), (stryMutAct_9fa48("3231") ? topicData : (stryCov_9fa48("3231"), !topicData)) || (stryMutAct_9fa48("3232") ? topicData.cid : (stryCov_9fa48("3232"), !topicData.cid)))) {
          if (stryMutAct_9fa48("3233")) {
            {}
          } else {
            stryCov_9fa48("3233");
            throw new Error(stryMutAct_9fa48("3234") ? "" : (stryCov_9fa48("3234"), '[[error:no-topic]]'));
          }
        }
        const isAdminOrMod = await privileges.categories.isAdminOrMod(topicData.cid, uid);
        if (stryMutAct_9fa48("3237") ? false : stryMutAct_9fa48("3236") ? true : stryMutAct_9fa48("3235") ? isAdminOrMod : (stryCov_9fa48("3235", "3236", "3237"), !isAdminOrMod)) {
          if (stryMutAct_9fa48("3238")) {
            {}
          } else {
            stryCov_9fa48("3238");
            throw new Error(stryMutAct_9fa48("3239") ? "" : (stryCov_9fa48("3239"), '[[error:no-privileges]]'));
          }
        }
        await Topics.setTopicField(tid, stryMutAct_9fa48("3240") ? "" : (stryCov_9fa48("3240"), 'locked'), lock ? 1 : 0);
        topicData.events = await Topics.events.log(tid, stryMutAct_9fa48("3241") ? {} : (stryCov_9fa48("3241"), {
          type: lock ? stryMutAct_9fa48("3242") ? "" : (stryCov_9fa48("3242"), 'lock') : stryMutAct_9fa48("3243") ? "" : (stryCov_9fa48("3243"), 'unlock'),
          uid
        }));
        topicData.isLocked = lock; // deprecate in v2.0
        topicData.locked = lock;
        plugins.hooks.fire(stryMutAct_9fa48("3244") ? "" : (stryCov_9fa48("3244"), 'action:topic.lock'), stryMutAct_9fa48("3245") ? {} : (stryCov_9fa48("3245"), {
          topic: _.clone(topicData),
          uid: uid
        }));
        return topicData;
      }
    }
    topicTools.pin = async function (tid, uid) {
      if (stryMutAct_9fa48("3246")) {
        {}
      } else {
        stryCov_9fa48("3246");
        return await togglePin(tid, uid, stryMutAct_9fa48("3247") ? false : (stryCov_9fa48("3247"), true));
      }
    };
    topicTools.unpin = async function (tid, uid) {
      if (stryMutAct_9fa48("3248")) {
        {}
      } else {
        stryCov_9fa48("3248");
        return await togglePin(tid, uid, stryMutAct_9fa48("3249") ? true : (stryCov_9fa48("3249"), false));
      }
    };
    topicTools.setPinExpiry = async (tid, expiry, uid) => {
      if (stryMutAct_9fa48("3250")) {
        {}
      } else {
        stryCov_9fa48("3250");
        if (stryMutAct_9fa48("3253") ? isNaN(parseInt(expiry, 10)) && expiry <= Date.now() : stryMutAct_9fa48("3252") ? false : stryMutAct_9fa48("3251") ? true : (stryCov_9fa48("3251", "3252", "3253"), isNaN(parseInt(expiry, 10)) || (stryMutAct_9fa48("3256") ? expiry > Date.now() : stryMutAct_9fa48("3255") ? expiry < Date.now() : stryMutAct_9fa48("3254") ? false : (stryCov_9fa48("3254", "3255", "3256"), expiry <= Date.now())))) {
          if (stryMutAct_9fa48("3257")) {
            {}
          } else {
            stryCov_9fa48("3257");
            throw new Error(stryMutAct_9fa48("3258") ? "" : (stryCov_9fa48("3258"), '[[error:invalid-data]]'));
          }
        }
        const topicData = await Topics.getTopicFields(tid, stryMutAct_9fa48("3259") ? [] : (stryCov_9fa48("3259"), [stryMutAct_9fa48("3260") ? "" : (stryCov_9fa48("3260"), 'tid'), stryMutAct_9fa48("3261") ? "" : (stryCov_9fa48("3261"), 'uid'), stryMutAct_9fa48("3262") ? "" : (stryCov_9fa48("3262"), 'cid')]));
        const isAdminOrMod = await privileges.categories.isAdminOrMod(topicData.cid, uid);
        if (stryMutAct_9fa48("3265") ? false : stryMutAct_9fa48("3264") ? true : stryMutAct_9fa48("3263") ? isAdminOrMod : (stryCov_9fa48("3263", "3264", "3265"), !isAdminOrMod)) {
          if (stryMutAct_9fa48("3266")) {
            {}
          } else {
            stryCov_9fa48("3266");
            throw new Error(stryMutAct_9fa48("3267") ? "" : (stryCov_9fa48("3267"), '[[error:no-privileges]]'));
          }
        }
        await Topics.setTopicField(tid, stryMutAct_9fa48("3268") ? "" : (stryCov_9fa48("3268"), 'pinExpiry'), expiry);
        plugins.hooks.fire(stryMutAct_9fa48("3269") ? "" : (stryCov_9fa48("3269"), 'action:topic.setPinExpiry'), stryMutAct_9fa48("3270") ? {} : (stryCov_9fa48("3270"), {
          topic: _.clone(topicData),
          uid: uid
        }));
      }
    };
    topicTools.checkPinExpiry = async tids => {
      if (stryMutAct_9fa48("3271")) {
        {}
      } else {
        stryCov_9fa48("3271");
        const expiry = (await topics.getTopicsFields(tids, stryMutAct_9fa48("3272") ? [] : (stryCov_9fa48("3272"), [stryMutAct_9fa48("3273") ? "" : (stryCov_9fa48("3273"), 'pinExpiry')]))).map(stryMutAct_9fa48("3274") ? () => undefined : (stryCov_9fa48("3274"), obj => obj.pinExpiry));
        const now = Date.now();
        tids = await Promise.all(tids.map(async (tid, idx) => {
          if (stryMutAct_9fa48("3275")) {
            {}
          } else {
            stryCov_9fa48("3275");
            if (stryMutAct_9fa48("3278") ? expiry[idx] || parseInt(expiry[idx], 10) <= now : stryMutAct_9fa48("3277") ? false : stryMutAct_9fa48("3276") ? true : (stryCov_9fa48("3276", "3277", "3278"), expiry[idx] && (stryMutAct_9fa48("3281") ? parseInt(expiry[idx], 10) > now : stryMutAct_9fa48("3280") ? parseInt(expiry[idx], 10) < now : stryMutAct_9fa48("3279") ? true : (stryCov_9fa48("3279", "3280", "3281"), parseInt(expiry[idx], 10) <= now)))) {
              if (stryMutAct_9fa48("3282")) {
                {}
              } else {
                stryCov_9fa48("3282");
                await togglePin(tid, stryMutAct_9fa48("3283") ? "" : (stryCov_9fa48("3283"), 'system'), stryMutAct_9fa48("3284") ? true : (stryCov_9fa48("3284"), false));
                return null;
              }
            }
            return tid;
          }
        }));
        return stryMutAct_9fa48("3285") ? tids : (stryCov_9fa48("3285"), tids.filter(Boolean));
      }
    };
    async function togglePin(tid, uid, pin) {
      if (stryMutAct_9fa48("3286")) {
        {}
      } else {
        stryCov_9fa48("3286");
        const topicData = await Topics.getTopicData(tid);
        if (stryMutAct_9fa48("3289") ? false : stryMutAct_9fa48("3288") ? true : stryMutAct_9fa48("3287") ? topicData : (stryCov_9fa48("3287", "3288", "3289"), !topicData)) {
          if (stryMutAct_9fa48("3290")) {
            {}
          } else {
            stryCov_9fa48("3290");
            throw new Error(stryMutAct_9fa48("3291") ? "" : (stryCov_9fa48("3291"), '[[error:no-topic]]'));
          }
        }
        if (stryMutAct_9fa48("3293") ? false : stryMutAct_9fa48("3292") ? true : (stryCov_9fa48("3292", "3293"), topicData.scheduled)) {
          if (stryMutAct_9fa48("3294")) {
            {}
          } else {
            stryCov_9fa48("3294");
            throw new Error(stryMutAct_9fa48("3295") ? "" : (stryCov_9fa48("3295"), '[[error:cant-pin-scheduled]]'));
          }
        }
        if (stryMutAct_9fa48("3298") ? uid !== 'system' || !(await privileges.topics.isAdminOrMod(tid, uid)) : stryMutAct_9fa48("3297") ? false : stryMutAct_9fa48("3296") ? true : (stryCov_9fa48("3296", "3297", "3298"), (stryMutAct_9fa48("3300") ? uid === 'system' : stryMutAct_9fa48("3299") ? true : (stryCov_9fa48("3299", "3300"), uid !== (stryMutAct_9fa48("3301") ? "" : (stryCov_9fa48("3301"), 'system')))) && (stryMutAct_9fa48("3302") ? await privileges.topics.isAdminOrMod(tid, uid) : (stryCov_9fa48("3302"), !(await privileges.topics.isAdminOrMod(tid, uid)))))) {
          if (stryMutAct_9fa48("3303")) {
            {}
          } else {
            stryCov_9fa48("3303");
            throw new Error(stryMutAct_9fa48("3304") ? "" : (stryCov_9fa48("3304"), '[[error:no-privileges]]'));
          }
        }
        const promises = stryMutAct_9fa48("3305") ? [] : (stryCov_9fa48("3305"), [Topics.setTopicField(tid, stryMutAct_9fa48("3306") ? "" : (stryCov_9fa48("3306"), 'pinned'), pin ? 1 : 0), Topics.events.log(tid, stryMutAct_9fa48("3307") ? {} : (stryCov_9fa48("3307"), {
          type: pin ? stryMutAct_9fa48("3308") ? "" : (stryCov_9fa48("3308"), 'pin') : stryMutAct_9fa48("3309") ? "" : (stryCov_9fa48("3309"), 'unpin'),
          uid
        }))]);
        if (stryMutAct_9fa48("3311") ? false : stryMutAct_9fa48("3310") ? true : (stryCov_9fa48("3310", "3311"), pin)) {
          if (stryMutAct_9fa48("3312")) {
            {}
          } else {
            stryCov_9fa48("3312");
            promises.push(db.sortedSetAdd(stryMutAct_9fa48("3313") ? `` : (stryCov_9fa48("3313"), `cid:${topicData.cid}:tids:pinned`), Date.now(), tid));
            promises.push(db.sortedSetsRemove(stryMutAct_9fa48("3314") ? [] : (stryCov_9fa48("3314"), [stryMutAct_9fa48("3315") ? `` : (stryCov_9fa48("3315"), `cid:${topicData.cid}:tids`), stryMutAct_9fa48("3316") ? `` : (stryCov_9fa48("3316"), `cid:${topicData.cid}:tids:posts`), stryMutAct_9fa48("3317") ? `` : (stryCov_9fa48("3317"), `cid:${topicData.cid}:tids:votes`), stryMutAct_9fa48("3318") ? `` : (stryCov_9fa48("3318"), `cid:${topicData.cid}:tids:views`)]), tid));
          }
        } else {
          if (stryMutAct_9fa48("3319")) {
            {}
          } else {
            stryCov_9fa48("3319");
            promises.push(db.sortedSetRemove(stryMutAct_9fa48("3320") ? `` : (stryCov_9fa48("3320"), `cid:${topicData.cid}:tids:pinned`), tid));
            promises.push(Topics.deleteTopicField(tid, stryMutAct_9fa48("3321") ? "" : (stryCov_9fa48("3321"), 'pinExpiry')));
            promises.push(db.sortedSetAddBulk(stryMutAct_9fa48("3322") ? [] : (stryCov_9fa48("3322"), [stryMutAct_9fa48("3323") ? [] : (stryCov_9fa48("3323"), [stryMutAct_9fa48("3324") ? `` : (stryCov_9fa48("3324"), `cid:${topicData.cid}:tids`), topicData.lastposttime, tid]), stryMutAct_9fa48("3325") ? [] : (stryCov_9fa48("3325"), [stryMutAct_9fa48("3326") ? `` : (stryCov_9fa48("3326"), `cid:${topicData.cid}:tids:posts`), topicData.postcount, tid]), stryMutAct_9fa48("3327") ? [] : (stryCov_9fa48("3327"), [stryMutAct_9fa48("3328") ? `` : (stryCov_9fa48("3328"), `cid:${topicData.cid}:tids:votes`), stryMutAct_9fa48("3331") ? parseInt(topicData.votes, 10) && 0 : stryMutAct_9fa48("3330") ? false : stryMutAct_9fa48("3329") ? true : (stryCov_9fa48("3329", "3330", "3331"), parseInt(topicData.votes, 10) || 0), tid]), stryMutAct_9fa48("3332") ? [] : (stryCov_9fa48("3332"), [stryMutAct_9fa48("3333") ? `` : (stryCov_9fa48("3333"), `cid:${topicData.cid}:tids:views`), topicData.viewcount, tid])])));
            topicData.pinExpiry = undefined;
            topicData.pinExpiryISO = undefined;
          }
        }
        const results = await Promise.all(promises);
        topicData.isPinned = pin; // deprecate in v2.0
        topicData.pinned = pin;
        topicData.events = results[1];
        plugins.hooks.fire(stryMutAct_9fa48("3334") ? "" : (stryCov_9fa48("3334"), 'action:topic.pin'), stryMutAct_9fa48("3335") ? {} : (stryCov_9fa48("3335"), {
          topic: _.clone(topicData),
          uid
        }));
        return topicData;
      }
    }
    topicTools.orderPinnedTopics = async function (uid, data) {
      if (stryMutAct_9fa48("3336")) {
        {}
      } else {
        stryCov_9fa48("3336");
        const {
          tid,
          order
        } = data;
        const cid = await Topics.getTopicField(tid, stryMutAct_9fa48("3337") ? "" : (stryCov_9fa48("3337"), 'cid'));
        if (stryMutAct_9fa48("3340") ? (!cid || !tid || !utils.isNumber(order)) && order < 0 : stryMutAct_9fa48("3339") ? false : stryMutAct_9fa48("3338") ? true : (stryCov_9fa48("3338", "3339", "3340"), (stryMutAct_9fa48("3342") ? (!cid || !tid) && !utils.isNumber(order) : stryMutAct_9fa48("3341") ? false : (stryCov_9fa48("3341", "3342"), (stryMutAct_9fa48("3344") ? !cid && !tid : stryMutAct_9fa48("3343") ? false : (stryCov_9fa48("3343", "3344"), (stryMutAct_9fa48("3345") ? cid : (stryCov_9fa48("3345"), !cid)) || (stryMutAct_9fa48("3346") ? tid : (stryCov_9fa48("3346"), !tid)))) || (stryMutAct_9fa48("3347") ? utils.isNumber(order) : (stryCov_9fa48("3347"), !utils.isNumber(order))))) || (stryMutAct_9fa48("3350") ? order >= 0 : stryMutAct_9fa48("3349") ? order <= 0 : stryMutAct_9fa48("3348") ? false : (stryCov_9fa48("3348", "3349", "3350"), order < 0)))) {
          if (stryMutAct_9fa48("3351")) {
            {}
          } else {
            stryCov_9fa48("3351");
            throw new Error(stryMutAct_9fa48("3352") ? "" : (stryCov_9fa48("3352"), '[[error:invalid-data]]'));
          }
        }
        const isAdminOrMod = await privileges.categories.isAdminOrMod(cid, uid);
        if (stryMutAct_9fa48("3355") ? false : stryMutAct_9fa48("3354") ? true : stryMutAct_9fa48("3353") ? isAdminOrMod : (stryCov_9fa48("3353", "3354", "3355"), !isAdminOrMod)) {
          if (stryMutAct_9fa48("3356")) {
            {}
          } else {
            stryCov_9fa48("3356");
            throw new Error(stryMutAct_9fa48("3357") ? "" : (stryCov_9fa48("3357"), '[[error:no-privileges]]'));
          }
        }
        const pinnedTids = await db.getSortedSetRange(stryMutAct_9fa48("3358") ? `` : (stryCov_9fa48("3358"), `cid:${cid}:tids:pinned`), 0, stryMutAct_9fa48("3359") ? +1 : (stryCov_9fa48("3359"), -1));
        const currentIndex = pinnedTids.indexOf(String(tid));
        if (stryMutAct_9fa48("3362") ? currentIndex !== -1 : stryMutAct_9fa48("3361") ? false : stryMutAct_9fa48("3360") ? true : (stryCov_9fa48("3360", "3361", "3362"), currentIndex === (stryMutAct_9fa48("3363") ? +1 : (stryCov_9fa48("3363"), -1)))) {
          if (stryMutAct_9fa48("3364")) {
            {}
          } else {
            stryCov_9fa48("3364");
            return;
          }
        }
        const newOrder = stryMutAct_9fa48("3365") ? pinnedTids.length - order + 1 : (stryCov_9fa48("3365"), (stryMutAct_9fa48("3366") ? pinnedTids.length + order : (stryCov_9fa48("3366"), pinnedTids.length - order)) - 1);
        // moves tid to index order in the array
        if (stryMutAct_9fa48("3370") ? pinnedTids.length <= 1 : stryMutAct_9fa48("3369") ? pinnedTids.length >= 1 : stryMutAct_9fa48("3368") ? false : stryMutAct_9fa48("3367") ? true : (stryCov_9fa48("3367", "3368", "3369", "3370"), pinnedTids.length > 1)) {
          if (stryMutAct_9fa48("3371")) {
            {}
          } else {
            stryCov_9fa48("3371");
            pinnedTids.splice(stryMutAct_9fa48("3372") ? Math.min(0, newOrder) : (stryCov_9fa48("3372"), Math.max(0, newOrder)), 0, pinnedTids.splice(currentIndex, 1)[0]);
          }
        }
        await db.sortedSetAdd(stryMutAct_9fa48("3373") ? `` : (stryCov_9fa48("3373"), `cid:${cid}:tids:pinned`), pinnedTids.map(stryMutAct_9fa48("3374") ? () => undefined : (stryCov_9fa48("3374"), (tid, index) => index)), pinnedTids);
      }
    };
    topicTools.move = async function (tid, data) {
      if (stryMutAct_9fa48("3375")) {
        {}
      } else {
        stryCov_9fa48("3375");
        const cid = parseInt(data.cid, 10);
        const topicData = await Topics.getTopicData(tid);
        if (stryMutAct_9fa48("3378") ? false : stryMutAct_9fa48("3377") ? true : stryMutAct_9fa48("3376") ? topicData : (stryCov_9fa48("3376", "3377", "3378"), !topicData)) {
          if (stryMutAct_9fa48("3379")) {
            {}
          } else {
            stryCov_9fa48("3379");
            throw new Error(stryMutAct_9fa48("3380") ? "" : (stryCov_9fa48("3380"), '[[error:no-topic]]'));
          }
        }
        if (stryMutAct_9fa48("3383") ? cid !== topicData.cid : stryMutAct_9fa48("3382") ? false : stryMutAct_9fa48("3381") ? true : (stryCov_9fa48("3381", "3382", "3383"), cid === topicData.cid)) {
          if (stryMutAct_9fa48("3384")) {
            {}
          } else {
            stryCov_9fa48("3384");
            throw new Error(stryMutAct_9fa48("3385") ? "" : (stryCov_9fa48("3385"), '[[error:cant-move-topic-to-same-category]]'));
          }
        }
        const tags = await Topics.getTopicTags(tid);
        await db.sortedSetsRemove(stryMutAct_9fa48("3386") ? [] : (stryCov_9fa48("3386"), [stryMutAct_9fa48("3387") ? `` : (stryCov_9fa48("3387"), `cid:${topicData.cid}:tids`), stryMutAct_9fa48("3388") ? `` : (stryCov_9fa48("3388"), `cid:${topicData.cid}:tids:pinned`), stryMutAct_9fa48("3389") ? `` : (stryCov_9fa48("3389"), `cid:${topicData.cid}:tids:posts`), stryMutAct_9fa48("3390") ? `` : (stryCov_9fa48("3390"), `cid:${topicData.cid}:tids:votes`), stryMutAct_9fa48("3391") ? `` : (stryCov_9fa48("3391"), `cid:${topicData.cid}:tids:views`), stryMutAct_9fa48("3392") ? `` : (stryCov_9fa48("3392"), `cid:${topicData.cid}:tids:lastposttime`), stryMutAct_9fa48("3393") ? `` : (stryCov_9fa48("3393"), `cid:${topicData.cid}:recent_tids`), stryMutAct_9fa48("3394") ? `` : (stryCov_9fa48("3394"), `cid:${topicData.cid}:uid:${topicData.uid}:tids`), ...tags.map(stryMutAct_9fa48("3395") ? () => undefined : (stryCov_9fa48("3395"), tag => stryMutAct_9fa48("3396") ? `` : (stryCov_9fa48("3396"), `cid:${topicData.cid}:tag:${tag}:topics`)))]), tid);
        topicData.postcount = stryMutAct_9fa48("3399") ? topicData.postcount && 0 : stryMutAct_9fa48("3398") ? false : stryMutAct_9fa48("3397") ? true : (stryCov_9fa48("3397", "3398", "3399"), topicData.postcount || 0);
        const votes = stryMutAct_9fa48("3400") ? topicData.upvotes + topicData.downvotes : (stryCov_9fa48("3400"), topicData.upvotes - topicData.downvotes);
        const bulk = stryMutAct_9fa48("3401") ? [] : (stryCov_9fa48("3401"), [stryMutAct_9fa48("3402") ? [] : (stryCov_9fa48("3402"), [stryMutAct_9fa48("3403") ? `` : (stryCov_9fa48("3403"), `cid:${cid}:tids:lastposttime`), topicData.lastposttime, tid]), stryMutAct_9fa48("3404") ? [] : (stryCov_9fa48("3404"), [stryMutAct_9fa48("3405") ? `` : (stryCov_9fa48("3405"), `cid:${cid}:uid:${topicData.uid}:tids`), topicData.timestamp, tid]), ...tags.map(stryMutAct_9fa48("3406") ? () => undefined : (stryCov_9fa48("3406"), tag => stryMutAct_9fa48("3407") ? [] : (stryCov_9fa48("3407"), [stryMutAct_9fa48("3408") ? `` : (stryCov_9fa48("3408"), `cid:${cid}:tag:${tag}:topics`), topicData.timestamp, tid])))]);
        if (stryMutAct_9fa48("3410") ? false : stryMutAct_9fa48("3409") ? true : (stryCov_9fa48("3409", "3410"), topicData.pinned)) {
          if (stryMutAct_9fa48("3411")) {
            {}
          } else {
            stryCov_9fa48("3411");
            bulk.push(stryMutAct_9fa48("3412") ? [] : (stryCov_9fa48("3412"), [stryMutAct_9fa48("3413") ? `` : (stryCov_9fa48("3413"), `cid:${cid}:tids:pinned`), Date.now(), tid]));
          }
        } else {
          if (stryMutAct_9fa48("3414")) {
            {}
          } else {
            stryCov_9fa48("3414");
            bulk.push(stryMutAct_9fa48("3415") ? [] : (stryCov_9fa48("3415"), [stryMutAct_9fa48("3416") ? `` : (stryCov_9fa48("3416"), `cid:${cid}:tids`), topicData.lastposttime, tid]));
            bulk.push(stryMutAct_9fa48("3417") ? [] : (stryCov_9fa48("3417"), [stryMutAct_9fa48("3418") ? `` : (stryCov_9fa48("3418"), `cid:${cid}:tids:posts`), topicData.postcount, tid]));
            bulk.push(stryMutAct_9fa48("3419") ? [] : (stryCov_9fa48("3419"), [stryMutAct_9fa48("3420") ? `` : (stryCov_9fa48("3420"), `cid:${cid}:tids:votes`), votes, tid]));
            bulk.push(stryMutAct_9fa48("3421") ? [] : (stryCov_9fa48("3421"), [stryMutAct_9fa48("3422") ? `` : (stryCov_9fa48("3422"), `cid:${cid}:tids:views`), topicData.viewcount, tid]));
          }
        }
        await db.sortedSetAddBulk(bulk);
        const oldCid = topicData.cid;
        await categories.moveRecentReplies(tid, oldCid, cid);
        await Promise.all(stryMutAct_9fa48("3423") ? [] : (stryCov_9fa48("3423"), [categories.incrementCategoryFieldBy(oldCid, stryMutAct_9fa48("3424") ? "" : (stryCov_9fa48("3424"), 'topic_count'), stryMutAct_9fa48("3425") ? +1 : (stryCov_9fa48("3425"), -1)), categories.incrementCategoryFieldBy(cid, stryMutAct_9fa48("3426") ? "" : (stryCov_9fa48("3426"), 'topic_count'), 1), categories.updateRecentTidForCid(cid), categories.updateRecentTidForCid(oldCid), Topics.setTopicFields(tid, stryMutAct_9fa48("3427") ? {} : (stryCov_9fa48("3427"), {
          cid: cid,
          oldCid: oldCid
        })), Topics.updateCategoryTagsCount(stryMutAct_9fa48("3428") ? [] : (stryCov_9fa48("3428"), [oldCid, cid]), tags), Topics.events.log(tid, stryMutAct_9fa48("3429") ? {} : (stryCov_9fa48("3429"), {
          type: stryMutAct_9fa48("3430") ? "" : (stryCov_9fa48("3430"), 'move'),
          uid: data.uid,
          fromCid: oldCid
        }))]));
        const hookData = _.clone(data);
        hookData.fromCid = oldCid;
        hookData.toCid = cid;
        hookData.tid = tid;
        plugins.hooks.fire(stryMutAct_9fa48("3431") ? "" : (stryCov_9fa48("3431"), 'action:topic.move'), hookData);
      }
    };
  }
};