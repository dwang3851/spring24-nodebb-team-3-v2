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
const posts = require('../posts');
const categories = require('../categories');
const privileges = require('../privileges');
const plugins = require('../plugins');
const meta = require('../meta');
module.exports = function (Topics) {
  if (stryMutAct_9fa48("900")) {
    {}
  } else {
    stryCov_9fa48("900");
    Topics.createTopicFromPosts = async function (uid, title, pids, fromTid) {
      if (stryMutAct_9fa48("901")) {
        {}
      } else {
        stryCov_9fa48("901");
        if (stryMutAct_9fa48("903") ? false : stryMutAct_9fa48("902") ? true : (stryCov_9fa48("902", "903"), title)) {
          if (stryMutAct_9fa48("904")) {
            {}
          } else {
            stryCov_9fa48("904");
            title = stryMutAct_9fa48("905") ? title : (stryCov_9fa48("905"), title.trim());
          }
        }
        if (stryMutAct_9fa48("909") ? title.length >= meta.config.minimumTitleLength : stryMutAct_9fa48("908") ? title.length <= meta.config.minimumTitleLength : stryMutAct_9fa48("907") ? false : stryMutAct_9fa48("906") ? true : (stryCov_9fa48("906", "907", "908", "909"), title.length < meta.config.minimumTitleLength)) {
          if (stryMutAct_9fa48("910")) {
            {}
          } else {
            stryCov_9fa48("910");
            throw new Error(stryMutAct_9fa48("911") ? `` : (stryCov_9fa48("911"), `[[error:title-too-short, ${meta.config.minimumTitleLength}]]`));
          }
        } else if (stryMutAct_9fa48("915") ? title.length <= meta.config.maximumTitleLength : stryMutAct_9fa48("914") ? title.length >= meta.config.maximumTitleLength : stryMutAct_9fa48("913") ? false : stryMutAct_9fa48("912") ? true : (stryCov_9fa48("912", "913", "914", "915"), title.length > meta.config.maximumTitleLength)) {
          if (stryMutAct_9fa48("916")) {
            {}
          } else {
            stryCov_9fa48("916");
            throw new Error(stryMutAct_9fa48("917") ? `` : (stryCov_9fa48("917"), `[[error:title-too-long, ${meta.config.maximumTitleLength}]]`));
          }
        }
        if (stryMutAct_9fa48("920") ? !pids && !pids.length : stryMutAct_9fa48("919") ? false : stryMutAct_9fa48("918") ? true : (stryCov_9fa48("918", "919", "920"), (stryMutAct_9fa48("921") ? pids : (stryCov_9fa48("921"), !pids)) || (stryMutAct_9fa48("922") ? pids.length : (stryCov_9fa48("922"), !pids.length)))) {
          if (stryMutAct_9fa48("923")) {
            {}
          } else {
            stryCov_9fa48("923");
            throw new Error(stryMutAct_9fa48("924") ? "" : (stryCov_9fa48("924"), '[[error:invalid-pid]]'));
          }
        }
        stryMutAct_9fa48("925") ? pids : (stryCov_9fa48("925"), pids.sort(stryMutAct_9fa48("926") ? () => undefined : (stryCov_9fa48("926"), (a, b) => stryMutAct_9fa48("927") ? a + b : (stryCov_9fa48("927"), a - b))));
        const mainPid = pids[0];
        const cid = await posts.getCidByPid(mainPid);
        const [postData, isAdminOrMod] = await Promise.all(stryMutAct_9fa48("928") ? [] : (stryCov_9fa48("928"), [posts.getPostData(mainPid), privileges.categories.isAdminOrMod(cid, uid)]));
        if (stryMutAct_9fa48("931") ? false : stryMutAct_9fa48("930") ? true : stryMutAct_9fa48("929") ? isAdminOrMod : (stryCov_9fa48("929", "930", "931"), !isAdminOrMod)) {
          if (stryMutAct_9fa48("932")) {
            {}
          } else {
            stryCov_9fa48("932");
            throw new Error(stryMutAct_9fa48("933") ? "" : (stryCov_9fa48("933"), '[[error:no-privileges]]'));
          }
        }
        const scheduled = stryMutAct_9fa48("937") ? postData.timestamp <= Date.now() : stryMutAct_9fa48("936") ? postData.timestamp >= Date.now() : stryMutAct_9fa48("935") ? false : stryMutAct_9fa48("934") ? true : (stryCov_9fa48("934", "935", "936", "937"), postData.timestamp > Date.now());
        const params = stryMutAct_9fa48("938") ? {} : (stryCov_9fa48("938"), {
          uid: postData.uid,
          title: title,
          cid: cid,
          timestamp: stryMutAct_9fa48("941") ? scheduled || postData.timestamp : stryMutAct_9fa48("940") ? false : stryMutAct_9fa48("939") ? true : (stryCov_9fa48("939", "940", "941"), scheduled && postData.timestamp)
        });
        const result = await plugins.hooks.fire(stryMutAct_9fa48("942") ? "" : (stryCov_9fa48("942"), 'filter:topic.fork'), stryMutAct_9fa48("943") ? {} : (stryCov_9fa48("943"), {
          params: params,
          tid: postData.tid
        }));
        const tid = await Topics.create(result.params);
        await Topics.updateTopicBookmarks(fromTid, pids);
        for (const pid of pids) {
          if (stryMutAct_9fa48("944")) {
            {}
          } else {
            stryCov_9fa48("944");
            /* eslint-disable no-await-in-loop */
            const canEdit = await privileges.posts.canEdit(pid, uid);
            if (stryMutAct_9fa48("947") ? false : stryMutAct_9fa48("946") ? true : stryMutAct_9fa48("945") ? canEdit.flag : (stryCov_9fa48("945", "946", "947"), !canEdit.flag)) {
              if (stryMutAct_9fa48("948")) {
                {}
              } else {
                stryCov_9fa48("948");
                throw new Error(canEdit.message);
              }
            }
            await Topics.movePostToTopic(uid, pid, tid, scheduled);
          }
        }
        await Topics.updateLastPostTime(tid, scheduled ? stryMutAct_9fa48("949") ? postData.timestamp - 1 : (stryCov_9fa48("949"), postData.timestamp + 1) : Date.now());
        await Promise.all(stryMutAct_9fa48("950") ? [] : (stryCov_9fa48("950"), [Topics.setTopicFields(tid, stryMutAct_9fa48("951") ? {} : (stryCov_9fa48("951"), {
          upvotes: postData.upvotes,
          downvotes: postData.downvotes
        })), db.sortedSetsAdd(stryMutAct_9fa48("952") ? [] : (stryCov_9fa48("952"), [stryMutAct_9fa48("953") ? "" : (stryCov_9fa48("953"), 'topics:votes'), stryMutAct_9fa48("954") ? `` : (stryCov_9fa48("954"), `cid:${cid}:tids:votes`)]), postData.votes, tid), Topics.events.log(fromTid, stryMutAct_9fa48("955") ? {} : (stryCov_9fa48("955"), {
          type: stryMutAct_9fa48("956") ? "" : (stryCov_9fa48("956"), 'fork'),
          uid,
          href: stryMutAct_9fa48("957") ? `` : (stryCov_9fa48("957"), `/topic/${tid}`),
          timestamp: postData.timestamp
        }))]));
        plugins.hooks.fire(stryMutAct_9fa48("958") ? "" : (stryCov_9fa48("958"), 'action:topic.fork'), stryMutAct_9fa48("959") ? {} : (stryCov_9fa48("959"), {
          tid: tid,
          fromTid: fromTid,
          uid: uid
        }));
        return await Topics.getTopicData(tid);
      }
    };
    Topics.movePostToTopic = async function (callerUid, pid, tid, forceScheduled = stryMutAct_9fa48("960") ? true : (stryCov_9fa48("960"), false)) {
      if (stryMutAct_9fa48("961")) {
        {}
      } else {
        stryCov_9fa48("961");
        tid = parseInt(tid, 10);
        const topicData = await Topics.getTopicFields(tid, stryMutAct_9fa48("962") ? [] : (stryCov_9fa48("962"), [stryMutAct_9fa48("963") ? "" : (stryCov_9fa48("963"), 'tid'), stryMutAct_9fa48("964") ? "" : (stryCov_9fa48("964"), 'scheduled')]));
        if (stryMutAct_9fa48("967") ? false : stryMutAct_9fa48("966") ? true : stryMutAct_9fa48("965") ? topicData.tid : (stryCov_9fa48("965", "966", "967"), !topicData.tid)) {
          if (stryMutAct_9fa48("968")) {
            {}
          } else {
            stryCov_9fa48("968");
            throw new Error(stryMutAct_9fa48("969") ? "" : (stryCov_9fa48("969"), '[[error:no-topic]]'));
          }
        }
        if (stryMutAct_9fa48("972") ? !forceScheduled || topicData.scheduled : stryMutAct_9fa48("971") ? false : stryMutAct_9fa48("970") ? true : (stryCov_9fa48("970", "971", "972"), (stryMutAct_9fa48("973") ? forceScheduled : (stryCov_9fa48("973"), !forceScheduled)) && topicData.scheduled)) {
          if (stryMutAct_9fa48("974")) {
            {}
          } else {
            stryCov_9fa48("974");
            throw new Error(stryMutAct_9fa48("975") ? "" : (stryCov_9fa48("975"), '[[error:cant-move-posts-to-scheduled]]'));
          }
        }
        const postData = await posts.getPostFields(pid, stryMutAct_9fa48("976") ? [] : (stryCov_9fa48("976"), [stryMutAct_9fa48("977") ? "" : (stryCov_9fa48("977"), 'tid'), stryMutAct_9fa48("978") ? "" : (stryCov_9fa48("978"), 'uid'), stryMutAct_9fa48("979") ? "" : (stryCov_9fa48("979"), 'timestamp'), stryMutAct_9fa48("980") ? "" : (stryCov_9fa48("980"), 'upvotes'), stryMutAct_9fa48("981") ? "" : (stryCov_9fa48("981"), 'downvotes')]));
        if (stryMutAct_9fa48("984") ? !postData && !postData.tid : stryMutAct_9fa48("983") ? false : stryMutAct_9fa48("982") ? true : (stryCov_9fa48("982", "983", "984"), (stryMutAct_9fa48("985") ? postData : (stryCov_9fa48("985"), !postData)) || (stryMutAct_9fa48("986") ? postData.tid : (stryCov_9fa48("986"), !postData.tid)))) {
          if (stryMutAct_9fa48("987")) {
            {}
          } else {
            stryCov_9fa48("987");
            throw new Error(stryMutAct_9fa48("988") ? "" : (stryCov_9fa48("988"), '[[error:no-post]]'));
          }
        }
        const isSourceTopicScheduled = await Topics.getTopicField(postData.tid, stryMutAct_9fa48("989") ? "" : (stryCov_9fa48("989"), 'scheduled'));
        if (stryMutAct_9fa48("992") ? !forceScheduled || isSourceTopicScheduled : stryMutAct_9fa48("991") ? false : stryMutAct_9fa48("990") ? true : (stryCov_9fa48("990", "991", "992"), (stryMutAct_9fa48("993") ? forceScheduled : (stryCov_9fa48("993"), !forceScheduled)) && isSourceTopicScheduled)) {
          if (stryMutAct_9fa48("994")) {
            {}
          } else {
            stryCov_9fa48("994");
            throw new Error(stryMutAct_9fa48("995") ? "" : (stryCov_9fa48("995"), '[[error:cant-move-from-scheduled-to-existing]]'));
          }
        }
        if (stryMutAct_9fa48("998") ? postData.tid !== tid : stryMutAct_9fa48("997") ? false : stryMutAct_9fa48("996") ? true : (stryCov_9fa48("996", "997", "998"), postData.tid === tid)) {
          if (stryMutAct_9fa48("999")) {
            {}
          } else {
            stryCov_9fa48("999");
            throw new Error(stryMutAct_9fa48("1000") ? "" : (stryCov_9fa48("1000"), '[[error:cant-move-to-same-topic]]'));
          }
        }
        postData.pid = pid;
        await Topics.removePostFromTopic(postData.tid, postData);
        await Promise.all(stryMutAct_9fa48("1001") ? [] : (stryCov_9fa48("1001"), [updateCategory(postData, tid), posts.setPostField(pid, stryMutAct_9fa48("1002") ? "" : (stryCov_9fa48("1002"), 'tid'), tid), Topics.addPostToTopic(tid, postData)]));
        await Promise.all(stryMutAct_9fa48("1003") ? [] : (stryCov_9fa48("1003"), [Topics.updateLastPostTimeFromLastPid(tid), Topics.updateLastPostTimeFromLastPid(postData.tid)]));
        plugins.hooks.fire(stryMutAct_9fa48("1004") ? "" : (stryCov_9fa48("1004"), 'action:post.move'), stryMutAct_9fa48("1005") ? {} : (stryCov_9fa48("1005"), {
          uid: callerUid,
          post: postData,
          tid: tid
        }));
      }
    };
    async function updateCategory(postData, toTid) {
      if (stryMutAct_9fa48("1006")) {
        {}
      } else {
        stryCov_9fa48("1006");
        const topicData = await Topics.getTopicsFields(stryMutAct_9fa48("1007") ? [] : (stryCov_9fa48("1007"), [postData.tid, toTid]), stryMutAct_9fa48("1008") ? [] : (stryCov_9fa48("1008"), [stryMutAct_9fa48("1009") ? "" : (stryCov_9fa48("1009"), 'cid'), stryMutAct_9fa48("1010") ? "" : (stryCov_9fa48("1010"), 'pinned')]));
        if (stryMutAct_9fa48("1013") ? !topicData[0].cid && !topicData[1].cid : stryMutAct_9fa48("1012") ? false : stryMutAct_9fa48("1011") ? true : (stryCov_9fa48("1011", "1012", "1013"), (stryMutAct_9fa48("1014") ? topicData[0].cid : (stryCov_9fa48("1014"), !topicData[0].cid)) || (stryMutAct_9fa48("1015") ? topicData[1].cid : (stryCov_9fa48("1015"), !topicData[1].cid)))) {
          if (stryMutAct_9fa48("1016")) {
            {}
          } else {
            stryCov_9fa48("1016");
            return;
          }
        }
        if (stryMutAct_9fa48("1019") ? false : stryMutAct_9fa48("1018") ? true : stryMutAct_9fa48("1017") ? topicData[0].pinned : (stryCov_9fa48("1017", "1018", "1019"), !topicData[0].pinned)) {
          if (stryMutAct_9fa48("1020")) {
            {}
          } else {
            stryCov_9fa48("1020");
            await db.sortedSetIncrBy(stryMutAct_9fa48("1021") ? `` : (stryCov_9fa48("1021"), `cid:${topicData[0].cid}:tids:posts`), stryMutAct_9fa48("1022") ? +1 : (stryCov_9fa48("1022"), -1), postData.tid);
          }
        }
        if (stryMutAct_9fa48("1025") ? false : stryMutAct_9fa48("1024") ? true : stryMutAct_9fa48("1023") ? topicData[1].pinned : (stryCov_9fa48("1023", "1024", "1025"), !topicData[1].pinned)) {
          if (stryMutAct_9fa48("1026")) {
            {}
          } else {
            stryCov_9fa48("1026");
            await db.sortedSetIncrBy(stryMutAct_9fa48("1027") ? `` : (stryCov_9fa48("1027"), `cid:${topicData[1].cid}:tids:posts`), 1, toTid);
          }
        }
        if (stryMutAct_9fa48("1030") ? topicData[0].cid !== topicData[1].cid : stryMutAct_9fa48("1029") ? false : stryMutAct_9fa48("1028") ? true : (stryCov_9fa48("1028", "1029", "1030"), topicData[0].cid === topicData[1].cid)) {
          if (stryMutAct_9fa48("1031")) {
            {}
          } else {
            stryCov_9fa48("1031");
            await categories.updateRecentTidForCid(topicData[0].cid);
            return;
          }
        }
        const removeFrom = stryMutAct_9fa48("1032") ? [] : (stryCov_9fa48("1032"), [stryMutAct_9fa48("1033") ? `` : (stryCov_9fa48("1033"), `cid:${topicData[0].cid}:pids`), stryMutAct_9fa48("1034") ? `` : (stryCov_9fa48("1034"), `cid:${topicData[0].cid}:uid:${postData.uid}:pids`), stryMutAct_9fa48("1035") ? `` : (stryCov_9fa48("1035"), `cid:${topicData[0].cid}:uid:${postData.uid}:pids:votes`)]);
        const tasks = stryMutAct_9fa48("1036") ? [] : (stryCov_9fa48("1036"), [db.incrObjectFieldBy(stryMutAct_9fa48("1037") ? `` : (stryCov_9fa48("1037"), `category:${topicData[0].cid}`), stryMutAct_9fa48("1038") ? "" : (stryCov_9fa48("1038"), 'post_count'), stryMutAct_9fa48("1039") ? +1 : (stryCov_9fa48("1039"), -1)), db.incrObjectFieldBy(stryMutAct_9fa48("1040") ? `` : (stryCov_9fa48("1040"), `category:${topicData[1].cid}`), stryMutAct_9fa48("1041") ? "" : (stryCov_9fa48("1041"), 'post_count'), 1), db.sortedSetRemove(removeFrom, postData.pid), db.sortedSetAdd(stryMutAct_9fa48("1042") ? `` : (stryCov_9fa48("1042"), `cid:${topicData[1].cid}:pids`), postData.timestamp, postData.pid), db.sortedSetAdd(stryMutAct_9fa48("1043") ? `` : (stryCov_9fa48("1043"), `cid:${topicData[1].cid}:uid:${postData.uid}:pids`), postData.timestamp, postData.pid)]);
        if (stryMutAct_9fa48("1046") ? postData.votes > 0 && postData.votes < 0 : stryMutAct_9fa48("1045") ? false : stryMutAct_9fa48("1044") ? true : (stryCov_9fa48("1044", "1045", "1046"), (stryMutAct_9fa48("1049") ? postData.votes <= 0 : stryMutAct_9fa48("1048") ? postData.votes >= 0 : stryMutAct_9fa48("1047") ? false : (stryCov_9fa48("1047", "1048", "1049"), postData.votes > 0)) || (stryMutAct_9fa48("1052") ? postData.votes >= 0 : stryMutAct_9fa48("1051") ? postData.votes <= 0 : stryMutAct_9fa48("1050") ? false : (stryCov_9fa48("1050", "1051", "1052"), postData.votes < 0)))) {
          if (stryMutAct_9fa48("1053")) {
            {}
          } else {
            stryCov_9fa48("1053");
            tasks.push(db.sortedSetAdd(stryMutAct_9fa48("1054") ? `` : (stryCov_9fa48("1054"), `cid:${topicData[1].cid}:uid:${postData.uid}:pids:votes`), postData.votes, postData.pid));
          }
        }
        await Promise.all(tasks);
        await Promise.all(stryMutAct_9fa48("1055") ? [] : (stryCov_9fa48("1055"), [categories.updateRecentTidForCid(topicData[0].cid), categories.updateRecentTidForCid(topicData[1].cid)]));
      }
    }
  }
};