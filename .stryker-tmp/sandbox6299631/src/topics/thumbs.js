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
const nconf = require('nconf');
const path = require('path');
const validator = require('validator');
const db = require('../database');
const file = require('../file');
const plugins = require('../plugins');
const posts = require('../posts');
const meta = require('../meta');
const cache = require('../cache');
const Thumbs = module.exports;
Thumbs.exists = async function (id, path) {
  if (stryMutAct_9fa48("2999")) {
    {}
  } else {
    stryCov_9fa48("2999");
    const isDraft = validator.isUUID(String(id));
    const set = stryMutAct_9fa48("3000") ? `` : (stryCov_9fa48("3000"), `${isDraft ? stryMutAct_9fa48("3001") ? "" : (stryCov_9fa48("3001"), 'draft') : stryMutAct_9fa48("3002") ? "" : (stryCov_9fa48("3002"), 'topic')}:${id}:thumbs`);
    return db.isSortedSetMember(set, path);
  }
};
Thumbs.load = async function (topicData) {
  if (stryMutAct_9fa48("3003")) {
    {}
  } else {
    stryCov_9fa48("3003");
    const topicsWithThumbs = stryMutAct_9fa48("3004") ? topicData : (stryCov_9fa48("3004"), topicData.filter(stryMutAct_9fa48("3005") ? () => undefined : (stryCov_9fa48("3005"), t => stryMutAct_9fa48("3008") ? t || parseInt(t.numThumbs, 10) > 0 : stryMutAct_9fa48("3007") ? false : stryMutAct_9fa48("3006") ? true : (stryCov_9fa48("3006", "3007", "3008"), t && (stryMutAct_9fa48("3011") ? parseInt(t.numThumbs, 10) <= 0 : stryMutAct_9fa48("3010") ? parseInt(t.numThumbs, 10) >= 0 : stryMutAct_9fa48("3009") ? true : (stryCov_9fa48("3009", "3010", "3011"), parseInt(t.numThumbs, 10) > 0))))));
    const tidsWithThumbs = topicsWithThumbs.map(stryMutAct_9fa48("3012") ? () => undefined : (stryCov_9fa48("3012"), t => t.tid));
    const thumbs = await Thumbs.get(tidsWithThumbs);
    const tidToThumbs = _.zipObject(tidsWithThumbs, thumbs);
    return topicData.map(stryMutAct_9fa48("3013") ? () => undefined : (stryCov_9fa48("3013"), t => (stryMutAct_9fa48("3016") ? t || t.tid : stryMutAct_9fa48("3015") ? false : stryMutAct_9fa48("3014") ? true : (stryCov_9fa48("3014", "3015", "3016"), t && t.tid)) ? stryMutAct_9fa48("3019") ? tidToThumbs[t.tid] && [] : stryMutAct_9fa48("3018") ? false : stryMutAct_9fa48("3017") ? true : (stryCov_9fa48("3017", "3018", "3019"), tidToThumbs[t.tid] || (stryMutAct_9fa48("3020") ? ["Stryker was here"] : (stryCov_9fa48("3020"), []))) : stryMutAct_9fa48("3021") ? ["Stryker was here"] : (stryCov_9fa48("3021"), [])));
  }
};
Thumbs.get = async function (tids) {
  if (stryMutAct_9fa48("3022")) {
    {}
  } else {
    stryCov_9fa48("3022");
    // Allow singular or plural usage
    let singular = stryMutAct_9fa48("3023") ? true : (stryCov_9fa48("3023"), false);
    if (stryMutAct_9fa48("3026") ? false : stryMutAct_9fa48("3025") ? true : stryMutAct_9fa48("3024") ? Array.isArray(tids) : (stryCov_9fa48("3024", "3025", "3026"), !Array.isArray(tids))) {
      if (stryMutAct_9fa48("3027")) {
        {}
      } else {
        stryCov_9fa48("3027");
        tids = stryMutAct_9fa48("3028") ? [] : (stryCov_9fa48("3028"), [tids]);
        singular = stryMutAct_9fa48("3029") ? false : (stryCov_9fa48("3029"), true);
      }
    }
    if (stryMutAct_9fa48("3032") ? !meta.config.allowTopicsThumbnail && !tids.length : stryMutAct_9fa48("3031") ? false : stryMutAct_9fa48("3030") ? true : (stryCov_9fa48("3030", "3031", "3032"), (stryMutAct_9fa48("3033") ? meta.config.allowTopicsThumbnail : (stryCov_9fa48("3033"), !meta.config.allowTopicsThumbnail)) || (stryMutAct_9fa48("3034") ? tids.length : (stryCov_9fa48("3034"), !tids.length)))) {
      if (stryMutAct_9fa48("3035")) {
        {}
      } else {
        stryCov_9fa48("3035");
        return singular ? stryMutAct_9fa48("3036") ? ["Stryker was here"] : (stryCov_9fa48("3036"), []) : tids.map(stryMutAct_9fa48("3037") ? () => undefined : (stryCov_9fa48("3037"), () => stryMutAct_9fa48("3038") ? ["Stryker was here"] : (stryCov_9fa48("3038"), [])));
      }
    }
    const hasTimestampPrefix = stryMutAct_9fa48("3041") ? /^\D+-/ : stryMutAct_9fa48("3040") ? /^\d-/ : stryMutAct_9fa48("3039") ? /\d+-/ : (stryCov_9fa48("3039", "3040", "3041"), /^\d+-/);
    const upload_url = stryMutAct_9fa48("3042") ? nconf.get('relative_path') - nconf.get('upload_url') : (stryCov_9fa48("3042"), nconf.get(stryMutAct_9fa48("3043") ? "" : (stryCov_9fa48("3043"), 'relative_path')) + nconf.get(stryMutAct_9fa48("3044") ? "" : (stryCov_9fa48("3044"), 'upload_url')));
    const sets = tids.map(stryMutAct_9fa48("3045") ? () => undefined : (stryCov_9fa48("3045"), tid => stryMutAct_9fa48("3046") ? `` : (stryCov_9fa48("3046"), `${validator.isUUID(String(tid)) ? stryMutAct_9fa48("3047") ? "" : (stryCov_9fa48("3047"), 'draft') : stryMutAct_9fa48("3048") ? "" : (stryCov_9fa48("3048"), 'topic')}:${tid}:thumbs`)));
    const thumbs = await Promise.all(sets.map(getThumbs));
    let response = thumbs.map(stryMutAct_9fa48("3049") ? () => undefined : (stryCov_9fa48("3049"), (thumbSet, idx) => thumbSet.map(stryMutAct_9fa48("3050") ? () => undefined : (stryCov_9fa48("3050"), thumb => stryMutAct_9fa48("3051") ? {} : (stryCov_9fa48("3051"), {
      id: tids[idx],
      name: (() => {
        if (stryMutAct_9fa48("3052")) {
          {}
        } else {
          stryCov_9fa48("3052");
          const name = path.basename(thumb);
          return hasTimestampPrefix.test(name) ? stryMutAct_9fa48("3053") ? name : (stryCov_9fa48("3053"), name.slice(14)) : name;
        }
      })(),
      url: (stryMutAct_9fa48("3054") ? thumb.endsWith('http') : (stryCov_9fa48("3054"), thumb.startsWith(stryMutAct_9fa48("3055") ? "" : (stryCov_9fa48("3055"), 'http')))) ? thumb : path.posix.join(upload_url, thumb)
    })))));
    ({
      thumbs: response
    } = await plugins.hooks.fire(stryMutAct_9fa48("3056") ? "" : (stryCov_9fa48("3056"), 'filter:topics.getThumbs'), stryMutAct_9fa48("3057") ? {} : (stryCov_9fa48("3057"), {
      tids,
      thumbs: response
    })));
    return singular ? response.pop() : response;
  }
};
async function getThumbs(set) {
  if (stryMutAct_9fa48("3058")) {
    {}
  } else {
    stryCov_9fa48("3058");
    const cached = cache.get(set);
    if (stryMutAct_9fa48("3061") ? cached === undefined : stryMutAct_9fa48("3060") ? false : stryMutAct_9fa48("3059") ? true : (stryCov_9fa48("3059", "3060", "3061"), cached !== undefined)) {
      if (stryMutAct_9fa48("3062")) {
        {}
      } else {
        stryCov_9fa48("3062");
        return stryMutAct_9fa48("3063") ? cached : (stryCov_9fa48("3063"), cached.slice());
      }
    }
    const thumbs = await db.getSortedSetRange(set, 0, stryMutAct_9fa48("3064") ? +1 : (stryCov_9fa48("3064"), -1));
    cache.set(set, thumbs);
    return stryMutAct_9fa48("3065") ? thumbs : (stryCov_9fa48("3065"), thumbs.slice());
  }
}
Thumbs.associate = async function ({
  id,
  path,
  score
}) {
  if (stryMutAct_9fa48("3066")) {
    {}
  } else {
    stryCov_9fa48("3066");
    // Associates a newly uploaded file as a thumb to the passed-in draft or topic
    const isDraft = validator.isUUID(String(id));
    const isLocal = stryMutAct_9fa48("3067") ? path.startsWith('http') : (stryCov_9fa48("3067"), !(stryMutAct_9fa48("3068") ? path.endsWith('http') : (stryCov_9fa48("3068"), path.startsWith(stryMutAct_9fa48("3069") ? "" : (stryCov_9fa48("3069"), 'http')))));
    const set = stryMutAct_9fa48("3070") ? `` : (stryCov_9fa48("3070"), `${isDraft ? stryMutAct_9fa48("3071") ? "" : (stryCov_9fa48("3071"), 'draft') : stryMutAct_9fa48("3072") ? "" : (stryCov_9fa48("3072"), 'topic')}:${id}:thumbs`);
    const numThumbs = await db.sortedSetCard(set);

    // Normalize the path to allow for changes in upload_path (and so upload_url can be appended if needed)
    if (stryMutAct_9fa48("3074") ? false : stryMutAct_9fa48("3073") ? true : (stryCov_9fa48("3073", "3074"), isLocal)) {
      if (stryMutAct_9fa48("3075")) {
        {}
      } else {
        stryCov_9fa48("3075");
        path = path.replace(nconf.get(stryMutAct_9fa48("3076") ? "" : (stryCov_9fa48("3076"), 'upload_path')), stryMutAct_9fa48("3077") ? "Stryker was here!" : (stryCov_9fa48("3077"), ''));
      }
    }
    const topics = require('.');
    await db.sortedSetAdd(set, isFinite(score) ? score : numThumbs, path);
    if (stryMutAct_9fa48("3080") ? false : stryMutAct_9fa48("3079") ? true : stryMutAct_9fa48("3078") ? isDraft : (stryCov_9fa48("3078", "3079", "3080"), !isDraft)) {
      if (stryMutAct_9fa48("3081")) {
        {}
      } else {
        stryCov_9fa48("3081");
        const numThumbs = await db.sortedSetCard(set);
        await topics.setTopicField(id, stryMutAct_9fa48("3082") ? "" : (stryCov_9fa48("3082"), 'numThumbs'), numThumbs);
      }
    }
    cache.del(set);

    // Associate thumbnails with the main pid (only on local upload)
    if (stryMutAct_9fa48("3085") ? !isDraft || isLocal : stryMutAct_9fa48("3084") ? false : stryMutAct_9fa48("3083") ? true : (stryCov_9fa48("3083", "3084", "3085"), (stryMutAct_9fa48("3086") ? isDraft : (stryCov_9fa48("3086"), !isDraft)) && isLocal)) {
      if (stryMutAct_9fa48("3087")) {
        {}
      } else {
        stryCov_9fa48("3087");
        const mainPid = (await topics.getMainPids(stryMutAct_9fa48("3088") ? [] : (stryCov_9fa48("3088"), [id])))[0];
        await posts.uploads.associate(mainPid, stryMutAct_9fa48("3089") ? path : (stryCov_9fa48("3089"), path.slice(1)));
      }
    }
  }
};
Thumbs.migrate = async function (uuid, id) {
  if (stryMutAct_9fa48("3090")) {
    {}
  } else {
    stryCov_9fa48("3090");
    // Converts the draft thumb zset to the topic zset (combines thumbs if applicable)
    const set = stryMutAct_9fa48("3091") ? `` : (stryCov_9fa48("3091"), `draft:${uuid}:thumbs`);
    const thumbs = await db.getSortedSetRangeWithScores(set, 0, stryMutAct_9fa48("3092") ? +1 : (stryCov_9fa48("3092"), -1));
    await Promise.all(thumbs.map(stryMutAct_9fa48("3093") ? () => undefined : (stryCov_9fa48("3093"), async thumb => await Thumbs.associate(stryMutAct_9fa48("3094") ? {} : (stryCov_9fa48("3094"), {
      id,
      path: thumb.value,
      score: thumb.score
    })))));
    await db.delete(set);
    cache.del(set);
  }
};
Thumbs.delete = async function (id, relativePaths) {
  if (stryMutAct_9fa48("3095")) {
    {}
  } else {
    stryCov_9fa48("3095");
    const isDraft = validator.isUUID(String(id));
    const set = stryMutAct_9fa48("3096") ? `` : (stryCov_9fa48("3096"), `${isDraft ? stryMutAct_9fa48("3097") ? "" : (stryCov_9fa48("3097"), 'draft') : stryMutAct_9fa48("3098") ? "" : (stryCov_9fa48("3098"), 'topic')}:${id}:thumbs`);
    if (stryMutAct_9fa48("3101") ? typeof relativePaths !== 'string' : stryMutAct_9fa48("3100") ? false : stryMutAct_9fa48("3099") ? true : (stryCov_9fa48("3099", "3100", "3101"), typeof relativePaths === (stryMutAct_9fa48("3102") ? "" : (stryCov_9fa48("3102"), 'string')))) {
      if (stryMutAct_9fa48("3103")) {
        {}
      } else {
        stryCov_9fa48("3103");
        relativePaths = stryMutAct_9fa48("3104") ? [] : (stryCov_9fa48("3104"), [relativePaths]);
      }
    } else if (stryMutAct_9fa48("3107") ? false : stryMutAct_9fa48("3106") ? true : stryMutAct_9fa48("3105") ? Array.isArray(relativePaths) : (stryCov_9fa48("3105", "3106", "3107"), !Array.isArray(relativePaths))) {
      if (stryMutAct_9fa48("3108")) {
        {}
      } else {
        stryCov_9fa48("3108");
        throw new Error(stryMutAct_9fa48("3109") ? "" : (stryCov_9fa48("3109"), '[[error:invalid-data]]'));
      }
    }
    const absolutePaths = relativePaths.map(stryMutAct_9fa48("3110") ? () => undefined : (stryCov_9fa48("3110"), relativePath => path.join(nconf.get(stryMutAct_9fa48("3111") ? "" : (stryCov_9fa48("3111"), 'upload_path')), relativePath)));
    const [associated, existsOnDisk] = await Promise.all(stryMutAct_9fa48("3112") ? [] : (stryCov_9fa48("3112"), [db.isSortedSetMembers(set, relativePaths), Promise.all(absolutePaths.map(stryMutAct_9fa48("3113") ? () => undefined : (stryCov_9fa48("3113"), async absolutePath => file.exists(absolutePath))))]));
    const toRemove = stryMutAct_9fa48("3114") ? ["Stryker was here"] : (stryCov_9fa48("3114"), []);
    const toDelete = stryMutAct_9fa48("3115") ? ["Stryker was here"] : (stryCov_9fa48("3115"), []);
    relativePaths.forEach((relativePath, idx) => {
      if (stryMutAct_9fa48("3116")) {
        {}
      } else {
        stryCov_9fa48("3116");
        if (stryMutAct_9fa48("3118") ? false : stryMutAct_9fa48("3117") ? true : (stryCov_9fa48("3117", "3118"), associated[idx])) {
          if (stryMutAct_9fa48("3119")) {
            {}
          } else {
            stryCov_9fa48("3119");
            toRemove.push(relativePath);
          }
        }
        if (stryMutAct_9fa48("3121") ? false : stryMutAct_9fa48("3120") ? true : (stryCov_9fa48("3120", "3121"), existsOnDisk[idx])) {
          if (stryMutAct_9fa48("3122")) {
            {}
          } else {
            stryCov_9fa48("3122");
            toDelete.push(absolutePaths[idx]);
          }
        }
      }
    });
    await db.sortedSetRemove(set, toRemove);
    if (stryMutAct_9fa48("3125") ? isDraft || toDelete.length : stryMutAct_9fa48("3124") ? false : stryMutAct_9fa48("3123") ? true : (stryCov_9fa48("3123", "3124", "3125"), isDraft && toDelete.length)) {
      if (stryMutAct_9fa48("3126")) {
        {}
      } else {
        stryCov_9fa48("3126");
        // drafts only; post upload dissociation handles disk deletion for topics
        await Promise.all(toDelete.map(stryMutAct_9fa48("3127") ? () => undefined : (stryCov_9fa48("3127"), async absolutePath => file.delete(absolutePath))));
      }
    }
    if (stryMutAct_9fa48("3130") ? toRemove.length || !isDraft : stryMutAct_9fa48("3129") ? false : stryMutAct_9fa48("3128") ? true : (stryCov_9fa48("3128", "3129", "3130"), toRemove.length && (stryMutAct_9fa48("3131") ? isDraft : (stryCov_9fa48("3131"), !isDraft)))) {
      if (stryMutAct_9fa48("3132")) {
        {}
      } else {
        stryCov_9fa48("3132");
        const topics = require('.');
        const mainPid = (await topics.getMainPids(stryMutAct_9fa48("3133") ? [] : (stryCov_9fa48("3133"), [id])))[0];
        await Promise.all(stryMutAct_9fa48("3134") ? [] : (stryCov_9fa48("3134"), [db.incrObjectFieldBy(stryMutAct_9fa48("3135") ? `` : (stryCov_9fa48("3135"), `topic:${id}`), stryMutAct_9fa48("3136") ? "" : (stryCov_9fa48("3136"), 'numThumbs'), stryMutAct_9fa48("3137") ? +toRemove.length : (stryCov_9fa48("3137"), -toRemove.length)), Promise.all(toRemove.map(stryMutAct_9fa48("3138") ? () => undefined : (stryCov_9fa48("3138"), async relativePath => posts.uploads.dissociate(mainPid, stryMutAct_9fa48("3139") ? relativePath : (stryCov_9fa48("3139"), relativePath.slice(1))))))]));
      }
    }
  }
};
Thumbs.deleteAll = async id => {
  if (stryMutAct_9fa48("3140")) {
    {}
  } else {
    stryCov_9fa48("3140");
    const isDraft = validator.isUUID(String(id));
    const set = stryMutAct_9fa48("3141") ? `` : (stryCov_9fa48("3141"), `${isDraft ? stryMutAct_9fa48("3142") ? "" : (stryCov_9fa48("3142"), 'draft') : stryMutAct_9fa48("3143") ? "" : (stryCov_9fa48("3143"), 'topic')}:${id}:thumbs`);
    const thumbs = await db.getSortedSetRange(set, 0, stryMutAct_9fa48("3144") ? +1 : (stryCov_9fa48("3144"), -1));
    await Thumbs.delete(id, thumbs);
  }
};