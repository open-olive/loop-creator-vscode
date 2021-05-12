/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

"use strict";
module.exports = require("vscode");;

/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoopCreator = void 0;
const vscode = __webpack_require__(1);
const fs = __webpack_require__(3);
const path = __webpack_require__(17);
const vscode_1 = __webpack_require__(1);
const Sqrl = __webpack_require__(46);
const utils_1 = __webpack_require__(47);
class LoopCreator {
    constructor(context) {
        this.context = context;
    }
    createFiles(isTypeScript, basePath, ldkVersion, projectName, aptitudes, clipboardReason, keyboardReason, networkReason, searchReason, windowReason, networkUrl, urlReason) {
        return __awaiter(this, void 0, void 0, function* () {
            let templatePath;
            let templateContents;
            let fileContents;
            templatePath = path.join(this.context.extensionPath, "templates", "README.md.squirrelly");
            templateContents = yield fs.readFile(templatePath, "utf-8");
            fileContents = Sqrl.render(templateContents, { projectName });
            yield fs.writeFile(path.join(basePath, "README.md"), fileContents);
            templatePath = path.join(this.context.extensionPath, "templates", "package.json.squirrelly");
            templateContents = yield fs.readFile(templatePath, "utf-8");
            fileContents = Sqrl.render(templateContents, {
                isTypeScript,
                ldkVersion,
                projectName,
                aptitudes,
                clipboardReason,
                keyboardReason,
                networkReason,
                searchReason,
                windowReason,
                networkUrl,
                urlReason,
            });
            yield fs.writeFile(path.join(basePath, "package.json"), fileContents);
            templatePath = path.join(this.context.extensionPath, "templates", "src", "index.ts.squirrelly");
            templateContents = yield fs.readFile(templatePath, "utf-8");
            fileContents = Sqrl.render(templateContents, {
                isTypeScript,
                projectName,
                aptitudes,
            });
            yield fs.writeFile(path.join(basePath, "src", `index.${isTypeScript ? "ts" : "js"}`), fileContents);
            if (isTypeScript) {
                templatePath = path.join(this.context.extensionPath, "templates", "tsconfig.json");
                fileContents = yield fs.readFile(templatePath, "utf-8");
                yield fs.writeFile(path.join(basePath, "tsconfig.json"), fileContents);
            }
        });
    }
    createLoop({ language, ldkVersion, path: basePath, projectName, aptitudes, clipboardReason, keyboardReason, networkReason, searchReason, windowReason, networkUrl, urlReason, }) {
        return __awaiter(this, void 0, void 0, function* () {
            yield fs.ensureDir(basePath);
            yield fs.ensureDir(path.join(basePath, "src"));
            yield this.createFiles(language === "TypeScript", basePath, ldkVersion, projectName, aptitudes, clipboardReason, keyboardReason, networkReason, searchReason, windowReason, networkUrl, urlReason);
            let uri = vscode_1.Uri.file(basePath);
            yield vscode.commands.executeCommand("vscode.openFolder", uri, {
                forceNewWindow: true,
            });
        });
    }
    openCreateLoopWebview() {
        return __awaiter(this, void 0, void 0, function* () {
            const panel = vscode.window.createWebviewPanel("loopInfo", // Identifies the type of the webview. Used internally
            "Create Loop", // Title of the panel displayed to the user
            vscode.ViewColumn.One, {
                enableScripts: true,
            });
            const createLoopFormPath = path.join(this.context.extensionPath, "src", "createLoopForm.html");
            const createLoopFormHtml = fs.readFileSync(createLoopFormPath, "utf-8");
            panel.webview.html = createLoopFormHtml;
            panel.webview.onDidReceiveMessage((message) => __awaiter(this, void 0, void 0, function* () {
                try {
                    if (message.command === "openFolderDialog") {
                        const uri = yield utils_1.openDialogForFolder();
                        panel.webview.postMessage({ command: "getProjectPath", payload: uri.path });
                    }
                    else if (message.command === "createLoop") {
                        this.createLoop(message.payload);
                        panel.dispose();
                    }
                    else {
                        throw new Error(`Invalid command "${message.command}".`);
                    }
                }
                catch (err) {
                    console.error(err);
                    vscode.window.showErrorMessage(`Error creating loop: ${err.message}`);
                }
            }));
        });
    }
}
exports.LoopCreator = LoopCreator;


/***/ }),
/* 3 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = {
  // Export promiseified graceful-fs:
  ...__webpack_require__(4),
  // Export extra methods:
  ...__webpack_require__(15),
  ...__webpack_require__(23),
  ...__webpack_require__(26),
  ...__webpack_require__(29),
  ...__webpack_require__(35),
  ...__webpack_require__(18),
  ...__webpack_require__(42),
  ...__webpack_require__(44),
  ...__webpack_require__(40),
  ...__webpack_require__(25),
  ...__webpack_require__(27)
}

// Export fs.promises as a getter property so that we don't trigger
// ExperimentalWarning before fs.promises is actually accessed.
const fs = __webpack_require__(7)
if (Object.getOwnPropertyDescriptor(fs, 'promises')) {
  Object.defineProperty(module.exports, "promises", ({
    get () { return fs.promises }
  }))
}


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// This is adapted from https://github.com/normalize/mz
// Copyright (c) 2014-2016 Jonathan Ong me@jongleberry.com and Contributors
const u = __webpack_require__(5).fromCallback
const fs = __webpack_require__(6)

const api = [
  'access',
  'appendFile',
  'chmod',
  'chown',
  'close',
  'copyFile',
  'fchmod',
  'fchown',
  'fdatasync',
  'fstat',
  'fsync',
  'ftruncate',
  'futimes',
  'lchmod',
  'lchown',
  'link',
  'lstat',
  'mkdir',
  'mkdtemp',
  'open',
  'opendir',
  'readdir',
  'readFile',
  'readlink',
  'realpath',
  'rename',
  'rm',
  'rmdir',
  'stat',
  'symlink',
  'truncate',
  'unlink',
  'utimes',
  'writeFile'
].filter(key => {
  // Some commands are not available on some systems. Ex:
  // fs.opendir was added in Node.js v12.12.0
  // fs.rm was added in Node.js v14.14.0
  // fs.lchown is not available on at least some Linux
  return typeof fs[key] === 'function'
})

// Export all keys:
Object.keys(fs).forEach(key => {
  if (key === 'promises') {
    // fs.promises is a getter property that triggers ExperimentalWarning
    // Don't re-export it here, the getter is defined in "lib/index.js"
    return
  }
  exports[key] = fs[key]
})

// Universalify async methods:
api.forEach(method => {
  exports[method] = u(fs[method])
})

// We differ from mz/fs in that we still ship the old, broken, fs.exists()
// since we are a drop-in replacement for the native module
exports.exists = function (filename, callback) {
  if (typeof callback === 'function') {
    return fs.exists(filename, callback)
  }
  return new Promise(resolve => {
    return fs.exists(filename, resolve)
  })
}

// fs.read(), fs.write(), & fs.writev() need special treatment due to multiple callback args

exports.read = function (fd, buffer, offset, length, position, callback) {
  if (typeof callback === 'function') {
    return fs.read(fd, buffer, offset, length, position, callback)
  }
  return new Promise((resolve, reject) => {
    fs.read(fd, buffer, offset, length, position, (err, bytesRead, buffer) => {
      if (err) return reject(err)
      resolve({ bytesRead, buffer })
    })
  })
}

// Function signature can be
// fs.write(fd, buffer[, offset[, length[, position]]], callback)
// OR
// fs.write(fd, string[, position[, encoding]], callback)
// We need to handle both cases, so we use ...args
exports.write = function (fd, buffer, ...args) {
  if (typeof args[args.length - 1] === 'function') {
    return fs.write(fd, buffer, ...args)
  }

  return new Promise((resolve, reject) => {
    fs.write(fd, buffer, ...args, (err, bytesWritten, buffer) => {
      if (err) return reject(err)
      resolve({ bytesWritten, buffer })
    })
  })
}

// fs.writev only available in Node v12.9.0+
if (typeof fs.writev === 'function') {
  // Function signature is
  // s.writev(fd, buffers[, position], callback)
  // We need to handle the optional arg, so we use ...args
  exports.writev = function (fd, buffers, ...args) {
    if (typeof args[args.length - 1] === 'function') {
      return fs.writev(fd, buffers, ...args)
    }

    return new Promise((resolve, reject) => {
      fs.writev(fd, buffers, ...args, (err, bytesWritten, buffers) => {
        if (err) return reject(err)
        resolve({ bytesWritten, buffers })
      })
    })
  }
}

// fs.realpath.native only available in Node v9.2+
if (typeof fs.realpath.native === 'function') {
  exports.realpath.native = u(fs.realpath.native)
}


/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.fromCallback = function (fn) {
  return Object.defineProperty(function (...args) {
    if (typeof args[args.length - 1] === 'function') fn.apply(this, args)
    else {
      return new Promise((resolve, reject) => {
        fn.call(
          this,
          ...args,
          (err, res) => (err != null) ? reject(err) : resolve(res)
        )
      })
    }
  }, 'name', { value: fn.name })
}

exports.fromPromise = function (fn) {
  return Object.defineProperty(function (...args) {
    const cb = args[args.length - 1]
    if (typeof cb !== 'function') return fn.apply(this, args)
    else fn.apply(this, args.slice(0, -1)).then(r => cb(null, r), cb)
  }, 'name', { value: fn.name })
}


/***/ }),
/* 6 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fs = __webpack_require__(7)
var polyfills = __webpack_require__(8)
var legacy = __webpack_require__(10)
var clone = __webpack_require__(12)

var util = __webpack_require__(13)

/* istanbul ignore next - node 0.x polyfill */
var gracefulQueue
var previousSymbol

/* istanbul ignore else - node 0.x polyfill */
if (typeof Symbol === 'function' && typeof Symbol.for === 'function') {
  gracefulQueue = Symbol.for('graceful-fs.queue')
  // This is used in testing by future versions
  previousSymbol = Symbol.for('graceful-fs.previous')
} else {
  gracefulQueue = '___graceful-fs.queue'
  previousSymbol = '___graceful-fs.previous'
}

function noop () {}

function publishQueue(context, queue) {
  Object.defineProperty(context, gracefulQueue, {
    get: function() {
      return queue
    }
  })
}

var debug = noop
if (util.debuglog)
  debug = util.debuglog('gfs4')
else if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || ''))
  debug = function() {
    var m = util.format.apply(util, arguments)
    m = 'GFS4: ' + m.split(/\n/).join('\nGFS4: ')
    console.error(m)
  }

// Once time initialization
if (!fs[gracefulQueue]) {
  // This queue can be shared by multiple loaded instances
  var queue = global[gracefulQueue] || []
  publishQueue(fs, queue)

  // Patch fs.close/closeSync to shared queue version, because we need
  // to retry() whenever a close happens *anywhere* in the program.
  // This is essential when multiple graceful-fs instances are
  // in play at the same time.
  fs.close = (function (fs$close) {
    function close (fd, cb) {
      return fs$close.call(fs, fd, function (err) {
        // This function uses the graceful-fs shared queue
        if (!err) {
          retry()
        }

        if (typeof cb === 'function')
          cb.apply(this, arguments)
      })
    }

    Object.defineProperty(close, previousSymbol, {
      value: fs$close
    })
    return close
  })(fs.close)

  fs.closeSync = (function (fs$closeSync) {
    function closeSync (fd) {
      // This function uses the graceful-fs shared queue
      fs$closeSync.apply(fs, arguments)
      retry()
    }

    Object.defineProperty(closeSync, previousSymbol, {
      value: fs$closeSync
    })
    return closeSync
  })(fs.closeSync)

  if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || '')) {
    process.on('exit', function() {
      debug(fs[gracefulQueue])
      __webpack_require__(14).equal(fs[gracefulQueue].length, 0)
    })
  }
}

if (!global[gracefulQueue]) {
  publishQueue(global, fs[gracefulQueue]);
}

module.exports = patch(clone(fs))
if (process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH && !fs.__patched) {
    module.exports = patch(fs)
    fs.__patched = true;
}

function patch (fs) {
  // Everything that references the open() function needs to be in here
  polyfills(fs)
  fs.gracefulify = patch

  fs.createReadStream = createReadStream
  fs.createWriteStream = createWriteStream
  var fs$readFile = fs.readFile
  fs.readFile = readFile
  function readFile (path, options, cb) {
    if (typeof options === 'function')
      cb = options, options = null

    return go$readFile(path, options, cb)

    function go$readFile (path, options, cb) {
      return fs$readFile(path, options, function (err) {
        if (err && (err.code === 'EMFILE' || err.code === 'ENFILE'))
          enqueue([go$readFile, [path, options, cb]])
        else {
          if (typeof cb === 'function')
            cb.apply(this, arguments)
          retry()
        }
      })
    }
  }

  var fs$writeFile = fs.writeFile
  fs.writeFile = writeFile
  function writeFile (path, data, options, cb) {
    if (typeof options === 'function')
      cb = options, options = null

    return go$writeFile(path, data, options, cb)

    function go$writeFile (path, data, options, cb) {
      return fs$writeFile(path, data, options, function (err) {
        if (err && (err.code === 'EMFILE' || err.code === 'ENFILE'))
          enqueue([go$writeFile, [path, data, options, cb]])
        else {
          if (typeof cb === 'function')
            cb.apply(this, arguments)
          retry()
        }
      })
    }
  }

  var fs$appendFile = fs.appendFile
  if (fs$appendFile)
    fs.appendFile = appendFile
  function appendFile (path, data, options, cb) {
    if (typeof options === 'function')
      cb = options, options = null

    return go$appendFile(path, data, options, cb)

    function go$appendFile (path, data, options, cb) {
      return fs$appendFile(path, data, options, function (err) {
        if (err && (err.code === 'EMFILE' || err.code === 'ENFILE'))
          enqueue([go$appendFile, [path, data, options, cb]])
        else {
          if (typeof cb === 'function')
            cb.apply(this, arguments)
          retry()
        }
      })
    }
  }

  var fs$copyFile = fs.copyFile
  if (fs$copyFile)
    fs.copyFile = copyFile
  function copyFile (src, dest, flags, cb) {
    if (typeof flags === 'function') {
      cb = flags
      flags = 0
    }
    return fs$copyFile(src, dest, flags, function (err) {
      if (err && (err.code === 'EMFILE' || err.code === 'ENFILE'))
        enqueue([fs$copyFile, [src, dest, flags, cb]])
      else {
        if (typeof cb === 'function')
          cb.apply(this, arguments)
        retry()
      }
    })
  }

  var fs$readdir = fs.readdir
  fs.readdir = readdir
  function readdir (path, options, cb) {
    var args = [path]
    if (typeof options !== 'function') {
      args.push(options)
    } else {
      cb = options
    }
    args.push(go$readdir$cb)

    return go$readdir(args)

    function go$readdir$cb (err, files) {
      if (files && files.sort)
        files.sort()

      if (err && (err.code === 'EMFILE' || err.code === 'ENFILE'))
        enqueue([go$readdir, [args]])

      else {
        if (typeof cb === 'function')
          cb.apply(this, arguments)
        retry()
      }
    }
  }

  function go$readdir (args) {
    return fs$readdir.apply(fs, args)
  }

  if (process.version.substr(0, 4) === 'v0.8') {
    var legStreams = legacy(fs)
    ReadStream = legStreams.ReadStream
    WriteStream = legStreams.WriteStream
  }

  var fs$ReadStream = fs.ReadStream
  if (fs$ReadStream) {
    ReadStream.prototype = Object.create(fs$ReadStream.prototype)
    ReadStream.prototype.open = ReadStream$open
  }

  var fs$WriteStream = fs.WriteStream
  if (fs$WriteStream) {
    WriteStream.prototype = Object.create(fs$WriteStream.prototype)
    WriteStream.prototype.open = WriteStream$open
  }

  Object.defineProperty(fs, 'ReadStream', {
    get: function () {
      return ReadStream
    },
    set: function (val) {
      ReadStream = val
    },
    enumerable: true,
    configurable: true
  })
  Object.defineProperty(fs, 'WriteStream', {
    get: function () {
      return WriteStream
    },
    set: function (val) {
      WriteStream = val
    },
    enumerable: true,
    configurable: true
  })

  // legacy names
  var FileReadStream = ReadStream
  Object.defineProperty(fs, 'FileReadStream', {
    get: function () {
      return FileReadStream
    },
    set: function (val) {
      FileReadStream = val
    },
    enumerable: true,
    configurable: true
  })
  var FileWriteStream = WriteStream
  Object.defineProperty(fs, 'FileWriteStream', {
    get: function () {
      return FileWriteStream
    },
    set: function (val) {
      FileWriteStream = val
    },
    enumerable: true,
    configurable: true
  })

  function ReadStream (path, options) {
    if (this instanceof ReadStream)
      return fs$ReadStream.apply(this, arguments), this
    else
      return ReadStream.apply(Object.create(ReadStream.prototype), arguments)
  }

  function ReadStream$open () {
    var that = this
    open(that.path, that.flags, that.mode, function (err, fd) {
      if (err) {
        if (that.autoClose)
          that.destroy()

        that.emit('error', err)
      } else {
        that.fd = fd
        that.emit('open', fd)
        that.read()
      }
    })
  }

  function WriteStream (path, options) {
    if (this instanceof WriteStream)
      return fs$WriteStream.apply(this, arguments), this
    else
      return WriteStream.apply(Object.create(WriteStream.prototype), arguments)
  }

  function WriteStream$open () {
    var that = this
    open(that.path, that.flags, that.mode, function (err, fd) {
      if (err) {
        that.destroy()
        that.emit('error', err)
      } else {
        that.fd = fd
        that.emit('open', fd)
      }
    })
  }

  function createReadStream (path, options) {
    return new fs.ReadStream(path, options)
  }

  function createWriteStream (path, options) {
    return new fs.WriteStream(path, options)
  }

  var fs$open = fs.open
  fs.open = open
  function open (path, flags, mode, cb) {
    if (typeof mode === 'function')
      cb = mode, mode = null

    return go$open(path, flags, mode, cb)

    function go$open (path, flags, mode, cb) {
      return fs$open(path, flags, mode, function (err, fd) {
        if (err && (err.code === 'EMFILE' || err.code === 'ENFILE'))
          enqueue([go$open, [path, flags, mode, cb]])
        else {
          if (typeof cb === 'function')
            cb.apply(this, arguments)
          retry()
        }
      })
    }
  }

  return fs
}

