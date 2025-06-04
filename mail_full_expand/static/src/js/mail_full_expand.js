/** @odoo-module */

import { Component, onMounted } from "@odoo/owl";
import { useService } from "@web/core/utils/hooks";
import { registry } from "@web/core/registry";

export class UrlAttachmentList extends Component {
    setup() {
        this.orm = useService("orm");
        this.model = this.props.model;
        this.resId = this.props.resId;

        onMounted(() => this.loadAttachments());
    }

    async loadAttachments() {
        if (!this.resId || typeof this.resId === "string" && this.resId.startsWith("virtual_")) {
            return;
        }

        const attachments = await this.orm.searchRead("ir.attachment", [
            ["res_model", "=", this.model],
            ["res_id", "=", this.resId],
            ["type", "=", "url"],
        ], ["name", "url", "create_date"]);

        this.attachments = attachments.map(att => ({
            ...att,
            formatted_date: att.create_date ? (new Date(att.create_date)).toLocaleDateString() : '',
        }));

        this.render();  
    }
}
UrlAttachmentList.template = "document_url_chatter_list.UrlAttachmentList";
