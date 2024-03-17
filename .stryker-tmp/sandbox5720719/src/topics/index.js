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
const validator = require('validator');
const db = require('../database');
const posts = require('../posts');
const utils = require('../utils');
const plugins = require('../plugins');
const meta = require('../meta');
const user = require('../user');
const categories = require('../categories');
const privileges = require('../privileges');
const social = require('../social');
const Topics = module.exports;
require('./data')(Topics);
require('./create')(Topics);
require('./delete')(Topics);
require('./sorted')(Topics);
require('./unread')(Topics);
require('./recent')(Topics);
require('./user')(Topics);
require('./fork')(Topics);
require('./posts')(Topics);
require('./follow')(Topics);
require('./tags')(Topics);
require('./teaser')(Topics);
Topics.scheduled = require('./scheduled');
require('./suggested')(Topics);
require('./tools')(Topics);
Topics.thumbs = require('./thumbs');
require('./bookmarks')(Topics);
require('./merge')(Topics);
Topics.events = require('./events');
Topics.exists = async function (tids) {
  if (stryMutAct_9fa48("1056")) {
    {}
  } else {
    stryCov_9fa48("1056");
    return await db.exists(Array.isArray(tids) ? tids.map(stryMutAct_9fa48("1057") ? () => undefined : (stryCov_9fa48("1057"), tid => stryMutAct_9fa48("1058") ? `` : (stryCov_9fa48("1058"), `topic:${tid}`))) : stryMutAct_9fa48("1059") ? `` : (stryCov_9fa48("1059"), `topic:${tids}`));
  }
};
Topics.getTopicsFromSet = async function (set, uid, start, stop) {
  if (stryMutAct_9fa48("1060")) {
    {}
  } else {
    stryCov_9fa48("1060");
    const tids = await db.getSortedSetRevRange(set, start, stop);
    const topics = await Topics.getTopics(tids, uid);
    Topics.calculateTopicIndices(topics, start);
    return stryMutAct_9fa48("1061") ? {} : (stryCov_9fa48("1061"), {
      topics: topics,
      nextStart: stryMutAct_9fa48("1062") ? stop - 1 : (stryCov_9fa48("1062"), stop + 1)
    });
  }
};
Topics.getTopics = async function (tids, options) {
  if (stryMutAct_9fa48("1063")) {
    {}
  } else {
    stryCov_9fa48("1063");
    let uid = options;
    if (stryMutAct_9fa48("1066") ? typeof options !== 'object' : stryMutAct_9fa48("1065") ? false : stryMutAct_9fa48("1064") ? true : (stryCov_9fa48("1064", "1065", "1066"), typeof options === (stryMutAct_9fa48("1067") ? "" : (stryCov_9fa48("1067"), 'object')))) {
      if (stryMutAct_9fa48("1068")) {
        {}
      } else {
        stryCov_9fa48("1068");
        uid = options.uid;
      }
    }
    tids = await privileges.topics.filterTids(stryMutAct_9fa48("1069") ? "" : (stryCov_9fa48("1069"), 'topics:read'), tids, uid);
    return await Topics.getTopicsByTids(tids, options);
  }
};
Topics.getTopicsByTids = async function (tids, options) {
  if (stryMutAct_9fa48("1070")) {
    {}
  } else {
    stryCov_9fa48("1070");
    if (stryMutAct_9fa48("1073") ? !Array.isArray(tids) && !tids.length : stryMutAct_9fa48("1072") ? false : stryMutAct_9fa48("1071") ? true : (stryCov_9fa48("1071", "1072", "1073"), (stryMutAct_9fa48("1074") ? Array.isArray(tids) : (stryCov_9fa48("1074"), !Array.isArray(tids))) || (stryMutAct_9fa48("1075") ? tids.length : (stryCov_9fa48("1075"), !tids.length)))) {
      if (stryMutAct_9fa48("1076")) {
        {}
      } else {
        stryCov_9fa48("1076");
        return stryMutAct_9fa48("1077") ? ["Stryker was here"] : (stryCov_9fa48("1077"), []);
      }
    }
    let uid = options;
    if (stryMutAct_9fa48("1080") ? typeof options !== 'object' : stryMutAct_9fa48("1079") ? false : stryMutAct_9fa48("1078") ? true : (stryCov_9fa48("1078", "1079", "1080"), typeof options === (stryMutAct_9fa48("1081") ? "" : (stryCov_9fa48("1081"), 'object')))) {
      if (stryMutAct_9fa48("1082")) {
        {}
      } else {
        stryCov_9fa48("1082");
        uid = options.uid;
      }
    }
    async function loadTopics() {
      if (stryMutAct_9fa48("1083")) {
        {}
      } else {
        stryCov_9fa48("1083");
        const topics = await Topics.getTopicsData(tids);
        const uids = _.uniq(stryMutAct_9fa48("1084") ? topics.map(t => t && t.uid && t.uid.toString()) : (stryCov_9fa48("1084"), topics.map(stryMutAct_9fa48("1085") ? () => undefined : (stryCov_9fa48("1085"), t => stryMutAct_9fa48("1088") ? t && t.uid || t.uid.toString() : stryMutAct_9fa48("1087") ? false : stryMutAct_9fa48("1086") ? true : (stryCov_9fa48("1086", "1087", "1088"), (stryMutAct_9fa48("1090") ? t || t.uid : stryMutAct_9fa48("1089") ? true : (stryCov_9fa48("1089", "1090"), t && t.uid)) && t.uid.toString()))).filter(stryMutAct_9fa48("1091") ? () => undefined : (stryCov_9fa48("1091"), v => utils.isNumber(v)))));
        const cids = _.uniq(stryMutAct_9fa48("1092") ? topics.map(t => t && t.cid && t.cid.toString()) : (stryCov_9fa48("1092"), topics.map(stryMutAct_9fa48("1093") ? () => undefined : (stryCov_9fa48("1093"), t => stryMutAct_9fa48("1096") ? t && t.cid || t.cid.toString() : stryMutAct_9fa48("1095") ? false : stryMutAct_9fa48("1094") ? true : (stryCov_9fa48("1094", "1095", "1096"), (stryMutAct_9fa48("1098") ? t || t.cid : stryMutAct_9fa48("1097") ? true : (stryCov_9fa48("1097", "1098"), t && t.cid)) && t.cid.toString()))).filter(stryMutAct_9fa48("1099") ? () => undefined : (stryCov_9fa48("1099"), v => utils.isNumber(v)))));
        const guestTopics = stryMutAct_9fa48("1100") ? topics : (stryCov_9fa48("1100"), topics.filter(stryMutAct_9fa48("1101") ? () => undefined : (stryCov_9fa48("1101"), t => stryMutAct_9fa48("1104") ? t || t.uid === 0 : stryMutAct_9fa48("1103") ? false : stryMutAct_9fa48("1102") ? true : (stryCov_9fa48("1102", "1103", "1104"), t && (stryMutAct_9fa48("1106") ? t.uid !== 0 : stryMutAct_9fa48("1105") ? true : (stryCov_9fa48("1105", "1106"), t.uid === 0))))));
        async function loadGuestHandles() {
          if (stryMutAct_9fa48("1107")) {
            {}
          } else {
            stryCov_9fa48("1107");
            const mainPids = guestTopics.map(stryMutAct_9fa48("1108") ? () => undefined : (stryCov_9fa48("1108"), t => t.mainPid));
            const postData = await posts.getPostsFields(mainPids, stryMutAct_9fa48("1109") ? [] : (stryCov_9fa48("1109"), [stryMutAct_9fa48("1110") ? "" : (stryCov_9fa48("1110"), 'handle')]));
            return postData.map(stryMutAct_9fa48("1111") ? () => undefined : (stryCov_9fa48("1111"), p => p.handle));
          }
        }
        async function loadShowfullnameSettings() {
          if (stryMutAct_9fa48("1112")) {
            {}
          } else {
            stryCov_9fa48("1112");
            if (stryMutAct_9fa48("1114") ? false : stryMutAct_9fa48("1113") ? true : (stryCov_9fa48("1113", "1114"), meta.config.hideFullname)) {
              if (stryMutAct_9fa48("1115")) {
                {}
              } else {
                stryCov_9fa48("1115");
                return uids.map(stryMutAct_9fa48("1116") ? () => undefined : (stryCov_9fa48("1116"), () => stryMutAct_9fa48("1117") ? {} : (stryCov_9fa48("1117"), {
                  showfullname: stryMutAct_9fa48("1118") ? true : (stryCov_9fa48("1118"), false)
                })));
              }
            }
            const data = await db.getObjectsFields(uids.map(stryMutAct_9fa48("1119") ? () => undefined : (stryCov_9fa48("1119"), uid => stryMutAct_9fa48("1120") ? `` : (stryCov_9fa48("1120"), `user:${uid}:settings`))), stryMutAct_9fa48("1121") ? [] : (stryCov_9fa48("1121"), [stryMutAct_9fa48("1122") ? "" : (stryCov_9fa48("1122"), 'showfullname')]));
            data.forEach(settings => {
              if (stryMutAct_9fa48("1123")) {
                {}
              } else {
                stryCov_9fa48("1123");
                settings.showfullname = stryMutAct_9fa48("1126") ? parseInt(settings.showfullname, 10) !== 1 : stryMutAct_9fa48("1125") ? false : stryMutAct_9fa48("1124") ? true : (stryCov_9fa48("1124", "1125", "1126"), parseInt(settings.showfullname, 10) === 1);
              }
            });
            return data;
          }
        }
        const [teasers, users, userSettings, categoriesData, guestHandles, thumbs] = await Promise.all(stryMutAct_9fa48("1127") ? [] : (stryCov_9fa48("1127"), [Topics.getTeasers(topics, options), user.getUsersFields(uids, stryMutAct_9fa48("1128") ? [] : (stryCov_9fa48("1128"), [stryMutAct_9fa48("1129") ? "" : (stryCov_9fa48("1129"), 'uid'), stryMutAct_9fa48("1130") ? "" : (stryCov_9fa48("1130"), 'username'), stryMutAct_9fa48("1131") ? "" : (stryCov_9fa48("1131"), 'fullname'), stryMutAct_9fa48("1132") ? "" : (stryCov_9fa48("1132"), 'userslug'), stryMutAct_9fa48("1133") ? "" : (stryCov_9fa48("1133"), 'reputation'), stryMutAct_9fa48("1134") ? "" : (stryCov_9fa48("1134"), 'postcount'), stryMutAct_9fa48("1135") ? "" : (stryCov_9fa48("1135"), 'picture'), stryMutAct_9fa48("1136") ? "" : (stryCov_9fa48("1136"), 'signature'), stryMutAct_9fa48("1137") ? "" : (stryCov_9fa48("1137"), 'banned'), stryMutAct_9fa48("1138") ? "" : (stryCov_9fa48("1138"), 'status')])), loadShowfullnameSettings(), categories.getCategoriesFields(cids, stryMutAct_9fa48("1139") ? [] : (stryCov_9fa48("1139"), [stryMutAct_9fa48("1140") ? "" : (stryCov_9fa48("1140"), 'cid'), stryMutAct_9fa48("1141") ? "" : (stryCov_9fa48("1141"), 'name'), stryMutAct_9fa48("1142") ? "" : (stryCov_9fa48("1142"), 'slug'), stryMutAct_9fa48("1143") ? "" : (stryCov_9fa48("1143"), 'icon'), stryMutAct_9fa48("1144") ? "" : (stryCov_9fa48("1144"), 'backgroundImage'), stryMutAct_9fa48("1145") ? "" : (stryCov_9fa48("1145"), 'imageClass'), stryMutAct_9fa48("1146") ? "" : (stryCov_9fa48("1146"), 'bgColor'), stryMutAct_9fa48("1147") ? "" : (stryCov_9fa48("1147"), 'color'), stryMutAct_9fa48("1148") ? "" : (stryCov_9fa48("1148"), 'disabled')])), loadGuestHandles(), Topics.thumbs.load(topics)]));
        users.forEach((userObj, idx) => {
          if (stryMutAct_9fa48("1149")) {
            {}
          } else {
            stryCov_9fa48("1149");
            // Hide fullname if needed
            if (stryMutAct_9fa48("1152") ? false : stryMutAct_9fa48("1151") ? true : stryMutAct_9fa48("1150") ? userSettings[idx].showfullname : (stryCov_9fa48("1150", "1151", "1152"), !userSettings[idx].showfullname)) {
              if (stryMutAct_9fa48("1153")) {
                {}
              } else {
                stryCov_9fa48("1153");
                userObj.fullname = undefined;
              }
            }
          }
        });
        return stryMutAct_9fa48("1154") ? {} : (stryCov_9fa48("1154"), {
          topics,
          teasers,
          usersMap: _.zipObject(uids, users),
          categoriesMap: _.zipObject(cids, categoriesData),
          tidToGuestHandle: _.zipObject(guestTopics.map(stryMutAct_9fa48("1155") ? () => undefined : (stryCov_9fa48("1155"), t => t.tid)), guestHandles),
          thumbs
        });
      }
    }
    const [result, hasRead, isIgnored, bookmarks, callerSettings] = await Promise.all(stryMutAct_9fa48("1156") ? [] : (stryCov_9fa48("1156"), [loadTopics(), Topics.hasReadTopics(tids, uid), Topics.isIgnoring(tids, uid), Topics.getUserBookmarks(tids, uid), user.getSettings(uid)]));
    const sortNewToOld = stryMutAct_9fa48("1159") ? callerSettings.topicPostSort !== 'newest_to_oldest' : stryMutAct_9fa48("1158") ? false : stryMutAct_9fa48("1157") ? true : (stryCov_9fa48("1157", "1158", "1159"), callerSettings.topicPostSort === (stryMutAct_9fa48("1160") ? "" : (stryCov_9fa48("1160"), 'newest_to_oldest')));
    result.topics.forEach((topic, i) => {
      if (stryMutAct_9fa48("1161")) {
        {}
      } else {
        stryCov_9fa48("1161");
        if (stryMutAct_9fa48("1163") ? false : stryMutAct_9fa48("1162") ? true : (stryCov_9fa48("1162", "1163"), topic)) {
          if (stryMutAct_9fa48("1164")) {
            {}
          } else {
            stryCov_9fa48("1164");
            topic.thumbs = result.thumbs[i];
            topic.category = result.categoriesMap[topic.cid];
            topic.user = topic.uid ? result.usersMap[topic.uid] : stryMutAct_9fa48("1165") ? {} : (stryCov_9fa48("1165"), {
              ...result.usersMap[topic.uid]
            });
            if (stryMutAct_9fa48("1167") ? false : stryMutAct_9fa48("1166") ? true : (stryCov_9fa48("1166", "1167"), result.tidToGuestHandle[topic.tid])) {
              if (stryMutAct_9fa48("1168")) {
                {}
              } else {
                stryCov_9fa48("1168");
                topic.user.username = validator.escape(result.tidToGuestHandle[topic.tid]);
                topic.user.displayname = topic.user.username;
              }
            }
            topic.teaser = stryMutAct_9fa48("1171") ? result.teasers[i] && null : stryMutAct_9fa48("1170") ? false : stryMutAct_9fa48("1169") ? true : (stryCov_9fa48("1169", "1170", "1171"), result.teasers[i] || null);
            topic.isOwner = stryMutAct_9fa48("1174") ? topic.uid !== parseInt(uid, 10) : stryMutAct_9fa48("1173") ? false : stryMutAct_9fa48("1172") ? true : (stryCov_9fa48("1172", "1173", "1174"), topic.uid === parseInt(uid, 10));
            topic.ignored = isIgnored[i];
            topic.unread = stryMutAct_9fa48("1177") ? parseInt(uid, 10) <= 0 && !hasRead[i] && !isIgnored[i] : stryMutAct_9fa48("1176") ? false : stryMutAct_9fa48("1175") ? true : (stryCov_9fa48("1175", "1176", "1177"), (stryMutAct_9fa48("1180") ? parseInt(uid, 10) > 0 : stryMutAct_9fa48("1179") ? parseInt(uid, 10) < 0 : stryMutAct_9fa48("1178") ? false : (stryCov_9fa48("1178", "1179", "1180"), parseInt(uid, 10) <= 0)) || (stryMutAct_9fa48("1182") ? !hasRead[i] || !isIgnored[i] : stryMutAct_9fa48("1181") ? false : (stryCov_9fa48("1181", "1182"), (stryMutAct_9fa48("1183") ? hasRead[i] : (stryCov_9fa48("1183"), !hasRead[i])) && (stryMutAct_9fa48("1184") ? isIgnored[i] : (stryCov_9fa48("1184"), !isIgnored[i])))));
            topic.bookmark = sortNewToOld ? stryMutAct_9fa48("1185") ? Math.min(1, topic.postcount + 2 - bookmarks[i]) : (stryCov_9fa48("1185"), Math.max(1, stryMutAct_9fa48("1186") ? topic.postcount + 2 + bookmarks[i] : (stryCov_9fa48("1186"), (stryMutAct_9fa48("1187") ? topic.postcount - 2 : (stryCov_9fa48("1187"), topic.postcount + 2)) - bookmarks[i]))) : stryMutAct_9fa48("1188") ? Math.max(topic.postcount, bookmarks[i] + 1) : (stryCov_9fa48("1188"), Math.min(topic.postcount, stryMutAct_9fa48("1189") ? bookmarks[i] - 1 : (stryCov_9fa48("1189"), bookmarks[i] + 1)));
            topic.unreplied = stryMutAct_9fa48("1190") ? topic.teaser : (stryCov_9fa48("1190"), !topic.teaser);
            topic.icons = stryMutAct_9fa48("1191") ? ["Stryker was here"] : (stryCov_9fa48("1191"), []);
          }
        }
      }
    });
    const filteredTopics = stryMutAct_9fa48("1192") ? result.topics : (stryCov_9fa48("1192"), result.topics.filter(stryMutAct_9fa48("1193") ? () => undefined : (stryCov_9fa48("1193"), topic => stryMutAct_9fa48("1196") ? topic && topic.category || !topic.category.disabled : stryMutAct_9fa48("1195") ? false : stryMutAct_9fa48("1194") ? true : (stryCov_9fa48("1194", "1195", "1196"), (stryMutAct_9fa48("1198") ? topic || topic.category : stryMutAct_9fa48("1197") ? true : (stryCov_9fa48("1197", "1198"), topic && topic.category)) && (stryMutAct_9fa48("1199") ? topic.category.disabled : (stryCov_9fa48("1199"), !topic.category.disabled))))));
    const hookResult = await plugins.hooks.fire(stryMutAct_9fa48("1200") ? "" : (stryCov_9fa48("1200"), 'filter:topics.get'), stryMutAct_9fa48("1201") ? {} : (stryCov_9fa48("1201"), {
      topics: filteredTopics,
      uid: uid
    }));
    return hookResult.topics;
  }
};
Topics.getTopicWithPosts = async function (topicData, set, uid, start, stop, reverse) {
  if (stryMutAct_9fa48("1202")) {
    {}
  } else {
    stryCov_9fa48("1202");
    const [posts, category, tagWhitelist, threadTools, followData, bookmark, postSharing, deleter, merger, related, thumbs, events] = await Promise.all(stryMutAct_9fa48("1203") ? [] : (stryCov_9fa48("1203"), [Topics.getTopicPosts(topicData, set, start, stop, uid, reverse), categories.getCategoryData(topicData.cid), categories.getTagWhitelist(stryMutAct_9fa48("1204") ? [] : (stryCov_9fa48("1204"), [topicData.cid])), plugins.hooks.fire(stryMutAct_9fa48("1205") ? "" : (stryCov_9fa48("1205"), 'filter:topic.thread_tools'), stryMutAct_9fa48("1206") ? {} : (stryCov_9fa48("1206"), {
      topic: topicData,
      uid: uid,
      tools: stryMutAct_9fa48("1207") ? ["Stryker was here"] : (stryCov_9fa48("1207"), [])
    })), Topics.getFollowData(stryMutAct_9fa48("1208") ? [] : (stryCov_9fa48("1208"), [topicData.tid]), uid), Topics.getUserBookmark(topicData.tid, uid), social.getActivePostSharing(), getDeleter(topicData), getMerger(topicData), Topics.getRelatedTopics(topicData, uid), Topics.thumbs.load(stryMutAct_9fa48("1209") ? [] : (stryCov_9fa48("1209"), [topicData])), Topics.events.get(topicData.tid, uid, reverse)]));
    topicData.thumbs = thumbs[0];
    topicData.posts = posts;
    topicData.events = events;
    topicData.posts.forEach(p => {
      if (stryMutAct_9fa48("1210")) {
        {}
      } else {
        stryCov_9fa48("1210");
        p.events = stryMutAct_9fa48("1211") ? events : (stryCov_9fa48("1211"), events.filter(stryMutAct_9fa48("1212") ? () => undefined : (stryCov_9fa48("1212"), event => stryMutAct_9fa48("1215") ? event.timestamp >= p.eventStart || event.timestamp < p.eventEnd : stryMutAct_9fa48("1214") ? false : stryMutAct_9fa48("1213") ? true : (stryCov_9fa48("1213", "1214", "1215"), (stryMutAct_9fa48("1218") ? event.timestamp < p.eventStart : stryMutAct_9fa48("1217") ? event.timestamp > p.eventStart : stryMutAct_9fa48("1216") ? true : (stryCov_9fa48("1216", "1217", "1218"), event.timestamp >= p.eventStart)) && (stryMutAct_9fa48("1221") ? event.timestamp >= p.eventEnd : stryMutAct_9fa48("1220") ? event.timestamp <= p.eventEnd : stryMutAct_9fa48("1219") ? true : (stryCov_9fa48("1219", "1220", "1221"), event.timestamp < p.eventEnd))))));
      }
    });
    topicData.category = category;
    topicData.tagWhitelist = tagWhitelist[0];
    topicData.minTags = category.minTags;
    topicData.maxTags = category.maxTags;
    topicData.thread_tools = threadTools.tools;
    topicData.isFollowing = followData[0].following;
    topicData.isNotFollowing = stryMutAct_9fa48("1224") ? !followData[0].following || !followData[0].ignoring : stryMutAct_9fa48("1223") ? false : stryMutAct_9fa48("1222") ? true : (stryCov_9fa48("1222", "1223", "1224"), (stryMutAct_9fa48("1225") ? followData[0].following : (stryCov_9fa48("1225"), !followData[0].following)) && (stryMutAct_9fa48("1226") ? followData[0].ignoring : (stryCov_9fa48("1226"), !followData[0].ignoring)));
    topicData.isIgnoring = followData[0].ignoring;
    topicData.bookmark = bookmark;
    topicData.postSharing = postSharing;
    topicData.deleter = deleter;
    if (stryMutAct_9fa48("1228") ? false : stryMutAct_9fa48("1227") ? true : (stryCov_9fa48("1227", "1228"), deleter)) {
      if (stryMutAct_9fa48("1229")) {
        {}
      } else {
        stryCov_9fa48("1229");
        topicData.deletedTimestampISO = utils.toISOString(topicData.deletedTimestamp);
      }
    }
    topicData.merger = merger;
    if (stryMutAct_9fa48("1231") ? false : stryMutAct_9fa48("1230") ? true : (stryCov_9fa48("1230", "1231"), merger)) {
      if (stryMutAct_9fa48("1232")) {
        {}
      } else {
        stryCov_9fa48("1232");
        topicData.mergedTimestampISO = utils.toISOString(topicData.mergedTimestamp);
      }
    }
    topicData.related = stryMutAct_9fa48("1235") ? related && [] : stryMutAct_9fa48("1234") ? false : stryMutAct_9fa48("1233") ? true : (stryCov_9fa48("1233", "1234", "1235"), related || (stryMutAct_9fa48("1236") ? ["Stryker was here"] : (stryCov_9fa48("1236"), [])));
    topicData.unreplied = stryMutAct_9fa48("1239") ? topicData.postcount !== 1 : stryMutAct_9fa48("1238") ? false : stryMutAct_9fa48("1237") ? true : (stryCov_9fa48("1237", "1238", "1239"), topicData.postcount === 1);
    topicData.icons = stryMutAct_9fa48("1240") ? ["Stryker was here"] : (stryCov_9fa48("1240"), []);
    const result = await plugins.hooks.fire(stryMutAct_9fa48("1241") ? "" : (stryCov_9fa48("1241"), 'filter:topic.get'), stryMutAct_9fa48("1242") ? {} : (stryCov_9fa48("1242"), {
      topic: topicData,
      uid: uid
    }));
    return result.topic;
  }
};
async function getDeleter(topicData) {
  if (stryMutAct_9fa48("1243")) {
    {}
  } else {
    stryCov_9fa48("1243");
    if (stryMutAct_9fa48("1246") ? false : stryMutAct_9fa48("1245") ? true : stryMutAct_9fa48("1244") ? parseInt(topicData.deleterUid, 10) : (stryCov_9fa48("1244", "1245", "1246"), !parseInt(topicData.deleterUid, 10))) {
      if (stryMutAct_9fa48("1247")) {
        {}
      } else {
        stryCov_9fa48("1247");
        return null;
      }
    }
    return await user.getUserFields(topicData.deleterUid, stryMutAct_9fa48("1248") ? [] : (stryCov_9fa48("1248"), [stryMutAct_9fa48("1249") ? "" : (stryCov_9fa48("1249"), 'username'), stryMutAct_9fa48("1250") ? "" : (stryCov_9fa48("1250"), 'userslug'), stryMutAct_9fa48("1251") ? "" : (stryCov_9fa48("1251"), 'picture')]));
  }
}
async function getMerger(topicData) {
  if (stryMutAct_9fa48("1252")) {
    {}
  } else {
    stryCov_9fa48("1252");
    if (stryMutAct_9fa48("1255") ? false : stryMutAct_9fa48("1254") ? true : stryMutAct_9fa48("1253") ? parseInt(topicData.mergerUid, 10) : (stryCov_9fa48("1253", "1254", "1255"), !parseInt(topicData.mergerUid, 10))) {
      if (stryMutAct_9fa48("1256")) {
        {}
      } else {
        stryCov_9fa48("1256");
        return null;
      }
    }
    const [merger, mergedIntoTitle] = await Promise.all(stryMutAct_9fa48("1257") ? [] : (stryCov_9fa48("1257"), [user.getUserFields(topicData.mergerUid, stryMutAct_9fa48("1258") ? [] : (stryCov_9fa48("1258"), [stryMutAct_9fa48("1259") ? "" : (stryCov_9fa48("1259"), 'username'), stryMutAct_9fa48("1260") ? "" : (stryCov_9fa48("1260"), 'userslug'), stryMutAct_9fa48("1261") ? "" : (stryCov_9fa48("1261"), 'picture')])), Topics.getTopicField(topicData.mergeIntoTid, stryMutAct_9fa48("1262") ? "" : (stryCov_9fa48("1262"), 'title'))]));
    merger.mergedIntoTitle = mergedIntoTitle;
    return merger;
  }
}
Topics.getMainPost = async function (tid, uid) {
  if (stryMutAct_9fa48("1263")) {
    {}
  } else {
    stryCov_9fa48("1263");
    const mainPosts = await Topics.getMainPosts(stryMutAct_9fa48("1264") ? [] : (stryCov_9fa48("1264"), [tid]), uid);
    return (stryMutAct_9fa48("1267") ? Array.isArray(mainPosts) || mainPosts.length : stryMutAct_9fa48("1266") ? false : stryMutAct_9fa48("1265") ? true : (stryCov_9fa48("1265", "1266", "1267"), Array.isArray(mainPosts) && mainPosts.length)) ? mainPosts[0] : null;
  }
};
Topics.getMainPids = async function (tids) {
  if (stryMutAct_9fa48("1268")) {
    {}
  } else {
    stryCov_9fa48("1268");
    if (stryMutAct_9fa48("1271") ? !Array.isArray(tids) && !tids.length : stryMutAct_9fa48("1270") ? false : stryMutAct_9fa48("1269") ? true : (stryCov_9fa48("1269", "1270", "1271"), (stryMutAct_9fa48("1272") ? Array.isArray(tids) : (stryCov_9fa48("1272"), !Array.isArray(tids))) || (stryMutAct_9fa48("1273") ? tids.length : (stryCov_9fa48("1273"), !tids.length)))) {
      if (stryMutAct_9fa48("1274")) {
        {}
      } else {
        stryCov_9fa48("1274");
        return stryMutAct_9fa48("1275") ? ["Stryker was here"] : (stryCov_9fa48("1275"), []);
      }
    }
    const topicData = await Topics.getTopicsFields(tids, stryMutAct_9fa48("1276") ? [] : (stryCov_9fa48("1276"), [stryMutAct_9fa48("1277") ? "" : (stryCov_9fa48("1277"), 'mainPid')]));
    return topicData.map(stryMutAct_9fa48("1278") ? () => undefined : (stryCov_9fa48("1278"), topic => stryMutAct_9fa48("1281") ? topic || topic.mainPid : stryMutAct_9fa48("1280") ? false : stryMutAct_9fa48("1279") ? true : (stryCov_9fa48("1279", "1280", "1281"), topic && topic.mainPid)));
  }
};
Topics.getMainPosts = async function (tids, uid) {
  if (stryMutAct_9fa48("1282")) {
    {}
  } else {
    stryCov_9fa48("1282");
    const mainPids = await Topics.getMainPids(tids);
    return await getMainPosts(mainPids, uid);
  }
};
async function getMainPosts(mainPids, uid) {
  if (stryMutAct_9fa48("1283")) {
    {}
  } else {
    stryCov_9fa48("1283");
    let postData = await posts.getPostsByPids(mainPids, uid);
    postData = await (stryMutAct_9fa48("1284") ? user.blocks : (stryCov_9fa48("1284"), user.blocks.filter(uid, postData)));
    postData.forEach(post => {
      if (stryMutAct_9fa48("1285")) {
        {}
      } else {
        stryCov_9fa48("1285");
        if (stryMutAct_9fa48("1287") ? false : stryMutAct_9fa48("1286") ? true : (stryCov_9fa48("1286", "1287"), post)) {
          if (stryMutAct_9fa48("1288")) {
            {}
          } else {
            stryCov_9fa48("1288");
            post.index = 0;
          }
        }
      }
    });
    return await Topics.addPostData(postData, uid);
  }
}
Topics.isLocked = async function (tid) {
  if (stryMutAct_9fa48("1289")) {
    {}
  } else {
    stryCov_9fa48("1289");
    const locked = await Topics.getTopicField(tid, stryMutAct_9fa48("1290") ? "" : (stryCov_9fa48("1290"), 'locked'));
    return stryMutAct_9fa48("1293") ? locked !== 1 : stryMutAct_9fa48("1292") ? false : stryMutAct_9fa48("1291") ? true : (stryCov_9fa48("1291", "1292", "1293"), locked === 1);
  }
};
Topics.search = async function (tid, term) {
  if (stryMutAct_9fa48("1294")) {
    {}
  } else {
    stryCov_9fa48("1294");
    if (stryMutAct_9fa48("1297") ? !tid && !term : stryMutAct_9fa48("1296") ? false : stryMutAct_9fa48("1295") ? true : (stryCov_9fa48("1295", "1296", "1297"), (stryMutAct_9fa48("1298") ? tid : (stryCov_9fa48("1298"), !tid)) || (stryMutAct_9fa48("1299") ? term : (stryCov_9fa48("1299"), !term)))) {
      if (stryMutAct_9fa48("1300")) {
        {}
      } else {
        stryCov_9fa48("1300");
        throw new Error(stryMutAct_9fa48("1301") ? "" : (stryCov_9fa48("1301"), '[[error:invalid-data]]'));
      }
    }
    const result = await plugins.hooks.fire(stryMutAct_9fa48("1302") ? "" : (stryCov_9fa48("1302"), 'filter:topic.search'), stryMutAct_9fa48("1303") ? {} : (stryCov_9fa48("1303"), {
      tid: tid,
      term: term,
      ids: stryMutAct_9fa48("1304") ? ["Stryker was here"] : (stryCov_9fa48("1304"), [])
    }));
    return Array.isArray(result) ? result : result.ids;
  }
};
require('../promisify')(Topics);