function enqueue (elem) {
  debug('ENQUEUE', elem[0].name, elem[1])
  fs[gracefulQueue].push(elem)
}

function retry () {
  var elem = fs[gracefulQueue].shift()
  if (elem) {
    debug('RETRY', elem[0].name, elem[1])
    elem[0].apply(null, elem[1])
  }
}


/***/ }),
/* 7 */
/***/ ((module) => {

"use strict";
module.exports = require("fs");;

/***/ }),
/* 8 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var constants = __webpack_require__(9)

var origCwd = process.cwd
var cwd = null

var platform = process.env.GRACEFUL_FS_PLATFORM || process.platform

process.cwd = function() {
  if (!cwd)
    cwd = origCwd.call(process)
  return cwd
}
try {
  process.cwd()
} catch (er) {}

// This check is needed until node.js 12 is required
if (typeof process.chdir === 'function') {
  var chdir = process.chdir
  process.chdir = function (d) {
    cwd = null
    chdir.call(process, d)
  }
  if (Object.setPrototypeOf) Object.setPrototypeOf(process.chdir, chdir)
}

module.exports = patch

function patch (fs) {
  // (re-)implement some things that are known busted or missing.

  // lchmod, broken prior to 0.6.2
  // back-port the fix here.
  if (constants.hasOwnProperty('O_SYMLINK') &&
      process.version.match(/^v0\.6\.[0-2]|^v0\.5\./)) {
    patchLchmod(fs)
  }

  // lutimes implementation, or no-op
  if (!fs.lutimes) {
    patchLutimes(fs)
  }

  // https://github.com/isaacs/node-graceful-fs/issues/4
  // Chown should not fail on einval or eperm if non-root.
  // It should not fail on enosys ever, as this just indicates
  // that a fs doesn't support the intended operation.

  fs.chown = chownFix(fs.chown)
  fs.fchown = chownFix(fs.fchown)
  fs.lchown = chownFix(fs.lchown)

  fs.chmod = chmodFix(fs.chmod)
  fs.fchmod = chmodFix(fs.fchmod)
  fs.lchmod = chmodFix(fs.lchmod)

  fs.chownSync = chownFixSync(fs.chownSync)
  fs.fchownSync = chownFixSync(fs.fchownSync)
  fs.lchownSync = chownFixSync(fs.lchownSync)

  fs.chmodSync = chmodFixSync(fs.chmodSync)
  fs.fchmodSync = chmodFixSync(fs.fchmodSync)
  fs.lchmodSync = chmodFixSync(fs.lchmodSync)

  fs.stat = statFix(fs.stat)
  fs.fstat = statFix(fs.fstat)
  fs.lstat = statFix(fs.lstat)

  fs.statSync = statFixSync(fs.statSync)
  fs.fstatSync = statFixSync(fs.fstatSync)
  fs.lstatSync = statFixSync(fs.lstatSync)

  // if lchmod/lchown do not exist, then make them no-ops
  if (!fs.lchmod) {
    fs.lchmod = function (path, mode, cb) {
      if (cb) process.nextTick(cb)
    }
    fs.lchmodSync = function () {}
  }
  if (!fs.lchown) {
    fs.lchown = function (path, uid, gid, cb) {
      if (cb) process.nextTick(cb)
    }
    fs.lchownSync = function () {}
  }

  // on Windows, A/V software can lock the directory, causing this
  // to fail with an EACCES or EPERM if the directory contains newly
  // created files.  Try again on failure, for up to 60 seconds.

  // Set the timeout this long because some Windows Anti-Virus, such as Parity
  // bit9, may lock files for up to a minute, causing npm package install
  // failures. Also, take care to yield the scheduler. Windows scheduling gives
  // CPU to a busy looping process, which can cause the program causing the lock
  // contention to be starved of CPU by node, so the contention doesn't resolve.
  if (platform === "win32") {
    fs.rename = (function (fs$rename) { return function (from, to, cb) {
      var start = Date.now()
      var backoff = 0;
      fs$rename(from, to, function CB (er) {
        if (er
            && (er.code === "EACCES" || er.code === "EPERM")
            && Date.now() - start < 60000) {
          setTimeout(function() {
            fs.stat(to, function (stater, st) {
              if (stater && stater.code === "ENOENT")
                fs$rename(from, to, CB);
              else
                cb(er)
            })
          }, backoff)
          if (backoff < 100)
            backoff += 10;
          return;
        }
        if (cb) cb(er)
      })
    }})(fs.rename)
  }

  // if read() returns EAGAIN, then just try it again.
  fs.read = (function (fs$read) {
    function read (fd, buffer, offset, length, position, callback_) {
      var callback
      if (callback_ && typeof callback_ === 'function') {
        var eagCounter = 0
        callback = function (er, _, __) {
          if (er && er.code === 'EAGAIN' && eagCounter < 10) {
            eagCounter ++
            return fs$read.call(fs, fd, buffer, offset, length, position, callback)
          }
          callback_.apply(this, arguments)
        }
      }
      return fs$read.call(fs, fd, buffer, offset, length, position, callback)
    }

    // This ensures `util.promisify` works as it does for native `fs.read`.
    if (Object.setPrototypeOf) Object.setPrototypeOf(read, fs$read)
    return read
  })(fs.read)

  fs.readSync = (function (fs$readSync) { return function (fd, buffer, offset, length, position) {
    var eagCounter = 0
    while (true) {
      try {
        return fs$readSync.call(fs, fd, buffer, offset, length, position)
      } catch (er) {
        if (er.code === 'EAGAIN' && eagCounter < 10) {
          eagCounter ++
          continue
        }
        throw er
      }
    }
  }})(fs.readSync)

  function patchLchmod (fs) {
    fs.lchmod = function (path, mode, callback) {
      fs.open( path
             , constants.O_WRONLY | constants.O_SYMLINK
             , mode
             , function (err, fd) {
        if (err) {
          if (callback) callback(err)
          return
        }
        // prefer to return the chmod error, if one occurs,
        // but still try to close, and report closing errors if they occur.
        fs.fchmod(fd, mode, function (err) {
          fs.close(fd, function(err2) {
            if (callback) callback(err || err2)
          })
        })
      })
    }

    fs.lchmodSync = function (path, mode) {
      var fd = fs.openSync(path, constants.O_WRONLY | constants.O_SYMLINK, mode)

      // prefer to return the chmod error, if one occurs,
      // but still try to close, and report closing errors if they occur.
      var threw = true
      var ret
      try {
        ret = fs.fchmodSync(fd, mode)
        threw = false
      } finally {
        if (threw) {
          try {
            fs.closeSync(fd)
          } catch (er) {}
        } else {
          fs.closeSync(fd)
        }
      }
      return ret
    }
  }

  function patchLutimes (fs) {
    if (constants.hasOwnProperty("O_SYMLINK")) {
      fs.lutimes = function (path, at, mt, cb) {
        fs.open(path, constants.O_SYMLINK, function (er, fd) {
          if (er) {
            if (cb) cb(er)
            return
          }
          fs.futimes(fd, at, mt, function (er) {
            fs.close(fd, function (er2) {
              if (cb) cb(er || er2)
            })
          })
        })
      }

      fs.lutimesSync = function (path, at, mt) {
        var fd = fs.openSync(path, constants.O_SYMLINK)
        var ret
        var threw = true
        try {
          ret = fs.futimesSync(fd, at, mt)
          threw = false
        } finally {
          if (threw) {
            try {
              fs.closeSync(fd)
            } catch (er) {}
          } else {
            fs.closeSync(fd)
          }
        }
        return ret
      }

    } else {
      fs.lutimes = function (_a, _b, _c, cb) { if (cb) process.nextTick(cb) }
      fs.lutimesSync = function () {}
    }
  }

  function chmodFix (orig) {
    if (!orig) return orig
    return function (target, mode, cb) {
      return orig.call(fs, target, mode, function (er) {
        if (chownErOk(er)) er = null
        if (cb) cb.apply(this, arguments)
      })
    }
  }

  function chmodFixSync (orig) {
    if (!orig) return orig
    return function (target, mode) {
      try {
        return orig.call(fs, target, mode)
      } catch (er) {
        if (!chownErOk(er)) throw er
      }
    }
  }


  function chownFix (orig) {
    if (!orig) return orig
    return function (target, uid, gid, cb) {
      return orig.call(fs, target, uid, gid, function (er) {
        if (chownErOk(er)) er = null
        if (cb) cb.apply(this, arguments)
      })
    }
  }

  function chownFixSync (orig) {
    if (!orig) return orig
    return function (target, uid, gid) {
      try {
        return orig.call(fs, target, uid, gid)
      } catch (er) {
        if (!chownErOk(er)) throw er
      }
    }
  }

  function statFix (orig) {
    if (!orig) return orig
    // Older versions of Node erroneously returned signed integers for
    // uid + gid.
    return function (target, options, cb) {
      if (typeof options === 'function') {
        cb = options
        options = null
      }
      function callback (er, stats) {
        if (stats) {
          if (stats.uid < 0) stats.uid += 0x100000000
          if (stats.gid < 0) stats.gid += 0x100000000
        }
        if (cb) cb.apply(this, arguments)
      }
      return options ? orig.call(fs, target, options, callback)
        : orig.call(fs, target, callback)
    }
  }

  function statFixSync (orig) {
    if (!orig) return orig
    // Older versions of Node erroneously returned signed integers for
    // uid + gid.
    return function (target, options) {
      var stats = options ? orig.call(fs, target, options)
        : orig.call(fs, target)
      if (stats.uid < 0) stats.uid += 0x100000000
      if (stats.gid < 0) stats.gid += 0x100000000
      return stats;
    }
  }

  // ENOSYS means that the fs doesn't support the op. Just ignore
  // that, because it doesn't matter.
  //
  // if there's no getuid, or if getuid() is something other
  // than 0, and the error is EINVAL or EPERM, then just ignore
  // it.
  //
  // This specific case is a silent failure in cp, install, tar,
  // and most other unix tools that manage permissions.
  //
  // When running as root, or if other types of errors are
  // encountered, then it's strict.
  function chownErOk (er) {
    if (!er)
      return true

    if (er.code === "ENOSYS")
      return true

    var nonroot = !process.getuid || process.getuid() !== 0
    if (nonroot) {
      if (er.code === "EINVAL" || er.code === "EPERM")
        return true
    }

    return false
  }
}


/***/ }),
/* 9 */
/***/ ((module) => {

"use strict";
module.exports = require("constants");;

/***/ }),
/* 10 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stream = __webpack_require__(11).Stream

module.exports = legacy

function legacy (fs) {
  return {
    ReadStream: ReadStream,
    WriteStream: WriteStream
  }

  function ReadStream (path, options) {
    if (!(this instanceof ReadStream)) return new ReadStream(path, options);

    Stream.call(this);

    var self = this;

    this.path = path;
    this.fd = null;
    this.readable = true;
    this.paused = false;

    this.flags = 'r';
    this.mode = 438; /*=0666*/
    this.bufferSize = 64 * 1024;

    options = options || {};

    // Mixin options into this
    var keys = Object.keys(options);
    for (var index = 0, length = keys.length; index < length; index++) {
      var key = keys[index];
      this[key] = options[key];
    }

    if (this.encoding) this.setEncoding(this.encoding);

    if (this.start !== undefined) {
      if ('number' !== typeof this.start) {
        throw TypeError('start must be a Number');
      }
      if (this.end === undefined) {
        this.end = Infinity;
      } else if ('number' !== typeof this.end) {
        throw TypeError('end must be a Number');
      }

      if (this.start > this.end) {
        throw new Error('start must be <= end');
      }

      this.pos = this.start;
    }

    if (this.fd !== null) {
      process.nextTick(function() {
        self._read();
      });
      return;
    }

    fs.open(this.path, this.flags, this.mode, function (err, fd) {
      if (err) {
        self.emit('error', err);
        self.readable = false;
        return;
      }

      self.fd = fd;
      self.emit('open', fd);
      self._read();
    })
  }

  function WriteStream (path, options) {
    if (!(this instanceof WriteStream)) return new WriteStream(path, options);

    Stream.call(this);

    this.path = path;
    this.fd = null;
    this.writable = true;

    this.flags = 'w';
    this.encoding = 'binary';
    this.mode = 438; /*=0666*/
    this.bytesWritten = 0;

    options = options || {};

    // Mixin options into this
    var keys = Object.keys(options);
    for (var index = 0, length = keys.length; index < length; index++) {
      var key = keys[index];
      this[key] = options[key];
    }

    if (this.start !== undefined) {
      if ('number' !== typeof this.start) {
        throw TypeError('start must be a Number');
      }
      if (this.start < 0) {
        throw new Error('start must be >= zero');
      }

      this.pos = this.start;
    }

    this.busy = false;
    this._queue = [];

    if (this.fd === null) {
      this._open = fs.open;
      this._queue.push([this._open, this.path, this.flags, this.mode, undefined]);
      this.flush();
    }
  }
}


