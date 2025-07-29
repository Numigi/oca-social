/** @odoo-module **/

import { Message } from "@mail/components/message/message";
import { patch } from "@web/core/utils/patch";

patch(Message.prototype, "mail_full_expand.Message", {
    async _onClickMessageFullExpand(ev) {
        ev.stopPropagation();
        const action = await this.env.services.action.loadAction("mail_full_expand.mail_message_action");
        action.res_id = this.messageView.message.id;
        this.env.services.action.doAction(action);
    },
});
