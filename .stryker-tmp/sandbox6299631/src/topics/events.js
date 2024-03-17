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
const meta = require('../meta');
const user = require('../user');
const posts = require('../posts');
const categories = require('../categories');
const plugins = require('../plugins');
const translator = require('../translator');
const privileges = require('../privileges');
const Events = module.exports;

/**
 * Note: Plugins!
 *
 * You are able to define additional topic event types here.
 * Register to hook `filter:topicEvents.init` and append your custom type to the `types` object.
 * You can then log a custom topic event by calling `topics.events.log(tid, { type, uid });`
 * `uid` is optional; if you pass in a valid uid in the payload,
 * the user avatar/username will be rendered as part of the event text
 *
 */
Events._types = stryMutAct_9fa48("557") ? {} : (stryCov_9fa48("557"), {
  pin: stryMutAct_9fa48("558") ? {} : (stryCov_9fa48("558"), {
    icon: stryMutAct_9fa48("559") ? "" : (stryCov_9fa48("559"), 'fa-thumb-tack'),
    text: stryMutAct_9fa48("560") ? "" : (stryCov_9fa48("560"), '[[topic:pinned-by]]')
  }),
  unpin: stryMutAct_9fa48("561") ? {} : (stryCov_9fa48("561"), {
    icon: stryMutAct_9fa48("562") ? "" : (stryCov_9fa48("562"), 'fa-thumb-tack'),
    text: stryMutAct_9fa48("563") ? "" : (stryCov_9fa48("563"), '[[topic:unpinned-by]]')
  }),
  lock: stryMutAct_9fa48("564") ? {} : (stryCov_9fa48("564"), {
    icon: stryMutAct_9fa48("565") ? "" : (stryCov_9fa48("565"), 'fa-lock'),
    text: stryMutAct_9fa48("566") ? "" : (stryCov_9fa48("566"), '[[topic:locked-by]]')
  }),
  unlock: stryMutAct_9fa48("567") ? {} : (stryCov_9fa48("567"), {
    icon: stryMutAct_9fa48("568") ? "" : (stryCov_9fa48("568"), 'fa-unlock'),
    text: stryMutAct_9fa48("569") ? "" : (stryCov_9fa48("569"), '[[topic:unlocked-by]]')
  }),
  delete: stryMutAct_9fa48("570") ? {} : (stryCov_9fa48("570"), {
    icon: stryMutAct_9fa48("571") ? "" : (stryCov_9fa48("571"), 'fa-trash'),
    text: stryMutAct_9fa48("572") ? "" : (stryCov_9fa48("572"), '[[topic:deleted-by]]')
  }),
  restore: stryMutAct_9fa48("573") ? {} : (stryCov_9fa48("573"), {
    icon: stryMutAct_9fa48("574") ? "" : (stryCov_9fa48("574"), 'fa-trash-o'),
    text: stryMutAct_9fa48("575") ? "" : (stryCov_9fa48("575"), '[[topic:restored-by]]')
  }),
  move: stryMutAct_9fa48("576") ? {} : (stryCov_9fa48("576"), {
    icon: stryMutAct_9fa48("577") ? "" : (stryCov_9fa48("577"), 'fa-arrow-circle-right')
    // text: '[[topic:moved-from-by]]',
  }),
  'post-queue': stryMutAct_9fa48("578") ? {} : (stryCov_9fa48("578"), {
    icon: stryMutAct_9fa48("579") ? "" : (stryCov_9fa48("579"), 'fa-history'),
    text: stryMutAct_9fa48("580") ? "" : (stryCov_9fa48("580"), '[[topic:queued-by]]'),
    href: stryMutAct_9fa48("581") ? "" : (stryCov_9fa48("581"), '/post-queue')
  }),
  backlink: stryMutAct_9fa48("582") ? {} : (stryCov_9fa48("582"), {
    icon: stryMutAct_9fa48("583") ? "" : (stryCov_9fa48("583"), 'fa-link'),
    text: stryMutAct_9fa48("584") ? "" : (stryCov_9fa48("584"), '[[topic:backlink]]')
  }),
  fork: stryMutAct_9fa48("585") ? {} : (stryCov_9fa48("585"), {
    icon: stryMutAct_9fa48("586") ? "" : (stryCov_9fa48("586"), 'fa-code-fork'),
    text: stryMutAct_9fa48("587") ? "" : (stryCov_9fa48("587"), '[[topic:forked-by]]')
  })
});
Events.init = async () => {
  if (stryMutAct_9fa48("588")) {
    {}
  } else {
    stryCov_9fa48("588");
    // Allow plugins to define additional topic event types
    const {
      types
    } = await plugins.hooks.fire(stryMutAct_9fa48("589") ? "" : (stryCov_9fa48("589"), 'filter:topicEvents.init'), stryMutAct_9fa48("590") ? {} : (stryCov_9fa48("590"), {
      types: Events._types
    }));
    Events._types = types;
  }
};
Events.get = async (tid, uid, reverse = stryMutAct_9fa48("591") ? true : (stryCov_9fa48("591"), false)) => {
  if (stryMutAct_9fa48("592")) {
    {}
  } else {
    stryCov_9fa48("592");
    const topics = require('.');
    if (stryMutAct_9fa48("595") ? false : stryMutAct_9fa48("594") ? true : stryMutAct_9fa48("593") ? await topics.exists(tid) : (stryCov_9fa48("593", "594", "595"), !(await topics.exists(tid)))) {
      if (stryMutAct_9fa48("596")) {
        {}
      } else {
        stryCov_9fa48("596");
        throw new Error(stryMutAct_9fa48("597") ? "" : (stryCov_9fa48("597"), '[[error:no-topic]]'));
      }
    }
    let eventIds = await db.getSortedSetRangeWithScores(stryMutAct_9fa48("598") ? `` : (stryCov_9fa48("598"), `topic:${tid}:events`), 0, stryMutAct_9fa48("599") ? +1 : (stryCov_9fa48("599"), -1));
    const keys = eventIds.map(stryMutAct_9fa48("600") ? () => undefined : (stryCov_9fa48("600"), obj => stryMutAct_9fa48("601") ? `` : (stryCov_9fa48("601"), `topicEvent:${obj.value}`)));
    const timestamps = eventIds.map(stryMutAct_9fa48("602") ? () => undefined : (stryCov_9fa48("602"), obj => obj.score));
    eventIds = eventIds.map(stryMutAct_9fa48("603") ? () => undefined : (stryCov_9fa48("603"), obj => obj.value));
    let events = await db.getObjects(keys);
    events = await modifyEvent(stryMutAct_9fa48("604") ? {} : (stryCov_9fa48("604"), {
      tid,
      uid,
      eventIds,
      timestamps,
      events
    }));
    if (stryMutAct_9fa48("606") ? false : stryMutAct_9fa48("605") ? true : (stryCov_9fa48("605", "606"), reverse)) {
      if (stryMutAct_9fa48("607")) {
        {}
      } else {
        stryCov_9fa48("607");
        stryMutAct_9fa48("608") ? events : (stryCov_9fa48("608"), events.reverse());
      }
    }
    return events;
  }
};
async function getUserInfo(uids) {
  if (stryMutAct_9fa48("609")) {
    {}
  } else {
    stryCov_9fa48("609");
    uids = stryMutAct_9fa48("610") ? uids : (stryCov_9fa48("610"), uids.filter(stryMutAct_9fa48("611") ? () => undefined : (stryCov_9fa48("611"), (uid, idx) => stryMutAct_9fa48("614") ? !isNaN(parseInt(uid, 10)) || uids.indexOf(uid) === idx : stryMutAct_9fa48("613") ? false : stryMutAct_9fa48("612") ? true : (stryCov_9fa48("612", "613", "614"), (stryMutAct_9fa48("615") ? isNaN(parseInt(uid, 10)) : (stryCov_9fa48("615"), !isNaN(parseInt(uid, 10)))) && (stryMutAct_9fa48("617") ? uids.indexOf(uid) !== idx : stryMutAct_9fa48("616") ? true : (stryCov_9fa48("616", "617"), uids.indexOf(uid) === idx))))));
    const userData = await user.getUsersFields(uids, stryMutAct_9fa48("618") ? [] : (stryCov_9fa48("618"), [stryMutAct_9fa48("619") ? "" : (stryCov_9fa48("619"), 'picture'), stryMutAct_9fa48("620") ? "" : (stryCov_9fa48("620"), 'username'), stryMutAct_9fa48("621") ? "" : (stryCov_9fa48("621"), 'userslug')]));
    const userMap = userData.reduce(stryMutAct_9fa48("622") ? () => undefined : (stryCov_9fa48("622"), (memo, cur) => memo.set(cur.uid, cur)), new Map());
    userMap.set(stryMutAct_9fa48("623") ? "" : (stryCov_9fa48("623"), 'system'), stryMutAct_9fa48("624") ? {} : (stryCov_9fa48("624"), {
      system: stryMutAct_9fa48("625") ? false : (stryCov_9fa48("625"), true)
    }));
    return userMap;
  }
}
async function getCategoryInfo(cids) {
  if (stryMutAct_9fa48("626")) {
    {}
  } else {
    stryCov_9fa48("626");
    const uniqCids = _.uniq(cids);
    const catData = await categories.getCategoriesFields(uniqCids, stryMutAct_9fa48("627") ? [] : (stryCov_9fa48("627"), [stryMutAct_9fa48("628") ? "" : (stryCov_9fa48("628"), 'name'), stryMutAct_9fa48("629") ? "" : (stryCov_9fa48("629"), 'slug'), stryMutAct_9fa48("630") ? "" : (stryCov_9fa48("630"), 'icon'), stryMutAct_9fa48("631") ? "" : (stryCov_9fa48("631"), 'color'), stryMutAct_9fa48("632") ? "" : (stryCov_9fa48("632"), 'bgColor')]));
    return _.zipObject(uniqCids, catData);
  }
}
async function modifyEvent({
  tid,
  uid,
  eventIds,
  timestamps,
  events
}) {
  if (stryMutAct_9fa48("633")) {
    {}
  } else {
    stryCov_9fa48("633");
    // Add posts from post queue
    const isPrivileged = await user.isPrivileged(uid);
    if (stryMutAct_9fa48("635") ? false : stryMutAct_9fa48("634") ? true : (stryCov_9fa48("634", "635"), isPrivileged)) {
      if (stryMutAct_9fa48("636")) {
        {}
      } else {
        stryCov_9fa48("636");
        const queuedPosts = await posts.getQueuedPosts(stryMutAct_9fa48("637") ? {} : (stryCov_9fa48("637"), {
          tid
        }), stryMutAct_9fa48("638") ? {} : (stryCov_9fa48("638"), {
          metadata: stryMutAct_9fa48("639") ? true : (stryCov_9fa48("639"), false)
        }));
        events.push(...queuedPosts.map(stryMutAct_9fa48("640") ? () => undefined : (stryCov_9fa48("640"), item => stryMutAct_9fa48("641") ? {} : (stryCov_9fa48("641"), {
          type: stryMutAct_9fa48("642") ? "" : (stryCov_9fa48("642"), 'post-queue'),
          timestamp: stryMutAct_9fa48("645") ? item.data.timestamp && Date.now() : stryMutAct_9fa48("644") ? false : stryMutAct_9fa48("643") ? true : (stryCov_9fa48("643", "644", "645"), item.data.timestamp || Date.now()),
          uid: item.data.uid
        }))));
        queuedPosts.forEach(item => {
          if (stryMutAct_9fa48("646")) {
            {}
          } else {
            stryCov_9fa48("646");
            timestamps.push(stryMutAct_9fa48("649") ? item.data.timestamp && Date.now() : stryMutAct_9fa48("648") ? false : stryMutAct_9fa48("647") ? true : (stryCov_9fa48("647", "648", "649"), item.data.timestamp || Date.now()));
          }
        });
      }
    }
    const [users, fromCategories] = await Promise.all(stryMutAct_9fa48("650") ? [] : (stryCov_9fa48("650"), [getUserInfo(stryMutAct_9fa48("651") ? events.map(event => event.uid) : (stryCov_9fa48("651"), events.map(stryMutAct_9fa48("652") ? () => undefined : (stryCov_9fa48("652"), event => event.uid)).filter(Boolean))), getCategoryInfo(stryMutAct_9fa48("653") ? events.map(event => event.fromCid) : (stryCov_9fa48("653"), events.map(stryMutAct_9fa48("654") ? () => undefined : (stryCov_9fa48("654"), event => event.fromCid)).filter(Boolean)))]));

    // Remove backlink events if backlinks are disabled
    if (stryMutAct_9fa48("657") ? meta.config.topicBacklinks === 1 : stryMutAct_9fa48("656") ? false : stryMutAct_9fa48("655") ? true : (stryCov_9fa48("655", "656", "657"), meta.config.topicBacklinks !== 1)) {
      if (stryMutAct_9fa48("658")) {
        {}
      } else {
        stryCov_9fa48("658");
        events = stryMutAct_9fa48("659") ? events : (stryCov_9fa48("659"), events.filter(stryMutAct_9fa48("660") ? () => undefined : (stryCov_9fa48("660"), event => stryMutAct_9fa48("663") ? event.type === 'backlink' : stryMutAct_9fa48("662") ? false : stryMutAct_9fa48("661") ? true : (stryCov_9fa48("661", "662", "663"), event.type !== (stryMutAct_9fa48("664") ? "" : (stryCov_9fa48("664"), 'backlink'))))));
      }
    } else {
      if (stryMutAct_9fa48("665")) {
        {}
      } else {
        stryCov_9fa48("665");
        // remove backlinks that we dont have read permission
        const backlinkPids = stryMutAct_9fa48("666") ? events.map(e => e.href.split('/').pop()) : (stryCov_9fa48("666"), events.filter(stryMutAct_9fa48("667") ? () => undefined : (stryCov_9fa48("667"), e => stryMutAct_9fa48("670") ? e.type !== 'backlink' : stryMutAct_9fa48("669") ? false : stryMutAct_9fa48("668") ? true : (stryCov_9fa48("668", "669", "670"), e.type === (stryMutAct_9fa48("671") ? "" : (stryCov_9fa48("671"), 'backlink'))))).map(stryMutAct_9fa48("672") ? () => undefined : (stryCov_9fa48("672"), e => e.href.split(stryMutAct_9fa48("673") ? "" : (stryCov_9fa48("673"), '/')).pop())));
        const pids = await (stryMutAct_9fa48("674") ? privileges.posts : (stryCov_9fa48("674"), privileges.posts.filter(stryMutAct_9fa48("675") ? "" : (stryCov_9fa48("675"), 'topics:read'), backlinkPids, uid)));
        events = stryMutAct_9fa48("676") ? events : (stryCov_9fa48("676"), events.filter(stryMutAct_9fa48("677") ? () => undefined : (stryCov_9fa48("677"), e => stryMutAct_9fa48("680") ? e.type !== 'backlink' && pids.includes(e.href.split('/').pop()) : stryMutAct_9fa48("679") ? false : stryMutAct_9fa48("678") ? true : (stryCov_9fa48("678", "679", "680"), (stryMutAct_9fa48("682") ? e.type === 'backlink' : stryMutAct_9fa48("681") ? false : (stryCov_9fa48("681", "682"), e.type !== (stryMutAct_9fa48("683") ? "" : (stryCov_9fa48("683"), 'backlink')))) || pids.includes(e.href.split(stryMutAct_9fa48("684") ? "" : (stryCov_9fa48("684"), '/')).pop())))));
      }
    }

    // Remove events whose types no longer exist (e.g. plugin uninstalled)
    events = stryMutAct_9fa48("685") ? events : (stryCov_9fa48("685"), events.filter(stryMutAct_9fa48("686") ? () => undefined : (stryCov_9fa48("686"), event => Events._types.hasOwnProperty(event.type))));

    // Add user & metadata
    events.forEach((event, idx) => {
      if (stryMutAct_9fa48("687")) {
        {}
      } else {
        stryCov_9fa48("687");
        event.id = parseInt(eventIds[idx], 10);
        event.timestamp = timestamps[idx];
        event.timestampISO = new Date(timestamps[idx]).toISOString();
        if (stryMutAct_9fa48("689") ? false : stryMutAct_9fa48("688") ? true : (stryCov_9fa48("688", "689"), event.hasOwnProperty(stryMutAct_9fa48("690") ? "" : (stryCov_9fa48("690"), 'uid')))) {
          if (stryMutAct_9fa48("691")) {
            {}
          } else {
            stryCov_9fa48("691");
            event.user = users.get((stryMutAct_9fa48("694") ? event.uid !== 'system' : stryMutAct_9fa48("693") ? false : stryMutAct_9fa48("692") ? true : (stryCov_9fa48("692", "693", "694"), event.uid === (stryMutAct_9fa48("695") ? "" : (stryCov_9fa48("695"), 'system')))) ? stryMutAct_9fa48("696") ? "" : (stryCov_9fa48("696"), 'system') : parseInt(event.uid, 10));
          }
        }
        if (stryMutAct_9fa48("698") ? false : stryMutAct_9fa48("697") ? true : (stryCov_9fa48("697", "698"), event.hasOwnProperty(stryMutAct_9fa48("699") ? "" : (stryCov_9fa48("699"), 'fromCid')))) {
          if (stryMutAct_9fa48("700")) {
            {}
          } else {
            stryCov_9fa48("700");
            event.fromCategory = fromCategories[event.fromCid];
            event.text = translator.compile(stryMutAct_9fa48("701") ? "" : (stryCov_9fa48("701"), 'topic:moved-from-by'), event.fromCategory.name);
          }
        }
        Object.assign(event, Events._types[event.type]);
      }
    });

    // Sort events
    stryMutAct_9fa48("702") ? events : (stryCov_9fa48("702"), events.sort(stryMutAct_9fa48("703") ? () => undefined : (stryCov_9fa48("703"), (a, b) => stryMutAct_9fa48("704") ? a.timestamp + b.timestamp : (stryCov_9fa48("704"), a.timestamp - b.timestamp))));
    return events;
  }
}
Events.log = async (tid, payload) => {
  if (stryMutAct_9fa48("705")) {
    {}
  } else {
    stryCov_9fa48("705");
    const topics = require('.');
    const {
      type
    } = payload;
    const timestamp = stryMutAct_9fa48("708") ? payload.timestamp && Date.now() : stryMutAct_9fa48("707") ? false : stryMutAct_9fa48("706") ? true : (stryCov_9fa48("706", "707", "708"), payload.timestamp || Date.now());
    if (stryMutAct_9fa48("711") ? false : stryMutAct_9fa48("710") ? true : stryMutAct_9fa48("709") ? Events._types.hasOwnProperty(type) : (stryCov_9fa48("709", "710", "711"), !Events._types.hasOwnProperty(type))) {
      if (stryMutAct_9fa48("712")) {
        {}
      } else {
        stryCov_9fa48("712");
        throw new Error(stryMutAct_9fa48("713") ? `` : (stryCov_9fa48("713"), `[[error:topic-event-unrecognized, ${type}]]`));
      }
    } else if (stryMutAct_9fa48("716") ? false : stryMutAct_9fa48("715") ? true : stryMutAct_9fa48("714") ? await topics.exists(tid) : (stryCov_9fa48("714", "715", "716"), !(await topics.exists(tid)))) {
      if (stryMutAct_9fa48("717")) {
        {}
      } else {
        stryCov_9fa48("717");
        throw new Error(stryMutAct_9fa48("718") ? "" : (stryCov_9fa48("718"), '[[error:no-topic]]'));
      }
    }
    const eventId = await db.incrObjectField(stryMutAct_9fa48("719") ? "" : (stryCov_9fa48("719"), 'global'), stryMutAct_9fa48("720") ? "" : (stryCov_9fa48("720"), 'nextTopicEventId'));
    await Promise.all(stryMutAct_9fa48("721") ? [] : (stryCov_9fa48("721"), [db.setObject(stryMutAct_9fa48("722") ? `` : (stryCov_9fa48("722"), `topicEvent:${eventId}`), payload), db.sortedSetAdd(stryMutAct_9fa48("723") ? `` : (stryCov_9fa48("723"), `topic:${tid}:events`), timestamp, eventId)]));
    let events = await modifyEvent(stryMutAct_9fa48("724") ? {} : (stryCov_9fa48("724"), {
      eventIds: stryMutAct_9fa48("725") ? [] : (stryCov_9fa48("725"), [eventId]),
      timestamps: stryMutAct_9fa48("726") ? [] : (stryCov_9fa48("726"), [timestamp]),
      events: stryMutAct_9fa48("727") ? [] : (stryCov_9fa48("727"), [payload])
    }));
    ({
      events
    } = await plugins.hooks.fire(stryMutAct_9fa48("728") ? "" : (stryCov_9fa48("728"), 'filter:topic.events.log'), stryMutAct_9fa48("729") ? {} : (stryCov_9fa48("729"), {
      events
    })));
    return events;
  }
};
Events.purge = async (tid, eventIds = stryMutAct_9fa48("730") ? ["Stryker was here"] : (stryCov_9fa48("730"), [])) => {
  if (stryMutAct_9fa48("731")) {
    {}
  } else {
    stryCov_9fa48("731");
    if (stryMutAct_9fa48("733") ? false : stryMutAct_9fa48("732") ? true : (stryCov_9fa48("732", "733"), eventIds.length)) {
      if (stryMutAct_9fa48("734")) {
        {}
      } else {
        stryCov_9fa48("734");
        const isTopicEvent = await db.isSortedSetMembers(stryMutAct_9fa48("735") ? `` : (stryCov_9fa48("735"), `topic:${tid}:events`), eventIds);
        eventIds = stryMutAct_9fa48("736") ? eventIds : (stryCov_9fa48("736"), eventIds.filter(stryMutAct_9fa48("737") ? () => undefined : (stryCov_9fa48("737"), (id, index) => isTopicEvent[index])));
        await Promise.all(stryMutAct_9fa48("738") ? [] : (stryCov_9fa48("738"), [db.sortedSetRemove(stryMutAct_9fa48("739") ? `` : (stryCov_9fa48("739"), `topic:${tid}:events`), eventIds), db.deleteAll(eventIds.map(stryMutAct_9fa48("740") ? () => undefined : (stryCov_9fa48("740"), id => stryMutAct_9fa48("741") ? `` : (stryCov_9fa48("741"), `topicEvent:${id}`))))]));
      }
    } else {
      if (stryMutAct_9fa48("742")) {
        {}
      } else {
        stryCov_9fa48("742");
        const keys = stryMutAct_9fa48("743") ? [] : (stryCov_9fa48("743"), [stryMutAct_9fa48("744") ? `` : (stryCov_9fa48("744"), `topic:${tid}:events`)]);
        const eventIds = await db.getSortedSetRange(keys[0], 0, stryMutAct_9fa48("745") ? +1 : (stryCov_9fa48("745"), -1));
        keys.push(...eventIds.map(stryMutAct_9fa48("746") ? () => undefined : (stryCov_9fa48("746"), id => stryMutAct_9fa48("747") ? `` : (stryCov_9fa48("747"), `topicEvent:${id}`))));
        await db.deleteAll(keys);
      }
    }
  }
};