/***/ }),
/* 11 */
/***/ ((module) => {

"use strict";
module.exports = require("stream");;

/***/ }),
/* 12 */
/***/ ((module) => {

"use strict";


module.exports = clone

var getPrototypeOf = Object.getPrototypeOf || function (obj) {
  return obj.__proto__
}

function clone (obj) {
  if (obj === null || typeof obj !== 'object')
    return obj

  if (obj instanceof Object)
    var copy = { __proto__: getPrototypeOf(obj) }
  else
    var copy = Object.create(null)

  Object.getOwnPropertyNames(obj).forEach(function (key) {
    Object.defineProperty(copy, key, Object.getOwnPropertyDescriptor(obj, key))
  })

  return copy
}


/***/ }),
/* 13 */
/***/ ((module) => {

"use strict";
module.exports = require("util");;

/***/ }),
/* 14 */
/***/ ((module) => {

"use strict";
module.exports = require("assert");;

/***/ }),
/* 15 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = {
  copySync: __webpack_require__(16)
}


/***/ }),
/* 16 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const fs = __webpack_require__(6)
const path = __webpack_require__(17)
const mkdirsSync = __webpack_require__(18).mkdirsSync
const utimesMillisSync = __webpack_require__(21).utimesMillisSync
const stat = __webpack_require__(22)

function copySync (src, dest, opts) {
  if (typeof opts === 'function') {
    opts = { filter: opts }
  }

  opts = opts || {}
  opts.clobber = 'clobber' in opts ? !!opts.clobber : true // default to true for now
  opts.overwrite = 'overwrite' in opts ? !!opts.overwrite : opts.clobber // overwrite falls back to clobber

  // Warn about using preserveTimestamps on 32-bit node
  if (opts.preserveTimestamps && process.arch === 'ia32') {
    console.warn(`fs-extra: Using the preserveTimestamps option in 32-bit node is not recommended;\n
    see https://github.com/jprichardson/node-fs-extra/issues/269`)
  }

  const { srcStat, destStat } = stat.checkPathsSync(src, dest, 'copy')
  stat.checkParentPathsSync(src, srcStat, dest, 'copy')
  return handleFilterAndCopy(destStat, src, dest, opts)
}

function handleFilterAndCopy (destStat, src, dest, opts) {
  if (opts.filter && !opts.filter(src, dest)) return
  const destParent = path.dirname(dest)
  if (!fs.existsSync(destParent)) mkdirsSync(destParent)
  return startCopy(destStat, src, dest, opts)
}

function startCopy (destStat, src, dest, opts) {
  if (opts.filter && !opts.filter(src, dest)) return
  return getStats(destStat, src, dest, opts)
}

function getStats (destStat, src, dest, opts) {
  const statSync = opts.dereference ? fs.statSync : fs.lstatSync
  const srcStat = statSync(src)

  if (srcStat.isDirectory()) return onDir(srcStat, destStat, src, dest, opts)
  else if (srcStat.isFile() ||
           srcStat.isCharacterDevice() ||
           srcStat.isBlockDevice()) return onFile(srcStat, destStat, src, dest, opts)
  else if (srcStat.isSymbolicLink()) return onLink(destStat, src, dest, opts)
}

function onFile (srcStat, destStat, src, dest, opts) {
  if (!destStat) return copyFile(srcStat, src, dest, opts)
  return mayCopyFile(srcStat, src, dest, opts)
}

function mayCopyFile (srcStat, src, dest, opts) {
  if (opts.overwrite) {
    fs.unlinkSync(dest)
    return copyFile(srcStat, src, dest, opts)
  } else if (opts.errorOnExist) {
    throw new Error(`'${dest}' already exists`)
  }
}

function copyFile (srcStat, src, dest, opts) {
  fs.copyFileSync(src, dest)
  if (opts.preserveTimestamps) handleTimestamps(srcStat.mode, src, dest)
  return setDestMode(dest, srcStat.mode)
}

function handleTimestamps (srcMode, src, dest) {
  // Make sure the file is writable before setting the timestamp
  // otherwise open fails with EPERM when invoked with 'r+'
  // (through utimes call)
  if (fileIsNotWritable(srcMode)) makeFileWritable(dest, srcMode)
  return setDestTimestamps(src, dest)
}

function fileIsNotWritable (srcMode) {
  return (srcMode & 0o200) === 0
}

function makeFileWritable (dest, srcMode) {
  return setDestMode(dest, srcMode | 0o200)
}

function setDestMode (dest, srcMode) {
  return fs.chmodSync(dest, srcMode)
}

function setDestTimestamps (src, dest) {
  // The initial srcStat.atime cannot be trusted
  // because it is modified by the read(2) system call
  // (See https://nodejs.org/api/fs.html#fs_stat_time_values)
  const updatedSrcStat = fs.statSync(src)
  return utimesMillisSync(dest, updatedSrcStat.atime, updatedSrcStat.mtime)
}

function onDir (srcStat, destStat, src, dest, opts) {
  if (!destStat) return mkDirAndCopy(srcStat.mode, src, dest, opts)
  if (destStat && !destStat.isDirectory()) {
    throw new Error(`Cannot overwrite non-directory '${dest}' with directory '${src}'.`)
  }
  return copyDir(src, dest, opts)
}

function mkDirAndCopy (srcMode, src, dest, opts) {
  fs.mkdirSync(dest)
  copyDir(src, dest, opts)
  return setDestMode(dest, srcMode)
}

function copyDir (src, dest, opts) {
  fs.readdirSync(src).forEach(item => copyDirItem(item, src, dest, opts))
}

function copyDirItem (item, src, dest, opts) {
  const srcItem = path.join(src, item)
  const destItem = path.join(dest, item)
  const { destStat } = stat.checkPathsSync(srcItem, destItem, 'copy')
  return startCopy(destStat, srcItem, destItem, opts)
}

function onLink (destStat, src, dest, opts) {
  let resolvedSrc = fs.readlinkSync(src)
  if (opts.dereference) {
    resolvedSrc = path.resolve(process.cwd(), resolvedSrc)
  }

  if (!destStat) {
    return fs.symlinkSync(resolvedSrc, dest)
  } else {
    let resolvedDest
    try {
      resolvedDest = fs.readlinkSync(dest)
    } catch (err) {
      // dest exists and is a regular file or directory,
      // Windows may throw UNKNOWN error. If dest already exists,
      // fs throws error anyway, so no need to guard against it here.
      if (err.code === 'EINVAL' || err.code === 'UNKNOWN') return fs.symlinkSync(resolvedSrc, dest)
      throw err
    }
    if (opts.dereference) {
      resolvedDest = path.resolve(process.cwd(), resolvedDest)
    }
    if (stat.isSrcSubdir(resolvedSrc, resolvedDest)) {
      throw new Error(`Cannot copy '${resolvedSrc}' to a subdirectory of itself, '${resolvedDest}'.`)
    }

    // prevent copy if src is a subdir of dest since unlinking
    // dest in this case would result in removing src contents
    // and therefore a broken symlink would be created.
    if (fs.statSync(dest).isDirectory() && stat.isSrcSubdir(resolvedDest, resolvedSrc)) {
      throw new Error(`Cannot overwrite '${resolvedDest}' with '${resolvedSrc}'.`)
    }
    return copyLink(resolvedSrc, dest)
  }
}

function copyLink (resolvedSrc, dest) {
  fs.unlinkSync(dest)
  return fs.symlinkSync(resolvedSrc, dest)
}

module.exports = copySync


/***/ }),
/* 17 */
/***/ ((module) => {

"use strict";
module.exports = require("path");;

/***/ }),
/* 18 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const u = __webpack_require__(5).fromPromise
const { makeDir: _makeDir, makeDirSync } = __webpack_require__(19)
const makeDir = u(_makeDir)

module.exports = {
  mkdirs: makeDir,
  mkdirsSync: makeDirSync,
  // alias
  mkdirp: makeDir,
  mkdirpSync: makeDirSync,
  ensureDir: makeDir,
  ensureDirSync: makeDirSync
}


/***/ }),
/* 19 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// Adapted from https://github.com/sindresorhus/make-dir
// Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

const fs = __webpack_require__(4)
const path = __webpack_require__(17)
const atLeastNode = __webpack_require__(20)

const useNativeRecursiveOption = atLeastNode('10.12.0')

// https://github.com/nodejs/node/issues/8987
// https://github.com/libuv/libuv/pull/1088
const checkPath = pth => {
  if (process.platform === 'win32') {
    const pathHasInvalidWinCharacters = /[<>:"|?*]/.test(pth.replace(path.parse(pth).root, ''))

    if (pathHasInvalidWinCharacters) {
      const error = new Error(`Path contains invalid characters: ${pth}`)
      error.code = 'EINVAL'
      throw error
    }
  }
}

const processOptions = options => {
  const defaults = { mode: 0o777 }
  if (typeof options === 'number') options = { mode: options }
  return { ...defaults, ...options }
}

const permissionError = pth => {
  // This replicates the exception of `fs.mkdir` with native the
  // `recusive` option when run on an invalid drive under Windows.
  const error = new Error(`operation not permitted, mkdir '${pth}'`)
  error.code = 'EPERM'
  error.errno = -4048
  error.path = pth
  error.syscall = 'mkdir'
  return error
}

module.exports.makeDir = async (input, options) => {
  checkPath(input)
  options = processOptions(options)

  if (useNativeRecursiveOption) {
    const pth = path.resolve(input)

    return fs.mkdir(pth, {
      mode: options.mode,
      recursive: true
    })
  }

  const make = async pth => {
    try {
      await fs.mkdir(pth, options.mode)
    } catch (error) {
      if (error.code === 'EPERM') {
        throw error
      }

      if (error.code === 'ENOENT') {
        if (path.dirname(pth) === pth) {
          throw permissionError(pth)
        }

        if (error.message.includes('null bytes')) {
          throw error
        }

        await make(path.dirname(pth))
        return make(pth)
      }

      try {
        const stats = await fs.stat(pth)
        if (!stats.isDirectory()) {
          // This error is never exposed to the user
          // it is caught below, and the original error is thrown
          throw new Error('The path is not a directory')
        }
      } catch {
        throw error
      }
    }
  }

  return make(path.resolve(input))
}

module.exports.makeDirSync = (input, options) => {
  checkPath(input)
  options = processOptions(options)

  if (useNativeRecursiveOption) {
    const pth = path.resolve(input)

    return fs.mkdirSync(pth, {
      mode: options.mode,
      recursive: true
    })
  }

  const make = pth => {
    try {
      fs.mkdirSync(pth, options.mode)
    } catch (error) {
      if (error.code === 'EPERM') {
        throw error
      }

      if (error.code === 'ENOENT') {
        if (path.dirname(pth) === pth) {
          throw permissionError(pth)
        }

        if (error.message.includes('null bytes')) {
          throw error
        }

        make(path.dirname(pth))
        return make(pth)
      }

      try {
        if (!fs.statSync(pth).isDirectory()) {
          // This error is never exposed to the user
          // it is caught below, and the original error is thrown
          throw new Error('The path is not a directory')
        }
      } catch {
        throw error
      }
    }
  }

  return make(path.resolve(input))
}


/***/ }),
/* 20 */
/***/ ((module) => {

module.exports = r => {
  const n = process.versions.node.split('.').map(x => parseInt(x, 10))
  r = r.split('.').map(x => parseInt(x, 10))
  return n[0] > r[0] || (n[0] === r[0] && (n[1] > r[1] || (n[1] === r[1] && n[2] >= r[2])))
}


/***/ }),
/* 21 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const fs = __webpack_require__(6)

function utimesMillis (path, atime, mtime, callback) {
  // if (!HAS_MILLIS_RES) return fs.utimes(path, atime, mtime, callback)
  fs.open(path, 'r+', (err, fd) => {
    if (err) return callback(err)
    fs.futimes(fd, atime, mtime, futimesErr => {
      fs.close(fd, closeErr => {
        if (callback) callback(futimesErr || closeErr)
      })
    })
  })
}

function utimesMillisSync (path, atime, mtime) {
  const fd = fs.openSync(path, 'r+')
  fs.futimesSync(fd, atime, mtime)
  return fs.closeSync(fd)
}

module.exports = {
  utimesMillis,
  utimesMillisSync
}


/***/ }),
/* 22 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const fs = __webpack_require__(4)
const path = __webpack_require__(17)
const util = __webpack_require__(13)
const atLeastNode = __webpack_require__(20)

const nodeSupportsBigInt = atLeastNode('10.5.0')
const stat = (file) => nodeSupportsBigInt ? fs.stat(file, { bigint: true }) : fs.stat(file)
const statSync = (file) => nodeSupportsBigInt ? fs.statSync(file, { bigint: true }) : fs.statSync(file)

function getStats (src, dest) {
  return Promise.all([
    stat(src),
    stat(dest).catch(err => {
      if (err.code === 'ENOENT') return null
      throw err
    })
  ]).then(([srcStat, destStat]) => ({ srcStat, destStat }))
}

function getStatsSync (src, dest) {
  let destStat
  const srcStat = statSync(src)
  try {
    destStat = statSync(dest)
  } catch (err) {
    if (err.code === 'ENOENT') return { srcStat, destStat: null }
    throw err
  }
  return { srcStat, destStat }
}

function checkPaths (src, dest, funcName, cb) {
  util.callbackify(getStats)(src, dest, (err, stats) => {
    if (err) return cb(err)
    const { srcStat, destStat } = stats
    if (destStat && areIdentical(srcStat, destStat)) {
      return cb(new Error('Source and destination must not be the same.'))
    }
    if (srcStat.isDirectory() && isSrcSubdir(src, dest)) {
      return cb(new Error(errMsg(src, dest, funcName)))
    }
    return cb(null, { srcStat, destStat })
  })
}

function checkPathsSync (src, dest, funcName) {
  const { srcStat, destStat } = getStatsSync(src, dest)
  if (destStat && areIdentical(srcStat, destStat)) {
    throw new Error('Source and destination must not be the same.')
  }
  if (srcStat.isDirectory() && isSrcSubdir(src, dest)) {
    throw new Error(errMsg(src, dest, funcName))
  }
  return { srcStat, destStat }
}

// recursively check if dest parent is a subdirectory of src.
// It works for all file types including symlinks since it
// checks the src and dest inodes. It starts from the deepest
// parent and stops once it reaches the src parent or the root path.
function checkParentPaths (src, srcStat, dest, funcName, cb) {
  const srcParent = path.resolve(path.dirname(src))
  const destParent = path.resolve(path.dirname(dest))
  if (destParent === srcParent || destParent === path.parse(destParent).root) return cb()
  const callback = (err, destStat) => {
    if (err) {
      if (err.code === 'ENOENT') return cb()
      return cb(err)
    }
    if (areIdentical(srcStat, destStat)) {
      return cb(new Error(errMsg(src, dest, funcName)))
    }
    return checkParentPaths(src, srcStat, destParent, funcName, cb)
  }
  if (nodeSupportsBigInt) fs.stat(destParent, { bigint: true }, callback)
  else fs.stat(destParent, callback)
}

function checkParentPathsSync (src, srcStat, dest, funcName) {
  const srcParent = path.resolve(path.dirname(src))
  const destParent = path.resolve(path.dirname(dest))
  if (destParent === srcParent || destParent === path.parse(destParent).root) return
  let destStat
  try {
    destStat = statSync(destParent)
  } catch (err) {
    if (err.code === 'ENOENT') return
    throw err
  }
  if (areIdentical(srcStat, destStat)) {
    throw new Error(errMsg(src, dest, funcName))
  }
  return checkParentPathsSync(src, srcStat, destParent, funcName)
}

function areIdentical (srcStat, destStat) {
  if (destStat.ino && destStat.dev && destStat.ino === srcStat.ino && destStat.dev === srcStat.dev) {
    if (nodeSupportsBigInt || destStat.ino < Number.MAX_SAFE_INTEGER) {
      // definitive answer
      return true
    }
    // Use additional heuristics if we can't use 'bigint'.
    // Different 'ino' could be represented the same if they are >= Number.MAX_SAFE_INTEGER
    // See issue 657
    if (destStat.size === srcStat.size &&
        destStat.mode === srcStat.mode &&
        destStat.nlink === srcStat.nlink &&
        destStat.atimeMs === srcStat.atimeMs &&
        destStat.mtimeMs === srcStat.mtimeMs &&
        destStat.ctimeMs === srcStat.ctimeMs &&
        destStat.birthtimeMs === srcStat.birthtimeMs) {
      // heuristic answer
      return true
    }
  }
  return false
}

// return true if dest is a subdir of src, otherwise false.
// It only checks the path strings.
function isSrcSubdir (src, dest) {
  const srcArr = path.resolve(src).split(path.sep).filter(i => i)
  const destArr = path.resolve(dest).split(path.sep).filter(i => i)
  return srcArr.reduce((acc, cur, i) => acc && destArr[i] === cur, true)
}

function errMsg (src, dest, funcName) {
  return `Cannot ${funcName} '${src}' to a subdirectory of itself, '${dest}'.`
}

module.exports = {
  checkPaths,
  checkPathsSync,
  checkParentPaths,
  checkParentPathsSync,
  isSrcSubdir
}


/***/ }),
/* 23 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const u = __webpack_require__(5).fromCallback
module.exports = {
  copy: u(__webpack_require__(24))
}


/***/ }),
/* 24 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const fs = __webpack_require__(6)
const path = __webpack_require__(17)
const mkdirs = __webpack_require__(18).mkdirs
const pathExists = __webpack_require__(25).pathExists
const utimesMillis = __webpack_require__(21).utimesMillis
const stat = __webpack_require__(22)

function copy (src, dest, opts, cb) {
  if (typeof opts === 'function' && !cb) {
    cb = opts
    opts = {}
  } else if (typeof opts === 'function') {
    opts = { filter: opts }
  }

  cb = cb || function () {}
  opts = opts || {}

  opts.clobber = 'clobber' in opts ? !!opts.clobber : true // default to true for now
  opts.overwrite = 'overwrite' in opts ? !!opts.overwrite : opts.clobber // overwrite falls back to clobber

  // Warn about using preserveTimestamps on 32-bit node
  if (opts.preserveTimestamps && process.arch === 'ia32') {
    console.warn(`fs-extra: Using the preserveTimestamps option in 32-bit node is not recommended;\n
    see https://github.com/jprichardson/node-fs-extra/issues/269`)
  }

  stat.checkPaths(src, dest, 'copy', (err, stats) => {
    if (err) return cb(err)
    const { srcStat, destStat } = stats
    stat.checkParentPaths(src, srcStat, dest, 'copy', err => {
      if (err) return cb(err)
      if (opts.filter) return handleFilter(checkParentDir, destStat, src, dest, opts, cb)
      return checkParentDir(destStat, src, dest, opts, cb)
    })
  })
}

function checkParentDir (destStat, src, dest, opts, cb) {
  const destParent = path.dirname(dest)
  pathExists(destParent, (err, dirExists) => {
    if (err) return cb(err)
    if (dirExists) return startCopy(destStat, src, dest, opts, cb)
    mkdirs(destParent, err => {
      if (err) return cb(err)
      return startCopy(destStat, src, dest, opts, cb)
    })
  })
}

function handleFilter (onInclude, destStat, src, dest, opts, cb) {
  Promise.resolve(opts.filter(src, dest)).then(include => {
    if (include) return onInclude(destStat, src, dest, opts, cb)
    return cb()
  }, error => cb(error))
}

function startCopy (destStat, src, dest, opts, cb) {
  if (opts.filter) return handleFilter(getStats, destStat, src, dest, opts, cb)
  return getStats(destStat, src, dest, opts, cb)
}

function getStats (destStat, src, dest, opts, cb) {
  const stat = opts.dereference ? fs.stat : fs.lstat
  stat(src, (err, srcStat) => {
    if (err) return cb(err)

    if (srcStat.isDirectory()) return onDir(srcStat, destStat, src, dest, opts, cb)
    else if (srcStat.isFile() ||
             srcStat.isCharacterDevice() ||
             srcStat.isBlockDevice()) return onFile(srcStat, destStat, src, dest, opts, cb)
    else if (srcStat.isSymbolicLink()) return onLink(destStat, src, dest, opts, cb)
  })
}

function onFile (srcStat, destStat, src, dest, opts, cb) {
  if (!destStat) return copyFile(srcStat, src, dest, opts, cb)
  return mayCopyFile(srcStat, src, dest, opts, cb)
}

function mayCopyFile (srcStat, src, dest, opts, cb) {
  if (opts.overwrite) {
    fs.unlink(dest, err => {
      if (err) return cb(err)
      return copyFile(srcStat, src, dest, opts, cb)
    })
  } else if (opts.errorOnExist) {
    return cb(new Error(`'${dest}' already exists`))
  } else return cb()
}

function copyFile (srcStat, src, dest, opts, cb) {
  fs.copyFile(src, dest, err => {
    if (err) return cb(err)
    if (opts.preserveTimestamps) return handleTimestampsAndMode(srcStat.mode, src, dest, cb)
    return setDestMode(dest, srcStat.mode, cb)
  })
}

function handleTimestampsAndMode (srcMode, src, dest, cb) {
  // Make sure the file is writable before setting the timestamp
  // otherwise open fails with EPERM when invoked with 'r+'
  // (through utimes call)
  if (fileIsNotWritable(srcMode)) {
    return makeFileWritable(dest, srcMode, err => {
      if (err) return cb(err)
      return setDestTimestampsAndMode(srcMode, src, dest, cb)
    })
  }
  return setDestTimestampsAndMode(srcMode, src, dest, cb)
}

function fileIsNotWritable (srcMode) {
  return (srcMode & 0o200) === 0
}

function makeFileWritable (dest, srcMode, cb) {
  return setDestMode(dest, srcMode | 0o200, cb)
}

function setDestTimestampsAndMode (srcMode, src, dest, cb) {
  setDestTimestamps(src, dest, err => {
    if (err) return cb(err)
    return setDestMode(dest, srcMode, cb)
  })
}

function setDestMode (dest, srcMode, cb) {
  return fs.chmod(dest, srcMode, cb)
}

function setDestTimestamps (src, dest, cb) {
  // The initial srcStat.atime cannot be trusted
  // because it is modified by the read(2) system call
  // (See https://nodejs.org/api/fs.html#fs_stat_time_values)
  fs.stat(src, (err, updatedSrcStat) => {
    if (err) return cb(err)
    return utimesMillis(dest, updatedSrcStat.atime, updatedSrcStat.mtime, cb)
  })
}

function onDir (srcStat, destStat, src, dest, opts, cb) {
  if (!destStat) return mkDirAndCopy(srcStat.mode, src, dest, opts, cb)
  if (destStat && !destStat.isDirectory()) {
    return cb(new Error(`Cannot overwrite non-directory '${dest}' with directory '${src}'.`))
  }
  return copyDir(src, dest, opts, cb)
}

function mkDirAndCopy (srcMode, src, dest, opts, cb) {
  fs.mkdir(dest, err => {
    if (err) return cb(err)
    copyDir(src, dest, opts, err => {
      if (err) return cb(err)
      return setDestMode(dest, srcMode, cb)
    })
  })
}

function copyDir (src, dest, opts, cb) {
  fs.readdir(src, (err, items) => {
    if (err) return cb(err)
    return copyDirItems(items, src, dest, opts, cb)
  })
}

function copyDirItems (items, src, dest, opts, cb) {
  const item = items.pop()
  if (!item) return cb()
  return copyDirItem(items, item, src, dest, opts, cb)
}

function copyDirItem (items, item, src, dest, opts, cb) {
  const srcItem = path.join(src, item)
  const destItem = path.join(dest, item)
  stat.checkPaths(srcItem, destItem, 'copy', (err, stats) => {
    if (err) return cb(err)
    const { destStat } = stats
    startCopy(destStat, srcItem, destItem, opts, err => {
      if (err) return cb(err)
      return copyDirItems(items, src, dest, opts, cb)
    })
  })
}

function onLink (destStat, src, dest, opts, cb) {
  fs.readlink(src, (err, resolvedSrc) => {
    if (err) return cb(err)
    if (opts.dereference) {
      resolvedSrc = path.resolve(process.cwd(), resolvedSrc)
    }

    if (!destStat) {
      return fs.symlink(resolvedSrc, dest, cb)
    } else {
      fs.readlink(dest, (err, resolvedDest) => {
        if (err) {
          // dest exists and is a regular file or directory,
          // Windows may throw UNKNOWN error. If dest already exists,
          // fs throws error anyway, so no need to guard against it here.
          if (err.code === 'EINVAL' || err.code === 'UNKNOWN') return fs.symlink(resolvedSrc, dest, cb)
          return cb(err)
        }
        if (opts.dereference) {
          resolvedDest = path.resolve(process.cwd(), resolvedDest)
        }
        if (stat.isSrcSubdir(resolvedSrc, resolvedDest)) {
          return cb(new Error(`Cannot copy '${resolvedSrc}' to a subdirectory of itself, '${resolvedDest}'.`))
        }

        // do not copy if src is a subdir of dest since unlinking
        // dest in this case would result in removing src contents
        // and therefore a broken symlink would be created.
        if (destStat.isDirectory() && stat.isSrcSubdir(resolvedDest, resolvedSrc)) {
          return cb(new Error(`Cannot overwrite '${resolvedDest}' with '${resolvedSrc}'.`))
        }
        return copyLink(resolvedSrc, dest, cb)
      })
    }
  })
}

function copyLink (resolvedSrc, dest, cb) {
  fs.unlink(dest, err => {
    if (err) return cb(err)
    return fs.symlink(resolvedSrc, dest, cb)
  })
}

module.exports = copy


/***/ }),
/* 25 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const u = __webpack_require__(5).fromPromise
const fs = __webpack_require__(4)

function pathExists (path) {
  return fs.access(path).then(() => true).catch(() => false)
}

module.exports = {
  pathExists: u(pathExists),
  pathExistsSync: fs.existsSync
}


/***/ }),
/* 26 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const u = __webpack_require__(5).fromCallback
const fs = __webpack_require__(6)
const path = __webpack_require__(17)
const mkdir = __webpack_require__(18)
const remove = __webpack_require__(27)

const emptyDir = u(function emptyDir (dir, callback) {
  callback = callback || function () {}
  fs.readdir(dir, (err, items) => {
    if (err) return mkdir.mkdirs(dir, callback)

    items = items.map(item => path.join(dir, item))

    deleteItem()

    function deleteItem () {
      const item = items.pop()
      if (!item) return callback()
      remove.remove(item, err => {
        if (err) return callback(err)
        deleteItem()
      })
    }
  })
})

function emptyDirSync (dir) {
  let items
  try {
    items = fs.readdirSync(dir)
  } catch {
    return mkdir.mkdirsSync(dir)
  }

  items.forEach(item => {
    item = path.join(dir, item)
    remove.removeSync(item)
  })
}

module.exports = {
  emptyDirSync,
  emptydirSync: emptyDirSync,
  emptyDir,
  emptydir: emptyDir
}


/***/ }),
/* 27 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const u = __webpack_require__(5).fromCallback
const rimraf = __webpack_require__(28)

module.exports = {
  remove: u(rimraf),
  removeSync: rimraf.sync
}


/***/ }),
/* 28 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const fs = __webpack_require__(6)
const path = __webpack_require__(17)
const assert = __webpack_require__(14)

const isWindows = (process.platform === 'win32')

function defaults (options) {
  const methods = [
    'unlink',
    'chmod',
    'stat',
    'lstat',
    'rmdir',
    'readdir'
  ]
  methods.forEach(m => {
    options[m] = options[m] || fs[m]
    m = m + 'Sync'
    options[m] = options[m] || fs[m]
  })

  options.maxBusyTries = options.maxBusyTries || 3
}

function rimraf (p, options, cb) {
  let busyTries = 0

  if (typeof options === 'function') {
    cb = options
    options = {}
  }

  assert(p, 'rimraf: missing path')
  assert.strictEqual(typeof p, 'string', 'rimraf: path should be a string')
  assert.strictEqual(typeof cb, 'function', 'rimraf: callback function required')
  assert(options, 'rimraf: invalid options argument provided')
  assert.strictEqual(typeof options, 'object', 'rimraf: options should be object')

  defaults(options)

  rimraf_(p, options, function CB (er) {
    if (er) {
      if ((er.code === 'EBUSY' || er.code === 'ENOTEMPTY' || er.code === 'EPERM') &&
          busyTries < options.maxBusyTries) {
        busyTries++
        const time = busyTries * 100
        // try again, with the same exact callback as this one.
        return setTimeout(() => rimraf_(p, options, CB), time)
      }

      // already gone
      if (er.code === 'ENOENT') er = null
    }

    cb(er)
  })
}

// Two possible strategies.
// 1. Assume it's a file.  unlink it, then do the dir stuff on EPERM or EISDIR
// 2. Assume it's a directory.  readdir, then do the file stuff on ENOTDIR
//
// Both result in an extra syscall when you guess wrong.  However, there
// are likely far more normal files in the world than directories.  This
// is based on the assumption that a the average number of files per
// directory is >= 1.
//
// If anyone ever complains about this, then I guess the strategy could
// be made configurable somehow.  But until then, YAGNI.
function rimraf_ (p, options, cb) {
  assert(p)
  assert(options)
  assert(typeof cb === 'function')

  // sunos lets the root user unlink directories, which is... weird.
  // so we have to lstat here and make sure it's not a dir.
  options.lstat(p, (er, st) => {
    if (er && er.code === 'ENOENT') {
      return cb(null)
    }

    // Windows can EPERM on stat.  Life is suffering.
    if (er && er.code === 'EPERM' && isWindows) {
      return fixWinEPERM(p, options, er, cb)
    }

    if (st && st.isDirectory()) {
      return rmdir(p, options, er, cb)
    }

    options.unlink(p, er => {
      if (er) {
        if (er.code === 'ENOENT') {
          return cb(null)
        }
        if (er.code === 'EPERM') {
          return (isWindows)
            ? fixWinEPERM(p, options, er, cb)
            : rmdir(p, options, er, cb)
        }
        if (er.code === 'EISDIR') {
          return rmdir(p, options, er, cb)
        }
      }
      return cb(er)
    })
  })
}

function fixWinEPERM (p, options, er, cb) {
  assert(p)
  assert(options)
  assert(typeof cb === 'function')

  options.chmod(p, 0o666, er2 => {
    if (er2) {
      cb(er2.code === 'ENOENT' ? null : er)
    } else {
      options.stat(p, (er3, stats) => {
        if (er3) {
          cb(er3.code === 'ENOENT' ? null : er)
        } else if (stats.isDirectory()) {
          rmdir(p, options, er, cb)
        } else {
          options.unlink(p, cb)
        }
      })
    }
  })
}

function fixWinEPERMSync (p, options, er) {
  let stats

  assert(p)
  assert(options)

  try {
    options.chmodSync(p, 0o666)
  } catch (er2) {
    if (er2.code === 'ENOENT') {
      return
    } else {
      throw er
    }
  }

  try {
    stats = options.statSync(p)
  } catch (er3) {
    if (er3.code === 'ENOENT') {
      return
    } else {
      throw er
    }
  }

  if (stats.isDirectory()) {
    rmdirSync(p, options, er)
  } else {
    options.unlinkSync(p)
  }
}

function rmdir (p, options, originalEr, cb) {
  assert(p)
  assert(options)
  assert(typeof cb === 'function')

  // try to rmdir first, and only readdir on ENOTEMPTY or EEXIST (SunOS)
  // if we guessed wrong, and it's not a directory, then
  // raise the original error.
  options.rmdir(p, er => {
    if (er && (er.code === 'ENOTEMPTY' || er.code === 'EEXIST' || er.code === 'EPERM')) {
      rmkids(p, options, cb)
    } else if (er && er.code === 'ENOTDIR') {
      cb(originalEr)
    } else {
      cb(er)
    }
  })
}

function rmkids (p, options, cb) {
  assert(p)
  assert(options)
  assert(typeof cb === 'function')

  options.readdir(p, (er, files) => {
    if (er) return cb(er)

    let n = files.length
    let errState

    if (n === 0) return options.rmdir(p, cb)

    files.forEach(f => {
      rimraf(path.join(p, f), options, er => {
        if (errState) {
          return
        }
        if (er) return cb(errState = er)
        if (--n === 0) {
          options.rmdir(p, cb)
        }
      })
    })
  })
}

// this looks simpler, and is strictly *faster*, but will
// tie up the JavaScript thread and fail on excessively
// deep directory trees.
function rimrafSync (p, options) {
  let st

  options = options || {}
  defaults(options)

  assert(p, 'rimraf: missing path')
  assert.strictEqual(typeof p, 'string', 'rimraf: path should be a string')
  assert(options, 'rimraf: missing options')
  assert.strictEqual(typeof options, 'object', 'rimraf: options should be object')

  try {
    st = options.lstatSync(p)
  } catch (er) {
    if (er.code === 'ENOENT') {
      return
    }

    // Windows can EPERM on stat.  Life is suffering.
    if (er.code === 'EPERM' && isWindows) {
      fixWinEPERMSync(p, options, er)
    }
  }

  try {
    // sunos lets the root user unlink directories, which is... weird.
    if (st && st.isDirectory()) {
      rmdirSync(p, options, null)
    } else {
      options.unlinkSync(p)
    }
  } catch (er) {
    if (er.code === 'ENOENT') {
      return
    } else if (er.code === 'EPERM') {
      return isWindows ? fixWinEPERMSync(p, options, er) : rmdirSync(p, options, er)
    } else if (er.code !== 'EISDIR') {
      throw er
    }
    rmdirSync(p, options, er)
  }
}

function rmdirSync (p, options, originalEr) {
  assert(p)
  assert(options)

  try {
    options.rmdirSync(p)
  } catch (er) {
    if (er.code === 'ENOTDIR') {
      throw originalEr
    } else if (er.code === 'ENOTEMPTY' || er.code === 'EEXIST' || er.code === 'EPERM') {
      rmkidsSync(p, options)
    } else if (er.code !== 'ENOENT') {
      throw er
    }
  }
}

function rmkidsSync (p, options) {
  assert(p)
  assert(options)
  options.readdirSync(p).forEach(f => rimrafSync(path.join(p, f), options))

  if (isWindows) {
    // We only end up here once we got ENOTEMPTY at least once, and
    // at this point, we are guaranteed to have removed all the kids.
    // So, we know that it won't be ENOENT or ENOTDIR or anything else.
    // try really hard to delete stuff on windows, because it has a
    // PROFOUNDLY annoying habit of not closing handles promptly when
    // files are deleted, resulting in spurious ENOTEMPTY errors.
    const startTime = Date.now()
    do {
      try {
        const ret = options.rmdirSync(p, options)
        return ret
      } catch {}
    } while (Date.now() - startTime < 500) // give up after 500ms
  } else {
    const ret = options.rmdirSync(p, options)
    return ret
  }
}

module.exports = rimraf
rimraf.sync = rimrafSync


/***/ }),
/* 29 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const file = __webpack_require__(30)
const link = __webpack_require__(31)
const symlink = __webpack_require__(32)

module.exports = {
  // file
  createFile: file.createFile,
  createFileSync: file.createFileSync,
  ensureFile: file.createFile,
  ensureFileSync: file.createFileSync,
  // link
  createLink: link.createLink,
  createLinkSync: link.createLinkSync,
  ensureLink: link.createLink,
  ensureLinkSync: link.createLinkSync,
  // symlink
  createSymlink: symlink.createSymlink,
  createSymlinkSync: symlink.createSymlinkSync,
  ensureSymlink: symlink.createSymlink,
  ensureSymlinkSync: symlink.createSymlinkSync
}


/***/ }),
/* 30 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const u = __webpack_require__(5).fromCallback
const path = __webpack_require__(17)
const fs = __webpack_require__(6)
const mkdir = __webpack_require__(18)

function createFile (file, callback) {
  function makeFile () {
    fs.writeFile(file, '', err => {
      if (err) return callback(err)
      callback()
    })
  }

  fs.stat(file, (err, stats) => { // eslint-disable-line handle-callback-err
    if (!err && stats.isFile()) return callback()
    const dir = path.dirname(file)
    fs.stat(dir, (err, stats) => {
      if (err) {
        // if the directory doesn't exist, make it
        if (err.code === 'ENOENT') {
          return mkdir.mkdirs(dir, err => {
            if (err) return callback(err)
            makeFile()
          })
        }
        return callback(err)
      }

      if (stats.isDirectory()) makeFile()
      else {
        // parent is not a directory
        // This is just to cause an internal ENOTDIR error to be thrown
        fs.readdir(dir, err => {
          if (err) return callback(err)
        })
      }
    })
  })
}

function createFileSync (file) {
  let stats
  try {
    stats = fs.statSync(file)
  } catch {}
  if (stats && stats.isFile()) return

  const dir = path.dirname(file)
  try {
    if (!fs.statSync(dir).isDirectory()) {
      // parent is not a directory
      // This is just to cause an internal ENOTDIR error to be thrown
      fs.readdirSync(dir)
    }
  } catch (err) {
    // If the stat call above failed because the directory doesn't exist, create it
    if (err && err.code === 'ENOENT') mkdir.mkdirsSync(dir)
    else throw err
  }

  fs.writeFileSync(file, '')
}

module.exports = {
  createFile: u(createFile),
  createFileSync
}


/***/ }),
/* 31 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const u = __webpack_require__(5).fromCallback
const path = __webpack_require__(17)
const fs = __webpack_require__(6)
const mkdir = __webpack_require__(18)
const pathExists = __webpack_require__(25).pathExists

function createLink (srcpath, dstpath, callback) {
  function makeLink (srcpath, dstpath) {
    fs.link(srcpath, dstpath, err => {
      if (err) return callback(err)
      callback(null)
    })
  }

  pathExists(dstpath, (err, destinationExists) => {
    if (err) return callback(err)
    if (destinationExists) return callback(null)
    fs.lstat(srcpath, (err) => {
      if (err) {
        err.message = err.message.replace('lstat', 'ensureLink')
        return callback(err)
      }

      const dir = path.dirname(dstpath)
      pathExists(dir, (err, dirExists) => {
        if (err) return callback(err)
        if (dirExists) return makeLink(srcpath, dstpath)
        mkdir.mkdirs(dir, err => {
          if (err) return callback(err)
          makeLink(srcpath, dstpath)
        })
      })
    })
  })
}

function createLinkSync (srcpath, dstpath) {
  const destinationExists = fs.existsSync(dstpath)
  if (destinationExists) return undefined

  try {
    fs.lstatSync(srcpath)
  } catch (err) {
    err.message = err.message.replace('lstat', 'ensureLink')
    throw err
  }

  const dir = path.dirname(dstpath)
  const dirExists = fs.existsSync(dir)
  if (dirExists) return fs.linkSync(srcpath, dstpath)
  mkdir.mkdirsSync(dir)

  return fs.linkSync(srcpath, dstpath)
}

module.exports = {
  createLink: u(createLink),
  createLinkSync
}


/***/ }),
/* 32 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const u = __webpack_require__(5).fromCallback
const path = __webpack_require__(17)
const fs = __webpack_require__(6)
const _mkdirs = __webpack_require__(18)
const mkdirs = _mkdirs.mkdirs
const mkdirsSync = _mkdirs.mkdirsSync

const _symlinkPaths = __webpack_require__(33)
const symlinkPaths = _symlinkPaths.symlinkPaths
const symlinkPathsSync = _symlinkPaths.symlinkPathsSync

const _symlinkType = __webpack_require__(34)
const symlinkType = _symlinkType.symlinkType
const symlinkTypeSync = _symlinkType.symlinkTypeSync

const pathExists = __webpack_require__(25).pathExists

function createSymlink (srcpath, dstpath, type, callback) {
  callback = (typeof type === 'function') ? type : callback
  type = (typeof type === 'function') ? false : type

  pathExists(dstpath, (err, destinationExists) => {
    if (err) return callback(err)
    if (destinationExists) return callback(null)
    symlinkPaths(srcpath, dstpath, (err, relative) => {
      if (err) return callback(err)
      srcpath = relative.toDst
      symlinkType(relative.toCwd, type, (err, type) => {
        if (err) return callback(err)
        const dir = path.dirname(dstpath)
        pathExists(dir, (err, dirExists) => {
          if (err) return callback(err)
          if (dirExists) return fs.symlink(srcpath, dstpath, type, callback)
          mkdirs(dir, err => {
            if (err) return callback(err)
            fs.symlink(srcpath, dstpath, type, callback)
          })
        })
      })
    })
  })
}

function createSymlinkSync (srcpath, dstpath, type) {
  const destinationExists = fs.existsSync(dstpath)
  if (destinationExists) return undefined

  const relative = symlinkPathsSync(srcpath, dstpath)
  srcpath = relative.toDst
  type = symlinkTypeSync(relative.toCwd, type)
  const dir = path.dirname(dstpath)
  const exists = fs.existsSync(dir)
  if (exists) return fs.symlinkSync(srcpath, dstpath, type)
  mkdirsSync(dir)
  return fs.symlinkSync(srcpath, dstpath, type)
}

module.exports = {
  createSymlink: u(createSymlink),
  createSymlinkSync
}


/***/ }),
/* 33 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const path = __webpack_require__(17)
const fs = __webpack_require__(6)
const pathExists = __webpack_require__(25).pathExists

/**
 * Function that returns two types of paths, one relative to symlink, and one
 * relative to the current working directory. Checks if path is absolute or
 * relative. If the path is relative, this function checks if the path is
 * relative to symlink or relative to current working directory. This is an
 * initiative to find a smarter `srcpath` to supply when building symlinks.
 * This allows you to determine which path to use out of one of three possible
 * types of source paths. The first is an absolute path. This is detected by
 * `path.isAbsolute()`. When an absolute path is provided, it is checked to
 * see if it exists. If it does it's used, if not an error is returned
 * (callback)/ thrown (sync). The other two options for `srcpath` are a
 * relative url. By default Node's `fs.symlink` works by creating a symlink
 * using `dstpath` and expects the `srcpath` to be relative to the newly
 * created symlink. If you provide a `srcpath` that does not exist on the file
 * system it results in a broken symlink. To minimize this, the function
 * checks to see if the 'relative to symlink' source file exists, and if it
 * does it will use it. If it does not, it checks if there's a file that
 * exists that is relative to the current working directory, if does its used.
 * This preserves the expectations of the original fs.symlink spec and adds
 * the ability to pass in `relative to current working direcotry` paths.
 */

