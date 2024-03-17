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
const user = require('../user');
const privileges = require('../privileges');
const search = require('../search');
module.exports = function (Topics) {
  if (stryMutAct_9fa48("2213")) {
    {}
  } else {
    stryCov_9fa48("2213");
    Topics.getSuggestedTopics = async function (tid, uid, start, stop, cutoff = 0) {
      if (stryMutAct_9fa48("2214")) {
        {}
      } else {
        stryCov_9fa48("2214");
        let tids;
        tid = parseInt(tid, 10);
        cutoff = (stryMutAct_9fa48("2217") ? cutoff !== 0 : stryMutAct_9fa48("2216") ? false : stryMutAct_9fa48("2215") ? true : (stryCov_9fa48("2215", "2216", "2217"), cutoff === 0)) ? cutoff : stryMutAct_9fa48("2218") ? cutoff / 2592000000 : (stryCov_9fa48("2218"), cutoff * 2592000000);
        const [tagTids, searchTids] = await Promise.all(stryMutAct_9fa48("2219") ? [] : (stryCov_9fa48("2219"), [getTidsWithSameTags(tid, cutoff), getSearchTids(tid, uid, cutoff)]));
        tids = _.uniq(tagTids.concat(searchTids));
        let categoryTids = stryMutAct_9fa48("2220") ? ["Stryker was here"] : (stryCov_9fa48("2220"), []);
        if (stryMutAct_9fa48("2223") ? stop !== -1 || tids.length < stop - start + 1 : stryMutAct_9fa48("2222") ? false : stryMutAct_9fa48("2221") ? true : (stryCov_9fa48("2221", "2222", "2223"), (stryMutAct_9fa48("2225") ? stop === -1 : stryMutAct_9fa48("2224") ? true : (stryCov_9fa48("2224", "2225"), stop !== (stryMutAct_9fa48("2226") ? +1 : (stryCov_9fa48("2226"), -1)))) && (stryMutAct_9fa48("2229") ? tids.length >= stop - start + 1 : stryMutAct_9fa48("2228") ? tids.length <= stop - start + 1 : stryMutAct_9fa48("2227") ? true : (stryCov_9fa48("2227", "2228", "2229"), tids.length < (stryMutAct_9fa48("2230") ? stop - start - 1 : (stryCov_9fa48("2230"), (stryMutAct_9fa48("2231") ? stop + start : (stryCov_9fa48("2231"), stop - start)) + 1)))))) {
          if (stryMutAct_9fa48("2232")) {
            {}
          } else {
            stryCov_9fa48("2232");
            categoryTids = await getCategoryTids(tid, cutoff);
          }
        }
        tids = _.shuffle(_.uniq(tids.concat(categoryTids)));
        tids = await privileges.topics.filterTids(stryMutAct_9fa48("2233") ? "" : (stryCov_9fa48("2233"), 'topics:read'), tids, uid);
        let topicData = await Topics.getTopicsByTids(tids, uid);
        topicData = stryMutAct_9fa48("2234") ? topicData : (stryCov_9fa48("2234"), topicData.filter(stryMutAct_9fa48("2235") ? () => undefined : (stryCov_9fa48("2235"), topic => stryMutAct_9fa48("2238") ? topic || topic.tid !== tid : stryMutAct_9fa48("2237") ? false : stryMutAct_9fa48("2236") ? true : (stryCov_9fa48("2236", "2237", "2238"), topic && (stryMutAct_9fa48("2240") ? topic.tid === tid : stryMutAct_9fa48("2239") ? true : (stryCov_9fa48("2239", "2240"), topic.tid !== tid))))));
        topicData = await (stryMutAct_9fa48("2241") ? user.blocks : (stryCov_9fa48("2241"), user.blocks.filter(uid, topicData)));
        topicData = stryMutAct_9fa48("2243") ? topicData.sort((t1, t2) => t2.timestamp - t1.timestamp) : stryMutAct_9fa48("2242") ? topicData.slice(start, stop !== -1 ? stop + 1 : undefined) : (stryCov_9fa48("2242", "2243"), topicData.slice(start, (stryMutAct_9fa48("2246") ? stop === -1 : stryMutAct_9fa48("2245") ? false : stryMutAct_9fa48("2244") ? true : (stryCov_9fa48("2244", "2245", "2246"), stop !== (stryMutAct_9fa48("2247") ? +1 : (stryCov_9fa48("2247"), -1)))) ? stryMutAct_9fa48("2248") ? stop - 1 : (stryCov_9fa48("2248"), stop + 1) : undefined).sort(stryMutAct_9fa48("2249") ? () => undefined : (stryCov_9fa48("2249"), (t1, t2) => stryMutAct_9fa48("2250") ? t2.timestamp + t1.timestamp : (stryCov_9fa48("2250"), t2.timestamp - t1.timestamp))));
        return topicData;
      }
    };
    async function getTidsWithSameTags(tid, cutoff) {
      if (stryMutAct_9fa48("2251")) {
        {}
      } else {
        stryCov_9fa48("2251");
        const tags = await Topics.getTopicTags(tid);
        let tids = (stryMutAct_9fa48("2254") ? cutoff !== 0 : stryMutAct_9fa48("2253") ? false : stryMutAct_9fa48("2252") ? true : (stryCov_9fa48("2252", "2253", "2254"), cutoff === 0)) ? await db.getSortedSetRevRange(tags.map(stryMutAct_9fa48("2255") ? () => undefined : (stryCov_9fa48("2255"), tag => stryMutAct_9fa48("2256") ? `` : (stryCov_9fa48("2256"), `tag:${tag}:topics`))), 0, stryMutAct_9fa48("2257") ? +1 : (stryCov_9fa48("2257"), -1)) : await db.getSortedSetRevRangeByScore(tags.map(stryMutAct_9fa48("2258") ? () => undefined : (stryCov_9fa48("2258"), tag => stryMutAct_9fa48("2259") ? `` : (stryCov_9fa48("2259"), `tag:${tag}:topics`))), 0, stryMutAct_9fa48("2260") ? +1 : (stryCov_9fa48("2260"), -1), stryMutAct_9fa48("2261") ? "" : (stryCov_9fa48("2261"), '+inf'), stryMutAct_9fa48("2262") ? Date.now() + cutoff : (stryCov_9fa48("2262"), Date.now() - cutoff));
        tids = stryMutAct_9fa48("2263") ? tids : (stryCov_9fa48("2263"), tids.filter(stryMutAct_9fa48("2264") ? () => undefined : (stryCov_9fa48("2264"), _tid => stryMutAct_9fa48("2267") ? _tid === tid : stryMutAct_9fa48("2266") ? false : stryMutAct_9fa48("2265") ? true : (stryCov_9fa48("2265", "2266", "2267"), _tid !== tid)))); // remove self
        return stryMutAct_9fa48("2268") ? _.shuffle(_.uniq(tids)).map(Number) : (stryCov_9fa48("2268"), _.shuffle(_.uniq(tids)).slice(0, 10).map(Number));
      }
    }
    async function getSearchTids(tid, uid, cutoff) {
      if (stryMutAct_9fa48("2269")) {
        {}
      } else {
        stryCov_9fa48("2269");
        const topicData = await Topics.getTopicFields(tid, stryMutAct_9fa48("2270") ? [] : (stryCov_9fa48("2270"), [stryMutAct_9fa48("2271") ? "" : (stryCov_9fa48("2271"), 'title'), stryMutAct_9fa48("2272") ? "" : (stryCov_9fa48("2272"), 'cid')]));
        const data = await search.search(stryMutAct_9fa48("2273") ? {} : (stryCov_9fa48("2273"), {
          query: topicData.title,
          searchIn: stryMutAct_9fa48("2274") ? "" : (stryCov_9fa48("2274"), 'titles'),
          matchWords: stryMutAct_9fa48("2275") ? "" : (stryCov_9fa48("2275"), 'any'),
          categories: stryMutAct_9fa48("2276") ? [] : (stryCov_9fa48("2276"), [topicData.cid]),
          uid: uid,
          returnIds: stryMutAct_9fa48("2277") ? false : (stryCov_9fa48("2277"), true),
          timeRange: (stryMutAct_9fa48("2280") ? cutoff === 0 : stryMutAct_9fa48("2279") ? false : stryMutAct_9fa48("2278") ? true : (stryCov_9fa48("2278", "2279", "2280"), cutoff !== 0)) ? stryMutAct_9fa48("2281") ? cutoff * 1000 : (stryCov_9fa48("2281"), cutoff / 1000) : 0,
          timeFilter: stryMutAct_9fa48("2282") ? "" : (stryCov_9fa48("2282"), 'newer')
        }));
        data.tids = stryMutAct_9fa48("2283") ? data.tids : (stryCov_9fa48("2283"), data.tids.filter(stryMutAct_9fa48("2284") ? () => undefined : (stryCov_9fa48("2284"), _tid => stryMutAct_9fa48("2287") ? _tid === tid : stryMutAct_9fa48("2286") ? false : stryMutAct_9fa48("2285") ? true : (stryCov_9fa48("2285", "2286", "2287"), _tid !== tid)))); // remove self
        return stryMutAct_9fa48("2288") ? _.shuffle(data.tids).map(Number) : (stryCov_9fa48("2288"), _.shuffle(data.tids).slice(0, 10).map(Number));
      }
    }
    async function getCategoryTids(tid, cutoff) {
      if (stryMutAct_9fa48("2289")) {
        {}
      } else {
        stryCov_9fa48("2289");
        const cid = await Topics.getTopicField(tid, stryMutAct_9fa48("2290") ? "" : (stryCov_9fa48("2290"), 'cid'));
        const tids = (stryMutAct_9fa48("2293") ? cutoff !== 0 : stryMutAct_9fa48("2292") ? false : stryMutAct_9fa48("2291") ? true : (stryCov_9fa48("2291", "2292", "2293"), cutoff === 0)) ? await db.getSortedSetRevRange(stryMutAct_9fa48("2294") ? `` : (stryCov_9fa48("2294"), `cid:${cid}:tids:lastposttime`), 0, 9) : await db.getSortedSetRevRangeByScore(stryMutAct_9fa48("2295") ? `` : (stryCov_9fa48("2295"), `cid:${cid}:tids:lastposttime`), 0, 9, stryMutAct_9fa48("2296") ? "" : (stryCov_9fa48("2296"), '+inf'), stryMutAct_9fa48("2297") ? Date.now() + cutoff : (stryCov_9fa48("2297"), Date.now() - cutoff));
        return _.shuffle(stryMutAct_9fa48("2298") ? tids.map(Number) : (stryCov_9fa48("2298"), tids.map(Number).filter(stryMutAct_9fa48("2299") ? () => undefined : (stryCov_9fa48("2299"), _tid => stryMutAct_9fa48("2302") ? _tid === tid : stryMutAct_9fa48("2301") ? false : stryMutAct_9fa48("2300") ? true : (stryCov_9fa48("2300", "2301", "2302"), _tid !== tid)))));
      }
    }
  }
};