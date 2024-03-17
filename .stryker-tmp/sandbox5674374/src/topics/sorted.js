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
const privileges = require('../privileges');
const user = require('../user');
const categories = require('../categories');
const meta = require('../meta');
const plugins = require('../plugins');
module.exports = function (Topics) {
  if (stryMutAct_9fa48("1948")) {
    {}
  } else {
    stryCov_9fa48("1948");
    Topics.getSortedTopics = async function (params) {
      if (stryMutAct_9fa48("1949")) {
        {}
      } else {
        stryCov_9fa48("1949");
        const data = stryMutAct_9fa48("1950") ? {} : (stryCov_9fa48("1950"), {
          nextStart: 0,
          topicCount: 0,
          topics: stryMutAct_9fa48("1951") ? ["Stryker was here"] : (stryCov_9fa48("1951"), [])
        });
        params.term = stryMutAct_9fa48("1954") ? params.term && 'alltime' : stryMutAct_9fa48("1953") ? false : stryMutAct_9fa48("1952") ? true : (stryCov_9fa48("1952", "1953", "1954"), params.term || (stryMutAct_9fa48("1955") ? "" : (stryCov_9fa48("1955"), 'alltime')));
        params.sort = stryMutAct_9fa48("1958") ? params.sort && 'recent' : stryMutAct_9fa48("1957") ? false : stryMutAct_9fa48("1956") ? true : (stryCov_9fa48("1956", "1957", "1958"), params.sort || (stryMutAct_9fa48("1959") ? "" : (stryCov_9fa48("1959"), 'recent')));
        params.query = stryMutAct_9fa48("1962") ? params.query && {} : stryMutAct_9fa48("1961") ? false : stryMutAct_9fa48("1960") ? true : (stryCov_9fa48("1960", "1961", "1962"), params.query || {});
        if (stryMutAct_9fa48("1965") ? params.hasOwnProperty('cids') && params.cids || !Array.isArray(params.cids) : stryMutAct_9fa48("1964") ? false : stryMutAct_9fa48("1963") ? true : (stryCov_9fa48("1963", "1964", "1965"), (stryMutAct_9fa48("1967") ? params.hasOwnProperty('cids') || params.cids : stryMutAct_9fa48("1966") ? true : (stryCov_9fa48("1966", "1967"), params.hasOwnProperty(stryMutAct_9fa48("1968") ? "" : (stryCov_9fa48("1968"), 'cids')) && params.cids)) && (stryMutAct_9fa48("1969") ? Array.isArray(params.cids) : (stryCov_9fa48("1969"), !Array.isArray(params.cids))))) {
          if (stryMutAct_9fa48("1970")) {
            {}
          } else {
            stryCov_9fa48("1970");
            params.cids = stryMutAct_9fa48("1971") ? [] : (stryCov_9fa48("1971"), [params.cids]);
          }
        }
        params.tags = stryMutAct_9fa48("1974") ? params.tags && [] : stryMutAct_9fa48("1973") ? false : stryMutAct_9fa48("1972") ? true : (stryCov_9fa48("1972", "1973", "1974"), params.tags || (stryMutAct_9fa48("1975") ? ["Stryker was here"] : (stryCov_9fa48("1975"), [])));
        if (stryMutAct_9fa48("1978") ? params.tags || !Array.isArray(params.tags) : stryMutAct_9fa48("1977") ? false : stryMutAct_9fa48("1976") ? true : (stryCov_9fa48("1976", "1977", "1978"), params.tags && (stryMutAct_9fa48("1979") ? Array.isArray(params.tags) : (stryCov_9fa48("1979"), !Array.isArray(params.tags))))) {
          if (stryMutAct_9fa48("1980")) {
            {}
          } else {
            stryCov_9fa48("1980");
            params.tags = stryMutAct_9fa48("1981") ? [] : (stryCov_9fa48("1981"), [params.tags]);
          }
        }
        data.tids = await getTids(params);
        data.tids = await sortTids(data.tids, params);
        data.tids = await filterTids(stryMutAct_9fa48("1982") ? data.tids : (stryCov_9fa48("1982"), data.tids.slice(0, meta.config.recentMaxTopics)), params);
        data.topicCount = data.tids.length;
        data.topics = await getTopics(data.tids, params);
        data.nextStart = stryMutAct_9fa48("1983") ? params.stop - 1 : (stryCov_9fa48("1983"), params.stop + 1);
        return data;
      }
    };
    async function getTids(params) {
      if (stryMutAct_9fa48("1984")) {
        {}
      } else {
        stryCov_9fa48("1984");
        if (stryMutAct_9fa48("1986") ? false : stryMutAct_9fa48("1985") ? true : (stryCov_9fa48("1985", "1986"), plugins.hooks.hasListeners(stryMutAct_9fa48("1987") ? "" : (stryCov_9fa48("1987"), 'filter:topics.getSortedTids')))) {
          if (stryMutAct_9fa48("1988")) {
            {}
          } else {
            stryCov_9fa48("1988");
            const result = await plugins.hooks.fire(stryMutAct_9fa48("1989") ? "" : (stryCov_9fa48("1989"), 'filter:topics.getSortedTids'), stryMutAct_9fa48("1990") ? {} : (stryCov_9fa48("1990"), {
              params: params,
              tids: stryMutAct_9fa48("1991") ? ["Stryker was here"] : (stryCov_9fa48("1991"), [])
            }));
            return result.tids;
          }
        }
        let tids = stryMutAct_9fa48("1992") ? ["Stryker was here"] : (stryCov_9fa48("1992"), []);
        if (stryMutAct_9fa48("1995") ? params.term === 'alltime' : stryMutAct_9fa48("1994") ? false : stryMutAct_9fa48("1993") ? true : (stryCov_9fa48("1993", "1994", "1995"), params.term !== (stryMutAct_9fa48("1996") ? "" : (stryCov_9fa48("1996"), 'alltime')))) {
          if (stryMutAct_9fa48("1997")) {
            {}
          } else {
            stryCov_9fa48("1997");
            tids = await Topics.getLatestTidsFromSet(stryMutAct_9fa48("1998") ? "" : (stryCov_9fa48("1998"), 'topics:tid'), 0, stryMutAct_9fa48("1999") ? +1 : (stryCov_9fa48("1999"), -1), params.term);
            if (stryMutAct_9fa48("2002") ? params.filter !== 'watched' : stryMutAct_9fa48("2001") ? false : stryMutAct_9fa48("2000") ? true : (stryCov_9fa48("2000", "2001", "2002"), params.filter === (stryMutAct_9fa48("2003") ? "" : (stryCov_9fa48("2003"), 'watched')))) {
              if (stryMutAct_9fa48("2004")) {
                {}
              } else {
                stryCov_9fa48("2004");
                tids = await Topics.filterWatchedTids(tids, params.uid);
              }
            }
          }
        } else if (stryMutAct_9fa48("2007") ? params.filter !== 'watched' : stryMutAct_9fa48("2006") ? false : stryMutAct_9fa48("2005") ? true : (stryCov_9fa48("2005", "2006", "2007"), params.filter === (stryMutAct_9fa48("2008") ? "" : (stryCov_9fa48("2008"), 'watched')))) {
          if (stryMutAct_9fa48("2009")) {
            {}
          } else {
            stryCov_9fa48("2009");
            tids = await db.getSortedSetRevRange(stryMutAct_9fa48("2010") ? `` : (stryCov_9fa48("2010"), `uid:${params.uid}:followed_tids`), 0, stryMutAct_9fa48("2011") ? +1 : (stryCov_9fa48("2011"), -1));
          }
        } else if (stryMutAct_9fa48("2013") ? false : stryMutAct_9fa48("2012") ? true : (stryCov_9fa48("2012", "2013"), params.cids)) {
          if (stryMutAct_9fa48("2014")) {
            {}
          } else {
            stryCov_9fa48("2014");
            tids = await getCidTids(params);
          }
        } else if (stryMutAct_9fa48("2016") ? false : stryMutAct_9fa48("2015") ? true : (stryCov_9fa48("2015", "2016"), params.tags.length)) {
          if (stryMutAct_9fa48("2017")) {
            {}
          } else {
            stryCov_9fa48("2017");
            tids = await getTagTids(params);
          }
        } else if (stryMutAct_9fa48("2020") ? params.sort !== 'old' : stryMutAct_9fa48("2019") ? false : stryMutAct_9fa48("2018") ? true : (stryCov_9fa48("2018", "2019", "2020"), params.sort === (stryMutAct_9fa48("2021") ? "" : (stryCov_9fa48("2021"), 'old')))) {
          if (stryMutAct_9fa48("2022")) {
            {}
          } else {
            stryCov_9fa48("2022");
            tids = await db.getSortedSetRange(stryMutAct_9fa48("2023") ? `` : (stryCov_9fa48("2023"), `topics:recent`), 0, stryMutAct_9fa48("2024") ? meta.config.recentMaxTopics + 1 : (stryCov_9fa48("2024"), meta.config.recentMaxTopics - 1));
          }
        } else {
          if (stryMutAct_9fa48("2025")) {
            {}
          } else {
            stryCov_9fa48("2025");
            tids = await db.getSortedSetRevRange(stryMutAct_9fa48("2026") ? `` : (stryCov_9fa48("2026"), `topics:${params.sort}`), 0, stryMutAct_9fa48("2027") ? meta.config.recentMaxTopics + 1 : (stryCov_9fa48("2027"), meta.config.recentMaxTopics - 1));
          }
        }
        return tids;
      }
    }
    async function getTagTids(params) {
      if (stryMutAct_9fa48("2028")) {
        {}
      } else {
        stryCov_9fa48("2028");
        const sets = stryMutAct_9fa48("2029") ? [] : (stryCov_9fa48("2029"), [(stryMutAct_9fa48("2032") ? params.sort !== 'old' : stryMutAct_9fa48("2031") ? false : stryMutAct_9fa48("2030") ? true : (stryCov_9fa48("2030", "2031", "2032"), params.sort === (stryMutAct_9fa48("2033") ? "" : (stryCov_9fa48("2033"), 'old')))) ? stryMutAct_9fa48("2034") ? "" : (stryCov_9fa48("2034"), 'topics:recent') : stryMutAct_9fa48("2035") ? `` : (stryCov_9fa48("2035"), `topics:${params.sort}`), ...params.tags.map(stryMutAct_9fa48("2036") ? () => undefined : (stryCov_9fa48("2036"), tag => stryMutAct_9fa48("2037") ? `` : (stryCov_9fa48("2037"), `tag:${tag}:topics`)))]);
        const method = (stryMutAct_9fa48("2040") ? params.sort !== 'old' : stryMutAct_9fa48("2039") ? false : stryMutAct_9fa48("2038") ? true : (stryCov_9fa48("2038", "2039", "2040"), params.sort === (stryMutAct_9fa48("2041") ? "" : (stryCov_9fa48("2041"), 'old')))) ? stryMutAct_9fa48("2042") ? "" : (stryCov_9fa48("2042"), 'getSortedSetIntersect') : stryMutAct_9fa48("2043") ? "" : (stryCov_9fa48("2043"), 'getSortedSetRevIntersect');
        return await db[method](stryMutAct_9fa48("2044") ? {} : (stryCov_9fa48("2044"), {
          sets: sets,
          start: 0,
          stop: stryMutAct_9fa48("2045") ? meta.config.recentMaxTopics + 1 : (stryCov_9fa48("2045"), meta.config.recentMaxTopics - 1),
          weights: sets.map(stryMutAct_9fa48("2046") ? () => undefined : (stryCov_9fa48("2046"), (s, index) => index ? 0 : 1))
        }));
      }
    }
    async function getCidTids(params) {
      if (stryMutAct_9fa48("2047")) {
        {}
      } else {
        stryCov_9fa48("2047");
        if (stryMutAct_9fa48("2049") ? false : stryMutAct_9fa48("2048") ? true : (stryCov_9fa48("2048", "2049"), params.tags.length)) {
          if (stryMutAct_9fa48("2050")) {
            {}
          } else {
            stryCov_9fa48("2050");
            return _.intersection(...(await Promise.all(params.tags.map(async tag => {
              if (stryMutAct_9fa48("2051")) {
                {}
              } else {
                stryCov_9fa48("2051");
                const sets = params.cids.map(stryMutAct_9fa48("2052") ? () => undefined : (stryCov_9fa48("2052"), cid => stryMutAct_9fa48("2053") ? `` : (stryCov_9fa48("2053"), `cid:${cid}:tag:${tag}:topics`)));
                return await db.getSortedSetRevRange(sets, 0, stryMutAct_9fa48("2054") ? +1 : (stryCov_9fa48("2054"), -1));
              }
            }))));
          }
        }
        const sets = stryMutAct_9fa48("2055") ? ["Stryker was here"] : (stryCov_9fa48("2055"), []);
        const pinnedSets = stryMutAct_9fa48("2056") ? ["Stryker was here"] : (stryCov_9fa48("2056"), []);
        params.cids.forEach(cid => {
          if (stryMutAct_9fa48("2057")) {
            {}
          } else {
            stryCov_9fa48("2057");
            if (stryMutAct_9fa48("2060") ? params.sort === 'recent' && params.sort === 'old' : stryMutAct_9fa48("2059") ? false : stryMutAct_9fa48("2058") ? true : (stryCov_9fa48("2058", "2059", "2060"), (stryMutAct_9fa48("2062") ? params.sort !== 'recent' : stryMutAct_9fa48("2061") ? false : (stryCov_9fa48("2061", "2062"), params.sort === (stryMutAct_9fa48("2063") ? "" : (stryCov_9fa48("2063"), 'recent')))) || (stryMutAct_9fa48("2065") ? params.sort !== 'old' : stryMutAct_9fa48("2064") ? false : (stryCov_9fa48("2064", "2065"), params.sort === (stryMutAct_9fa48("2066") ? "" : (stryCov_9fa48("2066"), 'old')))))) {
              if (stryMutAct_9fa48("2067")) {
                {}
              } else {
                stryCov_9fa48("2067");
                sets.push(stryMutAct_9fa48("2068") ? `` : (stryCov_9fa48("2068"), `cid:${cid}:tids`));
              }
            } else {
              if (stryMutAct_9fa48("2069")) {
                {}
              } else {
                stryCov_9fa48("2069");
                sets.push(stryMutAct_9fa48("2070") ? `` : (stryCov_9fa48("2070"), `cid:${cid}:tids${params.sort ? stryMutAct_9fa48("2071") ? `` : (stryCov_9fa48("2071"), `:${params.sort}`) : stryMutAct_9fa48("2072") ? "Stryker was here!" : (stryCov_9fa48("2072"), '')}`));
              }
            }
            pinnedSets.push(stryMutAct_9fa48("2073") ? `` : (stryCov_9fa48("2073"), `cid:${cid}:tids:pinned`));
          }
        });
        let pinnedTids = await db.getSortedSetRevRange(pinnedSets, 0, stryMutAct_9fa48("2074") ? +1 : (stryCov_9fa48("2074"), -1));
        pinnedTids = await Topics.tools.checkPinExpiry(pinnedTids);
        const method = (stryMutAct_9fa48("2077") ? params.sort !== 'old' : stryMutAct_9fa48("2076") ? false : stryMutAct_9fa48("2075") ? true : (stryCov_9fa48("2075", "2076", "2077"), params.sort === (stryMutAct_9fa48("2078") ? "" : (stryCov_9fa48("2078"), 'old')))) ? stryMutAct_9fa48("2079") ? "" : (stryCov_9fa48("2079"), 'getSortedSetRange') : stryMutAct_9fa48("2080") ? "" : (stryCov_9fa48("2080"), 'getSortedSetRevRange');
        const tids = await db[method](sets, 0, stryMutAct_9fa48("2081") ? meta.config.recentMaxTopics + 1 : (stryCov_9fa48("2081"), meta.config.recentMaxTopics - 1));
        return pinnedTids.concat(tids);
      }
    }
    async function sortTids(tids, params) {
      if (stryMutAct_9fa48("2082")) {
        {}
      } else {
        stryCov_9fa48("2082");
        if (stryMutAct_9fa48("2085") ? params.term === 'alltime' && !params.cids && !params.tags.length && params.filter !== 'watched' || !params.floatPinned : stryMutAct_9fa48("2084") ? false : stryMutAct_9fa48("2083") ? true : (stryCov_9fa48("2083", "2084", "2085"), (stryMutAct_9fa48("2087") ? params.term === 'alltime' && !params.cids && !params.tags.length || params.filter !== 'watched' : stryMutAct_9fa48("2086") ? true : (stryCov_9fa48("2086", "2087"), (stryMutAct_9fa48("2089") ? params.term === 'alltime' && !params.cids || !params.tags.length : stryMutAct_9fa48("2088") ? true : (stryCov_9fa48("2088", "2089"), (stryMutAct_9fa48("2091") ? params.term === 'alltime' || !params.cids : stryMutAct_9fa48("2090") ? true : (stryCov_9fa48("2090", "2091"), (stryMutAct_9fa48("2093") ? params.term !== 'alltime' : stryMutAct_9fa48("2092") ? true : (stryCov_9fa48("2092", "2093"), params.term === (stryMutAct_9fa48("2094") ? "" : (stryCov_9fa48("2094"), 'alltime')))) && (stryMutAct_9fa48("2095") ? params.cids : (stryCov_9fa48("2095"), !params.cids)))) && (stryMutAct_9fa48("2096") ? params.tags.length : (stryCov_9fa48("2096"), !params.tags.length)))) && (stryMutAct_9fa48("2098") ? params.filter === 'watched' : stryMutAct_9fa48("2097") ? true : (stryCov_9fa48("2097", "2098"), params.filter !== (stryMutAct_9fa48("2099") ? "" : (stryCov_9fa48("2099"), 'watched')))))) && (stryMutAct_9fa48("2100") ? params.floatPinned : (stryCov_9fa48("2100"), !params.floatPinned)))) {
          if (stryMutAct_9fa48("2101")) {
            {}
          } else {
            stryCov_9fa48("2101");
            return tids;
          }
        }
        const topicData = await Topics.getTopicsFields(tids, stryMutAct_9fa48("2102") ? [] : (stryCov_9fa48("2102"), [stryMutAct_9fa48("2103") ? "" : (stryCov_9fa48("2103"), 'tid'), stryMutAct_9fa48("2104") ? "" : (stryCov_9fa48("2104"), 'lastposttime'), stryMutAct_9fa48("2105") ? "" : (stryCov_9fa48("2105"), 'upvotes'), stryMutAct_9fa48("2106") ? "" : (stryCov_9fa48("2106"), 'downvotes'), stryMutAct_9fa48("2107") ? "" : (stryCov_9fa48("2107"), 'postcount'), stryMutAct_9fa48("2108") ? "" : (stryCov_9fa48("2108"), 'pinned')]));
        const sortMap = stryMutAct_9fa48("2109") ? {} : (stryCov_9fa48("2109"), {
          recent: sortRecent,
          old: sortOld,
          posts: sortPopular,
          votes: sortVotes,
          views: sortViews
        });
        const sortFn = stryMutAct_9fa48("2112") ? sortMap[params.sort] && sortRecent : stryMutAct_9fa48("2111") ? false : stryMutAct_9fa48("2110") ? true : (stryCov_9fa48("2110", "2111", "2112"), sortMap[params.sort] || sortRecent);
        if (stryMutAct_9fa48("2114") ? false : stryMutAct_9fa48("2113") ? true : (stryCov_9fa48("2113", "2114"), params.floatPinned)) {
          if (stryMutAct_9fa48("2115")) {
            {}
          } else {
            stryCov_9fa48("2115");
            floatPinned(topicData, sortFn);
          }
        } else {
          if (stryMutAct_9fa48("2116")) {
            {}
          } else {
            stryCov_9fa48("2116");
            stryMutAct_9fa48("2117") ? topicData : (stryCov_9fa48("2117"), topicData.sort(sortFn));
          }
        }
        return topicData.map(stryMutAct_9fa48("2118") ? () => undefined : (stryCov_9fa48("2118"), topic => stryMutAct_9fa48("2121") ? topic || topic.tid : stryMutAct_9fa48("2120") ? false : stryMutAct_9fa48("2119") ? true : (stryCov_9fa48("2119", "2120", "2121"), topic && topic.tid)));
      }
    }
    function floatPinned(topicData, sortFn) {
      if (stryMutAct_9fa48("2122")) {
        {}
      } else {
        stryCov_9fa48("2122");
        stryMutAct_9fa48("2123") ? topicData : (stryCov_9fa48("2123"), topicData.sort(stryMutAct_9fa48("2124") ? () => undefined : (stryCov_9fa48("2124"), (a, b) => (stryMutAct_9fa48("2127") ? a.pinned === b.pinned : stryMutAct_9fa48("2126") ? false : stryMutAct_9fa48("2125") ? true : (stryCov_9fa48("2125", "2126", "2127"), a.pinned !== b.pinned)) ? stryMutAct_9fa48("2128") ? b.pinned + a.pinned : (stryCov_9fa48("2128"), b.pinned - a.pinned) : sortFn(a, b))));
      }
    }
    function sortRecent(a, b) {
      if (stryMutAct_9fa48("2129")) {
        {}
      } else {
        stryCov_9fa48("2129");
        return stryMutAct_9fa48("2130") ? b.lastposttime + a.lastposttime : (stryCov_9fa48("2130"), b.lastposttime - a.lastposttime);
      }
    }
    function sortOld(a, b) {
      if (stryMutAct_9fa48("2131")) {
        {}
      } else {
        stryCov_9fa48("2131");
        return stryMutAct_9fa48("2132") ? a.lastposttime + b.lastposttime : (stryCov_9fa48("2132"), a.lastposttime - b.lastposttime);
      }
    }
    function sortVotes(a, b) {
      if (stryMutAct_9fa48("2133")) {
        {}
      } else {
        stryCov_9fa48("2133");
        if (stryMutAct_9fa48("2136") ? a.votes === b.votes : stryMutAct_9fa48("2135") ? false : stryMutAct_9fa48("2134") ? true : (stryCov_9fa48("2134", "2135", "2136"), a.votes !== b.votes)) {
          if (stryMutAct_9fa48("2137")) {
            {}
          } else {
            stryCov_9fa48("2137");
            return stryMutAct_9fa48("2138") ? b.votes + a.votes : (stryCov_9fa48("2138"), b.votes - a.votes);
          }
        }
        return stryMutAct_9fa48("2139") ? b.postcount + a.postcount : (stryCov_9fa48("2139"), b.postcount - a.postcount);
      }
    }
    function sortPopular(a, b) {
      if (stryMutAct_9fa48("2140")) {
        {}
      } else {
        stryCov_9fa48("2140");
        if (stryMutAct_9fa48("2143") ? a.postcount === b.postcount : stryMutAct_9fa48("2142") ? false : stryMutAct_9fa48("2141") ? true : (stryCov_9fa48("2141", "2142", "2143"), a.postcount !== b.postcount)) {
          if (stryMutAct_9fa48("2144")) {
            {}
          } else {
            stryCov_9fa48("2144");
            return stryMutAct_9fa48("2145") ? b.postcount + a.postcount : (stryCov_9fa48("2145"), b.postcount - a.postcount);
          }
        }
        return stryMutAct_9fa48("2146") ? b.viewcount + a.viewcount : (stryCov_9fa48("2146"), b.viewcount - a.viewcount);
      }
    }
    function sortViews(a, b) {
      if (stryMutAct_9fa48("2147")) {
        {}
      } else {
        stryCov_9fa48("2147");
        return stryMutAct_9fa48("2148") ? b.viewcount + a.viewcount : (stryCov_9fa48("2148"), b.viewcount - a.viewcount);
      }
    }
    async function filterTids(tids, params) {
      if (stryMutAct_9fa48("2149")) {
        {}
      } else {
        stryCov_9fa48("2149");
        const {
          filter
        } = params;
        const {
          uid
        } = params;
        if (stryMutAct_9fa48("2152") ? filter !== 'new' : stryMutAct_9fa48("2151") ? false : stryMutAct_9fa48("2150") ? true : (stryCov_9fa48("2150", "2151", "2152"), filter === (stryMutAct_9fa48("2153") ? "" : (stryCov_9fa48("2153"), 'new')))) {
          if (stryMutAct_9fa48("2154")) {
            {}
          } else {
            stryCov_9fa48("2154");
            tids = await Topics.filterNewTids(tids, uid);
          }
        } else if (stryMutAct_9fa48("2157") ? filter !== 'unreplied' : stryMutAct_9fa48("2156") ? false : stryMutAct_9fa48("2155") ? true : (stryCov_9fa48("2155", "2156", "2157"), filter === (stryMutAct_9fa48("2158") ? "" : (stryCov_9fa48("2158"), 'unreplied')))) {
          if (stryMutAct_9fa48("2159")) {
            {}
          } else {
            stryCov_9fa48("2159");
            tids = await Topics.filterUnrepliedTids(tids);
          }
        } else {
          if (stryMutAct_9fa48("2160")) {
            {}
          } else {
            stryCov_9fa48("2160");
            tids = await Topics.filterNotIgnoredTids(tids, uid);
          }
        }
        tids = await privileges.topics.filterTids(stryMutAct_9fa48("2161") ? "" : (stryCov_9fa48("2161"), 'topics:read'), tids, uid);
        let topicData = await Topics.getTopicsFields(tids, stryMutAct_9fa48("2162") ? [] : (stryCov_9fa48("2162"), [stryMutAct_9fa48("2163") ? "" : (stryCov_9fa48("2163"), 'uid'), stryMutAct_9fa48("2164") ? "" : (stryCov_9fa48("2164"), 'tid'), stryMutAct_9fa48("2165") ? "" : (stryCov_9fa48("2165"), 'cid')]));
        const topicCids = stryMutAct_9fa48("2166") ? _.uniq(topicData.map(topic => topic.cid)) : (stryCov_9fa48("2166"), _.uniq(topicData.map(stryMutAct_9fa48("2167") ? () => undefined : (stryCov_9fa48("2167"), topic => topic.cid))).filter(Boolean));
        async function getIgnoredCids() {
          if (stryMutAct_9fa48("2168")) {
            {}
          } else {
            stryCov_9fa48("2168");
            if (stryMutAct_9fa48("2171") ? (params.cids || filter === 'watched') && meta.config.disableRecentCategoryFilter : stryMutAct_9fa48("2170") ? false : stryMutAct_9fa48("2169") ? true : (stryCov_9fa48("2169", "2170", "2171"), (stryMutAct_9fa48("2173") ? params.cids && filter === 'watched' : stryMutAct_9fa48("2172") ? false : (stryCov_9fa48("2172", "2173"), params.cids || (stryMutAct_9fa48("2175") ? filter !== 'watched' : stryMutAct_9fa48("2174") ? false : (stryCov_9fa48("2174", "2175"), filter === (stryMutAct_9fa48("2176") ? "" : (stryCov_9fa48("2176"), 'watched')))))) || meta.config.disableRecentCategoryFilter)) {
              if (stryMutAct_9fa48("2177")) {
                {}
              } else {
                stryCov_9fa48("2177");
                return stryMutAct_9fa48("2178") ? ["Stryker was here"] : (stryCov_9fa48("2178"), []);
              }
            }
            return await categories.isIgnored(topicCids, uid);
          }
        }
        const [ignoredCids, filtered] = await Promise.all(stryMutAct_9fa48("2179") ? [] : (stryCov_9fa48("2179"), [getIgnoredCids(), stryMutAct_9fa48("2180") ? user.blocks : (stryCov_9fa48("2180"), user.blocks.filter(uid, topicData))]));
        const isCidIgnored = _.zipObject(topicCids, ignoredCids);
        topicData = filtered;
        const cids = stryMutAct_9fa48("2183") ? params.cids || params.cids.map(String) : stryMutAct_9fa48("2182") ? false : stryMutAct_9fa48("2181") ? true : (stryCov_9fa48("2181", "2182", "2183"), params.cids && params.cids.map(String));
        tids = stryMutAct_9fa48("2184") ? topicData.map(t => t.tid) : (stryCov_9fa48("2184"), topicData.filter(stryMutAct_9fa48("2185") ? () => undefined : (stryCov_9fa48("2185"), t => stryMutAct_9fa48("2188") ? t && t.cid && !isCidIgnored[t.cid] || !cids || cids.includes(String(t.cid)) : stryMutAct_9fa48("2187") ? false : stryMutAct_9fa48("2186") ? true : (stryCov_9fa48("2186", "2187", "2188"), (stryMutAct_9fa48("2190") ? t && t.cid || !isCidIgnored[t.cid] : stryMutAct_9fa48("2189") ? true : (stryCov_9fa48("2189", "2190"), (stryMutAct_9fa48("2192") ? t || t.cid : stryMutAct_9fa48("2191") ? true : (stryCov_9fa48("2191", "2192"), t && t.cid)) && (stryMutAct_9fa48("2193") ? isCidIgnored[t.cid] : (stryCov_9fa48("2193"), !isCidIgnored[t.cid])))) && (stryMutAct_9fa48("2195") ? !cids && cids.includes(String(t.cid)) : stryMutAct_9fa48("2194") ? true : (stryCov_9fa48("2194", "2195"), (stryMutAct_9fa48("2196") ? cids : (stryCov_9fa48("2196"), !cids)) || cids.includes(String(t.cid))))))).map(stryMutAct_9fa48("2197") ? () => undefined : (stryCov_9fa48("2197"), t => t.tid)));
        const result = await plugins.hooks.fire(stryMutAct_9fa48("2198") ? "" : (stryCov_9fa48("2198"), 'filter:topics.filterSortedTids'), stryMutAct_9fa48("2199") ? {} : (stryCov_9fa48("2199"), {
          tids: tids,
          params: params
        }));
        return result.tids;
      }
    }
    async function getTopics(tids, params) {
      if (stryMutAct_9fa48("2200")) {
        {}
      } else {
        stryCov_9fa48("2200");
        tids = stryMutAct_9fa48("2201") ? tids : (stryCov_9fa48("2201"), tids.slice(params.start, (stryMutAct_9fa48("2204") ? params.stop === -1 : stryMutAct_9fa48("2203") ? false : stryMutAct_9fa48("2202") ? true : (stryCov_9fa48("2202", "2203", "2204"), params.stop !== (stryMutAct_9fa48("2205") ? +1 : (stryCov_9fa48("2205"), -1)))) ? stryMutAct_9fa48("2206") ? params.stop - 1 : (stryCov_9fa48("2206"), params.stop + 1) : undefined));
        const topicData = await Topics.getTopicsByTids(tids, params);
        Topics.calculateTopicIndices(topicData, params.start);
        return topicData;
      }
    }
    Topics.calculateTopicIndices = function (topicData, start) {
      if (stryMutAct_9fa48("2207")) {
        {}
      } else {
        stryCov_9fa48("2207");
        topicData.forEach((topic, index) => {
          if (stryMutAct_9fa48("2208")) {
            {}
          } else {
            stryCov_9fa48("2208");
            if (stryMutAct_9fa48("2210") ? false : stryMutAct_9fa48("2209") ? true : (stryCov_9fa48("2209", "2210"), topic)) {
              if (stryMutAct_9fa48("2211")) {
                {}
              } else {
                stryCov_9fa48("2211");
                topic.index = stryMutAct_9fa48("2212") ? start - index : (stryCov_9fa48("2212"), start + index);
              }
            }
          }
        });
      }
    };
  }
};