function symlinkPaths (srcpath, dstpath, callback) {
  if (path.isAbsolute(srcpath)) {
    return fs.lstat(srcpath, (err) => {
      if (err) {
        err.message = err.message.replace('lstat', 'ensureSymlink')
        return callback(err)
      }
      return callback(null, {
        toCwd: srcpath,
        toDst: srcpath
      })
    })
  } else {
    const dstdir = path.dirname(dstpath)
    const relativeToDst = path.join(dstdir, srcpath)
    return pathExists(relativeToDst, (err, exists) => {
      if (err) return callback(err)
      if (exists) {
        return callback(null, {
          toCwd: relativeToDst,
          toDst: srcpath
        })
      } else {
        return fs.lstat(srcpath, (err) => {
          if (err) {
            err.message = err.message.replace('lstat', 'ensureSymlink')
            return callback(err)
          }
          return callback(null, {
            toCwd: srcpath,
            toDst: path.relative(dstdir, srcpath)
          })
        })
      }
    })
  }
}

function symlinkPathsSync (srcpath, dstpath) {
  let exists
  if (path.isAbsolute(srcpath)) {
    exists = fs.existsSync(srcpath)
    if (!exists) throw new Error('absolute srcpath does not exist')
    return {
      toCwd: srcpath,
      toDst: srcpath
    }
  } else {
    const dstdir = path.dirname(dstpath)
    const relativeToDst = path.join(dstdir, srcpath)
    exists = fs.existsSync(relativeToDst)
    if (exists) {
      return {
        toCwd: relativeToDst,
        toDst: srcpath
      }
    } else {
      exists = fs.existsSync(srcpath)
      if (!exists) throw new Error('relative srcpath does not exist')
      return {
        toCwd: srcpath,
        toDst: path.relative(dstdir, srcpath)
      }
    }
  }
}

