import { LinkList } from 'js-sdsl'

interface fileInfo {
    openTime: number
    filePath: string
    fileName: string
}

export class FileInfo implements fileInfo {
    openTime: number
    filePath: string
    fileName: string

    constructor(filePath: string) {
        this.openTime = Date.now()
        this.filePath = filePath
        this.fileName = filePath.substring(filePath.lastIndexOf('/') + 1)
    }
}

export default class fileHistory {
    items: LinkList<fileInfo>
    constructor() {
        this.items = new LinkList<fileInfo>()
    }

    add(filePath: string): void {
        if (this.items.length >= 20) this.items.popFront()

        this.items.forEach((item, index) => {
            item.filePath === filePath && this.items.eraseElementByPos(index)
        })

        this.items.pushBack(new FileInfo(filePath))
    }

    filter(keyWords: string): LinkList<fileInfo> {
        let result = new LinkList<fileInfo>()
        this.items.forEach(item => {
            (item.filePath.includes(keyWords) || item.fileName.includes(keyWords)) && result.pushBack(item)
        })
        return result
    }

    /** remove 删除当前文件历史中的对应 filePath 的信息
     * 若文件信息存在并删除，则返回 true， 否则返回 false */
    remove(filePath: string): boolean {
        const formerLength = this.items.length

        this.items.forEach((item, index) => {
            if (item.filePath === filePath) {
                this.items.eraseElementByPos(index)
            }
        })

        return !(formerLength === this.items.length)
    }
}
