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
const validator = require('validator');
const _ = require('lodash');
const db = require('../database');
const meta = require('../meta');
const user = require('../user');
const categories = require('../categories');
const plugins = require('../plugins');
const utils = require('../utils');
const batch = require('../batch');
const cache = require('../cache');
module.exports = function (Topics) {
  if (stryMutAct_9fa48("2303")) {
    {}
  } else {
    stryCov_9fa48("2303");
    Topics.createTags = async function (tags, tid, timestamp) {
      if (stryMutAct_9fa48("2304")) {
        {}
      } else {
        stryCov_9fa48("2304");
        if (stryMutAct_9fa48("2307") ? !Array.isArray(tags) && !tags.length : stryMutAct_9fa48("2306") ? false : stryMutAct_9fa48("2305") ? true : (stryCov_9fa48("2305", "2306", "2307"), (stryMutAct_9fa48("2308") ? Array.isArray(tags) : (stryCov_9fa48("2308"), !Array.isArray(tags))) || (stryMutAct_9fa48("2309") ? tags.length : (stryCov_9fa48("2309"), !tags.length)))) {
          if (stryMutAct_9fa48("2310")) {
            {}
          } else {
            stryCov_9fa48("2310");
            return;
          }
        }
        const cid = await Topics.getTopicField(tid, stryMutAct_9fa48("2311") ? "" : (stryCov_9fa48("2311"), 'cid'));
        const topicSets = tags.map(stryMutAct_9fa48("2312") ? () => undefined : (stryCov_9fa48("2312"), tag => stryMutAct_9fa48("2313") ? `` : (stryCov_9fa48("2313"), `tag:${tag}:topics`))).concat(tags.map(stryMutAct_9fa48("2314") ? () => undefined : (stryCov_9fa48("2314"), tag => stryMutAct_9fa48("2315") ? `` : (stryCov_9fa48("2315"), `cid:${cid}:tag:${tag}:topics`))));
        await db.sortedSetsAdd(topicSets, timestamp, tid);
        await Topics.updateCategoryTagsCount(stryMutAct_9fa48("2316") ? [] : (stryCov_9fa48("2316"), [cid]), tags);
        await Promise.all(tags.map(updateTagCount));
      }
    };
    Topics.filterTags = async function (tags, cid) {
      if (stryMutAct_9fa48("2317")) {
        {}
      } else {
        stryCov_9fa48("2317");
        const result = await plugins.hooks.fire(stryMutAct_9fa48("2318") ? "" : (stryCov_9fa48("2318"), 'filter:tags.filter'), stryMutAct_9fa48("2319") ? {} : (stryCov_9fa48("2319"), {
          tags: tags,
          cid: cid
        }));
        tags = stryMutAct_9fa48("2320") ? _.uniq(result.tags).map(tag => utils.cleanUpTag(tag, meta.config.maximumTagLength)) : (stryCov_9fa48("2320"), _.uniq(result.tags).map(stryMutAct_9fa48("2321") ? () => undefined : (stryCov_9fa48("2321"), tag => utils.cleanUpTag(tag, meta.config.maximumTagLength))).filter(stryMutAct_9fa48("2322") ? () => undefined : (stryCov_9fa48("2322"), tag => stryMutAct_9fa48("2325") ? tag || tag.length >= (meta.config.minimumTagLength || 3) : stryMutAct_9fa48("2324") ? false : stryMutAct_9fa48("2323") ? true : (stryCov_9fa48("2323", "2324", "2325"), tag && (stryMutAct_9fa48("2328") ? tag.length < (meta.config.minimumTagLength || 3) : stryMutAct_9fa48("2327") ? tag.length > (meta.config.minimumTagLength || 3) : stryMutAct_9fa48("2326") ? true : (stryCov_9fa48("2326", "2327", "2328"), tag.length >= (stryMutAct_9fa48("2331") ? meta.config.minimumTagLength && 3 : stryMutAct_9fa48("2330") ? false : stryMutAct_9fa48("2329") ? true : (stryCov_9fa48("2329", "2330", "2331"), meta.config.minimumTagLength || 3))))))));
        return await filterCategoryTags(tags, cid);
      }
    };
    Topics.updateCategoryTagsCount = async function (cids, tags) {
      if (stryMutAct_9fa48("2332")) {
        {}
      } else {
        stryCov_9fa48("2332");
        await Promise.all(cids.map(async cid => {
          if (stryMutAct_9fa48("2333")) {
            {}
          } else {
            stryCov_9fa48("2333");
            const counts = await db.sortedSetsCard(tags.map(stryMutAct_9fa48("2334") ? () => undefined : (stryCov_9fa48("2334"), tag => stryMutAct_9fa48("2335") ? `` : (stryCov_9fa48("2335"), `cid:${cid}:tag:${tag}:topics`))));
            const tagToCount = _.zipObject(tags, counts);
            const set = stryMutAct_9fa48("2336") ? `` : (stryCov_9fa48("2336"), `cid:${cid}:tags`);
            const bulkAdd = stryMutAct_9fa48("2337") ? tags.map(tag => [set, tagToCount[tag], tag]) : (stryCov_9fa48("2337"), tags.filter(stryMutAct_9fa48("2338") ? () => undefined : (stryCov_9fa48("2338"), tag => stryMutAct_9fa48("2342") ? tagToCount[tag] <= 0 : stryMutAct_9fa48("2341") ? tagToCount[tag] >= 0 : stryMutAct_9fa48("2340") ? false : stryMutAct_9fa48("2339") ? true : (stryCov_9fa48("2339", "2340", "2341", "2342"), tagToCount[tag] > 0))).map(stryMutAct_9fa48("2343") ? () => undefined : (stryCov_9fa48("2343"), tag => stryMutAct_9fa48("2344") ? [] : (stryCov_9fa48("2344"), [set, tagToCount[tag], tag]))));
            const bulkRemove = stryMutAct_9fa48("2345") ? tags.map(tag => [set, tag]) : (stryCov_9fa48("2345"), tags.filter(stryMutAct_9fa48("2346") ? () => undefined : (stryCov_9fa48("2346"), tag => stryMutAct_9fa48("2350") ? tagToCount[tag] > 0 : stryMutAct_9fa48("2349") ? tagToCount[tag] < 0 : stryMutAct_9fa48("2348") ? false : stryMutAct_9fa48("2347") ? true : (stryCov_9fa48("2347", "2348", "2349", "2350"), tagToCount[tag] <= 0))).map(stryMutAct_9fa48("2351") ? () => undefined : (stryCov_9fa48("2351"), tag => stryMutAct_9fa48("2352") ? [] : (stryCov_9fa48("2352"), [set, tag]))));
            await Promise.all(stryMutAct_9fa48("2353") ? [] : (stryCov_9fa48("2353"), [db.sortedSetAddBulk(bulkAdd), db.sortedSetRemoveBulk(bulkRemove)]));
          }
        }));
        await db.sortedSetsRemoveRangeByScore(cids.map(stryMutAct_9fa48("2354") ? () => undefined : (stryCov_9fa48("2354"), cid => stryMutAct_9fa48("2355") ? `` : (stryCov_9fa48("2355"), `cid:${cid}:tags`))), stryMutAct_9fa48("2356") ? "" : (stryCov_9fa48("2356"), '-inf'), 0);
      }
    };
    Topics.validateTags = async function (tags, cid, uid, tid = null) {
      if (stryMutAct_9fa48("2357")) {
        {}
      } else {
        stryCov_9fa48("2357");
        if (stryMutAct_9fa48("2360") ? false : stryMutAct_9fa48("2359") ? true : stryMutAct_9fa48("2358") ? Array.isArray(tags) : (stryCov_9fa48("2358", "2359", "2360"), !Array.isArray(tags))) {
          if (stryMutAct_9fa48("2361")) {
            {}
          } else {
            stryCov_9fa48("2361");
            throw new Error(stryMutAct_9fa48("2362") ? "" : (stryCov_9fa48("2362"), '[[error:invalid-data]]'));
          }
        }
        tags = _.uniq(tags);
        const [categoryData, isPrivileged, currentTags] = await Promise.all(stryMutAct_9fa48("2363") ? [] : (stryCov_9fa48("2363"), [categories.getCategoryFields(cid, stryMutAct_9fa48("2364") ? [] : (stryCov_9fa48("2364"), [stryMutAct_9fa48("2365") ? "" : (stryCov_9fa48("2365"), 'minTags'), stryMutAct_9fa48("2366") ? "" : (stryCov_9fa48("2366"), 'maxTags')])), user.isPrivileged(uid), tid ? Topics.getTopicTags(tid) : stryMutAct_9fa48("2367") ? ["Stryker was here"] : (stryCov_9fa48("2367"), [])]));
        if (stryMutAct_9fa48("2371") ? tags.length >= parseInt(categoryData.minTags, 10) : stryMutAct_9fa48("2370") ? tags.length <= parseInt(categoryData.minTags, 10) : stryMutAct_9fa48("2369") ? false : stryMutAct_9fa48("2368") ? true : (stryCov_9fa48("2368", "2369", "2370", "2371"), tags.length < parseInt(categoryData.minTags, 10))) {
          if (stryMutAct_9fa48("2372")) {
            {}
          } else {
            stryCov_9fa48("2372");
            throw new Error(stryMutAct_9fa48("2373") ? `` : (stryCov_9fa48("2373"), `[[error:not-enough-tags, ${categoryData.minTags}]]`));
          }
        } else if (stryMutAct_9fa48("2377") ? tags.length <= parseInt(categoryData.maxTags, 10) : stryMutAct_9fa48("2376") ? tags.length >= parseInt(categoryData.maxTags, 10) : stryMutAct_9fa48("2375") ? false : stryMutAct_9fa48("2374") ? true : (stryCov_9fa48("2374", "2375", "2376", "2377"), tags.length > parseInt(categoryData.maxTags, 10))) {
          if (stryMutAct_9fa48("2378")) {
            {}
          } else {
            stryCov_9fa48("2378");
            throw new Error(stryMutAct_9fa48("2379") ? `` : (stryCov_9fa48("2379"), `[[error:too-many-tags, ${categoryData.maxTags}]]`));
          }
        }
        const addedTags = stryMutAct_9fa48("2380") ? tags : (stryCov_9fa48("2380"), tags.filter(stryMutAct_9fa48("2381") ? () => undefined : (stryCov_9fa48("2381"), tag => stryMutAct_9fa48("2382") ? currentTags.includes(tag) : (stryCov_9fa48("2382"), !currentTags.includes(tag)))));
        const removedTags = stryMutAct_9fa48("2383") ? currentTags : (stryCov_9fa48("2383"), currentTags.filter(stryMutAct_9fa48("2384") ? () => undefined : (stryCov_9fa48("2384"), tag => stryMutAct_9fa48("2385") ? tags.includes(tag) : (stryCov_9fa48("2385"), !tags.includes(tag)))));
        const systemTags = (stryMutAct_9fa48("2388") ? meta.config.systemTags && '' : stryMutAct_9fa48("2387") ? false : stryMutAct_9fa48("2386") ? true : (stryCov_9fa48("2386", "2387", "2388"), meta.config.systemTags || (stryMutAct_9fa48("2389") ? "Stryker was here!" : (stryCov_9fa48("2389"), '')))).split(stryMutAct_9fa48("2390") ? "" : (stryCov_9fa48("2390"), ','));
        if (stryMutAct_9fa48("2393") ? !isPrivileged && systemTags.length && addedTags.length || addedTags.some(tag => systemTags.includes(tag)) : stryMutAct_9fa48("2392") ? false : stryMutAct_9fa48("2391") ? true : (stryCov_9fa48("2391", "2392", "2393"), (stryMutAct_9fa48("2395") ? !isPrivileged && systemTags.length || addedTags.length : stryMutAct_9fa48("2394") ? true : (stryCov_9fa48("2394", "2395"), (stryMutAct_9fa48("2397") ? !isPrivileged || systemTags.length : stryMutAct_9fa48("2396") ? true : (stryCov_9fa48("2396", "2397"), (stryMutAct_9fa48("2398") ? isPrivileged : (stryCov_9fa48("2398"), !isPrivileged)) && systemTags.length)) && addedTags.length)) && (stryMutAct_9fa48("2399") ? addedTags.every(tag => systemTags.includes(tag)) : (stryCov_9fa48("2399"), addedTags.some(stryMutAct_9fa48("2400") ? () => undefined : (stryCov_9fa48("2400"), tag => systemTags.includes(tag))))))) {
          if (stryMutAct_9fa48("2401")) {
            {}
          } else {
            stryCov_9fa48("2401");
            throw new Error(stryMutAct_9fa48("2402") ? "" : (stryCov_9fa48("2402"), '[[error:cant-use-system-tag]]'));
          }
        }
        if (stryMutAct_9fa48("2405") ? !isPrivileged && systemTags.length && removedTags.length || removedTags.some(tag => systemTags.includes(tag)) : stryMutAct_9fa48("2404") ? false : stryMutAct_9fa48("2403") ? true : (stryCov_9fa48("2403", "2404", "2405"), (stryMutAct_9fa48("2407") ? !isPrivileged && systemTags.length || removedTags.length : stryMutAct_9fa48("2406") ? true : (stryCov_9fa48("2406", "2407"), (stryMutAct_9fa48("2409") ? !isPrivileged || systemTags.length : stryMutAct_9fa48("2408") ? true : (stryCov_9fa48("2408", "2409"), (stryMutAct_9fa48("2410") ? isPrivileged : (stryCov_9fa48("2410"), !isPrivileged)) && systemTags.length)) && removedTags.length)) && (stryMutAct_9fa48("2411") ? removedTags.every(tag => systemTags.includes(tag)) : (stryCov_9fa48("2411"), removedTags.some(stryMutAct_9fa48("2412") ? () => undefined : (stryCov_9fa48("2412"), tag => systemTags.includes(tag))))))) {
          if (stryMutAct_9fa48("2413")) {
            {}
          } else {
            stryCov_9fa48("2413");
            throw new Error(stryMutAct_9fa48("2414") ? "" : (stryCov_9fa48("2414"), '[[error:cant-remove-system-tag]]'));
          }
        }
      }
    };
    async function filterCategoryTags(tags, cid) {
      if (stryMutAct_9fa48("2415")) {
        {}
      } else {
        stryCov_9fa48("2415");
        const tagWhitelist = await categories.getTagWhitelist(stryMutAct_9fa48("2416") ? [] : (stryCov_9fa48("2416"), [cid]));
        if (stryMutAct_9fa48("2419") ? !Array.isArray(tagWhitelist[0]) && !tagWhitelist[0].length : stryMutAct_9fa48("2418") ? false : stryMutAct_9fa48("2417") ? true : (stryCov_9fa48("2417", "2418", "2419"), (stryMutAct_9fa48("2420") ? Array.isArray(tagWhitelist[0]) : (stryCov_9fa48("2420"), !Array.isArray(tagWhitelist[0]))) || (stryMutAct_9fa48("2421") ? tagWhitelist[0].length : (stryCov_9fa48("2421"), !tagWhitelist[0].length)))) {
          if (stryMutAct_9fa48("2422")) {
            {}
          } else {
            stryCov_9fa48("2422");
            return tags;
          }
        }
        const whitelistSet = new Set(tagWhitelist[0]);
        return stryMutAct_9fa48("2423") ? tags : (stryCov_9fa48("2423"), tags.filter(stryMutAct_9fa48("2424") ? () => undefined : (stryCov_9fa48("2424"), tag => whitelistSet.has(tag))));
      }
    }
    Topics.createEmptyTag = async function (tag) {
      if (stryMutAct_9fa48("2425")) {
        {}
      } else {
        stryCov_9fa48("2425");
        if (stryMutAct_9fa48("2428") ? false : stryMutAct_9fa48("2427") ? true : stryMutAct_9fa48("2426") ? tag : (stryCov_9fa48("2426", "2427", "2428"), !tag)) {
          if (stryMutAct_9fa48("2429")) {
            {}
          } else {
            stryCov_9fa48("2429");
            throw new Error(stryMutAct_9fa48("2430") ? "" : (stryCov_9fa48("2430"), '[[error:invalid-tag]]'));
          }
        }
        if (stryMutAct_9fa48("2434") ? tag.length >= (meta.config.minimumTagLength || 3) : stryMutAct_9fa48("2433") ? tag.length <= (meta.config.minimumTagLength || 3) : stryMutAct_9fa48("2432") ? false : stryMutAct_9fa48("2431") ? true : (stryCov_9fa48("2431", "2432", "2433", "2434"), tag.length < (stryMutAct_9fa48("2437") ? meta.config.minimumTagLength && 3 : stryMutAct_9fa48("2436") ? false : stryMutAct_9fa48("2435") ? true : (stryCov_9fa48("2435", "2436", "2437"), meta.config.minimumTagLength || 3)))) {
          if (stryMutAct_9fa48("2438")) {
            {}
          } else {
            stryCov_9fa48("2438");
            throw new Error(stryMutAct_9fa48("2439") ? "" : (stryCov_9fa48("2439"), '[[error:tag-too-short]]'));
          }
        }
        const isMember = await db.isSortedSetMember(stryMutAct_9fa48("2440") ? "" : (stryCov_9fa48("2440"), 'tags:topic:count'), tag);
        if (stryMutAct_9fa48("2443") ? false : stryMutAct_9fa48("2442") ? true : stryMutAct_9fa48("2441") ? isMember : (stryCov_9fa48("2441", "2442", "2443"), !isMember)) {
          if (stryMutAct_9fa48("2444")) {
            {}
          } else {
            stryCov_9fa48("2444");
            await db.sortedSetAdd(stryMutAct_9fa48("2445") ? "" : (stryCov_9fa48("2445"), 'tags:topic:count'), 0, tag);
            cache.del(stryMutAct_9fa48("2446") ? "" : (stryCov_9fa48("2446"), 'tags:topic:count'));
          }
        }
        const allCids = await categories.getAllCidsFromSet(stryMutAct_9fa48("2447") ? "" : (stryCov_9fa48("2447"), 'categories:cid'));
        const isMembers = await db.isMemberOfSortedSets(allCids.map(stryMutAct_9fa48("2448") ? () => undefined : (stryCov_9fa48("2448"), cid => stryMutAct_9fa48("2449") ? `` : (stryCov_9fa48("2449"), `cid:${cid}:tags`))), tag);
        const bulkAdd = stryMutAct_9fa48("2450") ? allCids.map(cid => [`cid:${cid}:tags`, 0, tag]) : (stryCov_9fa48("2450"), allCids.filter(stryMutAct_9fa48("2451") ? () => undefined : (stryCov_9fa48("2451"), (cid, index) => stryMutAct_9fa48("2452") ? isMembers[index] : (stryCov_9fa48("2452"), !isMembers[index]))).map(stryMutAct_9fa48("2453") ? () => undefined : (stryCov_9fa48("2453"), cid => stryMutAct_9fa48("2454") ? [] : (stryCov_9fa48("2454"), [stryMutAct_9fa48("2455") ? `` : (stryCov_9fa48("2455"), `cid:${cid}:tags`), 0, tag]))));
        await db.sortedSetAddBulk(bulkAdd);
      }
    };
    Topics.renameTags = async function (data) {
      if (stryMutAct_9fa48("2456")) {
        {}
      } else {
        stryCov_9fa48("2456");
        for (const tagData of data) {
          if (stryMutAct_9fa48("2457")) {
            {}
          } else {
            stryCov_9fa48("2457");
            // eslint-disable-next-line no-await-in-loop
            await renameTag(tagData.value, tagData.newName);
          }
        }
      }
    };
    async function renameTag(tag, newTagName) {
      if (stryMutAct_9fa48("2458")) {
        {}
      } else {
        stryCov_9fa48("2458");
        if (stryMutAct_9fa48("2461") ? !newTagName && tag === newTagName : stryMutAct_9fa48("2460") ? false : stryMutAct_9fa48("2459") ? true : (stryCov_9fa48("2459", "2460", "2461"), (stryMutAct_9fa48("2462") ? newTagName : (stryCov_9fa48("2462"), !newTagName)) || (stryMutAct_9fa48("2464") ? tag !== newTagName : stryMutAct_9fa48("2463") ? false : (stryCov_9fa48("2463", "2464"), tag === newTagName)))) {
          if (stryMutAct_9fa48("2465")) {
            {}
          } else {
            stryCov_9fa48("2465");
            return;
          }
        }
        newTagName = utils.cleanUpTag(newTagName, meta.config.maximumTagLength);
        await Topics.createEmptyTag(newTagName);
        const allCids = {};
        await batch.processSortedSet(stryMutAct_9fa48("2466") ? `` : (stryCov_9fa48("2466"), `tag:${tag}:topics`), async tids => {
          if (stryMutAct_9fa48("2467")) {
            {}
          } else {
            stryCov_9fa48("2467");
            const topicData = await Topics.getTopicsFields(tids, stryMutAct_9fa48("2468") ? [] : (stryCov_9fa48("2468"), [stryMutAct_9fa48("2469") ? "" : (stryCov_9fa48("2469"), 'tid'), stryMutAct_9fa48("2470") ? "" : (stryCov_9fa48("2470"), 'cid'), stryMutAct_9fa48("2471") ? "" : (stryCov_9fa48("2471"), 'tags')]));
            const cids = topicData.map(stryMutAct_9fa48("2472") ? () => undefined : (stryCov_9fa48("2472"), t => t.cid));
            topicData.forEach(t => {
              if (stryMutAct_9fa48("2473")) {
                {}
              } else {
                stryCov_9fa48("2473");
                allCids[t.cid] = stryMutAct_9fa48("2474") ? false : (stryCov_9fa48("2474"), true);
              }
            });
            const scores = await db.sortedSetScores(stryMutAct_9fa48("2475") ? `` : (stryCov_9fa48("2475"), `tag:${tag}:topics`), tids);
            // update tag:<tag>:topics
            await db.sortedSetAdd(stryMutAct_9fa48("2476") ? `` : (stryCov_9fa48("2476"), `tag:${newTagName}:topics`), scores, tids);
            await db.sortedSetRemove(stryMutAct_9fa48("2477") ? `` : (stryCov_9fa48("2477"), `tag:${tag}:topics`), tids);

            // update cid:<cid>:tag:<tag>:topics
            await db.sortedSetAddBulk(topicData.map(stryMutAct_9fa48("2478") ? () => undefined : (stryCov_9fa48("2478"), (t, index) => stryMutAct_9fa48("2479") ? [] : (stryCov_9fa48("2479"), [stryMutAct_9fa48("2480") ? `` : (stryCov_9fa48("2480"), `cid:${t.cid}:tag:${newTagName}:topics`), scores[index], t.tid]))));
            await db.sortedSetRemove(cids.map(stryMutAct_9fa48("2481") ? () => undefined : (stryCov_9fa48("2481"), cid => stryMutAct_9fa48("2482") ? `` : (stryCov_9fa48("2482"), `cid:${cid}:tag:${tag}:topics`))), tids);

            // update 'tags' field in topic hash
            topicData.forEach(topic => {
              if (stryMutAct_9fa48("2483")) {
                {}
              } else {
                stryCov_9fa48("2483");
                topic.tags = topic.tags.map(stryMutAct_9fa48("2484") ? () => undefined : (stryCov_9fa48("2484"), tagItem => tagItem.value));
                const index = topic.tags.indexOf(tag);
                if (stryMutAct_9fa48("2487") ? index === -1 : stryMutAct_9fa48("2486") ? false : stryMutAct_9fa48("2485") ? true : (stryCov_9fa48("2485", "2486", "2487"), index !== (stryMutAct_9fa48("2488") ? +1 : (stryCov_9fa48("2488"), -1)))) {
                  if (stryMutAct_9fa48("2489")) {
                    {}
                  } else {
                    stryCov_9fa48("2489");
                    topic.tags.splice(index, 1, newTagName);
                  }
                }
              }
            });
            await db.setObjectBulk(topicData.map(stryMutAct_9fa48("2490") ? () => undefined : (stryCov_9fa48("2490"), t => stryMutAct_9fa48("2491") ? [] : (stryCov_9fa48("2491"), [stryMutAct_9fa48("2492") ? `` : (stryCov_9fa48("2492"), `topic:${t.tid}`), stryMutAct_9fa48("2493") ? {} : (stryCov_9fa48("2493"), {
              tags: t.tags.join(stryMutAct_9fa48("2494") ? "" : (stryCov_9fa48("2494"), ','))
            })]))));
          }
        }, {});
        await Topics.deleteTag(tag);
        await updateTagCount(newTagName);
        await Topics.updateCategoryTagsCount(Object.keys(allCids), stryMutAct_9fa48("2495") ? [] : (stryCov_9fa48("2495"), [newTagName]));
      }
    }
    async function updateTagCount(tag) {
      if (stryMutAct_9fa48("2496")) {
        {}
      } else {
        stryCov_9fa48("2496");
        const count = await Topics.getTagTopicCount(tag);
        await db.sortedSetAdd(stryMutAct_9fa48("2497") ? "" : (stryCov_9fa48("2497"), 'tags:topic:count'), stryMutAct_9fa48("2500") ? count && 0 : stryMutAct_9fa48("2499") ? false : stryMutAct_9fa48("2498") ? true : (stryCov_9fa48("2498", "2499", "2500"), count || 0), tag);
        cache.del(stryMutAct_9fa48("2501") ? "" : (stryCov_9fa48("2501"), 'tags:topic:count'));
      }
    }
    Topics.getTagTids = async function (tag, start, stop) {
      if (stryMutAct_9fa48("2502")) {
        {}
      } else {
        stryCov_9fa48("2502");
        const tids = await db.getSortedSetRevRange(stryMutAct_9fa48("2503") ? `` : (stryCov_9fa48("2503"), `tag:${tag}:topics`), start, stop);
        const payload = await plugins.hooks.fire(stryMutAct_9fa48("2504") ? "" : (stryCov_9fa48("2504"), 'filter:topics.getTagTids'), stryMutAct_9fa48("2505") ? {} : (stryCov_9fa48("2505"), {
          tag,
          start,
          stop,
          tids
        }));
        return payload.tids;
      }
    };
    Topics.getTagTidsByCids = async function (tag, cids, start, stop) {
      if (stryMutAct_9fa48("2506")) {
        {}
      } else {
        stryCov_9fa48("2506");
        const keys = cids.map(stryMutAct_9fa48("2507") ? () => undefined : (stryCov_9fa48("2507"), cid => stryMutAct_9fa48("2508") ? `` : (stryCov_9fa48("2508"), `cid:${cid}:tag:${tag}:topics`)));
        const tids = await db.getSortedSetRevRange(keys, start, stop);
        const payload = await plugins.hooks.fire(stryMutAct_9fa48("2509") ? "" : (stryCov_9fa48("2509"), 'filter:topics.getTagTidsByCids'), stryMutAct_9fa48("2510") ? {} : (stryCov_9fa48("2510"), {
          tag,
          cids,
          start,
          stop,
          tids
        }));
        return payload.tids;
      }
    };
    Topics.getTagTopicCount = async function (tag, cids = stryMutAct_9fa48("2511") ? ["Stryker was here"] : (stryCov_9fa48("2511"), [])) {
      if (stryMutAct_9fa48("2512")) {
        {}
      } else {
        stryCov_9fa48("2512");
        let count = 0;
        if (stryMutAct_9fa48("2514") ? false : stryMutAct_9fa48("2513") ? true : (stryCov_9fa48("2513", "2514"), cids.length)) {
          if (stryMutAct_9fa48("2515")) {
            {}
          } else {
            stryCov_9fa48("2515");
            count = await db.sortedSetsCardSum(cids.map(stryMutAct_9fa48("2516") ? () => undefined : (stryCov_9fa48("2516"), cid => stryMutAct_9fa48("2517") ? `` : (stryCov_9fa48("2517"), `cid:${cid}:tag:${tag}:topics`))));
          }
        } else {
          if (stryMutAct_9fa48("2518")) {
            {}
          } else {
            stryCov_9fa48("2518");
            count = await db.sortedSetCard(stryMutAct_9fa48("2519") ? `` : (stryCov_9fa48("2519"), `tag:${tag}:topics`));
          }
        }
        const payload = await plugins.hooks.fire(stryMutAct_9fa48("2520") ? "" : (stryCov_9fa48("2520"), 'filter:topics.getTagTopicCount'), stryMutAct_9fa48("2521") ? {} : (stryCov_9fa48("2521"), {
          tag,
          count,
          cids
        }));
        return payload.count;
      }
    };
    Topics.deleteTags = async function (tags) {
      if (stryMutAct_9fa48("2522")) {
        {}
      } else {
        stryCov_9fa48("2522");
        if (stryMutAct_9fa48("2525") ? !Array.isArray(tags) && !tags.length : stryMutAct_9fa48("2524") ? false : stryMutAct_9fa48("2523") ? true : (stryCov_9fa48("2523", "2524", "2525"), (stryMutAct_9fa48("2526") ? Array.isArray(tags) : (stryCov_9fa48("2526"), !Array.isArray(tags))) || (stryMutAct_9fa48("2527") ? tags.length : (stryCov_9fa48("2527"), !tags.length)))) {
          if (stryMutAct_9fa48("2528")) {
            {}
          } else {
            stryCov_9fa48("2528");
            return;
          }
        }
        await removeTagsFromTopics(tags);
        const keys = tags.map(stryMutAct_9fa48("2529") ? () => undefined : (stryCov_9fa48("2529"), tag => stryMutAct_9fa48("2530") ? `` : (stryCov_9fa48("2530"), `tag:${tag}:topics`)));
        await db.deleteAll(keys);
        await db.sortedSetRemove(stryMutAct_9fa48("2531") ? "" : (stryCov_9fa48("2531"), 'tags:topic:count'), tags);
        cache.del(stryMutAct_9fa48("2532") ? "" : (stryCov_9fa48("2532"), 'tags:topic:count'));
        const cids = await categories.getAllCidsFromSet(stryMutAct_9fa48("2533") ? "" : (stryCov_9fa48("2533"), 'categories:cid'));
        await db.sortedSetRemove(cids.map(stryMutAct_9fa48("2534") ? () => undefined : (stryCov_9fa48("2534"), cid => stryMutAct_9fa48("2535") ? `` : (stryCov_9fa48("2535"), `cid:${cid}:tags`))), tags);
        const deleteKeys = stryMutAct_9fa48("2536") ? ["Stryker was here"] : (stryCov_9fa48("2536"), []);
        tags.forEach(tag => {
          if (stryMutAct_9fa48("2537")) {
            {}
          } else {
            stryCov_9fa48("2537");
            deleteKeys.push(stryMutAct_9fa48("2538") ? `` : (stryCov_9fa48("2538"), `tag:${tag}`));
            cids.forEach(cid => {
              if (stryMutAct_9fa48("2539")) {
                {}
              } else {
                stryCov_9fa48("2539");
                deleteKeys.push(stryMutAct_9fa48("2540") ? `` : (stryCov_9fa48("2540"), `cid:${cid}:tag:${tag}:topics`));
              }
            });
          }
        });
        await db.deleteAll(deleteKeys);
      }
    };
    async function removeTagsFromTopics(tags) {
      if (stryMutAct_9fa48("2541")) {
        {}
      } else {
        stryCov_9fa48("2541");
        await async.eachLimit(tags, 50, async tag => {
          if (stryMutAct_9fa48("2542")) {
            {}
          } else {
            stryCov_9fa48("2542");
            const tids = await db.getSortedSetRange(stryMutAct_9fa48("2543") ? `` : (stryCov_9fa48("2543"), `tag:${tag}:topics`), 0, stryMutAct_9fa48("2544") ? +1 : (stryCov_9fa48("2544"), -1));
            if (stryMutAct_9fa48("2547") ? false : stryMutAct_9fa48("2546") ? true : stryMutAct_9fa48("2545") ? tids.length : (stryCov_9fa48("2545", "2546", "2547"), !tids.length)) {
              if (stryMutAct_9fa48("2548")) {
                {}
              } else {
                stryCov_9fa48("2548");
                return;
              }
            }
            await db.deleteObjectFields(tids.map(stryMutAct_9fa48("2549") ? () => undefined : (stryCov_9fa48("2549"), tid => stryMutAct_9fa48("2550") ? `` : (stryCov_9fa48("2550"), `topic:${tid}`))), stryMutAct_9fa48("2551") ? [] : (stryCov_9fa48("2551"), [stryMutAct_9fa48("2552") ? "" : (stryCov_9fa48("2552"), 'tags')]));
          }
        });
      }
    }
    Topics.deleteTag = async function (tag) {
      if (stryMutAct_9fa48("2553")) {
        {}
      } else {
        stryCov_9fa48("2553");
        await Topics.deleteTags(stryMutAct_9fa48("2554") ? [] : (stryCov_9fa48("2554"), [tag]));
      }
    };
    Topics.getTags = async function (start, stop) {
      if (stryMutAct_9fa48("2555")) {
        {}
      } else {
        stryCov_9fa48("2555");
        return await getFromSet(stryMutAct_9fa48("2556") ? "" : (stryCov_9fa48("2556"), 'tags:topic:count'), start, stop);
      }
    };
    Topics.getCategoryTags = async function (cids, start, stop) {
      if (stryMutAct_9fa48("2557")) {
        {}
      } else {
        stryCov_9fa48("2557");
        if (stryMutAct_9fa48("2559") ? false : stryMutAct_9fa48("2558") ? true : (stryCov_9fa48("2558", "2559"), Array.isArray(cids))) {
          if (stryMutAct_9fa48("2560")) {
            {}
          } else {
            stryCov_9fa48("2560");
            return await db.getSortedSetRevUnion(stryMutAct_9fa48("2561") ? {} : (stryCov_9fa48("2561"), {
              sets: cids.map(stryMutAct_9fa48("2562") ? () => undefined : (stryCov_9fa48("2562"), cid => stryMutAct_9fa48("2563") ? `` : (stryCov_9fa48("2563"), `cid:${cid}:tags`))),
              start,
              stop
            }));
          }
        }
        return await db.getSortedSetRevRange(stryMutAct_9fa48("2564") ? `` : (stryCov_9fa48("2564"), `cid:${cids}:tags`), start, stop);
      }
    };
    Topics.getCategoryTagsData = async function (cids, start, stop) {
      if (stryMutAct_9fa48("2565")) {
        {}
      } else {
        stryCov_9fa48("2565");
        return await getFromSet(Array.isArray(cids) ? cids.map(stryMutAct_9fa48("2566") ? () => undefined : (stryCov_9fa48("2566"), cid => stryMutAct_9fa48("2567") ? `` : (stryCov_9fa48("2567"), `cid:${cid}:tags`))) : stryMutAct_9fa48("2568") ? `` : (stryCov_9fa48("2568"), `cid:${cids}:tags`), start, stop);
      }
    };
    async function getFromSet(set, start, stop) {
      if (stryMutAct_9fa48("2569")) {
        {}
      } else {
        stryCov_9fa48("2569");
        let tags;
        if (stryMutAct_9fa48("2571") ? false : stryMutAct_9fa48("2570") ? true : (stryCov_9fa48("2570", "2571"), Array.isArray(set))) {
          if (stryMutAct_9fa48("2572")) {
            {}
          } else {
            stryCov_9fa48("2572");
            tags = await db.getSortedSetRevUnion(stryMutAct_9fa48("2573") ? {} : (stryCov_9fa48("2573"), {
              sets: set,
              start,
              stop,
              withScores: stryMutAct_9fa48("2574") ? false : (stryCov_9fa48("2574"), true)
            }));
          }
        } else {
          if (stryMutAct_9fa48("2575")) {
            {}
          } else {
            stryCov_9fa48("2575");
            tags = await db.getSortedSetRevRangeWithScores(set, start, stop);
          }
        }
        const payload = await plugins.hooks.fire(stryMutAct_9fa48("2576") ? "" : (stryCov_9fa48("2576"), 'filter:tags.getAll'), stryMutAct_9fa48("2577") ? {} : (stryCov_9fa48("2577"), {
          tags: tags
        }));
        return await Topics.getTagData(payload.tags);
      }
    }
    Topics.getTagData = async function (tags) {
      if (stryMutAct_9fa48("2578")) {
        {}
      } else {
        stryCov_9fa48("2578");
        if (stryMutAct_9fa48("2581") ? false : stryMutAct_9fa48("2580") ? true : stryMutAct_9fa48("2579") ? tags.length : (stryCov_9fa48("2579", "2580", "2581"), !tags.length)) {
          if (stryMutAct_9fa48("2582")) {
            {}
          } else {
            stryCov_9fa48("2582");
            return stryMutAct_9fa48("2583") ? ["Stryker was here"] : (stryCov_9fa48("2583"), []);
          }
        }
        tags.forEach(tag => {
          if (stryMutAct_9fa48("2584")) {
            {}
          } else {
            stryCov_9fa48("2584");
            tag.valueEscaped = validator.escape(String(tag.value));
            tag.valueEncoded = encodeURIComponent(tag.valueEscaped);
            tag.class = tag.valueEscaped.replace(stryMutAct_9fa48("2585") ? /\S/g : (stryCov_9fa48("2585"), /\s/g), stryMutAct_9fa48("2586") ? "" : (stryCov_9fa48("2586"), '-'));
          }
        });
        return tags;
      }
    };
    Topics.getTopicTags = async function (tid) {
      if (stryMutAct_9fa48("2587")) {
        {}
      } else {
        stryCov_9fa48("2587");
        const data = await Topics.getTopicsTags(stryMutAct_9fa48("2588") ? [] : (stryCov_9fa48("2588"), [tid]));
        return stryMutAct_9fa48("2591") ? data || data[0] : stryMutAct_9fa48("2590") ? false : stryMutAct_9fa48("2589") ? true : (stryCov_9fa48("2589", "2590", "2591"), data && data[0]);
      }
    };
    Topics.getTopicsTags = async function (tids) {
      if (stryMutAct_9fa48("2592")) {
        {}
      } else {
        stryCov_9fa48("2592");
        const topicTagData = await Topics.getTopicsFields(tids, stryMutAct_9fa48("2593") ? [] : (stryCov_9fa48("2593"), [stryMutAct_9fa48("2594") ? "" : (stryCov_9fa48("2594"), 'tags')]));
        return tids.map(stryMutAct_9fa48("2595") ? () => undefined : (stryCov_9fa48("2595"), (tid, i) => topicTagData[i].tags.map(stryMutAct_9fa48("2596") ? () => undefined : (stryCov_9fa48("2596"), tagData => tagData.value))));
      }
    };
    Topics.getTopicTagsObjects = async function (tid) {
      if (stryMutAct_9fa48("2597")) {
        {}
      } else {
        stryCov_9fa48("2597");
        const data = await Topics.getTopicsTagsObjects(stryMutAct_9fa48("2598") ? [] : (stryCov_9fa48("2598"), [tid]));
        return (stryMutAct_9fa48("2601") ? Array.isArray(data) || data.length : stryMutAct_9fa48("2600") ? false : stryMutAct_9fa48("2599") ? true : (stryCov_9fa48("2599", "2600", "2601"), Array.isArray(data) && data.length)) ? data[0] : stryMutAct_9fa48("2602") ? ["Stryker was here"] : (stryCov_9fa48("2602"), []);
      }
    };
    Topics.getTopicsTagsObjects = async function (tids) {
      if (stryMutAct_9fa48("2603")) {
        {}
      } else {
        stryCov_9fa48("2603");
        const topicTags = await Topics.getTopicsTags(tids);
        const uniqueTopicTags = _.uniq(_.flatten(topicTags));
        const tags = uniqueTopicTags.map(stryMutAct_9fa48("2604") ? () => undefined : (stryCov_9fa48("2604"), tag => stryMutAct_9fa48("2605") ? {} : (stryCov_9fa48("2605"), {
          value: tag
        })));
        const tagData = await Topics.getTagData(tags);
        const tagDataMap = _.zipObject(uniqueTopicTags, tagData);
        topicTags.forEach((tags, index) => {
          if (stryMutAct_9fa48("2606")) {
            {}
          } else {
            stryCov_9fa48("2606");
            if (stryMutAct_9fa48("2608") ? false : stryMutAct_9fa48("2607") ? true : (stryCov_9fa48("2607", "2608"), Array.isArray(tags))) {
              if (stryMutAct_9fa48("2609")) {
                {}
              } else {
                stryCov_9fa48("2609");
                topicTags[index] = tags.map(stryMutAct_9fa48("2610") ? () => undefined : (stryCov_9fa48("2610"), tag => tagDataMap[tag]));
              }
            }
          }
        });
        return topicTags;
      }
    };
    Topics.addTags = async function (tags, tids) {
      if (stryMutAct_9fa48("2611")) {
        {}
      } else {
        stryCov_9fa48("2611");
        const topicData = await Topics.getTopicsFields(tids, stryMutAct_9fa48("2612") ? [] : (stryCov_9fa48("2612"), [stryMutAct_9fa48("2613") ? "" : (stryCov_9fa48("2613"), 'tid'), stryMutAct_9fa48("2614") ? "" : (stryCov_9fa48("2614"), 'cid'), stryMutAct_9fa48("2615") ? "" : (stryCov_9fa48("2615"), 'timestamp'), stryMutAct_9fa48("2616") ? "" : (stryCov_9fa48("2616"), 'tags')]));
        const bulkAdd = stryMutAct_9fa48("2617") ? ["Stryker was here"] : (stryCov_9fa48("2617"), []);
        const bulkSet = stryMutAct_9fa48("2618") ? ["Stryker was here"] : (stryCov_9fa48("2618"), []);
        topicData.forEach(t => {
          if (stryMutAct_9fa48("2619")) {
            {}
          } else {
            stryCov_9fa48("2619");
            const topicTags = t.tags.map(stryMutAct_9fa48("2620") ? () => undefined : (stryCov_9fa48("2620"), tagItem => tagItem.value));
            tags.forEach(tag => {
              if (stryMutAct_9fa48("2621")) {
                {}
              } else {
                stryCov_9fa48("2621");
                bulkAdd.push(stryMutAct_9fa48("2622") ? [] : (stryCov_9fa48("2622"), [stryMutAct_9fa48("2623") ? `` : (stryCov_9fa48("2623"), `tag:${tag}:topics`), t.timestamp, t.tid]));
                bulkAdd.push(stryMutAct_9fa48("2624") ? [] : (stryCov_9fa48("2624"), [stryMutAct_9fa48("2625") ? `` : (stryCov_9fa48("2625"), `cid:${t.cid}:tag:${tag}:topics`), t.timestamp, t.tid]));
                if (stryMutAct_9fa48("2628") ? false : stryMutAct_9fa48("2627") ? true : stryMutAct_9fa48("2626") ? topicTags.includes(tag) : (stryCov_9fa48("2626", "2627", "2628"), !topicTags.includes(tag))) {
                  if (stryMutAct_9fa48("2629")) {
                    {}
                  } else {
                    stryCov_9fa48("2629");
                    topicTags.push(tag);
                  }
                }
              }
            });
            bulkSet.push(stryMutAct_9fa48("2630") ? [] : (stryCov_9fa48("2630"), [stryMutAct_9fa48("2631") ? `` : (stryCov_9fa48("2631"), `topic:${t.tid}`), stryMutAct_9fa48("2632") ? {} : (stryCov_9fa48("2632"), {
              tags: topicTags.join(stryMutAct_9fa48("2633") ? "" : (stryCov_9fa48("2633"), ','))
            })]));
          }
        });
        await Promise.all(stryMutAct_9fa48("2634") ? [] : (stryCov_9fa48("2634"), [db.sortedSetAddBulk(bulkAdd), db.setObjectBulk(bulkSet)]));
        await Promise.all(tags.map(updateTagCount));
        await Topics.updateCategoryTagsCount(_.uniq(topicData.map(stryMutAct_9fa48("2635") ? () => undefined : (stryCov_9fa48("2635"), t => t.cid))), tags);
      }
    };
    Topics.removeTags = async function (tags, tids) {
      if (stryMutAct_9fa48("2636")) {
        {}
      } else {
        stryCov_9fa48("2636");
        const topicData = await Topics.getTopicsFields(tids, stryMutAct_9fa48("2637") ? [] : (stryCov_9fa48("2637"), [stryMutAct_9fa48("2638") ? "" : (stryCov_9fa48("2638"), 'tid'), stryMutAct_9fa48("2639") ? "" : (stryCov_9fa48("2639"), 'cid'), stryMutAct_9fa48("2640") ? "" : (stryCov_9fa48("2640"), 'tags')]));
        const bulkRemove = stryMutAct_9fa48("2641") ? ["Stryker was here"] : (stryCov_9fa48("2641"), []);
        const bulkSet = stryMutAct_9fa48("2642") ? ["Stryker was here"] : (stryCov_9fa48("2642"), []);
        topicData.forEach(t => {
          if (stryMutAct_9fa48("2643")) {
            {}
          } else {
            stryCov_9fa48("2643");
            const topicTags = t.tags.map(stryMutAct_9fa48("2644") ? () => undefined : (stryCov_9fa48("2644"), tagItem => tagItem.value));
            tags.forEach(tag => {
              if (stryMutAct_9fa48("2645")) {
                {}
              } else {
                stryCov_9fa48("2645");
                bulkRemove.push(stryMutAct_9fa48("2646") ? [] : (stryCov_9fa48("2646"), [stryMutAct_9fa48("2647") ? `` : (stryCov_9fa48("2647"), `tag:${tag}:topics`), t.tid]));
                bulkRemove.push(stryMutAct_9fa48("2648") ? [] : (stryCov_9fa48("2648"), [stryMutAct_9fa48("2649") ? `` : (stryCov_9fa48("2649"), `cid:${t.cid}:tag:${tag}:topics`), t.tid]));
                if (stryMutAct_9fa48("2651") ? false : stryMutAct_9fa48("2650") ? true : (stryCov_9fa48("2650", "2651"), topicTags.includes(tag))) {
                  if (stryMutAct_9fa48("2652")) {
                    {}
                  } else {
                    stryCov_9fa48("2652");
                    topicTags.splice(topicTags.indexOf(tag), 1);
                  }
                }
              }
            });
            bulkSet.push(stryMutAct_9fa48("2653") ? [] : (stryCov_9fa48("2653"), [stryMutAct_9fa48("2654") ? `` : (stryCov_9fa48("2654"), `topic:${t.tid}`), stryMutAct_9fa48("2655") ? {} : (stryCov_9fa48("2655"), {
              tags: topicTags.join(stryMutAct_9fa48("2656") ? "" : (stryCov_9fa48("2656"), ','))
            })]));
          }
        });
        await Promise.all(stryMutAct_9fa48("2657") ? [] : (stryCov_9fa48("2657"), [db.sortedSetRemoveBulk(bulkRemove), db.setObjectBulk(bulkSet)]));
        await Promise.all(tags.map(updateTagCount));
        await Topics.updateCategoryTagsCount(_.uniq(topicData.map(stryMutAct_9fa48("2658") ? () => undefined : (stryCov_9fa48("2658"), t => t.cid))), tags);
      }
    };
    Topics.updateTopicTags = async function (tid, tags) {
      if (stryMutAct_9fa48("2659")) {
        {}
      } else {
        stryCov_9fa48("2659");
        await Topics.deleteTopicTags(tid);
        const cid = await Topics.getTopicField(tid, stryMutAct_9fa48("2660") ? "" : (stryCov_9fa48("2660"), 'cid'));
        tags = await Topics.filterTags(tags, cid);
        await Topics.addTags(tags, stryMutAct_9fa48("2661") ? [] : (stryCov_9fa48("2661"), [tid]));
      }
    };
    Topics.deleteTopicTags = async function (tid) {
      if (stryMutAct_9fa48("2662")) {
        {}
      } else {
        stryCov_9fa48("2662");
        const topicData = await Topics.getTopicFields(tid, stryMutAct_9fa48("2663") ? [] : (stryCov_9fa48("2663"), [stryMutAct_9fa48("2664") ? "" : (stryCov_9fa48("2664"), 'cid'), stryMutAct_9fa48("2665") ? "" : (stryCov_9fa48("2665"), 'tags')]));
        const {
          cid
        } = topicData;
        const tags = topicData.tags.map(stryMutAct_9fa48("2666") ? () => undefined : (stryCov_9fa48("2666"), tagItem => tagItem.value));
        await db.deleteObjectField(stryMutAct_9fa48("2667") ? `` : (stryCov_9fa48("2667"), `topic:${tid}`), stryMutAct_9fa48("2668") ? "" : (stryCov_9fa48("2668"), 'tags'));
        const sets = tags.map(stryMutAct_9fa48("2669") ? () => undefined : (stryCov_9fa48("2669"), tag => stryMutAct_9fa48("2670") ? `` : (stryCov_9fa48("2670"), `tag:${tag}:topics`))).concat(tags.map(stryMutAct_9fa48("2671") ? () => undefined : (stryCov_9fa48("2671"), tag => stryMutAct_9fa48("2672") ? `` : (stryCov_9fa48("2672"), `cid:${cid}:tag:${tag}:topics`))));
        await db.sortedSetsRemove(sets, tid);
        await Topics.updateCategoryTagsCount(stryMutAct_9fa48("2673") ? [] : (stryCov_9fa48("2673"), [cid]), tags);
        await Promise.all(tags.map(updateTagCount));
      }
    };
    Topics.searchTags = async function (data) {
      if (stryMutAct_9fa48("2674")) {
        {}
      } else {
        stryCov_9fa48("2674");
        if (stryMutAct_9fa48("2677") ? !data && !data.query : stryMutAct_9fa48("2676") ? false : stryMutAct_9fa48("2675") ? true : (stryCov_9fa48("2675", "2676", "2677"), (stryMutAct_9fa48("2678") ? data : (stryCov_9fa48("2678"), !data)) || (stryMutAct_9fa48("2679") ? data.query : (stryCov_9fa48("2679"), !data.query)))) {
          if (stryMutAct_9fa48("2680")) {
            {}
          } else {
            stryCov_9fa48("2680");
            return stryMutAct_9fa48("2681") ? ["Stryker was here"] : (stryCov_9fa48("2681"), []);
          }
        }
        let result;
        if (stryMutAct_9fa48("2683") ? false : stryMutAct_9fa48("2682") ? true : (stryCov_9fa48("2682", "2683"), plugins.hooks.hasListeners(stryMutAct_9fa48("2684") ? "" : (stryCov_9fa48("2684"), 'filter:topics.searchTags')))) {
          if (stryMutAct_9fa48("2685")) {
            {}
          } else {
            stryCov_9fa48("2685");
            result = await plugins.hooks.fire(stryMutAct_9fa48("2686") ? "" : (stryCov_9fa48("2686"), 'filter:topics.searchTags'), stryMutAct_9fa48("2687") ? {} : (stryCov_9fa48("2687"), {
              data: data
            }));
          }
        } else {
          if (stryMutAct_9fa48("2688")) {
            {}
          } else {
            stryCov_9fa48("2688");
            result = await findMatches(data);
          }
        }
        result = await plugins.hooks.fire(stryMutAct_9fa48("2689") ? "" : (stryCov_9fa48("2689"), 'filter:tags.search'), stryMutAct_9fa48("2690") ? {} : (stryCov_9fa48("2690"), {
          data: data,
          matches: result.matches
        }));
        return result.matches;
      }
    };
    Topics.autocompleteTags = async function (data) {
      if (stryMutAct_9fa48("2691")) {
        {}
      } else {
        stryCov_9fa48("2691");
        if (stryMutAct_9fa48("2694") ? !data && !data.query : stryMutAct_9fa48("2693") ? false : stryMutAct_9fa48("2692") ? true : (stryCov_9fa48("2692", "2693", "2694"), (stryMutAct_9fa48("2695") ? data : (stryCov_9fa48("2695"), !data)) || (stryMutAct_9fa48("2696") ? data.query : (stryCov_9fa48("2696"), !data.query)))) {
          if (stryMutAct_9fa48("2697")) {
            {}
          } else {
            stryCov_9fa48("2697");
            return stryMutAct_9fa48("2698") ? ["Stryker was here"] : (stryCov_9fa48("2698"), []);
          }
        }
        let result;
        if (stryMutAct_9fa48("2700") ? false : stryMutAct_9fa48("2699") ? true : (stryCov_9fa48("2699", "2700"), plugins.hooks.hasListeners(stryMutAct_9fa48("2701") ? "" : (stryCov_9fa48("2701"), 'filter:topics.autocompleteTags')))) {
          if (stryMutAct_9fa48("2702")) {
            {}
          } else {
            stryCov_9fa48("2702");
            result = await plugins.hooks.fire(stryMutAct_9fa48("2703") ? "" : (stryCov_9fa48("2703"), 'filter:topics.autocompleteTags'), stryMutAct_9fa48("2704") ? {} : (stryCov_9fa48("2704"), {
              data: data
            }));
          }
        } else {
          if (stryMutAct_9fa48("2705")) {
            {}
          } else {
            stryCov_9fa48("2705");
            result = await findMatches(data);
          }
        }
        return result.matches;
      }
    };
    async function getAllTags() {
      if (stryMutAct_9fa48("2706")) {
        {}
      } else {
        stryCov_9fa48("2706");
        const cached = cache.get(stryMutAct_9fa48("2707") ? "" : (stryCov_9fa48("2707"), 'tags:topic:count'));
        if (stryMutAct_9fa48("2710") ? cached === undefined : stryMutAct_9fa48("2709") ? false : stryMutAct_9fa48("2708") ? true : (stryCov_9fa48("2708", "2709", "2710"), cached !== undefined)) {
          if (stryMutAct_9fa48("2711")) {
            {}
          } else {
            stryCov_9fa48("2711");
            return cached;
          }
        }
        const tags = await db.getSortedSetRevRangeWithScores(stryMutAct_9fa48("2712") ? "" : (stryCov_9fa48("2712"), 'tags:topic:count'), 0, stryMutAct_9fa48("2713") ? +1 : (stryCov_9fa48("2713"), -1));
        cache.set(stryMutAct_9fa48("2714") ? "" : (stryCov_9fa48("2714"), 'tags:topic:count'), tags);
        return tags;
      }
    }
    async function findMatches(data) {
      if (stryMutAct_9fa48("2715")) {
        {}
      } else {
        stryCov_9fa48("2715");
        let {
          query
        } = data;
        let tagWhitelist = stryMutAct_9fa48("2716") ? ["Stryker was here"] : (stryCov_9fa48("2716"), []);
        if (stryMutAct_9fa48("2718") ? false : stryMutAct_9fa48("2717") ? true : (stryCov_9fa48("2717", "2718"), parseInt(data.cid, 10))) {
          if (stryMutAct_9fa48("2719")) {
            {}
          } else {
            stryCov_9fa48("2719");
            tagWhitelist = await categories.getTagWhitelist(stryMutAct_9fa48("2720") ? [] : (stryCov_9fa48("2720"), [data.cid]));
          }
        }
        let tags = stryMutAct_9fa48("2721") ? ["Stryker was here"] : (stryCov_9fa48("2721"), []);
        if (stryMutAct_9fa48("2724") ? Array.isArray(tagWhitelist[0]) || tagWhitelist[0].length : stryMutAct_9fa48("2723") ? false : stryMutAct_9fa48("2722") ? true : (stryCov_9fa48("2722", "2723", "2724"), Array.isArray(tagWhitelist[0]) && tagWhitelist[0].length)) {
          if (stryMutAct_9fa48("2725")) {
            {}
          } else {
            stryCov_9fa48("2725");
            const scores = await db.sortedSetScores(stryMutAct_9fa48("2726") ? `` : (stryCov_9fa48("2726"), `cid:${data.cid}:tags`), tagWhitelist[0]);
            tags = tagWhitelist[0].map(stryMutAct_9fa48("2727") ? () => undefined : (stryCov_9fa48("2727"), (tag, index) => stryMutAct_9fa48("2728") ? {} : (stryCov_9fa48("2728"), {
              value: tag,
              score: scores[index]
            })));
          }
        } else if (stryMutAct_9fa48("2730") ? false : stryMutAct_9fa48("2729") ? true : (stryCov_9fa48("2729", "2730"), data.cids)) {
          if (stryMutAct_9fa48("2731")) {
            {}
          } else {
            stryCov_9fa48("2731");
            tags = await db.getSortedSetRevUnion(stryMutAct_9fa48("2732") ? {} : (stryCov_9fa48("2732"), {
              sets: data.cids.map(stryMutAct_9fa48("2733") ? () => undefined : (stryCov_9fa48("2733"), cid => stryMutAct_9fa48("2734") ? `` : (stryCov_9fa48("2734"), `cid:${cid}:tags`))),
              start: 0,
              stop: stryMutAct_9fa48("2735") ? +1 : (stryCov_9fa48("2735"), -1),
              withScores: stryMutAct_9fa48("2736") ? false : (stryCov_9fa48("2736"), true)
            }));
          }
        } else {
          if (stryMutAct_9fa48("2737")) {
            {}
          } else {
            stryCov_9fa48("2737");
            tags = await getAllTags();
          }
        }
        query = stryMutAct_9fa48("2738") ? query.toUpperCase() : (stryCov_9fa48("2738"), query.toLowerCase());
        const matches = stryMutAct_9fa48("2739") ? ["Stryker was here"] : (stryCov_9fa48("2739"), []);
        for (let i = 0; stryMutAct_9fa48("2742") ? i >= tags.length : stryMutAct_9fa48("2741") ? i <= tags.length : stryMutAct_9fa48("2740") ? false : (stryCov_9fa48("2740", "2741", "2742"), i < tags.length); stryMutAct_9fa48("2743") ? i -= 1 : (stryCov_9fa48("2743"), i += 1)) {
          if (stryMutAct_9fa48("2744")) {
            {}
          } else {
            stryCov_9fa48("2744");
            if (stryMutAct_9fa48("2747") ? tags[i].value || tags[i].value.toLowerCase().startsWith(query) : stryMutAct_9fa48("2746") ? false : stryMutAct_9fa48("2745") ? true : (stryCov_9fa48("2745", "2746", "2747"), tags[i].value && (stryMutAct_9fa48("2749") ? tags[i].value.toUpperCase().startsWith(query) : stryMutAct_9fa48("2748") ? tags[i].value.toLowerCase().endsWith(query) : (stryCov_9fa48("2748", "2749"), tags[i].value.toLowerCase().startsWith(query))))) {
              if (stryMutAct_9fa48("2750")) {
                {}
              } else {
                stryCov_9fa48("2750");
                matches.push(tags[i]);
                if (stryMutAct_9fa48("2754") ? matches.length <= 39 : stryMutAct_9fa48("2753") ? matches.length >= 39 : stryMutAct_9fa48("2752") ? false : stryMutAct_9fa48("2751") ? true : (stryCov_9fa48("2751", "2752", "2753", "2754"), matches.length > 39)) {
                  if (stryMutAct_9fa48("2755")) {
                    {}
                  } else {
                    stryCov_9fa48("2755");
                    break;
                  }
                }
              }
            }
          }
        }
        stryMutAct_9fa48("2756") ? matches : (stryCov_9fa48("2756"), matches.sort((a, b) => {
          if (stryMutAct_9fa48("2757")) {
            {}
          } else {
            stryCov_9fa48("2757");
            if (stryMutAct_9fa48("2761") ? a.value >= b.value : stryMutAct_9fa48("2760") ? a.value <= b.value : stryMutAct_9fa48("2759") ? false : stryMutAct_9fa48("2758") ? true : (stryCov_9fa48("2758", "2759", "2760", "2761"), a.value < b.value)) {
              if (stryMutAct_9fa48("2762")) {
                {}
              } else {
                stryCov_9fa48("2762");
                return stryMutAct_9fa48("2763") ? +1 : (stryCov_9fa48("2763"), -1);
              }
            } else if (stryMutAct_9fa48("2767") ? a.value <= b.value : stryMutAct_9fa48("2766") ? a.value >= b.value : stryMutAct_9fa48("2765") ? false : stryMutAct_9fa48("2764") ? true : (stryCov_9fa48("2764", "2765", "2766", "2767"), a.value > b.value)) {
              if (stryMutAct_9fa48("2768")) {
                {}
              } else {
                stryCov_9fa48("2768");
                return 1;
              }
            }
            return 0;
          }
        }));
        return stryMutAct_9fa48("2769") ? {} : (stryCov_9fa48("2769"), {
          matches: matches
        });
      }
    }
    Topics.searchAndLoadTags = async function (data) {
      if (stryMutAct_9fa48("2770")) {
        {}
      } else {
        stryCov_9fa48("2770");
        const searchResult = stryMutAct_9fa48("2771") ? {} : (stryCov_9fa48("2771"), {
          tags: stryMutAct_9fa48("2772") ? ["Stryker was here"] : (stryCov_9fa48("2772"), []),
          matchCount: 0,
          pageCount: 1
        });
        if (stryMutAct_9fa48("2775") ? (!data || !data.query) && !data.query.length : stryMutAct_9fa48("2774") ? false : stryMutAct_9fa48("2773") ? true : (stryCov_9fa48("2773", "2774", "2775"), (stryMutAct_9fa48("2777") ? !data && !data.query : stryMutAct_9fa48("2776") ? false : (stryCov_9fa48("2776", "2777"), (stryMutAct_9fa48("2778") ? data : (stryCov_9fa48("2778"), !data)) || (stryMutAct_9fa48("2779") ? data.query : (stryCov_9fa48("2779"), !data.query)))) || (stryMutAct_9fa48("2780") ? data.query.length : (stryCov_9fa48("2780"), !data.query.length)))) {
          if (stryMutAct_9fa48("2781")) {
            {}
          } else {
            stryCov_9fa48("2781");
            return searchResult;
          }
        }
        const tags = await Topics.searchTags(data);
        const tagData = await Topics.getTagData(tags.map(stryMutAct_9fa48("2782") ? () => undefined : (stryCov_9fa48("2782"), tag => stryMutAct_9fa48("2783") ? {} : (stryCov_9fa48("2783"), {
          value: tag.value
        }))));
        tagData.forEach((tag, index) => {
          if (stryMutAct_9fa48("2784")) {
            {}
          } else {
            stryCov_9fa48("2784");
            tag.score = tags[index].score;
          }
        });
        stryMutAct_9fa48("2785") ? tagData : (stryCov_9fa48("2785"), tagData.sort(stryMutAct_9fa48("2786") ? () => undefined : (stryCov_9fa48("2786"), (a, b) => stryMutAct_9fa48("2787") ? b.score + a.score : (stryCov_9fa48("2787"), b.score - a.score))));
        searchResult.tags = tagData;
        searchResult.matchCount = tagData.length;
        searchResult.pageCount = 1;
        return searchResult;
      }
    };
    Topics.getRelatedTopics = async function (topicData, uid) {
      if (stryMutAct_9fa48("2788")) {
        {}
      } else {
        stryCov_9fa48("2788");
        if (stryMutAct_9fa48("2790") ? false : stryMutAct_9fa48("2789") ? true : (stryCov_9fa48("2789", "2790"), plugins.hooks.hasListeners(stryMutAct_9fa48("2791") ? "" : (stryCov_9fa48("2791"), 'filter:topic.getRelatedTopics')))) {
          if (stryMutAct_9fa48("2792")) {
            {}
          } else {
            stryCov_9fa48("2792");
            const result = await plugins.hooks.fire(stryMutAct_9fa48("2793") ? "" : (stryCov_9fa48("2793"), 'filter:topic.getRelatedTopics'), stryMutAct_9fa48("2794") ? {} : (stryCov_9fa48("2794"), {
              topic: topicData,
              uid: uid,
              topics: stryMutAct_9fa48("2795") ? ["Stryker was here"] : (stryCov_9fa48("2795"), [])
            }));
            return result.topics;
          }
        }
        let maximumTopics = meta.config.maximumRelatedTopics;
        if (stryMutAct_9fa48("2798") ? (maximumTopics === 0 || !topicData.tags) && !topicData.tags.length : stryMutAct_9fa48("2797") ? false : stryMutAct_9fa48("2796") ? true : (stryCov_9fa48("2796", "2797", "2798"), (stryMutAct_9fa48("2800") ? maximumTopics === 0 && !topicData.tags : stryMutAct_9fa48("2799") ? false : (stryCov_9fa48("2799", "2800"), (stryMutAct_9fa48("2802") ? maximumTopics !== 0 : stryMutAct_9fa48("2801") ? false : (stryCov_9fa48("2801", "2802"), maximumTopics === 0)) || (stryMutAct_9fa48("2803") ? topicData.tags : (stryCov_9fa48("2803"), !topicData.tags)))) || (stryMutAct_9fa48("2804") ? topicData.tags.length : (stryCov_9fa48("2804"), !topicData.tags.length)))) {
          if (stryMutAct_9fa48("2805")) {
            {}
          } else {
            stryCov_9fa48("2805");
            return stryMutAct_9fa48("2806") ? ["Stryker was here"] : (stryCov_9fa48("2806"), []);
          }
        }
        maximumTopics = stryMutAct_9fa48("2809") ? maximumTopics && 5 : stryMutAct_9fa48("2808") ? false : stryMutAct_9fa48("2807") ? true : (stryCov_9fa48("2807", "2808", "2809"), maximumTopics || 5);
        let tids = await Promise.all(topicData.tags.map(stryMutAct_9fa48("2810") ? () => undefined : (stryCov_9fa48("2810"), tag => Topics.getTagTids(tag.value, 0, 5))));
        tids = stryMutAct_9fa48("2811") ? _.shuffle(_.uniq(_.flatten(tids))) : (stryCov_9fa48("2811"), _.shuffle(_.uniq(_.flatten(tids))).slice(0, maximumTopics));
        const topics = await Topics.getTopics(tids, uid);
        return stryMutAct_9fa48("2812") ? topics : (stryCov_9fa48("2812"), topics.filter(stryMutAct_9fa48("2813") ? () => undefined : (stryCov_9fa48("2813"), t => stryMutAct_9fa48("2816") ? t && !t.deleted || parseInt(t.uid, 10) !== parseInt(uid, 10) : stryMutAct_9fa48("2815") ? false : stryMutAct_9fa48("2814") ? true : (stryCov_9fa48("2814", "2815", "2816"), (stryMutAct_9fa48("2818") ? t || !t.deleted : stryMutAct_9fa48("2817") ? true : (stryCov_9fa48("2817", "2818"), t && (stryMutAct_9fa48("2819") ? t.deleted : (stryCov_9fa48("2819"), !t.deleted)))) && (stryMutAct_9fa48("2821") ? parseInt(t.uid, 10) === parseInt(uid, 10) : stryMutAct_9fa48("2820") ? true : (stryCov_9fa48("2820", "2821"), parseInt(t.uid, 10) !== parseInt(uid, 10)))))));
      }
    };
  }
};