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
const plugins = require('../plugins');
const utils = require('../utils');
module.exports = function (Topics) {
  if (stryMutAct_9fa48("2822")) {
    {}
  } else {
    stryCov_9fa48("2822");
    Topics.getTeasers = async function (topics, options) {
      if (stryMutAct_9fa48("2823")) {
        {}
      } else {
        stryCov_9fa48("2823");
        if (stryMutAct_9fa48("2826") ? !Array.isArray(topics) && !topics.length : stryMutAct_9fa48("2825") ? false : stryMutAct_9fa48("2824") ? true : (stryCov_9fa48("2824", "2825", "2826"), (stryMutAct_9fa48("2827") ? Array.isArray(topics) : (stryCov_9fa48("2827"), !Array.isArray(topics))) || (stryMutAct_9fa48("2828") ? topics.length : (stryCov_9fa48("2828"), !topics.length)))) {
          if (stryMutAct_9fa48("2829")) {
            {}
          } else {
            stryCov_9fa48("2829");
            return stryMutAct_9fa48("2830") ? ["Stryker was here"] : (stryCov_9fa48("2830"), []);
          }
        }
        let uid = options;
        let {
          teaserPost
        } = meta.config;
        if (stryMutAct_9fa48("2833") ? typeof options !== 'object' : stryMutAct_9fa48("2832") ? false : stryMutAct_9fa48("2831") ? true : (stryCov_9fa48("2831", "2832", "2833"), typeof options === (stryMutAct_9fa48("2834") ? "" : (stryCov_9fa48("2834"), 'object')))) {
          if (stryMutAct_9fa48("2835")) {
            {}
          } else {
            stryCov_9fa48("2835");
            uid = options.uid;
            teaserPost = stryMutAct_9fa48("2838") ? options.teaserPost && meta.config.teaserPost : stryMutAct_9fa48("2837") ? false : stryMutAct_9fa48("2836") ? true : (stryCov_9fa48("2836", "2837", "2838"), options.teaserPost || meta.config.teaserPost);
          }
        }
        const counts = stryMutAct_9fa48("2839") ? ["Stryker was here"] : (stryCov_9fa48("2839"), []);
        const teaserPids = stryMutAct_9fa48("2840") ? ["Stryker was here"] : (stryCov_9fa48("2840"), []);
        const tidToPost = {};
        topics.forEach(topic => {
          if (stryMutAct_9fa48("2841")) {
            {}
          } else {
            stryCov_9fa48("2841");
            counts.push(stryMutAct_9fa48("2844") ? topic || topic.postcount : stryMutAct_9fa48("2843") ? false : stryMutAct_9fa48("2842") ? true : (stryCov_9fa48("2842", "2843", "2844"), topic && topic.postcount));
            if (stryMutAct_9fa48("2846") ? false : stryMutAct_9fa48("2845") ? true : (stryCov_9fa48("2845", "2846"), topic)) {
              if (stryMutAct_9fa48("2847")) {
                {}
              } else {
                stryCov_9fa48("2847");
                if (stryMutAct_9fa48("2850") ? topic.teaserPid !== 'null' : stryMutAct_9fa48("2849") ? false : stryMutAct_9fa48("2848") ? true : (stryCov_9fa48("2848", "2849", "2850"), topic.teaserPid === (stryMutAct_9fa48("2851") ? "" : (stryCov_9fa48("2851"), 'null')))) {
                  if (stryMutAct_9fa48("2852")) {
                    {}
                  } else {
                    stryCov_9fa48("2852");
                    delete topic.teaserPid;
                  }
                }
                if (stryMutAct_9fa48("2855") ? teaserPost !== 'first' : stryMutAct_9fa48("2854") ? false : stryMutAct_9fa48("2853") ? true : (stryCov_9fa48("2853", "2854", "2855"), teaserPost === (stryMutAct_9fa48("2856") ? "" : (stryCov_9fa48("2856"), 'first')))) {
                  if (stryMutAct_9fa48("2857")) {
                    {}
                  } else {
                    stryCov_9fa48("2857");
                    teaserPids.push(topic.mainPid);
                  }
                } else if (stryMutAct_9fa48("2860") ? teaserPost !== 'last-post' : stryMutAct_9fa48("2859") ? false : stryMutAct_9fa48("2858") ? true : (stryCov_9fa48("2858", "2859", "2860"), teaserPost === (stryMutAct_9fa48("2861") ? "" : (stryCov_9fa48("2861"), 'last-post')))) {
                  if (stryMutAct_9fa48("2862")) {
                    {}
                  } else {
                    stryCov_9fa48("2862");
                    teaserPids.push(stryMutAct_9fa48("2865") ? topic.teaserPid && topic.mainPid : stryMutAct_9fa48("2864") ? false : stryMutAct_9fa48("2863") ? true : (stryCov_9fa48("2863", "2864", "2865"), topic.teaserPid || topic.mainPid));
                  }
                } else {
                  if (stryMutAct_9fa48("2866")) {
                    {}
                  } else {
                    stryCov_9fa48("2866");
                    // last-reply and everything else uses teaserPid like `last` that was used before
                    teaserPids.push(topic.teaserPid);
                  }
                }
              }
            }
          }
        });
        const [allPostData, callerSettings] = await Promise.all(stryMutAct_9fa48("2867") ? [] : (stryCov_9fa48("2867"), [posts.getPostsFields(teaserPids, stryMutAct_9fa48("2868") ? [] : (stryCov_9fa48("2868"), [stryMutAct_9fa48("2869") ? "" : (stryCov_9fa48("2869"), 'pid'), stryMutAct_9fa48("2870") ? "" : (stryCov_9fa48("2870"), 'uid'), stryMutAct_9fa48("2871") ? "" : (stryCov_9fa48("2871"), 'timestamp'), stryMutAct_9fa48("2872") ? "" : (stryCov_9fa48("2872"), 'tid'), stryMutAct_9fa48("2873") ? "" : (stryCov_9fa48("2873"), 'content')])), user.getSettings(uid)]));
        let postData = stryMutAct_9fa48("2874") ? allPostData : (stryCov_9fa48("2874"), allPostData.filter(stryMutAct_9fa48("2875") ? () => undefined : (stryCov_9fa48("2875"), post => stryMutAct_9fa48("2878") ? post || post.pid : stryMutAct_9fa48("2877") ? false : stryMutAct_9fa48("2876") ? true : (stryCov_9fa48("2876", "2877", "2878"), post && post.pid))));
        postData = await handleBlocks(uid, postData);
        postData = stryMutAct_9fa48("2879") ? postData : (stryCov_9fa48("2879"), postData.filter(Boolean));
        const uids = _.uniq(postData.map(stryMutAct_9fa48("2880") ? () => undefined : (stryCov_9fa48("2880"), post => post.uid)));
        const sortNewToOld = stryMutAct_9fa48("2883") ? callerSettings.topicPostSort !== 'newest_to_oldest' : stryMutAct_9fa48("2882") ? false : stryMutAct_9fa48("2881") ? true : (stryCov_9fa48("2881", "2882", "2883"), callerSettings.topicPostSort === (stryMutAct_9fa48("2884") ? "" : (stryCov_9fa48("2884"), 'newest_to_oldest')));
        const usersData = await user.getUsersFields(uids, stryMutAct_9fa48("2885") ? [] : (stryCov_9fa48("2885"), [stryMutAct_9fa48("2886") ? "" : (stryCov_9fa48("2886"), 'uid'), stryMutAct_9fa48("2887") ? "" : (stryCov_9fa48("2887"), 'username'), stryMutAct_9fa48("2888") ? "" : (stryCov_9fa48("2888"), 'userslug'), stryMutAct_9fa48("2889") ? "" : (stryCov_9fa48("2889"), 'picture')]));
        const users = {};
        usersData.forEach(user => {
          if (stryMutAct_9fa48("2890")) {
            {}
          } else {
            stryCov_9fa48("2890");
            users[user.uid] = user;
          }
        });
        postData.forEach(post => {
          if (stryMutAct_9fa48("2891")) {
            {}
          } else {
            stryCov_9fa48("2891");
            // If the post author isn't represented in the retrieved users' data,
            // then it means they were deleted, assume guest.
            if (stryMutAct_9fa48("2894") ? false : stryMutAct_9fa48("2893") ? true : stryMutAct_9fa48("2892") ? users.hasOwnProperty(post.uid) : (stryCov_9fa48("2892", "2893", "2894"), !users.hasOwnProperty(post.uid))) {
              if (stryMutAct_9fa48("2895")) {
                {}
              } else {
                stryCov_9fa48("2895");
                post.uid = 0;
              }
            }
            post.user = users[post.uid];
            post.timestampISO = utils.toISOString(post.timestamp);
            tidToPost[post.tid] = post;
          }
        });
        await Promise.all(postData.map(stryMutAct_9fa48("2896") ? () => undefined : (stryCov_9fa48("2896"), p => posts.parsePost(p))));
        const {
          tags
        } = await plugins.hooks.fire(stryMutAct_9fa48("2897") ? "" : (stryCov_9fa48("2897"), 'filter:teasers.configureStripTags'), stryMutAct_9fa48("2898") ? {} : (stryCov_9fa48("2898"), {
          tags: stryMutAct_9fa48("2899") ? utils.stripTags : (stryCov_9fa48("2899"), utils.stripTags.slice(0))
        }));
        const teasers = topics.map((topic, index) => {
          if (stryMutAct_9fa48("2900")) {
            {}
          } else {
            stryCov_9fa48("2900");
            if (stryMutAct_9fa48("2903") ? false : stryMutAct_9fa48("2902") ? true : stryMutAct_9fa48("2901") ? topic : (stryCov_9fa48("2901", "2902", "2903"), !topic)) {
              if (stryMutAct_9fa48("2904")) {
                {}
              } else {
                stryCov_9fa48("2904");
                return null;
              }
            }
            const topicPost = tidToPost[topic.tid];
            if (stryMutAct_9fa48("2906") ? false : stryMutAct_9fa48("2905") ? true : (stryCov_9fa48("2905", "2906"), topicPost)) {
              if (stryMutAct_9fa48("2907")) {
                {}
              } else {
                stryCov_9fa48("2907");
                topicPost.index = calcTeaserIndex(teaserPost, counts[index], sortNewToOld);
                if (stryMutAct_9fa48("2909") ? false : stryMutAct_9fa48("2908") ? true : (stryCov_9fa48("2908", "2909"), topicPost.content)) {
                  if (stryMutAct_9fa48("2910")) {
                    {}
                  } else {
                    stryCov_9fa48("2910");
                    topicPost.content = utils.stripHTMLTags(replaceImgWithAltText(topicPost.content), tags);
                  }
                }
              }
            }
            return topicPost;
          }
        });
        const result = await plugins.hooks.fire(stryMutAct_9fa48("2911") ? "" : (stryCov_9fa48("2911"), 'filter:teasers.get'), stryMutAct_9fa48("2912") ? {} : (stryCov_9fa48("2912"), {
          teasers: teasers,
          uid: uid
        }));
        return result.teasers;
      }
    };
    function calcTeaserIndex(teaserPost, postCountInTopic, sortNewToOld) {
      if (stryMutAct_9fa48("2913")) {
        {}
      } else {
        stryCov_9fa48("2913");
        if (stryMutAct_9fa48("2916") ? teaserPost !== 'first' : stryMutAct_9fa48("2915") ? false : stryMutAct_9fa48("2914") ? true : (stryCov_9fa48("2914", "2915", "2916"), teaserPost === (stryMutAct_9fa48("2917") ? "" : (stryCov_9fa48("2917"), 'first')))) {
          if (stryMutAct_9fa48("2918")) {
            {}
          } else {
            stryCov_9fa48("2918");
            return 1;
          }
        }
        if (stryMutAct_9fa48("2920") ? false : stryMutAct_9fa48("2919") ? true : (stryCov_9fa48("2919", "2920"), sortNewToOld)) {
          if (stryMutAct_9fa48("2921")) {
            {}
          } else {
            stryCov_9fa48("2921");
            return stryMutAct_9fa48("2922") ? Math.max(2, postCountInTopic) : (stryCov_9fa48("2922"), Math.min(2, postCountInTopic));
          }
        }
        return postCountInTopic;
      }
    }
    function replaceImgWithAltText(str) {
      if (stryMutAct_9fa48("2923")) {
        {}
      } else {
        stryCov_9fa48("2923");
        return String(str).replace(stryMutAct_9fa48("2927") ? /<img .*?alt="(.*?)"[>]*>/gi : stryMutAct_9fa48("2926") ? /<img .*?alt="(.*?)"[^>]>/gi : stryMutAct_9fa48("2925") ? /<img .*?alt="(.)"[^>]*>/gi : stryMutAct_9fa48("2924") ? /<img .alt="(.*?)"[^>]*>/gi : (stryCov_9fa48("2924", "2925", "2926", "2927"), /<img .*?alt="(.*?)"[^>]*>/gi), stryMutAct_9fa48("2928") ? "" : (stryCov_9fa48("2928"), '$1'));
      }
    }
    async function handleBlocks(uid, teasers) {
      if (stryMutAct_9fa48("2929")) {
        {}
      } else {
        stryCov_9fa48("2929");
        const blockedUids = await user.blocks.list(uid);
        if (stryMutAct_9fa48("2932") ? false : stryMutAct_9fa48("2931") ? true : stryMutAct_9fa48("2930") ? blockedUids.length : (stryCov_9fa48("2930", "2931", "2932"), !blockedUids.length)) {
          if (stryMutAct_9fa48("2933")) {
            {}
          } else {
            stryCov_9fa48("2933");
            return teasers;
          }
        }
        return await Promise.all(teasers.map(async postData => {
          if (stryMutAct_9fa48("2934")) {
            {}
          } else {
            stryCov_9fa48("2934");
            if (stryMutAct_9fa48("2936") ? false : stryMutAct_9fa48("2935") ? true : (stryCov_9fa48("2935", "2936"), blockedUids.includes(parseInt(postData.uid, 10)))) {
              if (stryMutAct_9fa48("2937")) {
                {}
              } else {
                stryCov_9fa48("2937");
                return await getPreviousNonBlockedPost(postData, blockedUids);
              }
            }
            return postData;
          }
        }));
      }
    }
    async function getPreviousNonBlockedPost(postData, blockedUids) {
      if (stryMutAct_9fa48("2938")) {
        {}
      } else {
        stryCov_9fa48("2938");
        let isBlocked = stryMutAct_9fa48("2939") ? true : (stryCov_9fa48("2939"), false);
        let prevPost = postData;
        const postsPerIteration = 5;
        let start = 0;
        let stop = stryMutAct_9fa48("2940") ? start + postsPerIteration + 1 : (stryCov_9fa48("2940"), (stryMutAct_9fa48("2941") ? start - postsPerIteration : (stryCov_9fa48("2941"), start + postsPerIteration)) - 1);
        let checkedAllReplies = stryMutAct_9fa48("2942") ? true : (stryCov_9fa48("2942"), false);
        function checkBlocked(post) {
          if (stryMutAct_9fa48("2943")) {
            {}
          } else {
            stryCov_9fa48("2943");
            const isPostBlocked = blockedUids.includes(parseInt(post.uid, 10));
            prevPost = (stryMutAct_9fa48("2944") ? isPostBlocked : (stryCov_9fa48("2944"), !isPostBlocked)) ? post : prevPost;
            return isPostBlocked;
          }
        }
        do {
          if (stryMutAct_9fa48("2952")) {
            {}
          } else {
            stryCov_9fa48("2952");
            /* eslint-disable no-await-in-loop */
            let pids = await db.getSortedSetRevRange(stryMutAct_9fa48("2953") ? `` : (stryCov_9fa48("2953"), `tid:${postData.tid}:posts`), start, stop);
            if (stryMutAct_9fa48("2956") ? false : stryMutAct_9fa48("2955") ? true : stryMutAct_9fa48("2954") ? pids.length : (stryCov_9fa48("2954", "2955", "2956"), !pids.length)) {
              if (stryMutAct_9fa48("2957")) {
                {}
              } else {
                stryCov_9fa48("2957");
                checkedAllReplies = stryMutAct_9fa48("2958") ? false : (stryCov_9fa48("2958"), true);
                const mainPid = await Topics.getTopicField(postData.tid, stryMutAct_9fa48("2959") ? "" : (stryCov_9fa48("2959"), 'mainPid'));
                pids = stryMutAct_9fa48("2960") ? [] : (stryCov_9fa48("2960"), [mainPid]);
              }
            }
            const prevPosts = await posts.getPostsFields(pids, stryMutAct_9fa48("2961") ? [] : (stryCov_9fa48("2961"), [stryMutAct_9fa48("2962") ? "" : (stryCov_9fa48("2962"), 'pid'), stryMutAct_9fa48("2963") ? "" : (stryCov_9fa48("2963"), 'uid'), stryMutAct_9fa48("2964") ? "" : (stryCov_9fa48("2964"), 'timestamp'), stryMutAct_9fa48("2965") ? "" : (stryCov_9fa48("2965"), 'tid'), stryMutAct_9fa48("2966") ? "" : (stryCov_9fa48("2966"), 'content')]));
            isBlocked = stryMutAct_9fa48("2967") ? prevPosts.some(checkBlocked) : (stryCov_9fa48("2967"), prevPosts.every(checkBlocked));
            stryMutAct_9fa48("2968") ? start -= postsPerIteration : (stryCov_9fa48("2968"), start += postsPerIteration);
            stop = stryMutAct_9fa48("2969") ? start + postsPerIteration + 1 : (stryCov_9fa48("2969"), (stryMutAct_9fa48("2970") ? start - postsPerIteration : (stryCov_9fa48("2970"), start + postsPerIteration)) - 1);
          }
        } while (stryMutAct_9fa48("2946") ? isBlocked && prevPost && prevPost.pid || !checkedAllReplies : stryMutAct_9fa48("2945") ? false : (stryCov_9fa48("2945", "2946"), (stryMutAct_9fa48("2948") ? isBlocked && prevPost || prevPost.pid : stryMutAct_9fa48("2947") ? true : (stryCov_9fa48("2947", "2948"), (stryMutAct_9fa48("2950") ? isBlocked || prevPost : stryMutAct_9fa48("2949") ? true : (stryCov_9fa48("2949", "2950"), isBlocked && prevPost)) && prevPost.pid)) && (stryMutAct_9fa48("2951") ? checkedAllReplies : (stryCov_9fa48("2951"), !checkedAllReplies))));
        return prevPost;
      }
    }
    Topics.getTeasersByTids = async function (tids, uid) {
      if (stryMutAct_9fa48("2971")) {
        {}
      } else {
        stryCov_9fa48("2971");
        if (stryMutAct_9fa48("2974") ? !Array.isArray(tids) && !tids.length : stryMutAct_9fa48("2973") ? false : stryMutAct_9fa48("2972") ? true : (stryCov_9fa48("2972", "2973", "2974"), (stryMutAct_9fa48("2975") ? Array.isArray(tids) : (stryCov_9fa48("2975"), !Array.isArray(tids))) || (stryMutAct_9fa48("2976") ? tids.length : (stryCov_9fa48("2976"), !tids.length)))) {
          if (stryMutAct_9fa48("2977")) {
            {}
          } else {
            stryCov_9fa48("2977");
            return stryMutAct_9fa48("2978") ? ["Stryker was here"] : (stryCov_9fa48("2978"), []);
          }
        }
        const topics = await Topics.getTopicsFields(tids, stryMutAct_9fa48("2979") ? [] : (stryCov_9fa48("2979"), [stryMutAct_9fa48("2980") ? "" : (stryCov_9fa48("2980"), 'tid'), stryMutAct_9fa48("2981") ? "" : (stryCov_9fa48("2981"), 'postcount'), stryMutAct_9fa48("2982") ? "" : (stryCov_9fa48("2982"), 'teaserPid'), stryMutAct_9fa48("2983") ? "" : (stryCov_9fa48("2983"), 'mainPid')]));
        return await Topics.getTeasers(topics, uid);
      }
    };
    Topics.getTeaser = async function (tid, uid) {
      if (stryMutAct_9fa48("2984")) {
        {}
      } else {
        stryCov_9fa48("2984");
        const teasers = await Topics.getTeasersByTids(stryMutAct_9fa48("2985") ? [] : (stryCov_9fa48("2985"), [tid]), uid);
        return (stryMutAct_9fa48("2988") ? Array.isArray(teasers) || teasers.length : stryMutAct_9fa48("2987") ? false : stryMutAct_9fa48("2986") ? true : (stryCov_9fa48("2986", "2987", "2988"), Array.isArray(teasers) && teasers.length)) ? teasers[0] : null;
      }
    };
    Topics.updateTeaser = async function (tid) {
      if (stryMutAct_9fa48("2989")) {
        {}
      } else {
        stryCov_9fa48("2989");
        let pid = await Topics.getLatestUndeletedReply(tid);
        pid = stryMutAct_9fa48("2992") ? pid && null : stryMutAct_9fa48("2991") ? false : stryMutAct_9fa48("2990") ? true : (stryCov_9fa48("2990", "2991", "2992"), pid || null);
        if (stryMutAct_9fa48("2994") ? false : stryMutAct_9fa48("2993") ? true : (stryCov_9fa48("2993", "2994"), pid)) {
          if (stryMutAct_9fa48("2995")) {
            {}
          } else {
            stryCov_9fa48("2995");
            await Topics.setTopicField(tid, stryMutAct_9fa48("2996") ? "" : (stryCov_9fa48("2996"), 'teaserPid'), pid);
          }
        } else {
          if (stryMutAct_9fa48("2997")) {
            {}
          } else {
            stryCov_9fa48("2997");
            await Topics.deleteTopicField(tid, stryMutAct_9fa48("2998") ? "" : (stryCov_9fa48("2998"), 'teaserPid'));
          }
        }
      }
    };
  }
};