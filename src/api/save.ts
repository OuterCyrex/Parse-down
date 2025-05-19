import { save } from '@tauri-apps/plugin-dialog';
import { writeFile } from '@tauri-apps/plugin-fs';

export const saveAsMarkdown = async (content: string): Promise<void> => {
    const path = await save({
        title: "保存 Markdown 文件至",
        filters: [
            {
                name: '',
                extensions: ['md', 'markdown'],
            },
        ],
    })
    if (path === null) return

    await writeFile(path, new TextEncoder().encode(content))
}

export const newMarkdown = () => {

}
