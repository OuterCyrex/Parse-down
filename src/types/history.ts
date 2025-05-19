import {__readFileHistory, __writeFileHistory} from "../api/history.ts";


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

export class fileHistory {
    items: Array<fileInfo>
    constructor() {
        this.items = new Array<fileInfo>()
    }

    readFileHistory =  async (): Promise<void> => {
        const json = await __readFileHistory()
        this.items = JSON.parse(json) as Array<fileInfo>
    }

    writeFileHistory = async (): Promise<void> => {
        return __writeFileHistory(JSON.stringify(this.items, null, 2))
    }

    add(filePath: string): void {
        this.remove(filePath)

        if (this.items.length >= 20) this.items.pop()

        this.items.push(new FileInfo(filePath))
    }

    filter(keyWords: string): Array<fileInfo> {
        return this.items.filter(item => item.filePath.includes(keyWords))
    }

    remove(filePath: string) {
        this.items = this.items.filter(item => item.filePath !== filePath)
    }

    last(): fileInfo {
        return this.items[this.items.length - 1]
    }
}
