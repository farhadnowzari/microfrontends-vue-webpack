export default class NotificationModel {
    header!: string;
    description: string | null;

    constructor(header: string, description?: string) {
        this.header = header;
        this.description = description || null;
    }
}