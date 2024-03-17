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
const utils = require('../utils');
const slugify = require('../slugify');
const plugins = require('../plugins');
const analytics = require('../analytics');
const user = require('../user');
const meta = require('../meta');
const posts = require('../posts');
const privileges = require('../privileges');
const categories = require('../categories');
const translator = require('../translator');
module.exports = function (Topics) {
  if (stryMutAct_9fa48("58")) {
    {}
  } else {
    stryCov_9fa48("58");
    Topics.create = async function (data) {
      if (stryMutAct_9fa48("59")) {
        {}
      } else {
        stryCov_9fa48("59");
        // This is an internal method, consider using Topics.post instead
        const timestamp = stryMutAct_9fa48("62") ? data.timestamp && Date.now() : stryMutAct_9fa48("61") ? false : stryMutAct_9fa48("60") ? true : (stryCov_9fa48("60", "61", "62"), data.timestamp || Date.now());
        const tid = await db.incrObjectField(stryMutAct_9fa48("63") ? "" : (stryCov_9fa48("63"), 'global'), stryMutAct_9fa48("64") ? "" : (stryCov_9fa48("64"), 'nextTid'));
        let topicData = stryMutAct_9fa48("65") ? {} : (stryCov_9fa48("65"), {
          tid: tid,
          uid: data.uid,
          cid: data.cid,
          mainPid: 0,
          title: data.title,
          slug: stryMutAct_9fa48("66") ? `` : (stryCov_9fa48("66"), `${tid}/${stryMutAct_9fa48("69") ? slugify(data.title) && 'topic' : stryMutAct_9fa48("68") ? false : stryMutAct_9fa48("67") ? true : (stryCov_9fa48("67", "68", "69"), slugify(data.title) || (stryMutAct_9fa48("70") ? "" : (stryCov_9fa48("70"), 'topic')))}`),
          timestamp: timestamp,
          lastposttime: 0,
          postcount: 0,
          viewcount: 0
        });
        if (stryMutAct_9fa48("73") ? Array.isArray(data.tags) || data.tags.length : stryMutAct_9fa48("72") ? false : stryMutAct_9fa48("71") ? true : (stryCov_9fa48("71", "72", "73"), Array.isArray(data.tags) && data.tags.length)) {
          if (stryMutAct_9fa48("74")) {
            {}
          } else {
            stryCov_9fa48("74");
            topicData.tags = data.tags.join(stryMutAct_9fa48("75") ? "" : (stryCov_9fa48("75"), ','));
          }
        }
        const result = await plugins.hooks.fire(stryMutAct_9fa48("76") ? "" : (stryCov_9fa48("76"), 'filter:topic.create'), stryMutAct_9fa48("77") ? {} : (stryCov_9fa48("77"), {
          topic: topicData,
          data: data
        }));
        topicData = result.topic;
        await db.setObject(stryMutAct_9fa48("78") ? `` : (stryCov_9fa48("78"), `topic:${topicData.tid}`), topicData);
        const timestampedSortedSetKeys = stryMutAct_9fa48("79") ? [] : (stryCov_9fa48("79"), [stryMutAct_9fa48("80") ? "" : (stryCov_9fa48("80"), 'topics:tid'), stryMutAct_9fa48("81") ? `` : (stryCov_9fa48("81"), `cid:${topicData.cid}:tids`), stryMutAct_9fa48("82") ? `` : (stryCov_9fa48("82"), `cid:${topicData.cid}:uid:${topicData.uid}:tids`)]);
        const scheduled = stryMutAct_9fa48("86") ? timestamp <= Date.now() : stryMutAct_9fa48("85") ? timestamp >= Date.now() : stryMutAct_9fa48("84") ? false : stryMutAct_9fa48("83") ? true : (stryCov_9fa48("83", "84", "85", "86"), timestamp > Date.now());
        if (stryMutAct_9fa48("88") ? false : stryMutAct_9fa48("87") ? true : (stryCov_9fa48("87", "88"), scheduled)) {
          if (stryMutAct_9fa48("89")) {
            {}
          } else {
            stryCov_9fa48("89");
            timestampedSortedSetKeys.push(stryMutAct_9fa48("90") ? "" : (stryCov_9fa48("90"), 'topics:scheduled'));
          }
        }
        await Promise.all(stryMutAct_9fa48("91") ? [] : (stryCov_9fa48("91"), [db.sortedSetsAdd(timestampedSortedSetKeys, timestamp, topicData.tid), db.sortedSetsAdd(stryMutAct_9fa48("92") ? [] : (stryCov_9fa48("92"), [stryMutAct_9fa48("93") ? "" : (stryCov_9fa48("93"), 'topics:views'), stryMutAct_9fa48("94") ? "" : (stryCov_9fa48("94"), 'topics:posts'), stryMutAct_9fa48("95") ? "" : (stryCov_9fa48("95"), 'topics:votes'), stryMutAct_9fa48("96") ? `` : (stryCov_9fa48("96"), `cid:${topicData.cid}:tids:votes`), stryMutAct_9fa48("97") ? `` : (stryCov_9fa48("97"), `cid:${topicData.cid}:tids:posts`), stryMutAct_9fa48("98") ? `` : (stryCov_9fa48("98"), `cid:${topicData.cid}:tids:views`)]), 0, topicData.tid), user.addTopicIdToUser(topicData.uid, topicData.tid, timestamp), db.incrObjectField(stryMutAct_9fa48("99") ? `` : (stryCov_9fa48("99"), `category:${topicData.cid}`), stryMutAct_9fa48("100") ? "" : (stryCov_9fa48("100"), 'topic_count')), db.incrObjectField(stryMutAct_9fa48("101") ? "" : (stryCov_9fa48("101"), 'global'), stryMutAct_9fa48("102") ? "" : (stryCov_9fa48("102"), 'topicCount')), Topics.createTags(data.tags, topicData.tid, timestamp), scheduled ? Promise.resolve() : categories.updateRecentTid(topicData.cid, topicData.tid)]));
        if (stryMutAct_9fa48("104") ? false : stryMutAct_9fa48("103") ? true : (stryCov_9fa48("103", "104"), scheduled)) {
          if (stryMutAct_9fa48("105")) {
            {}
          } else {
            stryCov_9fa48("105");
            await Topics.scheduled.pin(tid, topicData);
          }
        }
        plugins.hooks.fire(stryMutAct_9fa48("106") ? "" : (stryCov_9fa48("106"), 'action:topic.save'), stryMutAct_9fa48("107") ? {} : (stryCov_9fa48("107"), {
          topic: _.clone(topicData),
          data: data
        }));
        return topicData.tid;
      }
    };
    Topics.post = async function (data) {
      if (stryMutAct_9fa48("108")) {
        {}
      } else {
        stryCov_9fa48("108");
        data = await plugins.hooks.fire(stryMutAct_9fa48("109") ? "" : (stryCov_9fa48("109"), 'filter:topic.post'), data);
        const {
          uid
        } = data;
        data.title = stryMutAct_9fa48("110") ? String(data.title) : (stryCov_9fa48("110"), String(data.title).trim());
        data.tags = stryMutAct_9fa48("113") ? data.tags && [] : stryMutAct_9fa48("112") ? false : stryMutAct_9fa48("111") ? true : (stryCov_9fa48("111", "112", "113"), data.tags || (stryMutAct_9fa48("114") ? ["Stryker was here"] : (stryCov_9fa48("114"), [])));
        if (stryMutAct_9fa48("116") ? false : stryMutAct_9fa48("115") ? true : (stryCov_9fa48("115", "116"), data.content)) {
          if (stryMutAct_9fa48("117")) {
            {}
          } else {
            stryCov_9fa48("117");
            data.content = utils.rtrim(data.content);
          }
        }
        Topics.checkTitle(data.title);
        await Topics.validateTags(data.tags, data.cid, uid);
        data.tags = await Topics.filterTags(data.tags, data.cid);
        if (stryMutAct_9fa48("120") ? false : stryMutAct_9fa48("119") ? true : stryMutAct_9fa48("118") ? data.fromQueue : (stryCov_9fa48("118", "119", "120"), !data.fromQueue)) {
          if (stryMutAct_9fa48("121")) {
            {}
          } else {
            stryCov_9fa48("121");
            Topics.checkContent(data.content);
          }
        }
        const [categoryExists, canCreate, canTag] = await Promise.all(stryMutAct_9fa48("122") ? [] : (stryCov_9fa48("122"), [categories.exists(data.cid), privileges.categories.can(stryMutAct_9fa48("123") ? "" : (stryCov_9fa48("123"), 'topics:create'), data.cid, uid), privileges.categories.can(stryMutAct_9fa48("124") ? "" : (stryCov_9fa48("124"), 'topics:tag'), data.cid, uid)]));
        if (stryMutAct_9fa48("127") ? false : stryMutAct_9fa48("126") ? true : stryMutAct_9fa48("125") ? categoryExists : (stryCov_9fa48("125", "126", "127"), !categoryExists)) {
          if (stryMutAct_9fa48("128")) {
            {}
          } else {
            stryCov_9fa48("128");
            throw new Error(stryMutAct_9fa48("129") ? "" : (stryCov_9fa48("129"), '[[error:no-category]]'));
          }
        }
        if (stryMutAct_9fa48("132") ? !canCreate && !canTag && data.tags.length : stryMutAct_9fa48("131") ? false : stryMutAct_9fa48("130") ? true : (stryCov_9fa48("130", "131", "132"), (stryMutAct_9fa48("133") ? canCreate : (stryCov_9fa48("133"), !canCreate)) || (stryMutAct_9fa48("135") ? !canTag || data.tags.length : stryMutAct_9fa48("134") ? false : (stryCov_9fa48("134", "135"), (stryMutAct_9fa48("136") ? canTag : (stryCov_9fa48("136"), !canTag)) && data.tags.length)))) {
          if (stryMutAct_9fa48("137")) {
            {}
          } else {
            stryCov_9fa48("137");
            throw new Error(stryMutAct_9fa48("138") ? "" : (stryCov_9fa48("138"), '[[error:no-privileges]]'));
          }
        }
        await guestHandleValid(data);
        if (stryMutAct_9fa48("141") ? false : stryMutAct_9fa48("140") ? true : stryMutAct_9fa48("139") ? data.fromQueue : (stryCov_9fa48("139", "140", "141"), !data.fromQueue)) {
          if (stryMutAct_9fa48("142")) {
            {}
          } else {
            stryCov_9fa48("142");
            await user.isReadyToPost(uid, data.cid);
          }
        }
        const tid = await Topics.create(data);
        let postData = data;
        postData.tid = tid;
        postData.ip = data.req ? data.req.ip : null;
        postData.isMain = stryMutAct_9fa48("143") ? false : (stryCov_9fa48("143"), true);
        postData = await posts.create(postData);
        postData = await onNewPost(postData, data);
        const [settings, topics] = await Promise.all(stryMutAct_9fa48("144") ? [] : (stryCov_9fa48("144"), [user.getSettings(uid), Topics.getTopicsByTids(stryMutAct_9fa48("145") ? [] : (stryCov_9fa48("145"), [postData.tid]), uid)]));
        if (stryMutAct_9fa48("148") ? !Array.isArray(topics) && !topics.length : stryMutAct_9fa48("147") ? false : stryMutAct_9fa48("146") ? true : (stryCov_9fa48("146", "147", "148"), (stryMutAct_9fa48("149") ? Array.isArray(topics) : (stryCov_9fa48("149"), !Array.isArray(topics))) || (stryMutAct_9fa48("150") ? topics.length : (stryCov_9fa48("150"), !topics.length)))) {
          if (stryMutAct_9fa48("151")) {
            {}
          } else {
            stryCov_9fa48("151");
            throw new Error(stryMutAct_9fa48("152") ? "" : (stryCov_9fa48("152"), '[[error:no-topic]]'));
          }
        }
        if (stryMutAct_9fa48("155") ? uid > 0 || settings.followTopicsOnCreate : stryMutAct_9fa48("154") ? false : stryMutAct_9fa48("153") ? true : (stryCov_9fa48("153", "154", "155"), (stryMutAct_9fa48("158") ? uid <= 0 : stryMutAct_9fa48("157") ? uid >= 0 : stryMutAct_9fa48("156") ? true : (stryCov_9fa48("156", "157", "158"), uid > 0)) && settings.followTopicsOnCreate)) {
          if (stryMutAct_9fa48("159")) {
            {}
          } else {
            stryCov_9fa48("159");
            await Topics.follow(postData.tid, uid);
          }
        }
        const topicData = topics[0];
        topicData.unreplied = stryMutAct_9fa48("160") ? false : (stryCov_9fa48("160"), true);
        topicData.mainPost = postData;
        topicData.index = 0;
        postData.index = 0;
        if (stryMutAct_9fa48("162") ? false : stryMutAct_9fa48("161") ? true : (stryCov_9fa48("161", "162"), topicData.scheduled)) {
          if (stryMutAct_9fa48("163")) {
            {}
          } else {
            stryCov_9fa48("163");
            await Topics.delete(tid);
          }
        }
        analytics.increment(stryMutAct_9fa48("164") ? [] : (stryCov_9fa48("164"), [stryMutAct_9fa48("165") ? "" : (stryCov_9fa48("165"), 'topics'), stryMutAct_9fa48("166") ? `` : (stryCov_9fa48("166"), `topics:byCid:${topicData.cid}`)]));
        plugins.hooks.fire(stryMutAct_9fa48("167") ? "" : (stryCov_9fa48("167"), 'action:topic.post'), stryMutAct_9fa48("168") ? {} : (stryCov_9fa48("168"), {
          topic: topicData,
          post: postData,
          data: data
        }));
        if (stryMutAct_9fa48("171") ? parseInt(uid, 10) || !topicData.scheduled : stryMutAct_9fa48("170") ? false : stryMutAct_9fa48("169") ? true : (stryCov_9fa48("169", "170", "171"), parseInt(uid, 10) && (stryMutAct_9fa48("172") ? topicData.scheduled : (stryCov_9fa48("172"), !topicData.scheduled)))) {
          if (stryMutAct_9fa48("173")) {
            {}
          } else {
            stryCov_9fa48("173");
            user.notifications.sendTopicNotificationToFollowers(uid, topicData, postData);
          }
        }
        return stryMutAct_9fa48("174") ? {} : (stryCov_9fa48("174"), {
          topicData: topicData,
          postData: postData
        });
      }
    };
    Topics.reply = async function (data) {
      if (stryMutAct_9fa48("175")) {
        {}
      } else {
        stryCov_9fa48("175");
        data = await plugins.hooks.fire(stryMutAct_9fa48("176") ? "" : (stryCov_9fa48("176"), 'filter:topic.reply'), data);
        const {
          tid
        } = data;
        const {
          uid
        } = data;
        const topicData = await Topics.getTopicData(tid);
        await canReply(data, topicData);
        data.cid = topicData.cid;
        await guestHandleValid(data);
        if (stryMutAct_9fa48("178") ? false : stryMutAct_9fa48("177") ? true : (stryCov_9fa48("177", "178"), data.content)) {
          if (stryMutAct_9fa48("179")) {
            {}
          } else {
            stryCov_9fa48("179");
            data.content = utils.rtrim(data.content);
          }
        }
        if (stryMutAct_9fa48("182") ? false : stryMutAct_9fa48("181") ? true : stryMutAct_9fa48("180") ? data.fromQueue : (stryCov_9fa48("180", "181", "182"), !data.fromQueue)) {
          if (stryMutAct_9fa48("183")) {
            {}
          } else {
            stryCov_9fa48("183");
            await user.isReadyToPost(uid, data.cid);
            Topics.checkContent(data.content);
          }
        }

        // For replies to scheduled topics, don't have a timestamp older than topic's itself
        if (stryMutAct_9fa48("185") ? false : stryMutAct_9fa48("184") ? true : (stryCov_9fa48("184", "185"), topicData.scheduled)) {
          if (stryMutAct_9fa48("186")) {
            {}
          } else {
            stryCov_9fa48("186");
            data.timestamp = stryMutAct_9fa48("187") ? topicData.lastposttime - 1 : (stryCov_9fa48("187"), topicData.lastposttime + 1);
          }
        }
        data.ip = data.req ? data.req.ip : null;
        let postData = await posts.create(data);
        postData = await onNewPost(postData, data);
        const settings = await user.getSettings(uid);
        if (stryMutAct_9fa48("190") ? uid > 0 || settings.followTopicsOnReply : stryMutAct_9fa48("189") ? false : stryMutAct_9fa48("188") ? true : (stryCov_9fa48("188", "189", "190"), (stryMutAct_9fa48("193") ? uid <= 0 : stryMutAct_9fa48("192") ? uid >= 0 : stryMutAct_9fa48("191") ? true : (stryCov_9fa48("191", "192", "193"), uid > 0)) && settings.followTopicsOnReply)) {
          if (stryMutAct_9fa48("194")) {
            {}
          } else {
            stryCov_9fa48("194");
            await Topics.follow(postData.tid, uid);
          }
        }
        if (stryMutAct_9fa48("196") ? false : stryMutAct_9fa48("195") ? true : (stryCov_9fa48("195", "196"), parseInt(uid, 10))) {
          if (stryMutAct_9fa48("197")) {
            {}
          } else {
            stryCov_9fa48("197");
            user.setUserField(uid, stryMutAct_9fa48("198") ? "" : (stryCov_9fa48("198"), 'lastonline'), Date.now());
          }
        }
        if (stryMutAct_9fa48("201") ? parseInt(uid, 10) && meta.config.allowGuestReplyNotifications : stryMutAct_9fa48("200") ? false : stryMutAct_9fa48("199") ? true : (stryCov_9fa48("199", "200", "201"), parseInt(uid, 10) || meta.config.allowGuestReplyNotifications)) {
          if (stryMutAct_9fa48("202")) {
            {}
          } else {
            stryCov_9fa48("202");
            const {
              displayname
            } = postData.user;
            Topics.notifyFollowers(postData, uid, stryMutAct_9fa48("203") ? {} : (stryCov_9fa48("203"), {
              type: stryMutAct_9fa48("204") ? "" : (stryCov_9fa48("204"), 'new-reply'),
              bodyShort: translator.compile(stryMutAct_9fa48("205") ? "" : (stryCov_9fa48("205"), 'notifications:user_posted_to'), displayname, postData.topic.title),
              nid: stryMutAct_9fa48("206") ? `` : (stryCov_9fa48("206"), `new_post:tid:${postData.topic.tid}:pid:${postData.pid}:uid:${uid}`),
              mergeId: stryMutAct_9fa48("207") ? `` : (stryCov_9fa48("207"), `notifications:user_posted_to|${postData.topic.tid}`)
            }));
          }
        }
        analytics.increment(stryMutAct_9fa48("208") ? [] : (stryCov_9fa48("208"), [stryMutAct_9fa48("209") ? "" : (stryCov_9fa48("209"), 'posts'), stryMutAct_9fa48("210") ? `` : (stryCov_9fa48("210"), `posts:byCid:${data.cid}`)]));
        plugins.hooks.fire(stryMutAct_9fa48("211") ? "" : (stryCov_9fa48("211"), 'action:topic.reply'), stryMutAct_9fa48("212") ? {} : (stryCov_9fa48("212"), {
          post: _.clone(postData),
          data: data
        }));
        return postData;
      }
    };
    async function onNewPost(postData, data) {
      if (stryMutAct_9fa48("213")) {
        {}
      } else {
        stryCov_9fa48("213");
        const {
          tid
        } = postData;
        const {
          uid
        } = postData;
        await Topics.markAsUnreadForAll(tid);
        await Topics.markAsRead(stryMutAct_9fa48("214") ? [] : (stryCov_9fa48("214"), [tid]), uid);
        const [userInfo, topicInfo] = await Promise.all(stryMutAct_9fa48("215") ? [] : (stryCov_9fa48("215"), [posts.getUserInfoForPosts(stryMutAct_9fa48("216") ? [] : (stryCov_9fa48("216"), [postData.uid]), uid), Topics.getTopicFields(tid, stryMutAct_9fa48("217") ? [] : (stryCov_9fa48("217"), [stryMutAct_9fa48("218") ? "" : (stryCov_9fa48("218"), 'tid'), stryMutAct_9fa48("219") ? "" : (stryCov_9fa48("219"), 'uid'), stryMutAct_9fa48("220") ? "" : (stryCov_9fa48("220"), 'title'), stryMutAct_9fa48("221") ? "" : (stryCov_9fa48("221"), 'slug'), stryMutAct_9fa48("222") ? "" : (stryCov_9fa48("222"), 'cid'), stryMutAct_9fa48("223") ? "" : (stryCov_9fa48("223"), 'postcount'), stryMutAct_9fa48("224") ? "" : (stryCov_9fa48("224"), 'mainPid'), stryMutAct_9fa48("225") ? "" : (stryCov_9fa48("225"), 'scheduled')])), Topics.addParentPosts(stryMutAct_9fa48("226") ? [] : (stryCov_9fa48("226"), [postData])), Topics.syncBacklinks(postData), posts.parsePost(postData)]));
        postData.user = userInfo[0];
        postData.topic = topicInfo;
        postData.index = stryMutAct_9fa48("227") ? topicInfo.postcount + 1 : (stryCov_9fa48("227"), topicInfo.postcount - 1);
        posts.overrideGuestHandle(postData, data.handle);
        postData.votes = 0;
        postData.bookmarked = stryMutAct_9fa48("228") ? true : (stryCov_9fa48("228"), false);
        postData.display_edit_tools = stryMutAct_9fa48("229") ? false : (stryCov_9fa48("229"), true);
        postData.display_delete_tools = stryMutAct_9fa48("230") ? false : (stryCov_9fa48("230"), true);
        postData.display_moderator_tools = stryMutAct_9fa48("231") ? false : (stryCov_9fa48("231"), true);
        postData.display_move_tools = stryMutAct_9fa48("232") ? false : (stryCov_9fa48("232"), true);
        postData.selfPost = stryMutAct_9fa48("233") ? true : (stryCov_9fa48("233"), false);
        postData.timestampISO = utils.toISOString(postData.timestamp);
        postData.topic.title = String(postData.topic.title);
        return postData;
      }
    }
    Topics.checkTitle = function (title) {
      if (stryMutAct_9fa48("234")) {
        {}
      } else {
        stryCov_9fa48("234");
        check(title, meta.config.minimumTitleLength, meta.config.maximumTitleLength, stryMutAct_9fa48("235") ? "" : (stryCov_9fa48("235"), 'title-too-short'), stryMutAct_9fa48("236") ? "" : (stryCov_9fa48("236"), 'title-too-long'));
      }
    };
    Topics.checkContent = function (content) {
      if (stryMutAct_9fa48("237")) {
        {}
      } else {
        stryCov_9fa48("237");
        check(content, meta.config.minimumPostLength, meta.config.maximumPostLength, stryMutAct_9fa48("238") ? "" : (stryCov_9fa48("238"), 'content-too-short'), stryMutAct_9fa48("239") ? "" : (stryCov_9fa48("239"), 'content-too-long'));
      }
    };
    function check(item, min, max, minError, maxError) {
      if (stryMutAct_9fa48("240")) {
        {}
      } else {
        stryCov_9fa48("240");
        // Trim and remove HTML (latter for composers that send in HTML, like redactor)
        if (stryMutAct_9fa48("243") ? typeof item !== 'string' : stryMutAct_9fa48("242") ? false : stryMutAct_9fa48("241") ? true : (stryCov_9fa48("241", "242", "243"), typeof item === (stryMutAct_9fa48("244") ? "" : (stryCov_9fa48("244"), 'string')))) {
          if (stryMutAct_9fa48("245")) {
            {}
          } else {
            stryCov_9fa48("245");
            item = stryMutAct_9fa48("246") ? utils.stripHTMLTags(item) : (stryCov_9fa48("246"), utils.stripHTMLTags(item).trim());
          }
        }
        if (stryMutAct_9fa48("249") ? (item === null || item === undefined) && item.length < parseInt(min, 10) : stryMutAct_9fa48("248") ? false : stryMutAct_9fa48("247") ? true : (stryCov_9fa48("247", "248", "249"), (stryMutAct_9fa48("251") ? item === null && item === undefined : stryMutAct_9fa48("250") ? false : (stryCov_9fa48("250", "251"), (stryMutAct_9fa48("253") ? item !== null : stryMutAct_9fa48("252") ? false : (stryCov_9fa48("252", "253"), item === null)) || (stryMutAct_9fa48("255") ? item !== undefined : stryMutAct_9fa48("254") ? false : (stryCov_9fa48("254", "255"), item === undefined)))) || (stryMutAct_9fa48("258") ? item.length >= parseInt(min, 10) : stryMutAct_9fa48("257") ? item.length <= parseInt(min, 10) : stryMutAct_9fa48("256") ? false : (stryCov_9fa48("256", "257", "258"), item.length < parseInt(min, 10))))) {
          if (stryMutAct_9fa48("259")) {
            {}
          } else {
            stryCov_9fa48("259");
            throw new Error(stryMutAct_9fa48("260") ? `` : (stryCov_9fa48("260"), `[[error:${minError}, ${min}]]`));
          }
        } else if (stryMutAct_9fa48("264") ? item.length <= parseInt(max, 10) : stryMutAct_9fa48("263") ? item.length >= parseInt(max, 10) : stryMutAct_9fa48("262") ? false : stryMutAct_9fa48("261") ? true : (stryCov_9fa48("261", "262", "263", "264"), item.length > parseInt(max, 10))) {
          if (stryMutAct_9fa48("265")) {
            {}
          } else {
            stryCov_9fa48("265");
            throw new Error(stryMutAct_9fa48("266") ? `` : (stryCov_9fa48("266"), `[[error:${maxError}, ${max}]]`));
          }
        }
      }
    }
    async function guestHandleValid(data) {
      if (stryMutAct_9fa48("267")) {
        {}
      } else {
        stryCov_9fa48("267");
        if (stryMutAct_9fa48("270") ? meta.config.allowGuestHandles && parseInt(data.uid, 10) === 0 || data.handle : stryMutAct_9fa48("269") ? false : stryMutAct_9fa48("268") ? true : (stryCov_9fa48("268", "269", "270"), (stryMutAct_9fa48("272") ? meta.config.allowGuestHandles || parseInt(data.uid, 10) === 0 : stryMutAct_9fa48("271") ? true : (stryCov_9fa48("271", "272"), meta.config.allowGuestHandles && (stryMutAct_9fa48("274") ? parseInt(data.uid, 10) !== 0 : stryMutAct_9fa48("273") ? true : (stryCov_9fa48("273", "274"), parseInt(data.uid, 10) === 0)))) && data.handle)) {
          if (stryMutAct_9fa48("275")) {
            {}
          } else {
            stryCov_9fa48("275");
            if (stryMutAct_9fa48("279") ? data.handle.length <= meta.config.maximumUsernameLength : stryMutAct_9fa48("278") ? data.handle.length >= meta.config.maximumUsernameLength : stryMutAct_9fa48("277") ? false : stryMutAct_9fa48("276") ? true : (stryCov_9fa48("276", "277", "278", "279"), data.handle.length > meta.config.maximumUsernameLength)) {
              if (stryMutAct_9fa48("280")) {
                {}
              } else {
                stryCov_9fa48("280");
                throw new Error(stryMutAct_9fa48("281") ? "" : (stryCov_9fa48("281"), '[[error:guest-handle-invalid]]'));
              }
            }
            const exists = await user.existsBySlug(slugify(data.handle));
            if (stryMutAct_9fa48("283") ? false : stryMutAct_9fa48("282") ? true : (stryCov_9fa48("282", "283"), exists)) {
              if (stryMutAct_9fa48("284")) {
                {}
              } else {
                stryCov_9fa48("284");
                throw new Error(stryMutAct_9fa48("285") ? "" : (stryCov_9fa48("285"), '[[error:username-taken]]'));
              }
            }
          }
        }
      }
    }
    async function canReply(data, topicData) {
      if (stryMutAct_9fa48("286")) {
        {}
      } else {
        stryCov_9fa48("286");
        if (stryMutAct_9fa48("289") ? false : stryMutAct_9fa48("288") ? true : stryMutAct_9fa48("287") ? topicData : (stryCov_9fa48("287", "288", "289"), !topicData)) {
          if (stryMutAct_9fa48("290")) {
            {}
          } else {
            stryCov_9fa48("290");
            throw new Error(stryMutAct_9fa48("291") ? "" : (stryCov_9fa48("291"), '[[error:no-topic]]'));
          }
        }
        const {
          tid,
          uid
        } = data;
        const {
          cid,
          deleted,
          locked,
          scheduled
        } = topicData;
        const [canReply, canSchedule, isAdminOrMod] = await Promise.all(stryMutAct_9fa48("292") ? [] : (stryCov_9fa48("292"), [privileges.topics.can(stryMutAct_9fa48("293") ? "" : (stryCov_9fa48("293"), 'topics:reply'), tid, uid), privileges.topics.can(stryMutAct_9fa48("294") ? "" : (stryCov_9fa48("294"), 'topics:schedule'), tid, uid), privileges.categories.isAdminOrMod(cid, uid)]));
        if (stryMutAct_9fa48("297") ? locked || !isAdminOrMod : stryMutAct_9fa48("296") ? false : stryMutAct_9fa48("295") ? true : (stryCov_9fa48("295", "296", "297"), locked && (stryMutAct_9fa48("298") ? isAdminOrMod : (stryCov_9fa48("298"), !isAdminOrMod)))) {
          if (stryMutAct_9fa48("299")) {
            {}
          } else {
            stryCov_9fa48("299");
            throw new Error(stryMutAct_9fa48("300") ? "" : (stryCov_9fa48("300"), '[[error:topic-locked]]'));
          }
        }
        if (stryMutAct_9fa48("303") ? !scheduled && deleted || !isAdminOrMod : stryMutAct_9fa48("302") ? false : stryMutAct_9fa48("301") ? true : (stryCov_9fa48("301", "302", "303"), (stryMutAct_9fa48("305") ? !scheduled || deleted : stryMutAct_9fa48("304") ? true : (stryCov_9fa48("304", "305"), (stryMutAct_9fa48("306") ? scheduled : (stryCov_9fa48("306"), !scheduled)) && deleted)) && (stryMutAct_9fa48("307") ? isAdminOrMod : (stryCov_9fa48("307"), !isAdminOrMod)))) {
          if (stryMutAct_9fa48("308")) {
            {}
          } else {
            stryCov_9fa48("308");
            throw new Error(stryMutAct_9fa48("309") ? "" : (stryCov_9fa48("309"), '[[error:topic-deleted]]'));
          }
        }
        if (stryMutAct_9fa48("312") ? scheduled || !canSchedule : stryMutAct_9fa48("311") ? false : stryMutAct_9fa48("310") ? true : (stryCov_9fa48("310", "311", "312"), scheduled && (stryMutAct_9fa48("313") ? canSchedule : (stryCov_9fa48("313"), !canSchedule)))) {
          if (stryMutAct_9fa48("314")) {
            {}
          } else {
            stryCov_9fa48("314");
            throw new Error(stryMutAct_9fa48("315") ? "" : (stryCov_9fa48("315"), '[[error:no-privileges]]'));
          }
        }
        if (stryMutAct_9fa48("318") ? false : stryMutAct_9fa48("317") ? true : stryMutAct_9fa48("316") ? canReply : (stryCov_9fa48("316", "317", "318"), !canReply)) {
          if (stryMutAct_9fa48("319")) {
            {}
          } else {
            stryCov_9fa48("319");
            throw new Error(stryMutAct_9fa48("320") ? "" : (stryCov_9fa48("320"), '[[error:no-privileges]]'));
          }
        }
      }
    }
  }
};