// let configMap = {};
// const DEFAULT_CONFIG = {
//   // 是否对大小写敏感 '/AuTh/uSEr' => '/auth/user'
//   /** @type {boolean} */
//   sensitive: false,
//
//   // 默认的 parentPath => router.addRoutes(routes, parentPath)
//   /** @type {string} */
//   parentPath: '/',
//
//   // 获取资源的配置函数，支持同步和异步
//   /** @type {Object|Function} */
//   resources: () => {
//     throw new Error(
//       `Must implements 'resources: {[prefix: string]: Resources | () => Resources | () => Promise<Resources>}' by yourself.`
//     )
//   }
// }
export default {
  //router添加 name
  // resetRouter: function (tree, parent) {
  //   let lists = [];
  //   let toArr = function (children, parent) {
  //     for (var i = 0; i < children.length; i++) {
  //       var c = children[i]['children'];
  //       let path = children[i].path;
  //       (path[0] == '/') && (path = path.substr(1));
  //       let name = children[i].name;
  //       children[i].path = '/' + parent + path;
  //       children[i].name = (parent + '-' + name).replace(/\//g, '-');
  //       if (c && c.length > 0) {
  //         let childParent = parent + path + '/'
  //         toArr(c, childParent);
  //         delete children[i].children
  //       }
  //       lists.push(children[i]);
  //     }
  //   }
  //   toArr(tree, parent);
  //   return lists;
  // }
  routerChangeName: function (tree, parent) {
    let initParent = parent;
    let toArr = function (children, parent) {
      for (var i = 0; i < children.length; i++) {
        var c = children[i]['children'];
        let path = children[i].path;
        (path == '/') && (path = '');
        let name = children[i].name;
        children[i].path = '/' + parent + path;
        children[i].name = initParent + '-' + name;
        children[i].meta = {
          type: initParent,
        };
        if (c && c.length > 0) {
          let childParent = parent + path + '/'
          toArr(c, childParent);
        }
      }
    }
    toArr(tree, parent);
    return tree;
  },
  assignStore(obj1, obj2){
    let obj = {};
    obj.state = {...(obj1.state ? obj1.state : {}), ...(obj2.state ? obj2.state : {})}
    obj.mutations = {...(obj1.mutations ? obj1.mutations : {}), ...(obj2.mutations ? obj2.mutations : {})}
    obj.actions = {...(obj1.actions ? obj1.actions : {}), ...(obj2.actions ? obj2.actions : {})}
    obj.modules = {...(obj1.modules ? obj1.modules : {}), ...(obj2.modules ? obj2.modules : {})}
    return obj;
  },

  //init app
  // createApp(config) {
  //   // required property
  //   if (!config.router) {
  //     throw new Error(
  //       `Missing property 'router: VueRouter' in config \n${JSON.stringify(
  //         config
  //       )}`
  //     )
  //   }
  //
  //   if (!(config.router instanceof VueRouter)) {
  //     throw new Error(
  //       `The router must be an instance of VueRouter not ${typeof config.router}`
  //     )
  //   }
  //
  //   // At fist, set the global config with wildcard key '*'
  //   this.registerApp(Object.assign({}, DEFAULT_CONFIG, config))
  //
  //   // Then enhance router and register before-hook to intercept unmatchable route
  //   this.init(config.router)
  // },
  // init(router) {
  //   if (router.addRoutes !== this.addRoutes) {
  //     router.addRoutes = this.addRoutes.bind(router)
  //   }
  //
  //   // @ts-ignore
  //   this.refresh(router.options.routes)
  //   registerHook(router)
  // },
  // addRoutes(newRoutes, parentPath, oldRoutes) {
  //   // before merge new routes we need to check them out does
  //   // any path or name whether duplicate in old routes
  //   this.refresh(newRoutes, parentPath)
  //
  //   // reset current router's matcher with merged routes
  //   this.getRouter().matcher = new VueRouter(
  //     normalizeOptions(
  //       // @ts-ignore
  //       adaptRouterOptions(oldRoutes || getRouter()),
  //       { routes: newRoutes },
  //       parentPath
  //     )
  //     // @ts-ignore
  //   ).matcher
  // },
  // getRouter(){
  //   return this.getConfig().router
  // },
  // getConfig(prefix = '*') {
  //   // @ts-ignore
  //   console.log('get', configMap)
  //   return configMap.get(prefix) || {}
  // },
  // normalizeOptions(oldOpts, newOpts, parentPath) {
  //   const { routes: oldRoutes = [], ...oldProps } = oldOpts
  //   const { routes: newRoutes = [], ...newProps } = newOpts
  //
  //   return Object.assign(
  //     {
  //       routes: this.mergeRoutes(oldRoutes, newRoutes, parentPath)
  //     },
  //     newProps,
  //     oldProps
  //   )
  // },
  // mergeRoutes(oldRoutes, newRoutes, parentPath) {
  //   const needMatchPath = parentPath
  //
  //   newRoutes.forEach((route) => {
  //     if (this.isString(route.parentPath)) {
  //       parentPath = route.parentPath
  //       delete route.parentPath
  //     } else {
  //       parentPath = needMatchPath
  //     }
  //
  //     if (this.isString(parentPath)) {
  //       if (parentPath === '') {
  //         oldRoutes.push(route)
  //       } else {
  //         const oldRoute = findRoute(oldRoutes, parentPath)
  //         let path = route.path
  //
  //         if (oldRoute) {
  //           (oldRoute.children || (oldRoute.children = [])).push(
  //             Object.assign({}, route, {
  //               path:
  //                 parentPath && path.startsWith('/')
  //                   ? (path = path.replace(/^\/*/, ''))
  //                   : path /* fix: @issue that nested paths that start with `/` will be treated as a root path */
  //             })
  //           )
  //         }
  //       }
  //     } else {
  //       oldRoutes.push(route)
  //     }
  //   })
  //
  //   return oldRoutes
  // },
  //
  // refresh(routes, parentPath) {
  //   routes.forEach(
  //     ({ path, parentPath: selfParentPath, name, children, childrenApps }) => {
  //       /* 优先级 route.parentPath > VueMfe.SubAppConfig.parentPath >
  //       VueMfe.AppConfig.parentPath > VueMfe.defaultConfig.parentPath */
  //
  //       if (path) {
  //         if (selfParentPath) {
  //           path = genParentPath(path, selfParentPath, name)
  //         } else if (parentPath) {
  //           path = genParentPath(path, parentPath, name)
  //         }
  //       }
  //
  //       if (path) {
  //         if (!pathExists(path)) {
  //           pathList.push(path)
  //         } else {
  //           warn(`The path ${path} in pathList has been existed`)
  //         }
  //       }
  //
  //       if (name) {
  //         if (!nameExists(name)) {
  //           pathMap[name] = path
  //         } else {
  //           warn(`The name ${name} in pathMap has been existed`)
  //         }
  //       }
  //
  //       // if childrenApps exists records it with its fullPath
  //       registerChildren(childrenApps, path)
  //
  //       if (children && children.length) {
  //         // @ts-ignore
  //         return refresh(children, path)
  //       }
  //     }
  //   )
  // },
  // registerHook(router) {
  //   // 处理 none-matched route 并尝试去安装和调用
  //   router.beforeEach(function handleUnmatchableRoute(to, from, next) {
  //     // @ts-ignore
  //     if (isUnmatchableRoute(to)) {
  //       const prefix = getPrefix(to)
  //       if (!prefix) return
  //
  //       const args = { name: prefix, to, from, next }
  //
  //       if (isInstalling(prefix)) {
  //         return
  //       }
  //
  //       if (isInstalled(prefix)) {
  //         const children = getChildrenApp(to.fullPath || to.path)
  //
  //         if (children && children.length) {
  //           return installChildren(children, args)
  //         } else {
  //           createError(
  //             null,
  //             `${prefix} has been installed but it has no any path like ${to.path}`,
  //             LOAD_DUPLICATE_WITHOUT_PATH,
  //             prefix,
  //             args
  //           )
  //         }
  //       } else {
  //         return install(args)
  //       }
  //     } else {
  //       return next()
  //     }
  //   })
  // },
  // isUnmatchableRoute(route) {
  //   if (route.name && nameExists(route.name)) {
  //     return false
  //   }
  //
  //   if (pathExists(route.path)) {
  //     return false
  //   }
  //
  //   return route.matched.length === 0
  // },
  //
  //
  //
  //
  //
  //
  // //create app
  // createSubApp(config) {
  //   // required property
  //   if (!config.prefix) {
  //     throw new Error(
  //       `Missing property 'prefix: string' in config \n${JSON.stringify(config)}`
  //     )
  //   }
  //
  //   // required property
  //   if (!config.routes) {
  //     throw new Error(
  //       `Missing property 'routes: Route[]' in config \n${JSON.stringify(config)}`
  //     )
  //   }
  //
  //   this.registerApp(config)
  //   return config
  // },
  // registerApp: (prefix, config) => {
  //   // 默认的全局配置为 { *: config }
  //   if (this.isObject(prefix)) {
  //     // @ts-ignore
  //     config = prefix
  //     prefix = config.prefix || '*'
  //   }
  //
  //   if (this.isString(prefix) && this.isObject(config)) {
  //     // @ts-ignore
  //     console.log('set', configMap)
  //     return configMap.set(prefix, config)
  //   }
  //
  //   return false
  // },
  //
  //
  //
  //
  // isArray: (arr) => Array.isArray(arr),
  // isFunction: (fn) => fn && typeof fn === 'function',
  // isObject: (obj) => obj && typeof obj === 'object',
  // isString: (str) => typeof str === 'string',
}