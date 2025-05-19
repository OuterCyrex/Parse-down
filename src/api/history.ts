import {BaseDirectory, create, readTextFile} from "@tauri-apps/plugin-fs";

export const __writeFileHistory =  async (json: string): Promise<void> => {
    const file = await create('files.json', {
        baseDir: BaseDirectory.AppData,
    })
    await file.write(new TextEncoder().encode(json));
    await file.close();
}

export const __readFileHistory = async (): Promise<string> => {
    return readTextFile('files.json', {
        baseDir: BaseDirectory.AppData,
    })
}