module.exports = {
  symlinkPaths,
  symlinkPathsSync
}


/***/ }),
/* 34 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const fs = __webpack_require__(6)

function symlinkType (srcpath, type, callback) {
  callback = (typeof type === 'function') ? type : callback
  type = (typeof type === 'function') ? false : type
  if (type) return callback(null, type)
  fs.lstat(srcpath, (err, stats) => {
    if (err) return callback(null, 'file')
    type = (stats && stats.isDirectory()) ? 'dir' : 'file'
    callback(null, type)
  })
}

function symlinkTypeSync (srcpath, type) {
  let stats

  if (type) return type
  try {
    stats = fs.lstatSync(srcpath)
  } catch {
    return 'file'
  }
  return (stats && stats.isDirectory()) ? 'dir' : 'file'
}

module.exports = {
  symlinkType,
  symlinkTypeSync
}


/***/ }),
/* 35 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const u = __webpack_require__(5).fromPromise
const jsonFile = __webpack_require__(36)

jsonFile.outputJson = u(__webpack_require__(39))
jsonFile.outputJsonSync = __webpack_require__(41)
// aliases
jsonFile.outputJSON = jsonFile.outputJson
jsonFile.outputJSONSync = jsonFile.outputJsonSync
jsonFile.writeJSON = jsonFile.writeJson
jsonFile.writeJSONSync = jsonFile.writeJsonSync
jsonFile.readJSON = jsonFile.readJson
jsonFile.readJSONSync = jsonFile.readJsonSync

module.exports = jsonFile


/***/ }),
/* 36 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const jsonFile = __webpack_require__(37)

module.exports = {
  // jsonfile exports
  readJson: jsonFile.readFile,
  readJsonSync: jsonFile.readFileSync,
  writeJson: jsonFile.writeFile,
  writeJsonSync: jsonFile.writeFileSync
}


/***/ }),
/* 37 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let _fs
try {
  _fs = __webpack_require__(6)
} catch (_) {
  _fs = __webpack_require__(7)
}
const universalify = __webpack_require__(5)
const { stringify, stripBom } = __webpack_require__(38)

async function _readFile (file, options = {}) {
  if (typeof options === 'string') {
    options = { encoding: options }
  }

  const fs = options.fs || _fs

  const shouldThrow = 'throws' in options ? options.throws : true

  let data = await universalify.fromCallback(fs.readFile)(file, options)

  data = stripBom(data)

  let obj
  try {
    obj = JSON.parse(data, options ? options.reviver : null)
  } catch (err) {
    if (shouldThrow) {
      err.message = `${file}: ${err.message}`
      throw err
    } else {
      return null
    }
  }

  return obj
}

const readFile = universalify.fromPromise(_readFile)

function readFileSync (file, options = {}) {
  if (typeof options === 'string') {
    options = { encoding: options }
  }

  const fs = options.fs || _fs

  const shouldThrow = 'throws' in options ? options.throws : true

  try {
    let content = fs.readFileSync(file, options)
    content = stripBom(content)
    return JSON.parse(content, options.reviver)
  } catch (err) {
    if (shouldThrow) {
      err.message = `${file}: ${err.message}`
      throw err
    } else {
      return null
    }
  }
}

async function _writeFile (file, obj, options = {}) {
  const fs = options.fs || _fs

  const str = stringify(obj, options)

  await universalify.fromCallback(fs.writeFile)(file, str, options)
}

const writeFile = universalify.fromPromise(_writeFile)

function writeFileSync (file, obj, options = {}) {
  const fs = options.fs || _fs

  const str = stringify(obj, options)
  // not sure if fs.writeFileSync returns anything, but just in case
  return fs.writeFileSync(file, str, options)
}

const jsonfile = {
  readFile,
  readFileSync,
  writeFile,
  writeFileSync
}

module.exports = jsonfile


/***/ }),
/* 38 */
/***/ ((module) => {

function stringify (obj, { EOL = '\n', finalEOL = true, replacer = null, spaces } = {}) {
  const EOF = finalEOL ? EOL : ''
  const str = JSON.stringify(obj, replacer, spaces)

  return str.replace(/\n/g, EOL) + EOF
}

function stripBom (content) {
  // we do this because JSON.parse would convert it to a utf8 string if encoding wasn't specified
  if (Buffer.isBuffer(content)) content = content.toString('utf8')
  return content.replace(/^\uFEFF/, '')
}

module.exports = { stringify, stripBom }


/***/ }),
/* 39 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const { stringify } = __webpack_require__(38)
const { outputFile } = __webpack_require__(40)

async function outputJson (file, data, options = {}) {
  const str = stringify(data, options)

  await outputFile(file, str, options)
}

module.exports = outputJson


/***/ }),
/* 40 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const u = __webpack_require__(5).fromCallback
const fs = __webpack_require__(6)
const path = __webpack_require__(17)
const mkdir = __webpack_require__(18)
const pathExists = __webpack_require__(25).pathExists

function outputFile (file, data, encoding, callback) {
  if (typeof encoding === 'function') {
    callback = encoding
    encoding = 'utf8'
  }

  const dir = path.dirname(file)
  pathExists(dir, (err, itDoes) => {
    if (err) return callback(err)
    if (itDoes) return fs.writeFile(file, data, encoding, callback)

    mkdir.mkdirs(dir, err => {
      if (err) return callback(err)

      fs.writeFile(file, data, encoding, callback)
    })
  })
}

function outputFileSync (file, ...args) {
  const dir = path.dirname(file)
  if (fs.existsSync(dir)) {
    return fs.writeFileSync(file, ...args)
  }
  mkdir.mkdirsSync(dir)
  fs.writeFileSync(file, ...args)
}

module.exports = {
  outputFile: u(outputFile),
  outputFileSync
}


/***/ }),
/* 41 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const { stringify } = __webpack_require__(38)
const { outputFileSync } = __webpack_require__(40)

function outputJsonSync (file, data, options) {
  const str = stringify(data, options)

  outputFileSync(file, str, options)
}

module.exports = outputJsonSync


/***/ }),
/* 42 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = {
  moveSync: __webpack_require__(43)
}


/***/ }),
/* 43 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const fs = __webpack_require__(6)
const path = __webpack_require__(17)
const copySync = __webpack_require__(15).copySync
const removeSync = __webpack_require__(27).removeSync
const mkdirpSync = __webpack_require__(18).mkdirpSync
const stat = __webpack_require__(22)

function moveSync (src, dest, opts) {
  opts = opts || {}
  const overwrite = opts.overwrite || opts.clobber || false

  const { srcStat } = stat.checkPathsSync(src, dest, 'move')
  stat.checkParentPathsSync(src, srcStat, dest, 'move')
  mkdirpSync(path.dirname(dest))
  return doRename(src, dest, overwrite)
}

function doRename (src, dest, overwrite) {
  if (overwrite) {
    removeSync(dest)
    return rename(src, dest, overwrite)
  }
  if (fs.existsSync(dest)) throw new Error('dest already exists.')
  return rename(src, dest, overwrite)
}

function rename (src, dest, overwrite) {
  try {
    fs.renameSync(src, dest)
  } catch (err) {
    if (err.code !== 'EXDEV') throw err
    return moveAcrossDevice(src, dest, overwrite)
  }
}

function moveAcrossDevice (src, dest, overwrite) {
  const opts = {
    overwrite,
    errorOnExist: true
  }
  copySync(src, dest, opts)
  return removeSync(src)
}

module.exports = moveSync


/***/ }),
/* 44 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const u = __webpack_require__(5).fromCallback
module.exports = {
  move: u(__webpack_require__(45))
}


/***/ }),
/* 45 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const fs = __webpack_require__(6)
const path = __webpack_require__(17)
const copy = __webpack_require__(23).copy
const remove = __webpack_require__(27).remove
const mkdirp = __webpack_require__(18).mkdirp
const pathExists = __webpack_require__(25).pathExists
const stat = __webpack_require__(22)

function move (src, dest, opts, cb) {
  if (typeof opts === 'function') {
    cb = opts
    opts = {}
  }

  const overwrite = opts.overwrite || opts.clobber || false

  stat.checkPaths(src, dest, 'move', (err, stats) => {
    if (err) return cb(err)
    const { srcStat } = stats
    stat.checkParentPaths(src, srcStat, dest, 'move', err => {
      if (err) return cb(err)
      mkdirp(path.dirname(dest), err => {
        if (err) return cb(err)
        return doRename(src, dest, overwrite, cb)
      })
    })
  })
}

function doRename (src, dest, overwrite, cb) {
  if (overwrite) {
    return remove(dest, err => {
      if (err) return cb(err)
      return rename(src, dest, overwrite, cb)
    })
  }
  pathExists(dest, (err, destExists) => {
    if (err) return cb(err)
    if (destExists) return cb(new Error('dest already exists.'))
    return rename(src, dest, overwrite, cb)
  })
}

function rename (src, dest, overwrite, cb) {
  fs.rename(src, dest, err => {
    if (!err) return cb()
    if (err.code !== 'EXDEV') return cb(err)
    return moveAcrossDevice(src, dest, overwrite, cb)
  })
}

function moveAcrossDevice (src, dest, overwrite, cb) {
  const opts = {
    overwrite,
    errorOnExist: true
  }
  copy(src, dest, opts, err => {
    if (err) return cb(err)
    return remove(src, cb)
  })
}

module.exports = move


/***/ }),
/* 46 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__express": () => (/* binding */ renderFile),
/* harmony export */   "compile": () => (/* binding */ compile),
/* harmony export */   "compileScope": () => (/* binding */ compileScope),
/* harmony export */   "compileScopeIntoFunction": () => (/* binding */ compileScopeIntoFunction),
/* harmony export */   "compileToString": () => (/* binding */ compileToString),
/* harmony export */   "defaultConfig": () => (/* binding */ defaultConfig),
/* harmony export */   "filters": () => (/* binding */ filters),
/* harmony export */   "getConfig": () => (/* binding */ getConfig),
/* harmony export */   "helpers": () => (/* binding */ helpers),
/* harmony export */   "loadFile": () => (/* binding */ loadFile),
/* harmony export */   "nativeHelpers": () => (/* binding */ nativeHelpers),
/* harmony export */   "parse": () => (/* binding */ parse),
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "renderFile": () => (/* binding */ renderFile),
/* harmony export */   "templates": () => (/* binding */ templates)
/* harmony export */ });
// TODO: allow '-' to trim up until newline. Use [^\S\n\r] instead of \s
// TODO: only include trimLeft polyfill if not in ES6
/* END TYPES */
var promiseImpl = new Function('return this')().Promise;
var asyncFunc = false;
try {
    asyncFunc = new Function('return (async function(){}).constructor')();
}
catch (e) {
    // We shouldn't actually ever have any other errors, but...
    if (!(e instanceof SyntaxError)) {
        throw e;
    }
}
function hasOwnProp(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}
function copyProps(toObj, fromObj, notConfig) {
    for (var key in fromObj) {
        if (hasOwnProp(fromObj, key)) {
            if (fromObj[key] != null &&
                typeof fromObj[key] == 'object' &&
                (key === 'storage' || key === 'prefixes') &&
                !notConfig // not called from Cache.load
            ) {
                // plugins or storage
                // Note: this doesn't merge from initial config!
                // Deep clone instead of assigning
                // TODO: run checks on this
                toObj[key] = copyProps(/*toObj[key] ||*/ {}, fromObj[key]);
            }
            else {
                toObj[key] = fromObj[key];
            }
        }
    }
    return toObj;
}
function trimWS(str, env, wsLeft, wsRight) {
    var leftTrim;
    var rightTrim;
    if (typeof env.autoTrim === 'string') {
        leftTrim = rightTrim = env.autoTrim;
        // Don't need to check if env.autoTrim is false
        // Because leftTrim, rightTrim are initialized as falsy
    }
    else if (Array.isArray(env.autoTrim)) {
        // kinda confusing
        // but _}} will trim the left side of the following string
        leftTrim = env.autoTrim[1];
        rightTrim = env.autoTrim[0];
    }
    if (wsLeft || wsLeft === false) {
        leftTrim = wsLeft;
    }
    if (wsRight || wsRight === false) {
        rightTrim = wsRight;
    }
    if (leftTrim === 'slurp' && rightTrim === 'slurp') {
        return str.trim();
    }
    if (leftTrim === '_' || leftTrim === 'slurp') {
        // console.log('trimming left' + leftTrim)
        // full slurp
        // eslint-disable-next-line no-extra-boolean-cast
        if (!!String.prototype.trimLeft) {
            str = str.trimLeft();
        }
        else {
            str = str.replace(/^[\s\uFEFF\xA0]+/, '');
        }
    }
    else if (leftTrim === '-' || leftTrim === 'nl') {
        // console.log('trimming left nl' + leftTrim)
        // nl trim
        str = str.replace(/^(?:\n|\r|\r\n)/, '');
    }
    if (rightTrim === '_' || rightTrim === 'slurp') {
        // console.log('trimming right' + rightTrim)
        // full slurp
        // eslint-disable-next-line no-extra-boolean-cast
        if (!!String.prototype.trimRight) {
            str = str.trimRight();
        }
        else {
            str = str.replace(/[\s\uFEFF\xA0]+$/, '');
        }
    }
    else if (rightTrim === '-' || rightTrim === 'nl') {
        // console.log('trimming right nl' + rightTrim)
        // nl trim
        str = str.replace(/(?:\n|\r|\r\n)$/, ''); // TODO: make sure this gets \r\n
    }
    return str;
}

