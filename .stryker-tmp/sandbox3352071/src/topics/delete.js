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
const user = require('../user');
const posts = require('../posts');
const categories = require('../categories');
const plugins = require('../plugins');
const batch = require('../batch');
module.exports = function (Topics) {
  if (stryMutAct_9fa48("460")) {
    {}
  } else {
    stryCov_9fa48("460");
    Topics.delete = async function (tid, uid) {
      if (stryMutAct_9fa48("461")) {
        {}
      } else {
        stryCov_9fa48("461");
        await removeTopicPidsFromCid(tid);
        await Topics.setTopicFields(tid, stryMutAct_9fa48("462") ? {} : (stryCov_9fa48("462"), {
          deleted: 1,
          deleterUid: uid,
          deletedTimestamp: Date.now()
        }));
      }
    };
    async function removeTopicPidsFromCid(tid) {
      if (stryMutAct_9fa48("463")) {
        {}
      } else {
        stryCov_9fa48("463");
        const [cid, pids] = await Promise.all(stryMutAct_9fa48("464") ? [] : (stryCov_9fa48("464"), [Topics.getTopicField(tid, stryMutAct_9fa48("465") ? "" : (stryCov_9fa48("465"), 'cid')), Topics.getPids(tid)]));
        await db.sortedSetRemove(stryMutAct_9fa48("466") ? `` : (stryCov_9fa48("466"), `cid:${cid}:pids`), pids);
        await categories.updateRecentTidForCid(cid);
      }
    }
    async function addTopicPidsToCid(tid) {
      if (stryMutAct_9fa48("467")) {
        {}
      } else {
        stryCov_9fa48("467");
        const [cid, pids] = await Promise.all(stryMutAct_9fa48("468") ? [] : (stryCov_9fa48("468"), [Topics.getTopicField(tid, stryMutAct_9fa48("469") ? "" : (stryCov_9fa48("469"), 'cid')), Topics.getPids(tid)]));
        let postData = await posts.getPostsFields(pids, stryMutAct_9fa48("470") ? [] : (stryCov_9fa48("470"), [stryMutAct_9fa48("471") ? "" : (stryCov_9fa48("471"), 'pid'), stryMutAct_9fa48("472") ? "" : (stryCov_9fa48("472"), 'timestamp'), stryMutAct_9fa48("473") ? "" : (stryCov_9fa48("473"), 'deleted')]));
        postData = stryMutAct_9fa48("474") ? postData : (stryCov_9fa48("474"), postData.filter(stryMutAct_9fa48("475") ? () => undefined : (stryCov_9fa48("475"), post => stryMutAct_9fa48("478") ? post || !post.deleted : stryMutAct_9fa48("477") ? false : stryMutAct_9fa48("476") ? true : (stryCov_9fa48("476", "477", "478"), post && (stryMutAct_9fa48("479") ? post.deleted : (stryCov_9fa48("479"), !post.deleted))))));
        const pidsToAdd = postData.map(stryMutAct_9fa48("480") ? () => undefined : (stryCov_9fa48("480"), post => post.pid));
        const scores = postData.map(stryMutAct_9fa48("481") ? () => undefined : (stryCov_9fa48("481"), post => post.timestamp));
        await db.sortedSetAdd(stryMutAct_9fa48("482") ? `` : (stryCov_9fa48("482"), `cid:${cid}:pids`), scores, pidsToAdd);
        await categories.updateRecentTidForCid(cid);
      }
    }
    Topics.restore = async function (tid) {
      if (stryMutAct_9fa48("483")) {
        {}
      } else {
        stryCov_9fa48("483");
        await Promise.all(stryMutAct_9fa48("484") ? [] : (stryCov_9fa48("484"), [Topics.deleteTopicFields(tid, stryMutAct_9fa48("485") ? [] : (stryCov_9fa48("485"), [stryMutAct_9fa48("486") ? "" : (stryCov_9fa48("486"), 'deleterUid'), stryMutAct_9fa48("487") ? "" : (stryCov_9fa48("487"), 'deletedTimestamp')])), addTopicPidsToCid(tid)]));
        await Topics.setTopicField(tid, stryMutAct_9fa48("488") ? "" : (stryCov_9fa48("488"), 'deleted'), 0);
      }
    };
    Topics.purgePostsAndTopic = async function (tid, uid) {
      if (stryMutAct_9fa48("489")) {
        {}
      } else {
        stryCov_9fa48("489");
        const mainPid = await Topics.getTopicField(tid, stryMutAct_9fa48("490") ? "" : (stryCov_9fa48("490"), 'mainPid'));
        await batch.processSortedSet(stryMutAct_9fa48("491") ? `` : (stryCov_9fa48("491"), `tid:${tid}:posts`), async pids => {
          if (stryMutAct_9fa48("492")) {
            {}
          } else {
            stryCov_9fa48("492");
            await posts.purge(pids, uid);
          }
        }, stryMutAct_9fa48("493") ? {} : (stryCov_9fa48("493"), {
          alwaysStartAt: 0,
          batch: 500
        }));
        await posts.purge(mainPid, uid);
        await Topics.purge(tid, uid);
      }
    };
    Topics.purge = async function (tid, uid) {
      if (stryMutAct_9fa48("494")) {
        {}
      } else {
        stryCov_9fa48("494");
        const [deletedTopic, tags] = await Promise.all(stryMutAct_9fa48("495") ? [] : (stryCov_9fa48("495"), [Topics.getTopicData(tid), Topics.getTopicTags(tid)]));
        if (stryMutAct_9fa48("498") ? false : stryMutAct_9fa48("497") ? true : stryMutAct_9fa48("496") ? deletedTopic : (stryCov_9fa48("496", "497", "498"), !deletedTopic)) {
          if (stryMutAct_9fa48("499")) {
            {}
          } else {
            stryCov_9fa48("499");
            return;
          }
        }
        deletedTopic.tags = tags;
        await deleteFromFollowersIgnorers(tid);
        await Promise.all(stryMutAct_9fa48("500") ? [] : (stryCov_9fa48("500"), [db.deleteAll(stryMutAct_9fa48("501") ? [] : (stryCov_9fa48("501"), [stryMutAct_9fa48("502") ? `` : (stryCov_9fa48("502"), `tid:${tid}:followers`), stryMutAct_9fa48("503") ? `` : (stryCov_9fa48("503"), `tid:${tid}:ignorers`), stryMutAct_9fa48("504") ? `` : (stryCov_9fa48("504"), `tid:${tid}:posts`), stryMutAct_9fa48("505") ? `` : (stryCov_9fa48("505"), `tid:${tid}:posts:votes`), stryMutAct_9fa48("506") ? `` : (stryCov_9fa48("506"), `tid:${tid}:bookmarks`), stryMutAct_9fa48("507") ? `` : (stryCov_9fa48("507"), `tid:${tid}:posters`)])), db.sortedSetsRemove(stryMutAct_9fa48("508") ? [] : (stryCov_9fa48("508"), [stryMutAct_9fa48("509") ? "" : (stryCov_9fa48("509"), 'topics:tid'), stryMutAct_9fa48("510") ? "" : (stryCov_9fa48("510"), 'topics:recent'), stryMutAct_9fa48("511") ? "" : (stryCov_9fa48("511"), 'topics:posts'), stryMutAct_9fa48("512") ? "" : (stryCov_9fa48("512"), 'topics:views'), stryMutAct_9fa48("513") ? "" : (stryCov_9fa48("513"), 'topics:votes'), stryMutAct_9fa48("514") ? "" : (stryCov_9fa48("514"), 'topics:scheduled')]), tid), deleteTopicFromCategoryAndUser(tid), Topics.deleteTopicTags(tid), Topics.events.purge(tid), Topics.thumbs.deleteAll(tid), reduceCounters(tid)]));
        plugins.hooks.fire(stryMutAct_9fa48("515") ? "" : (stryCov_9fa48("515"), 'action:topic.purge'), stryMutAct_9fa48("516") ? {} : (stryCov_9fa48("516"), {
          topic: deletedTopic,
          uid: uid
        }));
        await db.delete(stryMutAct_9fa48("517") ? `` : (stryCov_9fa48("517"), `topic:${tid}`));
      }
    };
    async function deleteFromFollowersIgnorers(tid) {
      if (stryMutAct_9fa48("518")) {
        {}
      } else {
        stryCov_9fa48("518");
        const [followers, ignorers] = await Promise.all(stryMutAct_9fa48("519") ? [] : (stryCov_9fa48("519"), [db.getSetMembers(stryMutAct_9fa48("520") ? `` : (stryCov_9fa48("520"), `tid:${tid}:followers`)), db.getSetMembers(stryMutAct_9fa48("521") ? `` : (stryCov_9fa48("521"), `tid:${tid}:ignorers`))]));
        const followerKeys = followers.map(stryMutAct_9fa48("522") ? () => undefined : (stryCov_9fa48("522"), uid => stryMutAct_9fa48("523") ? `` : (stryCov_9fa48("523"), `uid:${uid}:followed_tids`)));
        const ignorerKeys = ignorers.map(stryMutAct_9fa48("524") ? () => undefined : (stryCov_9fa48("524"), uid => stryMutAct_9fa48("525") ? `` : (stryCov_9fa48("525"), `uid:${uid}ignored_tids`)));
        await db.sortedSetsRemove(followerKeys.concat(ignorerKeys), tid);
      }
    }
    async function deleteTopicFromCategoryAndUser(tid) {
      if (stryMutAct_9fa48("526")) {
        {}
      } else {
        stryCov_9fa48("526");
        const topicData = await Topics.getTopicFields(tid, stryMutAct_9fa48("527") ? [] : (stryCov_9fa48("527"), [stryMutAct_9fa48("528") ? "" : (stryCov_9fa48("528"), 'cid'), stryMutAct_9fa48("529") ? "" : (stryCov_9fa48("529"), 'uid')]));
        await Promise.all(stryMutAct_9fa48("530") ? [] : (stryCov_9fa48("530"), [db.sortedSetsRemove(stryMutAct_9fa48("531") ? [] : (stryCov_9fa48("531"), [stryMutAct_9fa48("532") ? `` : (stryCov_9fa48("532"), `cid:${topicData.cid}:tids`), stryMutAct_9fa48("533") ? `` : (stryCov_9fa48("533"), `cid:${topicData.cid}:tids:pinned`), stryMutAct_9fa48("534") ? `` : (stryCov_9fa48("534"), `cid:${topicData.cid}:tids:posts`), stryMutAct_9fa48("535") ? `` : (stryCov_9fa48("535"), `cid:${topicData.cid}:tids:lastposttime`), stryMutAct_9fa48("536") ? `` : (stryCov_9fa48("536"), `cid:${topicData.cid}:tids:votes`), stryMutAct_9fa48("537") ? `` : (stryCov_9fa48("537"), `cid:${topicData.cid}:tids:views`), stryMutAct_9fa48("538") ? `` : (stryCov_9fa48("538"), `cid:${topicData.cid}:recent_tids`), stryMutAct_9fa48("539") ? `` : (stryCov_9fa48("539"), `cid:${topicData.cid}:uid:${topicData.uid}:tids`), stryMutAct_9fa48("540") ? `` : (stryCov_9fa48("540"), `uid:${topicData.uid}:topics`)]), tid), user.decrementUserFieldBy(topicData.uid, stryMutAct_9fa48("541") ? "" : (stryCov_9fa48("541"), 'topiccount'), 1)]));
        await categories.updateRecentTidForCid(topicData.cid);
      }
    }
    async function reduceCounters(tid) {
      if (stryMutAct_9fa48("542")) {
        {}
      } else {
        stryCov_9fa48("542");
        const incr = stryMutAct_9fa48("543") ? +1 : (stryCov_9fa48("543"), -1);
        await db.incrObjectFieldBy(stryMutAct_9fa48("544") ? "" : (stryCov_9fa48("544"), 'global'), stryMutAct_9fa48("545") ? "" : (stryCov_9fa48("545"), 'topicCount'), incr);
        const topicData = await Topics.getTopicFields(tid, stryMutAct_9fa48("546") ? [] : (stryCov_9fa48("546"), [stryMutAct_9fa48("547") ? "" : (stryCov_9fa48("547"), 'cid'), stryMutAct_9fa48("548") ? "" : (stryCov_9fa48("548"), 'postcount')]));
        const postCountChange = stryMutAct_9fa48("549") ? incr / topicData.postcount : (stryCov_9fa48("549"), incr * topicData.postcount);
        await Promise.all(stryMutAct_9fa48("550") ? [] : (stryCov_9fa48("550"), [db.incrObjectFieldBy(stryMutAct_9fa48("551") ? "" : (stryCov_9fa48("551"), 'global'), stryMutAct_9fa48("552") ? "" : (stryCov_9fa48("552"), 'postCount'), postCountChange), db.incrObjectFieldBy(stryMutAct_9fa48("553") ? `` : (stryCov_9fa48("553"), `category:${topicData.cid}`), stryMutAct_9fa48("554") ? "" : (stryCov_9fa48("554"), 'post_count'), postCountChange), db.incrObjectFieldBy(stryMutAct_9fa48("555") ? `` : (stryCov_9fa48("555"), `category:${topicData.cid}`), stryMutAct_9fa48("556") ? "" : (stryCov_9fa48("556"), 'topic_count'), incr)]));
      }
    }
  }
};