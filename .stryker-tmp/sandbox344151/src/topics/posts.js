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
const nconf = require('nconf');
const db = require('../database');
const user = require('../user');
const posts = require('../posts');
const meta = require('../meta');
const plugins = require('../plugins');
const utils = require('../utils');
const backlinkRegex = new RegExp(stryMutAct_9fa48("1355") ? `` : (stryCov_9fa48("1355"), `(?:${nconf.get(stryMutAct_9fa48("1356") ? "" : (stryCov_9fa48("1356"), 'url')).replace(stryMutAct_9fa48("1357") ? "" : (stryCov_9fa48("1357"), '/'), stryMutAct_9fa48("1358") ? "" : (stryCov_9fa48("1358"), '\\/'))}|\b|\\s)\\/topic\\/(\\d+)(?:\\/\\w+)?`), stryMutAct_9fa48("1359") ? "" : (stryCov_9fa48("1359"), 'g'));
module.exports = function (Topics) {
  if (stryMutAct_9fa48("1360")) {
    {}
  } else {
    stryCov_9fa48("1360");
    Topics.onNewPostMade = async function (postData) {
      if (stryMutAct_9fa48("1361")) {
        {}
      } else {
        stryCov_9fa48("1361");
        await Topics.updateLastPostTime(postData.tid, postData.timestamp);
        await Topics.addPostToTopic(postData.tid, postData);
      }
    };
    Topics.getTopicPosts = async function (topicData, set, start, stop, uid, reverse) {
      if (stryMutAct_9fa48("1362")) {
        {}
      } else {
        stryCov_9fa48("1362");
        if (stryMutAct_9fa48("1365") ? false : stryMutAct_9fa48("1364") ? true : stryMutAct_9fa48("1363") ? topicData : (stryCov_9fa48("1363", "1364", "1365"), !topicData)) {
          if (stryMutAct_9fa48("1366")) {
            {}
          } else {
            stryCov_9fa48("1366");
            return stryMutAct_9fa48("1367") ? ["Stryker was here"] : (stryCov_9fa48("1367"), []);
          }
        }
        let repliesStart = start;
        let repliesStop = stop;
        if (stryMutAct_9fa48("1371") ? stop <= 0 : stryMutAct_9fa48("1370") ? stop >= 0 : stryMutAct_9fa48("1369") ? false : stryMutAct_9fa48("1368") ? true : (stryCov_9fa48("1368", "1369", "1370", "1371"), stop > 0)) {
          if (stryMutAct_9fa48("1372")) {
            {}
          } else {
            stryCov_9fa48("1372");
            stryMutAct_9fa48("1373") ? repliesStop += 1 : (stryCov_9fa48("1373"), repliesStop -= 1);
            if (stryMutAct_9fa48("1377") ? start <= 0 : stryMutAct_9fa48("1376") ? start >= 0 : stryMutAct_9fa48("1375") ? false : stryMutAct_9fa48("1374") ? true : (stryCov_9fa48("1374", "1375", "1376", "1377"), start > 0)) {
              if (stryMutAct_9fa48("1378")) {
                {}
              } else {
                stryCov_9fa48("1378");
                stryMutAct_9fa48("1379") ? repliesStart += 1 : (stryCov_9fa48("1379"), repliesStart -= 1);
              }
            }
          }
        }
        let pids = stryMutAct_9fa48("1380") ? ["Stryker was here"] : (stryCov_9fa48("1380"), []);
        if (stryMutAct_9fa48("1383") ? start !== 0 && stop !== 0 : stryMutAct_9fa48("1382") ? false : stryMutAct_9fa48("1381") ? true : (stryCov_9fa48("1381", "1382", "1383"), (stryMutAct_9fa48("1385") ? start === 0 : stryMutAct_9fa48("1384") ? false : (stryCov_9fa48("1384", "1385"), start !== 0)) || (stryMutAct_9fa48("1387") ? stop === 0 : stryMutAct_9fa48("1386") ? false : (stryCov_9fa48("1386", "1387"), stop !== 0)))) {
          if (stryMutAct_9fa48("1388")) {
            {}
          } else {
            stryCov_9fa48("1388");
            pids = await posts.getPidsFromSet(set, repliesStart, repliesStop, reverse);
          }
        }
        if (stryMutAct_9fa48("1391") ? !pids.length || !topicData.mainPid : stryMutAct_9fa48("1390") ? false : stryMutAct_9fa48("1389") ? true : (stryCov_9fa48("1389", "1390", "1391"), (stryMutAct_9fa48("1392") ? pids.length : (stryCov_9fa48("1392"), !pids.length)) && (stryMutAct_9fa48("1393") ? topicData.mainPid : (stryCov_9fa48("1393"), !topicData.mainPid)))) {
          if (stryMutAct_9fa48("1394")) {
            {}
          } else {
            stryCov_9fa48("1394");
            return stryMutAct_9fa48("1395") ? ["Stryker was here"] : (stryCov_9fa48("1395"), []);
          }
        }
        if (stryMutAct_9fa48("1398") ? topicData.mainPid || start === 0 : stryMutAct_9fa48("1397") ? false : stryMutAct_9fa48("1396") ? true : (stryCov_9fa48("1396", "1397", "1398"), topicData.mainPid && (stryMutAct_9fa48("1400") ? start !== 0 : stryMutAct_9fa48("1399") ? true : (stryCov_9fa48("1399", "1400"), start === 0)))) {
          if (stryMutAct_9fa48("1401")) {
            {}
          } else {
            stryCov_9fa48("1401");
            pids.unshift(topicData.mainPid);
          }
        }
        let postData = await posts.getPostsByPids(pids, uid);
        if (stryMutAct_9fa48("1404") ? false : stryMutAct_9fa48("1403") ? true : stryMutAct_9fa48("1402") ? postData.length : (stryCov_9fa48("1402", "1403", "1404"), !postData.length)) {
          if (stryMutAct_9fa48("1405")) {
            {}
          } else {
            stryCov_9fa48("1405");
            return stryMutAct_9fa48("1406") ? ["Stryker was here"] : (stryCov_9fa48("1406"), []);
          }
        }
        let replies = postData;
        if (stryMutAct_9fa48("1409") ? topicData.mainPid || start === 0 : stryMutAct_9fa48("1408") ? false : stryMutAct_9fa48("1407") ? true : (stryCov_9fa48("1407", "1408", "1409"), topicData.mainPid && (stryMutAct_9fa48("1411") ? start !== 0 : stryMutAct_9fa48("1410") ? true : (stryCov_9fa48("1410", "1411"), start === 0)))) {
          if (stryMutAct_9fa48("1412")) {
            {}
          } else {
            stryCov_9fa48("1412");
            postData[0].index = 0;
            replies = stryMutAct_9fa48("1413") ? postData : (stryCov_9fa48("1413"), postData.slice(1));
          }
        }
        Topics.calculatePostIndices(replies, repliesStart);
        await addEventStartEnd(postData, set, reverse, topicData);
        const allPosts = stryMutAct_9fa48("1414") ? postData : (stryCov_9fa48("1414"), postData.slice());
        postData = await (stryMutAct_9fa48("1415") ? user.blocks : (stryCov_9fa48("1415"), user.blocks.filter(uid, postData)));
        if (stryMutAct_9fa48("1418") ? allPosts.length === postData.length : stryMutAct_9fa48("1417") ? false : stryMutAct_9fa48("1416") ? true : (stryCov_9fa48("1416", "1417", "1418"), allPosts.length !== postData.length)) {
          if (stryMutAct_9fa48("1419")) {
            {}
          } else {
            stryCov_9fa48("1419");
            const includedPids = new Set(postData.map(stryMutAct_9fa48("1420") ? () => undefined : (stryCov_9fa48("1420"), p => p.pid)));
            stryMutAct_9fa48("1421") ? allPosts.forEach((p, index) => {
              if (!includedPids.has(p.pid) && allPosts[index + 1] && !reverse) {
                allPosts[index + 1].eventEnd = p.eventEnd;
              }
            }) : (stryCov_9fa48("1421"), allPosts.reverse().forEach((p, index) => {
              if (stryMutAct_9fa48("1422")) {
                {}
              } else {
                stryCov_9fa48("1422");
                if (stryMutAct_9fa48("1425") ? !includedPids.has(p.pid) && allPosts[index + 1] || !reverse : stryMutAct_9fa48("1424") ? false : stryMutAct_9fa48("1423") ? true : (stryCov_9fa48("1423", "1424", "1425"), (stryMutAct_9fa48("1427") ? !includedPids.has(p.pid) || allPosts[index + 1] : stryMutAct_9fa48("1426") ? true : (stryCov_9fa48("1426", "1427"), (stryMutAct_9fa48("1428") ? includedPids.has(p.pid) : (stryCov_9fa48("1428"), !includedPids.has(p.pid))) && allPosts[stryMutAct_9fa48("1429") ? index - 1 : (stryCov_9fa48("1429"), index + 1)])) && (stryMutAct_9fa48("1430") ? reverse : (stryCov_9fa48("1430"), !reverse)))) {
                  if (stryMutAct_9fa48("1431")) {
                    {}
                  } else {
                    stryCov_9fa48("1431");
                    allPosts[stryMutAct_9fa48("1432") ? index - 1 : (stryCov_9fa48("1432"), index + 1)].eventEnd = p.eventEnd;
                  }
                }
              }
            }));
          }
        }
        const result = await plugins.hooks.fire(stryMutAct_9fa48("1433") ? "" : (stryCov_9fa48("1433"), 'filter:topic.getPosts'), stryMutAct_9fa48("1434") ? {} : (stryCov_9fa48("1434"), {
          topic: topicData,
          uid: uid,
          posts: await Topics.addPostData(postData, uid)
        }));
        return result.posts;
      }
    };
    async function addEventStartEnd(postData, set, reverse, topicData) {
      if (stryMutAct_9fa48("1435")) {
        {}
      } else {
        stryCov_9fa48("1435");
        if (stryMutAct_9fa48("1438") ? false : stryMutAct_9fa48("1437") ? true : stryMutAct_9fa48("1436") ? postData.length : (stryCov_9fa48("1436", "1437", "1438"), !postData.length)) {
          if (stryMutAct_9fa48("1439")) {
            {}
          } else {
            stryCov_9fa48("1439");
            return;
          }
        }
        postData.forEach((p, index) => {
          if (stryMutAct_9fa48("1440")) {
            {}
          } else {
            stryCov_9fa48("1440");
            if (stryMutAct_9fa48("1443") ? p && p.index === 0 || reverse : stryMutAct_9fa48("1442") ? false : stryMutAct_9fa48("1441") ? true : (stryCov_9fa48("1441", "1442", "1443"), (stryMutAct_9fa48("1445") ? p || p.index === 0 : stryMutAct_9fa48("1444") ? true : (stryCov_9fa48("1444", "1445"), p && (stryMutAct_9fa48("1447") ? p.index !== 0 : stryMutAct_9fa48("1446") ? true : (stryCov_9fa48("1446", "1447"), p.index === 0)))) && reverse)) {
              if (stryMutAct_9fa48("1448")) {
                {}
              } else {
                stryCov_9fa48("1448");
                p.eventStart = topicData.lastposttime;
                p.eventEnd = Date.now();
              }
            } else if (stryMutAct_9fa48("1451") ? p || postData[index + 1] : stryMutAct_9fa48("1450") ? false : stryMutAct_9fa48("1449") ? true : (stryCov_9fa48("1449", "1450", "1451"), p && postData[stryMutAct_9fa48("1452") ? index - 1 : (stryCov_9fa48("1452"), index + 1)])) {
              if (stryMutAct_9fa48("1453")) {
                {}
              } else {
                stryCov_9fa48("1453");
                p.eventStart = reverse ? postData[stryMutAct_9fa48("1454") ? index - 1 : (stryCov_9fa48("1454"), index + 1)].timestamp : p.timestamp;
                p.eventEnd = reverse ? p.timestamp : postData[stryMutAct_9fa48("1455") ? index - 1 : (stryCov_9fa48("1455"), index + 1)].timestamp;
              }
            }
          }
        });
        const lastPost = postData[stryMutAct_9fa48("1456") ? postData.length + 1 : (stryCov_9fa48("1456"), postData.length - 1)];
        if (stryMutAct_9fa48("1458") ? false : stryMutAct_9fa48("1457") ? true : (stryCov_9fa48("1457", "1458"), lastPost)) {
          if (stryMutAct_9fa48("1459")) {
            {}
          } else {
            stryCov_9fa48("1459");
            lastPost.eventStart = reverse ? topicData.timestamp : lastPost.timestamp;
            lastPost.eventEnd = reverse ? lastPost.timestamp : Date.now();
            if (stryMutAct_9fa48("1461") ? false : stryMutAct_9fa48("1460") ? true : (stryCov_9fa48("1460", "1461"), lastPost.index)) {
              if (stryMutAct_9fa48("1462")) {
                {}
              } else {
                stryCov_9fa48("1462");
                const nextPost = await db[reverse ? stryMutAct_9fa48("1463") ? "" : (stryCov_9fa48("1463"), 'getSortedSetRevRangeWithScores') : stryMutAct_9fa48("1464") ? "" : (stryCov_9fa48("1464"), 'getSortedSetRangeWithScores')](set, lastPost.index, lastPost.index);
                if (stryMutAct_9fa48("1466") ? false : stryMutAct_9fa48("1465") ? true : (stryCov_9fa48("1465", "1466"), reverse)) {
                  if (stryMutAct_9fa48("1467")) {
                    {}
                  } else {
                    stryCov_9fa48("1467");
                    lastPost.eventStart = nextPost.length ? nextPost[0].score : lastPost.eventStart;
                  }
                } else {
                  if (stryMutAct_9fa48("1468")) {
                    {}
                  } else {
                    stryCov_9fa48("1468");
                    lastPost.eventEnd = nextPost.length ? nextPost[0].score : lastPost.eventEnd;
                  }
                }
              }
            }
          }
        }
      }
    }
    Topics.addPostData = async function (postData, uid) {
      if (stryMutAct_9fa48("1469")) {
        {}
      } else {
        stryCov_9fa48("1469");
        if (stryMutAct_9fa48("1472") ? !Array.isArray(postData) && !postData.length : stryMutAct_9fa48("1471") ? false : stryMutAct_9fa48("1470") ? true : (stryCov_9fa48("1470", "1471", "1472"), (stryMutAct_9fa48("1473") ? Array.isArray(postData) : (stryCov_9fa48("1473"), !Array.isArray(postData))) || (stryMutAct_9fa48("1474") ? postData.length : (stryCov_9fa48("1474"), !postData.length)))) {
          if (stryMutAct_9fa48("1475")) {
            {}
          } else {
            stryCov_9fa48("1475");
            return stryMutAct_9fa48("1476") ? ["Stryker was here"] : (stryCov_9fa48("1476"), []);
          }
        }
        const pids = postData.map(stryMutAct_9fa48("1477") ? () => undefined : (stryCov_9fa48("1477"), post => stryMutAct_9fa48("1480") ? post || post.pid : stryMutAct_9fa48("1479") ? false : stryMutAct_9fa48("1478") ? true : (stryCov_9fa48("1478", "1479", "1480"), post && post.pid)));
        async function getPostUserData(field, method) {
          if (stryMutAct_9fa48("1481")) {
            {}
          } else {
            stryCov_9fa48("1481");
            const uids = _.uniq(stryMutAct_9fa48("1482") ? postData.map(p => p[field]) : (stryCov_9fa48("1482"), postData.filter(stryMutAct_9fa48("1483") ? () => undefined : (stryCov_9fa48("1483"), p => stryMutAct_9fa48("1486") ? p || parseInt(p[field], 10) >= 0 : stryMutAct_9fa48("1485") ? false : stryMutAct_9fa48("1484") ? true : (stryCov_9fa48("1484", "1485", "1486"), p && (stryMutAct_9fa48("1489") ? parseInt(p[field], 10) < 0 : stryMutAct_9fa48("1488") ? parseInt(p[field], 10) > 0 : stryMutAct_9fa48("1487") ? true : (stryCov_9fa48("1487", "1488", "1489"), parseInt(p[field], 10) >= 0))))).map(stryMutAct_9fa48("1490") ? () => undefined : (stryCov_9fa48("1490"), p => p[field]))));
            const userData = await method(uids);
            return _.zipObject(uids, userData);
          }
        }
        const [bookmarks, voteData, userData, editors, replies] = await Promise.all(stryMutAct_9fa48("1491") ? [] : (stryCov_9fa48("1491"), [posts.hasBookmarked(pids, uid), posts.getVoteStatusByPostIDs(pids, uid), getPostUserData(stryMutAct_9fa48("1492") ? "" : (stryCov_9fa48("1492"), 'uid'), stryMutAct_9fa48("1493") ? () => undefined : (stryCov_9fa48("1493"), async uids => await posts.getUserInfoForPosts(uids, uid))), getPostUserData(stryMutAct_9fa48("1494") ? "" : (stryCov_9fa48("1494"), 'editor'), stryMutAct_9fa48("1495") ? () => undefined : (stryCov_9fa48("1495"), async uids => await user.getUsersFields(uids, stryMutAct_9fa48("1496") ? [] : (stryCov_9fa48("1496"), [stryMutAct_9fa48("1497") ? "" : (stryCov_9fa48("1497"), 'uid'), stryMutAct_9fa48("1498") ? "" : (stryCov_9fa48("1498"), 'username'), stryMutAct_9fa48("1499") ? "" : (stryCov_9fa48("1499"), 'userslug')])))), getPostReplies(pids, uid), Topics.addParentPosts(postData)]));
        postData.forEach((postObj, i) => {
          if (stryMutAct_9fa48("1500")) {
            {}
          } else {
            stryCov_9fa48("1500");
            if (stryMutAct_9fa48("1502") ? false : stryMutAct_9fa48("1501") ? true : (stryCov_9fa48("1501", "1502"), postObj)) {
              if (stryMutAct_9fa48("1503")) {
                {}
              } else {
                stryCov_9fa48("1503");
                postObj.user = postObj.uid ? userData[postObj.uid] : stryMutAct_9fa48("1504") ? {} : (stryCov_9fa48("1504"), {
                  ...userData[postObj.uid]
                });
                postObj.editor = postObj.editor ? editors[postObj.editor] : null;
                postObj.bookmarked = bookmarks[i];
                postObj.upvoted = voteData.upvotes[i];
                postObj.downvoted = voteData.downvotes[i];
                postObj.votes = stryMutAct_9fa48("1507") ? postObj.votes && 0 : stryMutAct_9fa48("1506") ? false : stryMutAct_9fa48("1505") ? true : (stryCov_9fa48("1505", "1506", "1507"), postObj.votes || 0);
                postObj.replies = replies[i];
                postObj.selfPost = stryMutAct_9fa48("1510") ? parseInt(uid, 10) > 0 || parseInt(uid, 10) === postObj.uid : stryMutAct_9fa48("1509") ? false : stryMutAct_9fa48("1508") ? true : (stryCov_9fa48("1508", "1509", "1510"), (stryMutAct_9fa48("1513") ? parseInt(uid, 10) <= 0 : stryMutAct_9fa48("1512") ? parseInt(uid, 10) >= 0 : stryMutAct_9fa48("1511") ? true : (stryCov_9fa48("1511", "1512", "1513"), parseInt(uid, 10) > 0)) && (stryMutAct_9fa48("1515") ? parseInt(uid, 10) !== postObj.uid : stryMutAct_9fa48("1514") ? true : (stryCov_9fa48("1514", "1515"), parseInt(uid, 10) === postObj.uid)));

                // Username override for guests, if enabled
                if (stryMutAct_9fa48("1518") ? meta.config.allowGuestHandles && postObj.uid === 0 || postObj.handle : stryMutAct_9fa48("1517") ? false : stryMutAct_9fa48("1516") ? true : (stryCov_9fa48("1516", "1517", "1518"), (stryMutAct_9fa48("1520") ? meta.config.allowGuestHandles || postObj.uid === 0 : stryMutAct_9fa48("1519") ? true : (stryCov_9fa48("1519", "1520"), meta.config.allowGuestHandles && (stryMutAct_9fa48("1522") ? postObj.uid !== 0 : stryMutAct_9fa48("1521") ? true : (stryCov_9fa48("1521", "1522"), postObj.uid === 0)))) && postObj.handle)) {
                  if (stryMutAct_9fa48("1523")) {
                    {}
                  } else {
                    stryCov_9fa48("1523");
                    postObj.user.username = validator.escape(String(postObj.handle));
                    postObj.user.displayname = postObj.user.username;
                  }
                }
              }
            }
          }
        });
        const result = await plugins.hooks.fire(stryMutAct_9fa48("1524") ? "" : (stryCov_9fa48("1524"), 'filter:topics.addPostData'), stryMutAct_9fa48("1525") ? {} : (stryCov_9fa48("1525"), {
          posts: postData,
          uid: uid
        }));
        return result.posts;
      }
    };
    Topics.modifyPostsByPrivilege = function (topicData, topicPrivileges) {
      if (stryMutAct_9fa48("1526")) {
        {}
      } else {
        stryCov_9fa48("1526");
        const loggedIn = stryMutAct_9fa48("1530") ? parseInt(topicPrivileges.uid, 10) <= 0 : stryMutAct_9fa48("1529") ? parseInt(topicPrivileges.uid, 10) >= 0 : stryMutAct_9fa48("1528") ? false : stryMutAct_9fa48("1527") ? true : (stryCov_9fa48("1527", "1528", "1529", "1530"), parseInt(topicPrivileges.uid, 10) > 0);
        topicData.posts.forEach(post => {
          if (stryMutAct_9fa48("1531")) {
            {}
          } else {
            stryCov_9fa48("1531");
            if (stryMutAct_9fa48("1533") ? false : stryMutAct_9fa48("1532") ? true : (stryCov_9fa48("1532", "1533"), post)) {
              if (stryMutAct_9fa48("1534")) {
                {}
              } else {
                stryCov_9fa48("1534");
                post.topicOwnerPost = stryMutAct_9fa48("1537") ? parseInt(topicData.uid, 10) !== parseInt(post.uid, 10) : stryMutAct_9fa48("1536") ? false : stryMutAct_9fa48("1535") ? true : (stryCov_9fa48("1535", "1536", "1537"), parseInt(topicData.uid, 10) === parseInt(post.uid, 10));
                post.display_edit_tools = stryMutAct_9fa48("1540") ? topicPrivileges.isAdminOrMod && post.selfPost && topicPrivileges['posts:edit'] : stryMutAct_9fa48("1539") ? false : stryMutAct_9fa48("1538") ? true : (stryCov_9fa48("1538", "1539", "1540"), topicPrivileges.isAdminOrMod || (stryMutAct_9fa48("1542") ? post.selfPost || topicPrivileges['posts:edit'] : stryMutAct_9fa48("1541") ? false : (stryCov_9fa48("1541", "1542"), post.selfPost && topicPrivileges[stryMutAct_9fa48("1543") ? "" : (stryCov_9fa48("1543"), 'posts:edit')])));
                post.display_delete_tools = stryMutAct_9fa48("1546") ? topicPrivileges.isAdminOrMod && post.selfPost && topicPrivileges['posts:delete'] : stryMutAct_9fa48("1545") ? false : stryMutAct_9fa48("1544") ? true : (stryCov_9fa48("1544", "1545", "1546"), topicPrivileges.isAdminOrMod || (stryMutAct_9fa48("1548") ? post.selfPost || topicPrivileges['posts:delete'] : stryMutAct_9fa48("1547") ? false : (stryCov_9fa48("1547", "1548"), post.selfPost && topicPrivileges[stryMutAct_9fa48("1549") ? "" : (stryCov_9fa48("1549"), 'posts:delete')])));
                post.display_moderator_tools = stryMutAct_9fa48("1552") ? post.display_edit_tools && post.display_delete_tools : stryMutAct_9fa48("1551") ? false : stryMutAct_9fa48("1550") ? true : (stryCov_9fa48("1550", "1551", "1552"), post.display_edit_tools || post.display_delete_tools);
                post.display_move_tools = stryMutAct_9fa48("1555") ? topicPrivileges.isAdminOrMod || post.index !== 0 : stryMutAct_9fa48("1554") ? false : stryMutAct_9fa48("1553") ? true : (stryCov_9fa48("1553", "1554", "1555"), topicPrivileges.isAdminOrMod && (stryMutAct_9fa48("1557") ? post.index === 0 : stryMutAct_9fa48("1556") ? true : (stryCov_9fa48("1556", "1557"), post.index !== 0)));
                post.display_post_menu = stryMutAct_9fa48("1560") ? (topicPrivileges.isAdminOrMod || post.selfPost && (!topicData.locked && !post.deleted || post.deleted && parseInt(post.deleterUid, 10) === parseInt(topicPrivileges.uid, 10))) && (loggedIn || topicData.postSharing.length) && !post.deleted : stryMutAct_9fa48("1559") ? false : stryMutAct_9fa48("1558") ? true : (stryCov_9fa48("1558", "1559", "1560"), (stryMutAct_9fa48("1562") ? topicPrivileges.isAdminOrMod && post.selfPost && (!topicData.locked && !post.deleted || post.deleted && parseInt(post.deleterUid, 10) === parseInt(topicPrivileges.uid, 10)) : stryMutAct_9fa48("1561") ? false : (stryCov_9fa48("1561", "1562"), topicPrivileges.isAdminOrMod || (stryMutAct_9fa48("1564") ? post.selfPost || !topicData.locked && !post.deleted || post.deleted && parseInt(post.deleterUid, 10) === parseInt(topicPrivileges.uid, 10) : stryMutAct_9fa48("1563") ? false : (stryCov_9fa48("1563", "1564"), post.selfPost && (stryMutAct_9fa48("1566") ? !topicData.locked && !post.deleted && post.deleted && parseInt(post.deleterUid, 10) === parseInt(topicPrivileges.uid, 10) : stryMutAct_9fa48("1565") ? true : (stryCov_9fa48("1565", "1566"), (stryMutAct_9fa48("1568") ? !topicData.locked || !post.deleted : stryMutAct_9fa48("1567") ? false : (stryCov_9fa48("1567", "1568"), (stryMutAct_9fa48("1569") ? topicData.locked : (stryCov_9fa48("1569"), !topicData.locked)) && (stryMutAct_9fa48("1570") ? post.deleted : (stryCov_9fa48("1570"), !post.deleted)))) || (stryMutAct_9fa48("1572") ? post.deleted || parseInt(post.deleterUid, 10) === parseInt(topicPrivileges.uid, 10) : stryMutAct_9fa48("1571") ? false : (stryCov_9fa48("1571", "1572"), post.deleted && (stryMutAct_9fa48("1574") ? parseInt(post.deleterUid, 10) !== parseInt(topicPrivileges.uid, 10) : stryMutAct_9fa48("1573") ? true : (stryCov_9fa48("1573", "1574"), parseInt(post.deleterUid, 10) === parseInt(topicPrivileges.uid, 10))))))))))) || (stryMutAct_9fa48("1576") ? loggedIn || topicData.postSharing.length || !post.deleted : stryMutAct_9fa48("1575") ? false : (stryCov_9fa48("1575", "1576"), (stryMutAct_9fa48("1578") ? loggedIn && topicData.postSharing.length : stryMutAct_9fa48("1577") ? true : (stryCov_9fa48("1577", "1578"), loggedIn || topicData.postSharing.length)) && (stryMutAct_9fa48("1579") ? post.deleted : (stryCov_9fa48("1579"), !post.deleted)))));
                post.ip = topicPrivileges.isAdminOrMod ? post.ip : undefined;
                posts.modifyPostByPrivilege(post, topicPrivileges);
              }
            }
          }
        });
      }
    };
    Topics.addParentPosts = async function (postData) {
      if (stryMutAct_9fa48("1580")) {
        {}
      } else {
        stryCov_9fa48("1580");
        let parentPids = stryMutAct_9fa48("1581") ? postData.map(postObj => postObj && postObj.hasOwnProperty('toPid') ? parseInt(postObj.toPid, 10) : null) : (stryCov_9fa48("1581"), postData.map(stryMutAct_9fa48("1582") ? () => undefined : (stryCov_9fa48("1582"), postObj => (stryMutAct_9fa48("1585") ? postObj || postObj.hasOwnProperty('toPid') : stryMutAct_9fa48("1584") ? false : stryMutAct_9fa48("1583") ? true : (stryCov_9fa48("1583", "1584", "1585"), postObj && postObj.hasOwnProperty(stryMutAct_9fa48("1586") ? "" : (stryCov_9fa48("1586"), 'toPid')))) ? parseInt(postObj.toPid, 10) : null)).filter(Boolean));
        if (stryMutAct_9fa48("1589") ? false : stryMutAct_9fa48("1588") ? true : stryMutAct_9fa48("1587") ? parentPids.length : (stryCov_9fa48("1587", "1588", "1589"), !parentPids.length)) {
          if (stryMutAct_9fa48("1590")) {
            {}
          } else {
            stryCov_9fa48("1590");
            return;
          }
        }
        parentPids = _.uniq(parentPids);
        const parentPosts = await posts.getPostsFields(parentPids, stryMutAct_9fa48("1591") ? [] : (stryCov_9fa48("1591"), [stryMutAct_9fa48("1592") ? "" : (stryCov_9fa48("1592"), 'uid')]));
        const parentUids = _.uniq(parentPosts.map(stryMutAct_9fa48("1593") ? () => undefined : (stryCov_9fa48("1593"), postObj => stryMutAct_9fa48("1596") ? postObj || postObj.uid : stryMutAct_9fa48("1595") ? false : stryMutAct_9fa48("1594") ? true : (stryCov_9fa48("1594", "1595", "1596"), postObj && postObj.uid))));
        const userData = await user.getUsersFields(parentUids, stryMutAct_9fa48("1597") ? [] : (stryCov_9fa48("1597"), [stryMutAct_9fa48("1598") ? "" : (stryCov_9fa48("1598"), 'username')]));
        const usersMap = {};
        userData.forEach(user => {
          if (stryMutAct_9fa48("1599")) {
            {}
          } else {
            stryCov_9fa48("1599");
            usersMap[user.uid] = user.username;
          }
        });
        const parents = {};
        parentPosts.forEach((post, i) => {
          if (stryMutAct_9fa48("1600")) {
            {}
          } else {
            stryCov_9fa48("1600");
            parents[parentPids[i]] = stryMutAct_9fa48("1601") ? {} : (stryCov_9fa48("1601"), {
              username: usersMap[post.uid]
            });
          }
        });
        postData.forEach(post => {
          if (stryMutAct_9fa48("1602")) {
            {}
          } else {
            stryCov_9fa48("1602");
            post.parent = parents[post.toPid];
          }
        });
      }
    };
    Topics.calculatePostIndices = function (posts, start) {
      if (stryMutAct_9fa48("1603")) {
        {}
      } else {
        stryCov_9fa48("1603");
        posts.forEach((post, index) => {
          if (stryMutAct_9fa48("1604")) {
            {}
          } else {
            stryCov_9fa48("1604");
            if (stryMutAct_9fa48("1606") ? false : stryMutAct_9fa48("1605") ? true : (stryCov_9fa48("1605", "1606"), post)) {
              if (stryMutAct_9fa48("1607")) {
                {}
              } else {
                stryCov_9fa48("1607");
                post.index = stryMutAct_9fa48("1608") ? start + index - 1 : (stryCov_9fa48("1608"), (stryMutAct_9fa48("1609") ? start - index : (stryCov_9fa48("1609"), start + index)) + 1);
              }
            }
          }
        });
      }
    };
    Topics.getLatestUndeletedPid = async function (tid) {
      if (stryMutAct_9fa48("1610")) {
        {}
      } else {
        stryCov_9fa48("1610");
        const pid = await Topics.getLatestUndeletedReply(tid);
        if (stryMutAct_9fa48("1612") ? false : stryMutAct_9fa48("1611") ? true : (stryCov_9fa48("1611", "1612"), pid)) {
          if (stryMutAct_9fa48("1613")) {
            {}
          } else {
            stryCov_9fa48("1613");
            return pid;
          }
        }
        const mainPid = await Topics.getTopicField(tid, stryMutAct_9fa48("1614") ? "" : (stryCov_9fa48("1614"), 'mainPid'));
        const mainPost = await posts.getPostFields(mainPid, stryMutAct_9fa48("1615") ? [] : (stryCov_9fa48("1615"), [stryMutAct_9fa48("1616") ? "" : (stryCov_9fa48("1616"), 'pid'), stryMutAct_9fa48("1617") ? "" : (stryCov_9fa48("1617"), 'deleted')]));
        return (stryMutAct_9fa48("1620") ? mainPost.pid || !mainPost.deleted : stryMutAct_9fa48("1619") ? false : stryMutAct_9fa48("1618") ? true : (stryCov_9fa48("1618", "1619", "1620"), mainPost.pid && (stryMutAct_9fa48("1621") ? mainPost.deleted : (stryCov_9fa48("1621"), !mainPost.deleted)))) ? mainPost.pid : null;
      }
    };
    Topics.getLatestUndeletedReply = async function (tid) {
      if (stryMutAct_9fa48("1622")) {
        {}
      } else {
        stryCov_9fa48("1622");
        let isDeleted = stryMutAct_9fa48("1623") ? true : (stryCov_9fa48("1623"), false);
        let index = 0;
        do {
          if (stryMutAct_9fa48("1625")) {
            {}
          } else {
            stryCov_9fa48("1625");
            /* eslint-disable no-await-in-loop */
            const pids = await db.getSortedSetRevRange(stryMutAct_9fa48("1626") ? `` : (stryCov_9fa48("1626"), `tid:${tid}:posts`), index, index);
            if (stryMutAct_9fa48("1629") ? false : stryMutAct_9fa48("1628") ? true : stryMutAct_9fa48("1627") ? pids.length : (stryCov_9fa48("1627", "1628", "1629"), !pids.length)) {
              if (stryMutAct_9fa48("1630")) {
                {}
              } else {
                stryCov_9fa48("1630");
                return null;
              }
            }
            isDeleted = await posts.getPostField(pids[0], stryMutAct_9fa48("1631") ? "" : (stryCov_9fa48("1631"), 'deleted'));
            if (stryMutAct_9fa48("1634") ? false : stryMutAct_9fa48("1633") ? true : stryMutAct_9fa48("1632") ? isDeleted : (stryCov_9fa48("1632", "1633", "1634"), !isDeleted)) {
              if (stryMutAct_9fa48("1635")) {
                {}
              } else {
                stryCov_9fa48("1635");
                return parseInt(pids[0], 10);
              }
            }
            stryMutAct_9fa48("1636") ? index -= 1 : (stryCov_9fa48("1636"), index += 1);
          }
        } while (stryMutAct_9fa48("1624") ? false : (stryCov_9fa48("1624"), isDeleted));
      }
    };
    Topics.addPostToTopic = async function (tid, postData) {
      if (stryMutAct_9fa48("1637")) {
        {}
      } else {
        stryCov_9fa48("1637");
        const mainPid = await Topics.getTopicField(tid, stryMutAct_9fa48("1638") ? "" : (stryCov_9fa48("1638"), 'mainPid'));
        if (stryMutAct_9fa48("1641") ? false : stryMutAct_9fa48("1640") ? true : stryMutAct_9fa48("1639") ? parseInt(mainPid, 10) : (stryCov_9fa48("1639", "1640", "1641"), !parseInt(mainPid, 10))) {
          if (stryMutAct_9fa48("1642")) {
            {}
          } else {
            stryCov_9fa48("1642");
            await Topics.setTopicField(tid, stryMutAct_9fa48("1643") ? "" : (stryCov_9fa48("1643"), 'mainPid'), postData.pid);
          }
        } else {
          if (stryMutAct_9fa48("1644")) {
            {}
          } else {
            stryCov_9fa48("1644");
            const upvotes = stryMutAct_9fa48("1647") ? parseInt(postData.upvotes, 10) && 0 : stryMutAct_9fa48("1646") ? false : stryMutAct_9fa48("1645") ? true : (stryCov_9fa48("1645", "1646", "1647"), parseInt(postData.upvotes, 10) || 0);
            const downvotes = stryMutAct_9fa48("1650") ? parseInt(postData.downvotes, 10) && 0 : stryMutAct_9fa48("1649") ? false : stryMutAct_9fa48("1648") ? true : (stryCov_9fa48("1648", "1649", "1650"), parseInt(postData.downvotes, 10) || 0);
            const votes = stryMutAct_9fa48("1651") ? upvotes + downvotes : (stryCov_9fa48("1651"), upvotes - downvotes);
            await db.sortedSetsAdd(stryMutAct_9fa48("1652") ? [] : (stryCov_9fa48("1652"), [stryMutAct_9fa48("1653") ? `` : (stryCov_9fa48("1653"), `tid:${tid}:posts`), stryMutAct_9fa48("1654") ? `` : (stryCov_9fa48("1654"), `tid:${tid}:posts:votes`)]), stryMutAct_9fa48("1655") ? [] : (stryCov_9fa48("1655"), [postData.timestamp, votes]), postData.pid);
          }
        }
        await Topics.increasePostCount(tid);
        await db.sortedSetIncrBy(stryMutAct_9fa48("1656") ? `` : (stryCov_9fa48("1656"), `tid:${tid}:posters`), 1, postData.uid);
        const posterCount = await db.sortedSetCard(stryMutAct_9fa48("1657") ? `` : (stryCov_9fa48("1657"), `tid:${tid}:posters`));
        await Topics.setTopicField(tid, stryMutAct_9fa48("1658") ? "" : (stryCov_9fa48("1658"), 'postercount'), posterCount);
        await Topics.updateTeaser(tid);
      }
    };
    Topics.removePostFromTopic = async function (tid, postData) {
      if (stryMutAct_9fa48("1659")) {
        {}
      } else {
        stryCov_9fa48("1659");
        await db.sortedSetsRemove(stryMutAct_9fa48("1660") ? [] : (stryCov_9fa48("1660"), [stryMutAct_9fa48("1661") ? `` : (stryCov_9fa48("1661"), `tid:${tid}:posts`), stryMutAct_9fa48("1662") ? `` : (stryCov_9fa48("1662"), `tid:${tid}:posts:votes`)]), postData.pid);
        await Topics.decreasePostCount(tid);
        await db.sortedSetIncrBy(stryMutAct_9fa48("1663") ? `` : (stryCov_9fa48("1663"), `tid:${tid}:posters`), stryMutAct_9fa48("1664") ? +1 : (stryCov_9fa48("1664"), -1), postData.uid);
        await db.sortedSetsRemoveRangeByScore(stryMutAct_9fa48("1665") ? [] : (stryCov_9fa48("1665"), [stryMutAct_9fa48("1666") ? `` : (stryCov_9fa48("1666"), `tid:${tid}:posters`)]), stryMutAct_9fa48("1667") ? "" : (stryCov_9fa48("1667"), '-inf'), 0);
        const posterCount = await db.sortedSetCard(stryMutAct_9fa48("1668") ? `` : (stryCov_9fa48("1668"), `tid:${tid}:posters`));
        await Topics.setTopicField(tid, stryMutAct_9fa48("1669") ? "" : (stryCov_9fa48("1669"), 'postercount'), posterCount);
        await Topics.updateTeaser(tid);
      }
    };
    Topics.getPids = async function (tid) {
      if (stryMutAct_9fa48("1670")) {
        {}
      } else {
        stryCov_9fa48("1670");
        let [mainPid, pids] = await Promise.all(stryMutAct_9fa48("1671") ? [] : (stryCov_9fa48("1671"), [Topics.getTopicField(tid, stryMutAct_9fa48("1672") ? "" : (stryCov_9fa48("1672"), 'mainPid')), db.getSortedSetRange(stryMutAct_9fa48("1673") ? `` : (stryCov_9fa48("1673"), `tid:${tid}:posts`), 0, stryMutAct_9fa48("1674") ? +1 : (stryCov_9fa48("1674"), -1))]));
        if (stryMutAct_9fa48("1676") ? false : stryMutAct_9fa48("1675") ? true : (stryCov_9fa48("1675", "1676"), parseInt(mainPid, 10))) {
          if (stryMutAct_9fa48("1677")) {
            {}
          } else {
            stryCov_9fa48("1677");
            pids = (stryMutAct_9fa48("1678") ? [] : (stryCov_9fa48("1678"), [mainPid])).concat(pids);
          }
        }
        return pids;
      }
    };
    Topics.increasePostCount = async function (tid) {
      if (stryMutAct_9fa48("1679")) {
        {}
      } else {
        stryCov_9fa48("1679");
        incrementFieldAndUpdateSortedSet(tid, stryMutAct_9fa48("1680") ? "" : (stryCov_9fa48("1680"), 'postcount'), 1, stryMutAct_9fa48("1681") ? "" : (stryCov_9fa48("1681"), 'topics:posts'));
      }
    };
    Topics.decreasePostCount = async function (tid) {
      if (stryMutAct_9fa48("1682")) {
        {}
      } else {
        stryCov_9fa48("1682");
        incrementFieldAndUpdateSortedSet(tid, stryMutAct_9fa48("1683") ? "" : (stryCov_9fa48("1683"), 'postcount'), stryMutAct_9fa48("1684") ? +1 : (stryCov_9fa48("1684"), -1), stryMutAct_9fa48("1685") ? "" : (stryCov_9fa48("1685"), 'topics:posts'));
      }
    };
    Topics.increaseViewCount = async function (tid) {
      if (stryMutAct_9fa48("1686")) {
        {}
      } else {
        stryCov_9fa48("1686");
        const cid = await Topics.getTopicField(tid, stryMutAct_9fa48("1687") ? "" : (stryCov_9fa48("1687"), 'cid'));
        incrementFieldAndUpdateSortedSet(tid, stryMutAct_9fa48("1688") ? "" : (stryCov_9fa48("1688"), 'viewcount'), 1, stryMutAct_9fa48("1689") ? [] : (stryCov_9fa48("1689"), [stryMutAct_9fa48("1690") ? "" : (stryCov_9fa48("1690"), 'topics:views'), stryMutAct_9fa48("1691") ? `` : (stryCov_9fa48("1691"), `cid:${cid}:tids:views`)]));
      }
    };
    async function incrementFieldAndUpdateSortedSet(tid, field, by, set) {
      if (stryMutAct_9fa48("1692")) {
        {}
      } else {
        stryCov_9fa48("1692");
        const value = await db.incrObjectFieldBy(stryMutAct_9fa48("1693") ? `` : (stryCov_9fa48("1693"), `topic:${tid}`), field, by);
        await db[Array.isArray(set) ? stryMutAct_9fa48("1694") ? "" : (stryCov_9fa48("1694"), 'sortedSetsAdd') : stryMutAct_9fa48("1695") ? "" : (stryCov_9fa48("1695"), 'sortedSetAdd')](set, value, tid);
      }
    }
    Topics.getTitleByPid = async function (pid) {
      if (stryMutAct_9fa48("1696")) {
        {}
      } else {
        stryCov_9fa48("1696");
        return await Topics.getTopicFieldByPid(stryMutAct_9fa48("1697") ? "" : (stryCov_9fa48("1697"), 'title'), pid);
      }
    };
    Topics.getTopicFieldByPid = async function (field, pid) {
      if (stryMutAct_9fa48("1698")) {
        {}
      } else {
        stryCov_9fa48("1698");
        const tid = await posts.getPostField(pid, stryMutAct_9fa48("1699") ? "" : (stryCov_9fa48("1699"), 'tid'));
        return await Topics.getTopicField(tid, field);
      }
    };
    Topics.getTopicDataByPid = async function (pid) {
      if (stryMutAct_9fa48("1700")) {
        {}
      } else {
        stryCov_9fa48("1700");
        const tid = await posts.getPostField(pid, stryMutAct_9fa48("1701") ? "" : (stryCov_9fa48("1701"), 'tid'));
        return await Topics.getTopicData(tid);
      }
    };
    Topics.getPostCount = async function (tid) {
      if (stryMutAct_9fa48("1702")) {
        {}
      } else {
        stryCov_9fa48("1702");
        return await db.getObjectField(stryMutAct_9fa48("1703") ? `` : (stryCov_9fa48("1703"), `topic:${tid}`), stryMutAct_9fa48("1704") ? "" : (stryCov_9fa48("1704"), 'postcount'));
      }
    };
    async function getPostReplies(pids, callerUid) {
      if (stryMutAct_9fa48("1705")) {
        {}
      } else {
        stryCov_9fa48("1705");
        const keys = pids.map(stryMutAct_9fa48("1706") ? () => undefined : (stryCov_9fa48("1706"), pid => stryMutAct_9fa48("1707") ? `` : (stryCov_9fa48("1707"), `pid:${pid}:replies`)));
        const arrayOfReplyPids = await db.getSortedSetsMembers(keys);
        const uniquePids = _.uniq(_.flatten(arrayOfReplyPids));
        let replyData = await posts.getPostsFields(uniquePids, stryMutAct_9fa48("1708") ? [] : (stryCov_9fa48("1708"), [stryMutAct_9fa48("1709") ? "" : (stryCov_9fa48("1709"), 'pid'), stryMutAct_9fa48("1710") ? "" : (stryCov_9fa48("1710"), 'uid'), stryMutAct_9fa48("1711") ? "" : (stryCov_9fa48("1711"), 'timestamp')]));
        const result = await plugins.hooks.fire(stryMutAct_9fa48("1712") ? "" : (stryCov_9fa48("1712"), 'filter:topics.getPostReplies'), stryMutAct_9fa48("1713") ? {} : (stryCov_9fa48("1713"), {
          uid: callerUid,
          replies: replyData
        }));
        replyData = await (stryMutAct_9fa48("1714") ? user.blocks : (stryCov_9fa48("1714"), user.blocks.filter(callerUid, result.replies)));
        const uids = replyData.map(stryMutAct_9fa48("1715") ? () => undefined : (stryCov_9fa48("1715"), replyData => stryMutAct_9fa48("1718") ? replyData || replyData.uid : stryMutAct_9fa48("1717") ? false : stryMutAct_9fa48("1716") ? true : (stryCov_9fa48("1716", "1717", "1718"), replyData && replyData.uid)));
        const uniqueUids = _.uniq(uids);
        const userData = await user.getUsersWithFields(uniqueUids, stryMutAct_9fa48("1719") ? [] : (stryCov_9fa48("1719"), [stryMutAct_9fa48("1720") ? "" : (stryCov_9fa48("1720"), 'uid'), stryMutAct_9fa48("1721") ? "" : (stryCov_9fa48("1721"), 'username'), stryMutAct_9fa48("1722") ? "" : (stryCov_9fa48("1722"), 'userslug'), stryMutAct_9fa48("1723") ? "" : (stryCov_9fa48("1723"), 'picture')]), callerUid);
        const uidMap = _.zipObject(uniqueUids, userData);
        const pidMap = _.zipObject(replyData.map(stryMutAct_9fa48("1724") ? () => undefined : (stryCov_9fa48("1724"), r => r.pid)), replyData);
        const returnData = arrayOfReplyPids.map(replyPids => {
          if (stryMutAct_9fa48("1725")) {
            {}
          } else {
            stryCov_9fa48("1725");
            replyPids = stryMutAct_9fa48("1726") ? replyPids : (stryCov_9fa48("1726"), replyPids.filter(stryMutAct_9fa48("1727") ? () => undefined : (stryCov_9fa48("1727"), pid => pidMap[pid])));
            const uidsUsed = {};
            const currentData = stryMutAct_9fa48("1728") ? {} : (stryCov_9fa48("1728"), {
              hasMore: stryMutAct_9fa48("1729") ? true : (stryCov_9fa48("1729"), false),
              users: stryMutAct_9fa48("1730") ? ["Stryker was here"] : (stryCov_9fa48("1730"), []),
              text: (stryMutAct_9fa48("1734") ? replyPids.length <= 1 : stryMutAct_9fa48("1733") ? replyPids.length >= 1 : stryMutAct_9fa48("1732") ? false : stryMutAct_9fa48("1731") ? true : (stryCov_9fa48("1731", "1732", "1733", "1734"), replyPids.length > 1)) ? stryMutAct_9fa48("1735") ? `` : (stryCov_9fa48("1735"), `[[topic:replies_to_this_post, ${replyPids.length}]]`) : stryMutAct_9fa48("1736") ? "" : (stryCov_9fa48("1736"), '[[topic:one_reply_to_this_post]]'),
              count: replyPids.length,
              timestampISO: replyPids.length ? utils.toISOString(pidMap[replyPids[0]].timestamp) : undefined
            });
            stryMutAct_9fa48("1737") ? replyPids : (stryCov_9fa48("1737"), replyPids.sort(stryMutAct_9fa48("1738") ? () => undefined : (stryCov_9fa48("1738"), (a, b) => stryMutAct_9fa48("1739") ? parseInt(a, 10) + parseInt(b, 10) : (stryCov_9fa48("1739"), parseInt(a, 10) - parseInt(b, 10)))));
            replyPids.forEach(replyPid => {
              if (stryMutAct_9fa48("1740")) {
                {}
              } else {
                stryCov_9fa48("1740");
                const replyData = pidMap[replyPid];
                if (stryMutAct_9fa48("1743") ? !uidsUsed[replyData.uid] || currentData.users.length < 6 : stryMutAct_9fa48("1742") ? false : stryMutAct_9fa48("1741") ? true : (stryCov_9fa48("1741", "1742", "1743"), (stryMutAct_9fa48("1744") ? uidsUsed[replyData.uid] : (stryCov_9fa48("1744"), !uidsUsed[replyData.uid])) && (stryMutAct_9fa48("1747") ? currentData.users.length >= 6 : stryMutAct_9fa48("1746") ? currentData.users.length <= 6 : stryMutAct_9fa48("1745") ? true : (stryCov_9fa48("1745", "1746", "1747"), currentData.users.length < 6)))) {
                  if (stryMutAct_9fa48("1748")) {
                    {}
                  } else {
                    stryCov_9fa48("1748");
                    currentData.users.push(uidMap[replyData.uid]);
                    uidsUsed[replyData.uid] = stryMutAct_9fa48("1749") ? false : (stryCov_9fa48("1749"), true);
                  }
                }
              }
            });
            if (stryMutAct_9fa48("1753") ? currentData.users.length <= 5 : stryMutAct_9fa48("1752") ? currentData.users.length >= 5 : stryMutAct_9fa48("1751") ? false : stryMutAct_9fa48("1750") ? true : (stryCov_9fa48("1750", "1751", "1752", "1753"), currentData.users.length > 5)) {
              if (stryMutAct_9fa48("1754")) {
                {}
              } else {
                stryCov_9fa48("1754");
                currentData.users.pop();
                currentData.hasMore = stryMutAct_9fa48("1755") ? false : (stryCov_9fa48("1755"), true);
              }
            }
            return currentData;
          }
        });
        return returnData;
      }
    }
    Topics.syncBacklinks = async postData => {
      if (stryMutAct_9fa48("1756")) {
        {}
      } else {
        stryCov_9fa48("1756");
        if (stryMutAct_9fa48("1759") ? false : stryMutAct_9fa48("1758") ? true : stryMutAct_9fa48("1757") ? postData : (stryCov_9fa48("1757", "1758", "1759"), !postData)) {
          if (stryMutAct_9fa48("1760")) {
            {}
          } else {
            stryCov_9fa48("1760");
            throw new Error(stryMutAct_9fa48("1761") ? "" : (stryCov_9fa48("1761"), '[[error:invalid-data]]'));
          }
        }

        // Scan post content for topic links
        const matches = stryMutAct_9fa48("1762") ? [] : (stryCov_9fa48("1762"), [...postData.content.matchAll(backlinkRegex)]);
        if (stryMutAct_9fa48("1765") ? false : stryMutAct_9fa48("1764") ? true : stryMutAct_9fa48("1763") ? matches : (stryCov_9fa48("1763", "1764", "1765"), !matches)) {
          if (stryMutAct_9fa48("1766")) {
            {}
          } else {
            stryCov_9fa48("1766");
            return 0;
          }
        }
        const {
          pid,
          uid,
          tid
        } = postData;
        let add = _.uniq(matches.map(stryMutAct_9fa48("1767") ? () => undefined : (stryCov_9fa48("1767"), match => match[1])).map(stryMutAct_9fa48("1768") ? () => undefined : (stryCov_9fa48("1768"), tid => parseInt(tid, 10))));
        const now = Date.now();
        const topicsExist = await Topics.exists(add);
        const current = (await db.getSortedSetMembers(stryMutAct_9fa48("1769") ? `` : (stryCov_9fa48("1769"), `pid:${pid}:backlinks`))).map(stryMutAct_9fa48("1770") ? () => undefined : (stryCov_9fa48("1770"), tid => parseInt(tid, 10)));
        const remove = stryMutAct_9fa48("1771") ? current : (stryCov_9fa48("1771"), current.filter(stryMutAct_9fa48("1772") ? () => undefined : (stryCov_9fa48("1772"), tid => stryMutAct_9fa48("1773") ? add.includes(tid) : (stryCov_9fa48("1773"), !add.includes(tid)))));
        add = stryMutAct_9fa48("1774") ? add : (stryCov_9fa48("1774"), add.filter(stryMutAct_9fa48("1775") ? () => undefined : (stryCov_9fa48("1775"), (_tid, idx) => stryMutAct_9fa48("1778") ? topicsExist[idx] && !current.includes(_tid) || tid !== _tid : stryMutAct_9fa48("1777") ? false : stryMutAct_9fa48("1776") ? true : (stryCov_9fa48("1776", "1777", "1778"), (stryMutAct_9fa48("1780") ? topicsExist[idx] || !current.includes(_tid) : stryMutAct_9fa48("1779") ? true : (stryCov_9fa48("1779", "1780"), topicsExist[idx] && (stryMutAct_9fa48("1781") ? current.includes(_tid) : (stryCov_9fa48("1781"), !current.includes(_tid))))) && (stryMutAct_9fa48("1783") ? tid === _tid : stryMutAct_9fa48("1782") ? true : (stryCov_9fa48("1782", "1783"), tid !== _tid))))));

        // Remove old backlinks
        await db.sortedSetRemove(stryMutAct_9fa48("1784") ? `` : (stryCov_9fa48("1784"), `pid:${pid}:backlinks`), remove);

        // Add new backlinks
        await db.sortedSetAdd(stryMutAct_9fa48("1785") ? `` : (stryCov_9fa48("1785"), `pid:${pid}:backlinks`), add.map(stryMutAct_9fa48("1786") ? () => undefined : (stryCov_9fa48("1786"), () => now)), add);
        await Promise.all(add.map(async tid => {
          if (stryMutAct_9fa48("1787")) {
            {}
          } else {
            stryCov_9fa48("1787");
            await Topics.events.log(tid, stryMutAct_9fa48("1788") ? {} : (stryCov_9fa48("1788"), {
              uid,
              type: stryMutAct_9fa48("1789") ? "" : (stryCov_9fa48("1789"), 'backlink'),
              href: stryMutAct_9fa48("1790") ? `` : (stryCov_9fa48("1790"), `/post/${pid}`)
            }));
          }
        }));
        return stryMutAct_9fa48("1791") ? add.length - (current - remove) : (stryCov_9fa48("1791"), add.length + (stryMutAct_9fa48("1792") ? current + remove : (stryCov_9fa48("1792"), current - remove)));
      }
    };
  }
};