/* END TYPES */
var Cacher = /** @class */ (function () {
    function Cacher(cache) {
        this.cache = cache;
    }
    Cacher.prototype.define = function (key, val) {
        this.cache[key] = val;
    };
    Cacher.prototype.get = function (key) {
        // string | array.
        // TODO: allow array of keys to look down
        // TODO: create plugin to allow referencing helpers, filters with dot notation
        return this.cache[key];
    };
    Cacher.prototype.remove = function (key) {
        delete this.cache[key];
    };
    Cacher.prototype.reset = function () {
        this.cache = {};
    };
    Cacher.prototype.load = function (cacheObj) {
        // TODO: this will err with deep objects and `storage` or `plugins` keys.
        // Update Feb 26: EDITED so it shouldn't err
        copyProps(this.cache, cacheObj, true);
    };
    return Cacher;
}());

function setPrototypeOf(obj, proto) {
    if (Object.setPrototypeOf) {
        Object.setPrototypeOf(obj, proto);
    }
    else {
        obj.__proto__ = proto;
    }
}
function SqrlErr(message) {
    var err = new Error(message);
    setPrototypeOf(err, SqrlErr.prototype);
    return err;
}
SqrlErr.prototype = Object.create(Error.prototype, {
    name: { value: 'Squirrelly Error', enumerable: false }
});
// TODO: Class transpilation adds a lot to the bundle size
function ParseErr(message, str, indx) {
    var whitespace = str.slice(0, indx).split(/\n/);
    var lineNo = whitespace.length;
    var colNo = whitespace[lineNo - 1].length + 1;
    message +=
        ' at line ' +
            lineNo +
            ' col ' +
            colNo +
            ':\n\n' +
            '  ' +
            str.split(/\n/)[lineNo - 1] +
            '\n' +
            '  ' +
            Array(colNo).join(' ') +
            '^';
    throw SqrlErr(message);
}

