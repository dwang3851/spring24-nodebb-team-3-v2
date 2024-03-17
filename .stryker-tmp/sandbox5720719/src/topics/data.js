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
const validator = require('validator');
const db = require('../database');
const categories = require('../categories');
const utils = require('../utils');
const translator = require('../translator');
const plugins = require('../plugins');
const intFields = stryMutAct_9fa48("321") ? [] : (stryCov_9fa48("321"), [stryMutAct_9fa48("322") ? "" : (stryCov_9fa48("322"), 'tid'), stryMutAct_9fa48("323") ? "" : (stryCov_9fa48("323"), 'cid'), stryMutAct_9fa48("324") ? "" : (stryCov_9fa48("324"), 'uid'), stryMutAct_9fa48("325") ? "" : (stryCov_9fa48("325"), 'mainPid'), stryMutAct_9fa48("326") ? "" : (stryCov_9fa48("326"), 'postcount'), stryMutAct_9fa48("327") ? "" : (stryCov_9fa48("327"), 'viewcount'), stryMutAct_9fa48("328") ? "" : (stryCov_9fa48("328"), 'postercount'), stryMutAct_9fa48("329") ? "" : (stryCov_9fa48("329"), 'deleted'), stryMutAct_9fa48("330") ? "" : (stryCov_9fa48("330"), 'locked'), stryMutAct_9fa48("331") ? "" : (stryCov_9fa48("331"), 'pinned'), stryMutAct_9fa48("332") ? "" : (stryCov_9fa48("332"), 'pinExpiry'), stryMutAct_9fa48("333") ? "" : (stryCov_9fa48("333"), 'timestamp'), stryMutAct_9fa48("334") ? "" : (stryCov_9fa48("334"), 'upvotes'), stryMutAct_9fa48("335") ? "" : (stryCov_9fa48("335"), 'downvotes'), stryMutAct_9fa48("336") ? "" : (stryCov_9fa48("336"), 'lastposttime'), stryMutAct_9fa48("337") ? "" : (stryCov_9fa48("337"), 'deleterUid')]);
module.exports = function (Topics) {
  if (stryMutAct_9fa48("338")) {
    {}
  } else {
    stryCov_9fa48("338");
    Topics.getTopicsFields = async function (tids, fields) {
      if (stryMutAct_9fa48("339")) {
        {}
      } else {
        stryCov_9fa48("339");
        if (stryMutAct_9fa48("342") ? !Array.isArray(tids) && !tids.length : stryMutAct_9fa48("341") ? false : stryMutAct_9fa48("340") ? true : (stryCov_9fa48("340", "341", "342"), (stryMutAct_9fa48("343") ? Array.isArray(tids) : (stryCov_9fa48("343"), !Array.isArray(tids))) || (stryMutAct_9fa48("344") ? tids.length : (stryCov_9fa48("344"), !tids.length)))) {
          if (stryMutAct_9fa48("345")) {
            {}
          } else {
            stryCov_9fa48("345");
            return stryMutAct_9fa48("346") ? ["Stryker was here"] : (stryCov_9fa48("346"), []);
          }
        }

        // "scheduled" is derived from "timestamp"
        if (stryMutAct_9fa48("349") ? fields.includes('scheduled') || !fields.includes('timestamp') : stryMutAct_9fa48("348") ? false : stryMutAct_9fa48("347") ? true : (stryCov_9fa48("347", "348", "349"), fields.includes(stryMutAct_9fa48("350") ? "" : (stryCov_9fa48("350"), 'scheduled')) && (stryMutAct_9fa48("351") ? fields.includes('timestamp') : (stryCov_9fa48("351"), !fields.includes(stryMutAct_9fa48("352") ? "" : (stryCov_9fa48("352"), 'timestamp')))))) {
          if (stryMutAct_9fa48("353")) {
            {}
          } else {
            stryCov_9fa48("353");
            fields.push(stryMutAct_9fa48("354") ? "" : (stryCov_9fa48("354"), 'timestamp'));
          }
        }
        const keys = tids.map(stryMutAct_9fa48("355") ? () => undefined : (stryCov_9fa48("355"), tid => stryMutAct_9fa48("356") ? `` : (stryCov_9fa48("356"), `topic:${tid}`)));
        const topics = await db.getObjects(keys, fields);
        const result = await plugins.hooks.fire(stryMutAct_9fa48("357") ? "" : (stryCov_9fa48("357"), 'filter:topic.getFields'), stryMutAct_9fa48("358") ? {} : (stryCov_9fa48("358"), {
          tids: tids,
          topics: topics,
          fields: fields,
          keys: keys
        }));
        result.topics.forEach(stryMutAct_9fa48("359") ? () => undefined : (stryCov_9fa48("359"), topic => modifyTopic(topic, fields)));
        return result.topics;
      }
    };
    Topics.getTopicField = async function (tid, field) {
      if (stryMutAct_9fa48("360")) {
        {}
      } else {
        stryCov_9fa48("360");
        const topic = await Topics.getTopicFields(tid, stryMutAct_9fa48("361") ? [] : (stryCov_9fa48("361"), [field]));
        return topic ? topic[field] : null;
      }
    };
    Topics.getTopicFields = async function (tid, fields) {
      if (stryMutAct_9fa48("362")) {
        {}
      } else {
        stryCov_9fa48("362");
        const topics = await Topics.getTopicsFields(stryMutAct_9fa48("363") ? [] : (stryCov_9fa48("363"), [tid]), fields);
        return topics ? topics[0] : null;
      }
    };
    Topics.getTopicData = async function (tid) {
      if (stryMutAct_9fa48("364")) {
        {}
      } else {
        stryCov_9fa48("364");
        const topics = await Topics.getTopicsFields(stryMutAct_9fa48("365") ? [] : (stryCov_9fa48("365"), [tid]), stryMutAct_9fa48("366") ? ["Stryker was here"] : (stryCov_9fa48("366"), []));
        return (stryMutAct_9fa48("369") ? topics || topics.length : stryMutAct_9fa48("368") ? false : stryMutAct_9fa48("367") ? true : (stryCov_9fa48("367", "368", "369"), topics && topics.length)) ? topics[0] : null;
      }
    };
    Topics.getTopicsData = async function (tids) {
      if (stryMutAct_9fa48("370")) {
        {}
      } else {
        stryCov_9fa48("370");
        return await Topics.getTopicsFields(tids, stryMutAct_9fa48("371") ? ["Stryker was here"] : (stryCov_9fa48("371"), []));
      }
    };
    Topics.getCategoryData = async function (tid) {
      if (stryMutAct_9fa48("372")) {
        {}
      } else {
        stryCov_9fa48("372");
        const cid = await Topics.getTopicField(tid, stryMutAct_9fa48("373") ? "" : (stryCov_9fa48("373"), 'cid'));
        return await categories.getCategoryData(cid);
      }
    };
    Topics.setTopicField = async function (tid, field, value) {
      if (stryMutAct_9fa48("374")) {
        {}
      } else {
        stryCov_9fa48("374");
        await db.setObjectField(stryMutAct_9fa48("375") ? `` : (stryCov_9fa48("375"), `topic:${tid}`), field, value);
      }
    };
    Topics.setTopicFields = async function (tid, data) {
      if (stryMutAct_9fa48("376")) {
        {}
      } else {
        stryCov_9fa48("376");
        await db.setObject(stryMutAct_9fa48("377") ? `` : (stryCov_9fa48("377"), `topic:${tid}`), data);
      }
    };
    Topics.deleteTopicField = async function (tid, field) {
      if (stryMutAct_9fa48("378")) {
        {}
      } else {
        stryCov_9fa48("378");
        await db.deleteObjectField(stryMutAct_9fa48("379") ? `` : (stryCov_9fa48("379"), `topic:${tid}`), field);
      }
    };
    Topics.deleteTopicFields = async function (tid, fields) {
      if (stryMutAct_9fa48("380")) {
        {}
      } else {
        stryCov_9fa48("380");
        await db.deleteObjectFields(stryMutAct_9fa48("381") ? `` : (stryCov_9fa48("381"), `topic:${tid}`), fields);
      }
    };
  }
};
function escapeTitle(topicData) {
  if (stryMutAct_9fa48("382")) {
    {}
  } else {
    stryCov_9fa48("382");
    if (stryMutAct_9fa48("384") ? false : stryMutAct_9fa48("383") ? true : (stryCov_9fa48("383", "384"), topicData)) {
      if (stryMutAct_9fa48("385")) {
        {}
      } else {
        stryCov_9fa48("385");
        if (stryMutAct_9fa48("387") ? false : stryMutAct_9fa48("386") ? true : (stryCov_9fa48("386", "387"), topicData.title)) {
          if (stryMutAct_9fa48("388")) {
            {}
          } else {
            stryCov_9fa48("388");
            topicData.title = translator.escape(validator.escape(topicData.title));
          }
        }
        if (stryMutAct_9fa48("390") ? false : stryMutAct_9fa48("389") ? true : (stryCov_9fa48("389", "390"), topicData.titleRaw)) {
          if (stryMutAct_9fa48("391")) {
            {}
          } else {
            stryCov_9fa48("391");
            topicData.titleRaw = translator.escape(topicData.titleRaw);
          }
        }
      }
    }
  }
}
function modifyTopic(topic, fields) {
  if (stryMutAct_9fa48("392")) {
    {}
  } else {
    stryCov_9fa48("392");
    console.assert(stryMutAct_9fa48("395") ? typeof topic !== 'object' : stryMutAct_9fa48("394") ? false : stryMutAct_9fa48("393") ? true : (stryCov_9fa48("393", "394", "395"), typeof topic === (stryMutAct_9fa48("396") ? "" : (stryCov_9fa48("396"), 'object'))));
    console.assert(Array.isArray(fields));
    if (stryMutAct_9fa48("399") ? false : stryMutAct_9fa48("398") ? true : stryMutAct_9fa48("397") ? topic : (stryCov_9fa48("397", "398", "399"), !topic)) {
      if (stryMutAct_9fa48("400")) {
        {}
      } else {
        stryCov_9fa48("400");
        return;
      }
    }
    db.parseIntFields(topic, intFields, fields);
    if (stryMutAct_9fa48("402") ? false : stryMutAct_9fa48("401") ? true : (stryCov_9fa48("401", "402"), topic.hasOwnProperty(stryMutAct_9fa48("403") ? "" : (stryCov_9fa48("403"), 'title')))) {
      if (stryMutAct_9fa48("404")) {
        {}
      } else {
        stryCov_9fa48("404");
        topic.titleRaw = topic.title;
        topic.title = String(topic.title);
      }
    }
    escapeTitle(topic);
    if (stryMutAct_9fa48("406") ? false : stryMutAct_9fa48("405") ? true : (stryCov_9fa48("405", "406"), topic.hasOwnProperty(stryMutAct_9fa48("407") ? "" : (stryCov_9fa48("407"), 'timestamp')))) {
      if (stryMutAct_9fa48("408")) {
        {}
      } else {
        stryCov_9fa48("408");
        topic.timestampISO = utils.toISOString(topic.timestamp);
        if (stryMutAct_9fa48("411") ? !fields.length && fields.includes('scheduled') : stryMutAct_9fa48("410") ? false : stryMutAct_9fa48("409") ? true : (stryCov_9fa48("409", "410", "411"), (stryMutAct_9fa48("412") ? fields.length : (stryCov_9fa48("412"), !fields.length)) || fields.includes(stryMutAct_9fa48("413") ? "" : (stryCov_9fa48("413"), 'scheduled')))) {
          if (stryMutAct_9fa48("414")) {
            {}
          } else {
            stryCov_9fa48("414");
            topic.scheduled = stryMutAct_9fa48("418") ? topic.timestamp <= Date.now() : stryMutAct_9fa48("417") ? topic.timestamp >= Date.now() : stryMutAct_9fa48("416") ? false : stryMutAct_9fa48("415") ? true : (stryCov_9fa48("415", "416", "417", "418"), topic.timestamp > Date.now());
          }
        }
      }
    }
    if (stryMutAct_9fa48("420") ? false : stryMutAct_9fa48("419") ? true : (stryCov_9fa48("419", "420"), topic.hasOwnProperty(stryMutAct_9fa48("421") ? "" : (stryCov_9fa48("421"), 'lastposttime')))) {
      if (stryMutAct_9fa48("422")) {
        {}
      } else {
        stryCov_9fa48("422");
        topic.lastposttimeISO = utils.toISOString(topic.lastposttime);
      }
    }
    if (stryMutAct_9fa48("424") ? false : stryMutAct_9fa48("423") ? true : (stryCov_9fa48("423", "424"), topic.hasOwnProperty(stryMutAct_9fa48("425") ? "" : (stryCov_9fa48("425"), 'pinExpiry')))) {
      if (stryMutAct_9fa48("426")) {
        {}
      } else {
        stryCov_9fa48("426");
        topic.pinExpiryISO = utils.toISOString(topic.pinExpiry);
      }
    }
    if (stryMutAct_9fa48("429") ? topic.hasOwnProperty('upvotes') || topic.hasOwnProperty('downvotes') : stryMutAct_9fa48("428") ? false : stryMutAct_9fa48("427") ? true : (stryCov_9fa48("427", "428", "429"), topic.hasOwnProperty(stryMutAct_9fa48("430") ? "" : (stryCov_9fa48("430"), 'upvotes')) && topic.hasOwnProperty(stryMutAct_9fa48("431") ? "" : (stryCov_9fa48("431"), 'downvotes')))) {
      if (stryMutAct_9fa48("432")) {
        {}
      } else {
        stryCov_9fa48("432");
        topic.votes = stryMutAct_9fa48("433") ? Math.min(0, topic.upvotes - topic.downvotes) : (stryCov_9fa48("433"), Math.max(0, stryMutAct_9fa48("434") ? topic.upvotes + topic.downvotes : (stryCov_9fa48("434"), topic.upvotes - topic.downvotes)));
      }
    }
    if (stryMutAct_9fa48("437") ? fields.includes('teaserPid') && !fields.length : stryMutAct_9fa48("436") ? false : stryMutAct_9fa48("435") ? true : (stryCov_9fa48("435", "436", "437"), fields.includes(stryMutAct_9fa48("438") ? "" : (stryCov_9fa48("438"), 'teaserPid')) || (stryMutAct_9fa48("439") ? fields.length : (stryCov_9fa48("439"), !fields.length)))) {
      if (stryMutAct_9fa48("440")) {
        {}
      } else {
        stryCov_9fa48("440");
        topic.teaserPid = stryMutAct_9fa48("443") ? topic.teaserPid && null : stryMutAct_9fa48("442") ? false : stryMutAct_9fa48("441") ? true : (stryCov_9fa48("441", "442", "443"), topic.teaserPid || null);
      }
    }
    if (stryMutAct_9fa48("446") ? fields.includes('tags') && !fields.length : stryMutAct_9fa48("445") ? false : stryMutAct_9fa48("444") ? true : (stryCov_9fa48("444", "445", "446"), fields.includes(stryMutAct_9fa48("447") ? "" : (stryCov_9fa48("447"), 'tags')) || (stryMutAct_9fa48("448") ? fields.length : (stryCov_9fa48("448"), !fields.length)))) {
      if (stryMutAct_9fa48("449")) {
        {}
      } else {
        stryCov_9fa48("449");
        const tags = String(stryMutAct_9fa48("452") ? topic.tags && '' : stryMutAct_9fa48("451") ? false : stryMutAct_9fa48("450") ? true : (stryCov_9fa48("450", "451", "452"), topic.tags || (stryMutAct_9fa48("453") ? "Stryker was here!" : (stryCov_9fa48("453"), ''))));
        topic.tags = stryMutAct_9fa48("454") ? tags.split(',').map(tag => {
          const escaped = validator.escape(String(tag));
          return {
            value: tag,
            valueEscaped: escaped,
            valueEncoded: encodeURIComponent(escaped),
            class: escaped.replace(/\s/g, '-')
          };
        }) : (stryCov_9fa48("454"), tags.split(stryMutAct_9fa48("455") ? "" : (stryCov_9fa48("455"), ',')).filter(Boolean).map(tag => {
          if (stryMutAct_9fa48("456")) {
            {}
          } else {
            stryCov_9fa48("456");
            const escaped = validator.escape(String(tag));
            return stryMutAct_9fa48("457") ? {} : (stryCov_9fa48("457"), {
              value: tag,
              valueEscaped: escaped,
              valueEncoded: encodeURIComponent(escaped),
              class: escaped.replace(stryMutAct_9fa48("458") ? /\S/g : (stryCov_9fa48("458"), /\s/g), stryMutAct_9fa48("459") ? "" : (stryCov_9fa48("459"), '-'))
            });
          }
        }));
      }
    }
  }
}