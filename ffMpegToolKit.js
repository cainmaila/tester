/**
 * FFMpeg轉檔工具
 * @namespace FFMpegToolKit
 * @type {Object}
 */

const logPlugin = require('log-plugin')
const LOGME = 'ffMpegToolKit'
const log = logPlugin.getInfo(LOGME)
const loge = logPlugin.getError(LOGME)
const Ffmpeg = require('fluent-ffmpeg')
if (process.env.OS === 'win') {
    log('Ffmpeg.setFfmpegPath( D:/ffmpeg/bin/ffmpeg.exe )')
    Ffmpeg.setFfmpegPath('D:/ffmpeg/bin/ffmpeg.exe')
    Ffmpeg.setFfprobePath('D:/ffmpeg/bin/ffprobe.exe')
}


module.exports = {
    /**
     * h360 To Mp4
     * @memberof FFMpegToolKit
     * @param  {String} zipkey      zipkey
     * @param  {String} h360DirPath h360 Dir Path
     * @return {Promise}            Promise(mp4 path)
     */
    h360ToMp4(zipkey, h360DirPath) {
        return new Promise((resolve, reject) => {
            Ffmpeg(h360DirPath)
                .inputFPS(30)
                .withSize('720x480')
                .autopad()
                .on('start', function(commandLine) {
                    log('Spawned Ffmpeg with command: ' + commandLine)
                })
                .on('error', function(err) {
                    loge('An error occurred: ' + err.message)
                    reject(err)
                })
                .on('end', function() {
                    log('Merging finished !')
                    resolve(zipkey + '.mp4')
                })
                .save(zipkey + '.mp4')
        })
    },

    /**
     * mp4 Merge
     * @memberof FFMpegToolKit
     * @param  {String} mp4List  mp4 List
     * @param  {String} fileName Merge mp4 fileName
     * @return {Promise}         Promise(Merge mp4 file path)
     */
    mp4Merge(mp4List, fileName) {
        let ffmpegCom = new Ffmpeg();
        while (mp4List.length > 0) {
            ffmpegCom.input(mp4List.shift())
        }
        return new Promise((resolve, reject) => {
            ffmpegCom
                .on('start', function(commandLine) {
                    log('Spawned Ffmpeg with command: ' + commandLine)
                })
                .on('error', function(err) {
                    loge('An error occurred: ' + err.message)
                    reject(err)
                })
                .on('end', function() {
                    log('Merging finished !')
                    resolve('pcx/' + fileName)
                })
                .mergeToFile('pcx/' + fileName, 'pcx')
        })
    },

    /**
     * h360 Merge Mp4
     * @param  {Array} h360List  h360 path List
     * @param  {String} fileName Merge Mp4 file Name
     * @return {Promise}         Promise
     */
    async h360MergeMp4(h360List, fileName) {
        let key = 0
        let mp4List = []
        while (h360List.length > 0) {
            key += 1
            mp4List.push(await this.h360ToMp4('' + key, h360List.shift()))
        }
        return this.mp4Merge(mp4List, fileName)
    }

}