/* END TYPES */
var asyncRegExp = /^async +/;
var templateLitReg = /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})*}|(?!\${)[^\\`])*`/g;
var singleQuoteReg = /'(?:\\[\s\w"'\\`]|[^\n\r'\\])*?'/g;
var doubleQuoteReg = /"(?:\\[\s\w"'\\`]|[^\n\r"\\])*?"/g;
var specialCharsReg = /[.*+\-?^${}()|[\]\\]/g;
function escapeRegExp(string) {
    // From MDN
    return specialCharsReg.test(string)
        ? string.replace(specialCharsReg, '\\$&') // $& means the whole matched string
        : string;
}
function parse(str, env) {
    /* Adding for EJS compatibility */
    if (env.rmWhitespace) {
        // Code taken directly from EJS
        // Have to use two separate replaces here as `^` and `$` operators don't
        // work well with `\r` and empty lines don't work well with the `m` flag.
        // Essentially, this replaces the whitespace at the beginning and end of
        // each line and removes multiple newlines.
        str = str.replace(/[\r\n]+/g, '\n').replace(/^\s+|\s+$/gm, '');
    }
    /* End rmWhitespace option */
    templateLitReg.lastIndex = 0;
    singleQuoteReg.lastIndex = 0;
    doubleQuoteReg.lastIndex = 0;
    var envPrefixes = env.prefixes;
    var prefixes = [
        envPrefixes.h,
        envPrefixes.b,
        envPrefixes.i,
        envPrefixes.r,
        envPrefixes.c,
        envPrefixes.e
    ].reduce(function (accumulator, prefix) {
        if (accumulator && prefix) {
            return accumulator + '|' + escapeRegExp(prefix);
        }
        else if (prefix) {
            // accumulator is empty
            return escapeRegExp(prefix);
        }
        else {
            // prefix and accumulator are both empty strings
            return accumulator;
        }
    }, '');
    var parseCloseReg = new RegExp('([|()]|=>)|' + // powerchars
        '(\'|"|`|\\/\\*)|\\s*((\\/)?(-|_)?' + // comments, strings
        escapeRegExp(env.tags[1]) +
        ')', 'g');
    var tagOpenReg = new RegExp('([^]*?)' + escapeRegExp(env.tags[0]) + '(-|_)?\\s*(' + prefixes + ')?\\s*', 'g');
    var startInd = 0;
    var trimNextLeftWs = false;
    function parseTag(tagOpenIndex, currentType) {
        var currentObj = { f: [] };
        var numParens = 0;
        var currentAttribute = 'c'; // default - Valid values: 'c'=content, 'f'=filter, 'fp'=filter params, 'p'=param, 'n'=name
        if (currentType === 'h' || currentType === 'b' || currentType === 'c') {
            currentAttribute = 'n';
        }
        else if (currentType === 'r') {
            currentObj.raw = true;
            currentType = 'i';
        }
        function addAttrValue(indx) {
            var valUnprocessed = str.slice(startInd, indx);
            // console.log(valUnprocessed)
            var val = valUnprocessed.trim();
            if (currentAttribute === 'f') {
                if (val === 'safe') {
                    currentObj.raw = true;
                }
                else {
                    if (env.async && asyncRegExp.test(val)) {
                        val = val.replace(asyncRegExp, '');
                        currentObj.f.push([val, '', true]);
                    }
                    else {
                        currentObj.f.push([val, '']);
                    }
                }
            }
            else if (currentAttribute === 'fp') {
                currentObj.f[currentObj.f.length - 1][1] += val;
            }
            else if (currentAttribute === 'err') {
                if (val) {
                    var found = valUnprocessed.search(/\S/);
                    ParseErr('invalid syntax', str, startInd + found);
                }
            }
            else {
                // if (currentObj[currentAttribute]) { // TODO make sure no errs
                //   currentObj[currentAttribute] += val
                // } else {
                currentObj[currentAttribute] = val;
                // }
            }
            startInd = indx + 1;
        }
        parseCloseReg.lastIndex = startInd;
        var m;
        // tslint:disable-next-line:no-conditional-assignment
        while ((m = parseCloseReg.exec(str)) !== null) {
            var char = m[1];
            var punctuator = m[2];
            var tagClose = m[3];
            var slash = m[4];
            var wsControl = m[5];
            var i = m.index;
            if (char) {
                // Power character
                if (char === '(') {
                    if (numParens === 0) {
                        if (currentAttribute === 'n') {
                            addAttrValue(i);
                            currentAttribute = 'p';
                        }
                        else if (currentAttribute === 'f') {
                            addAttrValue(i);
                            currentAttribute = 'fp';
                        }
                    }
                    numParens++;
                }
                else if (char === ')') {
                    numParens--;
                    if (numParens === 0 && currentAttribute !== 'c') {
                        // Then it's closing a filter, block, or helper
                        addAttrValue(i);
                        currentAttribute = 'err'; // Reset the current attribute
                    }
                }
                else if (numParens === 0 && char === '|') {
                    addAttrValue(i); // this should actually always be whitespace or empty
                    currentAttribute = 'f';
                }
                else if (char === '=>') {
                    addAttrValue(i);
                    startInd += 1; // this is 2 chars
                    currentAttribute = 'res';
                }
            }
            else if (punctuator) {
                if (punctuator === '/*') {
                    var commentCloseInd = str.indexOf('*/', parseCloseReg.lastIndex);
                    if (commentCloseInd === -1) {
                        ParseErr('unclosed comment', str, m.index);
                    }
                    parseCloseReg.lastIndex = commentCloseInd + 2; // since */ is 2 characters, and we're using indexOf rather than a RegExp
                }
                else if (punctuator === "'") {
                    singleQuoteReg.lastIndex = m.index;
                    var singleQuoteMatch = singleQuoteReg.exec(str);
                    if (singleQuoteMatch) {
                        parseCloseReg.lastIndex = singleQuoteReg.lastIndex;
                    }
                    else {
                        ParseErr('unclosed string', str, m.index);
                    }
                }
                else if (punctuator === '"') {
                    doubleQuoteReg.lastIndex = m.index;
                    var doubleQuoteMatch = doubleQuoteReg.exec(str);
                    if (doubleQuoteMatch) {
                        parseCloseReg.lastIndex = doubleQuoteReg.lastIndex;
                    }
                    else {
                        ParseErr('unclosed string', str, m.index);
                    }
                }
                else if (punctuator === '`') {
                    templateLitReg.lastIndex = m.index;
                    var templateLitMatch = templateLitReg.exec(str);
                    if (templateLitMatch) {
                        parseCloseReg.lastIndex = templateLitReg.lastIndex;
                    }
                    else {
                        ParseErr('unclosed string', str, m.index);
                    }
                }
            }
            else if (tagClose) {
                addAttrValue(i);
                startInd = i + m[0].length;
                tagOpenReg.lastIndex = startInd;
                // console.log('tagClose: ' + startInd)
                trimNextLeftWs = wsControl;
                if (slash && currentType === 'h') {
                    currentType = 's';
                } // TODO throw err
                currentObj.t = currentType;
                return currentObj;
            }
        }
        ParseErr('unclosed tag', str, tagOpenIndex);
        return currentObj; // To prevent TypeScript from erroring
    }
    function parseContext(parentObj, firstParse) {
        parentObj.b = []; // assume there will be blocks // TODO: perf optimize this
        parentObj.d = [];
        var lastBlock = false;
        var buffer = [];
        function pushString(strng, shouldTrimRightOfString) {
            if (strng) {
                // if string is truthy it must be of type 'string'
                // TODO: benchmark replace( /(\\|')/g, '\\$1')
                strng = trimWS(strng, env, trimNextLeftWs, // this will only be false on the first str, the next ones will be null or undefined
                shouldTrimRightOfString);
                if (strng) {
                    // replace \ with \\, ' with \'
                    strng = strng.replace(/\\|'/g, '\\$&').replace(/\r\n|\n|\r/g, '\\n');
                    // we're going to convert all CRLF to LF so it doesn't take more than one replace
                    buffer.push(strng);
                }
            }
        }
        // Random TODO: parentObj.b doesn't need to have t: #
        var tagOpenMatch;
        // tslint:disable-next-line:no-conditional-assignment
        while ((tagOpenMatch = tagOpenReg.exec(str)) !== null) {
            var precedingString = tagOpenMatch[1];
            var shouldTrimRightPrecedingString = tagOpenMatch[2];
            var prefix = tagOpenMatch[3] || '';
            var prefixType;
            for (var key in envPrefixes) {
                if (envPrefixes[key] === prefix) {
                    prefixType = key;
                    break;
                }
            }
            pushString(precedingString, shouldTrimRightPrecedingString);
            startInd = tagOpenMatch.index + tagOpenMatch[0].length;
            if (!prefixType) {
                ParseErr('unrecognized tag type: ' + prefix, str, startInd);
            }
            var currentObj = parseTag(tagOpenMatch.index, prefixType);
            // ===== NOW ADD THE OBJECT TO OUR BUFFER =====
            var currentType = currentObj.t;
            if (currentType === 'h') {
                var hName = currentObj.n || '';
                if (env.async && asyncRegExp.test(hName)) {
                    currentObj.a = true;
                    currentObj.n = hName.replace(asyncRegExp, '');
                }
                currentObj = parseContext(currentObj); // currentObj is the parent object
                buffer.push(currentObj);
            }
            else if (currentType === 'c') {
                // tag close
                if (parentObj.n === currentObj.n) {
                    if (lastBlock) {
                        // If there's a previous block
                        lastBlock.d = buffer;
                        parentObj.b.push(lastBlock);
                    }
                    else {
                        parentObj.d = buffer;
                    }
                    // console.log('parentObj: ' + JSON.stringify(parentObj))
                    return parentObj;
                }
                else {
                    ParseErr("Helper start and end don't match", str, tagOpenMatch.index + tagOpenMatch[0].length);
                }
            }
            else if (currentType === 'b') {
                // block
                // TODO: make sure async stuff inside blocks are recognized
                if (lastBlock) {
                    // If there's a previous block
                    lastBlock.d = buffer;
                    parentObj.b.push(lastBlock);
                }
                else {
                    parentObj.d = buffer;
                }
                var blockName = currentObj.n || '';
                if (env.async && asyncRegExp.test(blockName)) {
                    currentObj.a = true;
                    currentObj.n = blockName.replace(asyncRegExp, '');
                }
                lastBlock = currentObj; // Set the 'lastBlock' object to the value of the current block
                buffer = [];
            }
            else if (currentType === 's') {
                var selfClosingHName = currentObj.n || '';
                if (env.async && asyncRegExp.test(selfClosingHName)) {
                    currentObj.a = true;
                    currentObj.n = selfClosingHName.replace(asyncRegExp, '');
                }
                buffer.push(currentObj);
            }
            else {
                buffer.push(currentObj);
            }
            // ===== DONE ADDING OBJECT TO BUFFER =====
        }
        if (firstParse) {
            pushString(str.slice(startInd, str.length), false);
            parentObj.d = buffer;
        }
        else {
            throw SqrlErr('unclosed helper "' + parentObj.n + '"');
            // It should have returned by now
        }
        return parentObj;
    }
    var parseResult = parseContext({ f: [] }, true);
    // console.log(JSON.stringify(parseResult))
    if (env.plugins) {
        for (var i = 0; i < env.plugins.length; i++) {
            var plugin = env.plugins[i];
            if (plugin.processAST) {
                parseResult.d = plugin.processAST(parseResult.d, env);
            }
        }
    }
    return parseResult.d; // Parse the very outside context
}

// import SqrlErr from './err'
/* END TYPES */
function compileToString(str, env) {
    var buffer = parse(str, env);
    var res = "var tR='';" +
        (env.useWith ? 'with(' + env.varName + '||{}){' : '') +
        compileScope(buffer, env) +
        'if(cb){cb(null,tR)} return tR' +
        (env.useWith ? '}' : '');
    if (env.plugins) {
        for (var i = 0; i < env.plugins.length; i++) {
            var plugin = env.plugins[i];
            if (plugin.processFnString) {
                res = plugin.processFnString(res, env);
            }
        }
    }
    return res;
    // TODO: is `return cb()` necessary, or could we just do `cb()`
}
function filter(str, filters) {
    for (var i = 0; i < filters.length; i++) {
        var name = filters[i][0];
        var params = filters[i][1];
        var isFilterAsync = filters[i][2];
        // if (isFilterAsync && !env.async) {
        //   throw SqrlErr("Async filter '" + name + "' in non-async env")
        // }
        // Let the JS compiler do this, compile() will catch it
        str = (isFilterAsync ? 'await ' : '') + "c.l('F','" + name + "')(" + str;
        if (params) {
            str += ',' + params;
        }
        str += ')';
    }
    return str;
}
// TODO: Use type intersections for TemplateObject, etc.
// so I don't have to make properties mandatory
function compileHelper(env, res, descendants, params, isAsync, name) {
    var ret = '{exec:' +
        (isAsync ? 'async ' : '') +
        compileScopeIntoFunction(descendants, res, env) +
        ',params:[' +
        params +
        ']';
    if (name) {
        ret += ",name:'" + name + "'";
    }
    if (isAsync) {
        ret += ',async:true';
    }
    ret += '}';
    return ret;
}
function compileBlocks(blocks, env) {
    var ret = '[';
    for (var i = 0; i < blocks.length; i++) {
        var block = blocks[i];
        ret += compileHelper(env, block.res || '', block.d, block.p || '', block.a, block.n);
        if (i < blocks.length) {
            ret += ',';
        }
    }
    ret += ']';
    return ret;
}
function compileScopeIntoFunction(buff, res, env) {
    return 'function(' + res + "){var tR='';" + compileScope(buff, env) + 'return tR}';
}
function compileScope(buff, env) {
    var i = 0;
    var buffLength = buff.length;
    var returnStr = '';
    for (i; i < buffLength; i++) {
        var currentBlock = buff[i];
        if (typeof currentBlock === 'string') {
            var str = currentBlock;
            // we know string exists
            returnStr += "tR+='" + str + "';";
        }
        else {
            var type = currentBlock.t; // h, s, e, i
            var content = currentBlock.c || '';
            var filters = currentBlock.f;
            var name = currentBlock.n || '';
            var params = currentBlock.p || '';
            var res = currentBlock.res || '';
            var blocks = currentBlock.b;
            var isAsync = !!currentBlock.a; // !! is to booleanize it
            // if (isAsync && !env.async) {
            //   throw SqrlErr("Async block or helper '" + name + "' in non-async env")
            // }
            // Let compiler do this
            if (type === 'i') {
                if (env.defaultFilter) {
                    content = "c.l('F','" + env.defaultFilter + "')(" + content + ')';
                }
                var filtered = filter(content, filters);
                if (!currentBlock.raw && env.autoEscape) {
                    filtered = "c.l('F','e')(" + filtered + ')';
                }
                returnStr += 'tR+=' + filtered + ';';
                // reference
            }
            else if (type === 'h') {
                // helper
                if (env.storage.nativeHelpers.get(name)) {
                    returnStr += env.storage.nativeHelpers.get(name)(currentBlock, env);
                }
                else {
                    var helperReturn = (isAsync ? 'await ' : '') +
                        "c.l('H','" +
                        name +
                        "')(" +
                        compileHelper(env, res, currentBlock.d, params, isAsync);
                    if (blocks) {
                        helperReturn += ',' + compileBlocks(blocks, env);
                    }
                    else {
                        helperReturn += ',[]';
                    }
                    helperReturn += ',c)';
                    returnStr += 'tR+=' + filter(helperReturn, filters) + ';';
                }
            }
            else if (type === 's') {
                // self-closing helper
                returnStr +=
                    'tR+=' +
                        filter((isAsync ? 'await ' : '') + "c.l('H','" + name + "')({params:[" + params + ']},[],c)', filters) +
                        ';';
            }
            else if (type === 'e') {
                // execute
                returnStr += content + '\n';
            }
        }
    }
    return returnStr;
}

function errWithBlocksOrFilters(name, blocks, // false means don't check
filters, native) {
    if (blocks && blocks.length > 0) {
        throw SqrlErr((native ? 'Native' : '') + "Helper '" + name + "' doesn't accept blocks");
    }
    if (filters && filters.length > 0) {
        throw SqrlErr((native ? 'Native' : '') + "Helper '" + name + "' doesn't accept filters");
    }
}
/* ASYNC LOOP FNs */
function asyncArrLoop(arr, index, fn, res, cb) {
    fn(arr[index], index).then(function (val) {
        res += val;
        if (index === arr.length - 1) {
            cb(res);
        }
        else {
            asyncArrLoop(arr, index + 1, fn, res, cb);
        }
    });
}
function asyncObjLoop(obj, keys, index, fn, res, cb) {
    fn(keys[index], obj[keys[index]]).then(function (val) {
        res += val;
        if (index === keys.length - 1) {
            cb(res);
        }
        else {
            asyncObjLoop(obj, keys, index + 1, fn, res, cb);
        }
    });
}
var escMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
};
function replaceChar(s) {
    return escMap[s];
}
function XMLEscape(str) {
    // To deal with XSS. Based on Escape implementations of Mustache.JS and Marko, then customized.
    var newStr = String(str);
    if (/[&<>"']/.test(newStr)) {
        return newStr.replace(/[&<>"']/g, replaceChar);
    }
    else {
        return newStr;
    }
}

/* END TYPES */
var templates = new Cacher({});
/* ASYNC LOOP FNs */
var helpers = new Cacher({
    each: function (content, blocks) {
        var res = '';
        var arr = content.params[0];
        errWithBlocksOrFilters('each', blocks, false);
        if (content.async) {
            return new Promise(function (resolve) {
                asyncArrLoop(arr, 0, content.exec, res, resolve);
            });
        }
        else {
            for (var i = 0; i < arr.length; i++) {
                res += content.exec(arr[i], i);
            }
            return res;
        }
    },
    foreach: function (content, blocks) {
        var obj = content.params[0];
        errWithBlocksOrFilters('foreach', blocks, false);
        if (content.async) {
            return new Promise(function (resolve) {
                asyncObjLoop(obj, Object.keys(obj), 0, content.exec, '', resolve);
            });
        }
        else {
            var res = '';
            for (var key in obj) {
                if (!hasOwnProp(obj, key))
                    continue;
                res += content.exec(key, obj[key]); // todo: check on order
            }
            return res;
        }
    },
    include: function (content, blocks, config) {
        errWithBlocksOrFilters('include', blocks, false);
        var template = config.storage.templates.get(content.params[0]);
        if (!template) {
            throw SqrlErr('Could not fetch template "' + content.params[0] + '"');
        }
        return template(content.params[1], config);
    },
    extends: function (content, blocks, config) {
        var data = content.params[1] || {};
        data.content = content.exec();
        for (var i = 0; i < blocks.length; i++) {
            var currentBlock = blocks[i];
            data[currentBlock.name] = currentBlock.exec();
        }
        var template = config.storage.templates.get(content.params[0]);
        if (!template) {
            throw SqrlErr('Could not fetch template "' + content.params[0] + '"');
        }
        return template(data, config);
    },
    useScope: function (content, blocks) {
        errWithBlocksOrFilters('useScope', blocks, false);
        return content.exec(content.params[0]);
    }
});
var nativeHelpers = new Cacher({
    if: function (buffer, env) {
        errWithBlocksOrFilters('if', false, buffer.f, true);
        var returnStr = 'if(' + buffer.p + '){' + compileScope(buffer.d, env) + '}';
        if (buffer.b) {
            for (var i = 0; i < buffer.b.length; i++) {
                var currentBlock = buffer.b[i];
                if (currentBlock.n === 'else') {
                    returnStr += 'else{' + compileScope(currentBlock.d, env) + '}';
                }
                else if (currentBlock.n === 'elif') {
                    returnStr += 'else if(' + currentBlock.p + '){' + compileScope(currentBlock.d, env) + '}';
                }
            }
        }
        return returnStr;
    },
    try: function (buffer, env) {
        errWithBlocksOrFilters('try', false, buffer.f, true);
        if (!buffer.b || buffer.b.length !== 1 || buffer.b[0].n !== 'catch') {
            throw SqrlErr("native helper 'try' only accepts 1 block, 'catch'");
        }
        var returnStr = 'try{' + compileScope(buffer.d, env) + '}';
        var currentBlock = buffer.b[0];
        returnStr +=
            'catch' +
                (currentBlock.res ? '(' + currentBlock.res + ')' : '') +
                '{' +
                compileScope(currentBlock.d, env) +
                '}';
        return returnStr;
    },
    block: function (buffer, env) {
        errWithBlocksOrFilters('block', buffer.b, buffer.f, true);
        var returnStr = 'if(!' +
            env.varName +
            '[' +
            buffer.p +
            ']){tR+=(' +
            compileScopeIntoFunction(buffer.d, '', env) +
            ')()}else{tR+=' +
            env.varName +
            '[' +
            buffer.p +
            ']}';
        return returnStr;
    }
});
var filters = new Cacher({ e: XMLEscape });

/* END TYPES */
var defaultConfig = {
    varName: 'it',
    autoTrim: [false, 'nl'],
    autoEscape: true,
    defaultFilter: false,
    tags: ['{{', '}}'],
    l: function (container, name) {
        if (container === 'H') {
            var hRet = this.storage.helpers.get(name);
            if (hRet) {
                return hRet;
            }
            else {
                throw SqrlErr("Can't find helper '" + name + "'");
            }
        }
        else if (container === 'F') {
            var fRet = this.storage.filters.get(name);
            if (fRet) {
                return fRet;
            }
            else {
                throw SqrlErr("Can't find filter '" + name + "'");
            }
        }
    },
    async: false,
    storage: {
        helpers: helpers,
        nativeHelpers: nativeHelpers,
        filters: filters,
        templates: templates
    },
    prefixes: {
        h: '@',
        b: '#',
        i: '',
        r: '*',
        c: '/',
        e: '!'
    },
    cache: false,
    plugins: [],
    useWith: false
};
defaultConfig.l.bind(defaultConfig);
function getConfig(override, baseConfig) {
    // TODO: run more tests on this
    var res = {}; // Linked
    copyProps(res, defaultConfig); // Creates deep clone of res, 1 layer deep
    if (baseConfig) {
        copyProps(res, baseConfig);
    }
    if (override) {
        copyProps(res, override);
    }
    res.l.bind(res);
    return res;
}

/* END TYPES */
function compile(str, env) {
    var options = getConfig(env || {});
    var ctor = Function; // constructor
    /* ASYNC HANDLING */
    // The below code is modified from mde/ejs. All credit should go to them.
    if (options.async) {
        // Have to use generated function for this, since in envs without support,
        // it breaks in parsing
        if (asyncFunc) {
            ctor = asyncFunc;
        }
        else {
            throw SqrlErr("This environment doesn't support async/await");
        }
    }
    /* END ASYNC HANDLING */
    try {
        return new ctor(options.varName, 'c', // SqrlConfig
        'cb', // optional callback
        compileToString(str, options)); // eslint-disable-line no-new-func
    }
    catch (e) {
        if (e instanceof SyntaxError) {
            throw SqrlErr('Bad template syntax\n\n' +
                e.message +
                '\n' +
                Array(e.message.length + 1).join('=') +
                '\n' +
                compileToString(str, options));
        }
        else {
            throw e;
        }
    }
}

var fs = __webpack_require__(7);
var path = __webpack_require__(17);
var _BOM = /^\uFEFF/;
/* END TYPES */
/**
 * Get the path to the included file from the parent file path and the
 * specified path.
 *
 * @param {String}  name       specified path
 * @param {String}  parentfile parent file path
 * @param {Boolean} [isDir=false] whether parent file path is a directory
 * @return {String}
 */
function getWholeFilePath(name, parentfile, isDirectory) {
    var includePath = path.resolve(isDirectory ? parentfile : path.dirname(parentfile), // returns directory the parent file is in
    name // file
    );
    var ext = path.extname(name);
    if (!ext) {
        includePath += '.sqrl';
    }
    return includePath;
}
/**
 * Get the path to the included file by Options
 *
 * @param  {String}  path    specified path
 * @param  {Options} options compilation options
 * @return {String}
 */
function getPath(path, options) {
    var includePath;
    var filePath;
    var views = options.views;
    var match = /^[A-Za-z]+:\\|^\//.exec(path);
    // Abs path
    if (match && match.length) {
        includePath = getWholeFilePath(path.replace(/^\/*/, ''), options.root || '/', true);
    }
    else {
        // Relative paths
        // Look relative to a passed filename first
        if (options.filename) {
            filePath = getWholeFilePath(path, options.filename);
            if (fs.existsSync(filePath)) {
                includePath = filePath;
            }
        }
        // Then look in any views directories
        if (!includePath) {
            if (Array.isArray(views) &&
                views.some(function (v) {
                    filePath = getWholeFilePath(path, v, true);
                    return fs.existsSync(filePath);
                })) {
                includePath = filePath;
            }
        }
        if (!includePath) {
            throw SqrlErr('Could not find the include file "' + path + '"');
        }
    }
    return includePath;
}
function readFile(filePath) {
    return fs
        .readFileSync(filePath)
        .toString()
        .replace(_BOM, ''); // TODO: is replacing BOM's necessary?
}
function loadFile(filePath, options) {
    var config = getConfig(options);
    var template = readFile(filePath);
    try {
        var compiledTemplate = compile(template, config);
        config.storage.templates.define(config.filename, compiledTemplate);
        return compiledTemplate;
    }
    catch (e) {
        throw SqrlErr('Loading file: ' + filePath + ' failed');
    }
}

// express is set like: app.engine('html', require('squirrelly').renderFile)
/* END TYPES */
/**
 * Get the template from a string or a file, either compiled on-the-fly or
 * read from cache (if enabled), and cache the template if needed.
 *
 * If `options.cache` is true, this function reads the file from
 * `options.filename` so it must be set prior to calling this function.
 *
 * @param {Options} options   compilation options
 * @param {String} [template] template source
 * @return {(TemplateFunction|ClientFunction)}
 * Depending on the value of `options.client`, either type might be returned.
 * @static
 */
function handleCache(options) {
    var filename = options.filename;
    if (options.cache) {
        var func = options.storage.templates.get(filename);
        if (func) {
            return func;
        }
        else {
            return loadFile(filename, options);
        }
    }
    return compile(readFile(filename), options);
}
/**
 * Try calling handleCache with the given options and data and call the
 * callback with the result. If an error occurs, call the callback with
 * the error. Used by renderFile().
 *
 * @param {Options} options    compilation options
 * @param {Object} data        template data
 * @param {RenderFileCallback} cb callback
 * @static
 */
function tryHandleCache(options, data, cb) {
    var result;
    if (!cb) {
        // No callback, try returning a promise
        if (typeof promiseImpl === 'function') {
            return new promiseImpl(function (resolve, reject) {
                try {
                    result = handleCache(options)(data, options);
                    resolve(result);
                }
                catch (err) {
                    reject(err);
                }
            });
        }
        else {
            throw SqrlErr("Please provide a callback function, this env doesn't support Promises");
        }
    }
    else {
        try {
            handleCache(options)(data, options, cb);
        }
        catch (err) {
            return cb(err);
        }
    }
}
/**
 * Get the template function.
 *
 * If `options.cache` is `true`, then the template is cached.
 *
 * @param {String}  path    path for the specified file
 * @param {Options} options compilation options
 * @return {(TemplateFunction|ClientFunction)}
 * Depending on the value of `options.client`, either type might be returned
 * @static
 */
function includeFile(path, options) {
    // the below creates a new options object, using the parent filepath of the old options object and the path
    var newFileOptions = getConfig({ filename: getPath(path, options) }, options);
    // TODO: make sure properties are currectly copied over
    return handleCache(newFileOptions);
}
function renderFile(filename, data, cb) {
    data = data || {};
    var Config = getConfig(data);
    // TODO: make sure above doesn't error. We do set filename down below
    if (data.settings) {
        // Pull a few things from known locations
        if (data.settings.views) {
            Config.views = data.settings.views;
        }
        if (data.settings['view cache']) {
            Config.cache = true;
        }
        // Undocumented after Express 2, but still usable, esp. for
        // items that are unsafe to be passed along with data, like `root`
        var viewOpts = data.settings['view options'];
        if (viewOpts) {
            copyProps(Config, viewOpts);
        }
    }
    Config.filename = filename; // Make sure filename is right
    return tryHandleCache(Config, data, cb);
}

/* END TYPES */
function includeFileHelper(content, blocks, config) {
    if (blocks && blocks.length > 0) {
        throw SqrlErr("Helper 'includeFile' doesn't accept blocks");
    }
    return includeFile(content.params[0], config)(content.params[1], config);
}
function extendsFileHelper(content, blocks, config) {
    var data = content.params[1] || {};
    data.content = content.exec();
    for (var i = 0; i < blocks.length; i++) {
        var currentBlock = blocks[i];
        data[currentBlock.name] = currentBlock.exec();
    }
    return includeFile(content.params[0], config)(data, config);
}

/* END TYPES */
function handleCache$1(template, options) {
    var templateFunc;
    if (options.cache && options.name && options.storage.templates.get(options.name)) {
        return options.storage.templates.get(options.name);
    }
    if (typeof template === 'function') {
        templateFunc = template;
    }
    else {
        templateFunc = compile(template, options);
    }
    if (options.cache && options.name) {
        options.storage.templates.define(options.name, templateFunc);
    }
    return templateFunc;
}
function render(template, data, env, cb) {
    var options = getConfig(env || {});
    if (options.async) {
        var result;
        if (!cb) {
            // No callback, try returning a promise
            if (typeof promiseImpl === 'function') {
                return new promiseImpl(function (resolve, reject) {
                    try {
                        result = handleCache$1(template, options)(data, options);
                        resolve(result);
                    }
                    catch (err) {
                        reject(err);
                    }
                });
            }
            else {
                throw SqrlErr("Please provide a callback function, this env doesn't support Promises");
            }
        }
        else {
            try {
                handleCache$1(template, options)(data, options, cb);
            }
            catch (err) {
                return cb(err);
            }
        }
    }
    else {
        return handleCache$1(template, options)(data, options);
    }
}

/* Export file stuff */
/* END TYPES */
helpers.define('includeFile', includeFileHelper);
helpers.define('extendsFile', extendsFileHelper);


//# sourceMappingURL=squirrelly.es.js.map


/***/ }),
/* 47 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.openDialogForFolder = void 0;
const vscode_1 = __webpack_require__(1);
const openDialogForFolder = () => __awaiter(void 0, void 0, void 0, function* () {
    const options = {
        canSelectFiles: false,
        canSelectFolders: true,
        canSelectMany: false,
    };
    const result = yield vscode_1.window.showOpenDialog(Object.assign(options));
    if (result && result.length) {
        return Promise.resolve(result[0]);
    }
    else {
        return Promise.reject();
    }
});
exports.openDialogForFolder = openDialogForFolder;


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deactivate = exports.activate = void 0;
const vscode = __webpack_require__(1);
const loopCreator_1 = __webpack_require__(2);
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    const loopCreator = new loopCreator_1.LoopCreator(context);
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    let createLoopCommand = vscode.commands.registerCommand("loop-development-kit.createLoop", () => {
        loopCreator.openCreateLoopWebview();
    });
    context.subscriptions.push(createLoopCommand);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=extension.js.map